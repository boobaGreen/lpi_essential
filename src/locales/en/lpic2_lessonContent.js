export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Resource Monitoring',
    comic: {
      title: 'Doctor, the server is burning! 🩺',
      panels: [
        { emoji: '📉', text: "Capacity Planning: don't wait for your server to explode. Predict the load before it happens!" },
        { emoji: '🧠', text: 'CPU and RAM: mpstat and vmstat are your stethoscopes to hear the system pulse.' },
        { emoji: '🚥', text: "I/O Wait: if the disk is slow, the CPU gets bored and the whole system slows down." },
        { emoji: '📊', text: 'Historical analysis: use collectd or sar to see how load changes over time.' },
      ]
    },
    keyPoints: [
      { title: 'CPU/RAM Monitoring', items: ['uptime — Load average (1, 5, 15 min)', 'vmstat — Virtual memory and swap statistics', 'mpstat — Detailed report for each CPU core'] },
      { title: 'I/O and Network Monitoring', items: ['iostat — Disk utilization and throughput', 'ss / netstat — Connection and socket status', 'iftop / nload — Real-time network traffic'] },
      { title: 'Predictive Analysis', items: ['sar (sysstat) — Historical performance database', 'Benchmarks — Measuring theoretical maximum performance'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: 'Predicting Future Needs',
    comic: {
      title: 'The SysAdmin Crystal Ball 🔮',
      panels: [
        { emoji: '📅', text: 'Trend Analysis: if data grows 10% monthly, when will you run out of space?' },
        { emoji: '📈', text: 'Graphic Tools: Cacti, MRTG, and Graphite turn numbers into understandable charts.' },
        { emoji: '🔔', text: 'Alerting: set critical thresholds. Better an email today than a crash tomorrow!' },
        { emoji: '🏗️', text: 'Scaling: decide whether to add power (Vertical) or more servers (Horizontal).' },
      ]
    },
    keyPoints: [
      { title: 'Centralized Monitoring', items: ['Collectd — Lightweight daemon for data collection', 'Prometheus — Modern monitoring and time-series system', 'Nagios / Zabbix — Monitoring and alerting platforms'] },
      { title: 'Visualization', items: ['Grafana — Spectacular dashboards for your data', 'Cacti — Based on RRDTool, ideal for historical graphs'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Kernel Components',
    comic: {
      title: "What's inside a Kernel? 🧠",
      panels: [
        { emoji: '📦', text: 'Kernel Image: vmlinuz is the compressed, bootable heart of the system.' },
        { emoji: '🏗️', text: 'Initramfs: the small backpack with drivers needed to mount the real filesystem.' },
        { emoji: '🧩', text: 'Modules: why load everything at once? Modules (.ko) load only when needed.' },
        { emoji: '🩹', text: 'Patching: update the kernel without having to rewrite it from scratch.' },
      ]
    },
    keyPoints: [
      { title: 'Images and Files', items: ['vmlinuz — Compressed kernel image', 'System.map — Symbol table for debugging', 'config-X — Options used during compilation'] },
      { title: 'Boot and RAM Disk', items: ['initrd / initramfs — Temporary filesystem to load root modules', 'dracut / mkinitrd — Tools to generate the initramfs'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: 'Kernel Compilation',
    comic: {
      title: 'Custom Tailoring: Compile your Kernel! 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig: carefully choose which drivers to enable and which to discard.' },
        { emoji: '⚙️', text: 'Compilation: turns source code into a binary optimized for your CPU.' },
        { emoji: '📦', text: 'Installation: copies files to /boot and modules to /lib/modules.' },
        { emoji: '🚀', text: 'GRUB Update: the bootloader needs to know there is a new pilot in town!' },
      ]
    },
    keyPoints: [
      { title: 'Configuration Targets', items: ['make menuconfig — Graphical interface (ncurses)', 'make oldconfig — Uses current kernel configuration', 'make localmodconfig — Enables only currently loaded modules'] },
      { title: 'Build Phases', items: ['make — Compiles kernel and modules', 'make modules_install — Installs in /lib/modules', 'make install — Installs in /boot and updates bootloader'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: 'Runtime Kernel Management',
    comic: {
      title: 'Open Heart Surgery 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo: reveals secrets of a driver even before loading it.' },
        { emoji: '🔧', text: 'Sysctl: modify kernel parameters (network, memory) while the system runs.' },
        { emoji: '⚠️', text: 'Dmesg: listen to kernel whispers (or screams) in real-time.' },
        { emoji: '💾', text: '/proc/sys: the direct gateway to the system guts.' },
      ]
    },
    keyPoints: [
      { title: 'Module Tools', items: ['lsmod — Lists currently loaded modules', 'modprobe — Loads or removes modules with dependency handling', 'insmod / rmmod — Primitive tools for single modules (no dependencies)'] },
      { title: 'Kernel Parameters', items: ['sysctl -a — Shows all tunable parameters', 'sysctl -w — Temporarily modifies a parameter', '/etc/sysctl.conf — Persistent configuration'] },
    ],
    terminal: { 
      prompt: '# modinfo loop\n# sysctl -w net.ipv4.ip_forward=1', 
      output: 'net.ipv4.ip_forward = 1\nfilename: /lib/modules/.../loop.ko\nalias: devname:loop-control' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'Customizing SysVinit',
    comic: {
      title: 'The Old Sage: SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab: the sheet music that tells the system how to start line by line.' },
        { emoji: '🔢', text: 'Runlevel: from the bare bones level 1 (single-user) to the luxurious level 5 (graphical).' },
        { emoji: '🚦', text: 'K and S Scripts: who stops and who starts in each execution level.' },
        { emoji: '🔄', text: 'Telinit q: reload the configuration without having to restart the whole village!' },
      ]
    },
    keyPoints: [
      { title: 'Files and Directories', items: ['/etc/inittab — Main configuration file', '/etc/init.d/ — Service scripts directory', '/etc/rc[0-6].d/ — Symbolic links for runlevels'] },
      { title: 'Classic Commands', items: ['runlevel — Shows current and previous levels', 'init 6 — Reboots the system', 'telinit q — Reloads /etc/inittab'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: 'System Recovery',
    comic: {
      title: 'Linux Rescue Squad 🚑',
      panels: [
        { emoji: '⌨️', text: "GRUB Edit: press 'e' at boot to give emergency orders to the kernel." },
        { emoji: '🔧', text: 'init=/bin/bash: take control of the system before it even loads services.' },
        { emoji: '📀', text: 'Live CD / Rescue Mode: mount your wounded system in /mnt and operate with chroot.' },
        { emoji: '🛠️', text: "LILO: the old ancestor of GRUB that still resists in some dark corners." },
      ]
    },
    keyPoints: [
      { title: 'Boot Parameters', items: ['1, s, single — Start in single-user mode', 'systemd.unit=rescue.target — Modern equivalent', 'rd.break — Stop booting in the initramfs'] },
      { title: 'Recovery Techniques', items: ['chroot — Change root directory to repair the system from outside', 'fsck — Repair damaged filesystems that prevent booting'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: 'Advanced Bootloaders',
    comic: {
      title: 'The Lords of the Boot 👑',
      panels: [
        { emoji: '💿', text: 'UEFI vs BIOS: the transition from old MBR sectors to modern ESP partitions.' },
        { emoji: '📦', text: 'GRUB 2: flexible, powerful, and capable of loading kernels from almost any filesystem.' },
        { emoji: '🌐', text: 'PXE: boot your army of servers directly from the network, without local disks!' },
        { emoji: '🔑', text: 'Secure Boot: digitally sign your kernel to block unwanted intruders.' },
      ]
    },
    keyPoints: [
      { title: 'GRUB 2 Components', items: ['/boot/grub/grub.cfg — Final file (do not edit by hand!)', '/etc/default/grub — User configuration variables', 'grub-mkconfig — Generates the final file'] },
      { title: 'Modern Standards', items: ['GPT — New partition table for disks > 2TB', 'ESP — EFI System Partition (FAT32)', 'systemd-boot — Lightweight alternative for UEFI systems'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Operating on Filesystems',
    comic: {
      title: 'The Disk Architect 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs: adjust ext2/3/4 filesystem parameters without formatting anything.' },
        { emoji: '🏷️', text: "LABEL and UUID: name your disks so you never lose them in the /dev chaos." },
        { emoji: '💾', text: 'XFS_info: explore the advanced geometries of high-performance XFS filesystems.' },
        { emoji: '🔧', text: 'Mount -o: add superpowers like "noatime" to speed up reading.' },
      ]
    },
    keyPoints: [
      { title: 'Tuning Tools', items: ['tune2fs -L DATA /dev/sdb1 — Set label', 'xfs_admin — Manage XFS parameters', 'dumpe2fs — Show technical details of the filesystem'] },
      { title: 'Identification', items: ['blkid — Show UUID and TYPE of all blocks', 'findmnt — Tree view of current mounts'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: 'Filesystem Maintenance',
    comic: {
      title: 'The File Mechanic 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck: the surgeon who repairs filesystem wounds after a sudden crash.' },
        { emoji: '🧠', text: "SMART: listen to the hard drive's omens before it dies permanently." },
        { emoji: '🧹', text: 'Badblocks: scan every corner of the disk looking for defective sectors.' },
        { emoji: '🧪', text: 'Debugfs: enter the guts of the filesystem to recover deleted files.' },
      ]
    },
    keyPoints: [
      { title: 'Disk Health', items: ['smartctl -a /dev/sda — Full hardware health report', 'smartctl -t short — Start a quick test'] },
      { title: 'Repair', items: ['fsck.ext4 -v /dev/sdb1 — Verify and repair with details', 'xfs_repair — Specific tool for XFS'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: 'Device Management with udev',
    comic: {
      title: 'Udev: the Kernel Traffic Officer 🚨',
      panels: [
        { emoji: '⚡', text: 'Hotplug: insert a thumb drive and udev recognizes it in the blink of an eye.' },
        { emoji: '📜', text: '"If I insert this disk, always mount it in /backup".' },
        { emoji: '🔍', text: 'Udevadm: the tool to query udev and test your new rules.' },
        { emoji: '📁', text: "/dev: where udev creates nodes to allow us to talk to the hardware." },
      ]
    },
    keyPoints: [
      { title: 'Configuration', items: ['/etc/udev/rules.d/ — Where you write your rules', '/lib/udev/rules.d/ — System rules (do not touch)'] },
      { title: 'Debug Commands', items: ['udevadm monitor — Watch hardware events in real-time', 'udevadm info -a -p /sys/class/net/eth0 — Get all attributes for a rule'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Compilation and Installation',
    comic: {
      title: 'Digital Tailor: Compile your Software 🧵',
      panels: [
        { emoji: '📦', text: 'Sources: download the raw code (tarball) to have the latest version available.' },
        { emoji: '🛠️', text: './configure: check if you have all the necessary tools to build the program.' },
        { emoji: '⚙️', text: 'Make: turns thousands of lines of code into a ready-to-use binary.' },
        { emoji: '🚀', text: 'Make install: places the program in system directories like /usr/local/bin.' },
      ]
    },
    keyPoints: [
      { title: 'Compilation Phases', items: ['./configure — Configure and check dependencies', 'make — Compile source code', 'make install — Install binary files'] },
      { title: 'Source Management', items: ['tar -xvf — Extract source archive', 'patch — Apply fixes to existing code'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: 'Backup Operations',
    comic: {
      title: 'Data Life Insurance 💾',
      panels: [
        { emoji: '🛡️', text: "Backup: don't ask IF the disk will die, but WHEN. Be ready!" },
        { emoji: '🔄', text: 'Rsync: the genius that copies only the parts of files that have changed, saving time.' },
        { emoji: '📦', text: 'Tar: packs entire filesystems into a single file, ready for archiving.' },
        { emoji: '☁️', text: 'Off-site: keep a copy of data far from the server (e.g., in the cloud or another building).' },
      ]
    },
    keyPoints: [
      { title: 'Backup Types', items: ['Full — Complete copy of all data', 'Incremental — Only what changed since the last backup', 'Differential — Only what changed since the last full backup'] },
      { title: 'Tools', items: ['rsync -avz — Atomic and compressed synchronization', 'tar -cvf — Create file and directory archives', 'mt — Manages magnetic tapes (legacy)'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/file.txt\nuser2/photo.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: 'User Notifications',
    comic: {
      title: 'The System Herald 📢',
      panels: [
        { emoji: '🔔', text: 'Wall: shout a message to all currently connected users.' },
        { emoji: '📅', text: '/etc/motd: the message of the day that users read at every login.' },
        { emoji: '📔', text: '/etc/issue: the welcome text before even entering the password.' },
        { emoji: '🛑', text: 'Shutdown: warn everyone that the server is about to go to sleep for maintenance.' },
      ]
    },
    keyPoints: [
      { title: 'Direct Messages', items: ['wall — Message to all open terminals', 'write — Message to a specific single user'] },
      { title: 'Static Messages', items: ['/etc/motd — Message Of The Day (after login)', '/etc/issue — Pre-login banner (local)', '/etc/issue.net — Pre-login banner (remote/SSH)'] },
    ],
    terminal: { 
      prompt: '# wall "Maintenance scheduled at 22:00"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\nMaintenance scheduled at 22:00' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'Basic DNS Configuration',
    comic: {
      title: 'The Web Phonebook 📖',
      panels: [
        { emoji: '🌐', text: 'DNS: transforms mnemonic names (google.com) into numerical addresses (IP).' },
        { emoji: '🏗️', text: 'BIND: the most widespread and powerful DNS server in Internet history.' },
        { emoji: '🗺️', text: 'Hierarchy: from Root servers (.) to top-level domains (.com) and beyond.' },
        { emoji: '🔎', text: 'Query: ask recursively who knows until you find the right answer.' },
      ]
    },
    keyPoints: [
      { title: 'BIND Components', items: ['named — The DNS service daemon', '/etc/bind/named.conf — Main configuration file', 'rndc — Remote control tool for the service'] },
      { title: 'Server Types', items: ['Master — Contains the original and editable zone', 'Slave — Copies the zone from the master for redundancy (Zone Transfer)'] },
    ],
    terminal: { 
      prompt: '$ dig google.com\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.com.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: 'Creating and Managing Zones',
    comic: {
      title: 'The Domain Registry 🗺️',
      panels: [
        { emoji: '📝', text: 'A Record: the basic link between a name and an IPv4 address.' },
        { emoji: '📛', text: 'CNAME: a nickname for a host that already has a primary name.' },
        { emoji: '📧', text: 'MX: tells the world which server should receive mail for your domain.' },
        { emoji: '🔄', text: 'SOA: the zone birth certificate with refresh times and serial number.' },
      ]
    },
    keyPoints: [
      { title: 'Common DNS Records', items: ['A / AAAA — Name -> IPv4 / IPv6', 'PTR — IP -> Name (Reverse Zone)', 'TXT — Free text (used for SPF, DKIM)', 'NS — Indicates authoritative Name Servers'] },
      { title: 'Zone Management', items: ['Standard serial: YYYYMMDDNN (e.g., 2024030601)', 'named-checkzone — Verify errors before loading the zone'] },
    ],
    terminal: { 
      prompt: '# named-checkzone example.com /etc/bind/db.example.com', 
      output: 'zone example.com/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: 'DNS Security and Advanced DNS',
    comic: {
      title: 'DNS under Shield 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: digitally sign zones to prevent anyone from sending you to fake sites.' },
        { emoji: '🚫', text: 'Access Control: decide who can query or request zone transfers.' },
        { emoji: '🔭', text: 'TSIG: use secret keys to authenticate communication between Master and Slave.' },
        { emoji: '🏰', text: 'Chroot: lock BIND in a virtual prison to protect the rest of the system.' },
      ]
    },
    keyPoints: [
      { title: 'Protection', items: ['allow-query — Limit who can query the server', 'allow-transfer — Limit who can copy the zone (very important!)'] },
      { title: 'Advanced Mechanisms', items: ['Split DNS — Show different data to internal vs external users', 'TSIG — Keys for secure Zone Transfers'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.com AXFR', 
      output: '; Transfer failed. (Permission denied if configured well!)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Apache Configuration',
    comic: {
      title: 'The Site Host 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server: the king of web servers, flexible and timeless.' },
        { emoji: '📂', text: 'VirtualHost: host a hundred different sites on the same server without annoying each other.' },
        { emoji: '🧩', text: 'Modules: enable rewrite, proxy, or php with a simple command.' },
        { emoji: '🔎', text: 'Logs: spy on who visits your site and find out why that page gives 404 error.' },
      ]
    },
    keyPoints: [
      { title: 'Apache Structure', items: ['/etc/apache2/ (Debian) or /etc/httpd/ (RHEL)', 'apache2ctl configtest — Check syntax before restarting'] },
      { title: 'Virtual Hosting', items: ['Name-based VirtualHost — Multiple sites on a single IP', 'ServerName / ServerAlias — Define site names'] },
    ],
    terminal: { 
      prompt: '# a2ensite mysite.conf\n# systemctl reload apache2', 
      output: 'Enabling site mysite.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS and Web Security',
    comic: {
      title: 'The Green Padlock 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS: encrypts the conversation between browser and server to keep secrets safe.' },
        { emoji: '📜', text: "Certificates: your site's ID card, issued by a trusted authority." },
        { emoji: '🏎️', text: 'HTTP/2: the new FAST lane to make page loading lightning fast.' },
        { emoji: '🛡️', text: 'HSTS: forces the browser to always and only use secure connections.' },
      ]
    },
    keyPoints: [
      { title: 'Certificates', items: ['CSR (Certificate Signing Request) — Request for the CA', 'SSLCertificateFile / SSLCertificateKeyFile — Apache configuration'] },
      { title: 'Tools', items: ['OpenSSL — The Swiss Army knife for generating keys and certificates', "Let's Encrypt — Free and automatic certificates"] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = mysite.com' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx and Reverse Proxy',
    comic: {
      title: 'The Snappy Alternative: Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx: lightweight, asynchronous, and born to handle thousands of simultaneous connections.' },
        { emoji: '🔀', text: 'Reverse Proxy: put Nginx in front of your servers to protect them and balance load.' },
        { emoji: '💨', text: 'Caching: saves static files in memory to serve images in a millisecond.' },
        { emoji: '🛡️', text: 'WAF: use Nginx as a shield against common web attacks.' },
      ]
    },
    keyPoints: [
      { title: 'Nginx Configuration', items: ['/etc/nginx/nginx.conf — Global configuration', 'server { ... } — Site definition (similar to VirtualHost)'] },
      { title: 'Reverse Proxy', items: ['proxy_pass — Forwards request to another server (e.g., Node.js or Java)'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: the Bridge between Linux and Windows',
    comic: {
      title: 'Two Worlds, Same Disk 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba: the SMB protocol that lets Windows see Linux as a file server.' },
        { emoji: '👥', text: 'Domain Controller: manage centralized users and permissions with Active Directory.' },
        { emoji: '📂', text: 'Shares: define which folders are public and which are private.' },
        { emoji: '📝', text: 'Smb.conf: the heart of Samba configuration.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration', items: ['[global] — Network and security settings', '[share] — Shared folder definition'] },
      { title: 'Tools', items: ['testparm — Verifies smb.conf syntax', 'smbpasswd -a user — Add user to Samba'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Native Linux Sharing',
    comic: {
      title: 'Network File System: Pure Transparency 📁',
      panels: [
        { emoji: '🔌', text: 'NFS: mount remote disks on your local network as if they were internal.' },
        { emoji: '🛡️', text: 'Exports: decide which IPs can access and with what permissions (read-only or rw).' },
        { emoji: '🧱', text: 'RPC: the small messengers that allow NFS to talk between servers.' },
        { emoji: '⚡', text: 'NFSv4: modern evolution with better security and firewall management.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration', items: ['/etc/exports — The registry of shared folders and permissions', 'exportfs -a — Apply changes to exports'] },
      { title: 'Mount Options', items: ['soft/hard — Decides what happens if server disconnects', 'proto=tcp — Uses TCP protocol instead of UDP'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/remote', 
      output: '/data  192.168.1.0/24(rw,wdelay,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP: Automatic Addresses',
    comic: {
      title: 'Welcome to the IP Apartment 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP: the concierge that assigns a room (IP) to every new system guest.' },
        { emoji: '⏱️', text: "Lease Time: the IP is yours only for a while. Don't forget to renew the contract!" },
        { emoji: '📍', text: '"That server must always have room 101". Use its MAC address.' },
        { emoji: '📝', text: 'Dhcpd.conf: the table where you write the assignment rules.' },
      ]
    },
    keyPoints: [
      { title: 'DHCP Configuration', items: ['subnet { ... } — Defines the IP range', 'option routers — Indicates the default gateway', 'option domain-name-servers — Indicates the DNS'] },
      { title: 'Relay Agent', items: ['dhcrelay — Allows passing DHCP requests across different network segments'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'Authentication with PAM',
    comic: {
      title: 'PAM: The Modular Bouncer 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM (Pluggable Authentication Modules): a single system to manage every login type.' },
        { emoji: '🧩', text: 'Modules: change how you authenticate without rewriting programs.' },
        { emoji: '📋', text: '"First ask for password, then check if user is in the right group".' },
        { emoji: '🔐', text: 'Security: force strong passwords and block users after too many errors.' },
      ]
    },
    keyPoints: [
      { title: 'Module Types', items: ['auth — Verifies identity (password)', 'account — Checks if account is valid/expired', 'password — Manages password change', 'session — Meta operations pre/post login'] },
      { title: 'Configuration', items: ['/etc/pam.d/ — Directory with configurations for each service (sshd, login, etc)'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'LDAP Client',
    comic: {
      title: 'The Centralized Registry 📂',
      panels: [
        { emoji: '📋', text: 'LDAP: a super efficient directory to find users and groups across the company.' },
        { emoji: '🔍', text: "Query: quickly find who the IT manager is or what Mario's email is." },
        { emoji: '🌐', text: 'Single Sign-On: a single password to access all computers in the office.' },
        { emoji: '⚡', text: 'NSS: tell Linux to look for users not only in /etc/passwd, but also on LDAP.' },
      ]
    },
    keyPoints: [
      { title: 'LDAP Tools', items: ['ldapsearch — Query the LDAP database from terminal', 'ldapadd / ldapmodify — Manage data in the database'] },
      { title: 'NSS Service', items: ['/etc/nsswitch.conf — Configures user search order (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=example,dc=com" "(uid=mario)"', 
      output: 'dn: uid=mario,ou=People,dc=example,dc=com\nobjectClass: posixAccount\nuid: mario\nmail: mario@example.com' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: 'Private Tunnels on the Web 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN (Virtual Private Network): creates a secure tunnel through the public Internet.' },
        { emoji: '🔐', text: 'Encryption: no one can spy on data passing through the tunnel.' },
        { emoji: '🏠', text: 'Remote work: work from home as if you were sitting at your office desk.' },
        { emoji: '🔑', text: 'TLS Certificates: use keys to ensure only authorized devices enter.' },
      ]
    },
    keyPoints: [
      { title: 'OpenVPN Configuration', items: ['/etc/openvpn/server.conf — Server settings', '/etc/openvpn/client.conf — Client settings'] },
      { title: 'Modes', items: ['Tun (Routing) — Creates an IP tunnel (most common)', 'Tap (Bridging) — Simulates an Ethernet network card'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'RAID Configuration',
    comic: {
      title: 'Strength in Numbers (and Safety) 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID: why rely on a single disk when you can have an army?' },
        { emoji: '⚡', text: 'RAID 0 (Stripe): doubles speed, but if one disk dies, you lose everything!' },
        { emoji: '🪞', text: 'RAID 1 (Mirror): every piece of data has a twin. Maximum safety, half the space.' },
        { emoji: '🏗️', text: 'RAID 5/6: the magic balance between speed, space, and fault tolerance.' },
      ]
    },
    keyPoints: [
      { title: 'Common RAID Levels', items: ['RAID 0 — Pure performance (no redundancy)', 'RAID 1 — Mirroring (high availability)', 'RAID 5 — Distributed parity (tolerates 1 failure)', 'RAID 6 — Double parity (tolerates 2 failures)'] },
      { title: 'Software RAID Tools', items: ['mdadm — The universal command for software RAID in Linux', '/proc/mdstat — Real-time window into the status of arrays'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Storage Device Tuning',
    comic: {
      title: 'Extreme Optimization 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm: push the limits of your old mechanical disk to squeeze out every drop.' },
        { emoji: '🌠', text: 'NVMe: enter the flash era with protocols born for pure speed.' },
        { emoji: '⚡', text: 'SD Card / SSD: manage write parameters to extend the life of your memory.' },
        { emoji: '🛠️', text: 'Smartctl (again): because prevention is better than crying over lost data.' },
      ]
    },
    keyPoints: [
      { title: 'Optimization', items: ['hdparm -tT /dev/sda — Read speed test (cache and disk)', 'hdparm -S 120 /dev/sda — Set disk standby (10 minutes)'] },
      { title: 'Modern Technologies', items: ['nvme-cli — Tool for managing modern NVMe disks', 'SSD Trim — Maintain performance over time by freeing unused blocks'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM)',
    comic: {
      title: 'Disks like Lego Bricks 🧱',
      panels: [
        { emoji: '📦', text: 'PV (Physical Volume): turn your hard disks into raw material.' },
        { emoji: '🏗️', text: 'VG (Volume Group): join PVs into one large pool of space.' },
        { emoji: '🍰', text: 'LV (Logical Volume): cut the slices you need and grow them at will.' },
        { emoji: '📸', text: 'Snapshot: freeze time and take a picture of your system before a risky update.' },
      ]
    },
    keyPoints: [
      { title: 'LVM Hierarchy', items: ['pvcreate / pvdisplay — Physical disk management', 'vgcreate / vgextend — Volume group management', 'lvcreate / lvextend — Logical volume management'] },
      { title: 'Advantages', items: ['Online Resize — Expand partitions without rebooting', 'Snapshots — Consistent backups and rapid tests'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Basic Network Configuration',
    comic: {
      title: 'Citizens of the Network 🌐',
      panels: [
        { emoji: '📍', text: 'Addressing: every machine needs a name and a place to be.' },
        { emoji: '🗺️', text: 'Routing: "If you don\'t know where to go, ask the Default Gateway".' },
        { emoji: '🔌', text: 'Interfaces: Ethernet, Wi-Fi, or virtual interfaces for containers and VMs.' },
        { emoji: '🛠️', text: 'Iproute2: the powerful new suite that retired the old ifconfig.' },
      ]
    },
    keyPoints: [
      { title: 'IP Configuration', items: ['ip addr show — View addresses and interfaces', 'ip route show — View routing table', 'ip -6 addr — IPv6 configuration'] },
      { title: 'Persistence', items: ['Debian/Ubuntu: /etc/network/interfaces or Netplan', 'RHEL/CentOS: /etc/sysconfig/network-scripts/ or NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: 'Advanced Network Configuration',
    comic: {
      title: 'Bridges and Canals 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding: join multiple network cards for double bandwidth or fault tolerance.' },
        { emoji: '🌉', text: 'Bridging: create a virtual bridge to let your Virtual Machines talk to the world.' },
        { emoji: '📡', text: 'Professional Wi-Fi: manage your wireless connections via the command line.' },
        { emoji: '🚀', text: 'Traffic Control (tc): slow down colleagues\' downloads to prioritize your servers!' },
      ]
    },
    keyPoints: [
      { title: 'Advanced Techniques', items: ['Bonding — Link aggregation (LACP, Round-robin)', 'Bridging — Typically used in virtualization (br0)'] },
      { title: 'Wireless', items: ['iw / iwconfig — Tools for 802.11 interfaces', 'wpa_supplicant — WPA/WPA2 authentication manager'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Linux_Office\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: 'Network Troubleshooting',
    comic: {
      title: 'Packet Detective 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: listen to every single bit that passes through your network card.' },
        { emoji: '🔬', text: 'Wireshark: the microscope for analyzing packets with a graphical interface.' },
        { emoji: '📡', text: 'Nmap: knock on every server door to see who answers.' },
        { emoji: '🔎', text: 'Netstat/SS: who is listening? Check which processes open sockets.' },
      ]
    },
    keyPoints: [
      { title: 'Traffic Analysis', items: ['tcpdump -i eth0 -n — Live analysis (no DNS resolution)', 'nc (netcat) — The network Swiss Army knife'] },
      { title: 'Scanning and Sockets', items: ['nmap -sV target — Port and service version scan', 'ss -tulpn — Display listening sockets with PID'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'SMTP Server (Postfix)',
    comic: {
      title: 'The Digital Postman 📩',
      panels: [
        { emoji: '📨', text: 'SMTP: the protocol that sends your digital letters from one server to another.' },
        { emoji: '🏤', text: 'Postfix: reliable, fast, and very easy to configure compared to the old Sendmail.' },
        { emoji: '🛑', text: 'Anti-Spam: block tons of unwanted emails before they reach users.' },
        { emoji: '📋', text: 'Main.cf: the file where you instruct the postman on how to behave.' },
      ]
    },
    keyPoints: [
      { title: 'Postfix Configuration', items: ['myhostname — The name of your mail server', 'mynetworks — Who is authorized to send mail without a password', 'relayhost — Send mail through another server (e.g., provider)'] },
      { title: 'Aliases and Queues', items: ['/etc/aliases — Fictitious addresses (e.g., info -> mario)', 'mailq — Check the mail queue waiting to be sent'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.example.com\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: 'Delivery Management and Filters',
    comic: {
      title: 'Package Sorting 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve: the automatic system that moves emails to the right folders.' },
        { emoji: '⚖️', text: "Quotas: don't let a single user fill up the whole server disk!" },
        { emoji: '🚫', text: 'SpamAssassin: analyzes email content and assigns a "danger" score.' },
        { emoji: '🦠', text: 'ClamAV: scans every attachment for hidden viruses.' },
      ]
    },
    keyPoints: [
      { title: 'Delivery', items: ['Maildir/ — One file per email (modern and fast)', 'mbox — All emails in a single file (old style)'] },
      { title: 'Access Protocols', items: ['IMAP — Emails stay on the server (great for multiple devices)', 'POP3 — Download emails and remove them from the server'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: 'Accessing Mail (Dovecot)',
    comic: {
      title: 'Your Letterbox 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot: the server that opens your letterbox when you use Outlook or Thunderbird.' },
        { emoji: '🔐', text: 'IMAPS/POPS: protect your password with encryption during reading.' },
        { emoji: '💼', text: 'Shared Folders: share a mail folder among multiple colleagues.' },
        { emoji: '📊', text: 'Monitoring: keep an eye on how many users are connected simultaneously.' },
      ]
    },
    keyPoints: [
      { title: 'Role of Dovecot', items: ['MDA (Mail Delivery Agent) — Delivers mail to the disk', 'MRA (Mail Retrieval Agent) — Allows the client to read it'] },
      { title: 'Authentication', items: ['Can use system users or integrate with LDAP/MySQL databases'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Configuring a Firewall (iptables)',
    comic: {
      title: 'The City Walls 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter: the firewall that decides which data can enter or leave.' },
        { emoji: '🚦', text: 'Chain: INPUT (for the server), OUTPUT (from the server), FORWARD (through the server).' },
        { emoji: '🛑', text: 'Target: ACCEPT (let through), DROP (ignore), REJECT (refuse and warn).' },
        { emoji: '⚡', text: 'Stateful: the firewall remembers who started the conversation and lets answers through.' },
      ]
    },
    keyPoints: [
      { title: 'Tables and Chains', items: ['Filter (default) — For packet filtering', 'NAT — To change addresses (e.g., router)', 'INPUT / OUTPUT / FORWARD: Main chains'] },
      { title: 'Syntax', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — Open SSH', 'iptables -P INPUT DROP — Close everything else'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: 'Local Security and Intrusions',
    comic: {
      title: 'Digital Sentinels 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban: watches who enters too many wrong passwords and bans their IP automatically.' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter: looks for traces of hackers who might be hiding in the system.' },
        { emoji: '📜', text: 'Logwatch: summarizes every morning via email everything strange that happened on the server.' },
        { emoji: '🔒', text: 'Sudoers: don\'t give master keys, give only the permissions that are really needed.' },
      ]
    },
    keyPoints: [
      { title: 'Defense Tools', items: ['rkhunter / chkrootkit — Scan for malware', 'aide / tripwire — Check if system files have been modified'] },
      { title: 'Access Monitoring', items: ['last — Last people logged in', 'faillog — Report of failed logins'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'Advanced SSH Security',
    comic: {
      title: 'An Armored Lock 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH: your secret tunnel for managing the server from afar.' },
        { emoji: '🚫', text: 'No Password: use Public/Private keys. Much more secure and convenient!' },
        { emoji: '🕵️‍♂️', text: 'Audit: records every command executed to know who did what.' },
        { emoji: '🛡️', text: 'Hardening configuration: change port, disable direct root login.' },
      ]
    },
    keyPoints: [
      { title: 'SSH Hardening', items: ['PermitRootLogin no — Prohibits direct root login', 'PasswordAuthentication no — Forces the use of keys', 'Port 2222 — Changes the default port'] },
      { title: 'Key Management', items: ['ssh-keygen — Generates your key pair', 'ssh-copy-id — Sends your public key to the server'] },
    ],
    terminal: { 
      prompt: '$ ssh-copy-id user@server\n# grep "FAILED" /var/log/auth.log', 
      output: '/usr/bin/ssh-copy-id: INFO: 1 key(s) remained to be installed\nuser@server\'s password: \nNumber of key(s) added: 1' 
    },
  },
}
