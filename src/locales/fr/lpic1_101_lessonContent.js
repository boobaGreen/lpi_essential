// LPIC-1 101 Lesson Content — French

export const lpic1_101_lessonContent_fr = {
  // ─── TOPIC 1: Architecture du Système (101) ───
  'lpic1-101-1-1': {
    title: 'Déterminer et paramétrer le matériel',
    content: `
Le noyau Linux gère le matériel et expose ses informations aux utilisateurs via le système de fichiers virtuel \`/proc\` et des outils d'administration dédiés.

### Répertoires Clés
- \`/dev\` : Contient des fichiers de périphériques spéciaux (ex: \`/dev/sda\` pour les disques, \`/dev/tty\` pour les terminaux) pointant vers le véritable matériel. Ces nœuds sont créés dynamiquement par le service udev.
- \`/proc\` : Système de fichiers virtuel logé en mémoire vive fournissant des informations brutes sur le système (ex: \`/proc/cpuinfo\`, \`/proc/meminfo\`, \`/proc/interrupts\`).
- \`/sys\` : Garni par le noyau, expose sa hiérarchie de bus matériels et d'objets (sysfs).

### Commandes Matérielles
- **\`lsusb\`** : Montre les bus USB et les périphériques qui y sont physiquement reliés.
- **\`lspci\`** : Affiche les informations complètes sur tous les ponts et cartes greffées sur le bus PCI.
- **\`lshw\`** : (List Hardware) Produit un rapport gigantesque extirpant les profondeurs de chaque configuration matérielle CPU, RAM, Carte mère de la machine.

### Les Modules du Noyau (Pilotes/Drivers)
Les pilotes sous Linux prennent la forme de modules compilés (\`.ko\`) que le noyau incorpore dynamiquement à la volée.
- **\`lsmod\`** : (List Modules) Inspecte l'interne via \`/proc/modules\` afin de relater quels modules sont actifs en mémoire actuellement.
- **\`modprobe\`** : Injecte ou éjecte intelligemment un module ainsi que toute sa chaîne de sous-dépendances associées au noyau.
- **\`modinfo\`** : Visualise l'en-tête, le créateur, la description, et les variables logicielles qu'un module accepte de recevoir s'il était lancé.
    `,
  },
  'lpic1-101-1-2': {
    title: 'Processus de Démarrage',
    content: `
L'amorçage brut d'un serveur Linux comprend quatre phases incompressibles majeures successives :
1. **POST Firmware (BIOS/UEFI)** : Initialisation électrique du hardware et inspection d'un disque cible d'amorçage.
2. **Chargeur d'Amorçage Bootloader (GRUB2)** : Le firmware passe le relais matériel à l'outil GRUB. Celui-ci affiche le menu de l'OS, traque le noyau et le système hybride initial de racine en RAM (initramfs).
3. **Initialisation Noyau (Kernel)** : Le noyau se greffe sur l'initramfs, se munit des dépendances RAID/LVM bloquantes et monte de par son biais la VÉRITABLE racine principale globale du disque dur.
4. **Le Processus PID 1 (systemd / init)** : Libéré, le noyau délègue l'autorité logicielle absolue à l'application mère racine (systemd), chargée de faire naître les services utilisateurs (Réseaux, interfaces, Serveurs Web).

### Les Carnets de Bord : Logs d'Amorçage 
- **\`dmesg\`** : Relite d'une pression tout le flux textuel enfouit dans les anneaux mémoires du kernel (Ring Buffer). Vitale commande pour déterrer des failles matérielles aux disques détectées ou cartes sons rejetés très tôt d'allumage.
- \`journalctl -b\` : La norme moderne remplaçant de fait le texte classique. Cette commande sur systemd remonte tout registre strict unique de la session de boot actuelle en temps réel au système de Journal universel !
- \`/var/log/messages\` ou \`/var/log/syslog\` : Fichier statique historique brut de journalisation syslogd permanent, agissant d'ultime preuve persistante sur plusieurs jours de toute erreur .
    `,
  },
  'lpic1-101-1-3': {
    title: 'Gérer les Niveaux d\'Exécution et Cibles',
    content: `
On demande à son OS de s'adapter contextuellement. Ces statuts historiques sont des niveaux d'exécution (Runlevels - SysVinit), devenus Targets conceptuelles chez Systemd !

### Equivalences Systemd et Runlevels !
| Runlevel (SysV) | Cible systemd (Target) | Explication d'Interface |
| :---: | :--- | :--- |
| **0** | \`poweroff.target\` | Halt. Arrêt de l'ordinateur. |
| **1** / **s** | \`rescue.target\` | Solo User Root de crise. Sans réseaux pour réparations critiques locales terminales. |
| **3** | \`multi-user.target\` | Shell Console Terminale absolue. Complet avec réseau IP fonctionnant pour un rôle strict SERVEUR multi-sessions ! |
| **5** | \`graphical.target\` | Mode Desktop Utilisateur souris avec Serveurs d'Affichages X11 ou modernes Wayland greffés du son ! |
| **6** | \`reboot.target\` | Ordonne au Firmware physique son redémarrage. |

### Systemctl Manipulation de Cibles Actives !
- \`systemctl get-default\` : Comment démarrera ma machine à la coupure élect ? Console ou Bureau ? 
- \`systemctl set-default multi-user.target\` : Oblige le serveur de ne plus exiger bêtement ses ressources par une interface de Bureau au lancement prochain permanent OS ! 
- \`systemctl isolate graphical.target\` : Switch et Basculement chaud. Changeant l'état actif sur l'instant en forçant l'invocation des interfaces X11 sur sa console ou vice-versa !

### Arrêter Proprement sa Machine ("Shutdown")
- \`shutdown -h now\` : (Halt) Éteindre son armoire Serveur au pied levé  sans ménagements !
- \`shutdown -r +20 "Mise A jour en cours"\` : Relancer (Reboot/R) à 20 min son serveur. Un appel général (\`wall\`) broadcast à l'écran un texte de condamnation imminent a tous connecté distant de session terminal les empêchant d'engager d'autres actions critiques ! 
    `,
  },

  // ─── TOPIC 2: Installation de Linux et Gestion de Paquets (102) ───
  'lpic1-102-1-1': {
    title: 'Organisation et Design du Disque',
    content: `
L'Administrateur pense son armaturage avant tout installation brut à l'aveugle de système.  

### Les Lois de Tables d'Entrées OS
- **MBR (Master Boot Record)** : Un monument d'antiquité historique . Sa limite tragique repose d'abord de figer un cap restrictif strict empêchant tous disques de plus de 2 Téraoctets d'exister ...et sur une limite primitive archaïque de concevoir quatre partitions max Primaires d'ancrages sur un média seul! (Obligeant les Partitions Etendues / Logical !).
- **GPT (GUID Partition Table)** : Liées technologiquement de fait à l'UEFI cartes mères d'aujourd'hui. Sa capacité crève le mur mathématiques de plafond des (8 Zebibytes!), supportant jusqu'à et 128 allocations disque indépendantes primaires standards sans artifices.

### Divisions vitales Pointages Systèmes (Mount points)
- \`/\` **(Racine Root)** : Le sol, la structure du fichier du FHS (Filesystem Hierarchy Standard). . 
- \`/boot\` : Isolé au bord du disque "rapide" de piste, il rassemble l'amorce vitale GRUB + noyau OS Linux . L'architecture UEFI imposera purement qu'on y insère une sous partition système isolée (ESP , "EFI System Partition " strict VFAT Format).
- \`/home\` : L'Apartement utilisateurs. Une isolation sage sur disque garantit qu'on pourra fracasser et tout réinstaller un nouveau serveur linux majeur \`/\` à zéro tout an préservant purement ces données persos intactes dans la durée !
- \`/var\` : Le Quartier mouvant dynamique  (Registre d'activités OS (log), Boites SMTP Courriel, Table Base Web Relational DB). Séparées obligatoirement sur serveur Web car s'ils engorgent anarchiquement sa partitions d'erreur ...ils ne tueront jamais root et noyau bloqué faute d'espace  s'il y sont cloisonnées physiquement!
- **Swap** : Bule d'échanges d'air virtuel . Quand votre RAM plafonne à sa limitation physique composant , le kernel va se sauver le temps d'agir par écriture disques de fond cache SWAP pour dégorger cet engorgement système et se prévenir de la paralysie figée Fatale ! 
    `,
  },
  'lpic1-102-1-2': {
    title: 'Installation d\'un Chargeur d\'Amorçage',
    content: `
L’Émissaire universelle de démarrages entre OS (et Multiple Boot OS local au PC) s’érige couramment  par **GRUB2 (GRand Unified Bootloader de Gen. 2)**. 

### Structure des Fichiers Intimes Grub 
L'architecture de son menu est d'algorithmies scripts!
- **/boot/grub/grub.cfg** : (ou \`/boot/grub2/grub.cfg\` REDHAT!) LE RENDU FINAL. Étape interdite "Do Not Edit" par commentaire car auto-générée à toute update Kernel d'usine !
- **/etc/default/grub** : Le fichier d'édition humaine de Variables d'Etats ! Modifier au gré un délai menu (GRUB_TIMEOUT) ou un arg d'injection noyau comme 'quiet splash' sur GRUB_CMDLINE_LINUX de passage!
- **/etc/grub.d/** : Fragments brique algorithme des générateurs script "Dossier 10_linux , 20_os-prober " ordonnée par la lecture à son lancement.

### Déclencheurs de Mises A jour de GRUB :
S'y vous changez 'timeout = 5', le boot cfg d'origine ne changera pas par l'acte du st-Esprit. On DOIT "Générer la Config" à la main ! 
- RHEL/CentOS : \`grub2-mkconfig -o /boot/grub2/grub.cfg\`
- Debian/Ubuntu : Les concepteurs créèrent par confort pur de vie le raccourcis universel Alias \`update-grub\` effectuant même travaux !

Pour implémenter dans les entrailles MBR brute la technologie :
- \`grub-install /dev/sda\`
    `,
  },
  'lpic1-102-1-3': {
    title: 'Bibliothèques Partagées .SO (Shared Libraries)',
    content: `
Pour contourner la compilation de Binaires obèses statiques autonomes , UNIX regroupe les appels systèmes logiciels tierces mondiaux sous les  "Objets Partagés "\`.so\`". 

### Diagnostics LDD de Traque :
- **\`ldd /bin/bash\`** : Appelé avant exécution binaire. L'outil analyse la tête exécutive du code binaire d'application bash, traquant, recoupant sa nomenclature de demandes  et imprimera l’état de lieux exact de quelles versions ".so librairie locale" il faudra en chemin de routes afin qu'il puisse booter correctement logiciellement à sa demande initiale !! 

### Gestionnaires Dynamiques (LdCache)
Traquer 20 Terabytes disques durs pour trouver '.so.5' à 150 logiciel au boot tuerait de lags l'ordinateur ! 
- **/etc/ld.so.conf** : Dicté textuel . Il notifie tous vos répertoires personnels non conventionnels qui regorgent de vos libraires serveurs Web et API privées Oracle , en vue  d'indexer à l'os central leur existence racine! (soumis avec son d. local conf "\`/etc/ld.so.conf.d/ \` ").  
- **\`ldconfig\`** : Moteur exécutoire global de Cache : "Va me rafraichir immédiatement mon index fichier en le re-lisant mon fichier listant 'so.conf' !!!".
- **/etc/ld.so.cache** : La cible pur final Binaire de \`ldconfig\` d'index hyper-rapide pour Kernel . (Inéditable par humain) . 

### Variable Temp d'Exception 
\`export LD_LIBRARY_PATH=/tmp/maliberte\` : S'ajoute pour obliger spécifiquement votre application qui va s'ouvir à chercher à cet instantané au dossier "/TMP" ses SO localisées arbitrairement , surpassant totalement le dictionnaire globale Kernel system de cette fenêtre d'interaction d’usage! 
    `,
  },
  'lpic1-102-1-4': {
    title: 'Gestion de Paquets Debian',
    content: `
Le Système "DPKG" règne monde de distributions Debian ! (Dont Menthe / Ubuntu Desktop et Serveurs Kali ). Il manœuvre d'état par le format empaqueté **.deb** d'installateurs unitaires.

### Les Couches Primitives Basses (dpkg local)
Il n’a "aucune Intelligence Artificiel de résolution", Aucunes vues Internet aux Clouds !!
- \`dpkg -i file.deb\` : Execution brutale Locale (Install) de fichier . Plantage assuré s'il y a défaut d'une brique requise.
- \`dpkg -r pkg\` : Retrait simple, préserve le /etc/ conf et setup !
- \`dpkg -P pkg\` : Purge d'oblitération fatales : Supprime programme de la liste et VIDES les configs persos ! 
- \`dpkg -l\` : Parle-moi! "Affiche moi le log verbeux de tout les millions packages locaux intégrés". 
- \`dpkg -S /usr/bin/cat\` : "Révèle le nom de famille (Search) du package origine originel qui possède mon fichier 'cat '??". 

### Aptitudes Réseau (APT Avancés H-Level )
Intelligence Cloud connectée, s'alimentant depuis les listes web de sources mondiales "**\`/etc/apt/sources.list\`**".
- \`apt update\` : S'en va relire les listes Web des sources lointaines Cloud pour régénérer que "l'INDEX METADATA " catalogue locaux sans AUCUN d'installation en dures de logiciels .
- \`apt upgrade\` : "Compare! Y'a des packages majeurs de version supérieures cloud vis-à-vis mes locaux d'ordinateur !  -> remplace tout!".
- \`apt install apache\` : Traque, dresse une équations logique de dépendances . Télécharge 400mo d'annexe nécessaire , pour enfin installé le coeur . 
    `,
  },
  'lpic1-102-1-5': {
    title: 'Gestionnaire de Paquets RPM et YUM',
    content: `
Le monopole monde commercial Entreprise Serveur est dominé par RedHat OS, CentOS & Rocky. L'essence s'y orchestre sur d'archives binaires **.rpm**.

### Manipulations Primaires (RPM Commandes)
- \`rpm -ivh \` : (Install, Verbeux texte, Hash marks d'avancements barres base ! #). Installeur basique unitaire du rpm local !
- \`rpm -e name\` \` : L’effaceur (Erase). (Attention, le RPM supprime base propre à contrario un debian).
- \`rpm -Uvh \` : Mise a l'échelle , ou Update , Remplacent par monté de réversion! 
- **QUERIES (Q) de Recherche (Requêtes)**:
   - \`rpm -qa\` (All/ Enumère listes masses installée au Pc global)!
   - \`rpm -ql pkg\` (Lists/ De ce package , détaille moi chaque nom de répertoire fichiers qui s'est créer en m'installant !! )
   - \`rpm -qf /bin/bash\` (Files / Ce Fichier système , qui est son parent Package ! ? )

### Interface Réseau Avancée "Cloud": YUM et DNF
L'ancien YUM de YellowDog (Centos7), se retira s’étant lourd de performances d'algorithmies devant **DNF (Dandified Yum)** en RedHat8 ! Il résous lui au Cloud. Ces sources Repo Url campent au  **/etc/yum.repos.d/** .
- \`dnf search word \` : Trouver app sur catalogues Web ?
- \`dnf install app\`  : Implante app avec résolutions automatique tierces .
- \`dnf remove app \` : Nettoyage d'exécutions et Purges de l'Application "Et" de ses anciennes librairies dépendances  seules laissées désormais devenues orphelines mortes au sein réseau !
    `,
  },
  'lpic1-102-1-6': {
    title: 'Hôte et Virtualisation Invité de Linux',
    content: `
### Topographie Serveur et Couches Matériel (Hyperviseur)
VMM Virtual-Machine-Monitor scinde le matériel en parts indépendantes logicielles :
1.  **Bare Metal Types 1 (Esxi / Proxmox KVM Native )**: Le logicielle de Virtu est LE SYSTÈME D\'EXPLOITATION UNIQUE natif du PC (Au plus bas niveau proc'). Hautes capacités perfs !  
2.  **Type Host Hosted 2 (VMWare Workstations, Virtual-bx)**: Au dessous Linux Desktop / ou de Mac normal tournant... s'installe un Exécutable qui se prétend Ordinateur de Façades par intermédiaires API lourdes CPU.

### Container  (LXC / Docker ) ! L'Innovation!  
Un Invité Virtuel Linux Classique embarque tout sur ISO. (Un kernel émulé + Une Ram émulée sur RAM + 20 Giga faux disques raw/qcow) pour 3 Méga logiciels internes.. Inefficient d'Élasticités réseaux.  
Les **Conteneurs de Services (Docker)** ne "Virtuallises pas la partie matérielles d'OS" !! Ils se Pluggent et parasitent à l’identique de passagers  à travers le propre Kernel du Papa Serveur Linux de machine native !!!
Ils sont cantonnés et confinés ("Sandboxing" !!) par la technologies magiques pures natives des Noyaux Linux de  **cgroups virtuels (Limites mesurés aux quota CPU ressource RAM imposées stricte !)** et des d'**Espaces Nommés d'isolements virtuels Namespace (Avoir sa propre vue isolée de table Proc de file system fausse locale).** 
    `,
  },

  // ─── TOPIC 3: Commandes GNU et Unix (103) ───
  'lpic1-103-1-1': {
    title: 'Travailler en Lignes de Commandes',
    content: `
L'espace interactif central du pouvoir d'administration Linux s'établie à la Command Line Interfaces (BASH shell - interpréteur des textes Kernel interactif  ).

### Classification Hiérarchie des Commandes Ordonnées
Bash n'envoie pas tout à l'aveugle, mais évalue l'architecture source :
1.  **Alias Locaux** : Un mot créé remplaçant un ordre gigantesque pour épargner d'écrire "ls" en substitue de "ls --all -color--".
2.  **Built-in Shell Commands (Intégrées Shell)**: La commande texte réside du "Coeur en RAM même du programme logicielle du Bash ". Exécutée fulgurante (L'action de \`cd\` ne vas nul part disque appeler un prog ! , \`export\`, \`pwd\`).
3.  **Commandes Routage Externes Binaires** : Fichiers lourds C/C++  autonomes et stockés au Disque systèmes (\`usr/bin/tar\`, \`/usr/bin/cat\`).

### Identifier ses Intéractions Outils 
- **\`which grep \`** : Va descendre scanner pas à pas touts de vos dossiers recensées en routes du \`$PATH\` de base , et rendra une ligne terminale du lieux chemin absolut exact pointant la source "\`/usr/bin/grep\` ".
- **\`type cd \`** : Analyse métaphorique "C'est de Quel Famille de Mot !?".. Sa réponse serait "cd is a shell builtin!".
    `,
  },
  'lpic1-103-1-2': {
    title: 'Variables du Shell et d\'L\'Environnement',
    content: `
Un bash s'équipe de post-it nominatif mémoriels temporelles textuels (Variables Shell base!).

-   **Variable Interne / Locale** : Par " \`VAR1="Bleu"\` ". L'assignation est pure, stricte , fermée de secret a cette interface TTY et fenêtre actuelle localisée. "Sous Exécuter" un sous programme externe à la suite dans ce terminal rendra cette variable inconnu fantômes d'anonymat ! 
-   **Le Modificateur d'Environnement Global "Export"**: "\`export VAR1\`". Cette directive libère les secrets,  Hissant ce post-it local textuelle en l'intégrant pour compte à l'Environnement Global OS natif! Les scripts-enfants générés recevront en d'Héritage ces datas de contexte variables lors process. Ses lises base OS se vérifie de l'ordre d'\`env\`!

### Archiver la Frappes D\'History Terminale !
Le shell consigne silencieusement de façon ordonnées chaque action. Textuellement le reliquat est écrit sur fichier fixe log text en fin de session fermeture d'ordinateur à : \`~/.bash_history\`.
*   \`history\` : Impime au log la file numérotés .
*   \`!14\` Bang ! (Point  d'exclamative relance automatiquement texte enregistré a la ligne quatoze du dump ! ). \`!!\` est le rappel rapide de "la toute dernière chose à l'instant qui vient se s'effectuer!".
*   Ctrl+r : Lancement interactif d'auto-completion d'arrières et de recherches "Reverse-Search" à partir texte et d'histoire Bash locale! .
    `,
  },
  'lpic1-103-2-1': {
    title: 'Traiter les Flux de Texte par Filtrages Bash',
    content: `
Le Système "UNIX" se fondent en "Everything Text Flux !"

### Vues Globales Standards Rapides: 
- \`cat info.log\` : S'extirpe de sa cible physique une extraction flux absolu totale et  unifiés balancée brutal pour la Console de l'utilisateurs interactives  ! 
- \`head -n 25 fichier.txt \` : Sectionne, ignore tout texte subséquents de pour de conserver à l’Écran "L'Entête début du fichier jusqua 25 Lignes!".  
- \`tail -n 25 -f syslog \` : Rognement de la Culasses Finale "Dernière 25 Lignes Queue de liste".  Lui aposer "-f " bascules et bloques terminal pour entrer mode d "Ecoute Fluide Suiveur Follow ". Le Terminal d'affichage actualisera avec toute ligne append des erreurs web nouvelle instantanées dynamiquement live !

### Outilleur Textuelles Complexes Tranchages :
- **\`wc\` (Compteurs d'Informations textuelles base)** : "Word count" est souvent sollicite UNIX pour flag "-l "(Lines !, Donne le Numérique base pur et simpliste du total nombre retour charriot ligne comptées!). 
- **\`sort\`** : Trie et Réarrange l'alphabet en liste du 0 a Z ou -r pour retournements Inversif global (Z-A).  
- **\`cut\`** : Le Scalpel tabulaire ! (-d":") détermine base " Le Séparateur Identifiant de découpe serais le deux points ? ! " , Ensuite "-f1,5"  (Choisie le Tronçons 1 , puis du Field Champ 5 coupé sur la même base d'une ligne d'édition!).  
    `,
  },
  'lpic1-103-3-1': {
    title: 'Gestionnaire de Fichiers Globaux et Manipules Bases. (I)',
    content: `
Maîtriser logiquement les créations pures ou de modifications au fil du dossier. 

- **\`cp -r orig dest\` / (Copy)**: Le duplicata miroir strict qui ne supprimes rien sur sa source. Le flag obligatoire "-r" Recursif englobe l'action au-delà d'un fichier pur, l'appliquant en matrice globalisée l'action sur un  "Dossier , Et  toute ses Sous-Chambres logiques adjacente contenues locales".
- **\`mv origine dest\` (Mutant Déplaceurs / Et /Ou Renommeur !) **: L’Action Move coupe de source le dossier/fichier et la recolle d'ailleurs . *Unix est dépourvu de vraie option pur de Rename!* Si la source à été désigné vers son même dossier source initial, l'ordinateur assimile "Ce déplacement immobile" de la part d'acte "Renommager pur " textuellement basique de format textuel  ! 
- **\`rm -rf \`**: Delete "Remove". Arme fatale du système. Si appelées sur répertoire , un "r" recursif purgera toute son entières arborescences inferieurs vivantes sans remords!. Un "f" "forçages brut" supprimes tout "demandes interaction sécuritaires (vous etes sur ? non. Supprime ! )" ce qui laisse ce fichier supprimable "sans appels de confirmation homme".
    `,
  },
  'lpic1-103-3-2': {
    title: 'Archivages de Compression et Traquer Fichiers de Fond  !(II)',
    content: `
### Les Traqueurs (Find / Locate)
- **\`locate passwd\`**: Répertoire pré-maché cache index très rapide. Cron de nuit bâtisse à coup de "update-db" un annuaire registre local. 'Locate' vient scruter cet annuaire. Extrêmement rapide ... mais aveugle aux réalités fraiches! Un document apparu y'a 1h via clef usb... n'étant pas à l'index d'hier soir.. "locate n'y verra rien de base jusqua 24h!"!
- **\`find /etc -name "app*"\`**: La Patrouille de balayage Physique pur et dur . Extrêmement demandeur processeur et disques ! Analyseras depuis "/" , branches après répertoire toute occurrence validant son expression paramétrique "-size 10M", "mtime +70" ... ! Lente , mais Implacables de faits concrets absolu du Temps Temp réel T. ! 

### La Compilatrice de Tar et Zips d'Archives Compression 
Savoir qu'associer un dossier "Tape Archives" ('Tar'), lie ensemble par enchaînement une liste fichier . MAIS le pur TAR .. NE COMPRESSE AUCUN octets !! ! .

Il le transmet et le délègue aux compressements logiques tierces base ("GZip (-z) , Bzip2 (-j) , Xz (-J)") .
- **Compressions TarBall et Gzip Conjoint** = \`tar -czvf mondossier.tar.gz dossier_a_compress/\`: ( C crée, Z appelle son algorithme compression Gunzip . V "Verbose texte qui parle à log écran " F= Imprime sa destination fichier!). 
- **Extraction Gzip Tar inversée ** = \`tar -xzvf archive_back.tar.gz\` (-X de eXtract , décompilations absolues locales sur dossiers).
    `,
  },
  'lpic1-103-4-1': {
    title: 'Routages Cérébrale et Redirections Bases de Flux (Stds Streams !)',
    content: `
Toutes actions au Linux (du Bash) intègre nativement du comportement logique à 3 têtes connectives :
-   **Canal 0 \`stdin\`** : L'Écouteur du code brut par l'application locale (Inputs de Clavier ou texte!).
-   **Canal 1 \`stdout\`** : Le Standard Rendu "Propre / Réussit" pur d'un output général. (Envoie par default "la réponse aux consoles à affichage direct terminaux"). 
-   **Canal 2 \`stderr\`** : Le Puits Dévié dédiées au déchét d'erreurs d'anomalies de log,  aux messages fatals  système ! Il cohabite avec le Canal 1 , mais s'en isole structurellement par l'ordre Unix de façon à épargner d'entremêler erreurs + textes bon et propres. !!

### Détournements de Résultats Textes Console! 
La Console n'enregistre rien d'outils, elle perd textuel a la fermeture !. Pour archiver le StdOut(Canal 1) des programmes par stock "texte " on l’Évince ! : 
- \`echo "test" > info.txt\` : **L’Oblitération simple** (Écrase unilingue l'ancien fichier s'il existait. Destruit , et écrit ).
- \`echo "test" >> info.txt \` **L'Append Concatenations Pures** (Conserve l'existant, Et Ajoute ses propres textes aux culs du documents a la ligne nouvelle !!).

### Nettoyages D'Avertissement des Erreurs (Stderr 2)
Quand l'outil "find " vous flood des milliards lignes  "Permission rejetée rouge d'admin..." !! .
* \`find / -name "back" \` **> \`/dev/null\`** **2>&1** \` . \`> dev null\` ordonne l'annihilation vers un trou noi informatique absolue "Null" la réussite logiques(Stdout 1).  Le **2>&1** redirige l'alerte d'erreurs base "2 Stderr" de manière solidaire VERs son canal frère du stdout normal "1" . Donc... Le monde des erreurs passera à travers son ami le Canal 1 et le rejoindra pour le trou noir ensemble!   !
    `,
  },
  'lpic1-103-4-2': {
    title: 'Le Pipelines de Barres Tubulaire | ',
    content: `
C'est avec cette idéologie de liaison que la fondation Linux du Bash se démarque. C'est l'essence du Code "Pipe !"

Le Symbole Barres **\`|\` (Pipeline)**. Ordonne et capture au vol le rendu du succès (Stdout 1 ) d'une outil logiciel terminal (e.g. \`cat\`), NON PAS pour le faire lire à vos yeux , ou à un document '>, ... MAIS de brancher ce flu de données d'eau pures, aux entrailles à l'attentes (Stdin IN) de l'application qui la succède au pipe ! 
*    Action Pipée \`cat /etc/passwd | cut -d: -f 1 | sort -r\` . L’entièreté texte passe du docu "passwd" >> Au tranchoirs (Qui coupe la chaine textuelles qu'aux noms unitaire ) >> ET ce flot épurés et amputé passe par la tuyauterie de nouveau sur "sort" , ce dernier le renverra pour vos l'écran sous ordonnancements Alphabet pur Inversé (-r)  !!! 

### Bifurcation Commande Logique 'Tee'
Tee représente graphiquement des Embranchements "T de Tuyaux plomberie " . 
L'Application du Tee vient se nicher ou bon me sembles d'ans le pipe au log de console : \`cat /etc/passwd | tee save.txt | grep root\`. L'eau textuelle y passe, Le Tee Créera au passage et sauvegarderas par disques physiques l'archives d'états d'un document brut, Mais continuera et laissera filer la ressource hydriques textes d'archives dans la pipeline globale de suite (Vers grep ) pour affichage local !
    `,
  },
  'lpic1-103-5-1': {
    title: 'Visualisation Process, et Homicide Applicatifs (Kill PID)',
    content: `
Tout éléments Linux , du bash écran clignotante en serveur Web fantôme Background est identifié numéral aux CPU Kernel  : Identifiant Procès PID  (Unique !) . Le Père du Système originel qui ne meurt ne crash, reste le premier et de tous :" \`PID 1\` : L'init Systemd globale local".

### Analytique Système Visuelles :
*   **\`ps aux\`**: Fige en d'arrêt brut le cliché instantanée du serveur : "A" : tous user de vie de création confondue ! . "U": Parle, détail et décode à l'homme l'information arg des logs. "X : Par delà l’abyssal  et de tâches de fond démon . "
*   **\`top / htop\`**: A l'inverse du clichés PS , C'est "L'Hôpital des cœurs ". Métriques RAM % dynamiques CPU refréchissant et intéractifs !  

### Commande de Résiliations Terminal : Les Kills!
Envoyer une instruction API d'action au "Système Kernal  Interne Base " au "PID local ciblé ".
1.  **\`kill -15 PID\` (SigTerm , Terminates)** : C'est L’Action "Sans Options" Naturelles. SIGTERM est un avertissements gracieux . Envoie des logiques formelles des notifications ("Salut app , Finis lège d'écrire, close des sockets Web à propos , car c'est finie  ").
2.  **\`kill -9 PID\` (SIGKILL : Guillotinage Fatale OS !)**: Les "Gels App", Boucle d'Erreur sans Fin fantôme bloquent les ordinateurs, rendant indifférent des 'sigterm' polis !  "Le Neufs (9)" est intraitable Unix ! . L'instruction n'est même pas envoyée à l'application! C'est de fait de "Kernel " qui la traite ! Il tranche et brûle des ponts du secteurs et détache  brusque ses prises électrique RAM CPU affectées "A bout portant! ". La mémoire est oblitérée de manière abject et brutale système, sauvant d'un freeze la machine.
    `,
  },
  'lpic1-103-5-2': {
    title: 'Arrière-plan Obscur , Et  Focalisations  (Background/Foreground)',
    content: `
D’Usine locale du Shell Bash est Monopolistique Tâche . Mettre en jours 'update base' d'1 h vous paralyse vos sessions de d'interactions ! (Actives Terminal sur l'avant Plans = "Foreground/Fg"). 

### Plonger un utilitaire en Mode Libre Tâche Fantômes Background ! 
L’Insertion Finale textuelles de **\`&\`** d'esperluette du bloc . Ex: "\`tar -czvf monzip.tar /doss &\`"
Valider et en un Éclair ; les Logs de la compressions de zip disparaitront en l'air au fond de toile "Sous votre Linux en Silhouettes (BG - Background)",  Vous octroyant  une ligne de vies et un Prompt interactifs propre de nouveau clavier Libre, pour faire simultanément ! 

### Rétention  et Congélations : Le "Ctrl+Z" de Base!
Pardonne à une tâche énorme lancés maladroitement "en avant-plans paralysant"! ... Taper d'urgence terminal :  \`Ctrl+Z\`.
Un évents de pause "Stop Process suspendu au néant sans RAM ni d'exécution " met au dodos la tache paralysantes de sa session!.
Relâchée de sa visuelle par bash, Nous relayerons sur ordre de  \`bg\` ("Pédale douce, envoie cette Tache en BackGround fond s'il te plaît continue ! ").  Pour au contraires à reprendre mains-mise d'efforts visuels sur son applications, de la cave l'ordine "\`fg\` " l'invoquera et supplantera textuel pour faire reprendre son cours initial (Foreground terminal de sa vie ! ).  (Les tâches isolées se lists à l'ordre \`jobs\`).
    `,
  },
  'lpic1-103-6-1': {
    title: 'Changer les Modificateurs Ordonnancement CPU "Nice et Sympathies" !',
    content: `
### La Règle Unix de Concurrence : le Scheduler 
Linux s’établit en Multitâche Concurrents CPU / "Scheduler base OS Kernel!". Tout le monde au processeur tire couvertures logiques d'Attention du Coeurs Mhz! Un Attribut s'additionnant par Processus vient juger l'agressivité :"Le Nice. Êtes-vous Aimable à l'ordinateur ?" ! 

### Index des Taux "Nice (NI)" Linux : De -20 à + 19.
L'Echelle peut troubler. De manière UNIX , les Zéros négatifs extrêmes de -20 DÉTECTENT d'Élévations Ultimes Cruciales ! Un Processus '-20' dévore les cycles sans prêter un regar et attention à personne de son voisinage OS ! . Le \`+19\`, D'un extrême, la tache accepte et se range ultime, donnant passage et priorité globale et de prendre "Juste les miettes libre temps libre". De Base , Une applis né \` NI 0\`.

*   **\`nice -n 15 backup.sh \`** : Initie a sa création une d'app d'ordres "Sympas!" (Niveau positif 15 ) , la ralentissant au bienfaiteurs OS Web central voisin.
*   **\`renice -n -7 5543 \`** : Rendant une tâche locale et live existante bien en fonction un monstre très égoïste! (Un "Renice", Changements live, S’approprie sur du numéro dynamique de processeur \`PID\` "5543" et jamais les noms d'Apps!).
*   **Les Règles Root :** Utilisateurs lambdas Linux peut se résigner "par générosités pur " à donner la ressource (+19). **Seul Root** en tout puissances et Administrations et sans appels, d'être le seul a invoquer des négatifs cruels (-20) d'arrogance !
    `,
  },
  'lpic1-103-7-1': {
    title: 'Code Cryptique "Expressions Régulières Regex /" (Grep / Sed) ',
    content: `
### Extraction Algorithmiques : "Regular Expressions" (Basic!) UNIX
Un code logique méta-binaire utilisé local par filtres Grep ou Sed . Trouver non pas "des mots ", mais des comportements textuelles profonds et chaines dynamiques ! 

1.  **Le Crampon de Première Lignes \`^\` (Caret / Chapeau!)** : Oblige à l'analyse que pour qu'il trouve vrai un chaine "Avoir le mot pur Root au tout commencement brut originel de son texte paragraphe unique de base ligne bash !!" (\`^root\` "root est un admin!" marche . "il y'a root admin ", de ce fait échoue radical en check !). 
2.  **L'Enclume des Fons Paragraphe Textes \`$\` (Dollar End!)**: Se loge de fin terminale de texte unix (\`z$\` .. Trouve toutes les textes entité d'unix dont l'entité unique de ligne est d'un trait terminé mort de base en d'une "Z", sans aucun espaces ultérieurs a la ligne !)  
3.  **L'Amnistie Parciale : le Point " \`. \` " !!**: S'approprie a valences "Un et Juste un Tout Seul de N'importe ce Quoi Existants dans l'Alphanumérique base mondiale localement" (Exclu retours charriots n!). 
4.  **L'Amas Modulaire Multiplicateurs \`*\` (L'Astre Etoile!)**: En Linux RE, Une étoiles ne "sert de RIEN "! . Elle ne S'AFFECTE QUE , Par le texte et modificateurs juste à sa Gauche ! Et elle dit textuellement : "Cet Elément la, Je dois le valider , soit  0 zéros fois d'apparitions du RIEN ... ou à Une multitude d’Infinités de base consécutive "! . 'Ab*' (Trouve le "A" seul !  "Ab" "Abbbbbb")!.   Associée par fusion "\`.*\`: n'importe quoi en multitudes indéterminée !".. 
5.  **Classes Brackets de Choix Variables \`[ ]\`** : Ne trouver en Linux Qu'UN EST JUSTE UNE SEUL LETTRE UNITAIRE pur validé ! Ex : \`[abc]\`.  Si la demande texte est d 'Exlusions (Nie de force : Ce caractère, c'est tout ceux de Linux sauf... CELUI là l! ). Il sera pré-affixé de chapeaux base \`[^ ]\` locales de restrictions Regex !
    `,
  },
  'lpic1-103-8-1': {
    title: 'Editeurs Historiques Terminal Modal et de Vim ! ',
    content: `
### Vi : La Puissance par Modes!
Sans fioritures GUI, de souris inactif ! Un mode est un monde. Chaque pressions clavier génères l'incompatibilité absolue avec les bases traitement textes ! .
*   **Mode Default Accueil (\`Command\` ! Action Unix) !!** : Rentré base dans VIM ce mode t'interdit et t'effaces toute écriture au fichier pour prendre place au pouvoir commande locale  : ( x : Efface à la Delete Windows , DD de base: Assassine logiquement tout les blocs complet de la ligne d'un coup Unix ! . YY ou "Yank" : De prendre a la RAM tampons le copie du texte base, collable de "p" de Put . Et Undo de retour temporelles " u "). 
*   **Mode "Insert"! L'Edition Ecritures pure** : Par l'entremise touche clavier "\`i\` "  , ou d'\`a\` \`o\` ... La consécration du texte Unix de base libre . Les claviatures redeviennent mots au doc linux textuel ! . Pour s'extirper base on presse unique (ESC ECHAP! ... Qui va nous propulser des mondes textes arrière ,au monde base Commande Initial Action )!
*   **Mode Execute Ordres! (\`Ex\`) UNIX** : La Fenêtre Console base au fichier (Pressions par le deux points colon texte UNIX : **\`:\`** ) , l'éditeur sous ligne attends pour une sauvegardes ( \`:w\` Write écritures disque ), Une fuite pure local ( \`:q\`), Ou le combo final de persistance ( \`:wq ! \`  ou \`:x\`). Le "\`!\`" indique la persistance absolues , forçage sans conditions Unix Kernel de vos fermetures ou de vos rejets locales bases du fichier! 
    `,
  },

  // ─── TOPIC 4: Dispositifs, Systèmes de fichiers et FHS (104) ───
  'lpic1-104-1-1': {
    title: 'Construire Partitions Sys. et Montage Filesystems',
    content: `
### Dissection Brute Disque Outil terminal : fdisk
\`fdisk /dev/sda\` n'altères strictement aucun bits physiques de l'installation UNIX du disque... Sont des simulations RAM textuelles temporaires !! "n" génère une bloc logiques virtuelles sectoriel à la liste console... Un "p" imprime de vision votre listage fdisk de la RAM... Et Ce n’est QUE au signal UNIX terminal \`w\` (Write ) que tout se graveront fatals absolu sur MBR physique aux structures disque avec reboot! Pour des GPT massifs modern , on emploiera logiques gdisk et les surcouches modernes "Parteds interactives "! . 

### MKFS (Make File Sytems : La Chaire de la Machine!)!
Une coquille de base ne suffit point aux Kernel pour structuré son fichiers base ext / log journal ! 
*   **\`mkfs.ext4 /dev/sda1 \`**: Construit , et engendre la technologie à Index du Linux (Ext4, Ex3) , Les journaux (Protections aux corruptions logs base électriques ! ),  ET Les Index Pédigrées absolus aux fichiers natif de la racine (Les T-Inodes! , et du superbloc UNIX locales de base) ! 
*   **\`mkswap /dev/sda2 \`** (Validé ensuite d'un 'swapon') ! Formattages spéciale mémoires virtuelles dédiées UNIX kernel (Inaccessibles par montures humaines basés dossier UNIX !).
    `,
  },
  'lpic1-104-2-1': {
    title: 'Gérer Intégrité Fichier UNIX et Métriques Spatiales !',
    content: `
### Mesure de la Profondeurs aux Disques Vides (Du et Df ) 
Les Jumeaux Outils De Constats Visuels bases . 
*   **\`df -h \`** : Disk Free / Affiches et détail globale et simplifiés les Disques et partitions global de mount (Ext4, Btrfs , XFS ...) Et informe "Il est occupé a base globale de 98%!" avec le "-H Human Base , en Tera Gigas etc..!".
*   **\`du -sh\`** : "Oh non ? 98% ? Mais QUI bouffe sa place d’Ogre !?".  L'outils d'Indexations récursives de RAM (\`du\`) plonge et calcule tous les 175.000 log de de \`/var/\` pour les unifier a "20Gigabytes .." .. " s : summery (Pour ne pas qu'il t'affiche 175milles ligne consoles qui ne t'importe pur visuel !, il donnes le verdict finale base !!") 

### La Chirurgie de Haute Volige (FSCK ! ) 
"FileSystem Checks Unix !"  ... En OS, L'Outils traques l'Erreurs d'Index , Des "inudes désassignée par arrét de courant mortels sans de journalisation propre " , Pour les stocker propre à réparé de force de root dans \`/lost+found\` Linux et retrouver la sanité de votre ordinateur !!  ! 
**L'INTERDICTION FORMEL ABSOLU EXTREMEMNT MORTELLE** -> C'EST DE LANCER SON EXAMIN FSCK , A UNE PARTITIONS DE MONTURE EN LECTURE ECRITURES (RW) FONCTIONNELLES ABRITE !! Modifier sa base OS pendatn l'exam corrompras l’intégrité totales , et fauchera vos dossiers de Linux intégralement !! (Démontez Base , ou de faire sur mode rescue "Read-only !") 
    `,
  },
  'lpic1-104-3-1': {
    title: 'Création Système des Monture Locales (Le Mount)!',
    content: `
### Insérer des Blocs Externe (/dev/sr0 /dev/sdb1) en FS (mount !)
L'ordinateur Linux natif à besoin formel qu'un répertoire humain physique terminal dit de ("MountPoint Point ") se fasses office logicielle de passerelle UNIX aux port logic USB !! (\`mount -t vfat /dev/sdb1  /chemin/mnt/cle \`) 

### La Loi Centrale et Automatisme au Démarrage / Boot de FSTAB! 
Son Fichier **/etc/fstab**. (Filesystem Tables !). C'est le livre ouvert de règles . Le "Sys V Kernel et init system" lors de l'aube d'allumage , vas lire ligne a par texte fstab les lignes pour orchestrer dynamiquement ( \`mount -a\` automatique) d'insérer le 'swap ,  le boot base, le / raiz ' des fichiers !! . 

A la Base structuré en \`6 Colonnes Tab\` :  Le Matériel Original Universelle Base d'Identité unique (\`UUID=3321-xxx\` ou /dev/sd ) L'Atterissage Point de Montures (/\`var \`), Type ( \`xfs..ext4\` ), \`Defauts (Ou Read only, uid base permissions) \` , et 2 numérique d'intructions "Dumpe, ou Check FSCK ordre Kernel!" 
**L'Usage de L'UUID à fstab:** : Unix t'interdira en pro d'utiliser /dev/sda1.. ! Au reboot, "Les port et bus Sata physique permutent / sdb prend sa places ". Resultante l'ordinateur crash OS car fstab s'est trompé.  ! L'\`UUID\` d'ID de disque (Récoltables par commande base système \`blkid\`) sera Universellement identique quoiqu’advienne les changement carte-mère base physiques OS !!
    `,
  },
  'lpic1-104-5-1': {
    title: 'Ordonnances des Permissions d\'Octals des Dossiers OS  ',
    content: `
### Sphères Standard de Partages Sécurisés :  (RWX unix) 
(User Auteur 1 ) , ( Group 2 Appartenance ! ) , (Others , les Inconnus ! ) 
Au droits des lecture Listes pure textuel dossiers ( \`r=4\` ), L'acte l'Edition des noms supppressions (\`w=2\`) , et L'Acte Executions logiques de binaires de Traversés dossiers profonds (\`x=1 \` ) .
*   Un doc : "644" Base (  Lire Write le proprio . Reste Monde "Lire seulement Unix").
*   Dossiers Pur: "755" base. (L'Hôte User tous droit total RWX \`7\`, Monde extérieurs juste lit RX pour ouvrir naviguer dossiers local d'un  \`5\`). 

### L'Exceptions et L'Invocations Hack! SUID GUID et "T" Bit! 
*   **Sticky Base Bit ("t"): ** : Conçu base le partages publique inter-groupe chaotique ("/tmp \`777\` public total !") .. Un Hackeur se ferais un plaisir , fort d'un droits complet total (\`rwx\` "others" base ! ) "j'effacce et de fait d'utiliser sa permissivité effacerai les fichiers log Web admin ou fichier temp du voisins par blague terminal! ).. Le "t " octrogne textuel le droits restrictif exclusifs d’oblitération aux fichier... UNIQUEMENT à leurs seuls créateurs (User Originel pur), garantissant de partage safe logiques en anarchie dossiers ouverts OS !
*   **L’Usurpation SUID (dite "s"):** Quand tu de lances '/usr/bin/passwd\` .. L'Edition du fichier de fond mots passe de la machine logiques "linux shadow" appartient de fait de nature "Strictement à Linux l'Aura d'Administrateur ROOT pur , Intouchables" ! . Comment toi usager "Lambda" arrives a exécuter l'interaction ? -> Grâce à la lettre paramètre ("s" ), Le binaire local t'accorde l'Emancipation temporaire du Titre de "Usager Propriétaire Source " à l. L'espace de sa nanoseconde UNIX d’exécution . (Faille majeure au Serveur web pro de hacking en cas d'exploitation d'app "bash" dotées par oublie SUID donnant des shells absolus racine OS de base aux externes !! )
    `,
  },
  'lpic1-104-6-1': {
    title: 'Générations des Hard Liens Unix ! Et des Symlinks ! ',
    content: `
### Les Pointeurs Linux de "Chemin" : Symbolic Links
Commandés sous un " \`ln -s\` destination source ".  C'est votre équivalent d"Atajos-Racourcis d'OS windows" par abstraction . C'est un microscopiques document de texte logiques ASCII de base (15B), qui contient et pointe verbeusement d'URL UNIX textuelle "Je redirige sur : \`-> /opt/mon_dossiers \` ". \`ls -l\` montrera d'une initiale " L " Symlink d'évidences .
L'atout ? De Travailler au fil de parcs et des partitions disques externe réseau IP NFS ! Son Fardeau Incompatible Unix ? Un Nom d'un Ficher OS original "mv base renommés OS"... Détruit évidement le texte abstrait source original , laissant brisée la connexion (Broken Links orphelins pur rouge , inutiles ! ).. 
 
### Les Clônes Gemelaire d’Identités absolus !! Les Hard LINKS " ln "! 
La commande pure : \`ln fichier_vraie clone_vraie\`. Il n'est en Riene un raccourci! C'EST le vrai ficher pur! ; L\'architecture EXT4 Indexs Indexent à des IDs Puces Mères (Inodes!) Les fichiers physiques aux textuelles !!.. 
*   Un Hard links clone t'il 2x fichier pour 2giga d'espace gaspillés Linux RAM ? **NON !**! Les deux fichiers Unix , (Père 1 ) et le (Fils 2 Link) Sont associés physiquement comme reflet inaudible au Seul et UNIQUE numéro matricule puces Disque Mère Ext4 d'INODES base pur système ! L'Ensemble partage sa taille et bits de fond unix !
*   Si de bash ont supprimes (RM unix!) L’original  "Pere 1"? L’O.S linux de ficher , de ses Index .. ne retire absolument QUE De l'Espace textuels de dossier le mots "fichier pere1," de visu ! LE TEXTE LOGIQUE RESTANT BASE PHYSIQUE BRUTE INODES (Ext4 disques Data! ) Restera et restera INTAC , et intégre et sauvegardés,  jusqua l'instant critique absolue de  la suppression totales et entière du Dernier Des clones fils Hard Link qui tenais en fils rattaché du systèmes !!. ( Impossible à lancer a des disques dur autres à ext4 base isolées Indexés!).
    `,
  },
  'lpic1-104-7-1': {
    title: 'Norme Mondiale Linux FHS et Index d\'Acheminements ',
    content: `
### Organisation Des Serveurs Universels Filesystems Hierarchy Standard -
Des dogmes unix Posix crées pour organiser toutes applications et distribution OS bases Open Sources d'évités le bazar désorganisationnels des développeurs !

*   **\`/usr \`**   => La Bibliothèque read-only partagées de l'ordinateur ! Elle en regorges des Binaires de commande pour vos lambda User "\`/usr/bin/\` (Ls command, cat bash...) !  Et d'invariables codes Linux universelles des Unix !! Aucuns texte "Variables perso à la session ou fichiers user ou cfg locale" n'y aura de sa place logiques!
*   **\`/var \`**   => Le Bassin Dynamiques Incontrôlable Exponentiel locale  (Log d'ordinateur d'Erreur system d'Apache et Boot base os... , Reliquat Database MySQL qui en grossit la data locale... Queue file d'imprimante base Cups...). Isolés toujours d'exigences absolues pour parer à la corruptions root partitions !
*   **\`/etc \`**   => Tour de Contrôles textuel pure d'Administration Local . Configuration d'IP réseaux locale (/etc/network) des Configs Mots d'Access Users UNIX local ! RIENS D'EXECUTABLES Binaire ne DOIVENT y Résider purement!.
*   **\`/opt \`**   => Logiciels "Optionels, Monoplithiques Addons Tierces Non Officielles (Commerciales fermés)" ! L'Application (Google Chrome, Discord, ou d'Oracle BDD Enterprise ) installeras dans \`/opt\` Ses logs .. et son propre univers isolées  . En effet , pour échapper de foutres leurs librairies  dans le "\`/usr\`" commun Linux OS pour pervertir d'écrasés par update locales les fichiers système Unix natif pur d'une app voisine au système !  ! 
    `,
  },
}
