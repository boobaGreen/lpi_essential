// LPIC-1 102 Quiz Pool — English — Topic 108 (Essential Services)

export const lpic1_102_topic4Quizzes_en = [
  // ─── 108.1 Maintain system time (5 questions) ───
  {
    id: 'q-lpic1-102-4-001', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command allows you to synchronize the hardware clock (RTC) with the system clock (Software)?',
    options: [
      'date --sync',
      'hwclock --systohc',
      'hwclock --hctosys',
      'swclock --write'
    ],
    correct: 1,
    explanation: '--systohc copies the value from System to Hardware Clock.'
  },
  {
    id: 'q-lpic1-102-4-002', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'What is the standard protocol used to synchronize system time over a network?',
    options: ['SMTP', 'NTP', 'SNMP', 'TIME-P'],
    correct: 1,
    explanation: 'The Network Time Protocol (NTP) is used to keep system clocks accurate via time servers.',
  },
  {
    id: 'q-lpic1-102-4-003', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which modern systemd utility is used to query and change the system clock and its settings?',
    options: ['clocktool', 'timeconfig', 'timedatectl', 'sysclock'],
    correct: 2,
    explanation: '`timedatectl` manages time, date, and timezone settings on systemd-based distributions.',
  },
  {
    id: 'q-lpic1-102-4-004', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which software is a common replacement for the classic ntpd, designed to sync time more quickly and accurately on sporadically-connected systems?',
    options: ['chrony', 'timesync', 'sync-ntp', 'timed'],
    correct: 0,
    explanation: 'Chrony is an alternative NTP implementation that is particularly good for systems that are not always online.',
  },
  {
    id: 'q-lpic1-102-4-005', lessonId: 'lpic1-102-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'The hardware clock (RTC) is typically set to which time standard on Linux servers?',
    options: ['Local Time', 'PST', 'UTC', 'GMT+1'],
    correct: 2,
    explanation: 'Linux systems generally expect the hardware clock to be in Coordinated Universal Time (UTC).',
  },

  // ─── 108.2 System logging (5 questions) ───
  {
    id: 'q-lpic1-102-4-006', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which utility is used to handle the automatic rotation of log files to prevent them from filling up the disk?',
    options: [
      'logrotate',
      'syslog-rotate',
      'journalctl --vacuum',
      'cron-log'
    ],
    correct: 0,
    explanation: 'logrotate rotates, compresses, and manages the longevity of text logs.'
  },
  {
    id: 'q-lpic1-102-4-007', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which journalctl command allows you to view log messages in real-time as they arrive?',
    options: [
      'journalctl -r',
      'journalctl -f',
      'journalctl -u',
      'journalctl -n'
    ],
    correct: 1,
    explanation: '-f (follow) works similarly to "tail -f" for the binary journal.'
  },
  {
    id: 'q-lpic1-102-4-008', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'What is the name of the systemd daemon that collects log messages in binary format?',
    options: [
      'syslogd',
      'journald',
      'logd',
      'binarylogd'
    ],
    correct: 1,
    explanation: 'systemd-journald is the daemon that manages the binary "journal".'
  },
  {
    id: 'q-lpic1-102-4-009', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Where is the main configuration file for the rsyslog daemon located?',
    options: ['/etc/rsyslog.conf', '/etc/syslog.conf', '/etc/log.conf', '/usr/share/rsyslog/rsyslog.conf'],
    correct: 0,
    explanation: '/etc/rsyslog.conf defines how logs are filtered and where they are stored.',
  },
  {
    id: 'q-lpic1-102-4-010', lessonId: 'lpic1-102-4-2', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which command allows a user to manually send a message to the system log from a script?',
    options: ['log', 'syslog', 'logger', 'writelog'],
    correct: 2,
    explanation: 'The `logger` command is a shell interface to the syslog(3) system log module.',
  },

  // ─── 108.3 Mail Transfer Agent (MTA) basics (5 questions) ───
  {
    id: 'q-lpic1-102-4-011', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'In which configuration file can you define aliases for local e-mail addresses on the system?',
    options: [
      '/etc/mail.conf',
      '/etc/postfix/main.cf',
      '/etc/aliases',
      '~/.mailrc'
    ],
    correct: 2,
    explanation: '/etc/aliases defines redirections for local mail messages.'
  },
  {
    id: 'q-lpic1-102-4-013', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following is NOT a Mail Transfer Agent (MTA)?',
    options: [
      'Postfix',
      'Exim',
      'Apache',
      'Sendmail'
    ],
    correct: 2,
    explanation: 'Apache is a web server, not a mail transfer agent.'
  },
  {
    id: 'q-lpic1-102-4-012', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command must be run after editing /etc/aliases to ensure the changes take effect?',
    options: ['newaliases', 'postfix restart', 'alias -u', 'rehash'],
    correct: 0,
    explanation: '`newaliases` rebuilds the database used by the MTA for lookups.',
  },
  {
    id: 'q-lpic1-102-4-014', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command allows an administrator to view the current queue of outgoing mail messages?',
    options: ['mailp', 'mailq', 'ls -l /var/spool/mail', 'atq'],
    correct: 1,
    explanation: '`mailq` (or `mail -bp`) lists all messages currently in the mail spool queue.',
  },
  {
    id: 'q-lpic1-102-4-015', lessonId: 'lpic1-102-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'In Postfix, what is the primary configuration file used to set global parameters like `myhostname`?',
    options: ['/etc/postfix/master.cf', '/etc/postfix/main.cf', '/etc/mail/postfix.cf', '/etc/postfix.cf'],
    correct: 1,
    explanation: 'main.cf is the main configuration file for Postfix settings.',
  },

  // ─── 104.4 Manage printers and printing (5 questions) ───
  {
    id: 'q-lpic1-102-4-016', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'On which default port does the CUPS web administration interface respond?',
    options: [
      '80',
      '443',
      '631',
      '9100'
    ],
    correct: 2,
    explanation: 'CUPS uses port 631 for the IPP protocol and web interface.'
  },
  {
    id: 'q-lpic1-102-4-017', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to remove a specific print job from the queue?',
    options: [
      'lprm',
      'lpc remove',
      'cancel -all',
      'printdel'
    ],
    correct: 0,
    explanation: 'lprm (line printer remove) deletes jobs from the CUPS queue.'
  },
  {
    id: 'q-lpic1-102-4-018', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command displays the status of the printer queues on a system?',
    options: ['lpstat', 'lpq', 'lpc status', 'All of the above'],
    correct: 3,
    explanation: '`lpstat`, `lpq`, and `lpc status` are all valid commands to check printer status in modern CUPS environments.',
  },
  {
    id: 'q-lpic1-102-4-019', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which tool is the primary line printer command used to submit a job to a printer?',
    options: ['lp', 'lpr', 'Both lp and lpr are valid', 'sendprint'],
    correct: 2,
    explanation: 'In CUPS, both the System V `lp` and the BSD `lpr` commands are officially supported.',
  },
  {
    id: 'q-lpic1-102-4-020', lessonId: 'lpic1-102-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What is the name of the main configuration file for the CUPS daemon?',
    options: ['/etc/cups/cups.conf', '/etc/cups/cupsd.conf', '/etc/print/cupsd.conf', '/usr/share/cups/config'],
    correct: 1,
    explanation: '`cupsd.conf` is the primary configuration file for the CUPS scheduler.',
  },
];
