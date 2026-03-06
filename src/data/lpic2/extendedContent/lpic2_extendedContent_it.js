export const lpic2_extendedContent_it = {
  'lpic2-200-1': {
    title: "Monitoraggio dell'Utilizzo delle Risorse",
    content: `
# Approfondimento: Misurazione e Risorse

La pianificazione della capacità (Capacity Planning) parte dalla comprensione del carico attuale del tuo server. Per l'esame LPIC-2, è vitale decifrare colli di bottiglia in I/O, Memoria e Rete.

## Lettura della Memoria con vmstat
Il comando \`vmstat\` rivela quanto il sistema sia sotto pressione scambiando pagine (swap):
\`\`\`bash
vmstat 2 5
\`\`\`
Questo campiona lo stato 5 volte, con 2 secondi di intervallo. Guarda le colonne \`si\` (swap in) e \`so\` (swap out) per capire se stai esaurendo la RAM reale.

## Monitorare i Dischi (I/O)
Con \`iostat\` dal pacchetto \`sysstat\`:
\`\`\`bash
iostat -x 1
\`\`\`
La statistica estesa mostra due colonne critiche:
- \`%util\`: percentuale della banda I/O impegnata (se arriva a 100%, il disco è il collo di bottiglia).
- \`await\`: attesa media richiesta dai processi per scrivere o leggere.
    `
  }
}
