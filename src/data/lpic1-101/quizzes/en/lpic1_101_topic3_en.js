// LPIC-1 101 Quiz — Topic 3: GNU and Unix Commands (English)
// ~75 MCQ questions for Topic 103

export const lpic1_101_topic3QuizzesEN = [
  // ─── 103.1 Command Line Basics (10 questions) ───
  {
    id: 'q-lpic1-103-1-001', lessonId: 'lpic1-103-1-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following commands determines whether a given name is a shell builtin, an alias, or an external command?',
    options: ['find', 'which', 'type', 'locate'],
    correct: 2,
    explanation: 'The `type` command tells you exactly how the shell interprets a name (builtin, alias, file, or function). `which` only searches for executable files in $PATH.',
  },
  {
    id: 'q-lpic1-103-1-002', lessonId: 'lpic1-103-1-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which environment variable contains a colon-separated list of directories where the shell searches for executable commands?',
    options: ['EXEC_DIR', 'PATH', 'COMMAND_DIR', 'BASH_ENV'],
    correct: 1,
    explanation: 'The $PATH variable defines the directories where the shell looks for executable files when a command is entered without an absolute path.',
  },
  {
    id: 'q-lpic1-103-1-003', lessonId: 'lpic1-103-1-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What command displays brief information about the system architecture, kernel version, and hostname?',
    options: ['arch', 'sysinfo', 'lsb_release', 'uname -a'],
    correct: 3,
    explanation: 'uname (Unix name) with the -a (all) flag prints all system information: kernel name, nodename, kernel release, version, machine hardware, etc.',
  },
  {
    id: 'q-lpic1-103-1-004', lessonId: 'lpic1-103-1-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you define a shell variable named `MYVAR` containing the text "Hello" so that it is available to child processes?',
    options: [
      'MYVAR="Hello"',
      'set MYVAR="Hello"',
      'export MYVAR="Hello"',
      'env MYVAR="Hello"'
    ],
    correct: 2,
    explanation: 'export creates (or modifies) an environment variable that will be inherited by all child processes created by the current shell.',
  },
  {
    id: 'q-lpic1-103-1-005', lessonId: 'lpic1-103-1-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'What is the main difference between single quotes (\') and double quotes (") in Bash?',
    options: [
      'Single quotes allow variable expansion ($VAR), double quotes do not',
      'Double quotes allow variable expansion ($VAR), single quotes prevent all expansions',
      'Double quotes are used for numbers, single quotes for strings',
      'There is no difference'
    ],
    correct: 1,
    explanation: 'Double quotes ("") preserve the literal value of characters except $, \\, and ` (meaning variables expand). Single quotes (\'\') preserve the literal value of ALL characters.',
  },
  {
    id: 'q-lpic1-103-1-006', lessonId: 'lpic1-103-1-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which keyboard shortcut initiates a reverse search through the Bash command history?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+R', 'Ctrl+Z'],
    correct: 2,
    explanation: 'Ctrl+R starts a reverse-i-search, allowing you to type part of a previously executed command to recall it.',
  },
  {
    id: 'q-lpic1-103-1-007', lessonId: 'lpic1-103-1-2', topicId: 3, difficulty: 'medium', type: 'mcq',
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

  // ─── 103.2 Text Filters (10 questions) ───
  {
    id: 'q-lpic1-103-2-001', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command outputs the LAST 10 lines of a file by default?',
    options: ['head', 'cat', 'tail', 'end'],
    correct: 2,
    explanation: 'tail prints the last 10 lines of a file. It is commonly used with -f to follow growing log files.',
  },
  {
    id: 'q-lpic1-103-2-002', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command reads a file and outputs it with line numbers prefixed?',
    options: ['nl', 'wc -l', 'cat -n', 'Both nl and cat -n'],
    correct: 3,
    explanation: 'Both `nl` (number lines) and `cat -n` (number all output lines) will prefix the output lines with numbers.',
  },
  {
    id: 'q-lpic1-103-2-003', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'The `wc` command counts what three default attributes of a file?',
    options: [
      'Lines, characters, bytes',
      'Sentences, words, characters',
      'Lines, words, bytes/characters',
      'Lines, words, paragraphs'
    ],
    correct: 2,
    explanation: 'wc (word count) outputs the number of lines, words, and bytes (or characters) in the given files.',
  },
  {
    id: 'q-lpic1-103-2-004', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'To remove consecutive duplicate lines from a sorted file, which command is used?',
    options: ['sort -u', 'uniq', 'Both sort -u and uniq', 'rmdup'],
    correct: 2,
    explanation: '`uniq` removes consecutive duplicates. `sort -u` sorts the file and removes duplicates globally in one step.',
  },
  {
    id: 'q-lpic1-103-2-005', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which command extracts the first field of the /etc/passwd file, assuming fields are separated by colons (":")?',
    options: [
      'awk {print $1} /etc/passwd',
      'cut -c 1 /etc/passwd',
      'cut -d: -f1 /etc/passwd',
      'grep -f1 /etc/passwd'
    ],
    correct: 2,
    explanation: '`cut` extracts sections from each line. `-d:` sets the delimiter to colon, and `-f1` selects the first field.',
  },
  {
    id: 'q-lpic1-103-2-006', lessonId: 'lpic1-103-2-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which sed command completely replaces the word "apple" with "orange" on every occurrence in file.txt?',
    options: ['sed "r/apple/orange/" file.txt', 'sed "s/apple/orange/g" file.txt', 'sed "s/apple/orange" file.txt', 'sed "sub/apple/orange/all" file.txt'],
    correct: 1,
    explanation: 'The substitute command in sed is `s/pattern/replacement/`. The `g` flag stands for global, affecting all occurrences on a line.',
  },

  // ─── 103.3 File Management (10 questions) ───
  {
    id: 'q-lpic1-103-3-001', lessonId: 'lpic1-103-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates an empty file named "notes.txt" or updates its timestamp if it already exists?',
    options: ['create notes.txt', 'touch notes.txt', 'echo notes.txt', 'mkfile notes.txt'],
    correct: 1,
    explanation: 'touch changes file timestamps. If the file does not exist, it is created empty.',
  },
  {
    id: 'q-lpic1-103-3-002', lessonId: 'lpic1-103-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates a directory named `project` and simultaneously creates its parent directory `work` if it doesn\'t exist?',
    options: ['mkdir work/project', 'mkdir -p work/project', 'mkdir --all work/project', 'mkdir -r work/project'],
    correct: 1,
    explanation: 'mkdir -p (--parents) creates intermediate directories as required and does not error if they already exist.',
  },
  {
    id: 'q-lpic1-103-3-003', lessonId: 'lpic1-103-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'You want to copy an entire directory `/docs` and its contents to `/backup`. What command do you use?',
    options: ['cp /docs /backup', 'copy /docs /backup', 'cp -r /docs /backup', 'cp -a /docs'],
    correct: 2,
    explanation: 'The -r (or -R) flag tells `cp` to copy directories recursively along with their contents.',
  },
  {
    id: 'q-lpic1-103-3-004', lessonId: 'lpic1-103-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'In Bash globbing, what does the wildcard `?` match?',
    options: ['Any number of characters', 'Exactly one character', 'Zero or one character', 'Numbers only'],
    correct: 1,
    explanation: 'In filename expansion (globbing), `?` matches any single character, while `*` matches any string (including empty).',
  },
  {
    id: 'q-lpic1-103-3-005', lessonId: 'lpic1-103-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which command searches for a file across the live filesystem in real time?',
    options: ['locate file', 'updatedb', 'grep file', 'find / -name file'],
    correct: 3,
    explanation: '`find` traverses the actual filesystem tree. `locate` searches a pre-built static database, and `updatedb` builds that database.',
  },
  {
    id: 'q-lpic1-103-3-006', lessonId: 'lpic1-103-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which command compresses the directory `/home/user` into a single archive file named `backup.tar.gz`?',
    options: [
      'tar -xzvf backup.tar.gz /home/user',
      'tar -czvf backup.tar.gz /home/user',
      'zip backup.tar.gz /home/user',
      'gzip /home/user > backup.tar.gz'
    ],
    correct: 1,
    explanation: '`tar -czvf` creates (-c) an archive compressed with gzip (-z) showing verbose output (-v) to the specified file (-f).',
  },

  // ─── 103.4 Redirects and Pipes (8 questions) ───
  {
    id: 'q-lpic1-103-4-001', lessonId: 'lpic1-103-4-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'What does the `>>` redirection operator do?',
    options: [
      'Redirects standard output to a file, overwriting the file',
      'Redirects standard input from a file',
      'Redirects standard output to a file, appending to it',
      'Redirects standard error to a file'
    ],
    correct: 2,
    explanation: '`>>` appends stdout to a file without deleting the existing content. `>` overwrites the file.',
  },
  {
    id: 'q-lpic1-103-4-002', lessonId: 'lpic1-103-4-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'How do you redirect standard error (stderr) to a file named `error.log`?',
    options: ['> error.log', '2> error.log', '&> error.log', '1> error.log'],
    correct: 1,
    explanation: 'File descriptor 2 represents stderr. `2> file` redirects only error messages to the file.',
  },
  {
    id: 'q-lpic1-103-4-003', lessonId: 'lpic1-103-4-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'What is the effect of appending `2>&1` to a command?',
    options: [
      'It redirects stdout to stderr',
      'It sends both stdout and stderr to the same location (redirects stderr to where stdout currently goes)',
      'It silences all output',
      'It runs command 2 and then command 1'
    ],
    correct: 1,
    explanation: '`2>&1` means "redirect file descriptor 2 (stderr) to the same place as file descriptor 1 (stdout) is currently pointing".',
  },
  {
    id: 'q-lpic1-103-4-004', lessonId: 'lpic1-103-4-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Which tool reads from standard input and writes BOTH to standard output and to one or more files?',
    options: ['pipe', 'cat', 'tee', 'xargs'],
    correct: 2,
    explanation: '`tee` splits the standard input, allowing you to save it to a file while simultaneously seeing it on the screen (or passing it down the pipe).',
  },

  // ─── 103.5 Process Management (10 questions) ───
  {
    id: 'q-lpic1-103-5-001', lessonId: 'lpic1-103-5-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command provides a real-time, dynamic view of the running processes in the system?',
    options: ['ps', 'jobs', 'top', 'w'],
    correct: 2,
    explanation: '`top` (or htop) displays an interactive, periodically updating list of system processes and resource usage.',
  },
  {
    id: 'q-lpic1-103-5-002', lessonId: 'lpic1-103-5-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'What is the default signal sent by the `kill` command if none is specified?',
    options: ['SIGKILL (9)', 'SIGTERM (15)', 'SIGINT (2)', 'SIGHUP (1)'],
    correct: 1,
    explanation: '`kill` sends SIGTERM (15) by default, asking the process to terminate gracefully. SIGKILL (9) is a forced kill.',
  },
  {
    id: 'q-lpic1-103-5-003', lessonId: 'lpic1-103-5-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'If a process ignores a normal kill command, how can you force it to terminate immediately without giving it an opportunity to save its state?',
    options: ['kill -1 PID', 'kill -9 PID', 'kill -15 PID', 'pkill PID'],
    correct: 1,
    explanation: '`kill -9` sends SIGKILL. This signal is handled by the kernel directly and the process cannot intercept, ignore, or handle it.',
  },
  {
    id: 'q-lpic1-103-5-004', lessonId: 'lpic1-103-5-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'You start a long-running script and then realize you want to continue using the terminal. What keyboard shortcut suspends the active job?',
    options: ['Ctrl+C', 'Ctrl+D', 'Ctrl+Z', 'Alt+F4'],
    correct: 2,
    explanation: 'Ctrl+Z sends SIGTSTP, suspending the foreground process. You can then resume it in the background using the `bg` command.',
  },
  {
    id: 'q-lpic1-103-5-005', lessonId: 'lpic1-103-5-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'How do you run a command so it continues to execute even after you log out of the terminal?',
    options: ['command &', 'bg command', 'nohup command &', 'service command start'],
    correct: 2,
    explanation: '`nohup` (no hangup) makes a command immune to SIGHUP. When combined with `&`, it runs in the background and survives terminal disconnection.',
  },

  // ─── 103.6 Process Priorities (6 questions) ───
  {
    id: 'q-lpic1-103-6-001', lessonId: 'lpic1-103-6-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In Linux, what is the valid range of "nice" values?',
    options: ['From 0 to 100', 'From -20 to +19', 'From -19 to +20', 'From 1 to 99'],
    correct: 1,
    explanation: 'Nice values range from -20 (highest priority/least nice) to +19 (lowest priority/nicest).',
  },
  {
    id: 'q-lpic1-103-6-002', lessonId: 'lpic1-103-6-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Which of the following actions can a normal (non-root) user perform regarding process priorities?',
    options: [
      'Decrease the nice value (increase priority) of their own processes',
      'Increase the nice value (decrease priority) of their own processes',
      'Change priority of any users process',
      'Set nice value to -20'
    ],
    correct: 1,
    explanation: 'A normal user can only be "nicer" — they can increase the nice value (lowering priority) of their own processes. Decreasing the nice value requires root privileges.',
  },
  {
    id: 'q-lpic1-103-6-003', lessonId: 'lpic1-103-6-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Which command starts a new process with an adjusted priority?',
    options: ['renice', 'nice', 'top', 'priority'],
    correct: 1,
    explanation: '`nice <command>` starts a new program with a modified scheduling priority. `renice <PID>` alters the priority of an already running process.',
  },

  // ─── 103.7 RegEx (6 questions) ───
  {
    id: 'q-lpic1-103-7-001', lessonId: 'lpic1-103-7-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In Basic Regular Expressions, what does the `^` anchor represent?',
    options: ['The end of the line', 'Any group of characters', 'The start of the line', 'The negation of a character class'],
    correct: 2,
    explanation: '`^` matches the beginning of a line. `$` matches the end of a line.',
  },
  {
    id: 'q-lpic1-103-7-002', lessonId: 'lpic1-103-7-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In a regular expression, what does `.*` signify?',
    options: [
      'Zero or more literal dots',
      'A literal dot followed by a literal asterisk',
      'Zero or more of any characters',
      'Exactly one dot'
    ],
    correct: 2,
    explanation: 'The dot `.` matches any single character. The asterisk `*` matches zero or more occurrences of the PRECEDING element. Together, `.*` means "any string of characters".',
  },

  // ─── 103.8 vi/vim (5 questions) ───
  {
    id: 'q-lpic1-103-8-001', lessonId: 'lpic1-103-8-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'When you open vi, which mode is active by default?',
    options: ['Insert mode', 'Visual mode', 'Normal (command) mode', 'Ex mode'],
    correct: 2,
    explanation: 'vi always opens in Normal mode, where keystrokes are interpreted as commands (like moving, deleting, or copying text) rather than text input.',
  },
  {
    id: 'q-lpic1-103-8-002', lessonId: 'lpic1-103-8-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'In vi Normal mode, what does the command `dd` do?',
    options: ['Deletes the current character', 'Deletes the current entire line', 'Duplicates the current line', 'Saves the document'],
    correct: 1,
    explanation: '`dd` deletes (cuts) the entire current line. `yy` copies (yanks) the line, and `p` pastes it.',
  },
  {
    id: 'q-lpic1-103-8-003', lessonId: 'lpic1-103-8-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'How do you force vi to quit without saving changes?',
    options: [':wq!', ':x', ':q!', ':quit'],
    correct: 2,
    explanation: '`:q!` forces the editor to quit discarding any unwritten changes. `:wq` or `:x` saves and quits.',
  },
]
