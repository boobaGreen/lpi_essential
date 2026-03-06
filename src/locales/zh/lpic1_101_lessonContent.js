export const lpic1_101_lessonContent_zh = {
  // ─── TOPIC 1 ───
  'lpic1-101-1-1': `
# 硬件和外设

作为系统管理员，了解 Linux 如何与硬件交互至关重要。

### 核心概念
*   **BIOS/UEFI**：在启动时初始化硬件的固件。
*   **内核 (Kernel)**：管理软件和硬件之间的通信。
*   **驱动程序**：在 Linux 中，它们通常是内核的一部分（模块）。

### 常用命令
*   \`lspci\`：列出所有 PCI 设备（显卡、网卡等）。
*   \`lsusb\`：列出 USB 设备。
*   \`lsmod\`：列出已加载的内核模块。
*   \`modprobe\`：添加或移除模块（自动处理依赖关系）。

### 虚拟文件系统
*   \`/proc\`：实时显示进程和内核信息。
*   \`/sys\`：显示设备和驱动程序信息。
*   \`/dev\`：设备文件（例如 \`/dev/sda\` 代表硬盘）。
`,
  'lpic1-101-1-2': `
# 启动过程

从开启电源到进入登录提示符的过程。

### 启动阶段
1.  **BIOS/UEFI**：执行 POST（自检）并寻找启动设备。
2.  **启动管理器 (Bootloader)**：通常是 GRUB2。允许选择内核。
3.  **内核 (Kernel)**：初始化硬件并挂载根文件系统 (\`/\`)。
4.  **Init/Systemd**：第一个进程 (PID 1)，启动所有其他服务。

### 诊断
*   \`dmesg\`：查看启动期间的内核消息。
*   \`/var/log/boot.log\`：系统服务日志。
`,
  'lpic1-101-1-3': `
# 运行级别和 systemd 目标

运行级别 (Runlevels) 定义了系统的状态。现代发行版使用 **systemd targets**。

### 主要目标 (Targets)
*   \`poweroff.target\` (0)：关机。
*   \`rescue.target\` (1)：单用户救援模式。
*   \`multi-user.target\` (3)：多用户文本模式（服务器常用）。
*   \`graphical.target\` (5)：图形化模式（桌面常用）。
*   \`reboot.target\` (6)：重启。

### 管理命令
*   \`systemctl get-default\`：获取默认目标。
*   \`systemctl isolate graphical.target\`：立即切换模式。
*   \`wall "Message"\`：在关机前向所有登录用户发送消息。
`,

  // ─── TOPIC 2 ───
  'lpic1-102-1-1': `
# 硬盘布局

合理的磁盘分区对性能和安全至关重要。

### 分区方案
*   **MBR**：最多 4 个主分区，支持最大 2TB。
*   **GPT**：基于 UEFI，支持最多 128 个主分区，支持超过 2TB 的大硬盘。

### 标准分区
*   \`/ (root)\`：根文件系统。
*   \`/boot\`：内核和启动管理器文件。
*   \`/home\`：用户数据。
*   \`/var\`：日志和变动频繁的数据。
*   \`swap\`：交换分区（虚拟内存）。
`,

  // ─── TOPIC 3 ───
  'lpic1-103-1-1': `
# 命令行 — 基础

Bash (Bourne Again SHell) 是大多数 Linux 系统的标准 Shell。

### 基础知识
*   **提示符 (Prompt)**：普通用户通常为 \`$\`，root 用户为 \`#\`。
*   **命令**：可以是内置命令 (built-in，如 \`cd\`) 或外部程序 (在 \`/bin\` 等目录下)。
*   \`type\`：查看命令类型。
*   \`which\`：查找执行文件路径。
`,
  'lpic1-104-5-1': `
# 权限和所有权

Linux 是一个多用户系统，具有严格的权限划分。

### UGO 模型
*   **U (User)**：文件所有者。
*   **G (Group)**：所属组。
*   **O (Others)**：其他所有人。

### 权限类型
*   **r (read)**：读取 (4)。
*   **w (write)**：写入 (2)。
*   **x (execute)**：执行 (1)。

例如：\`chmod 755 file\` (rwxr-xr-x)。
`,
};
