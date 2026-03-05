// RHCSA Lesson Content — English
// Structure: { [lessonId]: { comic, keyPoints, terminal } }

export const rhcsaLessonContent = {

  // ─── TOPIC 1: Essential Tools ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell & I/O Redirection',
      panels: [
        { emoji: '📤', text: '`>` overwrites a file with output: `echo "hello" > file.txt` creates or overwrites.' },
        { emoji: '📥', text: '`>>` appends without overwriting: `echo "more" >> file.txt`.' },
        { emoji: '🔗', text: '`|` (pipe) passes output of one command as input to the next: `ls | grep conf`.' },
        { emoji: '⚠️', text: '`2>` redirects only errors: `find / -name "*.conf" 2> /dev/null` hides errors.' },
        { emoji: '🎯', text: '`&>` redirects both stdout and stderr to the same file: `command &> output.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Redirection Operators',
        items: [
          '`>` — overwrite stdout to file',
          '`>>` — append stdout to file',
          '`2>` — redirect stderr to file',
          '`&>` — redirect stdout + stderr',
          '`<` — take input from file',
        ],
      },
      {
        title: 'The `|` Pipe',
        items: [
          'Chains commands: output of first → input of second',
          '`ls -la | grep "^d"` — directories only',
          '`cat file | sort | uniq` — sorted unique lines',
          '`ps aux | grep httpd` — httpd processes',
        ],
      },
      {
        title: '/dev/null',
        items: [
          'Special file that discards all input',
          'Used to suppress unwanted output',
          '`command 2>/dev/null` — ignore errors',
          '`command &>/dev/null` — total silence',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep and Regular Expressions',
      panels: [
        { emoji: '🔎', text: '`grep "pattern" file` searches lines containing the pattern in the file.' },
        { emoji: '🔄', text: '`grep -r "pattern" /etc/` searches recursively in a directory.' },
        { emoji: '❌', text: '`grep -v "pattern"` shows lines that do NOT match the pattern.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` uses extended regex with alternation.' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` counts the matching lines.' },
      ],
    },
    keyPoints: [
      {
        title: 'Essential grep options',
        items: [
          '`-i` — case-insensitive',
          '`-r` or `-R` — recursive search',
          '`-v` — invert match (NOT)',
          '`-n` — show line numbers',
          '`-c` — count matches',
          '`-l` — show only filenames',
          '`-E` — extended regex (egrep)',
        ],
      },
      {
        title: 'Basic Regex',
        items: [
          '`.` — any single character',
          '`*` — zero or more of previous',
          '`^` — start of line',
          '`$` — end of line',
          '`[abc]` — one of a, b, c',
          '`[0-9]` — digit from 0 to 9',
          '`\\b` — word boundary',
        ],
      },
      {
        title: 'Related commands',
        items: [
          '`egrep` = `grep -E` (extended)',
          '`fgrep` = `grep -F` (fixed string)',
          '`grep -A 3` — 3 lines after match',
          '`grep -B 2` — 2 lines before match',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Permissions and Links',
      panels: [
        { emoji: '🔐', text: 'UNIX permissions: `rwxrwxrwx` — User, Group, Other. `chmod 755 file` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown user:group file` changes owner and group. Root can change any file.' },
        { emoji: '🔗', text: 'Hard link: `ln file link` — same inode, deleting one does not remove the data.' },
        { emoji: '🔁', text: 'Symbolic link: `ln -s /real/path link` — points to a path, like an alias.' },
        { emoji: '📊', text: '`ls -l` shows: type, permissions, hard links, owner, group, size, date, name.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — octal notation',
        items: [
          '`4` = read (r), `2` = write (w), `1` = execute (x)',
          '`755` = rwxr-xr-x (typical directory)',
          '`644` = rw-r--r-- (typical file)',
          '`700` = rwx------ (owner only)',
          '`chmod u+x file` — add execute to owner',
        ],
      },
      {
        title: 'chown and chgrp',
        items: [
          '`chown mario file` — change owner',
          '`chown mario:dev file` — change owner and group',
          '`chown -R mario /dir` — recursive on directory',
          '`chgrp developers file` — change only group',
        ],
      },
      {
        title: 'Hard vs Symbolic links',
        items: [
          'Hard: same inode, same filesystem, no links to dirs',
          'Soft: points to path, cross-filesystem, can be dangling',
          '`ln -s /etc/httpd/conf /var/www/conf` — symbolic link',
          '`ls -l` shows `->` for symbolic links',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Archives and Compression',
      panels: [
        { emoji: '📦', text: '`tar -czvf archive.tar.gz /directory` — create a gzip-compressed archive.' },
        { emoji: '📂', text: '`tar -xzvf archive.tar.gz` — extract tar.gz archive to current directory.' },
        { emoji: '📋', text: '`tar -tzvf archive.tar.gz` — list contents without extracting.' },
        { emoji: '🗜️', text: 'gzip = .gz, bzip2 = .bz2 (slower but better compression), xz = .xz (maximum compression).' },
        { emoji: '💡', text: 'Remember tar flags: c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Essential tar flags',
        items: [
          '`c` — create archive',
          '`x` — extract archive',
          '`t` — list contents',
          '`f` — specify filename (always last!)',
          '`v` — verbose (show files)',
          '`z` — gzip filter (.tar.gz)',
          '`j` — bzip2 filter (.tar.bz2)',
          '`J` — xz filter (.tar.xz)',
        ],
      },
      {
        title: 'Practical exam examples',
        items: [
          'Create: `tar -cJf backup.tar.xz /home/mario`',
          'Extract here: `tar -xzf file.tar.gz`',
          'Extract to path: `tar -xzf file.tar.gz -C /tmp/`',
          'List: `tar -tf file.tar`',
        ],
      },
      {
        title: 'Single file compression',
        items: [
          '`gzip file` → `file.gz` (removes original)',
          '`gunzip file.gz` → restores',
          '`gzip -k file` → keeps original',
          '`bzip2 file` → `file.bz2`',
          '`xz file` → `file.xz`',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/\' from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 System Documentation',
      panels: [
        { emoji: '📖', text: '`man command` — shows the full manual. Navigate with arrows, search with `/pattern`, quit with `q`.' },
        { emoji: '🔎', text: '`man -k keyword` — searches all man pages for keyword (like apropos).' },
        { emoji: 'ℹ️', text: '`info command` — extended hypertext documentation, often more detailed.' },
        { emoji: '📁', text: '`/usr/share/doc/` contains README, CHANGELOG, examples for each installed package.' },
        { emoji: '💡', text: '`command --help` — quick inline help. Very useful in exams to recall options.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — sections and navigation',
        items: [
          'Section 1: user commands, 5: config files, 8: root commands',
          '`man 5 passwd` — man section 5 for passwd',
          '`/` — search in man (n=next, N=previous)',
          '`q` — quit, `G` — go to end, `g` — start',
          '`man -k "user account"` — search by keyword',
        ],
      },
      {
        title: 'info and other sources',
        items: [
          '`info coreutils` — extended GNU documentation',
          '`pinfo` — more user-friendly version of info',
          '`whatis command` — brief description',
          '`apropos keyword` — search man summaries',
        ],
      },
      {
        title: '/usr/share/doc/',
        items: [
          'Exists for every installed RPM package',
          'Contains: README, ChangeLog, examples, license',
          '`ls /usr/share/doc/httpd/`',
          'Useful in exams to find sample configuration files',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "network interface" | head -5',
      output: 'arp (7)              - Linux ARP kernel module\neth (4)              - Ethernet drivers\nif_nameindex (3)     - get network interface names and indexes\nifconfig (8)         - configure a network interface\nip (8)               - show / manipulate routing, devices, policy routing',
    },
  },

  // ─── TOPIC 2: Shell Scripting ─────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '📜 Variables and Bash Syntax',
      panels: [
        { emoji: '📝', text: '`NAME="value"` — declare a variable. No spaces around =!' },
        { emoji: '💬', text: '`echo $NAME` — read the variable. `echo "${NAME}_suffix"` avoids ambiguity.' },
        { emoji: '🔄', text: '`export VAR` — makes a variable available to child processes (environment).' },
        { emoji: '⚡', text: '`RESULT=$(ls /etc)` — captures command output into a variable.' },
        { emoji: '🔢', text: '`$?` = exit code, `$$` = current PID, `$0` = script name, `$#` = number of args.' },
      ],
    },
    keyPoints: [
      {
        title: 'Variable declaration and use',
        items: [
          '`VAR="value"` — no spaces around =',
          '`echo $VAR` or `echo "${VAR}"` — reads the value',
          '`unset VAR` — removes the variable',
          '`readonly VAR` — constant variable (not modifiable)',
          '`declare -i N=5` — integer variable',
        ],
      },
      {
        title: 'Special variables',
        items: [
          '`$?` — exit code of the last command (0 = success)',
          '`$$` — PID of the current bash process',
          '`$0` — name of the script',
          '`$1..$9` — positional arguments',
          '`$#` — number of arguments',
          '`$@` — all arguments as separate words',
        ],
      },
      {
        title: 'Command Substitution',
        items: [
          '`VAR=$(command)` — modern form (recommended)',
          '``VAR=`command``` — old backtick syntax',
          '`DATE=$(date +%Y-%m-%d)` — date into variable',
          '`FILES=$(ls /etc/*.conf | wc -l)` — count files',
        ],
      },
    ],
    terminal: {
      prompt: '$ HOSTNAME=$(hostname); echo "Running on: ${HOSTNAME^^}"',
      output: 'Running on: SERVER01.EXAMPLE.COM',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Conditionals and Loops',
      panels: [
        { emoji: '🤔', text: '`if [ condition ]; then ... fi` — basic structure. -e=exists, -f=file, -d=dir, -z=empty.' },
        { emoji: '🔁', text: '`for i in 1 2 3; do echo $i; done` — iterate over list. `for f in *.txt` — over files.' },
        { emoji: '⏳', text: '`while [ $i -lt 10 ]; do ...; ((i++)); done` — loop with condition.' },
        { emoji: '📊', text: 'Numeric operators: `-eq` =, `-ne` ≠, `-lt` <, `-le` ≤, `-gt` >, `-ge` ≥.' },
        { emoji: '🎭', text: '`case $VAR in pattern) commands;; esac` — multiple switch, more readable.' },
      ],
    },
    keyPoints: [
      {
        title: 'if/then/else',
        items: [
          '`if [ -f "$FILE" ]; then echo "exists"; fi`',
          '`if [ -d "$DIR" ] && [ -w "$DIR" ]`',
          '`if [[ "$STR" == *"pattern"* ]]` — glob matching',
          '`elif` for multiple conditions',
          '`[ -z "$VAR" ]` — empty string',
          '`[ -n "$VAR" ]` — non-empty string',
        ],
      },
      {
        title: 'For loop',
        items: [
          '`for i in {1..10}; do echo $i; done`',
          '`for f in /etc/*.conf; do cat $f; done`',
          '`for ((i=0; i<5; i++)); do echo $i; done`',
          '`for host in server1 server2; do ssh $host uptime; done`',
        ],
      },
      {
        title: 'While and case',
        items: [
          '`while read line; do echo $line; done < file.txt`',
          '`until [ condition ]; do ...; done` — inverse of while',
          '`break` — exits loop, `continue` — skips iteration',
          '`case "$opt" in a) cmd1;; b) cmd2;; *) default;; esac`',
        ],
      },
    ],
    terminal: {
      prompt: '$ for f in /etc/ssh/*.conf; do echo "=== $f ==="; done',
      output: '=== /etc/ssh/ssh_config ===\n=== /etc/ssh/sshd_config ===',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '🎯 Parameters, Exit Codes and Output',
      panels: [
        { emoji: '1️⃣', text: '`$1`, `$2`... are arguments passed to the script: `./script.sh arg1 arg2`.' },
        { emoji: '✅', text: '`$?` after each command: 0 = success. If non-zero, an error occurred.' },
        { emoji: '📢', text: '`echo "Error" >&2` — sends error messages to stderr (best practice).' },
        { emoji: '🚪', text: '`exit 0` — terminates the script with success. `exit 1` — with error.' },
        { emoji: '🔐', text: '`if [ $# -lt 2 ]; then echo "Usage: $0 <arg1> <arg2>" >&2; exit 1; fi`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Positional arguments',
        items: [
          '`$0` — script/command name',
          '`$1` - `$9` — arguments (beyond 9: `${10}`)',
          '`$#` — total number of arguments',
          '`$@` — all arguments (separate)',
          '`$*` — all joined as string',
          '`shift` — shifts arguments by N positions',
        ],
      },
      {
        title: 'Exit code and error handling',
        items: [
          '`exit 0` — success, `exit 1..255` — error',
          '`command || exit 1` — exit if command fails',
          '`set -e` — script exits on first error',
          '`set -u` — error on undefined variable',
          '`trap "echo cleanup" EXIT` — run on script exit',
        ],
      },
      {
        title: 'Input validation patterns',
        items: [
          '`[ $# -eq 0 ] && { echo "Usage..." >&2; exit 1; }`',
          '`[ -z "$1" ] && echo "Argument required" >&2`',
          '`[ ! -f "$1" ] && echo "File not found" >&2`',
          'Always send errors to stderr with `>&2`',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat check_user.sh\n#!/bin/bash\n[ $# -eq 0 ] && { echo "Usage: $0 <username>" >&2; exit 1; }\nid "$1" &>/dev/null && echo "User exists" || echo "User not found"',
      output: '#!/bin/bash\n[ $# -eq 0 ] && { echo "Usage: $0 <username>" >&2; exit 1; }\nid "$1" &>/dev/null && echo "User exists" || echo "User not found"',
    },
  },

  // ─── TOPIC 3: System Management ──────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '⚙️ Boot and systemd Targets',
      panels: [
        { emoji: '🚀', text: 'RHEL9 uses systemd as init. "Targets" replace runlevels: multi-user.target = CLI, graphical.target = GUI.' },
        { emoji: '🎯', text: '`systemctl get-default` shows the boot target. `systemctl set-default` changes it permanently.' },
        { emoji: '🔧', text: '`systemctl isolate rescue.target` brings the system to rescue mode WITHOUT reboot.' },
        { emoji: '🔑', text: 'To reset root password: at GRUB boot, add `rd.break` to kernel parameters.' },
        { emoji: '🏷️', text: 'After rd.break: `chroot /sysroot`, `passwd root`, `touch /.autorelabel`, then reboot.' },
      ],
    },
    keyPoints: [
      {
        title: 'Main systemd targets',
        items: [
          '`multi-user.target` — CLI multi-user (ex runlevel 3)',
          '`graphical.target` — GUI (ex runlevel 5)',
          '`rescue.target` — single user, filesystem mounted',
          '`emergency.target` — root shell, rootfs only',
          '`reboot.target` / `poweroff.target`',
        ],
      },
      {
        title: 'Target management',
        items: [
          '`systemctl get-default` — current boot target',
          '`systemctl set-default multi-user.target` — permanent',
          '`systemctl isolate <target>` — switch immediately',
          '`who -r` or `runlevel` — show current runlevel',
        ],
      },
      {
        title: 'Root password reset (RHEL9)',
        items: [
          '1. At GRUB: press `e` to edit the entry',
          '2. On `linux` line: add `rd.break` at the end',
          '3. `Ctrl+X` to boot',
          '4. `mount -o remount,rw /sysroot`',
          '5. `chroot /sysroot`',
          '6. `passwd root`',
          '7. `touch /.autorelabel` (SELinux!)',
          '8. `exit; exit` → reboot',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '⚡ Process Management',
      panels: [
        { emoji: '👁️', text: '`ps aux` — list all processes. `top` or `htop` — live interactive view.' },
        { emoji: '💀', text: '`kill -9 PID` — SIGKILL (force). `kill PID` — SIGTERM (soft). `killall name` — by name.' },
        { emoji: '📊', text: '`nice -n -10 command` — launch with high priority. `renice -n 5 -p PID` — change at runtime.' },
        { emoji: '⏸️', text: '`Ctrl+Z` suspends a process. `bg` sends it to background. `fg` brings it back.' },
        { emoji: '🔍', text: '`pgrep httpd` — find PID by name. `pkill httpd` — terminate by name.' },
      ],
    },
    keyPoints: [
      {
        title: 'Process viewing',
        items: [
          '`ps aux` — all processes (BSD syntax)',
          '`ps -ef` — all processes (POSIX syntax)',
          '`ps -o pid,ppid,cmd,%cpu,%mem` — custom output',
          '`pstree` — process tree',
          '`top` — interactive (k=kill, r=renice, q=quit)',
        ],
      },
      {
        title: 'Signals and kill',
        items: [
          'SIGTERM (15) — soft termination (default kill)',
          'SIGKILL (9) — immediate termination (not ignorable)',
          'SIGHUP (1) — reload configuration',
          'SIGSTOP (19) — pause; SIGCONT (18) — resume',
          '`kill -l` — list all signals',
        ],
      },
      {
        title: 'nice priority',
        items: [
          'Range: -20 (max CPU) → +19 (min CPU)',
          '`nice -n -10 command` — launch with nice -10',
          '`renice -n -5 -p PID` — modify at runtime',
          'Only root can set negative nice',
          '`ps -o pid,ni,cmd` — shows nice value',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps aux | grep httpd | grep -v grep',
      output: 'apache   1234  0.1  0.5 456789 12345 ?   Ss  10:00  0:01 /usr/sbin/httpd -DFOREGROUND\napache   1235  0.0  0.3 456789  8901 ?   S   10:00  0:00 /usr/sbin/httpd -DFOREGROUND',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🔧 Services with systemctl',
      panels: [
        { emoji: '▶️', text: '`systemctl start sshd` — start the service. `systemctl stop sshd` — stop.' },
        { emoji: '🔄', text: '`systemctl restart sshd` — restart. `systemctl reload sshd` — reload config without restart.' },
        { emoji: '🔌', text: '`systemctl enable --now sshd` — enable at boot AND start immediately in one command.' },
        { emoji: '🚫', text: '`systemctl mask sshd` — prevents any start (even manual). `unmask` to unblock.' },
        { emoji: '📋', text: '`systemctl status sshd` — state, recent logs and whether it is enabled/running.' },
      ],
    },
    keyPoints: [
      {
        title: 'Essential systemctl commands',
        items: [
          '`start/stop/restart/reload` — immediate management',
          '`enable/disable` — automatic startup at boot',
          '`enable --now` — enable + start together',
          '`disable --now` — disable + stop together',
          '`mask/unmask` — complete block',
          '`status` — detailed state and logs',
          '`is-active/is-enabled` — scriptable state check',
        ],
      },
      {
        title: 'Unit file management',
        items: [
          'System unit files: `/usr/lib/systemd/system/`',
          'Customizations: `/etc/systemd/system/`',
          '`systemctl daemon-reload` — after modifying unit file',
          '`systemctl edit service` — override without changing original',
          '`systemctl cat sshd` — view active unit file',
        ],
      },
      {
        title: 'Listing and debugging',
        items: [
          '`systemctl list-units --type=service` — active services',
          '`systemctl list-units --failed` — failed services',
          '`journalctl -u sshd -n 50` — last 50 logs of service',
          '`systemctl show sshd` — all properties',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl status sshd',
      output: '● sshd.service - OpenSSH server daemon\n   Loaded: loaded (/usr/lib/systemd/system/sshd.service; enabled)\n   Active: active (running) since Thu 2024-01-15 10:00:00 CET\n  Process: 1234 ExecStartPre=/usr/sbin/sshd -t\n Main PID: 1235 (sshd)',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📋 Logging and Scheduling',
      panels: [
        { emoji: '📰', text: '`journalctl` — systemd logs. `-f`=live, `-u sshd`=by service, `-b`=since current boot.' },
        { emoji: '📁', text: '/var/log/ — traditional logs: messages, secure, audit/audit.log, cron, maillog.' },
        { emoji: '⏰', text: 'cron: `crontab -e` — personal editor. Format: min hour day month weekday command.' },
        { emoji: '🕐', text: 'at: `echo "command" | at 14:30` — runs once at specified time.' },
        { emoji: '📌', text: 'Persistent journal: add `Storage=persistent` in `/etc/systemd/journald.conf`.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl key options',
        items: [
          '`-f` — follow in real time (tail -f)',
          '`-u sshd` — filter by service unit',
          '`-b` — only from current boot',
          '`-b -1` — from previous boot',
          '`--since "1 hour ago"` — by time period',
          '`-p err` — only error priority and above',
          '`-n 100` — last 100 lines',
        ],
      },
      {
        title: 'cron — format and management',
        items: [
          'Format: `MIN HOUR DAY MONTH WEEKDAY CMD`',
          '`*` = any, `*/5` = every 5, `1,3` = days 1 and 3',
          '`crontab -e` — edit, `-l` — list, `-r` — remove',
          'System files: `/etc/cron.d/`, `/etc/cron.daily/`',
          '`/etc/cron.allow` / `/etc/cron.deny` — access control',
        ],
      },
      {
        title: 'at — one-time execution',
        items: [
          '`at 14:30` — then enter commands, `Ctrl+D` to finish',
          '`at now + 1 hour`',
          '`atq` — list pending jobs',
          '`atrm <id>` — remove job',
          '`/etc/at.allow` / `/etc/at.deny` — access control',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -u sshd --since "1 hour ago" | tail -3',
      output: 'Jan 15 10:00:01 server sshd[1234]: Server listening on 0.0.0.0 port 22\nJan 15 10:05:33 server sshd[1235]: Accepted publickey for mario\nJan 15 10:05:33 server sshd[1235]: pam_unix(sshd:session): session opened for user mario',
    },
  },

  // ─── TOPICS 4-10: Placeholder — same as IT ─────────────
  // (Topics 4-10 lesson content — abbreviated stubs for EN)
  // Full content follows the same structure as Italian

  'rhcsa-4-1': { comic: { title: '💾 GPT Partitions', panels: [ { emoji: '🖥️', text: '`lsblk` — shows all block devices with tree structure and mount points.' }, { emoji: '⚒️', text: '`parted /dev/sdb mkpart primary xfs 1GiB 5GiB` — creates a partition from 1 to 5 GiB.' }, { emoji: '🔄', text: '`partprobe /dev/sdb` — updates kernel on new partition table without reboot.' } ] }, keyPoints: [ { title: 'Storage exploration', items: ['`lsblk` — device tree with sizes and mounts', '`lsblk -f` — adds UUID and filesystem type', '`blkid` — UUID, LABEL, filesystem type', '`fdisk -l` — list partitions', '`df -h` — used/free space for mounted filesystems'] }, { title: 'parted — essential commands', items: ['`parted /dev/sdb print` — show partition table', '`parted /dev/sdb mklabel gpt` — create GPT table', '`parted /dev/sdb mkpart primary xfs 1GiB 5GiB`', '`parted /dev/sdb rm 1` — remove partition 1', '`parted /dev/sdb set 1 lvm on` — LVM flag'] } ], terminal: { prompt: '$ lsblk -f /dev/sdb', output: 'NAME   FSTYPE LABEL UUID                                 MOUNTPOINT\nsdb\n├─sdb1 xfs          a1b2c3d4-...                          /data' } },
  'rhcsa-4-2': { comic: { title: '🏗️ LVM — Physical and Volume Groups', panels: [ { emoji: '1️⃣', text: '`pvcreate /dev/sdb1` — initializes the partition as an LVM Physical Volume.' }, { emoji: '2️⃣', text: '`vgcreate datavg /dev/sdb1` — creates a Volume Group from the PV.' }, { emoji: '🔑', text: 'Order is ALWAYS: PV → VG → LV. Never skip a step!' } ] }, keyPoints: [ { title: 'Physical Volume (PV)', items: ['`pvcreate /dev/sdb1` — init PV', '`pvdisplay` — detailed info', '`pvs` — compact summary', '`pvremove /dev/sdb1` — remove metadata'] }, { title: 'Volume Group (VG)', items: ['`vgcreate myvg /dev/sdb1 /dev/sdc1` — create VG', '`vgextend myvg /dev/sdd1` — add PV to VG', '`vgdisplay` — detailed info', '`vgs` — compact summary'] } ], terminal: { prompt: '$ vgdisplay datavg', output: '  --- Volume group ---\n  VG Name               datavg\n  VG Size               <10.00 GiB\n  PE Size               4.00 MiB\n  Free  PE / Size       2559 / <10.00 GiB' } },
  'rhcsa-4-3': { comic: { title: '📦 LVM — Logical Volumes', panels: [ { emoji: '3️⃣', text: '`lvcreate -L 2G -n datalv datavg` — creates a 2GiB LV in VG datavg.' }, { emoji: '📈', text: '`lvextend -L +1G -r /dev/datavg/datalv` — extends LV AND filesystem (-r = auto resize).' } ] }, keyPoints: [ { title: 'lvcreate options', items: ['`-L 2G` — absolute size', '`-l 100%FREE` — use all free space in VG', '`-n name` — Logical Volume name', 'Device: `/dev/VGname/LVname`'] }, { title: 'Complete LVM workflow', items: ['1. `pvcreate /dev/sdb1`', '2. `vgcreate myvg /dev/sdb1`', '3. `lvcreate -L 3G -n mylv myvg`', '4. `mkfs.xfs /dev/myvg/mylv`', '5. `mkdir /mydata && mount /dev/myvg/mylv /mydata`', '6. Add to `/etc/fstab`'] } ], terminal: { prompt: '$ lvcreate -L 3G -n datalv datavg', output: '  Logical volume "datalv" created.' } },
  'rhcsa-4-4': { comic: { title: '📌 Mount, fstab and Swap', panels: [ { emoji: '🔑', text: '`blkid` finds the UUID. Use UUID in fstab — it never changes!' }, { emoji: '📝', text: 'fstab format: `UUID=xxx /mountpoint fstype options dump pass`.' }, { emoji: '✅', text: '`mount -a` tests all fstab entries. No errors = configuration is correct.' } ] }, keyPoints: [ { title: 'fstab — format and options', items: ['Fields: device mountpoint fstype options dump pass', '`defaults` = rw,suid,dev,exec,auto,nouser,async', '`nofail` — ignore errors at boot', '`_netdev` — wait for network (NFS/CIFS)'] }, { title: 'Swap setup', items: ['`mkswap /dev/sdb2` — format as swap', '`swapon /dev/sdb2` — activate immediately', 'In fstab: `UUID=xxx none swap defaults 0 0`', '`swapon --show` — show active swap'] } ], terminal: { prompt: '$ swapon --show', output: 'NAME      TYPE SIZE USED PRIO\n/dev/sdb2 partition   2G   0B   -2' } },
  'rhcsa-5-1': { comic: { title: '📁 ext4 and XFS', panels: [ { emoji: '🔵', text: '`mkfs.ext4 /dev/sdb1` — ext4 filesystem. `mkfs.xfs /dev/sdb1` — XFS (RHEL9 default).' }, { emoji: '📈', text: 'ext4 can shrink. XFS can only grow! `resize2fs` for ext4, `xfs_growfs /mount` for XFS.' } ] }, keyPoints: [ { title: 'Filesystem creation', items: ['`mkfs.ext4 -L "label" /dev/sdb1`', '`mkfs.xfs -L "label" /dev/sdb1`', 'Device must NOT be mounted during mkfs!'] }, { title: 'Repair', items: ['ALWAYS unmount before repair!', '`e2fsck -f /dev/sdb1` — force check ext4', '`xfs_repair /dev/sdb1` — repair XFS'] } ], terminal: { prompt: '$ xfs_info /data', output: 'meta-data=/dev/sdb1  isize=512    agcount=4\ndata     =            bsize=4096   blocks=2621440' } },
  'rhcsa-5-2': { comic: { title: '🔐 LUKS Encryption', panels: [ { emoji: '🔒', text: '`cryptsetup luksFormat /dev/sdc1` — format with LUKS encryption.' }, { emoji: '🔓', text: '`cryptsetup open /dev/sdc1 myvol` — open container as `/dev/mapper/myvol`.' } ] }, keyPoints: [ { title: 'LUKS step-by-step', items: ['1. `cryptsetup luksFormat /dev/sdc1`', '2. `cryptsetup open /dev/sdc1 name`', '3. `mkfs.xfs /dev/mapper/name`', '4. `mount /dev/mapper/name /secure`', '5. Add /etc/crypttab and /etc/fstab'] } ], terminal: { prompt: '$ cryptsetup status myvol', output: '/dev/mapper/myvol is active.\n  type:   LUKS2\n  cipher: aes-xts-plain64' } },
  'rhcsa-5-3': { comic: { title: '🌐 NFS, CIFS and autofs', panels: [ { emoji: '📡', text: '`mount -t nfs server:/export /mountpoint` — manually mount an NFS share.' }, { emoji: '🤖', text: 'autofs mounts on-demand: configure /etc/auto.master and map files.' } ] }, keyPoints: [ { title: 'NFS client', items: ['`dnf install nfs-utils`', '`showmount -e server` — list available exports', '`mount -t nfs server:/data /mnt`'] }, { title: 'autofs', items: ['`dnf install autofs` → `systemctl enable --now autofs`', '/etc/auto.master: `/misc /etc/auto.misc`', 'Auto-unmounts after inactivity'] } ], terminal: { prompt: '$ showmount -e nfsserver', output: 'Export list for nfsserver:\n/data/shared  192.168.1.0/24' } },
  'rhcsa-5-4': { comic: { title: '🔑 ACLs and Advanced Permissions', panels: [ { emoji: '📋', text: '`getfacl file` — show extended ACLs. `+` in `ls -l` means the file has ACLs.' }, { emoji: '➕', text: '`setfacl -m u:mario:rw file` — add rw permissions for user mario.' } ] }, keyPoints: [ { title: 'setfacl main options', items: ['`-m user:name:perm` — modify/add user ACL', '`-m group:name:perm` — group ACL', '`-x user:name` — remove user ACL', '`-b` — remove ALL ACLs', '`-m d:user:name:perm` — default ACL'] }, { title: 'Special permissions', items: ['**setUID** (4): run as file owner (`chmod u+s`)', '**setGID** (2): on dir inherits group (`chmod g+s`)', '**sticky bit** (1): only owner can delete files (`chmod +t`)'] } ], terminal: { prompt: '$ getfacl /project/file.txt', output: '# file: project/file.txt\nuser::rw-\nuser:mario:rw-\ngroup::r--\nmask::rw-' } },
  'rhcsa-6-1': { comic: { title: '📦 Package Management with dnf', panels: [ { emoji: '⬇️', text: '`dnf install httpd` — installs httpd and its dependencies automatically.' }, { emoji: '❓', text: '`dnf provides /usr/bin/vim` — find which package provides a file or command.' } ] }, keyPoints: [ { title: 'Essential dnf commands', items: ['`dnf install package` — install', '`dnf remove package` — remove', '`dnf update` — update all', '`dnf search word` — search names and descriptions', '`dnf provides /path/file` — who owns the file'] }, { title: 'Repository management', items: ['Files in `/etc/yum.repos.d/`', '`dnf repolist` — list enabled repos', '`dnf repolist all` — all including disabled'] } ], terminal: { prompt: '$ dnf provides */semanage', output: 'policycoreutils-python-utils-3.4-1.el9.noarch : SELinux policy core python utilities' } },
  'rhcsa-6-2': { comic: { title: '⚙️ rpm — Query and Verify', panels: [ { emoji: '🔍', text: '`rpm -qa` — list ALL installed packages. `rpm -qi name` — detailed info.' }, { emoji: '🔗', text: '`rpm -qf /usr/bin/ls` — which package installed this file?' } ] }, keyPoints: [ { title: 'rpm query (-q)', items: ['`rpm -qa` — all installed packages', '`rpm -qi name` — package info', '`rpm -ql name` — package files', '`rpm -qf /path/file` — owning package', '`rpm -qR name` — required dependencies'] }, { title: 'Verification', items: ['`rpm -V name` — verify file integrity', '`rpm -Va` — verify all packages', 'S=size, M=permissions, c=modified config'] } ], terminal: { prompt: '$ rpm -qf /usr/bin/passwd', output: 'passwd-0.80-12.el9.x86_64' } },
  'rhcsa-6-3': { comic: { title: '🥾 GRUB2 and Kernel', panels: [ { emoji: '📝', text: 'GRUB2 config is modified in `/etc/default/grub` (NOT grub.cfg directly).' }, { emoji: '🔄', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — regenerate grub.cfg after changes.' } ] }, keyPoints: [ { title: '/etc/default/grub', items: ['`GRUB_TIMEOUT=5` — menu timeout in seconds', '`GRUB_DEFAULT=saved` — remember last selection', '`GRUB_CMDLINE_LINUX="..."` — default kernel params'] }, { title: 'Kernel management', items: ['`uname -r` — current running kernel', '`dnf install kernel` — install new kernel', '`grubby --default-kernel` — default kernel'] } ], terminal: { prompt: '$ grub2-mkconfig -o /boot/grub2/grub.cfg', output: 'Generating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.14.0-362.el9.x86_64\ndone' } },
  'rhcsa-7-1': { comic: { title: '🌐 nmcli and Network Configuration', panels: [ { emoji: '📋', text: '`nmcli connection show` — list all connections. `nmcli device status` — device status.' }, { emoji: '🖥️', text: '`hostnamectl set-hostname server.example.com` — set hostname permanently.' } ] }, keyPoints: [ { title: 'nmcli — connections', items: ['`nmcli con show` — list connections', '`nmcli con mod ens3 ipv4.method manual` — static IP', '`nmcli con mod ens3 ipv4.addresses 192.168.1.100/24`', '`nmcli con mod ens3 ipv4.gateway 192.168.1.1`', '`nmcli con up ens3` — activate'] }, { title: 'Hostname and DNS', items: ['`hostnamectl set-hostname name.domain`', '`/etc/hosts` — local IP-hostname mapping', '`/etc/resolv.conf` — nameserver, search domain'] } ], terminal: { prompt: '$ nmcli con show ens3 | grep ipv4', output: 'ipv4.method:     manual\nipv4.addresses:  192.168.1.100/24' } },
  'rhcsa-7-2': { comic: { title: '🔥 firewalld', panels: [ { emoji: '🚪', text: '`firewall-cmd --add-service=http --permanent` — open port 80. Then `--reload`.' }, { emoji: '⚡', text: 'Without `--permanent` the rule is temporary (lost on reboot or --reload).' } ] }, keyPoints: [ { title: 'Services and ports', items: ['`--add-service=name` — open by service name', '`--add-port=8443/tcp` — specific port', '`--permanent` — make rule persistent', '`--reload` — apply permanent rules'] }, { title: 'Zones', items: ['`--get-active-zones` — zones with assigned interfaces', '`--get-default-zone` — default zone', '`--set-default-zone=internal`'] } ], terminal: { prompt: '$ firewall-cmd --zone=public --list-all', output: 'public (active)\n  services: cockpit dhcpv6-client http https ssh\n  ports: 8080/tcp' } },
  'rhcsa-7-3': { comic: { title: '🔐 SSH and File Transfer', panels: [ { emoji: '🔑', text: '`ssh-keygen -t ed25519` — generate SSH key pair. Saved in `~/.ssh/id_ed25519`.' }, { emoji: '📤', text: '`ssh-copy-id mario@server` — copy public key to server.' } ] }, keyPoints: [ { title: 'SSH key authentication', items: ['`ssh-keygen -t ed25519` — generate keys', 'Private key: `~/.ssh/id_ed25519` (chmod 600!)', '`ssh-copy-id user@host` — install public key'] }, { title: 'scp and rsync', items: ['`scp file user@host:/path` — copy single file', '`rsync -av /src/ user@host:/dst/` — incremental sync', '`rsync --delete` — remove files not in source'] } ], terminal: { prompt: '$ ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""', output: 'Generating public/private ed25519 key pair.\nYour identification has been saved in /home/mario/.ssh/id_ed25519' } },
  'rhcsa-8-1': { comic: { title: '👤 User Management', panels: [ { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — create user mario with home and bash shell.' }, { emoji: '✏️', text: '`usermod -aG wheel mario` — add mario to wheel group (sudo). The -a flag is CRITICAL!' } ] }, keyPoints: [ { title: 'useradd options', items: ['`-m` — create home directory', '`-s /bin/bash` — default shell', '`-u 1500` — specific UID', '`-G grp1,grp2` — supplementary groups'] }, { title: 'chage — password expiry', items: ['`chage -l mario` — show expiry info', '`chage -M 90 mario` — max password days', '`chage -W 14 mario` — warning days'] } ], terminal: { prompt: '$ useradd -m -u 1500 -s /bin/bash mario && passwd mario', output: 'passwd: all authentication tokens updated successfully.' } },
  'rhcsa-8-2': { comic: { title: '👥 Groups and sudo', panels: [ { emoji: '🏗️', text: '`groupadd -g 1500 developers` — create group with specific GID.' }, { emoji: '⚠️', text: 'WARNING: `usermod -G developers mario` (without -a) REMOVES other groups!' } ] }, keyPoints: [ { title: 'Group management', items: ['`groupadd -g 1500 name` — create group', '`gpasswd -a mario group` — add user', '`gpasswd -d mario group` — remove user', '`id mario` — UID, GID and groups'] }, { title: 'sudo and sudoers', items: ['`visudo` — safe editor for /etc/sudoers', '`mario ALL=(ALL) ALL` — full sudo', '`mario ALL=(ALL) NOPASSWD:ALL` — no password', '`%wheel ALL=(ALL) ALL` — all wheel users'] } ], terminal: { prompt: '$ id mario', output: 'uid=1500(mario) gid=1500(mario) groups=1500(mario),1500(developers)' } },
  'rhcsa-9-1': { comic: { title: '🔐 SELinux Modes', panels: [ { emoji: '🟢', text: 'Enforcing = SELinux active and blocks violations. Default mode on RHEL.' }, { emoji: '🟡', text: 'Permissive = SELinux logs violations but does NOT block. Great for debugging.' }, { emoji: '🔴', text: 'Disabled = SELinux off. Not recommended in production. Requires reboot to change.' } ] }, keyPoints: [ { title: 'SELinux mode control', items: ['`getenforce` — Enforcing / Permissive / Disabled', '`sestatus` — full SELinux info', '`setenforce 1` — enforcing (temporary)', '`setenforce 0` — permissive (temporary, for debug)', '`/etc/selinux/config` — permanent config'] }, { title: 'SELinux logging', items: ['`/var/log/audit/audit.log` — main log (AVC denials)', '`ausearch -m AVC` — search AVC in audit log', '`sealert -a /var/log/audit/audit.log` — guided analysis'] } ], terminal: { prompt: '$ sestatus', output: 'SELinux status:   enabled\nLoaded policy:    targeted\nCurrent mode:     enforcing' } },
  'rhcsa-9-2': { comic: { title: '🏷️ File and Process Contexts', panels: [ { emoji: '👁️', text: '`ls -Z /var/www/html` — shows SELinux context: user:role:type:level.' }, { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — restore default contexts (persistent, recommended).' } ] }, keyPoints: [ { title: 'Viewing contexts', items: ['`ls -Z file` — file context', '`ps -eZ | grep httpd` — process context', 'Format: user:role:type:sensitivity_level', 'The type (e.g. httpd_sys_content_t) is most important'] }, { title: 'Correct workflow for new paths', items: ['1. `semanage fcontext -a -t httpd_sys_content_t "/data/web(/.*)?"` — add rule', '2. `restorecon -Rv /data/web` — apply to existing files', '3. Verify: `ls -Z /data/web`'] } ], terminal: { prompt: '$ ls -Z /var/www/html/index.html', output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html' } },
  'rhcsa-9-3': { comic: { title: '🔘 SELinux Booleans and Ports', panels: [ { emoji: '🎛️', text: '`getsebool -a` — list all booleans. `getsebool httpd_can_network_connect` — specific state.' }, { emoji: '🔄', text: '`setsebool -P httpd_can_network_connect on` — enable permanently (-P = persistent).' }, { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8443` — add port 8443 for httpd.' } ] }, keyPoints: [ { title: 'SELinux booleans', items: ['`getsebool -a` — all booleans', '`setsebool nome on` — enable (temporary)', '`setsebool -P nome on` — enable permanently', 'Common: httpd_can_network_connect, ftpd_anon_write'] }, { title: 'SELinux port management', items: ['`semanage port -l` — all port-type assignments', '`semanage port -a -t type -p tcp PORT` — add port', 'Required if service uses non-standard port'] } ], terminal: { prompt: '$ semanage port -l | grep http_port_t', output: 'http_port_t     tcp    80, 81, 443, 488, 8008, 8009, 8443, 9000' } },
  'rhcsa-10-1': { comic: { title: '🐋 Podman Basics', panels: [ { emoji: '📥', text: '`podman pull ubi9` — pull UBI9 image (Red Hat Universal Base Image).' }, { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — launch interactive container with bash.' }, { emoji: '🗑️', text: '`podman rm mycontainer` — remove stopped container. `podman rmi image` — remove image.' } ] }, keyPoints: [ { title: 'Fundamental Podman commands', items: ['`podman pull image:tag` — pull image', '`podman run [options] image [cmd]` — create and start', '`podman ps` / `podman ps -a` — list containers', '`podman exec -it container bash` — shell in container'] }, { title: 'Podman vs Docker differences', items: ['Podman is **daemonless** — no root socket', 'Supports **rootless** containers for security', 'Compatible with Docker CLI (same syntax)', 'On RHEL9: Podman is the recommended tool'] } ], terminal: { prompt: '$ podman run -d --name webserver -p 8080:80 nginx:latest', output: 'abc123def456789...' } },
  'rhcsa-10-2': { comic: { title: '🗂️ Registry and Images', panels: [ { emoji: '🔍', text: '`podman search nginx` — search images in configured registries.' }, { emoji: '📤', text: '`podman push registry.example.com/myapp:v1.0` — upload image to registry.' } ] }, keyPoints: [ { title: 'Image management', items: ['`podman images` — list local images', '`podman tag src:tag dest:tag` — retag image', '`podman rmi image` — remove local image', '`podman image prune` — remove unused images'] }, { title: 'Registry and authentication', items: ['`podman login registry.redhat.io` — login to registry', 'Credentials in `~/.config/containers/auth.json`', 'Registries configured in `/etc/containers/registries.conf`'] } ], terminal: { prompt: '$ podman search --filter=is-official nginx | head -3', output: 'NAME                   DESCRIPTION                    STARS  OFFICIAL\ndocker.io/library/nginx  Official build of Nginx.       18000  [OK]' } },
  'rhcsa-10-3': { comic: { title: '📋 Containerfile (Dockerfile)', panels: [ { emoji: '🏗️', text: '`FROM ubi9` — first mandatory instruction: base image to start from.' }, { emoji: '🔨', text: '`podman build -t myhttpd:1.0 .` — builds the image from the current directory.' } ] }, keyPoints: [ { title: 'Containerfile instructions', items: ['`FROM image:tag` — base image (first instruction)', '`RUN command` — execute during build (creates layer)', '`COPY src dest` — copy local files into image', '`ENV VAR=value` — environment variable', '`EXPOSE port` — document port (does not open!)', '`CMD ["cmd", "arg"]` — default command (overridable)'] }, { title: 'Build best practices', items: ['Combine RUN into single layer: `RUN cmd1 && cmd2`', 'Cleanup in same RUN: `... && dnf clean all`', 'Use official base images (ubi9 for RHEL)'] } ], terminal: { prompt: '$ cat Containerfile', output: 'FROM ubi9\nRUN dnf install -y httpd && dnf clean all\nCOPY index.html /var/www/html/\nEXPOSE 80\nCMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]' } },
  'rhcsa-10-4': { comic: { title: '💾 Volumes and Container Networking', panels: [ { emoji: '🔗', text: '`-v /host/dir:/container/dir` — bind mount: container accesses host files.' }, { emoji: '🔐', text: 'With SELinux: `-v /data:/data:z` (shared) or `:Z` (exclusive). CRITICAL on RHEL!' } ] }, keyPoints: [ { title: 'Volumes and bind mounts', items: ['`-v /host:/container` — bind mount', '`-v /host:/container:ro` — read-only', '`-v /host:/container:z` — SELinux shared label', '`-v /host:/container:Z` — SELinux private label', '`podman volume create myvol` — Podman volume'] }, { title: 'Container persistence (systemd)', items: ['`podman generate systemd --name container --files`', 'Creates unit file to manage container as service', 'Copy to `~/.config/systemd/user/` (rootless)', '`loginctl enable-linger username` — start without login'] } ], terminal: { prompt: '$ podman run -d --name webapp -p 8080:80 -v /var/www/html:/usr/share/nginx/html:Z nginx', output: 'a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef12345678' } },

}
