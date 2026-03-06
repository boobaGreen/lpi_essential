// LPIC-1 102 Quiz Pool — English — Topic 108 (Essential Services)

export const lpic1_102_topic4Quizzes_en = [
  {
    topicId: 4,
    question: "Which command allows you to synchronize the hardware clock (RTC) with the system clock (Software)?",
    options: [
      "date --sync",
      "hwclock --systohc",
      "hwclock --hctosys",
      "swclock --write"
    ],
    correct: 1,
    explanation: "--systohc copies the value from System to Hardware Clock."
  },
  {
    topicId: 4,
    question: "In which configuration file can you define aliases for local e-mail addresses on the system?",
    options: [
      "/etc/mail.conf",
      "/etc/postfix/main.cf",
      "/etc/aliases",
      "~/.mailrc"
    ],
    correct: 2,
    explanation: "/etc/aliases defines redirections for local mail messages."
  },
  {
    topicId: 4,
    question: "Which utility is used to handle the automatic rotation of log files to prevent them from filling up the disk?",
    options: [
      "logrotate",
      "syslog-rotate",
      "journalctl --vacuum",
      "cron-log"
    ],
    correct: 0,
    explanation: "logrotate rotates, compresses, and manages the longevity of text logs."
  },
  {
    topicId: 4,
    question: "Which journalctl command allows you to view log messages in real-time as they arrive?",
    options: [
      "journalctl -r",
      "journalctl -f",
      "journalctl -u",
      "journalctl -n"
    ],
    correct: 1,
    explanation: "-f (follow) works similarly to 'tail -f' for the binary journal."
  },
  {
    topicId: 4,
    question: "On which default port does the CUPS web administration interface respond?",
    options: [
      "80",
      "443",
      "631",
      "9100"
    ],
    correct: 2,
    explanation: "CUPS uses port 631 for the IPP protocol and web interface."
  },
  {
    topicId: 4,
    question: "Which of the following is NOT a Mail Transfer Agent (MTA)?",
    options: [
      "Postfix",
      "Exim",
      "Apache",
      "Sendmail"
    ],
    correct: 2,
    explanation: "Apache is a web server, not a mail transfer agent."
  },
  {
    topicId: 4,
    question: "Which command is used to remove a specific print job from the queue?",
    options: [
      "lprm",
      "lpc remove",
      "cancel -all",
      "printdel"
    ],
    correct: 0,
    explanation: "lprm (line printer remove) deletes jobs from the CUPS queue."
  },
  {
    topicId: 4,
    question: "What is the name of the systemd daemon that collects log messages in binary format?",
    options: [
      "syslogd",
      "journald",
      "logd",
      "binarylogd"
    ],
    correct: 1,
    explanation: "systemd-journald is the daemon that manages the binary 'journal'."
  }
];
