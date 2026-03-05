const fs = require('fs');
const path = require('path');
const https = require('https');

// A tiny helper to translate using Google Translate free endpoint
function translateText(text, targetLang) {
  return new Promise((resolve, reject) => {
    // Break large text if needed? Usually single sentences.
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed && parsed[0]) {
            const translated = parsed[0].map(x => x[0]).join('');
            resolve(translated);
          } else {
            resolve(text);
          }
        } catch (e) {
          resolve(text);
        }
      });
    }).on('error', (e) => resolve(text)); // fallback to original on error
  });
}

const translatableStringKeys = ['description', 'text', 'explanation', 'prompt', 'hint', 'title', 'right', 'intro', 'content'];
const translatableArrayKeys = ['hints', 'options', 'items', 'headers'];

// Rate limiting state
let promiseChain = Promise.resolve();

// Delay helper
const delay = ms => new Promise(res => setTimeout(res, ms));

async function translateObject(obj, targetLang, isRow = false) {
  if (typeof obj === 'string') {
    if (isRow) { // table row strings
      promiseChain = promiseChain.then(() => delay(100)).then(() => translateText(obj, targetLang));
      return promiseChain;
    }
    return obj;
  }
  
  if (Array.isArray(obj)) {
    const newArr = [];
    for (const item of obj) {
      if (typeof item === 'string' && isRow) { // Used for table rows matrices
        promiseChain = promiseChain.then(() => delay(100)).then(() => translateText(item, targetLang));
        newArr.push(await promiseChain);
      } else if (Array.isArray(item) && isRow) { // Rows is array of arrays
         const subArr = [];
         for(const sub of item) {
             subArr.push(await translateObject(sub, targetLang, true));
         }
         newArr.push(subArr);
      } else {
        newArr.push(await translateObject(item, targetLang));
      }
    }
    return newArr;
  }
  
  if (obj && typeof obj === 'object') {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && translatableStringKeys.includes(key)) {
        promiseChain = promiseChain.then(() => delay(100)).then(() => translateText(value, targetLang));
        newObj[key] = await promiseChain;
      } else if (Array.isArray(value) && translatableArrayKeys.includes(key)) {
        const newArr = [];
        for (const item of value) {
          if (typeof item === 'string') {
             promiseChain = promiseChain.then(() => delay(100)).then(() => translateText(item, targetLang));
             newArr.push(await promiseChain);
          } else {
             newArr.push(await translateObject(item, targetLang));
          }
        }
        newObj[key] = newArr;
      } else if (key === 'rows' && Array.isArray(value)) {
         newObj[key] = await translateObject(value, targetLang, true);
      } else {
        newObj[key] = await translateObject(value, targetLang);
      }
    }
    return newObj;
  }
  
  return obj;
}

module.exports = { translateObject };
