export const topic3Extended = {
  "3-1": {
    "title": "Archiving and Compression",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗜️",
        "text": "Compression vs Storage"
      },
      {
        "type": "paragraph",
        "text": "Archiving and compression are two distinct operations often used together. Archiving means grouping multiple files into one. Compressing means reducing the size of the data. tar archive, gzip/bzip2/xz compress."
      },
      {
        "type": "comparison",
        "left": {
          "title": "📦 Storage (tar)",
          "items": [
            "Group multiple files/directories into one",
            "DOES NOT compress (size ≈ equal)",
            "Preserve permissions, timestamps, structure",
            "Produces .tar files"
          ]
        },
        "right": {
          "title": "🗜️ Compression (gzip, bzip2, xz)",
          "items": [
            "Reduces the size of ONE file",
            "Mathematical algorithms to eliminate redundancy",
            "The more you compress, the slower it is",
            "Produces .gz, .bz2, .xz"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Comparison of algorithms"
      },
      {
        "type": "table",
        "headers": [
          "Algorithm",
          "Extension",
          "Speed",
          "Compression",
          "Command",
          "Decompression"
        ],
        "rows": [
          [
            "gzip",
            ".gz",
            "⚡ Quick",
            "⭐⭐⭐",
            "gzip files",
            "gunzip file.gz"
          ],
          [
            "bzip2",
            ".bz2",
            "🐌 Medium",
            "⭐⭐⭐⭐",
            "bzip2 files",
            "bunzip2 file.bz2"
          ],
          [
            "xz",
            ".xz",
            "🐢 Slow",
            "⭐⭐⭐⭐⭐",
            "xz files",
            "unxz file.xz"
          ],
          [
            "zip",
            ".zip",
            "⚡ Quick",
            "⭐⭐⭐",
            "zip arch.zip file",
            "unzip arch.zip"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "When to use which?",
        "content": "gzip for everyday use (fast and good). xz to distribute software (maximum compression). bzip2 is falling out of use in favor of xz."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Tar Flags — The Recipe"
      },
      {
        "type": "table",
        "headers": [
          "Flags",
          "Meaning",
          "Mnemonic"
        ],
        "rows": [
          [
            "-c",
            "Create (create archive)",
            "C = Create"
          ],
          [
            "-x",
            "Extract",
            "X = eXtract"
          ],
          [
            "-t",
            "List (show contents)",
            "T = listT"
          ],
          [
            "-f",
            "File (specify name)",
            "F = File (always last!)"
          ],
          [
            "-z",
            "gzip",
            "Z is for Zip"
          ],
          [
            "-j",
            "bzip2",
            "J is for bJip2"
          ],
          [
            "-J",
            "xz",
            "Capital J = XZ (more powerful)"
          ],
          [
            "-v",
            "Verbose (show progress)",
            "V = Verbose"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Practical examples with tar",
        "prompt": "# Create gzip compressed archive\n$ tar -czf backup.tar.gz /home/user/docs/\n\n# Extract archive\n$ tar -xzf backup.tar.gz\n\n# Extract to a specific directory\n$ tar -xzf backup.tar.gz -C /tmp/\n\n# List contents without extracting\n$ tar -tzf backup.tar.gz\n\n# Create with xz (maximum compression)\n$ tar -cJf archive.tar.xz directory/",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks for the tar flags for create (-czf) and extract (-xzf) and to know the difference between -z (gzip), -j (bzip2), and -J (xz). Remember: gzip is the most used by default."
      }
    ]
  },
  "3-2": {
    "title": "I/O and Pipe Redirection",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "0️⃣",
        "text": "The Three Standard File Descriptors"
      },
      {
        "type": "paragraph",
        "text": "Every Linux process has three I/O channels open by default. Understanding these channels is critical for redirection and pipes."
      },
      {
        "type": "diagram",
        "title": "Standard I/O flow",
        "boxes": [
          {
            "label": "stdin (0)",
            "color": "#10b981",
            "children": [
              "Tastiera (default)",
              "File (<)",
              "Pipe output"
            ]
          },
          {
            "label": "stdout (1)",
            "color": "#3b82f6",
            "children": [
              "Schermo (default)",
              "File (>)",
              "Pipe input"
            ]
          },
          {
            "label": "stderr (2)",
            "color": "#ef4444",
            "children": [
              "Schermo (default)",
              "File (2>)",
              "/dev/null"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "➡️",
        "text": "Redirection Operators"
      },
      {
        "type": "table",
        "headers": [
          "Operator",
          "Function",
          "Example"
        ],
        "rows": [
          [
            "> files",
            "stdout → file (overwrite)",
            "ls > list.txt"
          ],
          [
            ">> files",
            "stdout → file (append)",
            "echo \"new line\" >> log.txt"
          ],
          [
            "< file",
            "file → stdin",
            "sort < numbers.txt"
          ],
          [
            "2> files",
            "stderr → file",
            "find / -name \"x\" 2> errors.txt"
          ],
          [
            "2>&1",
            "stderr → same output as stdout",
            "cmd > all.log 2>&1"
          ],
          [
            "&> files",
            "stdout + stderr → file",
            "cmd &> output.log"
          ],
          [
            "/dev/null",
            "“Black hole” — discard everything",
            "cmd 2>/dev/null"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Common redirection scenarios",
        "prompt": "# Save command output\n$ ls -la /etc > list_etc.txt\n\n# Ignore errors\n$ find / -name \"config\" 2>/dev/null\n\n# Save all (stdout + stderr)\n$ apt update &> update.log\n\n# Hang on a log\n$ echo \"$(date): backup completed\" >> /var/log/backup.log",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Pipe — The Power of Composition"
      },
      {
        "type": "paragraph",
        "text": "The pipe (|) is the most powerful concept of the Unix command line. It connects the stdout of one command to the stdin of the next, allowing you to build complex pipelines from simple commands."
      },
      {
        "type": "code",
        "title": "Pipeline: from simple to complex",
        "prompt": "# Count how many files are in /etc\n$ls /etc | wc -l\n\n# Find the 5 processes that use the most RAM\n$ps aux | sort -k4 -rn | head -5\n\n# Count how many times \"error\" appears in the logs\n$ cat /var/log/syslog | grep -i error | wc -l\n\n# Extract unique usernames who logged in\n$last | awk '{print $1}' | sort | uniq -c | sort -rn",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Logical Operators between Commands"
      },
      {
        "type": "table",
        "headers": [
          "Operator",
          "Meaning",
          "Example"
        ],
        "rows": [
          [
            "cmd1 && cmd2",
            "Run cmd2 ONLY if cmd1 is successful (exit 0)",
            "mkdir dir && cd dir"
          ],
          [
            "cmd1 || cmd2",
            "Run cmd2 ONLY if cmd1 fails (exit ≠ 0)",
            "ping host || echo \"Offline\""
          ],
          [
            "cmd1 ; cmd2",
            "Run cmd2 ALWAYS, regardless",
            "date ; whoami"
          ],
          [
            "cmd &",
            "Run cmd in the background",
            "sleep 100 &"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Scenario: Automating a Backup",
        "text": "You are a sysadmin and need to do a daily backup. With the pipeline: tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo \"Backup OK\" >> /var/log/backup.log || echo \"Backup ERROR\" >> /var/log/backup.log — Create archive, save result to log. If it fails, log the error."
      }
    ]
  },
  "3-3": {
    "title": "Grep and Regular Expressions",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔎",
        "text": "grep — The Swiss Army Knife of Text"
      },
      {
        "type": "table",
        "headers": [
          "Option",
          "Function",
          "Example"
        ],
        "rows": [
          [
            "-the",
            "Case insensitive",
            "grep -i \"error\" log.txt"
          ],
          [
            "-v",
            "Reverse match (rows that do NOT match)",
            "grep -v \"^#\" config.txt"
          ],
          [
            "-r / -R",
            "Search directories recursively",
            "grep -r \"TODO\" src/"
          ],
          [
            "-n",
            "Show line number",
            "grep -n \"main\" program.c"
          ],
          [
            "-c",
            "Count the rows found",
            "grep -c \"error\" syslog"
          ],
          [
            "-the",
            "Show only file names",
            "grep -rl \"password\" /etc/"
          ],
          [
            "-w",
            "Match whole words only",
            "grep -w \"is\" file (not \"this\")"
          ],
          [
            "-AND",
            "Extended regex (egrep)",
            "grep -E \"err|warn\" log"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌟",
        "text": "Regex metacharacters"
      },
      {
        "type": "table",
        "headers": [
          "Metacharacter",
          "Meaning",
          "Example",
          "Match"
        ],
        "rows": [
          [
            ".",
            "Any single character",
            "c.t",
            "cat, cut, cot"
          ],
          [
            "^",
            "Start of line",
            "^Error",
            "Error at the beginning of the line"
          ],
          [
            "$",
            "End of line",
            "end$",
            "the end"
          ],
          [
            "*",
            "Zero or more than the previous one",
            "ab*c",
            "ac, abc, abc"
          ],
          [
            "[ ]",
            "One of the characters in the set",
            "[aeiou]",
            "Single vowel"
          ],
          [
            "[^ ]",
            "Any except the characters in the set",
            "[^0-9]",
            "Not a number"
          ],
          [
            "\\",
            "Wildcard escape",
            "\\.",
            "A literal point"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Practical examples with regex",
        "prompt": "# Lines starting with # (comments)\n$ grep \"^#\" /etc/ssh/sshd_config\n\n# Empty lines\n$ grep \"^$\" file.txt\n\n# IP addresses (simple pattern)\n$ grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" access.log\n\n# NOT empty lines and NOT comments\n$ grep -v \"^#\" config | grep -v \"^$\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "✂️",
        "text": "Text Manipulation: the Power Toolkit"
      },
      {
        "type": "table",
        "headers": [
          "Command",
          "Function",
          "Key example"
        ],
        "rows": [
          [
            "cut",
            "Extract columns/fields",
            "cut -d: -f1 /etc/passwd"
          ],
          [
            "sort",
            "Sort the rows",
            "sort -n (numeric) -r (reverse)"
          ],
          [
            "uniq",
            "Remove adjacent duplicates",
            "sort file | uniq -c"
          ],
          [
            "toilet",
            "Count lines, words, bytes",
            "wc -l (lines) -w (words)"
          ],
          [
            "head",
            "First N lines",
            "head -n 20 files"
          ],
          [
            "tail",
            "Last N lines",
            "tail -f syslog (follow)"
          ],
          [
            "tr",
            "Translates characters",
            "tr 'a-z' 'A-Z' (uppercase)"
          ],
          [
            "sed",
            "Stream editor",
            "sed 's/old/new/g' file"
          ],
          [
            "awk",
            "Process columns",
            "awk '{print $1, $3}' file"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam tests grep with -i, -v, -r and the basic regexes (^, $, ., *). You also know cut, sort, wc and the difference between head and tail."
      }
    ]
  },
  "3-4": {
    "title": "Bash scripts",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Anatomy of a Bash Script"
      },
      {
        "type": "code",
        "title": "Basic structure of a script",
        "prompt": "#!/bin/bash\n# This is a comment\n# The shebang (first line) tells the system which interpreter to use\n\n# Variables\nNAME=\"LinuxQuest\"\nVERSION=2.0\n\n# Print\necho \"Welcome to $NAME v$VERSION!\"\necho \"User: $(whoami), Date: $(date +%F)\"\n\n# Exit code: 0 = success\nexit 0",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Don't forget chmod +x!",
        "content": "A script is not executable by default. You need to add execute permission: chmod +x script.sh. Then run it with ./script.sh (the ./ is needed if the current directory is not in the PATH)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📥",
        "text": "Special Variables in Scripts"
      },
      {
        "type": "table",
        "headers": [
          "Variable",
          "Content",
          "Example"
        ],
        "rows": [
          [
            "$0",
            "Name of the script",
            "./backup.sh → backup.sh"
          ],
          [
            "$1, $2, ...",
            "Positional arguments",
            "./script.sh hello → $1=hello"
          ],
          [
            "$#",
            "Number of topics",
            "If you call with 3 args → $#=3"
          ],
          [
            "$@",
            "All topics (separated)",
            "\"$@\" = \"$1\" \"$2\" \"$3\""
          ],
          [
            "$*",
            "All topics (merged)",
            "\"$*\" = \"$1 $2 $3\""
          ],
          [
            "$?",
            "Exit code last command",
            "0 = success, other = error"
          ],
          [
            "$$",
            "PID of the current script",
            "Useful for temporary files"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Conditions and Cycles"
      },
      {
        "type": "code",
        "title": "If-then-else",
        "prompt": "#!/bin/bash\nif [ -f \"/etc/passwd\" ]; then\n    echo \"The file exists!\"\nelif [ -d \"/etc\" ]; then\n    echo \"It's a directory\"\nelse\n    echo \"Not found\"\nfi",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Test",
          "Meaning",
          "Type"
        ],
        "rows": [
          [
            "[ -f file ]",
            "File exists and is a regular file",
            "File"
          ],
          [
            "[ -d dir ]",
            "The directory exists",
            "File"
          ],
          [
            "[ -e path ]",
            "Path exists (any type)",
            "File"
          ],
          [
            "[ -r file ]",
            "The file is readable",
            "Permissions"
          ],
          [
            "[ -x file ]",
            "The file is executable",
            "Permissions"
          ],
          [
            "[ -z \"$var\" ]",
            "The string is empty",
            "String"
          ],
          [
            "[ \"$a\" = \"$b\" ]",
            "Equal strings",
            "String"
          ],
          [
            "[ $a -eq $b ]",
            "Equal numbers",
            "Number"
          ],
          [
            "[ $a -lt $b ]",
            "a < b (less than)",
            "Number"
          ],
          [
            "[ $a -gt $b ]",
            "a > b (greater than)",
            "Number"
          ]
        ]
      },
      {
        "type": "code",
        "title": "For and while loops",
        "prompt": "# For loop on a list\nfor file in *.txt; do\n    echo \"Process: $file\"\n    wc -l \"$file\"\ndone\n\n# For loop with numeric range\nfor i in $(seq 1 10); do\n    echo \"Iteration $i\"\ndone\n\n# While loop\ncounter=1\nwhile [ $counter -le 5 ]; do\n    echo \"Counter: $counter\"\n    counter=$((counter + 1))\ndone",
        "output": ""
      },
      {
        "type": "story",
        "title": "Scenario: Automatic Backup Script",
        "text": "Create a backup.sh script that: 1) Checks if the backup directory exists (if -d), 2) Creates a tar.gz archive with date in the name, 3) Counts old backups and deletes them if there are more than 7 (for + rm), 4) Logs the result. This is the type of automation every sysadmin does on a daily basis!"
      }
    ]
  }
};
