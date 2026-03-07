// LPIC-1 102 Quiz Pool — English — Topic 107 (Admin Tasks)

export const lpic1_102_topic3Quizzes_en = [
  // ─── 107.1 Manage user and group accounts (8 questions) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'In which file are encrypted user passwords and account expiration data stored on most modern Linux systems?',
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: '/etc/shadow is only readable by root and contains the hashes.'
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to change the password aging parameters, such as making a password expire in 90 days?',
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: 'chage (change age) is the tool for managing password expiration policies.'
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'What does the third field in the /etc/passwd file represent?',
    options: [
      'Username',
      'Group ID (GID)',
      'User ID (UID)',
      'Home directory'
    ],
    correct: 2,
    explanation: 'The format is username:password:UID:GID:comment:home:shell.'
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows the User ID (UID) and group IDs (GID) of the current user?',
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: "The 'id' command provides full identity information for a user."
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which file contains the list of groups and their members?',
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: '/etc/group defines the groups available on the system.',
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which command is used to add a user to a secondary group without removing them from existing groups?',
    options: ['usermod -g group user', 'usermod -aG group user', 'useradd -G group user', 'groupmod -A user group'],
    correct: 1,
    explanation: '`usermod -aG` appends the user to the specified group(s).',
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which file is consulted by the `useradd` command to determine the default home directory base and skeleton directory?',
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', 'Both /etc/login.defs and /etc/default/useradd'],
    correct: 3,
    explanation: 'Both files provide default values for the account creation process.',
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command deletes a user account and optionally removes the home directory?',
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: '`userdel -r` removes the user and their home directory files.',
  },

  // ─── 107.2 Automate system administration (6 questions) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In a crontab file, what does the first field (far left) represent?',
    options: [
      'Hour',
      'Month',
      'Minute',
      'Day of week'
    ],
    correct: 2,
    explanation: 'Cron timing starts with minutes (0-59).'
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: "Which command displays the queue of jobs scheduled with the 'at' command?",
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: "atq stands for 'at queue'."
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which directory is used for system crontabs that run every hour?',
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: '/etc/cron.hourly/ is where the system looks for scripts to execute every hour.',
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which tool allows recurring jobs to be executed at a specific time, but also handles cases where the system was powered off during the scheduled time?',
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: '`anacron` is designed for systems that are not running 24/7.',
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you edit your personal crontab file securely?',
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/user'],
    correct: 1,
    explanation: '`crontab -e` opens the user crontab in the default editor and validates syntax on exit.',
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which file specifies users who are explicitly forbidden from using the `at` command?',
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: '/etc/at.deny lists users who cannot schedule jobs with `at`.',
  },

  // ─── 107.3 Localisation and internationalisation (6 questions) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which environment variable specifies the global default language and encoding for the system?',
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: 'LANG is the primary variable for localization settings.'
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How is the local timezone typically configured on a Linux system?',
    options: [
      'By editing /etc/timezone.conf',
      'By linking /usr/share/zoneinfo/ to /etc/localtime',
      'By setting the TZ variable in /etc/profile',
      'By running the "clockset" command'
    ],
    correct: 1,
    explanation: '/etc/localtime being a symlink to a file in zoneinfo is the standard method.'
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which variable, if set, overrides all other LC_* environment variables?',
    options: ['LC_FORCE', 'LC_ALL', 'LANG', 'LC_OVERRIDE'],
    correct: 1,
    explanation: '`LC_ALL` has the highest priority and overrides individual categories and the LANG variable.',
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to convert the encoding of a file, for example from ISO-8859-1 to UTF-8?',
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: '`iconv` (Internationalization Conversion) is the standard utility for converting file encodings.',
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What command shows the current system date, time, and timezone?',
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: '`date` displays and sets the system clock.',
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Unicode (and its UTF-8 encoding) is intended to provide what?',
    options: [
      'A way to compress text files',
      'A universal character set for all languages',
      'An encryption standard for web traffic',
      'A faster processing speed for database queries'
    ],
    correct: 1,
    explanation: 'Unicode provides a unique number for every character, regardless of platform or language.',
  },
];
