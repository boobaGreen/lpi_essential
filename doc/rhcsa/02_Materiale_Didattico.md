# 📖 Materiale Didattico — RHCSA

## Libri di riferimento primari

### 1. RHCSA Red Hat Enterprise Linux 9 Study Guide (8° ed.)

- **Autori**: Michael Jang & Alessandro Orsaria
- **Editore**: McGraw Hill / Osborne Media
- **Anno**: 2022 (RHEL9)
- **ISBN**: 978-1264278008
- **Usato per**: struttura topic, spiegazioni teoriche, terminologia
- **Link**: https://www.mheducation.com/

### 2. Red Hat RHCSA 9 Cert Guide (EX200)

- **Autore**: Sander van Vugt
- **Editore**: Pearson IT Certification
- **Anno**: 2023
- **ISBN**: 978-0137937325
- **Usato per**: quiz practice (include 5 practice exam × 60 domande), scenari pratici
- **Link**: https://www.pearsonitcertification.com/

---

## Corsi Online

### Udemy — Sander van Vugt

- **Titolo**: "Red Hat RHCSA 9 (EX200) — Complete Preparation Course"
- **Domande practice**: 300 (5 exam × 60 domande per 6 domain)
- **Standard**: 2024 objectives
- **Usato per**: pool domande quiz, struttura esercizi

### Red Hat Learning Subscription

- **URL**: https://www.redhat.com/en/services/training/learning-subscription
- **Contenuto**: video ufficiali, lab hands-on su RHEL
- **Nota**: a pagamento, usato come riferimento per accuratezza contenuti

---

## Siti e Risorse Online Gratuite

| Risorsa               | URL                             | Utilizzato per                     |
| --------------------- | ------------------------------- | ---------------------------------- |
| Red Hat Docs RHEL9    | access.redhat.com/documentation | Accuratezza comandi, man page      |
| VMExam EX200 samples  | vmexam.com                      | Campioni domande                   |
| ITExams EX200 (111 Q) | itexams.com                     | Pool domande aggiornato Feb 2026   |
| MaccGenics notes      | maccgenics.com                  | Note riassuntive per topic         |
| LabEx RHCSA           | labex.io                        | Scenari hands-on (riferimento)     |
| OzzoyBits Black Book  | gumroad.com                     | 200 domande practice (ispirazione) |
| Linux man7.org        | man7.org/linux/man-pages        | Man page di riferimento            |

---

## Struttura quiz pool (stima)

| Topic                       | Domande MCQ previste |
| --------------------------- | -------------------- |
| Topic 1: Essential Tools    | 25                   |
| Topic 2: Shell Scripts      | 15                   |
| Topic 3: Operating Systems  | 25                   |
| Topic 4: Local Storage      | 20                   |
| Topic 5: File Systems       | 20                   |
| Topic 6: Deploy & Maintain  | 15                   |
| Topic 7: Networking         | 20                   |
| Topic 8: Users & Groups     | 15                   |
| Topic 9: SELinux & Security | 25                   |
| Topic 10: Containers        | 20                   |
| **TOTALE**                  | **~200 domande**     |

---

## Nota sulla qualità dei contenuti

I quiz MCQ per RHCSA **non sono ufficiali** (Red Hat non ne pubblica). Sono creati a partire da:

1. Obiettivi ufficiali EX200
2. Libri di studio certificati
3. Community practice questions (verificate)
4. Scenari reali da blog e forum (serverfault, reddit r/redhat)

Ogni domanda viene classificata per:

- `topicId` (1-10)
- `lessonId` (es. `rhcsa-1-1`)
- `difficulty`: `easy` | `medium` | `hard`
- `type`: `mcq` | `command` | `concept`
