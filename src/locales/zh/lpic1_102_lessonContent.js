export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "定制 Shell 环境",
    content: `
定制 Shell 环境可以优化工作流。配置文件在 Shell 启动时加载。

### 配置文件 (Bash)
- **/etc/profile**: 全局配置（登录 Shell）。
- **/etc/bash.bashrc**: 全局配置（交互式非登录 Shell）。
- **~/.bash_profile**, **~/.profile**: 用户特定设置。
- **~/.bashrc**: 最常用的文件，用于定义别名和个人变量。

### 环境变量与别名
- **export**: 使变量对子进程可见。
- **PATH**: 定义 Shell 搜索可执行文件的目录列表。
- **alias**: 为复杂命令创建快捷方式（例如 \`alias ll='ls -la'\`）。

### Skeleton 目录
- **/etc/skel/**: 包含复制到新用户家目录的默认文件。
    `
  },
  '105.2': {
    title: "定制或编写简单脚本",
    content: `
Shell 脚本可以自动化重复任务。

### 脚本结构
- **Shebang (#!)**: 第一行指定解释器（例如 \`#!/bin/bash\`）。
- **权限**: 脚本必须具有可执行权限（\`chmod +x script.sh\`）。

### 逻辑运算符
- **&&**: 仅在第一条命令成功时执行第二条。
- **||**: 仅在第一条命令失败时执行第二条。
    `
  },

  // --- TOPIC 106 ---
  '106.1': {
    title: "安装与配置 X11",
    content: `
X Window System (X11) 是 Linux 图形界面的基础框架。

### X11 架构
- **X Server**: 管理硬件（显示器、键盘、鼠标）。
- **X Client**: 图形应用程序。
- **Wayland**: X11 的现代继任者，更简单、更安全。

### 工具
- **xdpyinfo**: 显示 X 服务器信息。
- **DISPLAY**: 指定图形输出发送位置的环境变量。
    `
  },

  // --- TOPIC 107 ---
  '107.1': {
    title: "管理用户账户与组",
    content: `
- **/etc/passwd**: 账户信息。
- **/etc/shadow**: 密码哈希（仅 root 可读）。
- **id**: 显示 UID 和 GID。
- **useradd / usermod / userdel**: 用户管理命令。
    `
  },

  // --- TOPIC 108 ---
  '108.1': {
    title: "维护系统时间",
    content: `
- **hwclock**: 管理硬件时钟 (RTC)。
- **NTP**: 通过网络同步时间的协议。
    `
  },

  // --- TOPIC 109 ---
  '109.1': {
    title: "互联网协议基础",
    content: `
- **IPv4 / IPv6**: 网络寻址。
- **TCP / UDP**: 传输层协议。
    `
  },
  '109.2': {
    title: "持久化网络配置",
    content: `
- **NetworkManager**: nmcli/nmtui 工具。
- **Netplan**: 基于 YAML 的配置（Ubuntu）。
- **ip addr**: 查看 IP 地址。
    `
  },

  // --- TOPIC 110 ---
  '110.1': {
    title: "安全管理任务",
    content: `
- **SUID/SGID**: 特殊权限位。
- **Sticky Bit**: /tmp 目录下的删除保护。
- **sudo**: 以 root 权限执行命令。
    `
  }
};
