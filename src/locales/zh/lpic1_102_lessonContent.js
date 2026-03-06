// LPIC-1 102 Lesson Content — Chinese
// 102 考试的所有 20 多节课的内容

export const lpic1_102_lessonContent_zh = {
  // ──── Topic 105: 外壳和脚本编写 ────
  'lpic1-102-105-1': {
    title: "自定义外壳环境",
    comic: {
      title: '您的数字家园 🏠',
      panels: [
        { emoji: '🎒', text: '配置文件：/etc/profile 适用于所有人，~/.bashrc 是您的私人背包。' },
        { emoji: '🗺️', text: 'PATH：外壳的地图。如果不在列表中，外壳就找不到它！' },
        { emoji: '🔦', text: 'Alias：ll=\'ls -la\'。不要写冗长的代码，使用快捷方式。' },
        { emoji: '📦', text: '/etc/skel：急救包。新用户会获得这些基础文件。' },
      ]
    },
    keyPoints: [
      { title: '配置文件', items: ['/etc/profile — 全局（登录）', '~/.bashrc — 个人（交互式）', '/etc/skel/ — 新用户模板'] },
      { title: '环境变量', items: ['export — 将变量传递给子进程', 'PATH — 查找程序的路径', 'env / printenv — 列出变量'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "编写简单脚本",
    comic: {
      title: 'Bash 机器人 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash。告诉内核：“嘿，用 Bash 处理这个！”' },
        { emoji: '🏃', text: 'Chmod +x：没有执行权限，您的脚本只是一块石头。' },
        { emoji: '🔀', text: 'If/Then/Else：脚本的大脑。根据测试做出决定。' },
        { emoji: '🔄', text: '循环 (For/While)：重复任务 100 次而不会感到疲倦。' },
      ]
    },
    keyPoints: [
      { title: '结构', items: ['#!/bin/bash — Shebang', 'chmod +x script.sh — 至关重要', 'exit [0-255] — 退出状态 (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "你好 $USER"', 
      output: '你好 root' 
    },
  },

  // ──── Topic 106: 用户界面和桌面 ────
  'lpic1-102-106-1': { title: "安装和配置 X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "图形桌面", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "辅助功能", terminal: { prompt: '$ orca --setup', output: '[读屏软件菜单]' } },

  // ──── Topic 107: 管理任务 ────
  'lpic1-102-107-1': { title: "管理用户和组帐户", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "自动化 (Cron 和定时器)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "本地化", terminal: { prompt: '$ locale', output: 'LANG=zh_CN.UTF-8' } },

  // ──── Topic 108: 基本系统服务 ────
  'lpic1-102-108-1': { title: "时间同步 (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "日志记录 (Rsyslog 和 Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "邮件 MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: '邮件队列为空' } },
  'lpic1-102-108-4': { title: "打印 (CUPS)", terminal: { prompt: '$ lpstat -p', output: '打印机 PDF 处于空闲状态。' } },

  // ──── Topic 109: 网络基础 ────
  'lpic1-102-109-1': { title: "互联网协议 (TCP/IP)", keyPoints: [{ title: '堆栈', items: ['IPv4/IPv6 — 地址', 'TCP/UDP — 传输', 'ICMP — 诊断'] }] },
  'lpic1-102-109-2': { title: "网络配置", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "网络故障排除", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "DNS 配置", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: 安全 ────
  'lpic1-102-110-1': { title: "安全任务", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "主机安全", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "加密 (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
