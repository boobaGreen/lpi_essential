import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function translateText(text, targetLang) {
  return new Promise((resolve) => {
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
    }).on('error', () => resolve(text)); // fallback to original on error
  });
}

const translatableStringKeys = ['description', 'text', 'explanation', 'prompt', 'hint', 'title', 'right', 'intro', 'content', 'question'];
const translatableArrayKeys = ['hints', 'options', 'items', 'headers'];

let promiseChain = Promise.resolve();
const delay = ms => new Promise(res => setTimeout(res, ms));

async function translateObject(obj, targetLang, isRow = false) {
  if (typeof obj === 'string') {
    if (isRow) { 
      promiseChain = promiseChain.then(() => delay(50)).then(() => translateText(obj, targetLang));
      return promiseChain;
    }
    return obj;
  }
  
  if (Array.isArray(obj)) {
    const newArr = [];
    for (const item of obj) {
      if (typeof item === 'string' && isRow) {
        promiseChain = promiseChain.then(() => delay(50)).then(() => translateText(item, targetLang));
        newArr.push(await promiseChain);
      } else if (Array.isArray(item) && isRow) {
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
        promiseChain = promiseChain.then(() => delay(50)).then(() => translateText(value, targetLang));
        newObj[key] = await promiseChain;
      } else if (Array.isArray(value) && translatableArrayKeys.includes(key)) {
        const newArr = [];
        for (const item of value) {
          if (typeof item === 'string') {
             promiseChain = promiseChain.then(() => delay(50)).then(() => translateText(item, targetLang));
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

// Target languages
const targetLangs = ['en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

async function processTranslations() {
  console.log("Starting translations...");
  
  try {
    // 1. Quizzes
    for (let topicNum = 1; topicNum <= 5; topicNum++) {
      console.log(`Loading topic ${topicNum} quizzes...`);
      const modUrl = pathToFileURL(path.join(process.cwd(), `src/data/quizzes/topic${topicNum}.js`)).href;
      const { [`topic${topicNum}Quizzes`]: originalQuizzes } = await import(modUrl);
      
      for (const lang of targetLangs) {
        const outputPath = path.join(__dirname, '..', 'src', 'locales', lang, `quizzes_topic${topicNum}.js`);
        console.log(`Translating topic ${topicNum} quizzes to ${lang}...`);
        const translated = await translateObject(originalQuizzes, lang);
        const fileContent = `export const topic${topicNum}Quizzes = ${JSON.stringify(translated, null, 2)};\n`;
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, fileContent, 'utf8');
      }
    }

    // 2. Extended Content
    for (let topicNum = 1; topicNum <= 5; topicNum++) {
      console.log(`Loading topic ${topicNum} extended content...`);
      const modUrl = pathToFileURL(path.join(process.cwd(), `src/data/extendedContent/topic${topicNum}Extended.js`)).href;
      const { [`topic${topicNum}Extended`]: originalExt } = await import(modUrl);
      for (const lang of targetLangs) {
        const outputPath = path.join(__dirname, '..', 'src', 'locales', lang, `extendedContent_topic${topicNum}.js`);
        console.log(`Translating topic ${topicNum} extended to ${lang}...`);
        const translated = await translateObject(originalExt, lang);
        const fileContent = `export const topic${topicNum}Extended = ${JSON.stringify(translated, null, 2)};\n`;
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, fileContent, 'utf8');
      }
    }

    // 3. Topics
    console.log(`Loading Topics...`);
    const topicsModUrl = pathToFileURL(path.join(process.cwd(), 'src/locales/it/topics.js')).href;
    const { itTopics } = await import(topicsModUrl);
    for (const lang of targetLangs) {
        const outputPath = path.join(__dirname, '..', 'src', 'locales', lang, `topics.js`);
        console.log(`Translating topics to ${lang}...`);
        const translated = await translateObject(itTopics, lang);
        const fileContent = `export const ${lang}Topics = ${JSON.stringify(translated, null, 2)};\n`;
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, fileContent, 'utf8');
    }

    // 4. Game Data
    console.log(`Loading Game Data...`);
    const gamesDataModUrl = pathToFileURL(path.join(process.cwd(), 'src/locales/it/gamesData.js')).href;
    const gamesDataModule = await import(gamesDataModUrl);
    for (const lang of targetLangs) {
        const outputPath = path.join(__dirname, '..', 'src', 'locales', lang, `gamesData.js`);
        console.log(`Translating gamesData to ${lang}...`);
        
        const fileContentParts = [];
        for (const [exportName, data] of Object.entries(gamesDataModule)) {
           const translated = await translateObject(data, lang);
           fileContentParts.push(`export const ${exportName} = ${JSON.stringify(translated, null, 2)};`);
        }
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, fileContentParts.join('\n\n'), 'utf8');
    }

    // 5. Lesson Content
    console.log(`Loading Lesson Content...`);
    try {
        const lessonContentModUrl = pathToFileURL(path.join(process.cwd(), 'src/locales/it/lessonContent.js')).href;
        const { lessonContent } = await import(lessonContentModUrl);
        for (const lang of targetLangs) {
            const outputPath = path.join(__dirname, '..', 'src', 'locales', lang, `lessonContent.js`);
            console.log(`Translating lesson content to ${lang}...`);
            const translated = await translateObject(lessonContent, lang);
            const fileContent = `export const lessonContent = ${JSON.stringify(translated, null, 2)};\n`;
            fs.writeFileSync(outputPath, fileContent, 'utf8');
        }
    } catch(e) { console.log('Lesson Content translate failed or skipped', e); }

    console.log("Translations completed.");
  } catch (error) {
    console.error("FATAL ERROR: ", error);
  }
}

processTranslations().catch(console.error);
