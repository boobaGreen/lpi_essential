# 🚀 Piano Implementazione — LPIC-1 Exam 101

## Strategia

Seguiamo esattamente lo stesso pattern architetturale del corso RHCSA già implementato.

## Fasi

### Fase 1 — Registro Corso ✅ → 🔜

- Aggiornare `courses.js`: split `lpic-1` → `lpic1-101` (available: true) + `lpic1-102` placeholder

### Fase 2 — Topic + Lezioni (8 lingue)

- Creare `src/locales/{lang}/lpic1_101_topics.js` per ogni lingua (it, en, es, fr, de, pt, ru, zh)
- Creare `src/locales/{lang}/lpic1_101_lessonContent.js` per ogni lingua
- 4 topic, 28 lezioni totali

### Fase 3 — Quiz Pool (200+ domande × 8 lingue)

- Creare `src/data/lpic1-101/quizzes/` con file per topic
- Quiz IT base → traduzioni in 7 lingue
- Index file con export dizionari per lingua

### Fase 4 — Extended Content (8 lingue)

- Creare `src/data/lpic1-101/extendedContent/` con file per lingua

### Fase 5 — Games Data (8 lingue)

- Creare `src/locales/{lang}/lpic1_101_gamesData.js`
- Memory game, True/False, Fill-gap, Drag-drop, Terminal challenge

### Fase 6 — Integrazione

- `useTopics.js`: aggiungere sezione `lpic1-101`
- `ExamPage.jsx`: config 60 domande, 90 min, 500/800
- `GamesHub`: caricare games LPIC-1 101

### Fase 7 — Verifica

- Build + navigazione completa
- Test tutte le lingue

## Dettagli Esame Simulato

| Parametro        | Valore               |
| ---------------- | -------------------- |
| Domande          | 60                   |
| Tempo            | 90 minuti            |
| Punteggio minimo | 500/800              |
| Formato          | MCQ + fill-the-blank |
