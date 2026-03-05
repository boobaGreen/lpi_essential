export const topic5Quizzes = [
  {
    "lessonId": "5-1",
    "question": "What UID does the root user have?",
    "options": [
      "1",
      "0",
      "1000",
      "999"
    ],
    "correct": 1,
    "explanation": "The root user always has UID 0."
  },
  {
    "lessonId": "5-1",
    "question": "Which command allows you to run commands as root?",
    "options": [
      "on",
      "I sweat",
      "root",
      "admin"
    ],
    "correct": 1,
    "explanation": "sudo runs a single command with root privileges, using your password."
  },
  {
    "lessonId": "5-1",
    "question": "su - (with the hyphen) goes:",
    "options": [
      "Only change user",
      "Switch users and load their complete environment",
      "Create a new user",
      "Delete a user"
    ],
    "correct": 1,
    "explanation": "su - simulates a full login of the target user, loading all environment variables."
  },
  {
    "lessonId": "5-1",
    "question": "/etc/sudoers is modified with:",
    "options": [
      "dwarf",
      "vim",
      "visudo",
      "chmod"
    ],
    "correct": 2,
    "explanation": "visudo is the safe way to edit /etc/sudoers: check the syntax before saving."
  },
  {
    "lessonId": "5-1",
    "question": "The principle of \"least privilege\" means:",
    "options": [
      "Always give root",
      "Give only the necessary permissions",
      "Have no password",
      "Always use sudo"
    ],
    "correct": 1,
    "explanation": "Give users and processes only the privileges strictly necessary for their task."
  },
  {
    "lessonId": "5-1",
    "question": "sudo compared to su has the advantage of:",
    "options": [
      "Do not ask for passwords",
      "Be traceable in the logs",
      "Be faster",
      "Do not ask for privileges"
    ],
    "correct": 1,
    "explanation": "sudo records each command in the log (/var/log/auth.log), making actions traceable."
  },
  {
    "lessonId": "5-1",
    "question": "The \"id\" command shows:",
    "options": [
      "The hostname",
      "The user's UID, GID, and groups",
      "The PID",
      "The kernel version"
    ],
    "correct": 1,
    "explanation": "id shows UID, GID and all groups the user belongs to."
  },
  {
    "lessonId": "5-1",
    "question": "System users have UID:",
    "options": [
      "0",
      "From 1 to 999",
      "From 1000 and up",
      "Negatives"
    ],
    "correct": 1,
    "explanation": "System users (daemons, services) generally have UIDs from 1 to 999."
  },
  {
    "lessonId": "5-1",
    "question": "The user \"nobody\" is used for:",
    "options": [
      "The administrator",
      "Processes that do not require privileges",
      "The backups",
      "Remote login"
    ],
    "correct": 1,
    "explanation": "nobody (UID 65534) is used for processes that must run with least privilege."
  },
  {
    "lessonId": "5-1",
    "question": "Authentication logs are located in:",
    "options": [
      "/var/log/auth.log",
      "/etc/log/auth",
      "/tmp/auth.log",
      "/home/log"
    ],
    "correct": 0,
    "explanation": "/var/log/auth.log (Debian) or /var/log/secure (RHEL) contains authentication logs."
  },
  {
    "lessonId": "5-2",
    "question": "In which file are encrypted passwords stored?",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/etc/login"
    ],
    "correct": 1,
    "explanation": "/etc/shadow contains encrypted passwords and is readable only by root."
  },
  {
    "lessonId": "5-2",
    "question": "Which command creates a new user with home directory?",
    "options": [
      "adduser",
      "useradd -m",
      "newuser",
      "mkuser"
    ],
    "correct": 1,
    "explanation": "useradd -m creates the user and their home directory. -m is essential."
  },
  {
    "lessonId": "5-2",
    "question": "The format of /etc/passwd is:",
    "options": [
      "user:password:home",
      "user:x:UID:GID:info:home:shell",
      "user:UID:shell",
      "name:hash:salt"
    ],
    "correct": 1,
    "explanation": "user:x:UID:GID:gecos:home:shell — the x indicates that the password is in /etc/shadow."
  },
  {
    "lessonId": "5-2",
    "question": "usermod -aG usergroup does:",
    "options": [
      "Removes the user from the group",
      "Adds the user to the additional group",
      "Change the primary group",
      "Create a new group"
    ],
    "correct": 1,
    "explanation": "-aG (append Group) adds the user to an additional group without removing him from the others."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/skel contains:",
    "options": [
      "Passwords",
      "Templates for new home directories",
      "The groups",
      "The logs"
    ],
    "correct": 1,
    "explanation": "/etc/skel contains the files copied to the home of each new user (e.g. .bashrc)."
  },
  {
    "lessonId": "5-2",
    "question": "userdel -r removes:",
    "options": [
      "Only the user",
      "The user and his home directory",
      "Only the home",
      "Just the password"
    ],
    "correct": 1,
    "explanation": "-r also removes the user's home directory and mail spool."
  },
  {
    "lessonId": "5-2",
    "question": "user passwd is used for:",
    "options": [
      "Create the user",
      "Change the user's password",
      "Delete the user",
      "Block the user"
    ],
    "correct": 1,
    "explanation": "passwd changes a user's password. Root can change that of any user."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/group contains:",
    "options": [
      "Group passwords",
      "The list of groups and their members",
      "File permissions",
      "The network configuration"
    ],
    "correct": 1,
    "explanation": "/etc/group lists system groups and their additional members."
  },
  {
    "lessonId": "5-2",
    "question": "groupadd groupname create:",
    "options": [
      "A user",
      "A new group",
      "A file",
      "A directory"
    ],
    "correct": 1,
    "explanation": "groupadd creates a new group in the system."
  },
  {
    "lessonId": "5-2",
    "question": "Which field in /etc/passwd contains the login shell?",
    "options": [
      "The first",
      "The third",
      "The penultimate",
      "The last one"
    ],
    "correct": 3,
    "explanation": "The last (7th) field of /etc/passwd specifies the user's login shell."
  },
  {
    "lessonId": "5-2",
    "question": "/sbin/nologin as a shell means:",
    "options": [
      "Root shell",
      "The user cannot log in interactively",
      "Emergency shell",
      "Shell without password"
    ],
    "correct": 1,
    "explanation": "/sbin/nologin prevents interactive login (used for service accounts)."
  },
  {
    "lessonId": "5-2",
    "question": "Each user has a group:",
    "options": [
      "Optional",
      "Primary (mandatory)",
      "Only if admin",
      "Only if he has home"
    ],
    "correct": 1,
    "explanation": "Each user has a primary group (GID in /etc/passwd) and can have additional groups."
  },
  {
    "lessonId": "5-3",
    "question": "What octal value corresponds to rwxr-xr-- permissions?",
    "options": [
      "644",
      "755",
      "754",
      "764"
    ],
    "correct": 2,
    "explanation": "rwx=7, r-x=5, r--=4 → 754."
  },
  {
    "lessonId": "5-3",
    "question": "Which command changes the owner of a file?",
    "options": [
      "chmod",
      "chown",
      "chgrp",
      "chperm"
    ],
    "correct": 1,
    "explanation": "chown (change owner) changes the owner. chmod changes permissions."
  },
  {
    "lessonId": "5-3",
    "question": "What does the chmod u+x script.sh command do?",
    "options": [
      "Removes execute permission",
      "Adds execute permission to owner",
      "Adds execute permission to all",
      "Change the owner"
    ],
    "correct": 1,
    "explanation": "u+x adds (+) execute permission (x) to the owner (u=user)."
  },
  {
    "lessonId": "5-3",
    "question": "What special permission causes new files in a directory to inherit the group?",
    "options": [
      "Sticky Bits",
      "SUID",
      "SGID",
      "ACL"
    ],
    "correct": 2,
    "explanation": "SGID on a directory causes new files to inherit the directory's group."
  },
  {
    "lessonId": "5-3",
    "question": "The octal value of r (read) is:",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "correct": 2,
    "explanation": "r=4, w=2, x=1. The values ​​add: rw=6, rwx=7."
  },
  {
    "lessonId": "5-3",
    "question": "chmod 644 sets:",
    "options": [
      "rwxr-xr-x",
      "rw-r--r--",
      "rwx------",
      "rw-rw-rw-"
    ],
    "correct": 1,
    "explanation": "6=rw-, 4=r--, 4=r-- → rw-r--r-- (owner reads/writes, others only read)."
  },
  {
    "lessonId": "5-3",
    "question": "The Sticky Bit on /tmp prevents:",
    "options": [
      "Reading from others",
      "The deletion of other people's files",
      "The writing",
      "The execution"
    ],
    "correct": 1,
    "explanation": "The Sticky Bit prevents a user from deleting files they don't own in /tmp."
  },
  {
    "lessonId": "5-3",
    "question": "umask 022 produces default permissions for files of:",
    "options": [
      "777",
      "755",
      "644",
      "600"
    ],
    "correct": 2,
    "explanation": "For files: 666 - 022 = 644 (rw-r--r--). For directories: 777 - 022 = 755."
  },
  {
    "lessonId": "5-3",
    "question": "chgrp changes:",
    "options": [
      "The owner",
      "The ownership group",
      "The permits",
      "The name of the file"
    ],
    "correct": 1,
    "explanation": "chgrp (change group) changes the group that owns a file."
  },
  {
    "lessonId": "5-3",
    "question": "The SUID on an executable makes it run with permissions:",
    "options": [
      "Of the user who runs it",
      "Of the owner of the file",
      "Always root",
      "Of the group"
    ],
    "correct": 1,
    "explanation": "SUID makes the program run with the file owner's permissions (e.g. passwd has SUID root)."
  },
  {
    "lessonId": "5-3",
    "question": "chmod o-w file removes:",
    "options": [
      "Writing for everyone",
      "Writing for \"others\"",
      "Reading for \"others\"",
      "Running for \"owner\""
    ],
    "correct": 1,
    "explanation": "o=others, -w=remove writing. Remove write permission for \"others\"."
  },
  {
    "lessonId": "5-3",
    "question": "ls -l displays permissions in the format:",
    "options": [
      "Octal (755)",
      "Symbolic (rwxr-xr-x)",
      "Tracks",
      "Hexadecimal"
    ],
    "correct": 1,
    "explanation": "ls -l displays permissions in symbolic format: rwxr-xr-x."
  },
  {
    "lessonId": "5-3",
    "question": "A file with 700 permissions is only accessible by:",
    "options": [
      "Everyone",
      "The owner",
      "The group",
      "Root"
    ],
    "correct": 1,
    "explanation": "700 = rwx------ — only the owner has permissions (and root bypasses everything)."
  },
  {
    "lessonId": "5-4",
    "question": "What type of link can cross different filesystems?",
    "options": [
      "Hard links",
      "Symbolic links",
      "Both",
      "Nobody"
    ],
    "correct": 1,
    "explanation": "Symbolic links can cross different file systems. Hard links are not."
  },
  {
    "lessonId": "5-4",
    "question": "What happens when you delete the target file of a hard link?",
    "options": [
      "The link becomes \"broken\"",
      "The file remains accessible via the link",
      "The link is also deleted",
      "The system fails"
    ],
    "correct": 1,
    "explanation": "With hard links, the file remains accessible as long as at least one link to the inode exists."
  },
  {
    "lessonId": "5-4",
    "question": "ln -s target link creates:",
    "options": [
      "A hard link",
      "A symbolic link",
      "One copy",
      "An alias"
    ],
    "correct": 1,
    "explanation": "-s indicates a symbolic link. Without -s, ln creates a hard link."
  },
  {
    "lessonId": "5-4",
    "question": "A \"broken\" symbolic link is one whose:",
    "options": [
      "Permission is denied",
      "Target file has been deleted",
      "Inode is corrupt",
      "Filesystem is full"
    ],
    "correct": 1,
    "explanation": "A symlink becomes \"broken\" when the target file no longer exists."
  },
  {
    "lessonId": "5-4",
    "question": "A hard link points to:",
    "options": [
      "A path",
      "An inode",
      "Another link",
      "A directory"
    ],
    "correct": 1,
    "explanation": "A hard link is an additional name that points to the same inode as the original file."
  },
  {
    "lessonId": "5-4",
    "question": "Can you create hard links to directories?",
    "options": [
      "Yes, always",
      "No (normally)",
      "Only root can",
      "Only with -d"
    ],
    "correct": 1,
    "explanation": "Hard links to directories are not allowed to avoid loops in the filesystem."
  },
  {
    "lessonId": "5-4",
    "question": "ls -i shows:",
    "options": [
      "The file type",
      "The inode number",
      "The owner",
      "The creation date"
    ],
    "correct": 1,
    "explanation": "ls -i displays the inode number of each file."
  },
  {
    "lessonId": "5-4",
    "question": "readlink shows:",
    "options": [
      "The contents of the file",
      "The target of a symbolic link",
      "The permits",
      "The owner"
    ],
    "correct": 1,
    "explanation": "readlink shows the file/path to which a symbolic link points."
  },
  {
    "lessonId": "5-4",
    "question": "Two hard links to the same file have:",
    "options": [
      "Different inodes",
      "The same inode",
      "Different contents",
      "Different owners"
    ],
    "correct": 1,
    "explanation": "Hard links share the same inode. They are indistinguishable from the \"original\" file."
  },
  {
    "lessonId": "5-4",
    "question": "A symbolic link has size:",
    "options": [
      "Zero bytes",
      "Same as target",
      "Equal to the target path length",
      "4096 bytes"
    ],
    "correct": 2,
    "explanation": "The size of a symlink is the length of the target path (e.g. /etc/passwd = 11 bytes)."
  }
];
