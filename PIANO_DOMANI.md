# 📋 PIANO LAVORO RHCSA — DA FARE DOMANI

> Stato attuale: IT completo (33 lezioni + 177 quiz + giochi). EN parziale.
> Obiettivo: completare IT+EN su tutto, predisporre altre lingue.

---

## ✅ FATTO OGGI

| Cosa                                                        | File                                     | Stato                  |
| ----------------------------------------------------------- | ---------------------------------------- | ---------------------- | --- |
| 33 lezioni IT (comic+keyPoints+terminal)                    | `src/locales/it/rhcsa_lessonContent.js`  | ✅                     |
| 177 MCQ IT (Topics 1-10)                                    | `src/data/rhcsa/quizzes/rhcsa_topic*.js` | ✅                     |
| Giochi IT+EN (Memory/TrueFalse/FillGap/DragDrop/Terminal)   | `src/locales/it                          | en/rhcsa_gamesData.js` | ✅  |
| 33 lezioni EN Topics 1-3 completi + Topics 4-10 stub        | `src/locales/en/rhcsa_lessonContent.js`  | ⚠️ Parziale            |
| Placeholder lingue giochi (DE/FR/ES/PT/RU/ZH)               | `src/locales/*/rhcsa_gamesData.js`       | ✅ (fallback IT)       |
| ExamPage multi-corso (RHCSA: 50q/210/300, LPI: 40q/500/800) | `src/pages/ExamPage.jsx`                 | ✅                     |
| useGameData multi-corso                                     | `src/hooks/useGameData.js`               | ✅                     |
| useTopics RHCSA EN lessonContent                            | `src/hooks/useTopics.js`                 | ✅                     |

---

## 🔜 BLOCCO 1 — EN lessonContent Topics 4-10 (PRIORITÀ ALTA)

**File:** `src/locales/en/rhcsa_lessonContent.js`

Espandere gli stub esistenti per i seguenti lessonId con contenuto completo
(stesso livello di dettaglio dei Topics 1-3 già completati):

### Topic 4 — Local Storage (LVM)

| LessonId    | Titolo           | Contenuto mancante                                             |
| ----------- | ---------------- | -------------------------------------------------------------- |
| `rhcsa-4-1` | GPT Partitions   | ⚠️ stub — espandere keyPoints dettagliati, terminal reale      |
| `rhcsa-4-2` | PV e VG          | ⚠️ stub — espandere workflow completo, pvdisplay/vgdisplay     |
| `rhcsa-4-3` | Logical Volumes  | ⚠️ stub — espandere lvcreate opzioni, lvreduce impossibile XFS |
| `rhcsa-4-4` | Mount/fstab/Swap | ⚠️ stub — espandere fstab UUID, nofail, swap setup             |

### Topic 5 — File System

| LessonId    | Titolo                  |
| ----------- | ----------------------- | ------- |
| `rhcsa-5-1` | ext4 e XFS              | ⚠️ stub |
| `rhcsa-5-2` | LUKS Encryption         | ⚠️ stub |
| `rhcsa-5-3` | NFS/CIFS/autofs         | ⚠️ stub |
| `rhcsa-5-4` | ACL e Permessi Speciali | ⚠️ stub |

### Topic 6 — System Maintenance

| LessonId    | Titolo                 |
| ----------- | ---------------------- | ------- |
| `rhcsa-6-1` | dnf Package Management | ⚠️ stub |
| `rhcsa-6-2` | rpm Query e Verify     | ⚠️ stub |
| `rhcsa-6-3` | GRUB2 e Kernel         | ⚠️ stub |

### Topic 7 — Basic Networking

| LessonId    | Titolo                 |
| ----------- | ---------------------- | ------- |
| `rhcsa-7-1` | nmcli e Network Config | ⚠️ stub |
| `rhcsa-7-2` | firewalld              | ⚠️ stub |
| `rhcsa-7-3` | SSH e File Transfer    | ⚠️ stub |

### Topic 8 — Users and Groups

| LessonId    | Titolo          |
| ----------- | --------------- | ------- |
| `rhcsa-8-1` | User Management | ⚠️ stub |
| `rhcsa-8-2` | Groups e sudo   | ⚠️ stub |

### Topic 9 — SELinux

| LessonId    | Titolo                  |
| ----------- | ----------------------- | ------- |
| `rhcsa-9-1` | SELinux Modes           | ⚠️ stub |
| `rhcsa-9-2` | File e Process Contexts | ⚠️ stub |
| `rhcsa-9-3` | Booleans e Ports        | ⚠️ stub |

### Topic 10 — Containers

| LessonId     | Titolo               |
| ------------ | -------------------- | ------- |
| `rhcsa-10-1` | Podman Basics        | ⚠️ stub |
| `rhcsa-10-2` | Registry e Images    | ⚠️ stub |
| `rhcsa-10-3` | Containerfile        | ⚠️ stub |
| `rhcsa-10-4` | Volumes e Networking | ⚠️ stub |

**Stima tempo:** 2-3 ore (23 lezioni × ~10 min)

---

## 🔜 BLOCCO 2 — EN Quiz Translations (177 MCQ → EN)

**File da creare:**

```
src/data/rhcsa/quizzes/en/rhcsa_topic1_en.js   (25 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic2_en.js   (15 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic3_en.js   (22 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic4_en.js   (20 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic5_en.js   (20 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic6_en.js   (15 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic7_en.js   (20 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic8_en.js   (15 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic9_en.js   (25 domande)
src/data/rhcsa/quizzes/en/rhcsa_topic10_en.js  (20 domande)
src/data/rhcsa/quizzes/en/index.js             (aggregatore EN)
```

**Formato stesso di IT (id, topicId, question, options[], correct, explanation, difficulty):**

```js
export const topic1QuizzesEN = [
  {
    id: "rhcsa-1-q1-en",
    topicId: 1,
    question: "Which operator redirects stderr to /dev/null?",
    options: [">", "2>", ">>", "&>"],
    correct: 1,
    explanation:
      "2> redirects stderr (file descriptor 2) to the specified file.",
    difficulty: 1,
  },
  // ...
];
```

**Aggiornare:** `src/data/rhcsa/quizzes/index.js` per caricare EN in base alla lingua.
**Aggiornare:** `src/hooks/useTopics.js` per passare quiz EN quando lang=en.

**Stima tempo:** 3-4 ore (177 domande tradotte + refactoring index)

---

## 🔜 BLOCCO 3 — Extended Content RHCSA (Approfondimenti)

**Modello:** vedere `src/data/extendedContent/topic1Extended.js` (LPI)

**File da creare:**

```
src/data/rhcsa/extendedContent/
  rhcsa_topic1Extended.js   — Essential Tools (man, find, grep avanzato)
  rhcsa_topic2Extended.js   — Shell Scripting (heredoc, arrays, funzioni)
  rhcsa_topic3Extended.js   — Sistema (systemd unit files, journald config)
  rhcsa_topic4Extended.js   — LVM (thin provisioning, snapshots)
  rhcsa_topic5Extended.js   — File System (quota, stratis)
  rhcsa_topic6Extended.js   — Manutenzione (dnf modules, subscription-manager)
  rhcsa_topic7Extended.js   — Networking (teaming, bonding, nmcli avanzato)
  rhcsa_topic8Extended.js   — Utenti (PAM, SSSD, ldap basics)
  rhcsa_topic9Extended.js   — SELinux (audit2allow, policy modules)
  rhcsa_topic10Extended.js  — Container (quadlet, systemd integration)
  index.js                  — aggregatore per IT e EN
```

**Aggiornare:** `src/hooks/useTopics.js` per caricare `extendedContent: rhcsaExtendedContentDict[lang]`

**Stima tempo:** 2-3 ore

---

## 📅 ORDINE CONSIGLIATO

```
Mattina:  BLOCCO 2 (quiz EN) — più meccanico, si fa in parallelo
Pomeriggio: BLOCCO 1 (lezioni EN) — richiede contenuto creativo
Sera:     BLOCCO 3 (extended content) — bonus/opzionale
```

## 📌 NOTE TECNICHE

- I quiz IT sono CONDIVISI tra tutte le lingue ora → refactoring necessario per EN
- Il `useTopics.js` attualmente carica `allRhcsaQuizzes` (sempre IT) → va reso language-aware
- L'extended content RHCSA deve usare `extendedContentDict[lang]` con fallback IT
- Tutte le altre lingue (DE/FR/ES/PT/RU/ZH) possono restare come fallback IT/EN

---

_Generato automaticamente — $(Get-Date -Format "yyyy-MM-dd HH:mm")_
