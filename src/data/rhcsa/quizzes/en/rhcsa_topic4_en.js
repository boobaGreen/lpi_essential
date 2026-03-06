// RHCSA Quiz — Topic 4: Local Storage — LVM (English)
// 20 MCQ questions

export const rhcsaTopic4QuizzesEN = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows block devices and their tree structure?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: 'lsblk (list block devices) shows devices in a tree format with sizes, types, and mount points.',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command is recommended to create GPT partitions on RHEL9?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: 'parted natively supports GPT and is the recommended tool on RHEL9. fdisk supports GPT since version 2.26, but parted is preferred.',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which parted command creates a new partition from 1GiB to 2GiB on /dev/sdb?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'parted syntax: mkpart <type> <fs-type> <start> <end>. The fs-type in parted is just a label.',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows the UUIDs and file system type of all devices?',
    options: ['lsblk -f', 'blkid', 'df -T', 'Both A and B'],
    correct: 3,
    explanation: 'Both blkid and lsblk -f show UUIDs and filesystem type. blkid is more detailed, lsblk -f is more visual.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'After creating a new partition with parted, which command updates the kernel without rebooting?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'partprobe informs the kernel of partition table changes without a reboot.',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'What is the correct order to create a Logical Volume from a new partition?',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'The LVM order is always: Physical Volume → Volume Group → Logical Volume (PV → VG → LV).',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command initializes a partition as an LVM Physical Volume?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: 'pvcreate <device> initializes a device as an LVM Physical Volume, writing its metadata.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'How do you create a Volume Group named "datavg" using /dev/sdb1 and /dev/sdc1?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'vgcreate <vg_name> <pv1> [pv2...] creates a VG using one or more Physical Volumes.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'How do you add a new PV /dev/sdd1 to an existing Volume Group "datavg"?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: 'vgextend <vg> <pv> adds an existing PV to a VG, expanding the available space.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows detailed information about Volume Groups?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: 'vgdisplay shows VG name, total size, free PE, PE size, and the PVs that make it up.',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'How do you create a 2GiB Logical Volume named "datalv" in the "datavg" VG?',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'lvcreate -L <size> -n <lv_name> <vg_name>. -L uses absolute units (G, M). -l uses PEs.',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'How do you extend an ext4 LV "datalv" by 1GiB AND resize its file system at the same time?',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'Both A and B are correct',
    ],
    correct: 3,
    explanation: 'Both A (separate lvextend + resize2fs) and B (lvextend -r which includes the resize) work. -r resizes automatically.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'For an LV with an XFS file system, which command resizes the file system after an lvextend?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'resize2fs is for ext2/3/4. XFS uses xfs_growfs and requires the MOUNT POINT, not the device.',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Where is the device file located for an LV named "datalv" in the "datavg" VG?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'LV devices are located in /dev/<vgname>/<lvname>. /dev/mapper/<vgname>-<lvname> also exists.',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command shows summary information for all Logical Volumes?',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'Both B and C'],
    correct: 3,
    explanation: 'lvdisplay shows detailed information, lvs shows a compact summary. Both are useful.',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Why is it better to use the UUID instead of the device name (/dev/sdb1) in /etc/fstab?',
    options: [
      'The UUID is shorter and easier to remember',
      'The device name can change after a reboot; the UUID is permanent',
      'Only the UUID is supported by RHEL9',
      'The UUID increases mount performance',
    ],
    correct: 1,
    explanation: 'Device names (sda, sdb) can change if disks are added/removed. The UUID is unique and immutable.',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Which command tests the correctness of /etc/fstab without rebooting?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: 'mount -a mounts all entries in /etc/fstab that are not currently mounted. Errors = issues in fstab.',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'What is the correct fstab entry to mount /dev/mapper/datavg-datalv on /data with ext4, default options, at boot?',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'fstab format: <device> <mount_point> <fs_type> <options> <dump> <pass>. 0 0 = no dump, no fsck.',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'How do you create a swap space on partition /dev/sdb2 and activate it?',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'mkswap formats the partition as a swap area, swapon activates it. Add to fstab for persistence.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Which command shows the currently active swap and its size?',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'All of the above'],
    correct: 3,
    explanation: 'swapon --show, cat /proc/swap and free -h all show info about swap. They are complementary.',
  },
]
