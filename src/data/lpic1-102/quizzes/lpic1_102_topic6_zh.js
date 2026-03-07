// LPIC-1 102 Quiz Pool — Chinese — Topic 110 (安全)

export const lpic1_102_topic6Quizzes_zh = [
  // ─── 110.1 执行安全管理任务 (7 题) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可以快速找出系统中设置了 SUID 权限位的全部文件？",
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: "使用 find 的权限搜索功能（-perm 4000 或 /4000）可以审计 SUID 程序。"
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "在编辑 `/etc/sudoers` 文件时，强烈推荐使用哪个命令以避免因语法错误造成锁定？",
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: "`visudo` 会在退出前强制进行语法校验，只有格式正确时才允许保存并退出。"
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "哪个命令可以显示最近登录过系统的用户列表及其连接时间？",
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: "`last` 工具通过读取 /var/log/wtmp 提供历史登录记录查询。",
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "在 sudoers 文件中，如果名字前面带有 `%` 前缀，则表示该名字属于什么？",
    options: ['管理员账号', '系统用户组', '一个别名', '特殊权限'],
    correct: 1,
    explanation: "例如 `%admin` 或 `%wheel` 表示对该组内所有成员生效的规则。",
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "哪个命令可快速列出当前系统所有打开的文件以及打开它们的进程 ID？",
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: "`lsof` (List Open Files) 是安全审计中监控资源占用的核心工具。",
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "哪条命令常用于临时限制当前 Shell 环境下用户可以执行的最大进程数量？",
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: "`ulimit` 用于控制软/硬系统资源限制（如 CPU 时间、文件大小等）。"
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "在哪个文件中可以定义跨会话持久生效的每用户资源限制（如最大登录次数、内存配额）？",
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: "这是 PAM (可插拔认证模块) 下 pam_limits.so 的主配置文件。",
  },

  // ─── 110.2 配置主机安全 (6 题) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "在 `/tmp` 目录上设置 `Sticky Bit` 会带来什么安全保障？",
    options: [
      "禁止文件被修改（只读）",
      "普通用户只能删除或重命名自己在其中创建的文件",
      "自动加密新文件内容",
      "防止系统死机时丢失数据"
    ],
    correct: 1,
    explanation: "Sticky Bit 防止了在一个公共可写目录下出现“互相删档”的乱象。"
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "哪个文件用于指示 TCP Wrappers 防护范围下应被明确“拒绝访问”的主机？",
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: "TCP Wrappers 机制首选匹配 `/etc/hosts.allow`，次选 `/etc/hosts.deny`。"
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "管理员常用哪些命令来探测本机哪些网络端口对外开放并处于监听状态？",
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', '以上所有均可以'],
    correct: 3,
    explanation: "这三者都能提供详细的端口开放信息，用于评估服务器暴露风险。",
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "GnuPG 软件中，哪个参数用于使用“密码对称加密”来加密一个独立文件？",
    options: [
      'gpg --gen-key',
      'gpg -c filename',
      'gpg --encrypt filename',
      'gpg --sign filename'
    ],
    correct: 1,
    explanation: "`-c` 选项代表对称加密，会提示输入一段用于加解密的私密口令。"
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "如何罗列出您本地 GPG 钥匙串中的全部“公钥”信息？",
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: "`gpg --list-keys` 或简化形式 `gpg -k` 都能导出公钥清单。",
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "现代 Linux 中的“影子口令 (Shadow Passwords)”技术主要为了解决旧版系统的哪个隐患？",
    options: [
      "防止口令过期失效",
      "将高价值的口令哈希值从对所有人可见的 passwd 文件移至仅 root 可见的文件中",
      "自动拦截弱口令注册",
      "加密用户本身的登录名"
    ],
    correct: 1,
    explanation: "这使得普通用户无法读取散列值进行脱机爆破尝试。"
  },

  // ─── 110.3 在用户层面配置安全 (7 题) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "在 `sshd_config` 中配置 `PermitRootLogin no` 会导致什么后果？",
    options: [
      "任何情况下都无法通过 SSH 登录为 root 用户",
      "root 登录需要两层密码",
      "登录提示不显示 root 的存在",
      "仅禁用 root 的 Web 管理面板"
    ],
    correct: 0,
    explanation: "此举能大幅抵御攻击者对 root 权限的直接暴破突防。"
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "`ssh-agent` 服务的主要定位是什么？",
    options: [
      "在后台监控 SSH 连接漏洞",
      "持有一个临时的解密后的私钥，之后再登录新服务器时不再需要繁琐地反复输入口令",
      "全天候尝试破解攻击者的 IP",
      "为数据隧道提供压缩加密支持"
    ],
    correct: 1,
    explanation: "Agent 提供了一个密钥管理代理，提升了 SSH 操作的高效率和便捷性。"
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "生成一组全新的 SSH 公私钥对需要使用哪个核心工具？",
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: "`ssh-keygen` 支持 RSA、ED25519 等多种先进算法。",
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "若要进行免密快捷登录，您的“公钥”内容应存入远程服务器具体哪个文件中？",
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: "`authorized_keys` 文件是服务器用于认证所有合法持有私钥并尝试登录者的依据。",
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "一个典型的 RSA 私钥文件的本地默认命名规则通常是什么？",
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: "`id_rsa` 不带后缀，对应带 `.pub` 后缀的公钥文件。",
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "哪个常用助手命令可以一步到位地将本地公钥同步到远程主机的正确受信任位置？",
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: "`ssh-copy-id` 免去了手动操作 authorized_keys 的麻烦，并能自动处理权限。",
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "要在 SSH 服务端执行“百分百密钥鉴权”，必须将 `sshd_config` 中的哪个选项设为 `no`？",
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: "将 `PasswordAuthentication` 设为 `no` 后，服务器将不再接收简单的密码输入登入方式。"
  },
];
