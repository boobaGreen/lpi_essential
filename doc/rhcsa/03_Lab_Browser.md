# 🖥️ Simulazione Lab Browser — Ricerca

## Domanda

> "Non riusciamo a simulare in nessun modo Lab hands-on senza backend?"

## Risposta: SÌ, è tecnicamente possibile — con WebAssembly

Esistono tecnologie che permettono di eseguire un vero Linux nel browser **senza alcun backend**, tramite **WebAssembly (WASM)**.

---

## Tecnologie disponibili

### 1. v86 (⭐ Consigliato per Fase 2)

- **Repo**: https://github.com/copy/v86
- **Funzionamento**: emula CPU x86 in JS/WASM, boota distro Linux reali (Alpine, Debian, Buildroot)
- **Demo live**: https://copy.sh/v86/
- **Aggiornato**: Gennaio 2026 (attivo)
- **Pro**: vero Linux, comandi reali, nessun backend
- **Contro**: lento al boot (~10-30s), immagine disco da scaricare (~50-200MB), non è RHEL
- **Usabilità RHCSA**: ⭐⭐⭐ (Alpine != RHEL, ma bash/comandi base funzionano)

### 2. WebVM 2.0

- **URL**: https://webvm.io
- **Funzionamento**: Linux completo (Debian) con desktop in WASM
- **Anno**: 2024
- **Problema**: troppo pesante per un task embedded in una lezione

### 3. container2wasm

- **Repo**: https://github.com/ktock/container2wasm
- **Funzionamento**: converte container OCI (es. `ubi9` di Red Hat) in WASM
- **Pro**: potrebbe usare un'immagine UBI9 (compatibile RHEL!)
- **Contro**: conversione complessa, dimensioni grandi

### 4. Linux Kernel in WASM (sperimentale)

- **Stato**: proof of concept (fine 2025), non production-ready

### 5. Simulatore "fake" (già presente in LinuxQuest) ✅

- Il `TerminalChallenge` già esistente simula comandi senza Linux reale
- Approccio: riconoscimento pattern comandi → output scriptato
- **Estendibile per RHCSA** con comandi specifici

---

## Proposta di implementazione (3 livelli)

### Livello 1 — Simulatore statico ✅ (Fase 1, subito)

Estendere il `TerminalChallenge` esistente con scenari RHCSA:

```
Scenario: "Crea un utente 'mario' con UID 1500"
Atteso:   useradd -u 1500 mario
Feedback: ✅ Corretto! / ❌ Prova con useradd -u <uid> <nome>
```

- **Sforzo**: basso (riuso componenti esistenti)
- **Fedeltà**: media (non esegue davvero)

### Livello 2 — v86 embedded (Fase 2, opzionale)

Embedding v86 con Alpine Linux per lab specifici:

- Boot Alpine Linux minimale in iframe
- Scenario pre-configurato (utenti, file, etc.)
- Studente esegue comandi reali
- **Sforzo**: alto (integrazione WASM, preparazione immagini disco)
- **Fedeltà**: alta (Linux reale, ma non RHEL)

### Livello 3 — container2wasm con UBI9 (Fase 3, ricerca avanzata)

- Immagine `ubi9` di Red Hat convertita in WASM
- Comandi RHEL-specific (dnf, systemctl simulato, etc.)
- **Sforzo**: molto alto, incerto
- **Fedeltà**: molto alta

---

## Decisione consigliata

| Fase       | Approccio                                | Quando               |
| ---------- | ---------------------------------------- | -------------------- |
| **Fase 1** | Simulatore statico (TerminalChallenge)   | Subito               |
| **Fase 2** | v86 Alpine embedded per labs selezionati | Dopo contenuti base  |
| **Fase 3** | container2wasm UBI9                      | Valutare dopo Fase 2 |

> 💡 Il Livello 1 copre il 70% del valore didattico con il 10% dello sforzo del Livello 2.
