// LPIC-1 102 Quiz Pool — English — Topic 110 (Security)

export const lpic1_102_topic6Quizzes_en = [
  // ─── 110.1 Perform security administration tasks (7 questions) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Which command allows you to find all files in the system that have the SUID bit set?',
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: 'find with -perm /4000 (or -4000) searches for files with the SUID bit set.'
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Which command is highly recommended for modifying the /etc/sudoers file to avoid syntax errors?',
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: 'visudo performs a syntax check before saving, preventing errors that could lock out sudo access.'
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows a list of the last logged-in users and their login times?',
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: 'The `last` command searches through the /var/log/wtmp file to show user login history.',
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'How do you grant administrative privileges to a user in the /etc/sudoers file using a group name?',
    options: ['ADMIN ALL=(ALL) ALL', '%admin ALL=(ALL) ALL', 'group admin: ALL', '@admin ALL=(ALL) ALL'],
    correct: 1,
    explanation: 'The `%` prefix in the sudoers file indicates that the following name is a system group.',
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Which command is used to list all the open files and the processes that opened them, often used for security auditing?',
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: '`lsof` (List Open Files) is an essential tool for verifying which process is accessing specific files or sockets.',
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Which utility is used to limit the maximum number of processes opened by a user in the current shell?',
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: 'ulimit (user limit) allows setting resource limits for the shell and its children.'
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'In which file can you set persistent per-user resource limits like maximum file size or number of logins?',
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: '/etc/security/limits.conf is used by the pam_limits module to enforce system resources.',
  },

  // ─── 110.2 Setup host security (6 questions) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'What is the purpose of the "Sticky Bit" set on a directory like /tmp do?',
    options: [
      'Makes files in the directory immutable',
      'Allows only the file owner (or root) to delete or rename the file',
      'Automatically encrypts all files created inside',
      'Ensures the directory always stays in RAM'
    ],
    correct: 1,
    explanation: 'The Sticky Bit on world-writable directories ensures users cannot delete each other\'s files.'
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Which file is used to explicitly deny access to services protected by TCP Wrappers?',
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: 'TCP Wrappers uses /etc/hosts.allow and /etc/hosts.deny for access control.'
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Which command identifies which network ports are currently open and listening on your server?',
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', 'All of the above'],
    correct: 3,
    explanation: '`nmap`, `ss`, and `netstat` can all be used to audit listening network services.',
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Which GnuPG utility is used to encrypt a file symmetrically (using a passphrase)?',
    options: [
      'gpg --gen-key',
      'gpg -c file',
      'gpg --encrypt file',
      'gpg --sign file'
    ],
    correct: 1,
    explanation: 'The -c (symmetric) option encrypts the file asking for a manual passphrase.'
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'How do you list all public keys in your GPG keyring?',
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: '`gpg --list-keys` (or `gpg -k`) shows the public keys currently in your local store.',
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Shadow passwords solve which security issue of traditional /etc/passwd files?',
    options: [
      'They prevent users from logging in multiple times',
      'They move encrypted hashes to a file readable only by root',
      'They automatically enforce complex passwords',
      'They encrypt the username'
    ],
    correct: 1,
    explanation: '/etc/passwd is world-readable, whereas /etc/shadow is restricted to root, protecting hashes from offline cracking.',
  },

  // ─── 110.3 Setup user level security (7 questions) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "What is the effect of the 'PermitRootLogin no' setting in the sshd_config file?",
    options: [
      'Prevents any user from connecting as root via SSH',
      'Requires a special password for the root user',
      'Allows root access only via public keys',
      'Completely disables the root account on the system'
    ],
    correct: 0,
    explanation: 'This directive prevents brute-force attacks on the root account over the network.'
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "What is the purpose of the 'ssh-agent' command?",
    options: [
      'To encrypt the entire hard drive',
      "To store decrypted private keys so you don't re-enter the passphrase for every connection",
      'To generate a new SSH key pair',
      'To monitor failed SSH login attempts'
    ],
    correct: 1,
    explanation: 'The SSH agent keeps keys in memory during the user session.'
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Which tool is used to generate a new SSH public/private key pair?',
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: '`ssh-keygen` is the standard tool to create authentication keys for SSH.',
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Where is the public key of a user typically stored on a remote server to allow passwordless login?',
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: 'The `authorized_keys` file contains all the public keys that are allowed to log in as that user.',
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'What is the default filename for a user\'s RSA private key?',
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: '`id_rsa` is the standard name for the private part of an RSA key pair.',
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to easily copy your SSH public key to a remote server?',
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: '`ssh-copy-id` handles the connection and appends your public key to the remote authorized_keys file.',
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Which setting in sshd_config should be set to "no" to enforce key-based authentication ONLY?',
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: 'Setting `PasswordAuthentication no` disables password login, making keys the only option.',
  },
];
