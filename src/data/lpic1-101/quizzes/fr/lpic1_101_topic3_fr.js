// LPIC-1 101 Topic 3 Quiz - French

export const lpic1_101_topic3_fr = [
  // L1: Ligne de commande
  {
    id: 10311,
    question: "Laquelle de ces syntaxes symbolise exactement la méthode approuvée pour assigner, en substitution mémorielle temporaire à ce terminal, la chaîne textuelle 'Bonjour' au sein d'une coquille de variable locale nommée 'SALUTATION' sous Bash ?",
    options: [
      "set SALUTATION = Bonjour",
      "SALUTATION='Bonjour'",
      "SALUTATION = 'Bonjour'",
      "export $SALUTATION=Bonjour"
    ],
    correctAnswer: "SALUTATION='Bonjour'",
    explanation: "Bash interdit formellement d'espacer l'opérateur '=' lors des affections variables directes absolues. L'incorporation s'y fait collée sous la formulation NOM=VALEUR."
  },
  {
    id: 10312,
    question: "Afin de valider de fait qu'un utilisateur n'appelle pas un alias trompeur 'rm' réécrit, mais exécute purement et simplement le véritable binaire de destruction UNIX stocké au disque... Quel outil analyse et révélera le typage de son nom de commande ?",
    options: [
      "whereis rm",
      "type rm",
      "whatis rm",
      "find rm"
    ],
    correctAnswer: "type rm",
    explanation: "'type' certifiera si le verbe invoqué est une Fonction locale shell, un Alias abstrait, un Builtin Natif RAM (comme cd), ou bien s'il provient véridiquement du programme externe cible '/bin/rm' !"
  },
  {
    id: 10313,
    question: "Un administrateur veut rendre la variable locale MYSQL_PORT='3306' accessible et transmise 'en Héritage filial Systèmes' à tout sous-scripts ou application qu'il lancera ultérieurement de cette même console dynamique. Quelle commande libère sa mémoire en ce sens ?",
    options: [
      "global MYSQL_PORT",
      "export MYSQL_PORT",
      "bash_ENV MYSQL_PORT",
      "publish MYSQL_PORT"
    ],
    correctAnswer: "export MYSQL_PORT",
    explanation: "La directive shell (builtin) 'export' transmute l'accessibilité restreinte locale vers la sphère Globale d'Environnement, s'assurant son assimilation dans les processus fils naissants (lisible via commande 'env')."
  },

  // L2: Filtres
  {
    id: 10321,
    question: "Quelle commande standard Unix (Le ciseau textuel !) va sectionner un fichier brut et n'extraire spécifiquement QUE la 3eme colonne (délimitée via le marqueur Deux-Points ':') des lignes tabulaires lues ?",
    options: [
      "cut -d: -f3 fichier.txt",
      "cut -c ':' -N 3 fichier.txt",
      "grep -d ':' -f 3 fichier.txt",
      "awk ':' print 3"
    ],
    correctAnswer: "cut -d: -f3 fichier.txt",
    explanation: "'cut' est le scalpel des tables (CSV, Passwd). '-d' fixe son Delimiter exclusif. L'option '-f' choisit le segment (Field) du tronc tronçonné à la cible d'affichage demandée."
  },
  {
    id: 10322,
    question: "Pour surveiller activement sous Terminal, seconde après seconde et sans interruption, l'apparition de nouvelles lignes écrites en temps réel aux fonds des messages logs applicatifs d'Apache, on invoquera :",
    options: [
      "cat -all /var/log/apache.log",
      "tail -f /var/log/apache.log",
      "head -end /var/log/apache.log",
      "less +F /var/log/apache.log"
    ],
    correctAnswer: "tail -f /var/log/apache.log",
    explanation: "Le flag '-f' (Follow / Suivre) ordonne à l'application 'tail' de geler indéfiniment l'écoute et de renvoyer fluidement vers le moniteur tout apport instantané nouveau concaténé à la queue de ce dossier cible !"
  },
  {
    id: 10323,
    question: "Vous souhaitez énumérer exclusivement le décompte brut du 'Nombre Total de Lignes' présent parmi les dix milles pages textuelles du document 'guerre_et_paix.txt'.",
    options: [
      "count -l guerre_et_paix.txt",
      "wc -l guerre_et_paix.txt",
      "grep -c '*' guerre_et_paix.txt",
      "tail -n count guerre_et_paix.txt"
    ],
    correctAnswer: "wc -l guerre_et_paix.txt",
    explanation: "'wc' (Word Count) répertorie le poids du texte Unix. Par le modificateur -l (Lines), son affichage se borne strictement au résumé brut mathématique quantitatif de retours chariots."
  },

  // L3: Fichiers de base
  {
    id: 10331,
    question: "La commande massive 'find' ratisse chirurgicalement de A à Z la topographie arbre des arborescences réelles, alors que l'application d'indexation base 'locate' repose elle techniquement sur :",
    options: [
      "Une recherche web distante",
      "Un balayage live des disques durs RAM uniquement",
      "La lecture quasi instantanée d'une base de données locale (updatedb) mise en cache préalablement au cœur du système cron nocturne.",
      "Des requêtes DNS au kernel"
    ],
    correctAnswer: "La lecture quasi instantanée d'une base de données locale (updatedb) mise en cache préalablement au cœur du système cron nocturne.",
    explanation: "'locate' ne touche formellement jamais à vos disques pour scrupuler une existence. Il 'lit' le dictionnaire index recensé mlocate.db la veille ! Un document né de ce matin lui échappera purement d'existence en réponse native."
  },
  {
    id: 10332,
    question: "Le gestionnaire de bande magnétique 'tar' ne compresse par nature historique aucune donnée ! Avec l'ajout de quelle(S) lettre(s) d'opérations combinées va-t-on Forger (Créer) un nouveau fichier et y appeler secrètement le sous-programme Gzip algorithmique fort ?",
    options: [
      "tar -xjf dossier",
      "tar -czvf mondossier.tar.gz dossier_cible",
      "tar -create -zip dossier_cible",
      "gzip -tar mondossier"
    ],
    correctAnswer: "tar -czvf mondossier.tar.gz dossier_cible",
    explanation: "C : Create un Tarball. Z : Invoque l'artisan GZIP. V : Verbosité texte d'opérations. F : Définit l'aboutissement au nom de cible File d'écriture ('mondossier.tar.gz')."
  },

  // L4: Flux
  {
    id: 10341,
    question: "Laquelle de ces syntaxes Unix détruira l'état visuel du Stdout 1 (en le jetant purement aux abysses numériques d'une poubelle /dev/null), MAIS prendra l'ingéniosité de lier de forces solidaires l'émission des alarmes d'Erreurs fatals 2 VERS la passerelle désormais vide du point canal 1 ?",
    options: [
      "find / -name 'conf' > /dev/null 2>&1",
      "find / -name 'conf' 2> /dev/null > 1",
      "find / -name 'conf' | dev null 2 1",
      "find / -name 'conf' >> /dev/null &2=1"
    ],
    correctAnswer: "find / -name 'conf' > /dev/null 2>&1",
    explanation: "C'est l'idiome de redirection absolue Linux: '> /dev/null' détruit tout succès au néant. Ensuite '2>&1' intime au Flux Error de dévier intégralement sa production d'Avertissements (Permission denied) sur le rail d'évacuation 1 !"
  },
  {
    id: 10342,
    question: "Quelle commande de Tuyauterie Plomberie Console 'Bifurque en Y' le fluide ascendant d'un texte d'outil pour EN MEME TEMPS le graver immortel sur un fichier d'archives, TOUT en continuant de l'abreuver à son successeur de file terminale de l'écran ?",
    options: [
      "cat fic.txt | split save.txt | grep root",
      "cat fic.txt | tee save.txt | grep root",
      "cat fic.txt >> save.txt | grep root",
      "cat fic.txt > tee.txt & grep root"
    ],
    correctAnswer: "cat fic.txt | tee save.txt | grep root",
    explanation: "'tee' lit l'afflux originel d'entrée au pipeline terminal (stdin), l'écrit physiquement sur une archive morte donnée (save.txt), copie par copie, et continue avec bravoure de l'écouler sans failles dans le flux au prochain binaire du bout!"
  },

  // L5: Gestion des Process
  {
    id: 10351,
    question: "Un serveur de test Node ne répond plus du tout. Vous recourez donc à la mesure Fatale Kernel d'éradication sans-appel, oblitérant directement (SigKill) son numéro de série Proc. Laquelle l'exécute ?",
    options: [
      "kill -15 3042",
      "kill -9 3042",
      "killall node",
      "kill -stop 3042"
    ],
    correctAnswer: "kill -9 3042",
    explanation: "Le Modificateur '-9' ordonne au Noyau un Homicide Matériel au programme PID 3042 sans lui accorder l'avertissement de politesse de grâce SIGTERM (-15 par défaut). Le programme ne sait même pas qu'il meurt, la mémoire lui est coupée net."
  },
  {
    id: 10352,
    question: "Oups ! Vous venez d'amorcer le téléchargement monstrueux complet de 'Wget' recouvrant votre invite bash... sans placer l'esperluette '&' au bout ! Quelle combinaison le paralyse instantanément l'envoyant au congélateur temporaire (Suspension Job) pour reprendre un Shell vide ?",
    options: [
      "Ctrl + C",
      "Ctrl + D",
      "Ctrl + Z",
      "Alt  + F4"
    ],
    correctAnswer: "Ctrl + Z",
    explanation: "'Ctrl+Z' cloue la Tâche. Le système stoppe son exécution machine l'intitulant de 'Stopped Process'. Vous récupérez les manettes, et pourrez l'envoyer au loin sous terre d'opérations fantôme fond par 'bg' (background) !"
  },

  // L6: Priorité
  {
    id: 10361,
    question: "Par l'horloge UNIX ordonnançante des ressources (Scheduler) d'Amabilités de Temps 'NICE (NI)' ; Lequel de cet échelon rend la vie la plus égoïste, hostile, absolue et dévorante temps vis-à-vis des autres OS processus serveurs  ?",
    options: [
      "La Valeur Positive de +19",
      "La Valeur Négative de -20",
      "La Valeur Centrale de 0",
      "La Valeur de +10"
    ],
    correctAnswer: "La Valeur Négative de -20",
    explanation: "Un taux Négatif décrète l'Urgence Prioritaire Majeure et sans partage ressource OS. C'est tant un pouvoir extrême d'Agression que SEUL son Administrateur Linux (root) est autorisé à user pour redonner force vive à un applicatifs du noyau base ! (Un Nice positif de 19 rend très poli, et lent !)"
  },

  // L7: Regex
  {
    id: 10371,
    question: "Dans la littérature cryptique filtrante d'Expression Régulière (RegEx Basic), l'Ancre d'attachement symbolisée par le Chapeau Caret `^` indique la contrainte ferme qu'un mot matche avec succès si et uniquement si :",
    options: [
      "Il est placé exactement et scrupuleusement pur au tout premier caractère absolu initial de sa ligne.",
      "Il ne contient aucune voyelle Unix.",
      "Il termine la ligne (Précédent le saut retour).",
      "Il est répété un nombre infini d'étoiles fois."
    ],
    correctAnswer: "Il est placé exactement et scrupuleusement pur au tout premier caractère absolu initial de sa ligne.",
    explanation: "Le Caret circonflexe '^' contraint du grep l'alignement formel des chaines textes. Par exemple ^Error échouera à voir de la ligne 'Ceci est une Error'. (L'ancreur opposé imposant de figer les arrêts sur la Fin des phrases est le Dollar '$')."
  },

  // L8: Vi
  {
    id: 10381,
    question: "Quel enchaînement inaudible de frappe l'éditeur modal primitif 'VI' comprend-il par pur automatisme en 'Mode de Commande Base' aux fins de Découper-Supprimer purement l'entièreté matérielle textuelle d'une ligne d'un coup de poignard ?",
    options: [
      "La séquence ctrl+del",
      "La lettre 'y' suivie de 'y'",
      "La combinaison 'd' tapée deux fois consécutivement : 'dd'",
      "Les touches Alt + X"
    ],
    correctAnswer: "La combinaison 'd' tapée deux fois consécutivement : 'dd'",
    explanation: "Le monde 'Command Mode' primitif lit vos claviers de raccourci. 'dd' purge la zone d'une ligne (Delete). Pour copier une ligne en RAM tampon par le Vi, l'ordre Yankee exécute logiquement par 'yy' (Yank)."
  }
]
