// RHCSA Quiz — Topic 1: Essential Tools (English)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesEN = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which operator redirects both stdout AND stderr to the same file?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> redirects both standard output (fd 1) and standard error (fd 2) to the same file.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'What does the command `ls -la /etc >> /tmp/output.txt` do?',
    options: [
      'Overwrites /tmp/output.txt with the contents of /etc',
      'Appends the output of ls to /tmp/output.txt',
      'Redirects ls errors to /tmp/output.txt',
      'Creates a hard link between /etc and /tmp/output.txt',
    ],
    correct: 1,
    explanation: '>> appends the output to the end of the file, without overwriting it.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'You want to run `find / -name "*.log"` suppressing only "Permission denied" errors. Which command do you use?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null redirects stderr (file descriptor 2) to /dev/null, discarding only the errors.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'What does the pipe `|` do in `ps aux | grep httpd`?',
    options: [
      'Saves the output of ps aux to a file named "grep httpd"',
      'Passes the output of ps aux as input to grep httpd',
      'Runs ps aux and grep httpd in parallel without connection',
      'Redirects errors from ps aux to grep',
    ],
    correct: 1,
    explanation: 'The pipe | connects the stdout of the first command to the stdin of the second, allowing data "piping".',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which command sends both stdout and stderr to /dev/null (total silence)?',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null redirects stdout, then 2>&1 redirects stderr to where stdout is pointing (i.e. /dev/null). Equivalent to &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Which file descriptor corresponds to stderr?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'Standard file descriptors: 0=stdin, 1=stdout, 2=stderr.',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'What does `/dev/null` represent?',
    options: [
      'An empty file that can only contain text',
      'A special device that discards everything it receives',
      'The kernel log file',
      'A symbolic link to the home directory',
    ],
    correct: 1,
    explanation: '/dev/null is a special device (null device) that silently discards all input.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'How do you use `tee` to view the output on screen AND save it to a file simultaneously?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: '`tee` reads from stdin, writes to both stdout and the specified file. Useful in pipelines.',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which grep option performs a case-insensitive search?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) makes grep case-insensitive: `grep -i "error" file`.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows the lines of /etc/passwd that do NOT contain "nologin"?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) shows the lines that do NOT match the pattern.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'In a regex, what does the pattern `^root` match?',
    options: [
      'The word "root" anywhere in the line',
      'Lines that begin with "root"',
      'Lines that end with "root"',
      'Any character followed by "root"',
    ],
    correct: 1,
    explanation: '^ is an anchor that indicates the start of the line. `^root` matches only lines starting with "root".',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which grep option counts the number of matching lines?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) prints only the number of lines that match the pattern, not the lines themselves.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which command uses Extended Regular Expressions?',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '-E (or egrep) enables Extended Regex which supports +, ?, |, () without escaping.',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Which grep command finds lines starting with a digit?',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = start of line, `[0-9]` = any digit. Together they find lines starting with a digit.',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which option searches recursively in all subdirectories?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) makes grep descend into subdirectories. Useful for searching in /etc/.',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which octal notation permission corresponds to `rwxr-xr-x`?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx=7, r-x=5, r-x=5 → 755. This is the typical permission for executable files and public directories.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates a symbolic link of /etc/hosts in /tmp/?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: '`ln -s` creates a symbolic link. Without -s it creates a hard link.',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'What is the main difference between a hard link and a symbolic link?',
    options: [
      'Symbolic links are faster than hard links',
      'Hard links share the same inode; symbolic links point to a path',
      'Hard links work cross-filesystem; symbolic links do not',
      'Symbolic links cannot point to regular files',
    ],
    correct: 1,
    explanation: 'Hard link: same inode, same filesystem. Symbolic link: points to a path, can be cross-filesystem.',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which command adds execute permission for the owner, without touching the others?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: '`chmod u+x` adds execute only for the user (owner). a+x would add it for all.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which command changes both the owner and group of a file?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: '`chown user:group file` changes both the owner and the group with a single command.',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates a gzip-compressed tar archive named backup.tar.gz from the /home/mario directory?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'c=create, z=gzip, v=verbose, f=file. `tar -czvf archive.tar.gz source`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Which tar flag uses bzip2 compression?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'j = bzip2 (.tar.bz2), z = gzip (.tar.gz), J = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'How do you extract a tar.gz archive to /opt/ without changing directory?',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: '-C specifies the destination directory for extraction.',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Which command displays the man page from section 5 (configuration files) for passwd?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: '`man N command` specifies the section. Section 1=commands, 5=config files, 8=sysadmin commands.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Where are the documentation files installed with RPM packages located?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: '/usr/share/doc/ contains READMEs, examples, and documentation for each installed package.',
  },
]
