# 🏗️ Struttura Dati — RHCSA in LinuxQuest

## Schema ID lezioni

Il formato degli ID segue la stessa convenzione di LPI Essentials, con prefisso `rhcsa-`:

```
Lezione: rhcsa-1-1   (topic 1, lezione 1)
Lezione: rhcsa-10-4  (topic 10, lezione 4)
Quiz:    quiz-rhcsa-1-1
```

---

## `src/locales/it/rhcsa_topics.js` (schema)

```js
export const rhcsaTopics = [
  {
    id: 1,
    icon: "🛠️",
    color: "neon-blue",
    weight: "20%",
    title: "Strumenti Essenziali",
    subtitle: "Shell, permessi, archivi, documentazione",
    description:
      "Padronanza degli strumenti fondamentali della linea di comando RHEL.",
    lessons: [
      {
        id: "rhcsa-1-1",
        title: "Shell e I/O Redirection",
        subtitle: ">, >>, |, 2>, &>",
      },
      {
        id: "rhcsa-1-2",
        title: "grep e Regular Expressions",
        subtitle: "Ricerca e filtraggio testo",
      },
      {
        id: "rhcsa-1-3",
        title: "Permessi e Link",
        subtitle: "ugo/rwx, chmod, chown, ln",
      },
      {
        id: "rhcsa-1-4",
        title: "Archivi e Compressione",
        subtitle: "tar, gzip, bzip2, xz",
      },
      {
        id: "rhcsa-1-5",
        title: "Documentazione di Sistema",
        subtitle: "man, info, /usr/share/doc",
      },
    ],
  },
  {
    id: 2,
    icon: "📜",
    color: "neon-green",
    weight: "10%",
    title: "Shell Scripting",
    subtitle: "Bash, variabili, condizionali, loop",
    description: "Automazione dei task di sistema con script bash.",
    lessons: [
      {
        id: "rhcsa-2-1",
        title: "Variabili e Sintassi Bash",
        subtitle: "Variabili, quoting, espansioni",
      },
      {
        id: "rhcsa-2-2",
        title: "Condizionali e Loop",
        subtitle: "if, for, while, case",
      },
      {
        id: "rhcsa-2-3",
        title: "Parametri e Output",
        subtitle: "$1, $@, $?, command substitution",
      },
    ],
  },
  {
    id: 3,
    icon: "⚙️",
    color: "neon-purple",
    weight: "15%",
    title: "Gestione Sistema",
    subtitle: "Boot, processi, servizi, logging",
    description:
      "Operazioni su sistemi in esecuzione: boot, target, processi, scheduling.",
    lessons: [
      {
        id: "rhcsa-3-1",
        title: "Boot e Target systemd",
        subtitle: "multi-user.target, graphical.target, rd.break",
      },
      {
        id: "rhcsa-3-2",
        title: "Gestione Processi",
        subtitle: "ps, top, kill, renice, nice",
      },
      {
        id: "rhcsa-3-3",
        title: "Servizi con systemctl",
        subtitle: "start, stop, enable, disable, status",
      },
      {
        id: "rhcsa-3-4",
        title: "Logging e Scheduling",
        subtitle: "journalctl, rsyslog, cron, at",
      },
    ],
  },
  {
    id: 4,
    icon: "💾",
    color: "neon-orange",
    weight: "10%",
    title: "Storage Locale (LVM)",
    subtitle: "Partizioni GPT, PV/VG/LV, swap, fstab",
    description:
      "Configurazione e gestione dello storage locale con LVM su RHEL9.",
    lessons: [
      {
        id: "rhcsa-4-1",
        title: "Partizioni GPT",
        subtitle: "parted, fdisk, gdisk",
      },
      {
        id: "rhcsa-4-2",
        title: "LVM — Physical e Volume Groups",
        subtitle: "pvcreate, vgcreate, vgextend",
      },
      {
        id: "rhcsa-4-3",
        title: "LVM — Logical Volumes",
        subtitle: "lvcreate, lvextend, resize2fs, xfs_growfs",
      },
      {
        id: "rhcsa-4-4",
        title: "Mount e fstab",
        subtitle: "UUID, LABEL, swap, persistenza boot",
      },
    ],
  },
  {
    id: 5,
    icon: "📁",
    color: "neon-pink",
    weight: "10%",
    title: "File System",
    subtitle: "ext4, xfs, LUKS, NFS, ACL",
    description:
      "Creazione, mount e configurazione di file system locali e di rete.",
    lessons: [
      {
        id: "rhcsa-5-1",
        title: "ext4 e XFS",
        subtitle: "mkfs, mount, repair, tune",
      },
      {
        id: "rhcsa-5-2",
        title: "LUKS Encryption",
        subtitle: "cryptsetup, /etc/crypttab",
      },
      {
        id: "rhcsa-5-3",
        title: "NFS, CIFS e autofs",
        subtitle: "mount di rete, automount",
      },
      {
        id: "rhcsa-5-4",
        title: "ACL e Permessi Avanzati",
        subtitle: "getfacl, setfacl, setGID directory",
      },
    ],
  },
  {
    id: 6,
    icon: "🔧",
    color: "neon-blue",
    weight: "5%",
    title: "Manutenzione Sistema",
    subtitle: "dnf, rpm, GRUB2, Kickstart",
    description:
      "Gestione pacchetti, aggiornamenti e configurazione del bootloader.",
    lessons: [
      {
        id: "rhcsa-6-1",
        title: "Gestione Pacchetti dnf",
        subtitle: "install, remove, update, search, repo",
      },
      {
        id: "rhcsa-6-2",
        title: "rpm e verifica pacchetti",
        subtitle: "query, verify, install locale",
      },
      {
        id: "rhcsa-6-3",
        title: "GRUB2 e Kernel",
        subtitle: "grub2-mkconfig, /etc/default/grub, update kernel",
      },
    ],
  },
  {
    id: 7,
    icon: "🌐",
    color: "neon-green",
    weight: "10%",
    title: "Networking Base",
    subtitle: "nmcli, firewalld, SSH, hostname",
    description: "Configurazione rete, firewall e accesso sicuro remoto.",
    lessons: [
      {
        id: "rhcsa-7-1",
        title: "nmcli e Configurazione Rete",
        subtitle: "IP statico, DHCP, hostname, DNS",
      },
      {
        id: "rhcsa-7-2",
        title: "firewalld",
        subtitle: "zone, services, ports, firewall-cmd --permanent",
      },
      {
        id: "rhcsa-7-3",
        title: "SSH Key-based e Trasferimento File",
        subtitle: "ssh-keygen, ssh-copy-id, scp, sftp",
      },
    ],
  },
  {
    id: 8,
    icon: "👥",
    color: "neon-purple",
    weight: "10%",
    title: "Utenti e Gruppi",
    subtitle: "useradd, sudo, passwd, /etc/shadow",
    description: "Gestione completa di utenti, gruppi e privilegi sudo.",
    lessons: [
      {
        id: "rhcsa-8-1",
        title: "Gestione Utenti",
        subtitle: "useradd, usermod, userdel, passwd, chage",
      },
      {
        id: "rhcsa-8-2",
        title: "Gestione Gruppi e sudo",
        subtitle: "groupadd, usermod -aG, visudo, /etc/sudoers",
      },
    ],
  },
  {
    id: 9,
    icon: "🔐",
    color: "neon-orange",
    weight: "10%",
    title: "SELinux e Sicurezza",
    subtitle: "Enforcing, contesti, booleans, porte",
    description:
      "Security-Enhanced Linux: il meccanismo di sicurezza principale di RHEL.",
    lessons: [
      {
        id: "rhcsa-9-1",
        title: "Modalità SELinux",
        subtitle: "enforcing, permissive, disabled, setenforce",
      },
      {
        id: "rhcsa-9-2",
        title: "Contesti File e Processo",
        subtitle: "ls -Z, chcon, restorecon, semanage fcontext",
      },
      {
        id: "rhcsa-9-3",
        title: "Booleans e Porte",
        subtitle: "getsebool, setsebool -P, semanage port",
      },
    ],
  },
  {
    id: 10,
    icon: "🐋",
    color: "neon-pink",
    weight: "10%",
    title: "Container con Podman",
    subtitle: "Podman, immagini, volumi, Containerfile",
    description: "Gestione container senza daemon con Podman su RHEL9.",
    lessons: [
      {
        id: "rhcsa-10-1",
        title: "Podman e Container Basics",
        subtitle: "pull, run, exec, stop, rm, ps, images",
      },
      {
        id: "rhcsa-10-2",
        title: "Registry e Tag Immagini",
        subtitle: "login, pull, tag, push, inspect",
      },
      {
        id: "rhcsa-10-3",
        title: "Containerfile",
        subtitle: "FROM, RUN, COPY, ADD, ENV, EXPOSE, ENTRYPOINT",
      },
      {
        id: "rhcsa-10-4",
        title: "Volumi e Networking Container",
        subtitle: "-v, :z :Z per SELinux, -p porta",
      },
    ],
  },
];
```

---

## Schema Quiz (esempio Topic 1)

```js
// src/data/rhcsa/quizzes/rhcsa_topic1.js
export const rhcsaTopic1Quizzes = [
  {
    id: "q-rhcsa-1-1-001",
    lessonId: "rhcsa-1-1",
    topicId: 1,
    difficulty: "easy",
    type: "mcq",
    question: "Quale operatore redirige stdout E stderr nello stesso file?",
    options: [">", ">>", "2>", "&>"],
    correct: 3,
    explanation:
      '&> redirige entrambi stdout (fd 1) e stderr (fd 2) allo stesso file. Equivalente a "2>&1 >".',
  },
  // ... altri
];
```

---

## Predisposizione lingue (placeholder)

Per ogni lingua non ancora tradotta, creare file vuoti:

```js
// src/locales/de/rhcsa_topics.js
// TODO: German translation
export const rhcsaTopics = []; // placeholder
```

Questo evita errori di import e predispone la struttura.

---

## Come aggiornare `useTopics.js` per RHCSA

```js
// src/hooks/useTopics.js — aggiunta per courseId === 'rhcsa'
import { rhcsaTopics as itRhcsaTopics } from '../locales/it/rhcsa_topics.js'
import { rhcsaTopics as enRhcsaTopics } from '../locales/en/rhcsa_topics.js'
// ... placeholder per altre lingue

const rhcsaTopicDict = { it: itRhcsaTopics, en: enRhcsaTopics, /* ... */ }

export function useTopics(courseId = 'lpi-010') {
  const { currentLang } = useLanguage()

  if (courseId === 'rhcsa') {
    const topics = rhcsaTopicDict[currentLang] || rhcsaTopicDict['en']
    // ... stessa logica con file RHCSA
    return { topics, ... }
  }

  // default: LPI Essentials (codice attuale)
  // ...
}
```
