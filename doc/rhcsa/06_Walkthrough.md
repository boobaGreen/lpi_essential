# 📋 Walkthrough — Implementazione RHCSA

## Stato: 🏗️ In corso

---

## ✅ Completato

### Sessione 1 — 2026-03-06

- [x] Ricerca struttura ufficiale EX200 (10 domini, 150 min, performance-based)
- [x] Ricerca materiale didattico (libri Jang, van Vugt, Udemy, community)
- [x] Ricerca lab browser-only (v86/WebVM feasibility — Fase 2)
- [x] Architettura multi-corso in `App.jsx` (branch `multi-course`) — già live
- [x] Documentazione completa in `doc/rhcsa/`:
  - `00_Indice.md`
  - `01_Ricerca_Esame.md` — 10 domini ufficiali EX200
  - `02_Materiale_Didattico.md` — fonti e stima pool domande
  - `03_Lab_Browser.md` — v86, WebVM, container2wasm
  - `04_Piano_Implementazione.md` — fasi, timeline, ordine lezioni
  - `05_Struttura_Dati.md` — schema JS, ID lezioni, quiz, useTopics update
  - `06_Walkthrough.md` — questo file

---

## 🔜 Da fare (Fase 1)

### Step successivo: `courses.js` e `useTopics.js`

- [ ] Aggiungere `rhcsa` a `src/data/courses.js` (available: true)
- [ ] Aggiornare `src/hooks/useTopics.js` per supportare courseId `rhcsa`

### Contenuto IT (priorità alta)

- [ ] `src/locales/it/rhcsa_topics.js` (10 topic, 33 lezioni)
- [ ] `src/locales/it/rhcsa_lessonContent.js` (comic, keyPoints, terminal per ogni lezione)
- [ ] Quiz IT: `src/data/rhcsa/quizzes/rhcsa_topic1.js` ... `rhcsa_topic10.js`
- [ ] Extended content IT: `src/data/rhcsa/extendedContent/rhcsa_topic1Extended.js` ...

### Contenuto EN

- [ ] `src/locales/en/rhcsa_topics.js`
- [ ] `src/locales/en/rhcsa_lessonContent.js`
- [ ] Quiz EN (in locale)

### Placeholder altre lingue (predisposizione)

- [ ] `src/locales/de/rhcsa_topics.js` (vuoto con commento)
- [ ] `src/locales/fr/rhcsa_topics.js`
- [ ] `src/locales/es/rhcsa_topics.js`
- [ ] `src/locales/pt/rhcsa_topics.js`
- [ ] `src/locales/ru/rhcsa_topics.js`
- [ ] `src/locales/zh/rhcsa_topics.js`

---

## Ordine implementazione lezioni (priorità)

| Priorità | Topic                      | Motivazione                    |
| -------- | -------------------------- | ------------------------------ |
| 1        | Topic 1: Essential Tools   | Base per tutto, più richiesto  |
| 2        | Topic 8: Users & Groups    | Molto testato all'esame        |
| 3        | Topic 9: SELinux           | Argomento critico e unico RHEL |
| 4        | Topic 3: Operating Systems | systemd, processi              |
| 5        | Topic 4: LVM               | Difficile, molto pratico       |
| 6        | Topic 7: Networking        | nmcli, firewalld               |
| 7        | Topic 10: Containers       | Podman, nuovo in v9            |
| 8        | Topic 5: File Systems      | ext4, LUKS, NFS                |
| 9        | Topic 2: Shell Scripts     |                                |
| 10       | Topic 6: Deploy & Maintain |                                |

---

## 🔜 Da fare (Fase 2)

- [ ] Simulazione esame RHCSA (pool 200 MCQ, 40 rand, timer 60 min, disclaimer)
- [ ] Terminal Challenge scenari RHCSA (useradd, dnf, setenforce, nmcli...)
- [ ] Memory game RHCSA (comando ↔ funzione)
- [ ] Fill-the-gap comandi RHCSA

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
