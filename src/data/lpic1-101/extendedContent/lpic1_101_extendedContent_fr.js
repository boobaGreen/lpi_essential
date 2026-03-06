// LPIC-1 101 Extended Content  French
// Rich structured sections for ExtendedContent.jsx

export const lpic1_101_extendedContent_fr = {

  'lpic1-101-1-1': {
    title: 'Composants Physiques et BIOS/UEFI — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Matériel Principal et Commandes de Diagnostic' },
      { type: 'paragraph', text: 'Dans un système Linux, tout le matériel connecté est détecté par le noyau lors du démarrage (ou à chaud), et l\'information est exportée vers le pseudo-système de fichiers /sys et /proc.' },
      { type: 'table', headers: ['Composant', 'Commande de Diagnostic', 'Chemin/Fichier Pertinent'], rows: [
        ['CPU', 'lscpu', '/proc/cpuinfo'],
        ['RAM', 'free -m, dmidecode -t memory', '/proc/meminfo'],
        ['PCI / Cartes', 'lspci', '/sys/bus/pci/devices/'],
        ['USB', 'lsusb', '/sys/bus/usb/devices/'],
        ['Disques', 'lsblk, fdisk -l', '/dev/sda, /dev/nvme0n1'],
      ]},
      { type: 'heading', level: 2, emoji: '🔄', text: 'BIOS vs UEFI' },
      { type: 'paragraph', text: 'Le firmware pré-OS initialise le matériel et charge le chargeur d\'amorçage. La transition du BIOS vers l\'UEFI apporte des différences fondamentales.' },
      { type: 'comparison', left: {
        title: 'BIOS Classique',
        items: ['Architecture 16 bits', 'Utilise le schéma de partition MBR (Max 2 To)', 'Exécute le chargeur d\'amorçage logé dans le premier secteur du disque', 'Ne possède pas de contrôle natif du firmware opérationnel']
      }, right: {
        title: 'UEFI',
        items: ['Architecture 32 ou 64 bits', 'Utilise le schéma de partition GPT (Jusqu\'à 9.4 ZB)', 'Nécessite une partition spéciale EFI (ESP, FAT32)', 'Supporte le Secure Boot']
      }},
      { type: 'infobox', variant: 'exam', content: 'Pour l\'examen : Rappelez-vous que lsusb et lspci extraient des informations en temps réel, tandis que les fichiers dans /proc et /sys sont directement lus par ces utilitaires et d\'autres. La commande lsmod sert à lister les modules (pilotes) chargés, et modprobe à les charger.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Le Processus de Démarrage — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Du Bouton d\'Alimentation au Noyau' },
      { type: 'paragraph', text: 'Le processus de démarrage de Linux suit des étapes séquentielles. Si l\'une échoue, le système ne démarre pas.' },
      { type: 'list', items: [
        { term: '1. POST et Firmware', desc: 'Mise sous tension, test matériel, recherche du périphérique de démarrage.' },
        { term: '2. Chargeur d\'Amorçage (GRUB2)', desc: 'Chargé depuis le MBR ou la partition EFI. GRUB affiche le menu et charge le noyau en mémoire.' },
        { term: '3. Noyau et Initramfs', desc: 'Le noyau Linux s\'exécute, monte l\'initramfs (un disque temporaire en RAM) pour charger les modules de stockage critiques.' },
        { term: '4. Pivot Racine', desc: 'Le noyau change la racine de l\'initramfs vers le vrai disque dur.' },
        { term: '5. Processus Init (Systemd)', desc: 'Le noyau exécute le PID 1 (systemd ou SysVinit), qui démarre tous les services utilisateurs.' },
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'dmesg et le tampon circulaire du noyau' },
      { type: 'paragraph', text: 'Tous les messages générés par le noyau lors du démarrage (et après) sont sauvegardés dans un tampon en mémoire.' },
      { type: 'code', title: 'Commandes pour lire les journaux du noyau', prompt: '# Lire tout le dmesg\n$ dmesg\n\n# Filtrer le dmesg pour les erreurs liées à l\'USB\n$ dmesg | grep -i usb\n\n# Effacer le tampon circulaire du noyau\n$ dmesg -c\n\n# Voir tous les fichiers journaux persistants\n$ ls /var/log/messages', output: '' },
    ]
  },

  'lpic1-101-3-1': {
    title: 'Runlevels et Cibles Systemd — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🚦', text: 'SysVinit : Les 7 Runlevels Classiques' },
      { type: 'table', headers: ['Runlevel (Niveau)', 'Description', 'Équivalent dans la Cible Systemd'], rows: [
        ['0', 'Éteindre / Halt', 'poweroff.target'],
        ['1, s, S', 'Mode Mono-utilisateur (Secours)', 'rescue.target'],
        ['2', 'Multi-utilisateur sans réseau', 'multi-user.target'],
        ['3', 'Multi-utilisateur COMPLET (texte seul / serveur)', 'multi-user.target'],
        ['4', 'Non utilisé/Libre', 'multi-user.target'],
        ['5', 'Multi-utilisateur COMPLET Graphique (Mode bureau)', 'graphical.target'],
        ['6', 'Redémarrer / Reboot', 'reboot.target'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Systemd : Gestion des Cibles (Targets)' },
      { type: 'paragraph', text: 'Systemd, l\'init moderne par défaut, remplace les runlevels par des fichiers `.target`.' },
      { type: 'code', title: 'Commandes d\'état et de changement de niveau', prompt: '# Obtenir la cible par défaut (sur laquelle le PC démarre)\n$ systemctl get-default\n\n# Changer la cible par défaut au mode texte\n$ sudo systemctl set-default multi-user.target\n\n# Passer à la volée en mode graphique sans redémarrer\n$ sudo systemctl isolate graphical.target', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Rescue vs Emergency', content: 'rescue.target (runlevel 1) monte le système de fichiers local et demande le mot de passe root. emergency.target est encore plus radical : il monte la racine en lecture seule et NE démarre PAS le réseau ou les services secondaires.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Schémas de Partitionnement et Montages — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '💽', text: 'Disposition du Disque Dur (Hard Disk Layout)' },
      { type: 'paragraph', text: 'Le programme d\'installation Linux exige le partitionnement du disque. Bien qu\'il soit possible de tout installer dans une seule partition racine (/), l\'examen LPIC-1 exige de connaître les meilleures pratiques structurelles pour les serveurs.' },
      { type: 'table', headers: ['Point de Montage', 'Utilisation/Contenu', 'Pourquoi séparer ?'], rows: [
        ['/ (Racine)', 'Fichiers principaux du système d\'exploitation', 'Le minimum absolu pour démarrer le système.'],
        ['/boot', 'Noyau et chargeur d\'amorçage statiques', 'Fichiers de démarrage sécurisés ; peut nécessiter de l\'Ext4 classique selon la configuration.'],
        ['/home', 'Données et fichiers personnels des utilisateurs', 'Si vous réinstallez le système, vous conservez tous vos fichiers.'],
        ['/var', 'Journaux système, bases de données, spools', 'Empêche qu\'un journal incontrôlé ne remplisse la partition racine et ne fasse planter la machine.'],
        ['swap', 'Mémoire virtuelle étendue (partition aveugle)', 'Prévient les plantages lorsque la mémoire RAM physique est pleine.'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Répertoires Intouchables', content: 'Attention ! Il existe des répertoires vitaux qui ne peuvent pas être séparés dans d\'autres partitions que /. Ce sont : /bin, /sbin, /lib, /etc et /dev. Ils contiennent des utilitaires et des bibliothèques dont le processus de montage des partitions a lui-même besoin pour pouvoir les monter.' },
    ]
  },

  'lpic1-102-2-1': {
    title: 'Chargeur d\'Amorçage (Bootloaders) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'GRUB2 (GRand Unified Bootloader)' },
      { type: 'paragraph', text: 'Le chargeur d\'amorçage standard moderne qui domine les systèmes Linux et a remplacé GRUB Legacy.' },
      { type: 'list', items: [
        { term: 'Emplacement BIOS/MBR', desc: 'Sa partie initiale (Stage 1) réside dans les 512 premiers octets du disque pur.' },
        { term: 'Partition EFI', desc: 'Sur les systèmes UEFI standards, il réside dans le répertoire monté /boot/efi/EFI/ubuntu/grubx64.efi.' },
        { term: 'Configuration Humaine', desc: '/etc/default/grub (Où l\'on détermine la résolution graphique et les paramètres forcés du noyau).' },
        { term: 'Dossier de Scripts', desc: '/etc/grub.d/ (Scripts de générateurs natifs de recherche automatique d\'OS).' },
        { term: 'Le Binaire Intouchable', desc: '/boot/grub/grub.cfg (NE JAMAIS MODIFIER À LA MAIN. Écrasé par la commande de compilation).' },
      ]},
      { type: 'code', title: 'Interaction et Compilation Classique', prompt: '# Régénérer le menu cfg final compilé de GRUB (Debian/Ubuntu)\n$ sudo update-grub\n\n# Véritable commande universelle sous-jacente (RHEL et autres)\n$ sudo grub-mkconfig -o /boot/grub/grub.cfg\n\n# Installation de GRUB (réparation du stage 1 MBR sur le disque dur)\n$ sudo grub-install /dev/sda', output: '' },
      { type: 'table', headers: ['Interface et Menu Dynamique GRUB', 'Fonctionnalité'], rows: [
        ['Appuyer sur la Touche "e"', 'En se positionnant sur la ligne du Système d\'Exploitation, l\'écran s\'ouvre alors dans un champ de texte provisoire permettant d\'ajouter et modifier la chaîne du paramètre du Noyau en mémoire volatile avant le DÉMARRAGE. (Utile pour injecter le drapeau init=/bin/bash).'],
        ['Appuyer sur la Touche "c"', 'Ouvre l\'invite de commande brute (shell grub), avec des pouvoirs sur initrd, linux et boot.'],
      ]},
    ]
  },

  'lpic1-102-3-1': {
    title: 'Bibliothèques Partagées — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '📚', text: 'Les Objets Partagés (.so)' },
      { type: 'paragraph', text: 'Équivalent sous Linux des fameuses bibliothèques DLL (Dynamic Link Libraries) de Windows, ce sont les Objets Partagés (Shared Objects). Ils résident et reposent principalement dans /lib, /usr/lib et l\'espace expérimental de /usr/local/lib.' },
      { type: 'code', title: 'Commandes Clés et Essentiel LPIC', prompt: '# 1. LDD (List Dynamic Dependencies) : Vérifier ce qui manque pour faire fonctionner un exécutable\n$ ldd /bin/ls\n      linux-vdso.so.1 (0x00...)\n      libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00...)\n\n# 2. LDCONFIG : Metteur à jour du cache et pointeur aveugle\n# Parcourt /etc/ld.so.conf en cherchant de nouvelles bibliothèques physiques installées\n$ sudo ldconfig', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Scénario LPIC : Vous avez compilé et glissé la bibliothèque libnova.so.1 dans le dossier /usr/local/lib du serveur, mais votre application avorte avec une erreur et dit ne pas trouver libnova. Résolution : Vous devez lancer la commande `ldconfig` pour forcer le Noyau à mettre à jour les indexations des pointeurs du `ld.so.cache`.' },
      { type: 'list', items: [
        { term: 'La Variable Divine : LD_LIBRARY_PATH', desc: 'C\'est le joker (Override). Vous l\'exportez dans la console pour forcer le noyau à regarder dedans et à prioriser ce dossier customisé en premier, à la recherche de versions obsolètes de la bibliothèque (export LD_LIBRARY_PATH=/opt/ancienne_app/libs/)' },
      ]},
    ]
  },

  'lpic1-102-4-1': {
    title: 'Gestionnaire de Paquets Debian (APT/dpkg) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Outil de Base de Bas Niveau (dpkg)' },
      { type: 'paragraph', text: 'Dpkg n\'a pas internet et manque de pouvoir de résolution de dépendances ; il traite simplement et aveuglément des fichiers `.deb` locaux téléchargés par l\'homme.' },
      { type: 'table', headers: ['Syntaxe de Combat (dpkg)', 'Résultat et Comportement', 'Fil Rouge LPIC'], rows: [
        ['dpkg -i paquet.deb', 'Installateur officiel primaire', 'Installe/Met à jour le paquet local aveuglément, ou jette une erreur massive de dépendance de bibliothèque.'],
        ['dpkg -r vim', 'Suppression Moyenne (Remove)', 'Supprime les bits exécutables mais préserve les configurations personnalisées humaines de /etc/.'],
        ['dpkg -P apache2', 'Suppression Génocidaire (Purge)', 'Exclut tout du système de fichiers en incluant et effaçant toutes les configurations puristes.'],
        ['dpkg -l', 'Lister tous les logiciels', 'Affiche ce qui est installé localement. `dpkg -l | grep ssh` est utile.'],
        ['dpkg -S /bin/bash', 'Moteur de Recherche Inversée (Search)', 'Retourne en sortie `bash: /bin/bash`. Indique qui a installé ce fichier mystérieux dans le dossier.'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Gestionnaire Global Automatique (APT Tool suite)' },
      { type: 'list', items: [
        { term: 'apt-get update', desc: 'Lit les listes dans les dépôts hébergés distants sur /etc/apt/sources.list et met à jour strictement les dépôts locaux et la table de hachage des infos en RAM, ne télécharge aucun binaire.' },
        { term: 'apt-get upgrade', desc: 'Installe des mises à jour simples et sécuritaires.' },
        { term: 'apt-get dist-upgrade', desc: 'Outil agressif qui force la désinstallation automatique du vieux framework complet pour adopter de nouveaux noyaux de bibliothèques modifiés.' },
        { term: 'apt-cache search', desc: 'Le moteur (Query) servant à trouver si ce logiciel existe sur l\'un des miroirs mondiaux en ligne.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'Le "Oops" de configuration', content: 'Vous avez cassé les permissions, et perdu la configuration par défaut interactive et violette d\'un Debian classique ? Lancez : `dpkg-reconfigure nom_du_paquet_exact`' },
    ]
  },

  'lpic1-102-5-1': {
    title: 'Gestionnaire de Paquets Red Hat (Yum/RPM) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🎩', text: 'Monde Classique RPM (.rpm)' },
      { type: 'paragraph', text: 'L\'analogie à DPkg dans le royaume de CentOS et Fedora. La commande "rpm" gère le téléchargement primaire, tandis que "YUM" ou "DNF" est la toile moderne des URL résolutives (dépôts dans /etc/yum.repos.d/).' },
      { type: 'table', headers: ['Commande RPM', 'Action', 'Observation Supplémentaire Vitale'], rows: [
        ['rpm -i paquet.rpm', 'Installateur de Base', 'Install.'],
        ['rpm -U paquet.rpm', 'Acte Conjoint d\'Update et d\'Install', 'C\'est le choix préféré. Installe s\'il n\'y est pas. Met à jour s\'il y est (Over-rule).'],
        ['rpm -e paquet', 'Erase', 'Erase, l\'équivalent de la Suppression'],
        ['rpm -qa', 'Query All', 'Lister globalement tout.'],
        ['rpm -qf /bin/ls', 'Query File (Propriétaire du Fichier)', 'Même chose que dpkg -S de la famille apt.'],
        ['rpm -V binaire', 'Verify (Examen Légal Aveugle Vital)', 'RPM vérifie le paquet statique en testant les sommes de contrôle MD5. Si le propriétaire de la machine a manipulé en cachette, le système affiche S.5... T indiquant une altération de l\'horodatage interne.'],
      ]},
      { type: 'code', title: 'Arsenal YUM (Remplacé de nos jours par DNF)', prompt: '# Trouver un paquet mondialement en ligne :\n$ yum search nmap\n\n# Appliquer l\'installation aveugle, l\'Auto-Yes et l\'acceptation des clés de signature GPG\n$ yum install -y apache-httpd\n\n# Voir la liste globale des mises à jour en attente du système d\'exploitation hôte\n$ yum check-update\n\n# Nettoyeur Global du Cache Total de la Mémoire Résiduelle des vieux Dépôts\n$ yum clean all', output: '' },
    ]
  },

  'lpic1-101-3-1-1': {
    title: 'La Fenêtre Shell et les Variables (Bash) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '⌨️', text: 'CLI vs Interface Graphique Interactive' },
      { type: 'paragraph', text: 'L\'interface en ligne de commande (CLI) GNU Bash est le standard du pingouin.' },
      { type: 'table', headers: ['Variable d\'Environnement de Base', 'Signification Humaine Brute LPIC', 'Modification Temporaire ou Inspection'], rows: [
        ['$PATH', 'Où le système ira chercher aveuglément dans /bin ou /sbin les invocations externes (ls, rm) sans taper tout le chemin', 'echo $PATH ; export PATH=$PATH:/usr/local/go/bin/'],
        ['$HOME et $USER', 'La petite maison Tilde (~) de connexion de l\'utilisateur (root ou mortel).', 'echo $HOME'],
        ['$HISTFILE / $HISTSIZE', 'Fichier d\'Historique ~/.bash_history et Capacité RAM Max', 'env | grep HIST'],
      ]},
      { type: 'code', title: 'Dompteur de Variables BASH / Exportations Globales', prompt: '# 1. Set montre une pluie gigantesque de Variables Fonctionnelles Privées (locales à cette coquille PID active).\n$ set\n\n# 2. ENV Montre le Standard de l\'Exportation Universelle (Héritable par les sous-shells et processus enfants bash).\n$ env\n\n# 3. Élever un alias faible au niveau Universel Global pour ses sous-scripts enfants PID\n$ export MON_AVERTISSEMENT="Attention Tout le Monde"\n\n# Contourner silencieusement l\'enregistrement caché du HISTFILE (Commencer par "Espace blanc" avant la commande pwd)\n$ export HISTCONTROL=ignorespace', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Vous devez également maîtriser par cœur pour l\'examen que des commandes atypiques telles que `uptime` (Load Averages Cpu) et `uname -a` (OS Linux version du noyau de base) sont incontournables. Évaluez toujours les commandes "internes à bash" (type cd = is a shell builtin) par rapport aux "externes" (`type ls` indique le dossier).' },
    ]
  },

  'lpic1-101-3-2-1': {
    title: 'Traitement de Canaux, Redirections (Pipes) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🚰', text: 'Les "Standard Streams" E/S Naturels' },
      { type: 'table', headers: ['Le Canal (ID Numérique du Flux)', 'Signification Native Linux Standard Aveugle', 'Redirection Opérationnelle Symbole Shell'], rows: [
        ['0 (STDIN - Standard In)', 'L\'Entrée Aveugle du Clavier. (Attend l\'injection Oculaire Humaine)', '< (Avale un fichier : tr a-z A-Z < minuscule.txt)'],
        ['1 (STDOUT - Standard Out)', 'La Sortie Parfaite. Le "Succès" de la Commande exécutée C Cpp (Liste Propre)', '> (Écrase mortellement overwrite). >> (Colle Aveuglément à la Fin de la Ligne Append)'],
        ['2 (STDERR - Standard Err)', 'Les Aversions Erreurs, Manques de Permissions et Plaintes de Désespoir du Processus', '2> poubelle.log (Efface de l\'Écran et Envoie le Chien aveugle au répertoire de la Corbeille)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'Tubes et Plombier Bash Pipe (|)' },
      { type: 'paragraph', text: 'La barre verticale PIPE connecte et coud miraculeusement la SORTIE (1 STDOUT Vomi propre) de la commande de gauche comme l\'ENTRÉE (0 STDIN de la Faim de Base) de la commande s\'exécutant à l\'extrême droite du tube.' },
      { type: 'code', title: 'Commandes Magiques Piped LPIC', prompt: '# Envoyer la Sortie Succès et l\'Erreur à la poubelle séparément\n$ ls -l /fake /ok > succes.txt 2> erreur.log\n\n# Envoyer tout mélangé 1 et 2 aveuglément (Méthode Legacy UNIX T&C)\n$ ls /fake > combines.txt 2>&1\n\n# Le Moderne Bash Esperluette Supérieur (&>)\n$ ls /fake &> tous.log\n\n# Prendre le gigantesque résidu d\'ordures dmesg, et le canaliser moins dans le paginateur `less` :\n$ dmesg | less', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Le Missile xargs du Pipe', content: 'Souvent, le STDIN provenant de la gauche du Pipe ne s\'intègre pas dans la Commande de Droite qui déteste lire les STDIN vides et purs (p. ex. kill, rm, cp). Lorsqu\'on ajoute `ls *.bak | xargs rm`, votre l\'outil majestueux xargs détruit et fragmente la sortie et la reforme pour l\'assembler de paramètre en paramètre (rm fichier1 fichier2 fichier3).' },
    ]
  },

  'lpic1-101-3-3-1': {
    title: 'Traitement de Base GNU (Filtres Textuels Légers Sed/Awk) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '✂️', text: 'Maître Charpentier de Textes GNU CLI Basics' },
      { type: 'table', headers: ['Le Feu de l\'Action Pure', 'La Raison Fonctionnelle LPIC Pratique', 'Commande Spécifique Maître Local Pure'], rows: [
        ['cat contre tac', 'Cat imprime le texte complet en continu du haut vers le bas. Tac Lit de Haut en bas Z à A en lisant le reverse file.', 'tac inversé.log'],
        ['head / tail', 'Imprime n Lignes du Sommet Début ou de la Fin de la base.', 'tail -f apache.log (La queue vivante accompagnant le Monitor Append Mode en temps réel).'],
        ['sort / uniq', 'Ordonner (-n Numérique et -r inversé), UniQ dévore les Lignes Aveugles Répétées (Oblige à utiliser Sort au préalable).', 'sort a.txt | uniq -c (Compte les Répétitions).'],
        ['wc (Word Counter)', 'Poids Comptables du Fichier : -l (Lignes Aveugles), -w (Mots en chaîne d\'octets), -c (Octets bruts purs)', 'wc -l /etc/shadow'],
        ['cut / paste', 'Lame Trancheuse Mortelle. Le Paste fusionne les colonnes verticales.', 'cut -d: -f 1,7 /etc/passwd (D = délimiteur deux-points ":" F = extraire Colonne Humaine Name Y Colonne 7 Bash)'],
      ]},
      { type: 'code', title: 'Commandes Textuelles Étranges Examen Gnu Linux', prompt: '# 1. Traduire tout aveuglément en petite lettre STD IN (Cat) vers MAJUSCULES\n$ cat p.txt | tr "a-z" "A-Z"\n# Astuce d\'Examen : tr ne prend JAMAIS comme argument natif absolu ni pur le simple chemin complet du fichier et nom (ex: tr ar.txt ERREUR).\n\n# 2. Étendre la tabulation aveugle brute (Tab Space bytes) en blancs doux absolus :\n$ expand -t4 fichier_tabule.txt\n\n# 3. Numéroter les lignes aveuglément d\'un point de vue visuel sans modifier le fichier de pureté originel vim ou cat :\n$ nl fichier.conf', output: '' },
    ]
  },

  'lpic1-101-3-4-1': {
    title: 'Traitement de Texte Avancé (sed / awk) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Le Moteur d\'Édition de Flux (Sed)' },
      { type: 'paragraph', text: 'Outil couteau suisse manipulateur de textes en flux constant. N\'écrit jamais sur le disque par défaut (il n\'expulse visuellement sur le STDOUT que les modifications). Il ne tue et ne sauvegarde le fichier que si l\'on invoque le drapeau suicidaire `-i` (In-Place Edit).' },
      { type: 'code', title: 'Commandes Barbares et Cruelles LPIC SED', prompt: '# 1. Modèle Global de Remplacement S/Déchet/Or/g\n# Le drapeau -g ordonne la répétition dans la phrase pour ne pas s\'arrêter à la 1ère occurrence de la ligne.\n$ sed "s/rouge/bleu/g" document.txt\n\n# 2. Suppression (D) des Lignes Mystiques Trouvées (ex. Faire disparaître les Lignes contenant "ERROR")\n$ sed "/ERROR/d" dmesg_laid.log\n\n# 3. Magicien des Barres Slasher. Changer le chemin des URLs Sans utiliser d\'échappement Panique (\\/var\\/)\n$ sed -i.bak "s#/var/www#/opt/nginx#g" config_master.conf', output: '' },
      { type: 'heading', level: 2, emoji: '📊', text: 'Analytique Textuelle par Colonne (Awk)' },
      { type: 'table', headers: ['Syntaxe Conductrice Awk', 'Objectif Pratique d\'Awk'], rows: [
        ['awk \'{print $1}\'', 'Lit aveuglément chaque Ligne et Imprime isolément uniquement l\'Espace-Colonne 1 de gauche.'],
        ['awk -F":" \'{print $3}\'', 'Drapeau Crucial F (FieldSeparator). Force et enseigne que le délimiteur de la colonne humaine de /etc/passwd est le Deux-points. Imprime le champ 3 de la ligne.'],
        ['$0 VS NF Internes', 'Awk $0 n\'est pas un argument mais une variable magique (Imprime la Ligne Brute entière intacte). NF signifie Number File Field Limit (La Limite Extrême finale).'],
      ]},
    ]
  },

  'lpic1-101-3-5-1': {
    title: 'Surveillance des Entités, Threads et Abattage (PS/KILL) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Systèmes Oculaires de Surveillance Active : (ps et top)' },
      { type: 'paragraph', text: 'Sur la base pure du Noyau Linux, le balayage visuel du PID (Process IDentifier Number) vit caché dans la virtualité de la RAM sous /proc/dossier_ID_numero. Les commandes déchiffrent de façon brute le dossier sur un écran propre.' },
      { type: 'table', headers: ['Commande de Vue Linux', 'Ce qu\'elle Expulse Aveuglément', 'Modificateurs Vitaux LPIC Atroces'], rows: [
        ['ps (Process Snapshot)', 'La Photo statique d\'1 Seconde Vivante ou Morte. Base du Terminal Shell aveugle.', '-ef (BSD Sysv Standard) ou purement free style "aux" (Tous les utilisateurs tty list x).'],
        ['top (Moniteur de Montagne FPS)', 'Panneau dynamique Aveugle actualisable (Fréquence hz 3 sec). Dévore la pure RAM. Appuyez sur P pour le % Mémoire Max. Appuyez sur N pour la valeur Numérique Innocente.', 'top -d 1 (Force l\'actualisation à la limite d\'1 sec). H (Active les Multiples Sous-Threads Visibles)'],
        ['free', 'Totalisateurs de la Mémoire RAM Vivante (Froide) et des Buffers Cache (Déchets Rapides)', '-m (Mégaoctets), -h (Lisible par l\'Humain).'],
        ['uptime / w', 'Compte Lent des Jours de Vie de la Machine Allumée sur l\'Horloge', 'Montre les Sacrés Load Averages CPUs : (La dernière 1 minute Moyenne pure / 5 min / 15 minutes aveugles).'],
      ]},
      { type: 'code', title: 'Prise de l\'Étranglement et Signaux d\'Assaut. (Tir Basique vers Démons)', prompt: '# 1. Meurtre Courtois Demande Pacifique (SIGTERM - Signal Numéro 15 - Terminate Propre) :\n# Laisse l\'Application balayer ses propres déchets en RAM et sauvegarder son État DB.\n$ kill 1334\n$ kill -15 1334 (Identique au Standard de Base Aveugle ci-dessus)\n\n# 2. Coup de Fusil Brutal du Noyau Physique Oblitérant l\'Aveugle (SIGKILL - Signal Num 9 - Tir Cible Feu Dur) :\n# Le Noyau balaye violemment en explosant les données et force l\'interruption du fichier lu.\n$ kill -9 1334\n\n# 3. Le Signal Ange Rénovateur (SIGHUP - Signal Num 1 - Démon Recharge sa Config Vivante)\n# Sans fermer les ports SSH de connexions d\'enfants clients vivants : le Processus Maître recharge uniquement la configuration.\n$ kill -HUP 887', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Tueurs par Chaîne String (Killall vs Pgrep)', content: 'Le `kill` normal nécessite religieusement de dicter des numéros PIDs purs et aveugles en RAM. En revanche, la machine `killall apache2` tue les 40 Enfants aveugles ouverts nominaux en un seul coup (Tue par Nom). Tandis que pgrep cherche quel ID numérique appartient à cette chaîne de caractère (String).' },
    ]
  },

  'lpic1-101-3-6-1': {
    title: 'Priorité CPU, Nice & Renice (Bonté du Noyau) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '⚖️', text: 'Les Modalités de Nice (Le Bon Samaritain du Traitement)' },
      { type: 'paragraph', text: 'Dans la file d\'attente, folle circulaire rapide et infinie inactive "Schedule Base Kernel", les Threads se disputent les octets et les Hertz de l\'horloge. Être "Nice" (amical) signifie Céder votre Ticket dans la File d\'Attente et prioriser vos frères. Un Nice Élevé (+19) = Ton Processus LENT et Pacifique Aveugle. Un Nice Bas Abominable (-20) = Super Rapide Dominateur Occupant le Maître Égoïste Unique de tout le CPU.' },
      { type: 'table', headers: ['Le Facteur Mathématique Physique', 'Valeur Classique Réelle Base Standard', 'Résultat Fonctionnel Limitatif'], rows: [
        ['Échelle Entière de Valeurs', 'Gamme de -20 extrémiste égoïste lourd JUSQU\'À +19 super lent tendre donneur cédant.', '0 (Défaut Absolu Base Jetée Naissance Innocente). Tout Processus Normal Hérite du Niveau 0.'],
        ['Le Facteur "Priorité" (PR Top)', 'Calcul de Base du Noyau (Ajoute toujours 20 Aveugle Fixe Chiffre Base Organique).', 'PR 20 (Équivalence au NI 0).'],
      ]},
      { type: 'code', title: 'Déclencheurs et Manipulateurs de Priorité (Nice contre Renice)', prompt: '# Créer un Démon Lent Doux de Base Tout Frais (Option -n dicte et fixe la Valeur de Base)\n$ nice -n 10 tar -czf backup.tar /var/log_enormous\n\n# Modifier un Acteur déjà VIVANT tournant et enraciné dans la RAM Aveugle via PID\n$ sudo renice -n 15 -p 1234\n\n# La Loi Sacrée Universelle du Dieu Aveugle de la Machine Root Suprême\n# MORTELS (Humains) = Ne peuvent que détériorer ou empirer positivement leurs propres tâches lentes (+1 à +19)\n# DIEU ROOT (Admins) = Peuvent Accélérer avec un Feu Extrême et voler les Tâches vers des Négatifs Égoïstes Aveugles\n$ sudo nice -n -5 ./mialarm_cripto.sh', output: '' },
    ]
  },

  'lpic1-101-3-7-1': {
    title: 'Expressions Régulières GNU Extrêmes (Regex SED/GREP/AWK) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'L\'Alphabet Cryptographique Magique (Drapeaux Regex Fixes)' },
      { type: 'paragraph', text: 'Les outils de chasse quotidiens comme grep ne lisent pas des chaînes pures humaines, ils scrutent des langages de méta-caractères aveugles. Il existe le Regex Basique (BRE) et les Extensives de puristes programmeurs (ERE via grep -E ex "egrep").' },
      { type: 'table', headers: ['Méta-Caractère Fixe Logique String', 'Magie de Feu', 'Traduction Aveugle Exemple Top LPIC'], rows: [
        ['. (Point)', 'Trouve ABSOLUMENT N\'IMPORTE QUELLE UNIQUE Lettre Caractère du Monde (Un Espace aveugle)', 'A.. (Prend An, Ab, A x)'],
        ['* (Astérisque Sauvage)', 'Multiplie 0 ou Infinis purs caractères de l\'Élément Lettre Immédiatement Présent à Sa Gauche', 'Ca*t (Prend Caaat, Ct Aveugle vide de A, et Cat)'],
        ['^ (V ou Circonflexe / Chapeau)', 'Ancre logiquement la corde aveugle au Mur DÉBUT ZÉRO GAUCHE de toute la Ligne entière.', '^root: (Lignes qui voient pousser du root uniquement au Coin Début Physique pur).'],
        ['$ (Dollar Monétaire)', 'Ancre Totalement en Logique du Pilier Aveugle au Mur DROIT FIN de Ligne.', 'bash$ (Uniquement celles où la dernière lettre morte est la lettre bash complètement nulle).'],
        ['[ ] (Le Cocon Des Classes)', 'Trouve À PEINE UNE Lettre Aveugle parmi les Enfermées dans la serrure limitatrice dure.', '[gG]ato (Trouve gato avec G Majeur MAJUSCULE ou basse pure). [a-z] seulement des pures lettres de panneaux. [0-9] les nombres.'],
        ['[^ ] (Négationnisme à Clé)', 'Trouve le MONDE, SAUF LA PARTIE AVEUGLE à l\'intérieur de ces crochets (Attention pour le circonflexe qui est à l\'ENVERS).', '[^0-9] (Lignes avec ABSOLUMENT tout sauf du numérique sale).'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Filtres gravés aveugles pour le LPIC 1 Exact par Cœur : Faire Taire le Filtre Blanc des lignes mortes vides qui polluent et gênent le log : `grep -v "^$"` (Uniquement ce qui N\'est PAS -v le Mur de Gauche attaché seul sur le Mur de Droite immédiat pur). Filtrer les Annotations Mixtes ou Commentaires du Fichier : `grep -v "^#" arquivo_config.conf` (Enlève tout le Charabia de L\'Informative "#").' },
    ]
  },

  'lpic1-101-3-8-1': {
    title: 'Édition de Terminal Puriste Ancestrale et Agile (Vi / Vim / Nano) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Les Phases Cosmiques de l\'Existence de l\'Éditeur "VI"' },
      { type: 'paragraph', text: 'L\'Examen lpic 1 exige la compréhension profonde des 3 Mondes Modaux Alternatifs Absolus du Vi originel aveugle qui effraient les débutants par la totale absence initiale ou Fausse de raccourcis flèches Contrôle de la Souris absolus.' },
      { type: 'table', headers: ['Mode Pur de Base Phase Physique Statique', 'Touche d\'Invocation Déclencheuse', 'À Quoi Ça Sert Vraiment à la Fin de la Journée'], rows: [
        ['Mode de Commission Opérationnelle Normale (Commande Aveugle)', 'L\'ESC avec ses fureurs répétées retourne à la maison Racing Root (Lieu de Base Originale de Naissance).', 'Copier (Yank), Détruire Découper (Delete dd), Aller en Fin Ligne Voie, Sauter de Ligne Aveugle.'],
        ['Insertion Digraphe Typeur Humain Libre (Insert Mode)', 'Pousser les pures touches "i" (Injecte ici gauche) / "a" (Ajoute à la droite Aveugle) et "o" (Le Nouvel Étage s\'ouvrant en-dessous Aveugle Libre).', 'Ici tu actives bel et bien le clavier et tapes des mots vivants du pur univers littéral.'],
        ['Ligne de Commande Extrême Mortelle Aveugle (EX Mode / Deux Points)', 'En appuyant sur ":" de manière fixe depuis la base racine Normale Initiale.', 'SalverArquivo/SauverFichier et Quitter, Chercher Massivement RegEx (/), Chercher des Remplacements Sed en lot de tout le document pur, de manière Aveugle purement.'],
      ]},
      { type: 'code', title: 'Mettre la main pour la Fuite Vi Exit :', prompt: '# EX MODE SAUVEUR (LES FESSES SUR LA CHAISE DE FUGITIF)\n:wq   # (Write Aveugle et Quit) Le Salut Universel Pur.\n:x    # (Raccourci Suprême de la magie du :wq raccourci)\n:q!   # Fureur de Fuite Détruisez les Altérations Ne Pas Garder Abandonner Sans Acte Cego/Aveugles pure.\n\n# DANS LE MONDE MODE NORMAL (LE CLAVIER FOU GAUCHE DROITE) :\ndd    # Ciseaux (Coupe, efface la Ligne Aveugle d\'un coup et l\'envoie au Presse-papiers Virtuel buffer)\nyy    # Yankee Pur de Moi, Modèle moi ce Copiage (Copie la Ligne)\np     # Paster Suprême (Colle la Ligne au plus Bas Aveugle buffer)\nu     # Mundo Cego Undo/Retour Arrière Bête part du Zéro Initial Pur (Control Z du Linux Féroce)', output: '' },
      { type: 'infobox', variant: 'tip', title: 'La Barre du Fantôme Mort Ancestral HJKL', content: 'On observait ces machines pures les siècles passés où aucune Flèche Cible ne se tenait sur les claviers de fer pur Cpp. Pour grimper et pour se mouvoir la main devait plonger à l\'aveuglette sa base : `h` Gauche / `j` Vers en bas En Bas / `k` Le Petit Pointant au Sommet Arriba Aveugle Haut/ `l` Droite Est Pur absolu. (Manigance d\'Examen Lpic de classe A classique, le pur J aveugle paraît Logique Physique Flèche Pointeurs crochet de bout regardant vers le Bas Fundos Pur En Bas).' },
    ]
  },

  'lpic1-101-4-1-1': {
    title: 'Partitions et Systèmes de Fichiers — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '💿', text: 'Outils de Partitionnement Classiques (MBR & GPT)' },
      { type: 'table', headers: ['Commande / Application', 'Support Global', 'Mode Opératoire Physique'], rows: [
        ['fdisk', 'Anciennes tables MBR (et GPT moderne avec correctifs)', 'Mode console interactif pur, où "p" imprime votre vue en RAM, "m" affiche les raccourcis, "d" supprime. N\'écrit définitivement sur le disque que sur la touche Master Finale "w", en cas d\'erreur appuyez sur "q" et le disque survit intact.'],
        ['gdisk', 'Exclusivement GPT (GUID Partition Table Absolu)', 'Un clone de fdisk limité aux Disques de plus de 2 To de type GPT. Capable de convertir et de formater du MBR pur en GPT de manière aveugle.'],
        ['parted', 'Le Roi (Supporte tous : MBR pur + GPT)', 'ATTENTION MAXIMALE. Outil d\'exécution aveugle de partitions sur des Disques en direct sans demande de clavier "w" ou filet de sécurité RAM. Supprime une partition à la seconde même de l\'appui de touche.'],
        ['cfdisk', 'MBR+GPT', 'Mappage visuel agréable (ncurses) avec des cases interactives utilisant les flèches du clavier sur la console.'],
      ]},
      { type: 'heading', level: 2, emoji: '📂', text: 'Formateurs Naturels Création de Systèmes de Fichiers (Mkfs)' },
      { type: 'table', headers: ['Nom du Système de Fichier (Type de Format)', 'Existence du Journaling Sécurisé (Journal de bords des pannes et blackout RAM)', 'Langage d\'Opération Format pour Disque Dur Brut'], rows: [
        ['ext4', 'Oui (Parfait et par défaut sur 90% des Serveurs)', 'sudo mkfs.ext4 /dev/sdb1'],
        ['XFS', 'Oui (Hautement optimisé pour des milliards de petits inodes sur les machines RHEL Centos).', 'sudo mkfs.xfs /dev/sdX'],
        ['btrfs', 'Multi-Copy/COW / Snapshots du Système d\'Exploitation en Direct.', 'mkfs.btrfs /dev/sdX1'],
        ['vfat (FAT32 universel aveugle)', 'Non (- Très mauvais pour les coupures de courant sans batterie UPS)', 'Exigé religieusement dans une minuscule partition de 500 Mo /boot/efi par les cartes mères pour démarrer le noyau UEFI.'],
      ]},
      { type: 'code', title: 'Commandes Quotidiennes', prompt: '# 1. Découvrir les Nombres UUID Absolus et les Noms d\'Étiquettes (Label) des Disques Formatés :\n$ blkid\n\n# 2. Fabriquer de la mémoire SWAP et l\'attacher à l\'OS :\n$ sudo mkswap /dev/nvme0n1p2\n$ sudo swapon /dev/nvme0n1p2', output: '' },
    ]
  },

  'lpic1-101-4-2-1': {
    title: 'Intégrité du Système de Fichiers Physique (Fsck / Ext4) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Réparateurs (Corrupteurs Innocents)' },
      { type: 'paragraph', text: 'L\'outil maître global abstrait pour réparer les sections magnétiques logiques des i-noeuds croisés (Lost+Found) perdus suite à une coupure de courant est fsck (File System Consistency Check).' },
      { type: 'table', headers: ['Réparateur de Système / Tune', 'La Commande Limitative Spéciale d\'Exécution', 'Syntaxe Létale Obligatoire LPIC'], rows: [
        ['fsck (Wrapper générique de tous)', 'Parcourt les i-noeuds de la partition pour récupérer les Orphans Files pour /lost+found/ en sauvant ses mégaoctets perdus', 'FONCTIONNE UNIQUEMENT HORS LIGNE ! Partition Démontée Vide (`umount /dev/sdb1`), tenter de réparer un / actif en cours d\'exécution entraînera l\'Anéantissement Destructeur Létal de toutes les métadonnées sur le système de la distribution.'],
        ['e2fsck', 'Concentré exclusivement et cruellement sur Ext2/3 et Ext4.', 'e2fsck -y /dev/sdb1 (Force l\'argument "Yes" en ignorant les demandes de confirmation sans fin d\'invalidation des octets continus).'],
        ['xfs_repair', 'Commande Réparatrice EXCLUSIVE de l\'Énorme Format Red Hat', 'Ne jamais lancer un fsck sur un disque xfs, utilisez le sien propre.'],
      ]},
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Ajusteurs (Tuner : tune2fs et dumpe2fs)' },
      { type: 'list', items: [
        { term: 'tune2fs / dumpe2fs Ext4', desc: 'Commandes qui lisent et modifient les métadonnées du Disque sans l\'abîmer manuellement.' },
        { term: 'dumpe2fs -h /dev/sdb', desc: 'Saisit toute la table descriptive physique "SuperBlock" de la durée de vie (Total des I-noeuds Dépensés, Nombre total de blocs libres, Checksums, Signature de l\'OS, et date de finalisation du format)' },
        { term: 'tune2fs -l', desc: 'Idem que ci-dessus, mais plus condensé.' },
        { term: 'tune2fs -i 30d / tune2fs -c 10', desc: 'Pour configurer et forcer l\'UEFI à exécuter un contrôle automatique fsck à un intervalle temporaire de "Tous les 30 jours" ou -c "Tous les 10 démarrages physiques d\'alimentation du PC."' },
      ]},
    ]
  },

  'lpic1-101-4-3-1': {
    title: 'Montage des Systèmes de Fichiers (Fstab / Mount) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Le fameux /etc/fstab (Automount Magistral)' },
      { type: 'paragraph', text: 'La commande `mount` et son inverse (soyez attentif à l\'absence du "n" en anglais) `umount` lient un disque ou USB provisoirement libre dans le RAM volatile de /mnt. Éteignez le PC et le résultat repart à zéro. Fstab transforme cette action en permanence éternelle.' },
      { type: 'table', headers: ['Position du champ 1 à 6 dans la Chaîne FSTab', 'Sens Architectural Ligne du Fstab', 'Notation Pratique Classique à l\'Examen'], rows: [
        ['1. Dispositif (Le Quoi)', 'Quel fichier disque réel attacher à l\'OS (Utilisez le texte de Label ou l\'ID de l\'aveugle UUID préféré pour ne jamais commettre l\'erreur des câbles sata croisés).', 'UUID=f32-ab1 ou /dev/sdX1'],
        ['2. Point de Direction du Montage', 'Place du dossier vide logée dans l\'arborescence du de Fichiers Système Local', '/opt/jeux_locaux/'],
        ['3. Type du Moteur de Système de Fichiers', 'Comment le Noyau traite le Langage des Bit et des Données en Base à la machine. Swap pour de la RAM pure.', 'xfs / ext4 / swap'],
        ['4. Paramètres Restrictifs des Commandes de Montage', 'Sommes d\'Options Virgulées Indépendantes des Restrictions Forcées et des Activations.', 'defaults,noexec,ro'],
        ['5. Dump Num', 'Exigence de l\'ancienne méthode Legacy de commande des Sauvegardes par Bande de K7 d\'année 90.', 'Laissez cette valeur au point muet "0" sourd.'],
        ['6. Pass/fsck Indice de Vérification Réparateur au Démarrage', 'La Priorité de l\'ordre quand on meurt dans un crash le PC. Le Système au Démarrage se lève et passe de bas en haut du BIOS avec Fsck du lecteur en panne par ce chiffre de rang.', '"0" Ignore froidement. "1" Toujours Exclusif le niveau Root (/). "2" Preuves d\'examens des Disques Supplémentaires.'],
      ]},
      { type: 'heading', level: 2, emoji: '📋', text: 'Defaults Magiques et Limites de Sécurité de Montage' },
      { type: 'code', title: 'Valeurs Implicites de "defaults" Essentielles de la LPIC', prompt: 'defaults = rw(Lecture-Écriture active), suid(Bits super-suid autorisés local), dev(Maître d\'appareils purs de dev que l\'on peut interpréter), exec(Accepte l\'exécution locale de logiciels binaires c), auto(Entre globalement dans le flux the mount -a), nouser(Le banal usager Zezinho utilisateur sans droits sudo ne démontra ce dossier et lecteur physique clef USB), async(L\'exécution et écriture asynchrone est l\'asynchrone sans tampons Ram au port en Fil.)\n\n# Monter une source brute disque de l\'aveugle ISO 9660 par la force\n$ sudo mount -o loop /home/j/jeu.iso /mnt/iso\n# Si un virus clé usb inconnu de votre mère arrive par les vagues des branches ext :\n$ sudo mount -o noexec,nosuid /dev/sdUSB_virgile /mnt/', output: '' },
    ]
  },

  'lpic1-101-4-5-1': {
    title: 'Permissions et Propriété Maître (Chown/Chmod) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Permissions Classiques de Base et les Mathématiques de l\'Unix' },
      { type: 'paragraph', text: 'Chmod comme Umask définit les lois de la permission. Tandis que Chown spécifie du point de vue de l\'action tant pour le Maître Propriétaire et sur le Groupe de section cible de son propre fichier. La racine mathématique unix et bits c\'est : r=4 w=2 et x=1 de base. Ils sont tripliqués sur les User(u), le Group(g) de division commun, et sur l\'Univers local de ceux appelés Other/Autres l\'extraterrestre (o).' },
      { type: 'table', headers: ['Résument la Base Numération Binaire Octal Chmod', 'Son Équivalent et traduction lisible en chaîne de string " ls -l ".', 'Explication de son Impact Physique Sous Linux Cego.'], rows: [
        ['755 (Fichiers Exec et d\'Application / Dossier Général Ouvert de Base.)', 'rwxr-xr-x', 'Moi (Détenteur des pleins pouvoirs du Créateur Utilisateur) je commets la Liberté à part entière (Livre à la lecture, au Remaniement et y mettre un exécutif Flag 7 actif sur moi). Groupe Réseau Intranet du groupe commun du travail Linux: La lecture est la limite. Les Mondes Inconnus à distance hors de la vue des sphéres se limiteront au même sort identique des actions. Norme Aveugle Dir d\'un répertoire par standard.'],
        ['644 (Des Textes Bruts Aveugles Ne Rendant Pas du Faux Shell en bash en app)', 'rw-r--r--', 'Le public régulier universel. Un tel Compte Modifie le Fichier Txt si auteur, mais Linux Empêche d\'Oser le faire fonctionner et tenter l\'exécuter l\'invocation malicieuse basculant dans une Application C Binaire de magie (Détrompez le troyen du faux bash inactif aveugle script cego).'],
        ['777 / 666', 'rwxrwxrwx', 'Rupture et Chute générale Absolue de la muraille Troïenne des Véto des Lois et des Perms. Entrée sur terre absolue sans loi.'],
      ]},
      { type: 'heading', level: 2, emoji: '⭐', text: 'Bits de Permission et Blindages Extras et Particuliers (SUID SGID)' },
      { type: 'list', items: [
        { term: 'SUID (+s Utilisateur cible / 4xxx)', desc: 'Le Faux Escaladeur de Privilèges Temporaire aveugle Cible d\'Utilisateur ID. Qui l\'ouvre (le fichier run bash script) débloque les pleins Pouvoirs de racine d\'auteur natif qui l\'ont façonné d\'actions pendant sa vivante lueur active et volée sur la session RAM exécutive. (Cela Laisse l\'action exécutoire à la natif fichier passwd faire ses altérations de pureté dans l\'ombre et en cachant les clefs Shadow des Passwords d\'auter sur le root d\'administration pure du système de données).' },
        { term: 'SGID (+s Group cible Cego / 2xxx)', desc: 'Mode fichier Unitaire : Divisé similairement du style magique du SUID par force pure de la base à l\'auteur d\'originisation et il vient dépouiller les identificateurs collectifs en se posant le masque par héritage local du groupe partagé cible local commun de l\'entreprise corporative (Admins_dev). Mode d\'Application Pur du Dossier en Carpeta Dir : TOUT document et éléments de vie du ficher déposés et prenant naissance du ventre chaud à l\'intérieur du mur local de cette boite dossier unique cible en question FORCERONT HÉRITAGE par défaut de leurs nouvelles caractéristiques et fouleront aux pieds les empreintes organiques initiales natives de l\'Utilisateur Créateur l\'Ayant Inséré puriste. L\'Astuce et la Magie de fonctionnement universelle totale partagée du réseau en usage de travail Samba commun.' },
        { term: 'Sticky Bit (+t cible pure flag / 1xxx) L\'Ultime et Grand Mur de Véto Voleur Gardien de Bloc', desc: 'S\'il loge en tant qu\'enjeu sur des répercussions locales, cela vient Inhiber l\'anéantissement purement et simplement de la disparition et de suppression des dossiers ou fichiers en interne local de l\'intranet. Sur le dossier purement Linux universel the /tmp, il y vient exempter sous son sort que nul local, excepté l\'Auteur Racine de ficher ou que ROot divin en son sens et son Maitre du temps global système, ne sera capable d\'en vouloir retirer dans son appui local du balayement effaceur les actions et documents sales des corbeilles laissées par ce collègue de palier d\'autre base de ce même OS et dont c\'est un détritus local dont la magie t\'aura interdit pure et purement d\'anéantir.' },
      ]},
    ]
  },

  'lpic1-101-4-6-1': {
    title: 'Hardlinks et Symlinks — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Les Deux Mondes du Clone Parfait et du Lien Miroir (Ln)' },
      { type: 'comparison', left: {
        title: 'La Liaison Matérielle et le Fil Conducteur de Lien Direct Cego au Pur Fichier d\'Inodo Dur Physique Maximum (Le Lien Matériel/Hard Link du pure Commande de base Ciblée (ln original f_clown))',
        items: ['Clonage Pur du lien de Divinité : Le code matériel cego des liens matériels de cette magie empiète sur les fichiers et a strictement d\'un point de code mathématique d\'Inodo de numéro Id Exactement Le Cible de Ficher Puriste Le Même Absolu de la nature des deux Fichiers et Frères et de faux Jumeaux aveugles miroirs (S\'examine logiquement si on valide sous terminal aveugle visuel test ls -li pur local).', 'Incarcéré aveugle logiquement et astreint d\'une existence fixe en lien absolu exclusif à Un et seul Fichier du monde physique naturel du Système (Poursuivez vers les Dossiers Cibles dossiers arborescents et le Système des Fichiers local d\'application s\'emportera en pure Fichiers logiques d\'Erreurs en série). INTERDICTION ABSOLUE D\'AVANCER A DE TELS ACTIONS DE CRÉER SUR DES Dosiers aveugle puristes de base cibles pures de chemin d\'arborescence. (Nada de Pastas cibles)', 'Sans le Sauts des Barrières de Disques Dur purs et natifs sans franchissements  : Vous ne parviendrez jamais aveugle local du fond du domaine de système de disques d\'arborescence du Monde d\'un fichier maître dans disque lié au mnt un dispositif Sdb en direction du Maitre de lancement Sda l\'OS root raiz pur. Cette fonction magique ne connait ou brise de domaine.', 'L\'Inmortalité Virtuel local et Immatériel : As-tu liquidé froidement dans pure violence magique en suppression ? Tu as Anéantit Froid ? Ou est t-il mort par Suicidaste localement en son poste au Fait du Code De Base Pur le Script Majeur racine Root pur Maître Logique 1 du simple et naturel bureau / Desktop du monde  ? Ouvre les yeux du fait local que t\'on Fichier fantôme du secret et ombre HardLink du double faux Clon se tapit encor dans sa bulle du trou invisible au mur puriste sombre et qui t\'en continuera de vivace sa force aveugle pure d\'être à merveille 100% aveugle et de manière absolue dans des usages avec son même ensemble pure data données binaires pure local bytes tout se cantonnant avec emprises de forces dans ton octet et pure Inode de bloco total aveugle à perpétué éternel sur ton Disque et ceci ce sans relache en force pur et à plein régime sans le coup de magie d\'exécution pure ou ne serra anéantit sans ce dernier tant et ceci et sans que tu la découvres d\'origine local dans tes entrailles cache pur.' ]
      }, right: {
        title: 'La Ligature Céleste de Lien Virtuel Macio Par Lien Symbologique aveugle et Symlink (Fais de Lien Soft Pure Magique / Symlink - ln -s matriz base pur locale fausse_destination_clown)',
        items: ['Son Âme Puriste d\'Invention Pure à ton Ordinateur Froid local d\'Arrivage. Appréhende de base à ce cadeau pure des Numéros de Données Distinte d\'Inode Incompatible et pur Inédit pur hors de celui Maître l\'abattoir ou Fichier pur d\'attache et s\'improvise ou il se meut en tant qu\'Etre Type et Faux Arbitraire Fausseur Type à un "l" aveugle du simple et vrai Faux Lien natif Fichier aux aveugles cibles permisos d\'autorisation locale et l\'.', 'Il ne tient pas du pure et de limite pure Cerca des enclos Barrières de Barbele De domaine physique aux multiples Différents d\'HDDs distinct et des domaines de base. Et il s\'autorise par coup pure du Croisemement aveugle Naturel de la Frontière pure Systema ficher pure de ces Montures réseau natif, Serveurs Samba pures purs de Fichier , Cible pure en NFS natif pur de Fichier en base Ciffs pur Réseau ou Lien aveugle Cego Remoto vers base serveurs Cego Ext Etc pur et Magique.', 'S\'En accapare naturellement du mirage pure et logiquement de cette Symétrie à l\'aveugle Cible des Pures Fichier Naturels Simples Cible mais Englobe pour Magie Les purs Immenses cibles pures Fichiers de Cible Répertoires Arborescentes purs Les Dossiers géants locaux Dossiers du Mondes pur d\'informatique (Comparable et Simplifié du format en pur mode natif et l\'exacte cible native base de simple base de Shortcut / L\'Atalho banal Win pure de vie simple basique pure).', 'De type de pur Décès Létal fulgurant sur un Crash pur de Casse en brisure Éclats brisés aveuglés Mort du rouge du GUI de ficher cego L\'erreur en ruine absolue ou L\'abération visuel Brisé en Panne d\'icône rompe à rouge pur de Gui Faux Mort Si et a condition locale pur de vie ou le Serveur Maitre du Matériel physique le Master Target base Cible Source De Création Disparaisse sous terre , Ne meurt ou Est Supprimée Froidement , Pure de vie Se voit bouger , O s\'Évaporiser , Se Déplacer  , se Voient Supprimés pure et pure de Fausse ou Mort Supprimée. Ton pur lien faussé ou Pointer devient Rendu Complètement Folle dans Sa logique et va S\'Aveugler à Pointer comme cible des signaux vers Des Pure de vents Du flanc Du Ciel Fictifs l\'absurde Du Pur Fumeux vide Des brumes Et De son Vide Aveuglement Fictifs Qui se trouve en base Pures Ou Ne pur existent Cible et Purement à cet égard Sans Vie pure Sur ces Terre en Plus à Ton Pur moment précis des Temps !']
      }},
    ]
  },

  'lpic1-101-4-7-1': {
    title: 'Hiérarchie du Système de Fichiers Standard (FHS) et Chasseurs de fichiers (Find) — Approfondissement',
    sections: [
      { type: 'heading', level: 2, emoji: '🗂️', text: 'Structure Hiérarchique Normative FHS de Base Essentielle pour la Linux Foundation' },
      { type: 'table', headers: ['Le Dossier Racine Directeur d\'Enjeu Source Pur / Du Niveau Base 1', 'Objet et Destination'], rows: [
        ['/ (Root ou Racine Générale Pure Cible Du Monde Absolue)', 'C\'est l\'Alpha Dieu et le Pur Fond en Base Limite pure absolue. Point Origine Zéro.'],
        ['/boot/', 'Petite maison et Abri cible purement et aveuglement blindée de l\'architecture des pure du lancement au format pur MBR d\'origine de lancement et logis sûr des bootloaders de Grube natifs, ainsi et ou la présence du vmliunz ainsi et ou les gros noyaux vmlinuz ou de Linux kernels Cibles Pure vitaux initiaux purs indispensables magiques de départ purement pur.'],
        ['/etc', 'Lieu pur et base exclusive du Monde des Fichiers Configurations purs d\'écriture de textes aveugle totalement pures libre aveugle et pure l\'écriture pour ces divers composants et d\'utilitaires divers d\'applications locales logiciel de l\'environnement OS (Ne JAMAIS y introduire et loger aveugle ou y insérer Ne les laissez y faire leurs chutes aveugle à la Cible vos documents d\'architectures Magique aveugles Fichiers ou Formats ou Pure Code pur des logicels des type de pure nature Binary de Cible purs du Binaire des codes de l\'appli de lancement logiciels Binary sh format ou pur code du pure exécutable ou Binarios de app en leur plein Dedans sous les mur local ou aqui adentro puriste !).'],
        ['/bin & /sbin', 'Sbin = Dossier pur du système binaire natif aveugle Des Pures éléments Faction Exécutable Binaires ou Binarios De nature de base pur Exclusifs ou les Pouvoirs de base et Autorités strictes D\'Un Grand Puriste d\'exécution de fers D\'Un pur De Feu aveugle de vie d\'un Faux Lancement Et L\'Accés Du Niveau Du Monde Administratif Cible Puissante De Root Pour les Fonctions du Maître et Commandement Admin Du Monde Système Base D\'Architecture Ou L\'OS de Fausse Base d\'Épreuve de base pur Cru pur Cru ! / Bin ou Binary (L\'Etape De Domaine d\'Architecture Puriste pur Fausse Ou Pures Énormes Magiques Pur ou De la Base aveugle pure d\'Aveuglement et du Commun D\'Usuager utilisateur ordinaire pur normal Utilisateur pur cible général de pures commandes logiques du pur Cible aveugle base pwd puristes Cible le vim ainsi avec les magies ou les outils de type éditeur terminal pure base nano la navigation etc etc).'],
        ['/tmp', 'Zone poubelle ou surface puriste des cibles magiques à base désouverte déchets ou décharges aux balayées lavées des poubelles purgées ou laves par nettoyage puriste de la puriste Ram Cible l\'OS lors de l\'amorce des reboot processus base des systèmes ou les Pures redémarrages de ces ordis équipées du pur blindage et cibles actives du bit Ocult Et Droit de veto Froid Magique du pur et célèbre droit de base absolu Droit Sticky de nature Faux actif permanent par son côté pur cego de pur et faux flag Naturel aux Fichiers de Faux OS pur naturel ! Le Stick de vie est aveuglement pure et cego et s\'implante pure pur naturel de façon aveuglée ! '],
        ['/var', 'Secteur pur de base de folle accumulation puriste au faux Taux ou Développement Expanse des Pures Expansion d\'Espace d\'Occupation désordonnée et d\'invasion De Cible de bases et Folle Pure Croissance Ou Du volume En Pure d\'Invasion De violence Incontrôlée brutale en expansion pur Taux constant. Ou il stock des Dossiers Et Pures Archives Et Journalisations pure ou Log et Logs aux énormes lourdeur Poids Lourds Pesants de pures Données et de Cible pures lourdes Database Dbs Serveur de log bases pures ou fichiers Logs Lourd de Magie de Cible Du bases de Fichiers Dbs pur de bases Webservers du monde pures dnginx nginx public mondes public d\'internet de web ou publicos natifs en log de pur OS.'],
        ['/usr/local', 'Les espaces d\'architectures pures de libres des Terres ou Zones non gérés d\'Espace Cibles Non de bases puriste d\'Architecture puriste ou pur Libre ou Tierras Libres aveuglement de Zone Naturel De Non reconnues Non et d\'Environnements d\'Origine d\'architecture pur et Base Officiel puriste Non d\'Auteur Non Officiel OS L\'OS l\'. Sous tu crées du Labeur Compilation Tu Compilas Puriste et tu exécutes un Outil le Cible base Un Git en pur code C sous environnement logiciel au format le magique make pure Cible code il vient y Salir pur et aveuglement il laissera sa bouse il suja et s\'implémente s\'échouera là sous lieu puriste sans y tacher il s\'encrassera limpo ou la limpo a cet endroit dans son dépôt aveugle qui sans y loger dedans avec (sans avoir le pur effet de salir et sujad d\'espace base pur d\'intercaler la base des structures d\'une racine locale base /bin cœur des core locaux  cœur system !).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔍', text: 'Localisateurs magiques et Moteurs purs de Find / et d\'invocation de Fonction Locate' },
      { type: 'list', items: [
        { term: 'locate lpic1.txt', desc: 'Ultra rapide d\'un coup pur d\'éclair et de feu magique D\'Être Magique Rapide c\'est Foudroyant à pur aspect du divin relampago et identique à l\'éclair divin des mondes divin ou foudre divine.. Par quelles raisons De Pourquoi un outil est pur si De base Pourquoi ? C\'est du pur de bases par l\'Essence du Parce que ou Du Pour Du démon Le ou l\' Agent démoniaque du nom crond vient frapper la terre S\'éveille au sommeil des cibles se réveil les lointaines d\'obscurité a ou au petit des temps dès matins d\'heures telles aux confins purs Cibles Cego 4 heures am d\'ou la base matinale pures (a coup du cmd par appel Outil du magique `updatedb` en action Outil Oculto) qu\'il en viendra magiquer par d\'architecture et viendra y produire Du fichage en bases de l\'indexant ou il L\'indexant le pur monde D\'une Surface Pures de Système aux données sur un HDD en les varrant les laves varrido du Système HD vers sa de puriste Cible pur magique en son socle pur d\'attachement Un database fixe de texte local Fixe pour Son Magique Cible ram RAM et Linux d\'Architecture aveugle de fausses données pure en base Fausse Base cego base Faussement Aveuglant De Système aveugle Oculto En y fouillant base des profondeurs Varrant Ses Fichier Varrant sur le HD aveugle du monde L\'OS et ce HD de sa racine en original pure et D\'une Action Pesante et Pur d\'Effort avec Lenteur lourdement de cibles en Cibles Et de Faux Monde aveugle De manière pesamment de fausse base ou de pesamment.. Ensuite alors ou par ce fait Et de la vous vous en venez pour lire et Vous Vous d\'Exécuteur avez Apenas Que L\'Utilitaire apenas Ne Li a puriste ne de Fait de Lire pure Et en lire De Par lecture que ce document Fiché De Résumé Liste Vieux cet archive Fiché De listado Cible De listes Ce vieil listado d\'Architecte viejo base vieux en y procédant Ainsi Faux D\'un Outil pur Rapide rapido.  NE DONNE OU De Pur NE SOU MET ET JAMAIS Tu Ne JAMAIS O NE DEVE De Sort ou pur Outil T\'Espérer Y L\'Action De Pouvoir Y Ou Tu as D\'Oser Trouver aveuglement ou Trouver trouver Pur et aveugle des éléments Choses choses d\'actions Ou fichiers Pures Nouveautés crées de cette pure de Cible Récents Fichiers Nouveautés Pures D\'Ultima Hora ou Nouveautés Récents d\'actualités de de l\'ultime de Dernière base heure d\'action Hora d\'Actions Ou un Cle USb Un USB qu\'est Qui fut Récemment d\'actions Du Sauve Ou Sauvegardé Qui as ou qui Eut salvo l\'action Et déposé De l\'Age d\'Un délai 1 pur d\'Une minute Min De Temps Avant Ou d\'Action du passé immédiat des temps atrás ou d\'Il Y a base  !' },
        { term: 'find /var -size +1G', desc: 'Au pur format Lourd sur le L\'Opération de données D\'Echanges I/O Lent Cibles En Mode pure Opérationnel aveugle pur I/O Lent aux Vitesse Pures de Transferts de Purist Cibles Et ou Au Taux d\'Exécution Cible de Vitesses Lento Et Pourtant Outil Naturel Outil d\'Aptitude A L\'Aptitude Mas O Mais D\'Interagir Cibles Au Pur Temps O Tempus d\'Exécution Au Temps de Nature O temps En De Base En Pures Temps Réel de Moment Réel et Le Vivant Cibles L\'Universel Ou En Action Vivo (L\'Extraction Il Décrypte Et Ose lire le fichier Il Parvient Et Lit De fait De vérité Vrai aveugle Le bit Le l\'Élément Les Cibles D\'Enveloppes  Ses d\'Outils d\'Octets pur O bit et L\'I-noeud L\'Inodo Et I-noeud Inodo Magique sur ton disque Et lecteur De système vivants de Oculto Vivo pur Disque crudo Cibles ou O Brut De brut ou Magique  crudo pure). Instrument Merveilleux D\'Un Puissant Et pur Outil Enorme De L\'Attribut O Mágico A Pouvoir Infinito De pures infinis Enorme infini et De drapeaux Cibles de de Fichier purs drapeaux d\'Options L\'Options Drapeaux ou flag L\'Outil flag de la magie Cible De Pures Flag de Limitation Magique Le De `-mmin +60` (Fichiers Fichiers Archivos O Les Enveloppes Dont l\'Ancienneté et L\'Id Et La Taille Des Fichiers Supérieurs à plus de tailles de heure de 60 tailles Ou O Plus grand Qui Seront de Dimension D\'heure l\'Age de La Période des pures heure L\'Age ou Des Heures et de Vastes heures viejos d\'ancien Ou Le Temps En D\'Age De Pures altération Magique pur D\'Age D\'Altération). Outil d\'Indicateurs `-type f` `-user root` `-perm /4000` `-exec rm {} \\;` (La commande s\'achevant Du pure par Leur Suppression L\'Anéantissement Il Détruit Il Efface D\'Effacement Deleta De Fait l\'Action Pour Conclure La à à à Ou No Au L\'Action Au bout Et fin de L\'Age de Au fin de Les O de les De chasser Ou Traquer Par caçá-los de Les Les Avoir Du De Coup l\'Ensemble caçá-los de Cibles d\'Anéantir Ou de Pures D\'Actions Les avoir Tous Pour L\'Aspect los O Les Trouvés !).' },
      ]},
    ]
  },

}
