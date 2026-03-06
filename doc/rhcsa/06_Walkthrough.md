# 📋 Walkthrough — Implementazione RHCSA

## Stato: 🏗️ In corso

---

## ✅ Completato

### Sessione 1 — 2026-03-06 (Mattina)

- [x] Ricerca struttura ufficiale EX200 (10 domini, 150 min, performance-based)
- [x] Ricerca materiale didattico (libri Jang, van Vugt, Udemy, community)
- [x] Ricerca lab browser-only (v86/WebVM feasibility — Fase 2)
- [x] Architettura multi-corso in `App.jsx` (branch `multi-course`) — già live
- [x] Documentazione completa in `doc/rhcsa/`

### Sessione 2 — 2026-03-06 (Sera)

- [x] Aggiunto `rhcsa` a `courses.js` e aggiornato `useTopics.js`
- [x] Completati i file di struttura JS per 10 topic e 33 lezioni IT ed EN
- [x] Completate 177 domande quiz (MCQ) in Italiano per tutti i 10 topic
- [x] Completato il `lessonContent` in Italiano per tutte le 33 lezioni (comic, keyPoints, terminal)
- [x] Completati i dati dei giochi (Memory, TrueFalse, FillGap, DragDrop, Terminal) in IT e EN
- [x] Adeguata la pagina `ExamPage` al formato RHCSA (50 domande, 60min, punteggio max 300) con disclaimer esame pratico

---

## 🔜 Da fare (Fase 1 - Completamento Content)

### Contenuto EN

- [x] `src/locales/en/rhcsa_lessonContent.js` — Completare lezioni 4-10 (attualmente stub)
- [x] Tradurre i 177 Quiz (MCQ) in Inglese

### Contenuto Avanzato

- [x] Extended content IT ed EN: approfondimenti nei file `topicXExtended.js`

### Placeholder altre lingue (predisposizione)

- [x] File `rhcsa_topics.js` e `rhcsa_gamesData.js` creati per DE/FR/ES/PT/RU/ZH (con fallback)

---

## 🔜 Da fare (Fase 2)

- [x] Simulazione esame RHCSA (pool 177 MCQ, 50 rand, timer 60 min, disclaimer)
- [x] Terminal Challenge scenari RHCSA (15 sfide)
- [x] Memory game RHCSA (50 coppie)
- [x] Fill-the-gap comandi RHCSA (30 quiz)
- [x] True/False RHCSA (40 affermazioni)
- [x] Drag & Drop (4 categorie)

---

## 💡 Da valutare (Fase 3)

- [ ] Integrazione v86 Alpine Linux per labs selezionati
- [ ] Pulsante "⚡ Prova nel browser" su lezioni Topic 1, 2, 7, 8

---

## Note tecniche

- Tutti i file RHCSA usano prefisso `rhcsa_` per evitare conflitti con LPI
- ID lezioni: `rhcsa-{topic}-{lesson}` (es. rhcsa-1-3)
- Il GameContext gestisce già progresso separato per `courseId: 'rhcsa'`
- La Navbar mostra badge "EX200" quando si è nel corso RHCSA
