// RHCSA Quiz — Topic 5: File System (English) — 20 questions

export const rhcsaTopic5QuizzesEN = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which command creates an ext4 filesystem on /dev/sdb1?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'Both A and B'],
    correct: 3,
    explanation: 'mkfs.ext4 and mkfs -t ext4 are equivalent. mkfs.ext4 is the more common form.',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which filesystem is the default on RHEL9 for new partitions?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'XFS is the default filesystem on RHEL7+ and RHEL9 due to its scalability and performance.',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command shows detailed information about an XFS filesystem mounted on /data?',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: 'xfs_info <mount_point> displays the parameters of the XFS filesystem. tune2fs and dumpe2fs are for ext2/3/4.',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'A damaged XFS filesystem can be repaired with:',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'xfs_repair repairs unmounted XFS filesystems. Note: the device MUST NOT be mounted.',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which mount option causes the filesystem to be unmounted automatically after a timeout?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'x-systemd.automount handles automatic mounting via systemd. nofail ignores errors at boot.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command formats /dev/sdc1 with LUKS encryption?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'cryptsetup luksFormat initializes a LUKS container on the device. It requires confirmation and a passphrase.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'After luksFormat, which command opens the LUKS container as "datadisk"?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'Both A and B',
    ],
    correct: 3,
    explanation: 'In recent versions of cryptsetup, both "open" and "luksOpen" are equivalent. The device becomes /dev/mapper/datadisk.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Where do you configure the automatic mounting of a LUKS volume at boot (without interactive password)?',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: '/etc/crypttab defines the LUKS containers to open at boot, with name, device, keyfile, and options.',
  },
  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which package should be installed to mount NFS filesystems on RHEL9?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'nfs-utils contains the NFS clients and server utilities. cifs-utils is for Samba/Windows shares.',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'How do you permanently mount the NFS share 192.168.1.10:/data on /mnt/data in fstab?',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Format: server:/export /mountpoint nfs options 0 0. NFSv4 uses nfs4, but "nfs" also works.',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Which autofs file maps the NFS shares for the /misc directory?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 1,
    explanation: '/etc/auto.master points to /etc/auto.misc (or similar) which contain the individual mappings.',
  },
  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command adds read/write permissions for the user "mario" on /project?',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: 'setfacl -m (modify) u:user:permissions adds an ACL entry for a specific user.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which command displays the ACLs of a file?',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: 'getfacl shows the extended ACLs of files and directories in a readable format.',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'What does the setGID permission do on a directory?',
    options: [
      'Executes binaries in the directory as root',
      'New files created in the directory inherit the directory\'s group',
      'Only root can write in the directory',
      'The directory cannot be deleted',
    ],
    correct: 1,
    explanation: 'The setGID bit (chmod g+s) on a directory causes new files to inherit the group of the directory, not that of the creator.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'How do you enforce that default ACLs apply to new files in /shared?',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'Both A and C',
    ],
    correct: 3,
    explanation: 'setfacl -m d: (or --default) sets default ACLs for new files. d:u:mario:rw is the compact form.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which mount option enables ACL support for an ext4 filesystem?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'The "acl" mount option enables POSIX ACLs. On RHEL, modern kernels often have acl enabled by default.',
  },
  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Which mount option prevents the execution of programs on that filesystem?',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: 'noexec prevents the execution of binaries. nosuid ignores setuid/setgid bits. Used for security on /tmp.',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command shows the disk space used and available for each mounted filesystem?',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'df -h (disk free, human readable) shows total, used, and available space for each mounted filesystem.',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which fstab option ensures a mount error at boot does not prevent the system from starting?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: 'nofail causes systemd to ignore mount errors instead of entering emergency mode. Useful for external storage.',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'After opening a LUKS volume, which command creates the ext4 filesystem inside it?',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/volume_name',
      'cryptsetup mkfs /dev/mapper/volume_name',
      'luks-mkfs /dev/mapper/volume_name',
    ],
    correct: 1,
    explanation: 'After luksOpen, you format the resulting device mapper (/dev/mapper/name), not the physical device.',
  },
]
