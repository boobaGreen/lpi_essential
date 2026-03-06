export const rhcsaExtendedContentFR = {
  'rhcsa-1-1': {
    title: 'Analyse Détaillée : Redirection Avancée et Descripteurs',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Descripteurs de Fichiers sous Linux' },
      { type: 'paragraph', text: 'Sous Linux, "tout est un fichier", y compris les flux d\'entrée/sortie. Chaque processus possède trois descripteurs de fichiers (FD) standards ouverts :' },
      { type: 'table', headers: ['FD', 'Nom', 'Fonction Standard'], rows: [
        ['0', 'stdin', 'Entrée clavier'],
        ['1', 'stdout', 'Sortie terminal (succès)'],
        ['2', 'stderr', 'Sortie terminal (erreurs)'],
      ]},
      { type: 'code', title: 'Redirections Combinées', prompt: '# Écrit stdout dans un fichier et masque stderr\n$ command > output.txt 2> /dev/null\n\n# Redirige stderr vers stdout (2>&1), puis stdout vers le fichier\n$ command > output.txt 2>&1\n\n# Raccourci Bash pour regrouper stderr et stdout\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Astuce d\'Examen', content: 'Lors de l\'utilisation de commandes comme find générant des erreurs de permission, ajoutez "2> /dev/null" pour garder un affichage propre.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Analyse Détaillée : Architecture LVM',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Physique vs Logique' },
      { type: 'paragraph', text: 'La gestion des volumes logiques (LVM) ajoute une couche d\'abstraction entre les disques physiques et le système de fichiers, permettant une flexibilité impossible avec les partitions classiques.' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'Bloc de base du LVM (4 Mo par défaut). Un PV est divisé en PE.' },
        { term: 'Logical Element (LE)', desc: 'Correspond au PE selon un ratio de 1 pour 1 (ou 1:N en miroir).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'À l\'examen, il peut être demandé de créer un groupe de volumes (VG) avec une taille de PE spécifique, par exemple "vgcreate -s 16M mvg /dev/sdb1".' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Analyse Détaillée : Dépannage SELinux',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Procédure de Résolution' },
      { type: 'paragraph', text: 'SELinux bloque mystérieusement un service. Que faire ?' },
      { type: 'timeline', events: [
        { year: 'Étape 1', title: 'Vérifier la cause SELinux', desc: 'Lancez "setenforce 0" et redémarrez le service. S\'il fonctionne, SELinux est en cause. Réactivez avec "setenforce 1".' },
        { year: 'Étape 2', title: 'Inspecter les journaux', desc: 'Consultez le fichier /var/log/audit/audit.log à la recherche des refus "denied" ou passez par "ausearch -m AVC -ts recent".' },
        { year: 'Étape 3', title: 'Trouver la solution', desc: 'Les outils comme "sealert -a /var/log/audit/audit.log" fourniront la ligne de code exacte pour autoriser le processus (via setsebool ou semanage).' },
      ]},
    ]
  }
}
