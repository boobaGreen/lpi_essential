// LPIC-1 102 Quiz Pool — English — Topic 110 (Security)

export const lpic1_102_topic6Quizzes_en = [
  {
    topicId: 6,
    question: "Which command allows you to find all files in the system that have the SUID bit set?",
    options: [
      "ls -lR | grep suid",
      "find / -perm /4000",
      "check-suid /",
      "locate --perm suid"
    ],
    correct: 1,
    explanation: "find with -perm /4000 (or -4000) searches for files with the SUID bit set."
  },
  {
    topicId: 6,
    question: "Which command is highly recommended for modifying the /etc/sudoers file to avoid syntax errors?",
    options: [
      "nano /etc/sudoers",
      "visudo",
      "sudoedit",
      "vi /etc/sudoers"
    ],
    correct: 1,
    explanation: "visudo performs a syntax check before saving, preventing errors that could lock out sudo access."
  },
  {
    topicId: 6,
    question: "What is the purpose of the 'ssh-agent' command?",
    options: [
      "To encrypt the entire hard drive",
      "To store decrypted private keys so you don't re-enter the passphrase for every connection",
      "To generate a new SSH key pair",
      "To monitor failed SSH login attempts"
    ],
    correct: 1,
    explanation: "The SSH agent keeps keys in memory during the user session."
  },
  {
    topicId: 6,
    question: "Which file is used to explicitly deny access to services protected by TCP Wrappers?",
    options: [
      "/etc/deny.hosts",
      "/etc/hosts.deny",
      "/etc/network.deny",
      "/etc/firewall.deny"
    ],
    correct: 1,
    explanation: "TCP Wrappers uses /etc/hosts.allow and /etc/hosts.deny for access control."
  },
  {
    topicId: 6,
    question: "What is the effect of the 'PermitRootLogin no' setting in the sshd_config file?",
    options: [
      "Prevents any user from connecting as root via SSH",
      "Requires a special password for the root user",
      "Allows root access only via public keys",
      "Completely disables the root account on the system"
    ],
    correct: 0,
    explanation: "This directive prevents brute-force attacks on the root account over the network."
  },
  {
    topicId: 6,
    question: "Which command is used to limit the maximum number of processes opened by a user in the current shell?",
    options: [
      "limit",
      "ulimit",
      "sysctl",
      "quota"
    ],
    correct: 1,
    explanation: "ulimit (user limit) allows setting resource limits for the shell and its children."
  },
  {
    topicId: 6,
    question: "What does the 'Sticky Bit' set on a directory like /tmp do?",
    options: [
      "Makes files in the directory immutable",
      "Allows only the file owner (or root) to delete or rename the file",
      "Automatically encrypts all files created inside",
      "Ensures the directory always stays in RAM"
    ],
    correct: 1,
    explanation: "The Sticky Bit on world-writable directories ensures users cannot delete each other's files."
  },
  {
    topicId: 6,
    question: "Which GnuPG utility is used to encrypt a file symmetrically (using a passphrase)?",
    options: [
      "gpg --gen-key",
      "gpg -c file",
      "gpg --encrypt file",
      "gpg --sign file"
    ],
    correct: 1,
    explanation: "The -c (symmetric) option encrypts the file asking for a manual passphrase."
  }
];
