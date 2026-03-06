// RHCSA Quiz — Topic 3: Running System Management (简体中文) — 22 questions

export const rhcsaTopic3QuizzesZH = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个 systemd 目标（target）对应于旧版 SysV init 中的运行级别 3（多用户模式，无图形界面）？',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: '`multi-user.target` 对应于 runlevel 3（CLI 命令行模式）。而 `graphical.target` 对应于 runlevel 5（GUI 图形模式）。',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如何永久性地改变系统的默认启动目标（target）？',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: '`systemctl set-default <target>` 会设置永久的默认启动目标。它的原理是在 `/etc/systemd/system/default.target` 创建一个指向所需目标的符号链接。',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '在系统启动时，应该在 GRUB 菜单中追加哪个内核参数，以便中断启动过程并进入紧急 shell（用于 RHCSA 救援操作）？',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: '追加 `rd.break` 参数会在 `initramfs` 阶段（挂载实际的 `/sysroot` 之前）中断启动。这在 RHEL 9 中主要被用来重置遗忘的 root 密码。',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '在 RHEL 9 (启用了 SELinux) 中，使用 rd.break 成功重置 root 密码后，你在重启前“必须”执行哪个命令？',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: '执行 `touch /.autorelabel` 命令会在根目录创建一个隐藏文件。这会强制 SELinux 在下一次系统全面启动时对整个文件系统重新打标签（因为在绕过正常系统直接修改了密码文件后，其安全上下文标志会脱落或错乱）。',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能在“不重启系统”的情况下，直接让系统当即切换到救援目标（单用户模式）？',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: '`systemctl isolate <target>` 会命令系统立即切换到指定的工作状态（target），这意味着它会关闭当前不需要的服务并仅启动该 target 定义的服务。',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如何查看当前系统配置的默认启动目标？',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: '命令 `systemctl get-default` 会查询并显示出当前 `default.target` 符号链接所指向的名称（例如输出 graphical.target）。',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '命令 `kill -9 <PID>` 会向进程发送哪种信号？',
    options: ['SIGTERM (15) — 柔性终止', 'SIGKILL (9) — 强制立即终止', 'SIGHUP (1) — 重新加载配置', 'SIGSTOP (19) — 暂停进程'],
    correct: 1,
    explanation: 'SIGKILL (代号 9) 会强制内核立即终止并杀掉该进程。进程无法捕获也根本无法忽略这个信号。',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令可以将一个“系统正在运行中”的进程（如 PID 1234）的 nice 优先级数值修改为 -5？',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: '`renice -n <数值> -p <PID>` 专门用于更改已常驻运行进程的 nice 值。而 `nice` 命令只能在“全新启动”程序时设定优先级。',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '对于进程的 nice 值来说，什么范围代表着拥有“最高”的被执行优先级？',
    options: ['100 (最大的数字即最高级别)', '-20 (最低的数字，最高的优先级)', '+19 (数值越大越优先)', '0 (默认就是最高)'],
    correct: 1,
    explanation: '在 Linux 调度中，nice 值的范围固定是 -20 到 +19。负数值意味着“更少的主动让步 (nice)”，因此获得了更多的 CPU 运算时间。且只有 root 能赋值给负数。',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令组合通常被用来一次性查看“系统所有用户”及其后台进程的详细扩展状态格式？',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: '`ps aux` 是最经典的用法。a = 包含所有其他用户的进程，u = 展现为面向用户的详细字段格式（含 CPU/MEM占用），x = 包含那些没有挂载在终端上的后台守护进程。',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令能够以名字 "httpd" 为依据，一次性向所有关联的旧进程发送 SIGTERM 终止信号？',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: '`killall <进程名>` 会一次性向所有精准匹配该名称的进程发送默认的 SIGTERM(15) 信号。而 `pkill` 更强大，支持正则和模式匹配。',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '如果用 `Ctrl+Z` 暂停了一个任务，终端显示其作业编号（job number）为 %2。怎样才能将它重新恢复到“前台”继续运行？',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: '`fg %<编号>` (foreground) 会将后台或暂停的任务拉扯回前台屏幕并接管终端。而 `bg` 则是在后台继续默默唤醒它。',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个快捷命令能够使得 sshd 服务不仅被配置为“开机自启”，而且能够在“此时此刻立刻启动”？',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: '`systemctl enable --now <服务名>` 结合了 enable（赋予开机自启权限）和 start（立即拉起运行状态）这两个动作，是极其现代和优雅的语法。',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '在 systemd 中，对于同一个服务而言，`stop` 和 `disable` 的主要区别是什么？',
    options: [
      '两者完全一样',
      'stop 只是让它现在当即停止；而 disable 是禁止它在下次系统开机时自动启动',
      'disable 让它现在停止；stop 则是将服务的代码卸载',
      'stop 是永久删除该服务',
    ],
    correct: 1,
    explanation: '`stop` 会从目前的内存进程中中断和剔除该服务，但如果机器重启，它依然可能会弹起来。`disable` 仅剥夺它的开机自启权，但对当前进程状没有影响。',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '哪个命令能够彻底、强制地阻止某项服务被意外启动（甚至是手动通过 start 命令或者被其他服务依赖拉起都不行）？',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: '`systemctl mask` 是系统管理员的最强封印。它会将该服务的单元文件符号链接到 `/dev/null`，使得任何方式都彻底无法启动它，直到你执行关联的 `unmask`。',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '如何获取某个系统服务详尽的健康状态、PID 和最近的几行日志？',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: '`systemctl status <服务名>` 是诊断服务最常用的第一手段。它能直观展示当前的状态绿点/红点、进程树树状图以及对应的 systemd 日志（journal）尾部摘要。',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '当你手动修改了位于系统底层的某个 `.service` 服务配置文件之后，你“必须”立刻运行哪条命令才能让 systemd 注意到并将其应用？',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: '由于 systemd 在启动时会将单元文件的内容缓存到内存中以追求极致速度，如果你在磁盘（如 `/etc/systemd/system/`）中强行修改了配置脚本，必须运行 `systemctl daemon-reload` 来强制它重新扫描磁盘架构。',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '哪个命令能够像滚动的瀑布流一样，全屏实时跟踪并动态显示系统产生的最新日志条目？',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: '`journalctl -f` 这里的 `-f` 代表 "follow"（跟随），只要日志后台不断产生新内容，它就会马上渲染在终端屏幕底部，与 `tail -f` 行为十分相似，但具备 systemd 颜色的格式化。',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '如果在使用 journalctl 获取系统综合日志时，你只想单独过滤出针对 "sshd" 这个服务的相关日志，你应该加上什么参数？',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: '`-u` (unit) 参数是精确过滤 systemd 单元日志的核心手段。使用 `journalctl -u sshd` 就能使得干扰信息的杂音大幅降低。',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '要想持久化 systemd 二进制日志（journal），使其在设备关机重启后不被清空丢失，需要修改并编辑哪个核心配置文件？',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: '默认情况下日志可能被保存在内存 (`/run/log/journal/`) 中跑丢。要使之持久，需编辑 `/etc/systemd/journald.conf` 文件并将变量 `Storage=` 修改为 `persistent`（持久模式）。',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '你需要添加一个定时任务（cron job），但是这仅限用于“当前登录用户”，你应该使用命令打开哪个编辑器？',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: '命令 `crontab -e` 永远是普通用户编辑自己私有计划任务的最佳实践入口。它会自动启动默认编辑器，并在保存后自动校验语法的基本正确性。',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '仔细观察格式，以下哪条 cron 定时规则条目代表这句需求：“在每周一的凌晨三点半（3:30 AM），触发脚本”？',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Cron 的五段顺序永远是：[分钟] [小时] [日期] [月份] [星期]。30（分钟） 3（小时） *（任意日期） *（任意月份） 1（星期一）。因此 `30 3 * * 1` 是这道题的标准答案。',
  },
]
