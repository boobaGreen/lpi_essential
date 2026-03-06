export const lpic2_extendedContent_fr = {
  'lpic2-200-1': {
    title: 'Analyse et Mesure des Ressources',
    content: `
# Étude Approfondie : Monitorer les Capacités Systèmes

La première phase du "Capacity Planning" (thème 200) commence en posant un diagnostic structurel de votre environnement. 

## Diagnostic de la Mémoire Vive
En utilisant \`free -m\` ou \`vmstat\`. L'outil \`vmstat\` permet une approche quantitative des goulots d'étranglement (bottlenecks).
\`\`\`bash
vmstat 2 5
\`\`\`
Ce script sollicite 5 échantillons avec un laps de temps de 2 secondes. Prêtez une attention particulière aux valeurs de la zone "swap" telles que \`si\` (swap in) et \`so\` (swap out).

## Inspecter les Entrées et Sorties de Bloc (I/O)
L'utilitaire incontournable d'investigation est \`iostat\`, compilé dans le package sysstat :
\`\`\`bash
iostat -x 2
\`\`\`
Ses colonnes expertes incluent :
- \`%util\` : Temps total d’occupation où des requêtes ont affecté l'appareil de bloc.
- \`await\` : La moyenne historique (en ms) passée par un signal pour traverser la trame d'opération.
    `
  }
}
