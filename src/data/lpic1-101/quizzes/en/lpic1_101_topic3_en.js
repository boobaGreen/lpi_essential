// LPIC-1 101 Quiz — Topic 3: GNU and Unix Commands (English)

export const lpic1_101_topic3QuizzesEN = [
  // ─── 103.1 Command Line Basics (7 questions) ───
  {
    id: 'q-lpic1-101-3-001', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following commands determines whether a given name is a shell builtin, an alias, or an external command?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'The `type` command tells you exactly how the shell interprets a name (builtin, alias, file, or function).',
  },
  {
    id: 'q-lpic1-101-3-002', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which environment variable contains a colon-separated list of directories where the shell searches for executable commands?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'The $PATH variable defines the directories where the shell looks for executable files.',
  },
  {
    id: 'q-lpic1-101-3-003', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What command displays brief information about the system architecture, kernel version, and hostname?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname with the -a (all) flag prints all system information including kernel and hardware info.',
  },
  {
    id: 'q-lpic1-101-3-004', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you define a shell variable named `MYVAR` containing the text "Hello" so that it is available to child processes?',
    options: [
      'MYVAR="Hello"',
      'set MYVAR="Hello"',
      'export MYVAR="Hello"',
      'env MYVAR="Hello"'
    ],
    correct: 2,
    explanation: 'export creates an environment variable that will be inherited by all child processes.',
  },
  {
    id: 'q-lpic1-101-3-005', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'What is the main difference between single quotes (\') and double quotes (") in Bash?',
    options: [
      'Single quotes allow variable expansion ($VAR), double quotes do not',
      'Double quotes allow variable expansion ($VAR), single quotes prevent all expansions',
      'Double quotes are used for numbers, single quotes for strings',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'Double quotes allow variable expansion, while single quotes preserve the literal value of all characters.',
  },
  {
    id: 'q-lpic1-101-3-006', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which keyboard shortcut initiates a reverse search through the Bash command history?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R starts a reverse search, allowing you to recall previously executed commands.',
  },
  {
    id: 'q-lpic1-101-3-007', lessonId: 'lpic1-101-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What does the command `!55` accomplish in Bash?',
    options: [
      'It kills process with PID 55',
      'It executes command number 55 from the history list',
      'It deletes command number 55 from the history',
      'It runs the command "55"'
    ],
    correct: 1,
    explanation: 'The `!` symbol invokes history expansion. `!n` refers to command line n in the history list.',
  },

  // ─── 103.2 Text Filters (6 questions) ───
  {
    id: 'q-lpic1-101-3-008', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command outputs the LAST 10 lines of a file by default?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail prints the last lines of a file; 10 lines by default.',
  },
  {
    id: 'q-lpic1-101-3-009', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command reads a file and outputs it with line numbers prefixed?',
    options: ['nl', 'wc -l', 'cat -n', 'Both nl and cat -n'],
    correct: 3,
    explanation: 'Both `nl` (number lines) and `cat -n` will prefix output lines with numbers.',
  },
  {
    id: 'q-lpic1-101-3-010', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'The `wc` command counts what three default attributes of a file?',
    options: [
      'Lines, characters, bytes',
      'Sentences, words, characters',
      'Lines, words, bytes/characters',
      'Lines, words, paragraphs'
    ],
    correct: 2,
    explanation: 'wc (word count) outputs the number of lines, words, and bytes/characters.',
  },
  {
    id: 'q-lpic1-101-3-011', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'To remove consecutive duplicate lines from a sorted file, which command is used?',
    options: ['sort -u', 'uniq', 'Both sort -u and uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` removes consecutive duplicates. `sort -u` sorts and removes duplicates globally.',
  },
  {
    id: 'q-lpic1-101-3-012', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which command extracts the first field of the /etc/passwd file, assuming fields are separated by colons (":")?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut -d:` sets the delimiter to colon, and `-f1` selects the first field.',
  },
  {
    id: 'q-lpic1-101-3-013', lessonId: 'lpic1-101-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which sed command completely replaces the word "apple" with "orange" on every occurrence in file.txt?',
    options: ['sed "r/apple/orange/" file.txt', 'sed "s/apple/orange/g" file.txt', 'sed "s/apple/orange" file.txt', 'sed "sub/apple/orange/all" file.txt'],
    correct: 1,
    explanation: 'The substitute command `s/pattern/replacement/g` replaces all occurrences on each line.',
  },

  // ─── 103.3 File Management (6 questions) ───
  {
    id: 'q-lpic1-101-3-014', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates an empty file named "notes.txt" or updates its timestamp if it already exists?',
    options: ['create notes.txt', 'touch notes.txt', 'echo notes.txt', 'mkfile notes.txt'],
    correct: 1,
    explanation: 'touch changes file timestamps or creates an empty file if it doesn\'t exist.',
  },
  {
    id: 'q-lpic1-101-3-015', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates a directory named `project` and its parent `work` if it doesn\'t exist?',
    options: ['mkdir work/project', 'mkdir -p work/project', 'mkdir --all work/project', 'mkdir -r work/project'],
    correct: 1,
    explanation: 'mkdir -p (--parents) creates intermediate directories as required.',
  },
  {
    id: 'q-lpic1-101-3-016', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'You want to copy an entire directory `/docs` and its contents to `/backup`. What command do you use?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'The -r (recursive) flag tells `cp` to copy directories along with their contents.',
  },
  {
    id: 'q-lpic1-101-3-017', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'In Bash globbing, what does the wildcard `?` match?',
    options: ['Any number of characters', 'Exactly one character', 'Zero or one character', 'Numbers only'],
    correct: 1,
    explanation: 'In globbing, `?` matches exactly one character.',
  },
  {
    id: 'q-lpic1-101-3-018', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command searches for a file across the live filesystem in real time?',
    options: ['locate file', 'updatedb', 'grep file', 'find / -name file'],
    correct: 3,
    explanation: '`find` traverses the actual filesystem tree to locate files.',
  },
  {
    id: 'q-lpic1-101-3-019', lessonId: 'lpic1-101-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which command compresses the directory `/home/user` into a single gzipped tar archive?',
    options: [
      'tar -xzvf backup.tar.gz /home/user',
      'tar -czvf backup.tar.gz /home/user',
      'zip backup.tar.gz /home/user',
      'gzip /home/user > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` creates (-c) an archive compressed with gzip (-z).',
  },

  // ─── 103.4 Redirects and Pipes (4 questions) ───
  {
    id: 'q-lpic1-101-3-020', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'What does the `>>` redirection operator do?',
    options: [
      'Redirects stdout to a file, overwriting it',
      'Redirects stdin from a file',
      'Redirects stdout to a file, appending to it',
      'Redirects stderr to a file'
    ],
    correct: 2,
    explanation: '`>>` appends stdout to a file without deleting existing content.',
  },
  {
    id: 'q-lpic1-101-3-021', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you redirect standard error (stderr) to a file named `error.log`?',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: 'File descriptor 2 represents stderr; `2>` redirects it.',
  },
  {
    id: 'q-lpic1-101-3-022', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'What is the effect of appending `2>&1` to a command?',
    options: [
      'It redirects stdout to stderr',
      'It sends both stdout and stderr to the same location',
      'It silences all output',
      'It runs command 2 and then command 1'
    ],
    correct: 1,
    explanation: '`2>&1` redirects stderr to wherever stdout is currently pointing.',
  },
  {
    id: 'q-lpic1-101-3-023', lessonId: 'lpic1-101-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which tool reads from standard input and writes BOTH to stdout and to one or more files?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` splits the input, sending it to both output and a file.',
  },

  // ─── 103.5 Process Management (5 questions) ───
  {
    id: 'q-lpic1-101-3-024', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command provides a real-time, dynamic view of the running processes in the system?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` displays an interactive, updating list of system processes.',
  },
  {
    id: 'q-lpic1-101-3-025', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What is the default signal sent by the `kill` command if none is specified?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` sends SIGTERM (15) by default, asking for a graceful termination.',
  },
  {
    id: 'q-lpic1-101-3-026', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'If a process ignores a normal kill command, how can you force it to terminate immediately?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` sends SIGKILL, which cannot be ignored by the process.',
  },
  {
    id: 'q-lpic1-101-3-027', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which keyboard shortcut suspends the active foreground job in a terminal?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z suspends the foreground process, which can then be resumed or backgrounded.',
  },
  {
    id: 'q-lpic1-101-3-028', lessonId: 'lpic1-101-3-5', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'How do you run a command so it continues to execute even after you log out of the terminal?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` makes a command immune to the hangups (SIGHUP) signal.',
  },

  // ─── 103.6 Process Priorities (3 questions) ───
  {
    id: 'q-lpic1-101-3-029', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In Linux, what is the valid range of "nice" values?',
    options: ['From 0 to 100', 'From -20 to +19', 'From -19 to +20', 'From 1 to 99'],
    correct: 1,
    explanation: 'Nice values range from -20 (highest priority) to +19 (lowest priority).',
  },
  {
    id: 'q-lpic1-101-3-030', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which action can a normal (non-root) user perform regarding process priorities?',
    options: [
      'Decrease the nice value of their own processes',
      'Increase the nice value (decrease priority) of their own processes',
      'Change priority of any user\'s process',
      'Set nice value to -20'
    ],
    correct: 1,
    explanation: 'Normal users can only increase the nice value (lower priority) of their own processes.',
  },
  {
    id: 'q-lpic1-101-3-031', lessonId: 'lpic1-101-3-6', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command starts a new process with an adjusted scheduling priority?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice` starts a new process with modified priority; `renice` changes existing processes.',
  },

  // ─── 103.7 RegEx (2 questions) ───
  {
    id: 'q-lpic1-101-3-032', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In Regular Expressions, what does the `^` anchor represent?',
    options: ['The end of the line', 'Any group of characters', 'The start of the line', 'Negation'],
    correct: 2,
    explanation: 'The `^` character anchors the match to the beginning of the line.',
  },
  {
    id: 'q-lpic1-101-3-033', lessonId: 'lpic1-101-3-7', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In a regular expression, what does `.*` signify?',
    options: [
      'Zero or more literal dots',
      'A literal dot followed by a literal asterisk',
      'Zero or more of any characters',
      'Exactly one dot'
    ],
    correct: 2,
    explanation: 'The dot matches any character, and asterisk matches zero or more; together they match any string.',
  },

  // ─── 103.8 vi/vim (3 questions) ───
  {
    id: 'q-lpic1-101-3-034', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'When you open vi, which mode is active by default?',
    options: ['Insert mode', 'Visual mode', 'Normal (command) mode', 'Ex mode'],
    correct: 2,
    explanation: 'vi opens in Normal mode where keystrokes are interpreted as commands.',
  },
  {
    id: 'q-lpic1-101-3-035', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In vi Normal mode, what does the command `dd` do?',
    options: ['Deletes the current character', 'Deletes the current entire line', 'Duplicates the current line', 'Saves the document'],
    correct: 1,
    explanation: '`dd` deletes (cuts) the entire current line in vi.',
  },
  {
    id: 'q-lpic1-101-3-036', lessonId: 'lpic1-101-3-8', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'How do you force vi to quit without saving changes?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` forces the editor to quit without saving changes.',
  },
];

