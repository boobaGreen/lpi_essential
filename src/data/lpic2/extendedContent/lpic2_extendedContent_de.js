export const lpic2_extendedContent_de = {
  'lpic2-200-1': {
    title: 'Ressourcennutzung messen',
    content: `
# Tiefergehende Analyse: Systemressourcen effektiv messen

Die Kapazitätsplanung (Capacity Planning) beginnt mit dem Verständnis der Systembasis. Um LPIC-2 zu bestehen, müssen Sie in der Lage sein, Flaschenhälse zu diagnostizieren.

## Arbeitsspeicher überwachen
Mit \`free -m\` oder \`vmstat\`. Der Befehl \`vmstat\` zeigt, wie sehr das System belastet ist.
\`\`\`bash
vmstat 2 5
\`\`\`
Dies führt das Tool 5 Mal im Abstand von 2 Sekunden aus. Achten Sie auf Swap-Engpässe über \`si\` (swap in) und \`so\` (swap out).

## Festplatten-I/O kontrollieren
Ein extrem leistungsstarkes Werkzeug aus dem \`sysstat\`-Paket ist \`iostat\`:
\`\`\`bash
iostat -x 2
\`\`\`
Dies bietet erweiterte Statistiken wie:
- \`%util\`: Prozentsatz der I/O-Bandbreitenauslastung.
- \`await\`: Die durchschnittliche Wartezeit in Millisekunden für E/A-Anforderungen.
    `
  }
}
