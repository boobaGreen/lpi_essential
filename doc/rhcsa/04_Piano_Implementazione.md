# 🗺️ Piano di Implementazione RHCSA — LinuxQuest

## Obiettivo

Aggiungere il corso **RHCSA (EX200)** a LinuxQuest come secondo corso disponibile, partendo con **Italiano e Inglese**, predisposto per altre 6 lingue.

---

## Fase 0 — Prerequisiti (già completati ✅)

- [x] Architettura multi-corso in `App.jsx` (branch `multi-course`)
- [x] `courses.js` con slot RHCSA pronto (attualmente `available: false`)
- [x] `CourseContext` e `GameContext` per-corso pronti
- [x] Documentazione in `doc/rhcsa/`

---

## Fase 1 — Contenuto RHCSA (IT + EN) 🔜

### 1.1 Aggiornare `courses.js`

Cambiare `rhcsa: { available: false }` → `available: true` e aggiungere il corso.

**Nota**: RHCSA non è ancora in `courses.js`. Va aggiunto con:

```js
'rhcsa': {
  id: 'rhcsa',
  name: 'RHCSA',
  code: 'EX200',
  icon: '🎯',
  color: '#ee0000',   // Red Hat red
  topicCount: 10,
  available: true,
  description: 'Red Hat Certified System Administrator — laboratorio e teoria.',
  tags: ['Linux', 'RHEL', 'SysAdmin', 'Red Hat'],
}
```

### 1.2 Struttura file dati

```
src/
├── locales/
│   ├── it/
│   │   ├── rhcsa_topics.js         ← 10 topic con lezioni (IT)
│   │   ├── rhcsa_lessonContent.js  ← contenuto lezioni (IT)
│   │   └── rhcsa_quizzes_topic*.js ← 10 file quiz (IT)
│   └── en/
│       ├── rhcsa_topics.js         ← (EN)
│       ├── rhcsa_lessonContent.js  ← (EN)
│       └── rhcsa_quizzes_topic*.js ← (EN)
│   └── [de|fr|es|pt|ru|zh]/
│       └── rhcsa_topics.js         ← placeholder vuoti predisposti
└── data/
    ├── rhcsa/
    │   ├── extendedContent/
    │   │   ├── rhcsa_topic1Extended.js ... topic10Extended.js
    │   │   └── index.js
    │   └── quizzes/   ← quiz IT (default, come per LPI)
    │       ├── rhcsa_topic1.js ... rhcsa_topic10.js
    │       └── index.js
```

### 1.3 Aggiornare `useTopics.js`

Aggiungere supporto `courseId === 'rhcsa'` che carica i file RHCSA invece di LPI.

### 1.4 Contenuto da creare

Per ogni topic (10):

- `topics.js`: titolo, descrizione, icona, lezioni array
- `lessonContent.js`: comic strip, keyPoints, terminal demo per ogni lezione
- `extendedContent`: approfondimenti Deep Dive
- Quiz: 20 domande per topic = 200 totali

---

## Fase 2 — Giochi e Simulazione Esame 🔜

### 2.1 Simulazione Esame RHCSA

- Pool di ~200 domande MCQ teoriche
- 40 domande casuali / 60 minuti (simulazione)
- **Disclaimer prominente**: "Questo non è il vero esame RHCSA (che è pratico)"
- Banner rosso Red Hat style

### 2.2 Terminal Challenge RHCSA

- Estendere scenari `TerminalChallenge` con comandi RHCSA-specifici:
  - useradd, usermod, chmod, chown, mount, dnf, systemctl, nmcli, setenforce...
- Validazione: pattern matching sul comando inserito

### 2.3 Altri giochi

- Memory game: abbinare comando ↔ funzione (es. `lvcreate` ↔ "Crea Logical Volume")
- Fill-the-gap: `___ -aG wheel mario` → `usermod`
- True/False: concetti SELinux, LVM, systemd

---

## Fase 3 — Lab Browser (v86/WASM) 💡

Valutare integrazione v86 per lab selezionati:

- Alpine Linux boota in ~15s nel browser
- Lezioni con un pulsante "⚡ Prova nel browser"
- Scenari preparati (utenti pre-creati, file pre-posizionati)
- Solo per topic 1, 2, 3, 7, 8 (più adatti senza systemd completo)

---

## Fase 4 — Altre Lingue 🔜

Aggiungere traduzioni per: `de`, `fr`, `es`, `pt`, `ru`, `zh`

- Struttura file già predisposta con placeholder
- Stessa UI di LPI Essentials

---

## Timeline stimata

| Fase                    | Sforzo stimato | Note                       |
| ----------------------- | -------------- | -------------------------- |
| Fase 1: Contenuto IT+EN | ~3-5 sessioni  | Scrittura intensiva        |
| Fase 2: Giochi + Esame  | ~2 sessioni    | Riuso componenti esistenti |
| Fase 3: Lab WASM        | ~3-5 sessioni  | Alta complessità tecnica   |
| Fase 4: Altre lingue    | ~2 sessioni    | Traduzione                 |

---

## Ordine di implementazione delle lezioni

Priorità per impatto:

1. **Topic 1** (Essential Tools) — più richiesto, base di tutto
2. **Topic 8** (Users & Groups) — molto testato all'esame
3. **Topic 9** (SELinux) — argomento critico e unico RHEL
4. **Topic 3** (Operating Systems / systemd) — fondamentale
5. **Topic 4** (Local Storage / LVM) — argomento difficile
6. **Topic 7** (Networking) — nmcli, firewalld
7. **Topic 10** (Containers) — nuovo, molto rilevante
8. **Topic 5** (File Systems) — ext4, xfs, LUKS
9. **Topic 2** (Shell Scripts)
10. **Topic 6** (Deploy & Maintain)
