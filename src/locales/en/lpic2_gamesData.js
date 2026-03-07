// LPIC-2 Games Data — English
// Used by useGameData() when courseId === 'lpic2'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 200 — Capacity Planning
  { command: 'iostat -xz 1', description: 'Show extended I/O statistics for active devices every second' },
  { command: 'vmstat 5', description: 'Report virtual memory statistics every 5 seconds' },
  { command: 'sar -u 1 5', description: 'Show CPU usage every second for 5 iterations' },
  { command: 'collectd', description: 'Daemon that collects system performance data periodically' },
  // Topic 201 — Linux Kernel
  { command: 'make menuconfig', description: 'Interactive text-based kernel configuration menu' },
  { command: 'lsmod', description: 'Show currently loaded kernel modules' },
  { command: 'modprobe vfat', description: 'Load the vfat kernel module and its dependencies' },
  { command: 'depmod -a', description: 'Regenerate the module dependency database' },
  // Topic 202 — System Startup
  { command: 'systemctl set-default multi-user.target', description: 'Set system to boot into text mode by default' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Regenerate the GRUB2 boot configuration' },
  { command: 'update-initramfs -u', description: 'Update the initial RAM filesystem image' },
  // Topic 203 — Filesystem & Devices
  { command: 'tune2fs -m 1 /dev/sda1', description: 'Reduce reserved root space to 1% on ext4' },
  { command: 'xfs_info /dev/sdb1', description: 'Display XFS filesystem geometry information' },
  { command: 'udevadm monitor', description: 'Monitor udev kernel events in real time' },
  // Topic 204 — Advanced Storage
  { command: 'mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sd[b-d]1', description: 'Create a RAID 5 array with three devices' },
  { command: 'pvcreate /dev/sdb1', description: 'Initialize a disk partition as an LVM Physical Volume' },
  { command: 'lvextend -L +5G -r /dev/vg0/data', description: 'Extend an LVM Logical Volume and resize the filesystem' },
  // Topic 205 — Networking
  { command: 'ip route add default via 192.168.1.1', description: 'Add a default gateway route' },
  { command: 'ss -tulpn', description: 'Show TCP/UDP listening ports with process names' },
  { command: 'tcpdump -i eth0 port 80', description: 'Capture HTTP traffic on interface eth0' },
  // Topic 206 — System Maintenance
  { command: './configure && make && make install', description: 'Classic source code compilation and installation flow' },
  { command: 'rsync -avz /data/ remote:/backup/', description: 'Incrementally synchronize directory to remote host' },
  // Topic 207 — DNS
  { command: 'named-checkconf', description: 'Verify BIND configuration file syntax' },
  { command: 'named-checkzone example.com db.example.com', description: 'Check DNS zone file for errors' },
  { command: 'rndc reload', description: 'Reload BIND DNS server zones without restart' },
  // Topic 208 — Web Services
  { command: 'apachectl configtest', description: 'Test Apache configuration syntax for errors' },
  { command: 'nginx -t', description: 'Test Nginx configuration syntax for errors' },
  { command: 'a2ensite mysite.conf', description: 'Enable an Apache virtual host site on Debian' },
  // Topic 209 — File Sharing
  { command: 'smbpasswd -a mario', description: 'Add a Samba user and set their password' },
  { command: 'exportfs -ra', description: 'Re-export all NFS shares from /etc/exports' },
  // Topic 210 — Network Client Management
  { command: 'dhcpd -t', description: 'Check ISC DHCP server configuration syntax' },
  { command: 'ldapsearch -x -b "dc=example,dc=com"', description: 'Anonymous LDAP search from base DN' },
  // Topic 211 — E-Mail Services
  { command: 'postconf -n', description: 'Show non-default Postfix configuration parameters' },
  { command: 'mailq', description: 'Display the mail queue for pending messages' },
  // Topic 212 — System Security
  { command: 'iptables -L -n -v', description: 'List all firewall rules with packet counters' },
  { command: 'fail2ban-client status sshd', description: 'Show Fail2Ban status and banned IPs for sshd' },
  { command: 'ssh-keygen -t ed25519', description: 'Generate an Ed25519 SSH key pair' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1 — Easy
  { text: 'The command `iostat` is typically provided by the `sysstat` package and shows CPU and I/O statistics.', answer: true, explanation: 'Yes, iostat is part of sysstat and is an essential tool for measuring disk I/O performance.', difficulty: 1 },
  { text: '`lsmod` can load new kernel modules on demand.', answer: false, explanation: 'lsmod only lists currently loaded modules. To load modules, use modprobe or insmod.', difficulty: 1 },
  { text: 'GRUB2 can boot both BIOS and UEFI systems.', answer: true, explanation: 'GRUB2 supports both legacy BIOS and modern UEFI boot modes.', difficulty: 1 },
  { text: 'The ext4 filesystem supports up to a maximum file size of 1 TB.', answer: false, explanation: 'ext4 supports files up to 16 TB and file systems up to 1 EB (exabyte).', difficulty: 1 },
  { text: 'In RAID 1, data is mirrored across two or more disks.', answer: true, explanation: 'RAID 1 mirrors data for redundancy. If one disk fails, the other has an identical copy.', difficulty: 1 },
  { text: 'The command `ip route` has completely replaced the older `route` command in modern Linux.', answer: true, explanation: 'The iproute2 suite (ip command) replaces net-tools (route, ifconfig, netstat).', difficulty: 1 },
  { text: '`rsync` always copies all files, even if they have not changed.', answer: false, explanation: 'rsync is efficient because it only transfers files that have changed (delta transfer).', difficulty: 1 },
  { text: 'BIND is the most widely used DNS server software on the Internet.', answer: true, explanation: 'BIND (Berkeley Internet Name Domain) is the de facto standard DNS server.', difficulty: 1 },
  { text: 'Apache and Nginx cannot run simultaneously on the same port.', answer: true, explanation: 'Only one process can bind to a specific port at a time. They can coexist on different ports.', difficulty: 1 },
  { text: 'Samba allows Linux to share files with Windows machines using SMB/CIFS protocol.', answer: true, explanation: 'Samba implements the SMB/CIFS protocol, enabling file and printer sharing with Windows.', difficulty: 1 },
  { text: 'NFS version 4 does not require the rpcbind service.', answer: true, explanation: 'NFSv4 uses a single TCP port (2049) and does not need rpcbind, unlike NFSv3.', difficulty: 1 },
  { text: 'Postfix is a mail delivery agent (MDA), not a mail transfer agent (MTA).', answer: false, explanation: 'Postfix is an MTA (Mail Transfer Agent) that routes and delivers email between servers using SMTP.', difficulty: 1 },

  // Difficulty 2 — Medium
  { text: 'The `initramfs` is a temporary root filesystem loaded into RAM during boot before the real root is mounted.', answer: true, explanation: 'initramfs provides drivers and tools needed to mount the actual root filesystem.', difficulty: 2 },
  { text: 'Running `make modules_install` is optional when compiling a custom kernel.', answer: false, explanation: 'Without modules_install, the new kernel will not find its modules and many devices will not work.', difficulty: 2 },
  { text: 'In systemd, `multi-user.target` is equivalent to the traditional SysV runlevel 3.', answer: true, explanation: 'multi-user.target = runlevel 3 (text/CLI mode), graphical.target = runlevel 5 (GUI).', difficulty: 2 },
  { text: 'You can safely run `fsck` on a mounted filesystem.', answer: false, explanation: 'NEVER run fsck on a mounted filesystem as it can irreversibly corrupt data.', difficulty: 2 },
  { text: 'RAID 5 requires a minimum of 3 disks.', answer: true, explanation: 'RAID 5 uses striping with distributed parity, requiring at least 3 disks.', difficulty: 2 },
  { text: 'LVM allows you to resize a logical volume while the filesystem is mounted.', answer: true, explanation: 'LVM supports online resizing. ext4 can grow online, and XFS can only grow (never shrink) online.', difficulty: 2 },
  { text: 'The `tcpdump` command requires root privileges to capture network packets.', answer: true, explanation: 'Packet capture requires raw socket access, which typically needs root or CAP_NET_RAW capability.', difficulty: 2 },
  { text: '`named-checkzone` validates the syntax of BIND\'s named.conf file.', answer: false, explanation: 'named-checkzone validates zone files. named-checkconf validates the main configuration file.', difficulty: 2 },
  { text: 'In Apache, the `.htaccess` file is processed by Nginx the same way.', answer: false, explanation: 'Nginx does NOT read .htaccess files. All Nginx configuration must be in the main config files.', difficulty: 2 },
  { text: 'The Dovecot server provides IMAP and POP3 services for email retrieval.', answer: true, explanation: 'Dovecot is an MDA that provides IMAP and POP3 access for users to read their mail.', difficulty: 2 },
  { text: 'iptables rules are automatically saved and persist across reboots.', answer: false, explanation: 'iptables rules are lost on reboot. Use iptables-save/iptables-restore or iptables-persistent.', difficulty: 2 },
  { text: '`bonding` in Linux combines multiple network interfaces for redundancy or throughput.', answer: true, explanation: 'Linux bonding (or NIC teaming) aggregates interfaces for fault tolerance or load balancing.', difficulty: 2 },

  // Difficulty 3 — Hard
  { text: 'The `-p1` option in `patch -p1` strips the first directory component from file paths in the patch.', answer: true, explanation: '-p1 removes the top-level directory prefix, adapting paths to the current directory structure.', difficulty: 3 },
  { text: 'In an SOA DNS record, the serial number must be incremented every time the zone file is modified.', answer: true, explanation: 'Slave DNS servers compare serial numbers; if not incremented, they won\'t pull the updated zone.', difficulty: 3 },
  { text: 'DNSSEC encrypts DNS queries to prevent eavesdropping.', answer: false, explanation: 'DNSSEC provides authentication and integrity (digital signatures), not encryption. DNS-over-TLS encrypts.', difficulty: 3 },
  { text: 'Apache MPM prefork uses multiple threads within a single process.', answer: false, explanation: 'prefork uses multiple processes, each with one thread. worker and event MPMs use threads.', difficulty: 3 },
  { text: 'In Samba, users must also have a corresponding Linux system account.', answer: true, explanation: 'Samba users need a matching Linux account, but not necessarily a Linux login password.', difficulty: 3 },
  { text: 'The `omshell` command allows modifying the ISC DHCP server configuration without restarting it.', answer: true, explanation: 'omshell provides a DHCP object management shell for runtime queries and modifications.', difficulty: 3 },
  { text: '`Collectd` and `MRTG` serve the same purpose but `Collectd` can only monitor CPU usage.', answer: false, explanation: 'Collectd monitors many system metrics (CPU, memory, disk, network, etc.) via plugins, not just CPU.', difficulty: 3 },
  { text: 'The `SYSLINUX` bootloader family includes ISOLINUX for CD/DVD and PXELINUX for network boot.', answer: true, explanation: 'SYSLINUX family: SYSLINUX (FAT), ISOLINUX (ISO9660), EXTLINUX (ext/btrfs), PXELINUX (network/PXE).', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'iostat -_____ 1', answer: 'xz', hint: 'extended stats for active disks only', difficulty: 1 },
  { prompt: '_____ | grep vfat', answer: 'lsmod', hint: 'list loaded kernel modules', difficulty: 1 },
  { prompt: 'modprobe _____', answer: 'vfat', hint: 'load a filesystem module', difficulty: 1 },
  { prompt: 'systemctl set-default _____', answer: 'multi-user.target', hint: 'boot to CLI mode', difficulty: 1 },
  { prompt: 'tune2fs -m 1 _____', answer: '/dev/sda1', hint: 'device to reduce reserved space', difficulty: 1 },
  { prompt: 'mdadm --_____ /dev/md0', answer: 'detail', hint: 'show RAID array info', difficulty: 1 },
  { prompt: 'ip route add _____ via 192.168.1.1', answer: 'default', hint: 'add the default gateway', difficulty: 1 },
  { prompt: 'rsync -avz /data/ _____:/backup/', answer: 'remote', hint: 'target host for sync', difficulty: 1 },
  { prompt: 'named-_____ /etc/named.conf', answer: 'checkconf', hint: 'validate BIND config syntax', difficulty: 1 },
  { prompt: 'apachectl _____', answer: 'configtest', hint: 'test Apache config for errors', difficulty: 1 },
  // Difficulty 2
  { prompt: 'make _____ && make modules && make modules_install', answer: 'bzImage', hint: 'compile the compressed kernel image', difficulty: 2 },
  { prompt: 'update-_____ -u', answer: 'initramfs', hint: 'rebuild the boot RAM disk', difficulty: 2 },
  { prompt: 'xfs______ /mountpoint', answer: 'growfs', hint: 'grow a mounted XFS filesystem', difficulty: 2 },
  { prompt: 'udevadm _____ --property', answer: 'info', hint: 'query udev device properties', difficulty: 2 },
  { prompt: 'pvcreate /dev/sdb1 && vgcreate datavg /dev/sdb1 && _____ -L 5G -n datalv datavg', answer: 'lvcreate', hint: 'create a logical volume', difficulty: 2 },
  { prompt: 'ss -_____', answer: 'tulpn', hint: 'TCP/UDP listening ports with PID', difficulty: 2 },
  { prompt: 'smbpasswd -_____ mario', answer: 'a', hint: 'add a new Samba user', difficulty: 2 },
  { prompt: 'exportfs -_____', answer: 'ra', hint: 're-export all NFS shares', difficulty: 2 },
  { prompt: 'postconf -_____', answer: 'n', hint: 'show non-default Postfix settings', difficulty: 2 },
  { prompt: 'iptables -_____ INPUT -p tcp --dport 22 -j ACCEPT', answer: 'A', hint: 'append a rule to the chain', difficulty: 2 },
  // Difficulty 3
  { prompt: 'patch -_____ < fix.patch', answer: 'p1', hint: 'strip one directory level from paths', difficulty: 3 },
  { prompt: 'mdadm --create /dev/md0 --level=_____ --raid-devices=3 /dev/sd[b-d]1', answer: '5', hint: 'RAID level with distributed parity', difficulty: 3 },
  { prompt: 'tcpdump -i eth0 -w _____.pcap', answer: 'capture', hint: 'output file for captured packets', difficulty: 3 },
  { prompt: 'named-checkzone example.com _____', answer: 'db.example.com', hint: 'the zone database file to verify', difficulty: 3 },
  { prompt: 'nginx -_____ && nginx -s reload', answer: 't', hint: 'test config before reloading', difficulty: 3 },
  { prompt: 'ldapsearch -x -b "dc=example,dc=com" "(uid=_____)"', answer: 'mario', hint: 'search for a specific user', difficulty: 3 },
  { prompt: 'fail2ban-client status _____', answer: 'sshd', hint: 'check banned IPs for SSH', difficulty: 3 },
  { prompt: 'rndc _____', answer: 'reload', hint: 'reload DNS zones without restart', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-kernel-compile',
    category: 'Kernel Compilation Order',
    question: 'Drag the kernel compilation steps into the correct order:',
    items: [
      { text: 'make menuconfig', order: 1 },
      { text: 'make bzImage', order: 2 },
      { text: 'make modules', order: 3 },
      { text: 'make modules_install', order: 4 },
      { text: 'make install', order: 5 },
    ],
  },
  {
    id: 'dd-lvm-order',
    category: 'LVM Creation Order',
    question: 'Put these LVM commands in the correct sequence:',
    items: [
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
      { text: 'lvcreate -L 5G -n datalv datavg', order: 3 },
      { text: 'mkfs.ext4 /dev/datavg/datalv', order: 4 },
      { text: 'mount /dev/datavg/datalv /data', order: 5 },
    ],
  },
  {
    id: 'dd-raid-levels',
    category: 'RAID Level Matching',
    question: 'Match each RAID level to its description:',
    items: [
      { text: 'Striping without parity (speed, no redundancy)', matches: 'RAID 0' },
      { text: 'Mirroring (full data redundancy)', matches: 'RAID 1' },
      { text: 'Striping with distributed parity (min 3 disks)', matches: 'RAID 5' },
      { text: 'Striping with double parity (min 4 disks)', matches: 'RAID 6' },
    ],
  },
  {
    id: 'dd-dns-records',
    category: 'DNS Record Types',
    question: 'Match the DNS record type to its function:',
    items: [
      { text: 'Maps hostname to IPv4 address', matches: 'A' },
      { text: 'Maps hostname to IPv6 address', matches: 'AAAA' },
      { text: 'Points to a mail exchange server', matches: 'MX' },
      { text: 'Creates an alias for another hostname', matches: 'CNAME' },
      { text: 'Reverse lookup (IP to hostname)', matches: 'PTR' },
    ],
  },
  {
    id: 'dd-boot-process',
    category: 'Linux Boot Sequence',
    question: 'Arrange the Linux boot steps in order:',
    items: [
      { text: 'BIOS/UEFI POST', order: 1 },
      { text: 'Bootloader (GRUB2)', order: 2 },
      { text: 'Kernel loads', order: 3 },
      { text: 'initramfs provides root', order: 4 },
      { text: 'systemd (PID 1) starts', order: 5 },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic2-1', description: 'Show CPU and I/O statistics', prompt: 'iostat', expectedOutput: 'avg-cpu:', hint: 'Use the iostat command from sysstat', difficulty: 1 },
  { id: 'tc-lpic2-2', description: 'List all currently loaded kernel modules', prompt: 'lsmod', expectedOutput: 'Module', hint: 'Use lsmod', difficulty: 1 },
  { id: 'tc-lpic2-3', description: 'Show the current default systemd boot target', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Use systemctl get-default', difficulty: 1 },
  { id: 'tc-lpic2-4', description: 'Check Apache configuration syntax', prompt: 'apachectl configtest', expectedOutput: 'Syntax OK', hint: 'Use apachectl configtest', difficulty: 1 },
  { id: 'tc-lpic2-5', description: 'Test Nginx configuration for errors', prompt: 'nginx -t', expectedOutput: 'syntax is ok', hint: 'Use nginx -t', difficulty: 1 },
  { id: 'tc-lpic2-6', description: 'Show BIND DNS configuration validity', prompt: 'named-checkconf', expectedOutput: '', hint: 'No output means configuration is valid', difficulty: 2 },
  { id: 'tc-lpic2-7', description: 'Display NFS exports from this server', prompt: 'exportfs -v', expectedOutput: '/data', hint: 'Use exportfs -v', difficulty: 2 },
  { id: 'tc-lpic2-8', description: 'Show detailed RAID array status', prompt: 'cat /proc/mdstat', expectedOutput: 'md0', hint: 'Read /proc/mdstat', difficulty: 2 },
  { id: 'tc-lpic2-9', description: 'Check non-default Postfix configuration', prompt: 'postconf -n', expectedOutput: 'myhostname', hint: 'Use postconf -n', difficulty: 2 },
  { id: 'tc-lpic2-10', description: 'List all firewall rules with counters', prompt: 'iptables -L -n -v', expectedOutput: 'Chain INPUT', hint: 'Use iptables -L -n -v', difficulty: 2 },
  { id: 'tc-lpic2-11', description: 'Show TCP/UDP listening ports with process names', prompt: 'ss -tulpn', expectedOutput: 'LISTEN', hint: 'Use ss -tulpn', difficulty: 2 },
  { id: 'tc-lpic2-12', description: 'Show LVM Volume Group information', prompt: 'vgs', expectedOutput: 'VG', hint: 'Use vgs for summary', difficulty: 2 },
  { id: 'tc-lpic2-13', description: 'Verify BIND zone file for example.com', prompt: 'named-checkzone example.com /var/named/db.example.com', expectedOutput: 'OK', hint: 'Use named-checkzone with domain and zone file', difficulty: 3 },
  { id: 'tc-lpic2-14', description: 'Regenerate kernel module dependencies', prompt: 'depmod -a', expectedOutput: '', hint: 'Use depmod -a', difficulty: 3 },
  { id: 'tc-lpic2-15', description: 'Capture HTTP traffic on eth0 and save to file', prompt: 'tcpdump -i eth0 port 80 -w capture.pcap', expectedOutput: 'listening on eth0', hint: 'Use tcpdump with -i, port filter, and -w', difficulty: 3 },
]
