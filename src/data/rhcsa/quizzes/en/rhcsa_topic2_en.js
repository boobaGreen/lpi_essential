// RHCSA Quiz — Topic 2: Shell Scripting (English)
// 15 MCQ questions

export const rhcsaTopic2QuizzesEN = [
  // ─── Lesson 2.1: Bash Variables and Syntax (5 questions) ───
  {
    id: 'q-rhcsa-2-1-001', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'How do you declare a variable in bash?',
    options: ['var $NAME = "value"', 'NAME="value"', '$NAME = "value"', 'set NAME="value"'],
    correct: 1,
    explanation: 'In bash, variables are declared without spaces: NAME="value". The $ is only used to read them.',
  },
  {
    id: 'q-rhcsa-2-1-002', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which special variable contains the PID of the current bash process?',
    options: ['$0', '$?', '$$', '$!'],
    correct: 2,
    explanation: '$$ contains the PID of the current process. $? = exit code, $0 = script name, $! = PID of the last background job.',
  },
  {
    id: 'q-rhcsa-2-1-003', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What does `export VARIABLE="value"` do?',
    options: [
      'Creates a local variable to the current script',
      'Makes the variable available to child processes',
      'Saves the variable in /etc/environment',
      'Deletes the variable after the script executes',
    ],
    correct: 1,
    explanation: 'export makes the variable an environment variable, passed down to child processes.',
  },
  {
    id: 'q-rhcsa-2-1-004', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which syntax captures the output of a command into a variable?',
    options: ['RESULT=`ls /etc`', 'RESULT=$(ls /etc)', 'Both A and B are correct', 'RESULT=<(ls /etc)'],
    correct: 2,
    explanation: 'Both the backtick `cmd` and $() capture output. $() is preferred because it is nestable and more readable.',
  },
  {
    id: 'q-rhcsa-2-1-005', lessonId: 'rhcsa-2-1', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'What does this script print?\n```bash\nNAME="world"\necho "Hello ${NAME}!"\n```',
    options: ['Hello ${NAME}!', 'Hello world!', 'Hello $NAME!', 'Error: variable undefined'],
    correct: 1,
    explanation: '${NAME} expands the variable NAME within double quotes. Output: "Hello world!"',
  },

  // ─── Lesson 2.2: Conditionals and Loops (6 questions) ───
  {
    id: 'q-rhcsa-2-2-001', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'Which bash test command checks if a file exists?',
    options: ['if [ exists "$FILE" ]', 'if [ -e "$FILE" ]', 'if [ -f "$FILE" ] exists', 'if test exists "$FILE"'],
    correct: 1,
    explanation: '-e tests if the file exists (any type). -f tests if it exists and is a regular file.',
  },
  {
    id: 'q-rhcsa-2-2-002', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What does this loop do?\n```bash\nfor i in 1 2 3; do echo $i; done\n```',
    options: [
      'Prints: 123 on one line',
      'Prints: 1, 2, 3 on separate lines',
      'Syntax error',
      'Runs echo once with the argument "1 2 3"',
    ],
    correct: 1,
    explanation: 'The for loop iterates over each element. echo $i prints each value on a separate line.',
  },
  {
    id: 'q-rhcsa-2-2-003', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which operator checks if two strings are equal in bash?',
    options: ['[ $A == $B ]', '[ $A -eq $B ]', '[ $A = $B ]', 'Both A and C are correct'],
    correct: 3,
    explanation: 'In bash both = and == work for comparing strings. -eq is for comparing integer numbers.',
  },
  {
    id: 'q-rhcsa-2-2-004', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'Which flag tests if a directory exists?',
    options: ['-e', '-f', '-d', '-r'],
    correct: 2,
    explanation: '-d tests if the path exists and is a directory. -f = regular file, -e = any type, -r = readable.',
  },
  {
    id: 'q-rhcsa-2-2-005', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'How do you write a while loop that counts from 1 to 5?',
    options: [
      'while i=1; do echo $i; i++; done',
      'i=1; while [ $i -le 5 ]; do echo $i; ((i++)); done',
      'while (i=1; i<=5; i++) do echo $i; done',
      'loop i from 1 to 5; echo $i; done',
    ],
    correct: 1,
    explanation: 'Bash while syntax: initialize the variable, condition [ $i -le 5 ], increment ((i++)).',
  },
  {
    id: 'q-rhcsa-2-2-006', lessonId: 'rhcsa-2-2', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'What does `[ -z "$VARIABLE" ]` check?',
    options: [
      'If the variable is zero (0)',
      'If the variable is an empty string',
      'If the variable is a number',
      'If the variable exists',
    ],
    correct: 1,
    explanation: '-z tests if the string has zero length (is empty). -n tests if it is not empty.',
  },

  // ─── Lesson 2.3: Parameters and Output (4 questions) ───
  {
    id: 'q-rhcsa-2-3-001', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'easy', type: 'mcq',
    question: 'In a bash script, what does `$1` contain?',
    options: [
      'The PID of the script',
      'The first argument passed to the script',
      'The name of the script',
      'The total number of arguments',
    ],
    correct: 1,
    explanation: '$1 is the first positional argument. $0 = script name, $# = number of arguments, $@ = all arguments.',
  },
  {
    id: 'q-rhcsa-2-3-002', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'Which special variable contains the exit code of the last command?',
    options: ['$$', '$#', '$?', '$0'],
    correct: 2,
    explanation: '$? contains the exit code of the last command. 0 = success, non-zero = error.',
  },
  {
    id: 'q-rhcsa-2-3-003', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'medium', type: 'mcq',
    question: 'What is the difference between `$@` and `$*`?',
    options: [
      'No difference, they are identical',
      '$@ preserves the arguments as separate words, $* joins them into a single string',
      '$* preserves the arguments, $@ joins them',
      '$@ contains only numeric arguments',
    ],
    correct: 1,
    explanation: 'With double quotes: "$@" → each argument is separate, "$*" → all joined into one string. Important in loops.',
  },
  {
    id: 'q-rhcsa-2-3-004', lessonId: 'rhcsa-2-3', topicId: 2, difficulty: 'hard', type: 'mcq',
    question: 'How do you make a script exit with an error (exit code 1) if it receives no arguments?',
    options: [
      'if [ $# -eq 0 ]; then echo "Error"; fi',
      'if [ $# -eq 0 ]; then echo "Error" >&2; exit 1; fi',
      'if [ $1 = "" ]; then exit; fi',
      'require $1 || exit',
    ],
    correct: 1,
    explanation: 'Best practice: print the message on stderr (>&2), then exit 1. This way the caller can detect the error with $?.',
  },
]
