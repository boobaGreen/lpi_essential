// LPIC-1 102 Quiz Pool — English — Topic 107 (Admin Tasks)

export const lpic1_102_topic3Quizzes_en = [
  {
    topicId: 3,
    question: "In which file are encrypted user passwords and account expiration data stored on most modern Linux systems?",
    options: [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/gshadow",
      "/etc/security"
    ],
    correct: 1,
    explanation: "/etc/shadow is only readable by root and contains the hashes."
  },
  {
    topicId: 3,
    question: "Which command is used to change the password aging parameters, such as making a password expire in 90 days?",
    options: [
      "passwd -e",
      "chage",
      "usermod -p",
      "expiry"
    ],
    correct: 1,
    explanation: "chage (change age) is the tool for managing password expiration policies."
  },
  {
    topicId: 3,
    question: "What does the third field in the /etc/passwd file represent?",
    options: [
      "Username",
      "Group ID (GID)",
      "User ID (UID)",
      "Home directory"
    ],
    correct: 2,
    explanation: "The format is username:password:UID:GID:comment:home:shell."
  },
  {
    topicId: 3,
    question: "Which command shows the User ID (UID) and group IDs (GID) of the current user?",
    options: [
      "whoami",
      "id",
      "users",
      "groups"
    ],
    correct: 1,
    explanation: "The 'id' command provides full identity information for a user."
  },
  {
    topicId: 3,
    question: "In a crontab file, what does the first field (far left) represent?",
    options: [
      "Hour",
      "Month",
      "Minute",
      "Day of week"
    ],
    correct: 2,
    explanation: "Cron timing starts with minutes (0-59)."
  },
  {
    topicId: 3,
    question: "Which command displays the queue of jobs scheduled with the 'at' command?",
    options: [
      "atq",
      "atrm",
      "cron -l",
      "at -list"
    ],
    correct: 0,
    explanation: "atq stands for 'at queue'."
  },
  {
    topicId: 3,
    question: "Which environment variable specifies the global default language and encoding for the system?",
    options: [
      "LANGUAGE",
      "LOCALE",
      "LANG",
      "LC_ALL"
    ],
    correct: 2,
    explanation: "LANG is the primary variable for localization settings."
  },
  {
    topicId: 3,
    question: "How is the local timezone typically configured on a Linux system?",
    options: [
      "By editing /etc/timezone.conf",
      "By linking /usr/share/zoneinfo/ to /etc/localtime",
      "By setting the TZ variable in /etc/profile",
      "By running the 'clockset' command"
    ],
    correct: 1,
    explanation: "/etc/localtime being a symlink to a file in zoneinfo is the standard method."
  }
];
