// RHCSA Quiz — Topic 3: Running System Management (English)
// 22 MCQ questions

export const rhcsaTopic3QuizzesEN = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which systemd target corresponds to the old runlevel 3 (multi-user, no graphics)?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: 'multi-user.target = runlevel 3 (CLI). graphical.target = runlevel 5 (GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you change the system default target permanently?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: 'systemctl set-default <target> sets the permanent default target, creating a symlink in /etc/systemd/system/default.target.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'During boot, which kernel parameter do you add to GRUB to interrupt boot and access an emergency shell (RHCSA rescue)?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: 'rd.break interrupts the boot in the initramfs phase, before mounting /sysroot. Useful for root password reset on RHEL9.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'After using rd.break to reset the root password on RHEL9 with SELinux, which command do you run before rebooting?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'touch /.autorelabel forces SELinux to relabel the entire filesystem on the next boot, which is necessary after changing /etc/shadow directly.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command brings the system to the rescue target (single user) without rebooting?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'systemctl isolate <target> immediately switches to the specified target, starting only the services of that target.',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you view the current default target?',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: 'systemctl get-default shows the current default target (the default.target symlink).',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which signal does `kill -9 <PID>` send?',
    options: ['SIGTERM (15) — soft termination', 'SIGKILL (9) — immediate termination', 'SIGHUP (1) — reload config', 'SIGSTOP (19) — pause process'],
    correct: 1,
    explanation: 'SIGKILL (9) forces the immediate termination of the process. It cannot be ignored or caught.',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command changes the nice priority of an already running process with PID 1234 to -5?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: 'renice -n <value> -p <PID> modifies the nice value of a running process. nice is only for new processes.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which range of nice values indicates the highest priority for a process?',
    options: ['100 (highest value)', '-20 (lowest value, highest priority)', '+19 (highest value)', '0 (default)'],
    correct: 1,
    explanation: 'Nice ranges from -20 (highest priority, root only) to +19 (lowest priority). Negative values = more CPU time.',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command shows all processes from all users in extended format?',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: 'ps aux — a=all users, u=user-oriented format, x=includes processes without a terminal.',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command sends SIGTERM to the process named "httpd"?',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: 'killall <name> sends SIGTERM (by default) to all processes with that name. pkill works with patterns.',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'How do you bring a suspended background job with job number %2 into the foreground?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: 'fg %<n> brings the job to the foreground. bg %<n> continues it in the background. jobs lists current jobs.',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command enables sshd at boot and starts it immediately?',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'systemctl enable --now <service> combines enable (auto-start on boot) and start (immediate start) in a single command.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What is the difference between `systemctl stop` and `systemctl disable`?',
    options: [
      'They are identical',
      'stop halts the service now; disable prevents it from starting on the next boot',
      'disable halts the service now; stop removes the service',
      'stop permanently removes the service',
    ],
    correct: 1,
    explanation: 'stop = halts immediately but restarts on boot. disable = will not start on boot but remains active if currently running.',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command completely prevents a service from starting (even manually)?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: 'mask creates a symlink to /dev/null for the unit file, preventing any startup. unmask removes the mask.',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'How do you check the detailed status of a service?',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: 'systemctl status <service> shows status, PID, recent logs, and whether it is enabled/disabled.',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'After editing a systemd service configuration file (.service), which command reloads the configuration?',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'systemctl daemon-reload reloads all unit files from disk. It must be run after modifying a unit file in /etc/systemd/system/.',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command displays system logs in real-time?',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'journalctl -f (follow) shows logs in real-time, just like tail -f does for log files.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you view logs only for the sshd service using journalctl?',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: '-u (unit) filters logs by systemd unit. journalctl -u sshd shows only sshd logs.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Where do you configure the persistence of the systemd journal?',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: '/etc/systemd/journald.conf — set Storage=persistent to make the journal persistent on disk.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which file do you edit to add a cron job for the current user?',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'crontab -e opens the editor for the current user\'s crontab. Format is: min hour day month weekday command.',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which cron entry runs a script every Monday at 3:30 AM?',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Cron format: minute hour day_of_month month day_of_week. 30 3 * * 1 = 3:30 every Monday (1=Monday).',
  },
]
