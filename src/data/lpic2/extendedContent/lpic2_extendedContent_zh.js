export const lpic2_extendedContent_zh = {
  // Topic 200: Capacity Planning
  'lpic2-200': [
    {
      title: '容量规划与监控',
      content: '容量规划是预测未来 IT 资源需求的过程，旨在瓶颈发生前予以避免。这包括监控当前的利用率，并根据历史趋势和新的业务需求预测未来的增长。',
    },
    {
      title: '使用 vmstat 和 mpstat 监控资源',
      content: '为了解系统如何使用其资源，我们使用 `vmstat` 和 `mpstat` 等工具。\n\n- **vmstat (Virtual Memory Statistics)**：提供有关进程、内存、交换分区、I/O、系统和 CPU 活动的信息。高 `iowait` 通常预示着系统性能受限于存储设备。\n- **mpstat (Multiprocessor Statistics)**：允许单独分析每个 CPU 核心的利用率。这对于识别设计不佳的进程是否在多核系统中使单个核心饱和至关重要。',
    },
    {
      title: '使用 sar 进行历史分析',
      content: '`sar` (System Activity Reporter) 工具是 `sysstat` 软件包的一部分，对容量规划至关重要。它收集、报告并保存有关系统活动的信息。与实时工具不同，`sar` 允许回顾过去（通常通过 `/var/log/sysstat/` 中的文件），以分析发生在夜间或周末的负载峰值。',
    },
    {
      title: '基准测试工具',
      content: '要了解系统的“极限”在哪里，请使用基准测试工具：\n\n- **Iperf**：用于测量两台主机之间的最大网络吞吐量。\n- **IOzone**：用于测试文件系统性能和磁盘 I/O。\n- **Stress-ng**：允许对系统施加人工负载，以观察其在极端压力下的表现。',
    },
  ],

  // Topic 201: Linux Kernel
  'lpic2-201': [
    {
      title: '内核组件与运作方式',
      content: 'Linux 内核是操作系统的核心。它管理硬件并为应用程序提供基础服务。关键组件包括：\n\n- **vmlinuz**：压缩后的内核可引导镜像。\n- **initramfs**：加载到 RAM 中的临时文件系统，包含挂载真实根文件系统所需的驱动程序。\n- **模块**：可以根据需要在运行时动态加载到内核或从中卸载的代码段。',
    },
    {
      title: '模块管理',
      content: '模块使内核能够保持精简，同时支持广泛的硬件。\n\n- **lsmod**：列出当前加载的模块。\n- **modprobe**：推荐的加载/卸载模块方式，因为它会自动处理依赖关系。\n- **insmod/rmmod**：加载/卸载特定 `.ko` 文件的低级工具，不检查依赖关系。\n- **modinfo**：显示模块的详细信息（作者、许可证、参数）。',
    },
    {
      title: '内核编译',
      content: '编译自己的内核允许针对特定硬件进行优化或启用实验性功能。经典步骤为：\n\n1. `make menuconfig`：交互式配置。\n2. `make`：编译内核和模块。\n3. `make modules_install`：将模块安装到 `/lib/modules/`。\n4. `make install`：将内核复制到 `/boot` 并更新引导程序。',
    },
    {
      title: '运行时参数修改',
      content: '`/proc/sys/` 文件系统允许在无需重启的情况下动态更改内核行为。`sysctl` 工具简化了这一管理过程。\n\n- **sysctl -a**：显示所有可更改的参数。\n- **sysctl -p**：从 `/etc/sysctl.conf` 加载参数以使其永久生效。',
    },
  ],

  // Topic 202: System Startup
  'lpic2-202': [
    {
      title: 'SysV-init 启动自定义',
      content: '尽管 systemd 已成为标准，但 SysV-init 知识仍是 LPIC-2 课程的一部分。核心文件是 `/etc/inittab`，它定义了默认运行级别 (runlevel) 并启动初始化脚本。\n\n- **运行级别**：0 (停机), 1 (单用户), 3 (多用户控制台), 5 (多用户图形界面), 6 (重启)。',
    },
    {
      title: 'GRUB 2 引导加载程序',
      content: 'GRUB 2 是主流的引导加载程序。它同时支持传统 BIOS 和 UEFI。\n\n- **配置**：切勿直接编辑 `/boot/grub/grub.cfg`。请利用 `/etc/default/grub` 和 `/etc/grub.d/` 中的脚本，然后运行 `grub-mkconfig -o /boot/grub/grub.cfg`。\n- **安装**：通常通过 `grub-install /dev/sdX` 完成。',
    },
    {
      title: '系统恢复',
      content: '发生故障时，有几种可能的策略：\n\n1. **启动参数**：在 GRUB 的内核命令行末尾添加 `1`, `s` 或 `init=/bin/bash`。\n2. **救援模式**：通过外部介质 (Live-CD) 启动，挂载根文件系统并使用 `chroot`，以便像在已安装系统中一样进行操作（修复 GRUB、重置丢失的密码等）。',
    },
  ],

  // Topic 203: Filesystem and Devices
  'lpic2-203': [
    {
      title: '文件系统运作',
      content: 'Linux 支持多种文件系统 (ext4, XFS, Btrfs)。\n\n- **Tune2fs**：允许修改 ext2/3/4 文件系统的参数（如检查间隔）。\n- **XFS**：健壮且高性能的系统，通过 `xfs_admin` 和 `xfs_growfs` 等工具管理。\n- **UUID/Labels**：在 `/etc/fstab` 中使用唯一标识符 (UUID) 比使用 `/dev/sda1` 等可能变化的设备名更安全。',
    },
    {
      title: '存储维护与健康',
      content: '数据安全至关重要。\n\n- **fsck**：检查并修复文件系统的完整性。切勿在以读写模式挂载的分区上运行！\n- **S.M.A.R.T.**：硬盘内置的自我监控协议。使用 `smartctl` 预防硬件故障。',
    },
    {
      title: '使用 udev 管理设备',
      content: '`udev` 是动态创建 `/dev/` 下文件的设备管理器。它允许定义持久性规则，例如确保打印机或网卡始终获得相同的名称或权限。',
    },
  ],

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204': [
    {
      title: '软件 RAID 配置',
      content: 'RAID (磁盘冗余阵列) 将多个物理磁盘组合成一个逻辑单元，以实现性能、冗余或两者兼而有之。\n\n- **RAID 级别**：RAID 0 (性能), RAID 1 (镜像), RAID 5 (分布式校验), RAID 6 (双重校验)。\n- **mdadm**：Linux 中用于创建 (`--create`)、监控 (`--detail`) 和修复 RAID 阵列的主要工具。',
    },
    {
      title: '逻辑卷管理器 (LVM)',
      content: 'LVM 在物理磁盘之上添加了一个抽象层，实现了极其灵活的存储管理。\n\n- **PV (Physical Volume)**：物理磁盘或分区。\n- **VG (Volume Group)**：将多个 PV 汇总到一个公共空间池中。\n- **LV (Logical Volume)**：VG 中的逻辑“分区”，可在运行时调整大小。',
    },
    {
      title: '存储优化',
      content: '微调性能：\n\n- **hdparm**：SATA/IDE 参数的设置和测试。\n- **nvme-cli**：现代 NVMe 磁盘的管理和监控。\n- **SSD Trim**：通过告知未使用的块来维持 SSD 性能，至关重要。',
    },
  ],

  // Topic 205: Network Configuration
  'lpic2-205': [
    {
      title: 'IP 配置与路由',
      content: 'Linux 现代网络配置使用 `iproute2` 套件。\n\n- **ip addr**：IP 地址管理。\n- **ip link**：接口状态管理。\n- **ip route**：路由表管理。\n- **内核变量**：必须激活 `/proc/sys/net/ipv4/ip_forward` (1)，Linux 才能路由数据包。',
    },
    {
      title: '高级网络技术',
      content: '针对特定需求，使用 Bonding 或 Bridging：\n\n- **Bonding**：将多个物理接口聚合为一个逻辑接口，以提高带宽或实现冗余。\n- **Bridging**：在第 2 层 (数据链路层) 连接网络段，常用于虚拟化环境。',
    },
    {
      title: '网络故障排除',
      content: '基本的诊断工具：\n\n- **tcpdump**：命令行报文分析器。\n- **nc (netcat)**：测试端口连接的“瑞士军刀”。\n- **ss / netstat**：查看哪些进程正在接听哪些端口。',
    },
  ],

  // Topic 206: System Maintenance
  'lpic2-206': [
    {
      title: '从源码编译软件',
      content: '有时官方软件包是不够的。循环通常是：`tar xzf` (解压), `./configure` (检查依赖和选项), `make` (编译) 和 `sudo make install` (安装)。',
    },
    {
      title: '使用 rsync 进行备份与同步',
      content: '`rsync` 是备份的标杆工具，因为它使用增量传输（仅拷贝差异）。`-a` (归档) 选项是必须的，以保留权限、链接和时间戳。',
    },
    {
      title: '告知用户',
      content: '作为管理员，你必须沟通维护工作：\n\n- **/etc/motd**：登录后的提示语。\n- **/etc/issue**：本地终端登录前的横幅。\n- **wall**：立即向所有打开的终端发送消息。',
    },
  ],

  // Topic 207: Domain Name Server
  'lpic2-207': [
    {
      title: 'BIND9 DNS 服务器',
      content: 'BIND (Berkeley Internet Name Domain) 是全球使用最广泛的 DNS 服务器。它可以作为仅缓存、转发器或权威服务器运行。\n\n- **named.conf**：主配置文件。',
    },
    {
      title: '区域与记录',
      content: '域名被划分为区域（正向/反向）。\n\n- **A (Address)**：名字 -> IPv4。\n- **AAAA**：名字 -> IPv6。\n- **MX (Mail Exchange)**：域名的邮件服务器。\n- **CNAME (Canonical Name)**：现有名字的别名。',
    },
    {
      title: '安全与 DNSSEC',
      content: '传统 DNS 容易受到缓存投毒攻击。DNSSEC 通过对记录进行数字签名来保证其真实性。',
    },
  ],

  // Topic 208: Web Services
  'lpic2-208': [
    {
      title: 'Apache Web 服务器',
      content: 'Apache HTTP 服务器稳健且模块化。它支持 VirtualHosts (虚拟主机)，以便在单个 IP 上托管多个域名。',
    },
    {
      title: 'Nginx 与反向代理',
      content: 'Nginx 以其在低资源消耗下的高性能而闻名。非常适合提供静态文件和作为反向代理（负载均衡器）。',
    },
    {
      title: '使用 SSL/TLS 的 HTTPS',
      content: 'Web 加密是必须的。`OpenSSL` 用于生成证书。`Let\'s Encrypt` 提供免费、自动化的证书。',
    },
  ],

  // Topic 209: File Sharing
  'lpic2-209': [
    {
      title: 'Samba：Windows 网络中的 Linux',
      content: 'Samba 允许通过 SMB/CIFS 协议实现互操作性。它可作为文件、打印服务器或域控制器 (Active Directory) 运作。',
    },
    {
      title: 'NFS：Unix/Linux 原生共享',
      content: 'NFS (网络文件系统) 是 Unix 共享的标准。远程文件夹会被透明地挂载到本地目录树中。',
    },
  ],

  // Topic 210: Network Client Management
  'lpic2-210': [
    {
      title: 'DHCP：自动配置',
      content: 'DHCP 自动化了 IP、网关和 DNS 的分配。`isc-dhcp-server` 是 Linux 上的典范。',
    },
    {
      title: 'PAM：模块化认证',
      content: 'PAM (可插拔认证模块) 集中了身份验证过程。可以在不更改应用程序的情况下更换验证方法（密码, LDAP）。',
    },
    {
      title: 'LDAP：中央目录',
      content: 'LDAP 中央存储用户、组和资源，大大简化了大型公司的访问管理。',
    },
  ],

  // Topic 211: E-Mail Services
  'lpic2-211': [
    {
      title: 'Postfix 邮件服务器',
      content: 'Postfix 是一个邮件传输代理 (MTA)，专为速度和安全而设计。它管理通过 SMTP 进行的邮件发送。',
    },
    {
      title: '投递与访问：Dovecot',
      content: '当 Postfix 负责运输时，Dovecot 允许通过 IMAP/POP3 进行访问并管理本地存储 (Maildir/mbox)。',
    },
  ],

  // Topic 212: System Security
  'lpic2-212': [
    {
      title: '使用 iptables 进行防御',
      content: '`iptables` (和 `nftables`) 用于配置内核中的 Netfilter。过滤规则基于源/目的 IP、端口和协议。',
    },
    {
      title: '入侵检测与审计',
      content: '防火墙之外的安全：`Fail2Ban` 封禁可疑 IP, `rkhunter` 搜索 rootkit。',
    },
    {
      title: 'SSH 加固',
      content: 'SSH 是主要的入口。请禁用 root 登录，使用非标准端口，并优先考虑使用公钥认证。',
    },
  ],
}
