// RHCSA Quiz — Topic 4: Local Storage — LVM (简体中文) — 20 questions

export const rhcsaTopic4QuizzesZH = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能够以清晰的树状结构（包含大小、类型及挂载点）展示所有的块设备（磁盘和分区）？',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: '`lsblk` (list block devices) 是最为推荐的工具，能直观地以树形结构列出物理磁盘上的所有分区和逻辑卷映射层级。',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '在 RHEL 9 中，官方首推使用哪一个工具来创建和管理现代的 GPT（GUID 分区表）分区？',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: '`parted` 是一款非交互式能力极强的现代分区工具，天然支持且推荐用于 GPT。虽然新版 `fdisk` 也支持 GPT，但红帽企业版官方文档更推崇 `parted` 进行操作和脚本编写。',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '以下哪个 `parted` 命令序列能在 `/dev/sdb` 磁盘上精确地创建一个从 1GiB 开始到 2GiB 结束的新分区？',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: '`parted` 的标准语法是 `mkpart <分区类型> <预期文件系统> <起始点> <结束点>`。在这个语境下 `primary` 和 `ext4` 都只是向分区表写入标签，实际格式化还需要用 `mkfs` 命令。',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能够列出所有设备（或特定分区）的 UUID 及其包含的底层文件系统格式？',
    options: ['lsblk -f', 'blkid', 'df -T', '选项 A 和 B 都正确'],
    correct: 3,
    explanation: '`blkid` 提供了专为脚本准备的包含设备的详细底层属性（包含 UUID），而 `lsblk -f` 则提供了同样包含 UUID 但更易于人类阅读的树状图表格。',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '在使用 parted 成功创建新分区之后，哪个命令能够通知并强迫 Linux 内核立刻同步更新其分区表映射，而不需要执行系统重启？',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: '`partprobe` 命令会扫描设备并通知内核重新载入分区表元数据。这在热插拔磁盘并分区后挂载是极其关键的一步。',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '在一个全新的磁盘分区上创建可用的“逻辑卷（Logical Volume, LV）”，正确的严谨构建顺序（由下至上）是什么？',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'LVM 系统的层次始终是：先标记物理卷（PV），再把它们汇集成物理资源池卷组（VG），最后从资源池中切出灵活的逻辑卷（LV）。',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能够初始化（打标签）一个原始分区，使其能够被 LVM 系统识别为一个“物理卷”？',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: '`pvcreate <设备路径>` 是将硬盘分区或整块裸盘注册成为 LVM 底层物理卷块的第一步操作，它会在磁盘开头写入 LVM 的元数据标识。',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '如何使用 `/dev/sdb1` 和 `/dev/sdc1` 两个物理卷，共同组合并创建一个名为 "datavg" 的新卷组 (Volume Group)？',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: '`vgcreate <新卷组名> <参与物理卷1> [由于可以包含多个继续传参...]` 会把若干块分散的磁盘空间熔合成一个大型逻辑共享池。',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '系统硬盘空间不足，你新插了一块硬盘并初始化了 PV `/dev/sdd1`。如何将它“补充添加”到现有的 "datavg" 卷组中扩容？',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: '`vgextend <目标卷组> <新加入的PV>` 将把新盘的物理盘区 (PE) 全部倒入现有的资源池中，之后你就可以利用新增容量分配给 LV 了。',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '哪个命令可以显示本机“卷组（VG）”各项详细属性的完整列表，包括总大小、空闲物理盘区 (PE) 和组成它的所有底层 PV？',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: '`vgdisplay` 会打印卷组详情。如果你只想看一行简要总结，应该输入极简版的 `vgs` 命令。',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '如何在名为 "datavg" 的卷池中，切出并创建一个固定大小正好为 2GiB，且名为 "datalv" 的全新逻辑卷？',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: '`lvcreate` 专属命令：`-L` 让你直接指定绝对容量数值（而 `-l` 则是按照 PE 数量配比分配），`-n` 命名，最后接其宿主资源池 VG 的名字。',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '有一个位于 "datavg" 里的逻辑卷 "datalv"，它当前挂载并未满且已经格式化为 ext4。如何为其增加 1GiB 空间，并且“同时一步”扩容底层文件系统让操作系统能用满它？',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      '选项 A 和 B 均能正确完成该需求',
    ],
    correct: 3,
    explanation: 'A 选项展示了底层拆分为两步的过程，而 B 选项的 `-r` (--resizefs) 是 LVM 智能地在修改完逻辑边界后无缝帮你自动调用相应的扩容工具（无论背后是 ext4 还是 xfs 都能自适应处理），在考场上极力推荐。',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '对于已经被格式化为 `xfs` 这种仅能变大、不能缩小的文件系统的逻辑卷，在底层执行 `lvextend` 后，你必须使用什么专属命令去撑大文件系统的边界？',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: '非常重要：`resize2fs` 用于老式 ext 家族。而扩展 xfs 时，你必须使用 `xfs_growfs` 并把目标参数指向其在文件树上的“挂载点目录（Mount point）”，而不是块设备本身的路径。',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '在 VG "datavg" 下成功创建出 LV "datalv" 之后，作为管理员要想对它实施格式化或者挂载，它的标准物理设备路径表示法应该是？',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: '操作系统通常会自动为其在 /dev 下以 `<卷组名>` 为命名的目录下，生成名为 `<逻辑卷名>` 的快捷方式。例如 `/dev/datavg/datalv`，实际上是指向 `/dev/mapper/datavg-datalv` 的安全硬链接符号。',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '如果你只想快速扫一眼当前系统中所有的逻辑卷的占比条、简单名字和大小（而不想被长篇大论的字符刷屏），可以输入哪个紧凑命令？',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', '选项 B 和 C 都常用'],
    correct: 3,
    explanation: '虽然 `lvdisplay` （详尽版）和 `lvs`（紧凑一览版）都是最常用的，但在实操考试或快速故障排查期间，`lvs` 和 `vgs` 更容易让人一眼看清现状。',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '在编写 `/etc/fstab` （文件系统注册表）时，为什么现代最佳实践主张始终使用 UUID，而非例如 `/dev/sdb1` 这种经典硬编码设备名？',
    options: [
      '由于 UUID 的字符数更短，它更容易被管理员口头记住并录入',
      '如果服务器发生硬件热插拔或者总线调整重启后，物理名可能会发生飘移变动（变成 sdc），而 UUID 与底层盘扇区数据永远深度绑定，具有唯一持久性',
      'RHEL 9 及以上的现代系统底层已强行移除了以 /dev/sdx 来定位文件的内核驱动支持',
      '由于使用 UUID ，能够让内核省略路径寻址，从而极大地提升磁盘 I/O 和存取速度',
    ],
    correct: 1,
    explanation: '设备命名并非永久。由于每次启动时的系统检测顺序，一块原本被称为 /dev/sda 的盘在添加了光驱或者新硬盘后甚至可能变成 sdc。而根据文件系统提取出来的 UUID 不会受顺序影响，是挂盘的最佳安全保障。',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '当你编辑完 `/etc/fstab` 并保存退出后。在你敢于自信地去重启生产服务器之前，必须要执行哪个命令来安全排雷，以防止语法错误导致服务器死机在救援模式？',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: '`mount -a` (all) 会请求内核解析 fstab 并立刻尝试将所有尚未映射的挂载点挂上（不含 noauto 标签的）。如果命令无声通过零报错，说明配置文件语法无误；如果报错，请绝不要重启！',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '想要在开机时静默自动地将 `/dev/mapper/datavg-datalv` 以 `ext4` 格式并附带默认特权挂载在 `/data` 下，以下对应 `fstab` 中的哪条六段式规则书写是正确的语法？',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'fstab 标准从左至右的栏列：`<设备>` `<对应挂载目录>` `<文件系统>` `<附加挂载选项>` `<dump备份标识>` `<fsck磁盘自检次序>`。尾部的 `0 0` 代表该逻辑卷不要包含在底层备份且不需要在启动时接受独立硬盘自检检查。',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '系统在极端压力下内存触顶爆炸了，你如何在紧急分出的分区 `/dev/sdb2` 上，立即把它处理为虚拟交换空间（Swap）并上线顶上？',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: '这是两步连招：`mkswap` 是给该裸分区打上用作虚拟内存的数据底结构签名；接着立刻执行 `swapon` 将该区域向内核注册并激活使其马上承担起内存溢出池的工作任务。（事后写入 fstab 持久化）',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '以下哪些命令能够明确向你展示出当前系统中激活且运作正常的 Swap 空间其具体挂载组成以及实时用量容量占比情况？',
    options: ['swapon --show', 'cat /proc/swaps', 'free -h', '以上全部都能'],
    correct: 3,
    explanation: '以上命令均互补：`free -h` 提供大局汇总视图的 RAM 占比；`/proc/swaps` 展示底层的状态内核态反映；而 `swapon --show` 直接展示出是来源于哪块硬盘扇区的列表及优先级等信息，以上均在排查内存高可用问题时极具价值。',
  },
]
