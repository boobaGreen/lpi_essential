// LPIC-1 102 Quiz Pool — English — Topic 105 (Shells)

export const lpic1_102_topic1Quizzes_en = [
  {
    topicId: 1,
    question: "Which file is executed when a user closes a Bash login shell?",
    options: [
      "~/.bashrc",
      "~/.bash_logout",
      "/etc/bash_exit",
      "~/.profile"
    ],
    correct: 1,
    explanation: "~/.bash_logout is specifically designed for cleanup tasks when a login shell exits."
  },
  {
    topicId: 1,
    question: "Which directory contains default configuration files that are copied to a new user's home directory upon account creation?",
    options: [
      "/etc/defaults",
      "/etc/skel",
      "/usr/share/templates",
      "/etc/profile.d"
    ],
    correct: 1,
    explanation: "The /etc/skel (skeleton) directory stores default hidden files for new users."
  },
  {
    topicId: 1,
    question: "What is the correct way to make a variable 'MYVAR' accessible to child processes of the current shell?",
    options: [
      "set MYVAR",
      "export MYVAR",
      "env MYVAR",
      "chmod +x MYVAR"
    ],
    correct: 1,
    explanation: "The 'export' command promotes a shell variable to an environment variable."
  },
  {
    topicId: 1,
    question: "In a bash script, which character sequence indicates the interpreter that should be used to run the script?",
    options: [
      "#!",
      "!!",
      "$$",
      "//"
    ],
    correct: 0,
    explanation: "The shebang (#!) at the start of the first line defines the script interpreter."
  },
  {
    topicId: 1,
    question: "Which logical operator executes the second command only if the first command fails (returns a non-zero exit code)?",
    options: [
      "&&",
      "||",
      ";",
      "|&"
    ],
    correct: 1,
    explanation: "The OR operator (||) is used for error handling/conditional execution on failure."
  },
  {
    topicId: 1,
    question: "How do you correctly assign the output of the command 'whoami' to a variable named 'USER'?",
    options: [
      "USER = whoami",
      "USER=$(whoami)",
      "set USER whoami",
      "USER : whoami"
    ],
    correct: 1,
    explanation: "$(command) performs command substitution in modern shells."
  },
  {
    topicId: 1,
    question: "Which variable contains the number of arguments passed to a shell script?",
    options: [
      "$@",
      "$*",
      "$#",
      "$?"
    ],
    correct: 2,
    explanation: "$# holds the count of positional parameters."
  },
  {
    topicId: 1,
    question: "What is the exit code of a command that finished successfully?",
    options: [
      "0",
      "1",
      "255",
      "-1"
    ],
    correct: 0,
    explanation: "In Unix/Linux, 0 means success; any non-zero value indicates an error."
  }
];
