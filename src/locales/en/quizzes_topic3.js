export const topic3Quizzes = [
  {
    "lessonId": "3-1",
    "question": "Which compression algorithm generally produces the smallest files?",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "compressed"
    ],
    "correct": 2,
    "explanation": "xz offers the best compression ratio, but is also the slowest."
  },
  {
    "lessonId": "3-1",
    "question": "Which command creates a gzipped tar archive?",
    "options": [
      "tar -czf archive.tar.gz dir/",
      "tar -xzf archive.tar.gz dir/",
      "gzip dir/",
      "zip -r archive.tar.gz dir/"
    ],
    "correct": 0,
    "explanation": "tar -czf: c=create, z=gzip, f=file."
  },
  {
    "lessonId": "3-1",
    "question": "What extension indicates a file compressed with bzip2?",
    "options": [
      ".gz",
      ".bz2",
      ".xz",
      ".zip"
    ],
    "correct": 1,
    "explanation": "bzip2 produces files with the .bz2 extension."
  },
  {
    "lessonId": "3-1",
    "question": "The -t flag in tar is used to:",
    "options": [
      "Create archive",
      "Extract archive",
      "List contents",
      "Test integrity"
    ],
    "correct": 2,
    "explanation": "tar -tf archive.tar.gz lists the contents without extracting."
  },
  {
    "lessonId": "3-1",
    "question": "tar -xjf extracts a compressed archive with:",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "lz4"
    ],
    "correct": 1,
    "explanation": "-j indicates bzip2. -z indicates gzip. -J indicates xz."
  },
  {
    "lessonId": "3-1",
    "question": "Which tar flag indicates xz compression?",
    "options": [
      "-z",
      "-j",
      "-J",
      "-x"
    ],
    "correct": 2,
    "explanation": "-J indicates xz. -z indicates gzip. -j indicates bzip2."
  },
  {
    "lessonId": "3-1",
    "question": "The \"gunzip\" command is equivalent to:",
    "options": [
      "gzip -d",
      "gzip -c",
      "gzip -r",
      "gzip -l"
    ],
    "correct": 0,
    "explanation": "gunzip and gzip -d unzip a .gz file."
  },
  {
    "lessonId": "3-1",
    "question": "gzip compresses a file and:",
    "options": [
      "Keeps the original",
      "Replaces the original with .gz",
      "Make a copy",
      "Moves it to /tmp"
    ],
    "correct": 1,
    "explanation": "gzip replaces the original file with the .gz version. Use -k to keep the original."
  },
  {
    "lessonId": "3-1",
    "question": "Which one is faster in compression?",
    "options": [
      "xz",
      "bzip2",
      "gzip",
      "lzma"
    ],
    "correct": 2,
    "explanation": "gzip is the fastest but compresses less. xz is the slowest but compresses the most."
  },
  {
    "lessonId": "3-1",
    "question": "tar without compression produces a file:",
    "options": [
      ".tar.gz",
      ".tar",
      ".gz",
      ".zip"
    ],
    "correct": 1,
    "explanation": "tar without compression flags (-z/-j/-J) creates a simple uncompressed .tar archive."
  },
  {
    "lessonId": "3-2",
    "question": "Which operator redirects stdout overwriting the file?",
    "options": [
      ">>",
      ">",
      "<",
      "|"
    ],
    "correct": 1,
    "explanation": "> redirects stdout to a file, overwriting it. >> hangs."
  },
  {
    "lessonId": "3-2",
    "question": "Which operator redirects stderr?",
    "options": [
      "1>",
      "2>",
      "0>",
      "3>"
    ],
    "correct": 1,
    "explanation": "2> redirects stderr (file descriptor 2)."
  },
  {
    "lessonId": "3-2",
    "question": "What does the pipe (|) do?",
    "options": [
      "Writes to a file",
      "Connects the stdout of one command to the stdin of the next",
      "Executes two commands in parallel",
      "Create a symbolic link"
    ],
    "correct": 1,
    "explanation": "The pipe (|) passes the output of one command as input to the next command."
  },
  {
    "lessonId": "3-2",
    "question": ">> unlike > does:",
    "options": [
      "Overwrites",
      "Appends to the file",
      "Reads from file",
      "Delete the file"
    ],
    "correct": 1,
    "explanation": ">> appends to the end of the file without overwriting existing content."
  },
  {
    "lessonId": "3-2",
    "question": "/dev/null is:",
    "options": [
      "A virtual disk",
      "A \"black hole\" that discards everything",
      "A log file",
      "A temporary directory"
    ],
    "correct": 1,
    "explanation": "/dev/null discards any data written. Useful for eliminating unwanted output."
  },
  {
    "lessonId": "3-2",
    "question": "< redirects:",
    "options": [
      "stdin from a file",
      "stdout to a file",
      "stderr to a file",
      "Nobody"
    ],
    "correct": 0,
    "explanation": "< redirect stdin: The command reads input from the specified file."
  },
  {
    "lessonId": "3-2",
    "question": "The \"tee\" command does:",
    "options": [
      "Reads from two files",
      "Writes stdout both to the screen and to a file",
      "Splits a file in two",
      "Merges two files"
    ],
    "correct": 1,
    "explanation": "tee is a \"T-splitter\": it displays the output on the screen and saves it to a file at the same time."
  },
  {
    "lessonId": "3-2",
    "question": "&> redirects:",
    "options": [
      "Stdout only",
      "Stderr only",
      "Both stdout and stderr",
      "The background"
    ],
    "correct": 2,
    "explanation": "&> redirects both stdout (1) and stderr (2) to the same file."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 && cmd2 runs cmd2 only if:",
    "options": [
      "cmd1 fails",
      "cmd1 succeeds (exit 0)",
      "Always",
      "Never"
    ],
    "correct": 1,
    "explanation": "&& executes the second command only if the first has exit code 0 (success)."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 || cmd2 runs cmd2 only if:",
    "options": [
      "cmd1 is successful",
      "cmd1 fails",
      "Always",
      "cmd1 does not exist"
    ],
    "correct": 1,
    "explanation": "|| executes the second command only if the first fails (exit code ≠ 0)."
  },
  {
    "lessonId": "3-2",
    "question": "xargs converts:",
    "options": [
      "Files in directories",
      "stdin in command line arguments",
      "Text in numbers",
      "Scripted commands"
    ],
    "correct": 1,
    "explanation": "xargs reads from stdin and constructs arguments for another command."
  },
  {
    "lessonId": "3-2",
    "question": "File descriptor 0 represents:",
    "options": [
      "stdout",
      "stderr",
      "stdin",
      "system files"
    ],
    "correct": 2,
    "explanation": "0 = stdin (keyboard), 1 = stdout (screen), 2 = stderr (errors)."
  },
  {
    "lessonId": "3-3",
    "question": "Which grep option performs a case-insensitive search?",
    "options": [
      "-r",
      "-the",
      "-v",
      "-c"
    ],
    "correct": 1,
    "explanation": "grep -i ignores case sensitivity."
  },
  {
    "lessonId": "3-3",
    "question": "In the regex, what does the wildcard \".\" mean? ?",
    "options": [
      "End of line",
      "A literal point",
      "Any single character",
      "Start of line"
    ],
    "correct": 2,
    "explanation": "The period (.) in regexes matches any single character."
  },
  {
    "lessonId": "3-3",
    "question": "grep -v shows:",
    "options": [
      "Only the first line",
      "The lines that do NOT match the pattern",
      "The number of occurrences",
      "Binary files"
    ],
    "correct": 1,
    "explanation": "-v (invert) show lines that do not match the pattern."
  },
  {
    "lessonId": "3-3",
    "question": "In the regex, ^ means:",
    "options": [
      "End of line",
      "Any character",
      "Start of line",
      "Denial"
    ],
    "correct": 2,
    "explanation": "^ (caret) indicates the beginning of the line in a regular expression."
  },
  {
    "lessonId": "3-3",
    "question": "$ in a regex means:",
    "options": [
      "Variable",
      "End of line",
      "Start of line",
      "Literal dollar"
    ],
    "correct": 1,
    "explanation": "$ indicates the end of the line in regular expressions."
  },
  {
    "lessonId": "3-3",
    "question": "cut -d: -f1 /etc/passwd extracts:",
    "options": [
      "The entire file",
      "The first field (username)",
      "The last line",
      "The first line"
    ],
    "correct": 1,
    "explanation": "-d: use : as delimiter, -f1 selects the first field."
  },
  {
    "lessonId": "3-3",
    "question": "The \"sort -n\" command sorts:",
    "options": [
      "Alphabetically",
      "Numerically",
      "By date",
      "Coincidentally"
    ],
    "correct": 1,
    "explanation": "-n sorts by numeric value, not alphabetical."
  },
  {
    "lessonId": "3-3",
    "question": "uniq works correctly only on:",
    "options": [
      "Large files",
      "Rows already sorted",
      "Binary files",
      "Any file"
    ],
    "correct": 1,
    "explanation": "uniq removes duplicates only if they are adjacent. Use sort before uniq."
  },
  {
    "lessonId": "3-3",
    "question": "wc -l counts:",
    "options": [
      "The words",
      "The characters",
      "The lines",
      "The files"
    ],
    "correct": 2,
    "explanation": "wc -l counts lines. -w counts words, -c counts bytes."
  },
  {
    "lessonId": "3-3",
    "question": "head -n 5 shows:",
    "options": [
      "The last 5 lines",
      "The first 5 lines",
      "5 random lines",
      "Every 5 lines"
    ],
    "correct": 1,
    "explanation": "head -n 5 show the first 5 lines of a file or input."
  },
  {
    "lessonId": "3-3",
    "question": "grep -r search:",
    "options": [
      "Only in the specified file",
      "Recursively in directories",
      "Only in .txt files",
      "In variables"
    ],
    "correct": 1,
    "explanation": "-r (recursive) searches for the pattern in all files within directories."
  },
  {
    "lessonId": "3-3",
    "question": "sed is an editor of:",
    "options": [
      "Binary files",
      "Text stream (non-interactive)",
      "Images",
      "Databases"
    ],
    "correct": 1,
    "explanation": "sed (Stream EDitor) edits text non-interactively."
  },
  {
    "lessonId": "3-4",
    "question": "Which line should be first in a Bash script?",
    "options": [
      "#!/bin/bash",
      "#/bin/bash",
      "//bin/bash",
      "!#/bin/bash"
    ],
    "correct": 0,
    "explanation": "#!/bin/bash is the shebang: it tells the system which interpreter to use."
  },
  {
    "lessonId": "3-4",
    "question": "How do you access the first argument passed to a script?",
    "options": [
      "$0",
      "$1",
      "$#",
      "$@"
    ],
    "correct": 1,
    "explanation": "$1 is the first argument. $0 is the name of the script. $# is the number of arguments."
  },
  {
    "lessonId": "3-4",
    "question": "$# contains:",
    "options": [
      "The name of the script",
      "All topics",
      "The number of topics",
      "The exit code"
    ],
    "correct": 2,
    "explanation": "$# contains the number of arguments passed to the script."
  },
  {
    "lessonId": "3-4",
    "question": "$0 in a script contains:",
    "options": [
      "The first topic",
      "The name of the script",
      "The user",
      "The PID"
    ],
    "correct": 1,
    "explanation": "$0 is the name under which the script was invoked."
  },
  {
    "lessonId": "3-4",
    "question": "exit 0 means:",
    "options": [
      "Mistake",
      "Success",
      "Reboot",
      "Forced termination"
    ],
    "correct": 1,
    "explanation": "exit 0 indicates successful exit. Values ​​other than 0 indicate error."
  },
  {
    "lessonId": "3-4",
    "question": "To make a script executable:",
    "options": [
      "mv script.sh /bin",
      "chmod +x script.sh",
      "run script.sh",
      "exec script.sh"
    ],
    "correct": 1,
    "explanation": "chmod +x adds execute permission to the script."
  },
  {
    "lessonId": "3-4",
    "question": "In an if bash, the syntax is:",
    "options": [
      "if (cond) {}",
      "if [ cond ]; then ... fi",
      "if cond: ... end",
      "if {cond} do ... done"
    ],
    "correct": 1,
    "explanation": "The correct syntax is: if [ condition ]; then ... fi"
  },
  {
    "lessonId": "3-4",
    "question": "The for loop in bash:",
    "options": [
      "for i in list; do ... done",
      "for (i in list) {}",
      "foreach i list end",
      "for i = list; end"
    ],
    "correct": 0,
    "explanation": "for variable in list; I give commands; done"
  },
  {
    "lessonId": "3-4",
    "question": "$@ represents:",
    "options": [
      "All arguments as separate strings",
      "The number of topics",
      "The PID",
      "The exit code"
    ],
    "correct": 0,
    "explanation": "$@ expands to all arguments passed, each as a separate string."
  },
  {
    "lessonId": "3-4",
    "question": "The [ -f file ] test checks whether:",
    "options": [
      "The file is a directory",
      "The file exists and is a regular file",
      "The file is empty",
      "The file is executable"
    ],
    "correct": 1,
    "explanation": "-f checks that the path exists and is a regular file (not directory/link)."
  },
  {
    "lessonId": "3-4",
    "question": "Which test checks if a directory exists?",
    "options": [
      "[ -f dir ]",
      "[ -d dir ]",
      "[ -e dir ]",
      "[ -r dir ]"
    ],
    "correct": 1,
    "explanation": "-d checks that the path exists and is a directory."
  },
  {
    "lessonId": "3-4",
    "question": "# in a bash script indicates:",
    "options": [
      "A root command",
      "A comment",
      "A directive",
      "An error"
    ],
    "correct": 1,
    "explanation": "# starts a comment — everything after that is ignored (except the shebang on the first line)."
  }
];
