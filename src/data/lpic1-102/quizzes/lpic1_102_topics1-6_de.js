// LPIC-1 102 Quiz Pool — German — Topics 1-6 (Consolidated)
export const lpic1_102_topic1Quizzes_de = [
  {
    topicId: 1,
    question: "Welche Datei wird beim Schließen einer Bash-Login-Shell ausgeführt?",
    options: ["~/.bashrc", "~/.bash_logout", "/etc/bash_exit", "~/.profile"],
    correct: 1,
    explanation: "~/.bash_logout wird speziell für Aufräumarbeiten beim Beenden einer Login-Shell verwendet."
  }
];

export const lpic1_102_topic2Quizzes_de = [
  {
    topicId: 2,
    question: "Welche Komponente verwaltet in X11 die Hardware (Monitor, Tastatur, Maus)?",
    options: ["X Client", "X Server", "Window Manager", "Display Manager"],
    correct: 1,
    explanation: "Der X-Server kommuniziert direkt mit der lokalen Hardware."
  }
];

export const lpic1_102_topic3Quizzes_de = [
  {
    topicId: 3,
    question: "In welcher Datei werden Passwort-Hashes auf modernen Linux-Systemen gespeichert?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/gshadow", "/etc/security"],
    correct: 1,
    explanation: "/etc/shadow ist nur für root lesbar und enthält die Hashes."
  }
];

export const lpic1_102_topic4Quizzes_de = [
  {
    topicId: 4,
    question: "Auf welchem Port antwortet standardmäßig die Web-Oberfläche von CUPS?",
    options: ["80", "443", "631", "9100"],
    correct: 2,
    explanation: "CUPS nutzt Port 631 für das IPP-Protokoll und das Web-Interface."
  }
];

export const lpic1_102_topic5Quizzes_de = [
  {
    topicId: 5,
    question: "Welche Datei legt die Reihenfolge fest, in der Hostnamen aufgelöst werden (z.B. erst Files, dann DNS)?",
    options: ["/etc/hosts", "/etc/resolv.conf", "/etc/nsswitch.conf", "/etc/resolv.order"],
    correct: 2,
    explanation: "/etc/nsswitch.conf steuert die Suchreihenfolge für verschiedene Systemdatenbanken."
  }
];

export const lpic1_102_topic6Quizzes_de = [
  {
    topicId: 6,
    question: "Mit welchem Befehl sollte die /etc/sudoers Datei vorzugsweise bearbeitet werden?",
    options: ["nano", "visudo", "sudoedit", "vi"],
    correct: 1,
    explanation: "visudo prüft die Syntax vor dem Speichern."
  }
];
