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

  // ─── TOPIC 4: Local Storage — LVM ─────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 GPT Partitions',
      panels: [
        { emoji: '🖥️', text: '`lsblk` — shows all block devices with tree structure and mount points.' },
        { emoji: '🔍', text: '`blkid` — shows UUID, LABEL, and filesystem type of each partition.' },
        { emoji: '⚒️', text: '`parted /dev/sdb` — interactive tool to create/modify GPT partitions (recommended on RHEL9).' },
        { emoji: '📐', text: '`parted /dev/sdb mkpart primary xfs 1GiB 5GiB` — creates a partition from 1 to 5 GiB.' },
        { emoji: '🔄', text: '`partprobe /dev/sdb` — updates the kernel on the new partition table without rebooting.' },
      ],
    },
    keyPoints: [
      {
        title: 'Storage exploration',
        items: [
          '`lsblk` — device tree with sizes and mounts',
          '`lsblk -f` — adds UUID and filesystem type',
          '`blkid` — UUID, LABEL, filesystem type',
          '`fdisk -l` — list partitions (legacy, still used)',
          '`df -h` — used/free space for mounted filesystems',
        ],
      },
      {
        title: 'parted — essential commands',
        items: [
          '`parted /dev/sdb print` — show partition table',
          '`parted /dev/sdb mklabel gpt` — create GPT table',
          '`parted /dev/sdb mkpart primary xfs 1GiB 5GiB`',
          '`parted /dev/sdb rm 1` — remove partition 1',
          '`parted /dev/sdb set 1 lvm on` — set LVM flag',
        ],
      },
      {
        title: 'LVM partition type',
        items: [
          'To use LVM, the partition must have "Linux LVM" type',
          'With parted: `set N lvm on` after mkpart',
          'With fdisk: type `8e` (Linux LVM)',
          'Then run partprobe to update the kernel',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk -f /dev/sdb',
      output: 'NAME   FSTYPE LABEL UUID                                 MOUNTPOINT\nsdb\n├─sdb1 xfs          a1b2c3d4-...                          /data\n└─sdb2 LVM2_m       e5f6g7h8-...                          ',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🏗️ LVM — Physical and Volume Groups',
      panels: [
        { emoji: '1️⃣', text: '`pvcreate /dev/sdb1` — initializes the partition as an LVM Physical Volume.' },
        { emoji: '2️⃣', text: '`vgcreate datavg /dev/sdb1` — creates a Volume Group using the PV.' },
        { emoji: '➕', text: '`vgextend datavg /dev/sdc1` — adds an existing PV to the VG to increase space.' },
        { emoji: '📊', text: '`pvdisplay` / `vgdisplay` — shows detailed info about PVs and VGs.' },
        { emoji: '🔑', text: 'The order is ALWAYS: PV → VG → LV. Never skip a step!' },
      ],
    },
    keyPoints: [
      {
        title: 'Physical Volume (PV)',
        items: [
          '`pvcreate /dev/sdb1` — initialize PV',
          '`pvdisplay` — detailed info for all PVs',
          '`pvs` — compact PV summary',
          '`pvremove /dev/sdb1` — remove PV metadata',
          '`pvmove /dev/sdb1` — move data to other PVs',
        ],
      },
      {
        title: 'Volume Group (VG)',
        items: [
          '`vgcreate myvg /dev/sdb1 /dev/sdc1` — create VG',
          '`vgextend myvg /dev/sdd1` — add PV to existing VG',
          '`vgreduce myvg /dev/sdd1` — remove PV from VG',
          '`vgdisplay` — detailed VG info',
          '`vgs` — compact VG summary',
        ],
      },
      {
        title: 'Sizes and PE',
        items: [
          'PE = Physical Extent (LVM base unit, default 4MiB)',
          '`vgcreate -s 8M myvg /dev/sdb1` — custom PE size',
          '`vgdisplay` shows PE Free and PE Size',
          'Max size of an LV = PE Free of the VG',
        ],
      },
    ],
    terminal: {
      prompt: '$ pvcreate /dev/sdb1 && vgcreate datavg /dev/sdb1 && vgdisplay datavg',
      output: '  Physical volume "/dev/sdb1" successfully created.\n  Volume group "datavg" successfully created\n  --- Volume group ---\n  VG Name               datavg\n  VG Size               <10.00 GiB\n  PE Size               4.00 MiB\n  Free  PE / Size       2559 / <10.00 GiB',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '📦 LVM — Logical Volumes',
      panels: [
        { emoji: '3️⃣', text: '`lvcreate -L 2G -n datalv datavg` — creates a 2GiB LV in VG datavg.' },
        { emoji: '📁', text: '`mkfs.xfs /dev/datavg/datalv` — formats the LV. Then `mount ...`.' },
        { emoji: '📈', text: '`lvextend -L +1G -r /dev/datavg/datalv` — extends LV AND filesystem (-r = auto resize).' },
        { emoji: '🔍', text: 'XFS: `xfs_growfs /data` (requires mount point). ext4: `resize2fs /dev/datavg/datalv`.' },
        { emoji: '📊', text: '`lvdisplay` or `lvs` — displays all Logical Volumes and their properties.' },
      ],
    },
    keyPoints: [
      {
        title: 'lvcreate options',
        items: [
          '`-L 2G` — absolute size (GiB, MiB)',
          '`-l 100%FREE` — use all free space in the VG',
          '`-l 512` — 512 Physical Extents',
          '`-n name` — Logical Volume name',
          'Resulting device: `/dev/VGname/LVname`',
        ],
      },
      {
        title: 'LV + filesystem extension',
        items: [
          '`lvextend -L +1G /dev/vg/lv` — LV only (no fs)',
          '`lvextend -L +1G -r /dev/vg/lv` — LV + filesystem',
          'XFS: `xfs_growfs /mountpoint` (MUST be mounted)',
          'ext4: `resize2fs /dev/vg/lv`',
          '`lvresize -L 5G -r /dev/vg/lv` — resize to 5G',
        ],
      },
      {
        title: 'Complete LVM workflow',
        items: [
          '1. `pvcreate /dev/sdb1`',
          '2. `vgcreate myvg /dev/sdb1`',
          '3. `lvcreate -L 3G -n mylv myvg`',
          '4. `mkfs.xfs /dev/myvg/mylv`',
          '5. `mkdir /mydata && mount /dev/myvg/mylv /mydata`',
          '6. Add to `/etc/fstab` for persistence',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvcreate -L 3G -n datalv datavg && mkfs.xfs /dev/datavg/datalv',
      output: '  Logical volume "datalv" created.\nmeta-data=/dev/datavg/datalv     isize=512    agcount=4\ndata     =                       bsize=4096   blocks=786432\nnaming   =version 2              bsize=4096   ascii-ci=0\nlog      =internal log           bsize=4096   blocks=2560',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '📌 Mount, fstab and Swap',
      panels: [
        { emoji: '🔑', text: '`blkid` finds the UUID. Use UUID in fstab instead of /dev/sdb1 — UUID never changes!' },
        { emoji: '📝', text: 'fstab format: `UUID=xxx /mountpoint fstype options dump pass`.' },
        { emoji: '✅', text: '`mount -a` tests all fstab entries. If no error, config is correct.' },
        { emoji: '💫', text: 'Swap: `mkswap /dev/sdb2` → format. `swapon /dev/sdb2` → activate. Then add to fstab.' },
        { emoji: '📊', text: '`swapon --show` and `free -h` show available and used swap.' },
      ],
    },
    keyPoints: [
      {
        title: 'fstab — format and options',
        items: [
          'Fields: device mountpoint fstype options dump pass',
          '`defaults` = rw,suid,dev,exec,auto,nouser,async',
          '`nofail` — ignore errors at boot',
          '`_netdev` — wait for network (NFS/CIFS)',
          '`x-systemd.automount` — on-demand auto-mount',
          'dump=0 (no backup), pass=0 (no fsck)',
        ],
      },
      {
        title: 'Swap setup',
        items: [
          '`mkswap /dev/sdb2` — format as swap',
          '`swapon /dev/sdb2` — activate immediately',
          '`swapoff /dev/sdb2` — deactivate',
          'In fstab: `UUID=xxx none swap defaults 0 0`',
          '`swapon --show` — show active swap',
        ],
      },
      {
        title: 'fstab verification and debug',
        items: [
          '`mount -a` — mount everything in fstab (test)',
          '`mount -t xfs` — mount only xfs filesystems',
          '`umount /mountpoint` — unmount',
          '`umount -l /mountpoint` — lazy unmount',
          '`findmnt` — view all active mounts',
        ],
      },
    ],
    terminal: {
      prompt: '$ blkid /dev/datavg/datalv',
      output: '/dev/datavg/datalv: UUID="a1b2c3d4-e5f6-7890-abcd-efghij123456" TYPE="xfs"',
    },
  },

  // ─── TOPIC 5: File Systems ──────────────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 and XFS',
      panels: [
        { emoji: '🔵', text: '`mkfs.ext4 /dev/sdb1` — ext4 file system. `mkfs.xfs /dev/sdb1` — XFS file system (RHEL9 default).' },
        { emoji: '🔧', text: '`tune2fs -l /dev/sdb1` — shows ext4 params. `xfs_info /mountpoint` — shows XFS params.' },
        { emoji: '🔨', text: '`e2fsck /dev/sdb1` — check and repair ext4 (NOT mounted). `xfs_repair /dev/sdb1` — for XFS.' },
        { emoji: '📈', text: 'ext4 can shrink. XFS can only grow! `resize2fs` for ext4, `xfs_growfs /mount` for XFS.' },
        { emoji: '💡', text: 'XFS is optimized for large files and high concurrency. ext4 is more versatile for general use.' },
      ],
    },
    keyPoints: [
      {
        title: 'Filesystem creation',
        items: [
          '`mkfs.ext4 -L "datalabel" /dev/sdb1`',
          '`mkfs.xfs -L "xfslabel" /dev/sdb1`',
          '`mkfs -t ext4 /dev/sdb1` (equivalent)',
          '`-L label` — assign filesystem label',
          'The device must NOT be mounted during mkfs!',
        ],
      },
      {
        title: 'Filesystem info',
        items: [
          '`tune2fs -l /dev/sdb1` — ext4 metadata',
          '`xfs_info /mountpoint` — XFS metadata (requires mount)',
          '`dumpe2fs /dev/sdb1` — highly detailed ext4 info',
          '`df -Th` — filesystem type + space',
          '`stat /file` — inode, permissions, timestamp',
        ],
      },
      {
        title: 'Filesystem repair',
        items: [
          'ALWAYS unmount before repairing!',
          '`e2fsck -f /dev/sdb1` — force ext4 check',
          '`xfs_repair /dev/sdb1` — repair XFS',
          '`fsck /dev/sdb1` — generic (calls correct tool)',
          'Emergency: `xfs_repair -L /dev/sdb` (destroys journal)',
        ],
      },
    ],
    terminal: {
      prompt: '$ xfs_info /data',
      output: 'meta-data=/dev/sdb1  isize=512    agcount=4, agsize=655360 blks\n         =            sectsz=512   attr=2, projid32bit=1\ndata     =            bsize=4096   blocks=2621440, imaxpct=25\nnaming   =version 2  bsize=4096   ascii-ci=0, ftype=1\nlog      =internal   bsize=4096   blocks=2560, version=2',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔐 LUKS Encryption',
      panels: [
        { emoji: '🔒', text: '`cryptsetup luksFormat /dev/sdc1` — formats with LUKS encryption. Enter passphrase.' },
        { emoji: '🔓', text: '`cryptsetup open /dev/sdc1 myvol` — opens the container. Device: `/dev/mapper/myvol`.' },
        { emoji: '💻', text: '`mkfs.ext4 /dev/mapper/myvol` — then `mount /dev/mapper/myvol /secure`.' },
        { emoji: '📝', text: 'For automatic mount at boot: `/etc/crypttab` (device name passphrase) + `/etc/fstab`.' },
        { emoji: '🔑', text: '`cryptsetup luksAddKey /dev/sdc1` — adds a keyfile to bypass password at boot.' },
      ],
    },
    keyPoints: [
      {
        title: 'LUKS setup step-by-step',
        items: [
          '1. `cryptsetup luksFormat /dev/sdc1` (interactive)',
          '2. `cryptsetup open /dev/sdc1 volname`',
          '3. `mkfs.xfs /dev/mapper/volname`',
          '4. `mount /dev/mapper/volname /secure`',
          '5. Add to /etc/crypttab and /etc/fstab for persistence',
        ],
      },
      {
        title: '/etc/crypttab format',
        items: [
          'Format: `name device password options`',
          '`myvol /dev/sdc1 none` — asks for password at boot',
          '`myvol /dev/sdc1 /root/keyfile` — uses keyfile',
          '`myvol UUID=xxx none luks` — uses UUID',
          'After crypttab: `/etc/fstab` mounts `/dev/mapper/myvol`',
        ],
      },
      {
        title: 'LUKS management',
        items: [
          '`cryptsetup status myvol` — container status',
          '`cryptsetup luksAddKey /dev/sdc1` — adds key',
          '`cryptsetup luksRemoveKey /dev/sdc1` — removes key',
          '`cryptsetup luksClose myvol` — closes container',
          '`cryptsetup luksDump /dev/sdc1` — header info',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status myvol',
      output: '/dev/mapper/myvol is active and is in use.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits\n  device:  /dev/sdc1\n  offset:  32768 sectors',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🌐 NFS, CIFS and autofs',
      panels: [
        { emoji: '📡', text: '`mount -t nfs server:/export /mountpoint` — manually mounts an NFS share.' },
        { emoji: '🪟', text: '`mount -t cifs //server/share /mountpoint -o user=u,password=p` — Windows/Samba share.' },
        { emoji: '⚙️', text: 'For permanent NFS mount in fstab: `server:/export /mp nfs defaults 0 0`.' },
        { emoji: '🤖', text: 'autofs mounts on-demand: `/etc/auto.master` → `/misc /etc/auto.misc` → `cd server:/cdrom`.' },
        { emoji: '📦', text: 'Install: `nfs-utils` for NFS, `cifs-utils` for CIFS/Samba.' },
      ],
    },
    keyPoints: [
      {
        title: 'NFS client',
        items: [
          '`dnf install nfs-utils` — install NFS client',
          '`showmount -e server` — list available exports',
          '`mount -t nfs 192.168.1.10:/data /mnt/data`',
          '`mount -t nfs4 server:/data /mnt` — forces NFSv4',
          'fstab: `server:/data /mnt nfs defaults,_netdev 0 0`',
        ],
      },
      {
        title: 'CIFS/Samba client',
        items: [
          '`dnf install cifs-utils` — install CIFS client',
          '`mount -t cifs //srv/share /mnt -o user=u,pass=p`',
          'fstab: `//srv/share /mnt cifs credentials=/etc/creds 0 0`',
          'Credentials file: `username=u\\npassword=p`',
          '`chmod 600 /etc/creds` — protect the file!',
        ],
      },
      {
        title: 'autofs',
        items: [
          '`dnf install autofs` → `systemctl enable --now autofs`',
          '/etc/auto.master: `/misc /etc/auto.misc`',
          '/etc/auto.misc: `nfs server:/export` (mounts to /misc/nfs)',
          'Automatically unmounts after inactivity',
          '`automount -f -v` — debug autofs',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e nfsserver',
      output: 'Export list for nfsserver:\n/data/shared  192.168.1.0/24\n/home         *',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🔑 ACLs and Advanced Permissions',
      panels: [
        { emoji: '📋', text: '`getfacl file` — shows extended ACLs. The + in `ls -l` indicates the file has ACLs.' },
        { emoji: '➕', text: '`setfacl -m u:mario:rw file` — adds rw permissions for user mario on the file.' },
        { emoji: '👥', text: '`setfacl -m g:developers:rx /project` — permissions to the developers group.' },
        { emoji: '🔄', text: '`setfacl -m d:u:mario:rw /dir` — default ACL: new files will inherit them.' },
        { emoji: '🏷️', text: 'setGID on directory: `chmod g+s /shared` — new files inherit the group.' },
      ],
    },
    keyPoints: [
      {
        title: 'setfacl — main options',
        items: [
          '`-m user:name:perm` — modify/add user ACL',
          '`-m group:name:perm` — group ACL',
          '`-m other::perm` — others ACL',
          '`-x user:name` — remove user ACL',
          '`-b` — remove ALL ACLs',
          '`-R` — recursive on directory',
          '`-m d:user:name:perm` — default ACL',
        ],
      },
      {
        title: 'getfacl and ACL mask',
        items: [
          '`getfacl /path` — shows all ACLs',
          'The `mask` limits the maximum permissions for user/group',
          '`setfacl -m mask::rx /dir` — sets the mask',
          '`ls -l` shows `+` if extended ACLs are present',
          '`cp --preserve=all` preserves ACLs',
        ],
      },
      {
        title: 'Special permissions',
        items: [
          '**setUID** (4): execute as file owner (`chmod u+s`)',
          '**setGID** (2): execute as owner group, on dir inherits group (`chmod g+s`)',
          '**sticky bit** (1): only owner can delete files in /dir (`chmod +t`)',
          '`chmod 2775 /shared` — setGID + rwxrwxr-x',
        ],
      },
    ],
    terminal: {
      prompt: '$ setfacl -m u:mario:rw /project/file.txt && getfacl /project/file.txt',
      output: '# file: project/file.txt\n# owner: root\n# group: root\nuser::rw-\nuser:mario:rw-\ngroup::r--\nmask::rw-\nother::r--',
    },
  },

  // ─── TOPIC 6: System Maintenance ────────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Package Management with dnf',
      panels: [
        { emoji: '⬇️', text: '`dnf install httpd` — installs the httpd package and its dependencies automatically.' },
        { emoji: '🔍', text: '`dnf search keyword` — searches packages. `dnf info name` — details about a package.' },
        { emoji: '🔄', text: '`dnf update` — updates all packages. `dnf update name` — updates a specific one.' },
        { emoji: '❓', text: '`dnf provides /usr/bin/vim` — finds which package provides a file or command.' },
        { emoji: '📁', text: 'Repositories in `/etc/yum.repos.d/*.repo`. `dnf repolist` — lists active repos.' },
      ],
    },
    keyPoints: [
      {
        title: 'Essential dnf commands',
        items: [
          '`dnf install package` — install',
          '`dnf remove package` — remove (not dependencies)',
          '`dnf update` — update all',
          '`dnf search word` — search names and descriptions',
          '`dnf info package` — version, repo, size',
          '`dnf list installed` — installed packages',
          '`dnf provides /path/file` — who owns the file',
        ],
      },
      {
        title: 'Repository management',
        items: [
          '.repo files in `/etc/yum.repos.d/`',
          '`dnf repolist` — list enabled repos',
          '`dnf repolist all` — all including disabled',
          '`dnf config-manager --enable <repo>` — enable repo',
          '`dnf --disablerepo="*" --enablerepo=local install pkg`',
        ],
      },
      {
        title: 'Groups and history',
        items: [
          '`dnf group list` — list available groups',
          '`dnf group install "Development Tools"`',
          '`dnf history` — transaction history',
          '`dnf history undo <id>` — undo a transaction',
          '`dnf download package` — download RPM without installing',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides */semanage',
      output: 'policycoreutils-python-utils-3.4-1.el9.noarch : SELinux policy core python utilities\nRepo        : baseos',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '⚙️ rpm — Query and Verify',
      panels: [
        { emoji: '🔍', text: '`rpm -qa` — lists ALL installed packages. `rpm -qi name` — detailed info.' },
        { emoji: '📄', text: '`rpm -ql name` — lists the files included in the installed package.' },
        { emoji: '🔗', text: '`rpm -qf /usr/bin/ls` — which package installed this file?' },
        { emoji: '✅', text: '`rpm -V name` — verify integrity: checks if files have been modified.' },
        { emoji: '📦', text: '`rpm -ivh package.rpm` — install locally. `-i`=install, `-v`=verbose, `-h`=progress.' },
      ],
    },
    keyPoints: [
      {
        title: 'rpm query (-q)',
        items: [
          '`rpm -qa` — all installed packages',
          '`rpm -qi name` — package info',
          '`rpm -ql name` — package files (list)',
          '`rpm -qf /path/file` — owning package (file)',
          '`rpm -qd name` — only documentation files',
          '`rpm -qc name` — only configuration files',
          '`rpm -qR name` — required dependencies',
        ],
      },
      {
        title: 'Verify and local install',
        items: [
          '`rpm -V name` — verify file integrity',
          '`rpm -Va` — verify all packages',
          'Output: S=size, M=permissions, c=modified config',
          '`rpm -ivh file.rpm` — install local RPM',
          '`rpm --nodeps -ivh file.rpm` — ignore dependencies',
          '`rpm -e name` — remove package',
        ],
      },
      {
        title: 'Query uninstalled .rpm files',
        items: [
          '`rpm -qpi file.rpm` — info on RPM file',
          '`rpm -qpl file.rpm` — list files in RPM',
          'Useful to inspect an RPM before installing it',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /usr/bin/passwd',
      output: 'passwd-0.80-12.el9.x86_64',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🥾 GRUB2 and Kernel',
      panels: [
        { emoji: '📝', text: 'GRUB2 configuration is modified in `/etc/default/grub` (NOT in grub.cfg directly).' },
        { emoji: '🔄', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — regenerates grub.cfg after changes.' },
        { emoji: '⏱️', text: '`GRUB_TIMEOUT=5` — boot menu timeout. `GRUB_DEFAULT=0` — default entry.' },
        { emoji: '🔢', text: '`dnf update kernel-*` — updates the kernel. The old kernel remains as fallback.' },
        { emoji: '🎯', text: '`grubby --default-kernel` — shows the default kernel. `grubby --set-default` — changes it.' },
      ],
    },
    keyPoints: [
      {
        title: '/etc/default/grub',
        items: [
          '`GRUB_TIMEOUT=5` — menu time in seconds',
          '`GRUB_DEFAULT=saved` — remember last selection',
          '`GRUB_CMDLINE_LINUX="..."` — default kernel parameters',
          'After edits: regenerate grub.cfg with grub2-mkconfig',
          'UEFI: `/boot/efi/EFI/redhat/grub.cfg`',
        ],
      },
      {
        title: 'Kernel management',
        items: [
          '`rpm -qa kernel*` — installed kernels',
          '`uname -r` — current running kernel',
          '`dnf install kernel` — install new kernel',
          '`grubby --default-kernel` — default kernel',
          '`grubby --set-default /boot/vmlinuz-xxx`',
          'Old kernels: `dnf remove kernel-old`',
        ],
      },
      {
        title: '/etc/grub.d/ scripts',
        items: [
          'Scripts in /etc/grub.d/ generate grub.cfg',
          '10_linux — generates entries for Linux kernels',
          '40_custom — custom entries (editable)',
          'Do NOT edit grub.cfg directly!',
        ],
      },
    ],
    terminal: {
      prompt: '$ grub2-mkconfig -o /boot/grub2/grub.cfg',
      output: 'Generating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.14.0-362.el9.x86_64\nFound initrd image: /boot/initramfs-5.14.0-362.el9.x86_64.img\ndone',
    },
  },

  // ─── TOPIC 7: Basic Networking ───────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli and Network Configuration',
      panels: [
        { emoji: '📋', text: '`nmcli connection show` — lists all connections. `nmcli device status` — device status.' },
        { emoji: '🔧', text: '`nmcli con mod ens3 ipv4.addresses 192.168.1.100/24` — sets static IP on a connection.' },
        { emoji: '🔄', text: '`nmcli con up ens3` — applies changes. `nmcli con down ens3` — deactivates.' },
        { emoji: '🖥️', text: '`hostnamectl set-hostname server.example.com` — sets the hostname permanently.' },
        { emoji: '📁', text: '`/etc/hosts` — local resolution. `/etc/resolv.conf` — DNS servers.' },
      ],
    },
    keyPoints: [
      {
        title: 'nmcli — connections',
        items: [
          '`nmcli con show` — list connections',
          '`nmcli con show ens3` — connection details',
          '`nmcli con add type ethernet ifname ens3` — create new',
          '`nmcli con mod ens3 ipv4.method manual` — static IP',
          '`nmcli con mod ens3 ipv4.gateway 192.168.1.1`',
          '`nmcli con mod ens3 ipv4.dns "8.8.8.8 8.8.4.4"`',
        ],
      },
      {
        title: 'ip — modern commands',
        items: [
          '`ip addr show` — IP addresses of all interfaces',
          '`ip addr add 10.0.0.5/24 dev eth0` — adds IP (temporary)',
          '`ip route show` — routing table',
          '`ip link set eth0 up/down` — activate/deactivate',
          '`ss -tlnp` — listening TCP ports with processes',
        ],
      },
      {
        title: 'Hostname and DNS',
        items: [
          '`hostnamectl` — shows full hostname info',
          '`hostnamectl set-hostname name.domain`',
          '`/etc/hosts` — local IP-to-hostname mapping',
          '`/etc/resolv.conf` — nameservers, search domain',
          '`/etc/nsswitch.conf` — name resolution order',
          '`dig +short hostname` — DNS resolution test',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli con show ens3 | grep ipv4',
      output: 'ipv4.method:                            manual\nipv4.addresses:                         192.168.1.100/24\nipv4.gateway:                           192.168.1.1\nipv4.dns:                               8.8.8.8,8.8.4.4',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld',
      panels: [
        { emoji: '🏠', text: 'firewalld uses zones: "public" is the default. Every interface is assigned to a zone.' },
        { emoji: '🚪', text: '`firewall-cmd --add-service=http --permanent` — opens port 80. Then `--reload`.' },
        { emoji: '🔢', text: '`firewall-cmd --add-port=8080/tcp --permanent` — opens a specific port.' },
        { emoji: '📋', text: '`firewall-cmd --list-all` — shows everything configured in the current zone.' },
        { emoji: '⚡', text: 'Without `--permanent` the rule is only temporary (lost on reboot or --reload).' },
      ],
    },
    keyPoints: [
      {
        title: 'Service and port management',
        items: [
          '`--add-service=name` — opens by known service name',
          '`--remove-service=name` — closes service',
          '`--add-port=8443/tcp` — specific port',
          '`--remove-port=8443/tcp` — removes port',
          '`--permanent` — makes the rule persistent',
          '`--reload` — applies permanent rules',
        ],
      },
      {
        title: 'Zones and interfaces',
        items: [
          '`--list-all-zones` — all zones',
          '`--get-active-zones` — zones with assigned interfaces',
          '`--zone=internal --add-interface=eth1 --permanent`',
          '`--get-default-zone` — default zone',
          '`--set-default-zone=internal`',
        ],
      },
      {
        title: 'Rich rules and masquerade',
        items: [
          '`--add-masquerade` — enables NAT/masquerade',
          '`--add-rich-rule="rule family=ipv4 source address=10.0.0.0/8 accept"`',
          '`--query-service=ssh` — check if service is open',
          'Services defined in: `/usr/lib/firewalld/services/`',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --zone=public --list-all',
      output: 'public (active)\n  target: default\n  interfaces: ens3\n  services: cockpit dhcpv6-client http https ssh\n  ports: 8080/tcp\n  masquerade: no',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔐 SSH and File Transfer',
      panels: [
        { emoji: '🔑', text: '`ssh-keygen -t ed25519` — generates SSH key pair. Saves in `~/.ssh/id_ed25519`.' },
        { emoji: '📤', text: '`ssh-copy-id mario@server` — copies public key to server (adds to authorized_keys).' },
        { emoji: '🔒', text: 'In `/etc/ssh/sshd_config`: `PasswordAuthentication no` to force keys only.' },
        { emoji: '📁', text: '`scp -r /dir user@server:/dest` — recursive copy. `rsync -av /src/ server:/dst/` — incremental.' },
        { emoji: '🔧', text: '`~/.ssh/config` — configure SSH host aliases for faster connections.' },
      ],
    },
    keyPoints: [
      {
        title: 'SSH key authentication',
        items: [
          '`ssh-keygen -t ed25519 -C "comment"` — generates keys',
          'Private key: `~/.ssh/id_ed25519` (chmod 600!)',
          'Public key: `~/.ssh/id_ed25519.pub`',
          '`ssh-copy-id -i ~/.ssh/id_ed25519.pub user@host`',
          'authorized_keys on server: `~/.ssh/authorized_keys` (chmod 600)',
          '.ssh folder on server: chmod 700!',
        ],
      },
      {
        title: 'scp and rsync',
        items: [
          '`scp file user@host:/path` — copy single file',
          '`scp -r /dir user@host:/path` — copy directory',
          '`rsync -av /src/ user@host:/dst/` — incremental sync',
          '`rsync -avz` — adds compression',
          '`rsync --delete` — removes files not present in source',
          '`sftp user@host` — interactive SFTP session',
        ],
      },
      {
        title: '/etc/ssh/sshd_config',
        items: [
          '`PasswordAuthentication no` — disables password login',
          '`PermitRootLogin no` — disables direct root login',
          '`AllowUsers mario admin` — user whitelist',
          '`Port 22` — SSH port (change for security)',
          'After edits: `systemctl restart sshd`',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N ""',
      output: 'Generating public/private ed25519 key pair.\nYour identification has been saved in /home/mario/.ssh/id_ed25519\nYour public key has been saved in /home/mario/.ssh/id_ed25519.pub\nThe key fingerprint is:\nSHA256:abc123... mario@localhost',
    },
  },

  // ─── TOPIC 8: Users and Groups ───────────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 User Management',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — creates user mario with home and bash shell.' },
        { emoji: '🔑', text: '`passwd mario` — sets the password. Only root can change other users\' passwords.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — adds mario to wheel group (sudo). The -a is CRUCIAL!' },
        { emoji: '⏰', text: '`chage -M 90 mario` — password expires every 90 days. `-l mario` shows expiry info.' },
        { emoji: '🗑️', text: '`userdel -r mario` — deletes user AND their home. Without -r home remains.' },
      ],
    },
    keyPoints: [
      {
        title: 'useradd options',
        items: [
          '`-m` — create home directory',
          '`-s /bin/bash` — default shell',
          '`-u 1500` — specific UID',
          '`-g groupname` — primary group',
          '`-G grp1,grp2` — supplementary groups',
          '`-c "First Last"` — GECOS comment',
          '`-r` — system account (UID < 1000)',
          '`-M` — do NOT create home directory',
        ],
      },
      {
        title: 'usermod and userdel',
        items: [
          '`usermod -aG wheel mario` — add to group',
          '`usermod -s /sbin/nologin mario` — block shell',
          '`usermod -L mario` — lock account (! in shadow)',
          '`usermod -U mario` — unlock account',
          '`userdel mario` — remove user (not home)',
          '`userdel -r mario` — remove user + home',
        ],
      },
      {
        title: 'chage — password expiry',
        items: [
          '`chage -l mario` — show expiry info',
          '`chage -M 90 mario` — max password days',
          '`chage -m 7 mario` — min days between changes',
          '`chage -W 14 mario` — warning expiry (days)',
          '`chage -E 2024-12-31 mario` — account expiration',
          '`passwd -x 90 mario` — equivalent to chage -M',
        ],
      },
    ],
    terminal: {
      prompt: '$ useradd -m -u 1500 -s /bin/bash -c "Mario Rossi" mario && passwd mario',
      output: 'Changing password for user mario.\nNew password:\nRetype new password:\npasswd: all authentication tokens updated successfully.',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Groups and sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 1500 developers` — creates group with specific GID.' },
        { emoji: '👤', text: '`usermod -aG developers mario` — adds mario to group (supplementary).' },
        { emoji: '⚠️', text: 'WARNING: `usermod -G developers mario` (without -a) REMOVES other groups!' },
        { emoji: '🔐', text: '`visudo` — opens /etc/sudoers securely with syntax validation.' },
        { emoji: '📁', text: 'Files in `/etc/sudoers.d/` — modifications without touching main file (best practice).' },
      ],
    },
    keyPoints: [
      {
        title: 'Group management',
        items: [
          '`groupadd -g 1500 name` — create group',
          '`groupmod -n new-name` — rename group',
          '`groupdel name` — delete group',
          '`gpasswd -a mario developers` — add user',
          '`gpasswd -d mario developers` — remove user',
          '`id mario` — UID, GID and groups of mario',
          '`groups mario` — only group names',
        ],
      },
      {
        title: 'sudo and sudoers',
        items: [
          '`visudo` — safe editor for /etc/sudoers',
          'Format: `WHO HOST=(AS_WHO) COMMAND`',
          '`mario ALL=(ALL) ALL` — full sudo with password',
          '`mario ALL=(ALL) NOPASSWD:ALL` — without password',
          '`%wheel ALL=(ALL) ALL` — all users in wheel group',
          '`mario ALL=(ALL) /usr/bin/systemctl` — only systemctl',
        ],
      },
      {
        title: '/etc/sudoers.d/',
        items: [
          'Create files in /etc/sudoers.d/ instead of editing sudoers',
          '`echo "mario ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/mario`',
          '`chmod 440 /etc/sudoers.d/mario` — correct permissions',
          'Automatically included via #includedir',
          '`visudo -c` — validates sudoers syntax',
        ],
      },
    ],
    terminal: {
      prompt: '$ groupadd -g 1500 developers && usermod -aG developers mario && id mario',
      output: 'uid=1500(mario) gid=1500(mario) groups=1500(mario),1500(developers)',
    },
  },

  // ─── TOPIC 9: SELinux and Security ───────────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 SELinux Modes',
      panels: [
        { emoji: '🟢', text: 'Enforcing = SELinux is active and blocks violations. Default mode on RHEL.' },
        { emoji: '🟡', text: 'Permissive = SELinux logs violations but does NOT block. Great for debugging.' },
        { emoji: '🔴', text: 'Disabled = SELinux is off. Not recommended in production. Requires reboot to change.' },
        { emoji: '⚡', text: '`setenforce 0/1` — switch between enforcing/permissive WITHOUT reboot (temporary).' },
        { emoji: '📝', text: 'Permanent config: `SELINUX=enforcing` in `/etc/selinux/config`.' },
      ],
    },
    keyPoints: [
      {
        title: 'SELinux mode control',
        items: [
          '`getenforce` — Enforcing / Permissive / Disabled',
          '`sestatus` — full info on SELinux',
          '`setenforce 1` — enforcing (temporary)',
          '`setenforce 0` — permissive (temporary, for debug)',
          '`/etc/selinux/config` — permanent configuration',
          'Switching from/to disabled requires reboot + autorelabel',
        ],
      },
      {
        title: 'Policy types on RHEL',
        items: [
          '**targeted** — RHEL default: protects specific daemons',
          '**mls** — Multi-Level Security (high security)',
          '**minimum** — minimal policy',
          '`SELINUXTYPE=targeted` in /etc/selinux/config',
          '`semanage` and `restorecon` require policy-targeted',
        ],
      },
      {
        title: 'Essential SELinux logging',
        items: [
          '`/var/log/audit/audit.log` — main log (AVC denials)',
          '`journalctl | grep AVC` — denials in journal',
          '`ausearch -m AVC` — search AVC in audit log',
          '`sealert -a /var/log/audit/audit.log` — guided analysis',
          'Install: `dnf install setroubleshoot-server`',
        ],
      },
    ],
    terminal: {
      prompt: '$ sestatus',
      output: 'SELinux status:                 enabled\nSELinuxfs mount:                /sys/fs/selinux\nSELinux mount point:            /sys/fs/selinux\nLoaded policy name:             targeted\nCurrent mode:                   enforcing\nMode from config file:          enforcing\nPolicy MLS status:              enabled\nPolicy deny_unknown status:     allowed',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ File and Process Contexts',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — shows SELinux context: user:role:type:level.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — restores default contexts (PERSISTENT and recommended).' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — adds permanent rule.' },
        { emoji: '⚡', text: '`chcon -t httpd_sys_content_t /web/file.html` — changes context temporarily (lost with restorecon).' },
        { emoji: '📊', text: 'mv keeps the old context; cp creates with destination context. Use restorecon after mv!' },
      ],
    },
    keyPoints: [
      {
        title: 'Viewing contexts',
        items: [
          '`ls -Z file` — file context',
          '`ls -Zd /directory` — directory context',
          '`ps -eZ | grep httpd` — process context',
          '`id -Z` — current user context',
          'Format: user:role:type:sensitivity_level',
          'The type (e.g. httpd_sys_content_t) is the most critical field',
        ],
      },
      {
        title: 'Modifying contexts',
        items: [
          '`restorecon /path` — restores default context',
          '`restorecon -Rv /path` — recursive and verbose',
          '`chcon -t type /file` — changes temporarily',
          '`semanage fcontext -a -t type "/path(/.*)?"` — permanent rule',
          'Always use: semanage fcontext + restorecon (NOT just chcon)',
        ],
      },
      {
        title: 'Correct workflow for new paths',
        items: [
          '1. `semanage fcontext -a -t httpd_sys_content_t "/data/web(/.*)?"` — add rule',
          '2. `restorecon -Rv /data/web` — apply to existing files',
          '3. Verify: `ls -Z /data/web`',
          'This way rules survive reboot and future restorecon',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 SELinux Booleans and Ports',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — list all booleans. `getsebool httpd_can_network_connect` — specific state.' },
        { emoji: '🔄', text: '`setsebool -P httpd_can_network_connect on` — enables permanently (-P = persistent).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — shows ports assigned to http_port_t type.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8443` — adds port 8443 for httpd.' },
        { emoji: '🔍', text: '`semanage boolean -l | grep httpd` — booleans related to httpd with description.' },
      ],
    },
    keyPoints: [
      {
        title: 'SELinux Booleans',
        items: [
          '`getsebool -a` — all booleans',
          '`getsebool name` — a boolean\'s state',
          '`setsebool name on` — enable (temporary)',
          '`setsebool -P name on` — enable permanently',
          '`semanage boolean -m --on name` — permanent alternative',
          'Common booleans: httpd_can_network_connect, ftpd_anon_write, samba_enable_home_dirs',
        ],
      },
      {
        title: 'SELinux port management',
        items: [
          '`semanage port -l` — all port-type assignments',
          '`semanage port -a -t type -p tcp PORT` — adds port',
          '`semanage port -d -t type -p tcp PORT` — removes port',
          '`semanage port -m -t type -p tcp PORT` — modifies port',
          'Required if a service uses a non-standard port',
        ],
      },
      {
        title: 'Complete SELinux debug',
        items: [
          '1. `setenforce 0` — permissive for diagnostics',
          '2. Check `/var/log/audit/audit.log` for AVC',
          '3. `sealert -a /var/log/audit/audit.log`',
          '4. Apply fix (boolean, context, port)',
          '5. `setenforce 1` — return enforcing',
          '6. Verify the service works',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t     tcp    80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Containers with Podman ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Podman Basics',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — downloads the UBI9 image (Red Hat Universal Base Image).' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — launches interactive container with bash shell.' },
        { emoji: '🔍', text: '`podman ps` — running containers. `podman ps -a` — all, including stopped ones.' },
        { emoji: '⚡', text: '`podman exec mycontainer ls /etc` — executes command in an already running container.' },
        { emoji: '🗑️', text: '`podman rm mycontainer` — deletes stopped container. `podman rmi image` — deletes image.' },
      ],
    },
    keyPoints: [
      {
        title: 'Fundamental Podman commands',
        items: [
          '`podman pull image:tag` — downloads image',
          '`podman run [options] image [cmd]` — creates and starts',
          '`podman ps` / `podman ps -a` — list containers',
          '`podman images` — list local images',
          '`podman exec -it container bash` — shell in container',
          '`podman stop/start/restart container`',
          '`podman rm container` / `podman rmi image`',
        ],
      },
      {
        title: 'Essential run options',
        items: [
          '`-d` — detached (background)',
          '`-it` — interactive + pseudo-TTY',
          '`--name mycontainer` — custom name',
          '`-p 8080:80` — maps port host:container',
          '`-v /host/path:/container/path` — bind mount',
          '`-e VAR=value` — environment variable',
          '`--rm` — remove container when stopped',
        ],
      },
      {
        title: 'Podman vs Docker differences',
        items: [
          'Podman is **daemonless** — no root socket',
          'Supports **rootless** containers for security',
          'Compatible with Docker CLI (same syntax)',
          '`podman generate systemd` — generates unit file',
          'On RHEL9: Podman is the recommended tool',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d --name webserver -p 8080:80 nginx:latest',
      output: 'Trying to pull docker.io/library/nginx:latest...\nGetting image source signatures\n...Done\nabc123def456789...',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Registries and Images',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — searches images in configured registries.' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — private registry auth. Saves token locally.' },
        { emoji: '🏷️', text: '`podman tag myapp:latest registry.example.com/myapp:v1.0` — assigns tag for push.' },
        { emoji: '📤', text: '`podman push registry.example.com/myapp:v1.0` — uploads image to registry.' },
        { emoji: '🔍', text: '`skopeo inspect docker://registry.redhat.io/ubi9` — image info without downloading.' },
      ],
    },
    keyPoints: [
      {
        title: 'Image management',
        items: [
          '`podman images` — list local images',
          '`podman image inspect name` — detailed metadata',
          '`podman image history name` — image layers',
          '`podman tag source:tag dest:tag` — rename/add tag',
          '`podman rmi image` — removes local image',
          '`podman image prune` — removes unused images',
        ],
      },
      {
        title: 'Registry and authentication',
        items: [
          '`podman login registry.redhat.io` — registry login',
          '`podman logout registry.redhat.io` — logout',
          'Credentials in `~/.config/containers/auth.json`',
          'Configured registries: `/etc/containers/registries.conf`',
          '"short-name" rule: `ubi9` → searches in configured registries',
        ],
      },
      {
        title: 'Push/pull workflow',
        items: [
          '1. `podman login registry.example.com`',
          '2. `podman build -t myapp:1.0 .`',
          '3. `podman tag myapp:1.0 registry.example.com/team/myapp:1.0`',
          '4. `podman push registry.example.com/team/myapp:1.0`',
          '`skopeo copy` — copy between registries without download',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -3',
      output: 'NAME                   DESCRIPTION                    STARS  OFFICIAL\ndocker.io/library/nginx  Official build of Nginx.       18000  [OK]\nquay.io/nginx/nginx-ingress  NGINX and F5 Ingress...       100',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — first mandatory instruction: base image to start from.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd && dnf clean all` — executes commands during build.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — copies local files into image. COPY is preferred to ADD.' },
        { emoji: '🚪', text: '`EXPOSE 80` — documents the port. `CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]` — default cmd.' },
        { emoji: '🔨', text: '`podman build -t myhttpd:1.0 .` — builds the image from the current directory.' },
      ],
    },
    keyPoints: [
      {
        title: 'Containerfile instructions',
        items: [
          '`FROM image:tag` — base image (first instruction)',
          '`RUN command` — executes during build (creates layer)',
          '`COPY src dest` — copies local files into the image',
          '`ADD src dest` — like COPY + URL + auto-extract tar',
          '`ENV VAR=value` — environment variable',
          '`EXPOSE port` — documents port (does not open it!)',
          '`CMD ["cmd", "arg"]` — default command (overridable)',
          '`ENTRYPOINT ["cmd"]` — fixed entry point',
        ],
      },
      {
        title: 'COPY vs ADD vs ENTRYPOINT vs CMD',
        items: [
          'COPY: local files/dirs only (recommended)',
          'ADD: adds URL and auto-extracts .tar (use only if needed)',
          'ENTRYPOINT: always executed, not easily overridden',
          'CMD: default arguments (overridable with podman run args)',
          'Combo: ENTRYPOINT=["/app"] + CMD=["--help"]',
        ],
      },
      {
        title: 'Build best practices',
        items: [
          'Combine RUN into a single layer: `RUN cmd1 && cmd2`',
          'Cleanup in the same RUN: `... && dnf clean all`',
          'Use .dockerignore to exclude unnecessary files',
          'Use official base images (ubi9 for RHEL)',
          '`podman build --no-cache -t app:1.0 .` — clean build',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd && dnf clean all\nCOPY index.html /var/www/html/\nEXPOSE 80\nCMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Volumes and Container Networking',
      panels: [
        { emoji: '🔗', text: '`-v /host/dir:/container/dir` — bind mount: the container accesses host files.' },
        { emoji: '🔐', text: 'With SELinux: `-v /data:/data:z` (shared) or `:Z` (exclusive use). CRITICAL on RHEL!' },
        { emoji: '🔌', text: '`-p 8080:80` — maps host port 8080 to container port 80.' },
        { emoji: '📦', text: '`podman volume create mydata` — volume managed by Podman (more portable than bind mount).' },
        { emoji: '🌐', text: 'Containers in the same pod communicate via localhost. `--network host` uses host network.' },
      ],
    },
    keyPoints: [
      {
        title: 'Volumes and bind mount',
        items: [
          '`-v /host:/container` — bind mount',
          '`-v /host:/container:ro` — read-only',
          '`-v /host:/container:z` — SELinux shared label',
          '`-v /host:/container:Z` — SELinux private label',
          '`podman volume create myvol` — Podman volume',
          '`-v myvol:/container/path` — use Podman volume',
          '`podman volume ls` / `podman volume rm`',
        ],
      },
      {
        title: 'Port mapping and networking',
        items: [
          '`-p HOST_PORT:CONTAINER_PORT` — maps port',
          '`-p 0.0.0.0:8080:80` — specific host interface',
          '`--network host` — shares host network',
          '`--network bridge` — bridge network (default)',
          '`-p 8080:80/udp` — for UDP protocol',
          '`podman port container` — shows active mappings',
        ],
      },
      {
        title: 'Container persistence (systemd)',
        items: [
          '`podman generate systemd --name container --files`',
          'Creates unit file to manage container as a service',
          'Copy to `~/.config/systemd/user/` (rootless)',
          '`systemctl --user enable --now container-name`',
          '`loginctl enable-linger username` — start without login',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d --name webapp -p 8080:80 -v /var/www/html:/usr/share/nginx/html:Z nginx',
      output: 'a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef12345678',
    },
  },

}

