// LPIC-1 102 Quiz Pool — English — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_en = [
  // ─── 105.1 Customize and use the shell environment (10 questions) ───
  {
    id: 'q-lpic1-102-1-001', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which file is executed when a user closes a Bash login shell?',
    options: [
      '~/.bashrc',
      '~/.bash_logout',
      '/etc/bash_exit',
      '~/.profile'
    ],
    correct: 1,
    explanation: '~/.bash_logout is specifically designed for cleanup tasks when a login shell exits.'
  },
  {
    id: 'q-lpic1-102-1-002', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: "Which directory contains default configuration files that are copied to a new user's home directory upon account creation?",
    options: [
      '/etc/defaults',
      '/etc/skel',
      '/usr/share/templates',
      '/etc/profile.d'
    ],
    correct: 1,
    explanation: 'The /etc/skel (skeleton) directory stores default hidden files for new users.'
  },
  {
    id: 'q-lpic1-102-1-003', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "What is the correct way to make a variable 'MYVAR' accessible to child processes of the current shell?",
    options: [
      'set MYVAR',
      'export MYVAR',
      'env MYVAR',
      'chmod +x MYVAR'
    ],
    correct: 1,
    explanation: "The 'export' command promotes a shell variable to an environment variable."
  },
  {
    id: 'q-lpic1-102-1-004', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which file should be edited to define aliases for all users in a Bash shell?',
    options: ['~/.bashrc', '/etc/bashrc or /etc/bash.bashrc', '~/.profile', '/etc/skel/.bashrc'],
    correct: 1,
    explanation: 'System-wide aliases and functions should typically be placed in /etc/bashrc or /etc/bash.bashrc.',
  },
  {
    id: 'q-lpic1-102-1-005', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'What is the purpose of the `source` command (or the `.` operator)?',
    options: [
      'To compile a shell script',
      'To execute a script in the current shell environment without starting a subshell',
      'To download a file from the internet',
      'To reset the shell to its default state'
    ],
    correct: 1,
    explanation: '`source` (or `.`) executes a file in the current shell context, allowing it to modify current variables and functions.',
  },
  {
    id: 'q-lpic1-102-1-006', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which variable holds the search path for the `unalias` command?',
    options: ['PATH', 'ALIAS_PATH', 'The shell does not use a path for aliases', 'BASH_ALIASES'],
    correct: 2,
    explanation: 'Aliases are stored in memory in the current shell environment; there is no disk-based search path like for executables.',
  },
  {
    id: 'q-lpic1-102-1-007', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which command displays all currently defined environment variables?',
    options: ['set', 'env', 'export -p', 'Both env and export -p'],
    correct: 3,
    explanation: '`env` shows exported variables, and `export -p` lists them in a format intended for shell input.',
  },
  {
    id: 'q-lpic1-102-1-008', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Which file is first read by a Bash login shell for system-wide configuration?',
    options: ['/etc/bash.bashrc', '/etc/profile', '/etc/environment', '/etc/bashrc'],
    correct: 1,
    explanation: 'A login shell first reads /etc/profile, which then usually sources other files in /etc/profile.d/.',
  },
  {
    id: 'q-lpic1-102-1-009', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'How do you remove an environment variable named `TEMP_DATA` for the remainder of the session?',
    options: ['delete TEMP_DATA', 'clear TEMP_DATA', 'unset TEMP_DATA', 'rm $TEMP_DATA'],
    correct: 2,
    explanation: '`unset` removes a variable or function from the current shell environment.',
  },
  {
    id: 'q-lpic1-102-1-010', lessonId: 'lpic1-102-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which Bash feature allows you to use `ll` instead of typing `ls -l`?',
    options: ['Function', 'Link', 'Alias', 'Redirect'],
    correct: 2,
    explanation: 'An alias provides a shorthand way to execute longer commands with specific flags.',
  },

  // ─── 105.2 Customize or write simple scripts (10 questions) ───
  {
    id: 'q-lpic1-102-1-011', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'In a bash script, which character sequence indicates the interpreter that should be used to run the script?',
    options: [
      '#!',
      '!!',
      '$$',
      '//'
    ],
    correct: 0,
    explanation: 'The shebang (#!) at the start of the first line defines the script interpreter.'
  },
  {
    id: 'q-lpic1-102-1-012', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which logical operator executes the second command only if the first command fails (returns a non-zero exit code)?',
    options: [
      '&&',
      '||',
      ';',
      '|&'
    ],
    correct: 1,
    explanation: 'The OR operator (||) is used for error handling/conditional execution on failure.'
  },
  {
    id: 'q-lpic1-102-1-013', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: "How do you correctly assign the output of the command 'whoami' to a variable named 'USER'?",
    options: [
      'USER = whoami',
      'USER=$(whoami)',
      'set USER whoami',
      'USER : whoami'
    ],
    correct: 1,
    explanation: '$(command) performs command substitution in modern shells.'
  },
  {
    id: 'q-lpic1-102-1-014', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which variable contains the number of arguments passed to a shell script?',
    options: [
      '$@',
      '$*',
      '$#',
      '$?'
    ],
    correct: 2,
    explanation: '$# holds the count of positional parameters.'
  },
  {
    id: 'q-lpic1-102-1-015', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'What is the exit code of a command that finished successfully?',
    options: [
      '0',
      '1',
      '255',
      '-1'
    ],
    correct: 0,
    explanation: 'In Unix/Linux, 0 means success; any non-zero value indicates an error.'
  },
  {
    id: 'q-lpic1-102-1-016', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'How do you check if a file named `data.txt` exists within a shell script?',
    options: [
      '[ -e data.txt ]',
      '[ -f data.txt ]',
      'if exists data.txt',
      'Both [ -e data.txt ] and [ -f data.txt ] are valid'
    ],
    correct: 3,
    explanation: '`-e` checks for existence; `-f` specifically checks if it is a regular file.',
  },
  {
    id: 'q-lpic1-102-1-017', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'What does the variable `$?` represent in shell scripting?',
    options: [
      'The PID of the current shell',
      'The exit status of the previously executed command',
      'The first argument of the script',
      'A random number generated by the shell'
    ],
    correct: 1,
    explanation: '$? captures the return code of the most recent foreground command.',
  },
  {
    id: 'q-lpic1-102-1-018', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which loop structure would you use to iterate through a list of filenames?',
    options: ['for', 'while', 'until', 'repeat'],
    correct: 0,
    explanation: 'The `for` loop is ideal for iterating over a defined list or set of items.',
  },
  {
    id: 'q-lpic1-102-1-019', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'In a script, how do you access the second argument passed to it?',
    options: ['$2', '${2}', 'Both $2 and ${2}', '$ARG2'],
    correct: 2,
    explanation: '$2 or ${2} refers to the second positional parameter.',
  },
  {
    id: 'q-lpic1-102-1-020', lessonId: 'lpic1-102-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'What is the correct syntax for a simple `if` condition in Bash?',
    options: [
      'if [ $val -gt 10 ] then ... fi',
      'if [ $val -gt 10 ]; then ... fi',
      'if (val > 10) { ... }',
      'if [ $val > 10 ] then ... fi'
    ],
    correct: 1,
    explanation: 'Bash `if` requires the `then` keyword, often on the same line following a semicolon, and must end with `fi`.',
  },
];
