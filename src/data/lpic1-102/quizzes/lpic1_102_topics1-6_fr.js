// LPIC-1 102 Quiz Pool — French — Topics 1-6 (Consolidated)
export const lpic1_102_topic1Quizzes_fr = [
  {
    topicId: 1,
    question: "Quel fichier est exécuté lors de la fermeture d'un shell Bash de connexion ?",
    options: ["~/.bashrc", "~/.bash_logout", "/etc/bash_exit", "~/.profile"],
    correct: 1,
    explanation: "~/.bash_logout est utilisé pour le nettoyage à la fin de la session."
  }
];

export const lpic1_102_topic2Quizzes_fr = [
  {
    topicId: 2,
    question: "Quel composant gère le matériel graphique, le clavier et la souris dans X11 ?",
    options: ["X Client", "X Server", "Window Manager", "Display Manager"],
    correct: 1,
    explanation: "Le serveur X communique directement avec le matériel local."
  }
];

export const lpic1_102_topic3Quizzes_fr = [
  {
    topicId: 3,
    question: "Où sont stockés les mots de passe chiffrés sur un système Linux moderne ?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/gshadow", "/etc/secure"],
    correct: 1,
    explanation: "/etc/shadow contient les empreintes (hashes) et n'est lisible que par root."
  }
];

export const lpic1_102_topic4Quizzes_fr = [
  {
    topicId: 4,
    question: "Quel port est utilisé par défaut pour l'interface web de CUPS ?",
    options: ["80", "443", "631", "9100"],
    correct: 2,
    explanation: "CUPS utilise le port 631 pour l'administration et le protocole IPP."
  }
];

export const lpic1_102_topic5Quizzes_fr = [
  {
    topicId: 5,
    question: "Quel fichier contient les serveurs DNS à interroger par le client ?",
    options: ["/etc/hosts", "/etc/resolv.conf", "/etc/networks", "/etc/nsswitch.conf"],
    correct: 1,
    explanation: "/etc/resolv.conf définit les serveurs de noms (nameservers)."
  }
];

export const lpic1_102_topic6Quizzes_fr = [
  {
    topicId: 6,
    question: "Quelle commande permet d'éditer le fichier /etc/sudoers en toute sécurité ?",
    options: ["nano", "visudo", "sudoedit", "vi"],
    correct: 1,
    explanation: "visudo vérifie la syntaxe avant d'enregistrer les modifications."
  }
];
