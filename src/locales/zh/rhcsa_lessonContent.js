export const rhcsaLessonContentZH = {

  // ─── TOPIC 1: 基本工具 ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell 和 I/O 重定向',
      panels: [
        { emoji: '📤', text: '`>` 使用输出覆盖文件：`echo "hello" > file.txt` 会创建或覆盖。' },
        { emoji: '📥', text: '`>>` 将输出追加到文件末尾：`echo "line" >> file.txt` 保留原有内容。' },
        { emoji: '🔗', text: '`|` (管道) 将一个命令的输出传递给下一个命令：`ls -l | grep ".txt"`。' },
        { emoji: '⚠️', text: '`2>` 仅重定向错误：`find / -name "*.conf" 2> /dev/null` 隐藏错误信息。' },
        { emoji: '🎯', text: '`&>` 同时将 stdout 和 stderr 重定向到同一个文件：`command &> output.log`。' },
      ],
    },
    keyPoints: [
      {
        title: '重定向操作符',
        items: [
          '`>` — 将标准输出 (stdout) 覆盖写入文件',
          '`>>` — 将标准输出追加到文件',
          '`2>` — 将标准错误 (stderr) 重定向到文件',
          '`2> /dev/null` — 丢弃错误消息',
          '`&>` — 将两者 (stdout 和 stderr) 重定向到同一位置',
          '`|` — 将一个进程的输出连接到另一个进程的输入',
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
      title: '🔍 grep 和正则表达式',
      panels: [
        { emoji: '🔎', text: '`grep "pattern" file` 在文件中搜索包含该模式的行。' },
        { emoji: '🚫', text: '`grep -v "pattern"` 显示所有不匹配的行。' },
        { emoji: '📏', text: '`^` 匹配行首，`$` 匹配行尾。`^root` 查找以 root 开头的行。' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` 使用带有或 (|) 逻辑的扩展正则。' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` 统计匹配行的数量。' },
      ],
    },
    keyPoints: [
      {
        title: 'grep 常用选项',
        items: [
          '`-i` — 忽略大小写',
          '`-r` 或 `-R` — 在目录中递归搜索',
          '`-v` — 反向匹配（显示不匹配的）',
          '`-n` — 显示行号',
          '`-E` — 启用扩展正则表达式 (ERE)',
          '`-w` — 仅匹配整个单词',
        ],
      },
      {
        title: '基础正则元字符',
        items: [
          '`.` — 匹配任意单个字符',
          '`*` — 匹配前一个字符零次或多次',
          '`^` — 锚定行首',
          '`$` — 锚定行尾',
          '`[a-z]` — 匹配指定范围内的任意字符',
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
      title: '🔑 权限和链接',
      panels: [
        { emoji: '🔐', text: 'UNIX 权限：`rwxrwxrwx` — 用户、组、其他。`chmod 755 file` = rwxr-xr-x。' },
        { emoji: '👤', text: '`chown mario:dev file` 将所有者更改为 mario，组更改为 dev。' },
        { emoji: '🔗', text: '硬链接：`ln file link` — 相同的索引节点 (inode)，删除原始文件后依然存在。' },
        { emoji: '🔁', text: '软链接：`ln -s /real/path link` — 指向路径（快捷方式）。' },
        { emoji: '📊', text: '`ls -l` 显示：类型、权限、硬链接数、所有者、组、大小、日期、名称。' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — 八进制记法',
        items: [
          '`4` = 读取 (r), `2` = 写入 (w), `1` = 执行 (x)',
          '`755` = rwxr-xr-x (目录的典型权限)',
          '`644` = rw-r--r-- (普通文件的典型权限)',
        ],
      },
      {
        title: '硬链接 vs 软链接',
        items: [
          '硬链接：指向磁盘上的相同数据；不能跨文件系统。',
          '软链接 (Symbolic)：包含指向实际文件路径的小文件。',
          '`ls -l` 显示软链接时，开头字母为 `l`。',
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
      title: '📦 归档和压缩',
      panels: [
        { emoji: '📦', text: '`tar -czvf archive.tar.gz /dir` — 创建使用 gzip 压缩的归档。' },
        { emoji: '📂', text: '`tar -xzvf archive.tar.gz` — 提取压缩归档的内容。' },
        { emoji: '🔍', text: '`tar -tzvf archive.tar.gz` — 列出内容而不进行提取。' },
        { emoji: '⚡', text: '压缩工具：`gzip` (.gz), `bzip2` (.bz2), `xz` (.xz)。XZ 最慢但压缩率最高。' },
        { emoji: '💡', text: '记住 tar 参数：c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File。' },
      ],
    },
    keyPoints: [
      {
        title: 'tar 关键参数',
        items: [
          '`c` — 创建归档',
          '`x` — 提取归档',
          '`t` — 列出内容',
          '`f` — 指定文件名（务必放在最后！）',
          '`v` — 详细模式（显示进度）',
        ],
      },
      {
        title: '压缩格式',
        items: [
          '`z` — gzip (快速，标准)',
          '`j` — bzip2 (比 gzip 更好的压缩)',
          '`J` — xz (最高的压缩率，占用更多 CPU)',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/` from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 系统文档',
      panels: [
        { emoji: '📖', text: '`man command` — 显示完整手册。使用箭头导航，`/pattern` 搜索，`q` 退出。' },
        { emoji: '❓', text: '`man -k word` (或 `apropos`) 搜索主题相关的命令。' },
        { emoji: 'ℹ️', text: '`info command` — 比 man 更详细且具有结构性的文档。' },
        { emoji: '📁', text: '`/usr/share/doc/` 包含每个已安装软件包的说明、更新日志和示例。' },
        { emoji: '💡', text: '`command --help` — 快速联机帮助。在考试中忘记选项时非常有用。' },
      ],
    },
    keyPoints: [
      {
        title: 'man — 章节和导航',
        items: [
          '第1节：用户命令，第5节：配置文件格式，第8节：管理员命令',
          '`man 5 passwd` — 查看 /etc/passwd 文件的格式（而非命令本身）',
          '在 man 中使用 `/word` 进行搜索，按 `n` 查看下一个结果。',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "password" | head -3',
      output: 'chpasswd (8) - update passwords in batch mode\ngpasswd (1) - administer /etc/group and /etc/gshadow\npasswd (1) - update user\'s authentication tokens',
    },
  },

  // ─── TOPIC 2: Shell 脚本编程 ──────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '🐚 变量和 Bash 语法',
      panels: [
        { emoji: '📝', text: '以 `#!/bin/bash` (Shebang) 开头以指定解释器。' },
        { emoji: '🏷️', text: '`VAR="value"` (等号两边不能有空格！)。使用 `$VAR` 或 `${VAR}` 访问。' },
        { emoji: '💬', text: '双引号 `"` 允许变量扩展 ($)，单引号 `\'` 则为纯字面量。' },
        { emoji: '💻', text: '`OUTPUT=$(ls)` 将命令输出保存到变量中。' },
        { emoji: '🚀', text: '赋予权限：`chmod +x script.sh` 并使用 `./script.sh` 运行。' },
      ],
    },
    keyPoints: [
      {
        title: 'Shebang 和权限',
        items: [
          '第一行必须是 `#!/bin/bash` 或类似的路径。',
          '使用 `chmod +x` 使其可以直接执行。',
        ],
      },
      {
        title: '变量和扩展',
        items: [
          '`=` 两边不要空格：`NAME="mario"` (正确)，`NAME = "mario"` (错误)。',
          '`$(command)` 是现代的命令替换形式。',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat hello.sh && ./hello.sh',
      output: '#!/bin/bash\nNAME="RHCSA"\necho "Hello $NAME"\n---\nHello RHCSA',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 条件判断和循环',
      panels: [
        { emoji: '❓', text: '`if [ $A -gt $B ]; then ... fi` — 条件结构。注意 `[` 和 `]` 括号内的空格！' },
        { emoji: '🔄', text: '`for file in *.txt; do ... done` — 遍历元素列表。' },
        { emoji: '⏳', text: '`while [ condition ]; do ... done` — 只要条件为真就重复。' },
        { emoji: '🚥', text: '`case $VAR in pattern) ... ;; esac` — 高效的多重选择。' },
        { emoji: '✅', text: '测试操作符：`-f` (文件), `-d` (目录), `-z` (空), `-eq` (数值相等)。' },
      ],
    },
    keyPoints: [
      {
        title: '测试操作符 [ ]',
        items: [
          '`-eq`, `-ne`, `-lt`, `-gt` — 数值比较',
          '`==`, `!=` — 字符串比较',
          '`-f file` — 如果文件存在且为普通文件则为真',
          '`-d dir` — 如果为目录则为真',
        ],
      },
      {
        title: '循环',
        items: [
          '`for` 非常适合处理文件列表。',
          '`while` 常与 `read` 结合使用以逐行读取文件。',
        ],
      },
    ],
    terminal: {
      prompt: '$ if [ 10 -gt 5 ]; then echo "更大"; fi',
      output: '更大',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '📥 参数和输出',
      panels: [
        { emoji: '🔢', text: '`$1`, `$2`... 是传递给脚本的参数。`$0` 是脚本名称。' },
        { emoji: '👥', text: '`$@` 将所有参数作为一个列表。' },
        { emoji: '📊', text: '`$#` 是传递的参数总数。' },
        { emoji: '❓', text: '`$?` 是上一个命令的退出状态。`0` = 成功，非 0 = 错误。' },
        { emoji: '🚪', text: '`exit 0` 表示脚本执行成功。`exit 1` 表示失败。' },
      ],
    },
    keyPoints: [
      {
        title: '命令行参数',
        items: [
          '`$1` — 第一个参数',
          '`$#` — 参数个数',
          '`$@` — 所有参数',
        ],
      },
      {
        title: '退出状态码 ($?)',
        items: [
          '对错误处理至关重要。',
          '在执行关键命令后立即检查其状态。',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls /non/existent/dir; echo $?',
      output: 'ls: cannot access ...: No such file or directory\n2',
    },
  },

  // ─── TOPIC 3: 系统管理 ────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '🚀 启动和 systemd 目标 (Targets)',
      panels: [
        { emoji: '🎯', text: 'Target 定义系统状态。`multi-user.target` = 命令行，`graphical.target` = 图形界面。' },
        { emoji: '⚙️', text: '`systemctl get-default` 显示系统默认启动模式。' },
        { emoji: '🔄', text: '`systemctl set-default graphical.target` 永久更改启动模式。' },
        { emoji: '⚡', text: '`systemctl isolate multi-user.target` 即时切换到命令行模式。' },
        { emoji: '🛠️', text: '如需修复：在 GRUB 中添加 `rd.break` 以进入紧急模式。' },
      ],
    },
    keyPoints: [
      {
        title: 'systemd Targets',
        items: [
          '`multi-user.target` — 传统运行级别 3 (控制台)',
          '`graphical.target` — 传统运行级别 5 (GUI)',
          '`rescue.target` — 基本维护模式',
        ],
      },
      {
        title: '重置 root 密码 (rd.break)',
        items: [
          '1. 编辑 GRUB，在 `linux` 行末尾添加 `rd.break`。',
          '2. `mount -o remount,rw /sysroot` (以读写方式重新挂载)。',
          '3. `chroot /sysroot` (进入实际根目录)。',
          '4. `passwd root` (更改密码)。',
          '5. `touch /.autorelabel` (SELinux 必需步骤)。',
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
      title: '📊 进程管理',
      panels: [
        { emoji: '👁️', text: '`ps aux` 或 `ps -ef` 列出所有活动进程及其 PID (进程 ID)。' },
        { emoji: '📈', text: '`top` 实时显示消耗 CPU 和内存最高的进程。' },
        { emoji: '🛑', text: '`kill PID` 发送温和终止信号。`kill -9 PID` (SIGKILL) 强制终止。' },
        { emoji: '⚖️', text: '优先级："Nice" 范围从 -20 (最高) 到 +19 (最低)。`nice -n -5 command` 提高优先级运行。' },
        { emoji: '🔧', text: '`renice -n 10 -p PID` 更改正在运行进程的优先级。' },
      ],
    },
    keyPoints: [
      {
        title: '常用信号',
        items: [
          '`15` (SIGTERM) — 正常终止（默认）',
          '`9` (SIGKILL) — 立即强制结束进程',
          '`1` (SIGHUP) — 重新加载配置',
        ],
      },
      {
        title: 'Nice 值与优先级',
        items: [
          '只有 root 才能赋予负值（更高优先级）。',
          'Nice 值越高，进程越“友好”（即优先级越低）。',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps -ef | grep httpd | head -2',
      output: 'root      1234     1  0 10:00 ?        00:00:00 /usr/sbin/httpd\napache    1235  1234  0 10:00 ?        00:00:00 /usr/sbin/httpd',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🛠️ 使用 systemctl 管理服务',
      panels: [
        { emoji: '🟢', text: '`systemctl start sshd` 立即启动服务。' },
        { emoji: '📌', text: '`systemctl enable sshd` 设置为开机自启。' },
        { emoji: '🔄', text: '`systemctl restart sshd` 停止并重新启动服务。' },
        { emoji: '🚫', text: '`systemctl mask firewalld` 禁止该服务运行，即使手动也无法启动。' },
        { emoji: '🔍', text: '`systemctl status sshd` 查看是否正在运行、是否开机自启以及最近的错误。' },
      ],
    },
    keyPoints: [
      {
        title: '核心命令',
        items: [
          '`start`, `stop`, `restart`, `reload` — 执行控制',
          '`enable`, `disable` — 自启动控制',
          '`status`, `is-active`, `is-enabled` — 状态查询',
          '`mask`, `unmask` — 防止意外启动',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl is-active sshd',
      output: 'active',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📔 日志和计划任务',
      panels: [
        { emoji: '📜', text: '`journalctl` 显示所有系统日志。`journalctl -u sshd` 按服务筛选。' },
        { emoji: '⏲️', text: '`crontab -e` 安排周期性任务 (分 时 日 月 周 命令)。' },
        { emoji: '🏃', text: '`at 15:00` 安排在未来的单次执行任务。' },
        { emoji: '🔦', text: '`journalctl -f` 实时跟踪日志 (类似于 tail -f)。' },
        { emoji: '🗓️', text: '`crontab -l` 列出当前用户的计划任务。' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl — 高级筛选',
        items: [
          '`-b` — 仅限本次启动后的日志',
          '`-p err` — 仅限错误级别信息',
          '`--since "1 hour ago"` — 最近一小时的日志',
        ],
      },
      {
        title: 'cron 周期任务',
        items: [
          '格式：`* * * * * 命令`（分、时、日、月、周）。',
          '`/etc/cron.allow` 和 `/etc/cron.deny` 控制 cron 访问权限。',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -n 5 -p err',
      output: '-- Journal begins at ... --\nJan 15 10:00:01 systemd[1]: Failed to start ...',
    },
  },

  // ─── TOPIC 4: 本地存储 — LVM ────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 GPT 分区',
      panels: [
        { emoji: '🏗️', text: '`parted /dev/sdb` — 创建分区的工具。对新磁盘使用 `mklabel gpt`。' },
        { emoji: '📏', text: '`mkpart primary xfs 1MiB 2GiB` 创建一个 2GB 的分区。' },
        { emoji: '👀', text: '`lsblk` 直观地显示块设备结构（磁盘和分区）。' },
        { emoji: '❗', text: '`udevadm settle` 强制系统立即识别分区更改。' },
        { emoji: '🔍', text: '`blkid` 显示分区的 UUID，对于持久挂载必不可少。' },
      ],
    },
    keyPoints: [
      {
        title: '分区工具',
        items: [
          '`fdisk` — 交互式，MBR/GPT 的经典选择',
          '`gdisk` — 专门针对 GPT',
          '`parted` — 支持脚本，功能强大',
        ],
      },
      {
        title: '分区后的步骤',
        items: [
          '运行 `lsblk` 确认系统已识别该分区。',
          '在使用前使用 `mkfs` 命令进行格式化。',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk /dev/nvme0n1',
      output: 'NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nnvme0n1     259:0    0   20G  0 disk \n├─nvme0n1p1 259:1    0  600M  0 part /boot/efi\n└─nvme0n1p2 259:2    0 19.4G  0 part /',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🧱 LVM — 物理卷和卷组',
      panels: [
        { emoji: '🔨', text: '`pvcreate /dev/sdb1` 为 LVM 准备物理分区。' },
        { emoji: '📦', text: '`vgcreate vg_data /dev/sdb1` 将一个或多个物理卷 (PV) 组合成卷组 (VG)。' },
        { emoji: '➕', text: '`vgextend vg_data /dev/sdc1` 向现有的卷组添加更多空间。' },
        { emoji: '📊', text: '`pvs`, `vgs`, `lvs` 显示各 LVM 级别的快速摘要。' },
        { emoji: '🔍', text: '`pvdisplay` 或 `vgdisplay` 提供详细信息（大小、扇区、UUID）。' },
      ],
    },
    keyPoints: [
      {
        title: 'LVM 架构',
        items: [
          'PV (物理卷) — 物理载体（分区或磁盘）。',
          'VG (卷组) — 存储池。',
          'LV (逻辑卷) — 我们格式化使用的“虚拟分区”。',
        ],
      },
    ],
    terminal: {
      prompt: '$ vgs',
      output: '  VG      #PV #LV #SN Attr   VSize  VFree \n  cs        1   2   0 wz--n- <19.00g    0 \n  vg_data   1   0   0 wz--n-   2.00g  2.00g',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '💎 LVM — 逻辑卷',
      panels: [
        { emoji: '🔪', text: '`lvcreate -L 1G -n lv_docs vg_data` 从卷组中提取 1GB 创建逻辑卷。' },
        { emoji: '📈', text: '`lvextend -L +500M /dev/vg_data/lv_docs` 为逻辑卷增加 500MB。' },
        { emoji: '✨', text: '`lvextend -r -l +100%FREE ...` 将 LV 和文件系统扩展到最大剩余空间。' },
        { emoji: '💾', text: '格式化：`mkfs.xfs /dev/vg_data/lv_docs` 准备 LV 以存储文件。' },
        { emoji: '📏', text: '`xfs_growfs /mnt/docs` 在扩展 LV 后扩展 XFS 文件系统。' },
      ],
    },
    keyPoints: [
      {
        title: 'LV 管理',
        items: [
          '`lvcreate -n 名称 -L 大小 VG` — 创建',
          '`lvextend -L +大小 -r LV` — 同时扩展卷和文件系统（推荐）',
          '`lvremove` — 删除逻辑卷（需确认）',
        ],
      },
      {
        title: 'XFS vs EXT4 区别',
        items: [
          'XFS 只能扩展，无法缩小。',
          'EXT4 可以扩展也可以缩小（尽管缩小有风险且需离线操作）。',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvs vg_data',
      output: '  LV      VG      Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv_docs vg_data -wi-a----- 1.00g',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '🔗 挂载、fstab 和交换空间 (Swap)',
      panels: [
        { emoji: '📍', text: '`mount /dev/sdb1 /mnt/data` 临时挂载设备。' },
        { emoji: '📝', text: '`/etc/fstab` 是核心文件。定义开机挂载 (UUID、挂载点、类型、选项)。' },
        { emoji: '🔄', text: '`mount -a` 检查 fstab 并挂载所有配置项。' },
        { emoji: '🧠', text: 'Swap：`mkswap /dev/sdb2` 随后 `swapon /dev/sdb2` 激活交换分区。' },
        { emoji: '🔒', text: '持久挂载：始终使用 UUID 以避免由磁盘名称变化引起的故障。' },
      ],
    },
    keyPoints: [
      {
        title: '/etc/fstab 格式',
        items: [
          '第一列：设备 (UUID=...)',
          '第二列：挂载点 (/data)',
          '第三列：FS 类型 (xfs, ext4, swap, nfs)',
          '第四列：挂载选项 (defaults)',
          '第五列：转储标志 (0)',
          '第六列：FSCK 检查 (XFS 设置为 0，其他为 1 或 2)',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat /etc/fstab | grep data',
      output: 'UUID=a1b2c3d4-e5f6... /data  xfs  defaults  0 0',
    },
  },

  // ─── TOPIC 5: 文件系统 ──────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 和 XFS',
      panels: [
        { emoji: '🛠️', text: '`mkfs.xfs /dev/vg_data/lv_docs` — 创建 XFS 文件系统，RHEL 的标准格式。' },
        { emoji: '📦', text: '`mkfs.ext4 /dev/vg_data/lv_old` — 创建 ext4 以支持缩小操作或兼容性。' },
        { emoji: '📍', text: '`mount /dev/vg/lv /point` — 即时连接。永久生效需编辑 `/etc/fstab`。' },
        { emoji: '🏷️', text: '`xfs_admin -L "DATA" /dev/sdb1` — 给 XFS 卷设置标签 (Label)。' },
        { emoji: '🔍', text: '`df -hT` — 显示每个已挂载文件系统的剩余空间和类型。' },
      ],
    },
    keyPoints: [
      {
        title: '创建与维护',
        items: [
          '`mkfs.xfs`, `mkfs.ext4` — 格式化',
          '`xfs_growfs` — 扩展 XFS',
          '`resize2fs` — 扩展/缩小 ext4',
          '`mount -o loop` — 挂载 ISO 文件或镜像',
        ],
      },
    ],
    terminal: {
      prompt: '$ df -hT /data',
      output: 'Filesystem              Type  Size  Used Avail Use% Mounted on\n/dev/mapper/vg_data-lv  xfs   2.0G   45M  2.0G   3% /data',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔒 使用 LUKS 进行加密',
      panels: [
        { emoji: '🔐', text: '`cryptsetup luksFormat /dev/sdb1` — 为加密准备分区（会擦除内容！）。' },
        { emoji: '🔑', text: '`cryptsetup open /dev/sdb1 safe` — 打开加密分区并映射至 `/dev/mapper/safe`。' },
        { emoji: '📦', text: '打开后，格式化映射设备：`mkfs.xfs /dev/mapper/safe`。' },
        { emoji: '📝', text: '自动挂载：编辑 `/etc/crypttab` (名称、UUID、密钥文件或 `none`)。' },
        { emoji: '🚪', text: '`cryptsetup close safe` — 关闭加密分区，重新保护数据。' },
      ],
    },
    keyPoints: [
      {
        title: 'LUKS 持久化步骤',
        items: [
          '1. `luksFormat` (创建)',
          '2. `open` (使用名称打开)',
          '3. 在 `/dev/mapper/名称` 下创建文件系统',
          '4. 写入 `/etc/crypttab`（以便开机询问密码）',
          '5. 通过 mapper 路径写入 `/etc/fstab` 进行挂载',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status safe',
      output: '/dev/mapper/safe is active.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🔗 网络存储 — NFS 和 autofs',
      panels: [
        { emoji: '🌎', text: '`mount -t nfs server:/path /local` — 挂载网络共享文件夹。' },
        { emoji: '🤖', text: '`autofs` — 按需挂载服务，进入目录时挂载，空闲时卸载。' },
        { emoji: '📝', text: '配置：`/etc/auto.master` 定义根，map 文件定义规则。' },
        { emoji: '📁', text: 'Map 示例：`data -rw,soft server:/export/data`。' },
        { emoji: '💡', text: '考试中用于自动挂载用户家目录非常重要。' },
      ],
    },
    keyPoints: [
      {
        title: 'autofs 配置步骤',
        items: [
          '`dnf install autofs` — 安装',
          '在 `/etc/auto.master` 添加一行：`/projects /etc/auto.projects`',
          '在 `/etc/auto.projects` 中定义项：`web -rw,sync server:/shares/web`',
          '启用服务：`systemctl enable --now autofs`说明',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e 192.168.1.100',
      output: 'Export list for 192.168.1.100:\n/shares/web  *\n/shares/data 192.168.1.0/24',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🛡️ ACL 和特殊权限',
      panels: [
        { emoji: '👥', text: '`setfacl -m u:mario:rwx file` — 在不改所有者的情况下给 Mario 权限。' },
        { emoji: '🔍', text: '`getfacl file` — 查看所有扩展权限和 ACL。' },
        { emoji: '📌', text: '`chmod g+s /dir` — (SetGID) 新文件自动继承目录的所属组。' },
        { emoji: '🧊', text: '`chmod +t /dir` — (Sticky Bit) 仅所有者能删除自己的文件 (如 /tmp)。' },
        { emoji: '👑', text: '`chmod u+s /bin/binary` — (SetUID) 以程序所有者（通常是 root）权限运行。' },
      ],
    },
    keyPoints: [
      {
        title: 'ACL (访问控制列表)',
        items: [
          '`-m` — 修改规则',
          '`-x` — 删除特定规则',
          '`-b` — 清除所有 ACL',
          '`d:u:user:rpx` — 默认 ACL：自动应用于目录下的新文件',
        ],
      },
      {
        title: '特殊权限 (SUID, SGID, Sticky)',
        items: [
          'SUID (4): 属主 `x` 位变为 `s`。以属主权限运行。',
          'SGID (2): 属组 `x` 位变为 `s`。文件夹内协作必备。',
          'Sticky (1): 末尾位变为 `t`。公共目录防删除安全措施。',
        ],
      },
    ],
    terminal: {
      prompt: '$ getfacl shared_dir',
      output: '# file: shared_dir\n# owner: root\n# group: root\nuser::rwx\nuser:mario:rwx\ngroup::r-x\nmask::rwx\nother::r-x',
    },
  },

  // ─── TOPIC 6: 系统维护 ─────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 使用 DNF 进行软件管理',
      panels: [
        { emoji: '📥', text: '`dnf install httpd` — 自动安装软件包及其依赖。' },
        { emoji: '🔍', text: '`dnf search nginx` — 在配置的仓库中搜索软件包。' },
        { emoji: '📂', text: '`dnf list installed` — 列出系统中所有的已安装包。' },
        { emoji: '📜', text: '`dnf history` — 查看历史安装记录并支持 `undo` 撤销操作。' },
        { emoji: '⚙️', text: '`dnf provides /etc/mime.types` — 查找哪个包提供了指定文件。' },
      ],
    },
    keyPoints: [
      {
        title: '常用 dnf 命令',
        items: [
          '`install`, `remove`, `update` — 基本操作',
          '`group install "Development Tools"` — 安装软件包组',
          '`repoinfo` — 列出活动仓库',
          '`clean all` — 清理下载缓存',
        ],
      },
      {
        title: '仓库配置',
        items: [
          '位置：`/etc/yum.repos.d/*.repo`',
          '必须包含 `[id]`, `name`, `baseurl`, `enabled=1` 和 `gpgcheck=1`。',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides /usr/bin/python3',
      output: 'python3-3.9.7-1.el9.x86_64 : Interpreter of the Python programming language',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '🕵️ RPM — 查询和验证',
      panels: [
        { emoji: '🔎', text: '`rpm -qa` — 列出所有安装包（比 dnf list 更基础）。' },
        { emoji: '📦', text: '`rpm -ivh package.rpm` — 安装本地 RPM 文件（不自动连接网络解决依赖！）。' },
        { emoji: '🔍', text: '`rpm -ql httpd` — 列出 httpd 软件包安装的所有文件。' },
        { emoji: '🛠️', text: '`rpm -V httpd` — 验证包文件是否已被篡改。' },
        { emoji: '❓', text: '`rpm -qi httpd` — 显示详细信息（版本、日期、描述）。' },
      ],
    },
    keyPoints: [
      {
        title: '查询参数 (rpm -q)',
        items: [
          '`-i` — 信息',
          '`-l` — 文件列表',
          '`-c` — 仅配置文件',
          '`-d` — 仅文档文件',
          '`-f /path/to/file` — 查找文件所属的包',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /etc/passwd',
      output: 'setup-2.13.7-6.el9.noarch',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🎡 GRUB2 和内核',
      panels: [
        { emoji: '🐧', text: '内核 (Kernel) 是系统的核心。`uname -r` 显示当前版本。' },
        { emoji: '⚙️', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — 修改后更新启动菜单。' },
        { emoji: '📝', text: '`/etc/default/grub` — 编辑启动参数（如控制台模式）的地方。' },
        { emoji: '🛠️', text: '`grubby --info=ALL` — RHEL 提供的便捷查看/更改内核配置的工具。' },
        { emoji: '🆙', text: '安装新内核后，新版本通常会自动成为默认项。' },
      ],
    },
    keyPoints: [
      {
        title: 'GRUB2 配置',
        items: [
          '不要手动编辑 `/boot/grub2/grub.cfg`。',
          '编辑 `/etc/default/grub` 后运行 `grub2-mkconfig` 重新生成。',
          '常用参数：`GRUB_TIMEOUT=5`, `GRUB_CMDLINE_LINUX="..."`。',
        ],
      },
    ],
    terminal: {
      prompt: '$ uname -r',
      output: '5.14.0-70.13.1.el9_0.x86_64',
    },
  },

  // ─── TOPIC 7: 基础网络 ──────────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli 和网络配置',
      panels: [
        { emoji: '🔌', text: '`nmcli device status` — 显示物理网卡状态 (eth0 等)。' },
        { emoji: '🛠️', text: '`nmcli connection show` — 列出已配置的连接配置文件。' },
        { emoji: '📍', text: '`nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual`。' },
        { emoji: '🚀', text: '`nmcli con up "eth0"` — 应用配置并激活连接。' },
        { emoji: '🏠', text: '`hostnamectl set-hostname rhel9-lab.example.com` — 永久更改主机名。' },
      ],
    },
    keyPoints: [
      {
        title: 'NetworkManager 结构',
        items: [
          'Device — 硬件（网卡界面）。',
          'Connection — 软件配置文件（设置）。',
          '一个设备可以拥有多个连接配置文件。',
        ],
      },
      {
        title: '主机名和 DNS',
        items: [
          '`/etc/hostname` — 主机名。',
          '`/etc/hosts` — 本地名称解析 (IP 名称)。',
          '`/etc/resolv.conf` — DNS 服务器（由 NetworkManager 管理）。',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli connection show --active',
      output: 'NAME                UUID                                  TYPE      DEVICE \nenp1s0              7d7c6b5a-4e3d-2c1b-0a9f-8e7d...       ethernet  enp1s0',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld — 防火墙',
      panels: [
        { emoji: '🛡️', text: '`firewall-cmd --get-active-zones` — 显示各接口所属的活动区域。' },
        { emoji: '🔓', text: '`firewall-cmd --add-service=http --permanent` — 永久允许 Web 流量。' },
        { emoji: '🔌', text: '`firewall-cmd --add-port=8080/tcp --permanent` — 开启特定端口。' },
        { emoji: '🔄', text: '`firewall-cmd --reload` — 必需步骤！将持久规则应用到当前会话。' },
        { emoji: '🔍', text: '`firewall-cmd --list-all` — 显示默认区域的完整配置摘要。' },
      ],
    },
    keyPoints: [
      {
        title: '区域 (Zones) 和 规则',
        items: [
          '`public` 区域 — 大多数情况下的默认区域。',
          '`--permanent` 标志 — 若不加此项，规则将在重启后丢失。',
          '运行状态 (Runtime) 规则 vs 持久 (Permanent) 规则。',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --list-services',
      output: 'cockpit dhcpv6-client ssh',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔑 SSH 和文件传输',
      panels: [
        { emoji: '🔐', text: '`ssh-keygen` — 生成密钥对（公钥和私钥）。' },
        { emoji: '📤', text: '`ssh-copy-id username@server` — 将公钥发送到服务器。' },
        { emoji: '📂', text: '`scp file.txt root@server:/tmp/` — 通过网络安全地复制文件。' },
        { emoji: '🔄', text: '`rsync -av /local/ /remote/` — 高效同步目录。' },
        { emoji: '🛡️', text: '配置：`/etc/ssh/sshd_config`。控制 root 访问和端口。' },
      ],
    },
    keyPoints: [
      {
        title: 'SSH 安全性',
        items: [
          '`PermitRootLogin no` — 禁止 root 直接运行（推荐）。',
          '`PasswordAuthentication no` — 强制使用密钥登录 (RSA/Ed25519)。',
          '更改配置后使用 `systemctl reload sshd`。',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server',
      output: 'Number of key(s) added: 1\nNow try logging into the machine...',
    },
  },

  // ─── TOPIC 8: 用户和用户组 ──────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 用户管理',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — 创建自带家目录和 bash 的用户 Mario。' },
        { emoji: '🔑', text: '`passwd mario` — 设置密码。只有 root 才能更改他人密码。' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — 将 Mario 添加到 wheel 组 (sudo)。务必使用 -a！' },
        { emoji: '⏰', text: '`chage -M 90 mario` — 设置密码有效期为 90 天。' },
        { emoji: '🗑️', text: '`userdel -r mario` — 删除用户及其家目录。' },
      ],
    },
    keyPoints: [
      {
        title: 'useradd 选项',
        items: [
          '`-m` — 创建家目录',
          '`-s` — 指定默认 shell',
          '`-u` — 指定特定的 UID',
          '`-c` — 添加备注（如真实姓名）',
        ],
      },
      {
        title: '账户过期管理 (chage)',
        items: [
          '`-l` — 列出过期信息',
          '`-E` — 账号失效日期',
          '`-W` — 密码过期前的警告天数',
        ],
      },
    ],
    terminal: {
      prompt: '$ id mario',
      output: 'uid=1001(mario) gid=1001(mario) groups=1001(mario),10(wheel)',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 用户组和 sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 2000 devs` — 创建具有特定 GID 的组。' },
        { emoji: '👤', text: '`usermod -g prim -G sec user` — 更改主组和附加组。' },
        { emoji: '🔐', text: '`visudo` — 安全地编辑 `/etc/sudoers`（带语法检查）。' },
        { emoji: '📁', text: '`/etc/sudoers.d/` — 存放独立规则文件的理想位置。' },
        { emoji: '❌', text: '`groupdel devs` — 删除组（前提是不能是任何人的主组）。' },
      ],
    },
    keyPoints: [
      {
        title: 'sudoers 配置',
        items: [
          '`%wheel ALL=(ALL) ALL` — 允许 wheel 组成员执行任何操作。',
          '`username ALL=(ALL) NOPASSWD: /usr/bin/dnf` — 允许免密执行特定命令。',
        ],
      },
    ],
    terminal: {
      prompt: '$ groups root',
      output: 'root : root',
    },
  },

  // ─── TOPIC 9: SELinux 和安全 ───────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 SELinux 的三种模式',
      panels: [
        { emoji: '🟢', text: 'Enforcing：强制模式。拦截并记录未经许可的操作。' },
        { emoji: '🟡', text: 'Permissive：宽容模式。不拦截，但记录违规操作。' },
        { emoji: '🔴', text: 'Disabled：禁用模式。完全关闭 SELinux。不推荐。' },
        { emoji: '⚡', text: '`setenforce 0/1` 在宽容和强制模式间即时切换。' },
        { emoji: '📝', text: '`/etc/selinux/config` 定义下次开机后的固定模式。' },
      ],
    },
    keyPoints: [
      {
        title: '状态命令',
        items: [
          '`getenforce` — 显示当前运行模式',
          '`sestatus` — 显示加载策略的详细状态',
        ],
      },
    ],
    terminal: {
      prompt: '$ getenforce',
      output: 'Enforcing',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ 上下文：文件和进程',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — 显示文件的安全标签（上下文）。' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — 根据数据库恢复默认上下文。' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — 永久设置规则。' },
        { emoji: '⚡', text: '`chcon -t type file` — 临时更改上下文（会被 restorecon 重置）。' },
        { emoji: '📊', text: '典型上下文：`user:role:type:level`。其中 "type"（类型）最关键。' },
      ],
    },
    keyPoints: [
      {
        title: '故障排除',
        items: [
          '若权限正确但服务仍报错，请检查 SELinux 上下文。',
          '`mv` 会保留原始上下文，而 `cp` 会继承目标的上下文。',
          '始终首选 `semanage fcontext` + `restorecon` 以便永久修改。',
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
      title: '🔘 SELinux 布尔值和端口',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — 列出系统中所有的功能开关 (booleans)。' },
        { emoji: '🔄', text: '`setsebool -P httpd_enable_homedirs on` — 永久开启一个开关 (-P)。' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — 列出服务允许的端口。' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8088` — 为服务添加额外端口。' },
        { emoji: '🔍', text: '错误信息可在 `/var/log/audit/audit.log` 中的 "AVC" 事件里找到。' },
      ],
    },
    keyPoints: [
      {
        title: 'Booleans vs Ports',
        items: [
          'Booleans — 启用内置功能（如允许 Apache 读取家目录）。',
          'Ports — 允许特定的网络套接字连接。',
        ],
      },
      {
        title: '审计工具',
        items: [
          '`sealert -a /var/log/audit/audit.log` — 分析日志并给出人性化建议。',
          '`ausearch -m AVC` — 精确搜索 SELinux 拒绝事件。',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: 使用 Podman 管理容器 ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Podman 基础',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — 下载 Red Hat 官方通用基础镜像。' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — 启动交互式容器。' },
        { emoji: '🔍', text: '`podman ps` — 列出活动容器。`podman ps -a` 也显示已停止的。' },
        { emoji: '⚡', text: '`podman exec my_con ls /` — 在运行中的容器里执行命令。' },
        { emoji: '🗑️', text: '`podman rm my_con` — 删除容器。`podman rmi ubi9` — 删除镜像。' },
      ],
    },
    keyPoints: [
      {
        title: '生命周期命令',
        items: [
          '`run` — 创建并运行 (it=交互, d=后台, --name=名称)',
          '`stop` / `start` — 暂停和恢复',
          '`logs` — 查看内部输出',
          '`inspect` — 查看网络和挂载详情',
        ],
      },
      {
        title: '与 Docker 的区别',
        items: [
          'Daemonless — 无需庞大的 root 级守护进程常驻后台。',
          'Rootless — 支持以普通用户身份安全运行容器。',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman ps',
      output: 'CONTAINER ID  IMAGE                           COMMAND     CREATED      STATUS      PORTS       NAMES\n9abc12345678  registry.access.../ubi9:latest  /bin/bash   2 hours ago  Up 2 hours              my_ubi',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ 仓库和镜像',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — 在仓库 (docker.io, quay.io) 中搜索镜像。' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — 登录私有仓库。' },
        { emoji: '🏷️', text: '`podman tag app:v1 repo.com/app:v1` — 为上传重命名镜像。' },
        { emoji: '📤', text: '`podman push repo.com/app:v1` — 将镜像推送到中心服务器。' },
        { emoji: '📄', text: '配置：`/etc/containers/registries.conf` 定义默认搜索顺序。' },
      ],
    },
    keyPoints: [
      {
        title: '镜像管理',
        items: [
          '`podman images` — 列出已下载镜像',
          '`podman history` — 查看构建层',
          '`podman image prune` — 删除孤立镜像',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -2',
      output: 'NAME                      DESCRIPTION                STARS   OFFICIAL\ndocker.io/library/nginx   Official build of Nginx.   18000   [OK]',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — 指定基础镜像。' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd` — 在构建过程中执行命令。' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — 将本机文件添加到容器中。' },
        { emoji: '🚪', text: '`EXPOSE 80` — 申明监听端口。`CMD` — 容器启动默认命令。' },
        { emoji: '🔨', text: '`podman build -t my_web:v1 .` — 将文件编译为新镜像。' },
      ],
    },
    keyPoints: [
      {
        title: '常用指令',
        items: [
          '`ENV` — 设置环境变量',
          '`WORKDIR` — 设置工作目录',
          '`ENTRYPOINT` — 主命令（不易被覆盖）',
          '`USER` — 切换到非 root 用户以增强安全性',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd\nCOPY . /var/www/html/\nCMD ["httpd", "-DFOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 持久化和网络',
      panels: [
        { emoji: '📂', text: '`-v /host:/container:Z` — 将主机文件夹挂载到容器。SELinux 环境务必加 :Z！' },
        { emoji: '🔌', text: '`-p 8080:80` — 将主机 8080 端口映射到容器 80 端口。' },
        { emoji: '📦', text: '`podman volume create data` — 创建受 podman 管理的卷。' },
        { emoji: '🌐', text: '`podman network create my_net` — 允许容器间通过名称通信。' },
        { emoji: '⚙️', text: '`podman generate systemd --name mycon --files` — 创建服务以实现开机自启。' },
      ],
    },
    keyPoints: [
      {
        title: 'SELinux 环境下的持久化',
        items: [
          '如果不使用 `:z` (共享) 或 `:Z` (私有) 标志，容器将因 SELinux 拦截而无法写入卷。',
          '这是 RHCSA 考试中第一大失败原因。',
        ],
      },
      {
        title: 'systemd 集成 (rootless)',
        items: [
          '将 `.service` 文件放置在 `~/.config/systemd/user/`。',
          '使用 `systemctl --user enable --now container-xxx`。',
          '重要：`loginctl enable-linger` 确保注销后容器继续运行。',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d -p 8080:80 -v /web:/var/www/html:Z my_web',
      output: '7d7c6b5a4e3d2c1b...',
    },
  },

};
