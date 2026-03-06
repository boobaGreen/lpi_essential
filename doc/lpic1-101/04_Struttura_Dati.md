# 📐 Struttura Dati — LPIC-1 Exam 101

Schema dei file JavaScript da creare nel progetto, seguendo il pattern esatto di RHCSA.

## Albero File da Creare

```
src/
├── data/
│   └── lpic1-101/
│       ├── quizzes/
│       │   ├── index.js                    # Hub importazioni + export dizionari
│       │   ├── lpic1_101_topic1.js         # Quiz Topic 101 (IT, ~50 domande)
│       │   ├── lpic1_101_topic2.js         # Quiz Topic 102 (IT, ~50 domande)
│       │   ├── lpic1_101_topic3.js         # Quiz Topic 103 (IT, ~80 domande)
│       │   ├── lpic1_101_topic4.js         # Quiz Topic 104 (IT, ~50 domande)
│       │   ├── en/
│       │   │   ├── lpic1_101_topic1_en.js
│       │   │   ├── lpic1_101_topic2_en.js
│       │   │   ├── lpic1_101_topic3_en.js
│       │   │   └── lpic1_101_topic4_en.js
│       │   ├── es/                          # idem per es, fr, de, pt, ru, zh
│       │   ├── fr/
│       │   ├── de/
│       │   ├── pt/
│       │   ├── ru/
│       │   └── zh/
│       └── extendedContent/
│           ├── index.js
│           ├── lpic1_101_extendedContent_it.js
│           ├── lpic1_101_extendedContent_en.js
│           ├── lpic1_101_extendedContent_es.js
│           ├── lpic1_101_extendedContent_fr.js
│           ├── lpic1_101_extendedContent_de.js
│           ├── lpic1_101_extendedContent_pt.js
│           ├── lpic1_101_extendedContent_ru.js
│           └── lpic1_101_extendedContent_zh.js
└── locales/
    ├── it/
    │   ├── lpic1_101_topics.js
    │   ├── lpic1_101_lessonContent.js
    │   └── lpic1_101_gamesData.js
    ├── en/
    │   ├── lpic1_101_topics.js
    │   ├── lpic1_101_lessonContent.js
    │   └── lpic1_101_gamesData.js
    ├── es/ ... (stesso pattern per tutte le 8 lingue)
    ├── fr/
    ├── de/
    ├── pt/
    ├── ru/
    └── zh/
```

## Schema Quiz (esempio)

```javascript
export const lpic1_101_topic1Quizzes = [
  {
    id: "q-lpic1-101-1-001",
    lessonId: "lpic1-101-1-1",
    topicId: 1, // Topic 101 → mappato a 1
    difficulty: "easy", // easy | medium | hard
    type: "mcq",
    question:
      "Quale directory virtuale contiene info sull'hardware rilevato dal kernel?",
    options: ["/dev", "/proc", "/etc", "/boot"],
    correct: 1,
    explanation:
      "/proc è un filesystem virtuale che espone informazioni del kernel...",
  },
];
```

## Schema Topic (locale)

```javascript
export const lpic1_101_topics = [
  {
    id: 1,
    icon: "🖥️",
    color: "neon-blue",
    weight: "14",
    title: "Architettura di Sistema",
    subtitle: "Hardware, boot, runlevel, systemd",
    description:
      "Configurazione hardware, processo di boot, runlevel e target systemd.",
    lessons: [
      {
        id: "lpic1-101-1-1",
        title: "Hardware e Periferiche",
        subtitle: "BIOS/UEFI, /proc, /sys, lspci, lsusb, modprobe",
      },
      {
        id: "lpic1-101-1-2",
        title: "Processo di Boot",
        subtitle: "BIOS → GRUB → kernel → init/systemd",
      },
      {
        id: "lpic1-101-1-3",
        title: "Runlevel e Target systemd",
        subtitle: "SysVinit, systemctl, shutdown, reboot",
      },
    ],
  },
  // ... topic 2, 3, 4
];
```

## Configurazione Esame (ExamPage.jsx)

```javascript
// LPIC-1 101 config
{
  name: 'LPIC-1 Exam 101 (101-500)',
  questions: 60,
  timeMinutes: 90,
  passingScore: 500,
  maxScore: 800,
  disclaimer: null,
}
```
