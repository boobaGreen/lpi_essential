export const lpic2_extendedContent_en = {
  'lpic2-200-1': {
    title: "Resource Measurement and Planning",
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Deep Resource Analysis' },
      { type: 'paragraph', text: 'Capacity Planning is not just "looking at graphs," but understanding how the system reacts under stress. You must identify if the bottleneck is the CPU, memory, I/O subsystem, or network.' },
      { type: 'heading', level: 3, emoji: '🧠', text: 'Memory and Swap with vmstat' },
      { type: 'paragraph', text: 'While `free -m` gives a snapshot, `vmstat` shows the trend. The `si` (swap in) and `so` (swap out) fields are the most critical: if they are constantly above zero, the system is "thrashing," meaning it spends more time moving data on disk than executing code.' },
      { type: 'code', title: 'Dynamic Monitoring', prompt: '$ vmstat 1 5', output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78910 234567    0    0     5    10  123  456  2  1 96  1  0' },
      { type: 'heading', level: 3, emoji: '💾', text: 'I/O Analysis with iostat' },
      { type: 'paragraph', text: 'The `sysstat` package provides `iostat`, which is essential for understanding if your disks are too slow.' },
      { type: 'table', headers: ['Metric', 'Description', 'Critical Threshold'], rows: [
        ['%util', 'Percentage of time the disk is busy', '> 80% indicates saturation'],
        ['await', 'Average time (ms) waiting for a request', '> 10-20ms for mechanical disks is high'],
        ['svctm', 'Average effective service time of the disk', 'If close to await, the disk is ok but loaded'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Use `iostat -xz 1` to see only devices that have activity, with extended statistics.' }
    ]
  },

  'lpic2-201-1': {
    title: 'Kernel Components and Compilation',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Linux Kernel Architecture' },
      { type: 'paragraph', text: 'The kernel is not a single block, but a set of subsystems ready to handle hardware, memory, and processes. Knowing how to compile it allows for creating systems optimized for specific hardware.' },
      { type: 'heading', level: 3, emoji: '📦', text: 'Source Code' },
      { type: 'paragraph', text: 'Sources are usually found in `/usr/src/linux`. The `.config` file is the heart of customization: it contains thousands of options that decide what to include or exclude.' },
      { type: 'table', headers: ['Make Target', 'Description'], rows: [
        ['make menuconfig', 'Text-based interface (ncurses) for configuration'],
        ['make xconfig', 'Graphical interface (Qt) for configuration'],
        ['make oldconfig', 'Updates an old .config with new options'],
        ['make bzImage', 'Compiles the compressed kernel image'],
        ['make modules', 'Compiles separate modules'],
        ['make modules_install', 'Copies modules to /lib/modules/$(uname -r)'],
      ]},
      { type: 'code', title: 'Modern compilation flow', prompt: '# make bzImage\n# make modules\n# make modules_install\n# make install', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Never forget to run `make modules_install` before `make install`, otherwise the new kernel will start but won\'t find the drivers needed to load the rest of the system!' }
    ]
  },

  'lpic2-201-2': {
    title: 'Runtime Management and Module Loading',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Modules: Kernel Plug-and-Play' },
      { type: 'paragraph', text: 'Modules allow adding functionality (like Wi-Fi drivers or file systems) without rebooting.' },
      { type: 'table', headers: ['Command', 'Function'], rows: [
        ['lsmod', 'Lists currently loaded modules'],
        ['insmod', 'Loads a specific .ko file (without handling dependencies)'],
        ['rmmod', 'Removes a module'],
        ['modprobe', 'Recommended way: loads/removes while handling dependencies'],
        ['modinfo', 'Shows details, parameters, and license of a module'],
      ]},
      { type: 'code', title: 'modprobe example', prompt: '# modinfo e1000\n# modprobe e1000\n# modprobe -r e1000', output: 'filename: /lib/modules/.../e1000.ko\nlicense: GPL\ndescription: Intel(R) PRO/1000 Network Driver' },
      { type: 'heading', level: 3, emoji: '📁', text: 'Module Persistence' },
      { type: 'paragraph', text: 'To load a module at startup, add it to `/etc/modules` or create a file in `/etc/modules-load.d/`. For passing parameters, use files in `/etc/modprobe.d/`.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Customization and Patching',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Keeping the Kernel Updated' },
      { type: 'paragraph', text: 'Often you don\'t need to download the entire new kernel (GBs of data), but just apply a "patch" to fix bugs or security holes.' },
      { type: 'code', title: 'Applying a patch', prompt: '$ bzcat patch-5.10.x.bz2 | patch -p1', output: 'patching file Makefile\npatching file arch/x86/Makefile\n...' },
      { type: 'infobox', variant: 'exam', content: 'The `-p1` option in the patch command is used to "skip" the first directory level in the file path contained in the patch, adapting it to your current directory.' }
    ]
  },

  'lpic2-202-1': {
    title: "System Startup Customization",
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Beyond Simple Boot' },
      { type: 'paragraph', text: 'Understanding how the system transitions from BIOS/UEFI to a ready desktop or server is fundamental for disaster recovery.' },
      { type: 'heading', level: 3, emoji: '⚙️', text: 'SysVinit vs Systemd' },
      { type: 'paragraph', text: 'Although Systemd dominates, LPIC-2 still requires knowledge of SysVinit and runlevels. Remember that `/etc/inittab` is the primary control file for SysVinit.' },
      { type: 'table', headers: ['Runlevel', 'Purpose'], rows: [
        ['0', 'Halt (shutdown)'],
        ['1 / S', 'Single User Mode (maintenance)'],
        ['2', 'Multi-user without networking (often Debian)'],
        ['3', 'Multi-user with networking (CLI)'],
        ['5', 'Multi-user with networking + Graphical Interface'],
        ['6', 'Reboot'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'In Systemd, runlevels are mapped as "targets". Example: `multi-user.target` usually corresponds to runlevel 3.' }
    ]
  },

  'lpic2-202-2': {
    title: 'System Recovery and Bootloader',
    sections: [
      { type: 'heading', level: 2, emoji: '🆘', text: 'Saving a Compromised System' },
      { type: 'paragraph', text: 'If the bootloader (GRUB) is corrupt, the system won\'t start. You must know how to use an emergency shell or a live disk.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'GRUB 2' },
      { type: 'code', title: 'Restore GRUB', prompt: '# grub-install /dev/sda\n# update-grub', output: 'Installing for i386-pc platform.\nInstallation finished. No error reported.' },
      { type: 'paragraph', text: 'The generated configuration file is `/boot/grub/grub.cfg`, but it should never be modified by hand. Instead, use `/etc/default/grub`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Alternative Bootloaders',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX and ISOLINUX' },
      { type: 'paragraph', text: 'Often used for USB drives and live CDs due to their lightness and simplicity.' },
      { type: 'table', headers: ['Variant', 'Usage'], rows: [
        ['SYSLINUX', 'FAT file system (USB sticks)'],
        ['ISOLINUX', 'ISO-9660 standard (CD/DVD)'],
        ['EXTLINUX', 'ext2/3/4 or btrfs file system'],
        ['PXELINUX', 'Network boot via TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Advanced Filesystem Operations',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Management and Maintenance' },
      { type: 'paragraph', text: 'An administrator must know how to create, check, and repair filesystems without fear.' },
      { type: 'heading', level: 3, emoji: '🔍', text: 'Check and Repair' },
      { type: 'code', title: 'Checking a disk (unmounted!)', prompt: '# fsck -y /dev/sdb1\n# dumpe2fs /dev/sdb1 | head', output: 'Filesystem volume name:   Dati\nLast mounted on:          /mnt/dati\nFilesystem revision #:    1 (dynamic)' },
      { type: 'infobox', variant: 'warning', content: 'NEVER run `fsck` on a mounted filesystem: you risk irreversibly corrupting data!' }
    ]
  },

  'lpic2-203-2': {
    title: 'Filesystem Maintenance',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Optimization with tune2fs' },
      { type: 'paragraph', text: 'You can change parameters like the frequency of automatic checks or the volume label without reformatting.' },
      { type: 'table', headers: ['Command', 'Effect'], rows: [
        ['tune2fs -L "BACKUP" /dev/sdc1', 'Sets the label'],
        ['tune2fs -m 1 /dev/sdc1', 'Reduces space reserved for root to 1%'],
        ['tune2fs -i 30d /dev/sdc1', 'Forced check every 30 days'],
        ['xfs_admin -L "DATA_XFS" /dev/sdd1', 'Management for XFS filesystem'],
      ]}
    ]
  },

  'lpic2-203-3': {
    title: 'Device Management with udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🔌', text: 'The daemon that sees everything' },
      { type: 'paragraph', text: '`udev` manages files in `/dev` dynamically when you connect or disconnect hardware.' },
      { type: 'heading', level: 3, emoji: '📝', text: 'Creating Custom Rules' },
      { type: 'paragraph', text: 'You can decide that your printer always has the same symbolic name, regardless of the USB port.' },
      { type: 'code', title: 'Example udev rule', prompt: '# /etc/udev/rules.d/99-custom.rules\nSUBSYSTEM=="usb", ATTR{idVendor}=="1234", SYMLINK+="mydevice"', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Use `udevadm monitor` to see kernel actions in real-time as you insert a peripheral.' }
    ]
  },

  'lpic2-204-1': {
    title: 'Advanced RAID Configuration',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Software RAID with mdadm' },
      { type: 'paragraph', text: 'In Linux, software RAID allows joining different disks into a single robust device managed by the kernel.' },
      { type: 'table', headers: ['Level', 'Advantage', 'Fault Tolerance'], rows: [
        ['0 (Stripe)', 'Pure speed', 'None (1 broken disk = lost data)'],
        ['1 (Mirror)', 'Security', 'Tolerates failure of half the disks'],
        ['5 (Parity)', 'Efficiency', 'Tolerates failure of 1 disk (min. 3 disks)'],
        ['6 (Double Parity)', 'High Availability', 'Tolerates failure of 2 disks (min. 4 disks)'],
        ['10 (1+0)', 'Best of both', 'Tolerates multiple failures (min. 4 disks)'],
      ]},
      { type: 'code', title: 'Creating a RAID 5', prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', output: 'Personalities : [raid6] [raid5] [raid4]\nmd0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' },
      { type: 'infobox', variant: 'tip', content: 'Don\'t forget to save the configuration in `/etc/mdadm/mdadm.conf` so the RAID is mounted correctly at boot!' }
    ]
  },

  'lpic2-204-2': {
    title: 'Storage Tuning and Optimization',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Squeezing out performance' },
      { type: 'paragraph', text: 'Besides RAID, you must know how to optimize individual disks, especially if using modern technologies like NVMe or old disks that need tuning.' },
      { type: 'code', title: 'Hdparm and NVMe', prompt: '# hdparm -tT /dev/sda\n# nvme list', output: 'Timing cached reads:   15342 MB in  2.00 seconds = 7673.41 MB/sec\nTiming buffered disk reads:  540 MB in  3.01 seconds = 179.62 MB/sec' },
      { type: 'paragraph', text: 'The `hdparm` command is historic for SATA/IDE disks, while `nvme-cli` is the standard for the latest generation SSD disks.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM) — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Total Disk Elasticity' },
      { type: 'paragraph', text: 'LVM adds an abstraction layer between the physical disk and the partition you see. This allows you to grow or shrink volumes "on the fly".' },
      { type: 'table', headers: ['Component', 'Full Name', 'Meaning'], rows: [
        ['PV', 'Physical Volume', 'The physical disk or partition (e.g., /dev/sda3)'],
        ['VG', 'Volume Group', 'The "pool" of space created by joining multiple PVs'],
        ['LV', 'Logical Volume', 'The virtual partition you format and mount'],
      ]},
      { type: 'code', title: 'Expanding a volume', prompt: '# lvextend -L +10G /dev/vg0/root\n# resize2fs /dev/vg0/root', output: 'Size of logical volume vg0/root changed from 20.00 GiB to 30.00 GiB.\nFilesystem at /dev/vg0/root is mounted on /; on-line resizing required' },
      { type: 'infobox', variant: 'exam', content: 'Remember: `lvextend` grows the container, but you must use `resize2fs` (for ext4) or `xfs_growfs` (for XFS) to actually grow the filesystem inside.' }
    ]
  },

  'lpic2-205-1': {
    title: 'Advanced Network Configurations',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Interface Management and Routing' },
      { type: 'paragraph', text: 'In LPIC-2, `ifconfig` is considered deprecated. The standard is the `iproute2` suite (`ip` command).' },
      { type: 'table', headers: ['Old Command', 'New ip Command', 'Purpose'], rows: [
        ['ifconfig', 'ip addr', 'Show/Set IP addresses'],
        ['route', 'ip route', 'Show/Set routing table'],
        ['arp', 'ip neigh', 'Show ARP table'],
        ['netstat -i', 'ip -s link', 'Interface statistics'],
      ]},
      { type: 'code', title: 'Setting an IP and Routes', prompt: '# ip addr add 192.168.1.50/24 dev eth0\n# ip route add default via 192.168.1.1', output: '' }
    ]
  },

  'lpic2-205-2': {
    title: 'Network Troubleshooting',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Traffic Detective' },
      { type: 'paragraph', text: 'When the network is down, you must know how to "listen" to the cables.' },
      { type: 'heading', level: 3, emoji: '👂', text: 'Tcpdump' },
      { type: 'code', title: 'Capturing packets', prompt: '# tcpdump -i eth0 icmp', output: '12:00:01.123 IP 192.168.1.50 > 8.8.8.8: ICMP echo request\n12:00:01.145 IP 8.8.8.8 > 192.168.1.50: ICMP echo reply' },
      { type: 'paragraph', text: 'You can save captures to a file with `-w file.pcap` and then analyze them comfortably with Wireshark.' },
      { type: 'infobox', variant: 'tip', content: 'Use `ss -tulpn` to instantly see which processes are occupying which ports on the server.' }
    ]
  },

  'lpic2-205-3': {
    title: 'Aggregation and Bridging',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Bonding and Bridging' },
      { type: 'paragraph', text: 'Fundamental for virtualization and high availability.' },
      { type: 'table', headers: ['Technique', 'Main Purpose'], rows: [
        ['Bonding', 'Join 2+ physical cards for redundancy or speed (LACP)'],
        ['Bridging', 'Create a virtual switch for VMs to communicate with the world'],
      ]},
      { type: 'code', title: 'Checking bridges', prompt: '$ brctl show\n# ip link show type bridge', output: 'bridge name     bridge id               STP enabled     interfaces\nbr0             8000.001122334455       no              eth0\n                                                        vnet0' }
    ]
  },

  'lpic2-206-1': {
    title: 'Software Compilation and Patch Management',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Sources: The Heart of Free Software' },
      { type: 'paragraph', text: 'Compiling from source allows for extreme customization, enabling only the necessary functions.' },
      { type: 'table', headers: ['Phase', 'Command', 'What Happens'], rows: [
        ['Configuration', './configure', 'Checks libraries and creates the Makefile'],
        ['Compilation', 'make', 'Transforms C code into executable binaries'],
        ['Installation', 'make install', 'Copies binaries to system folders (usually /usr/local)'],
        ['Cleanup', 'make clean', 'Removes temporary compilation files'],
      ]},
      { type: 'heading', level: 3, emoji: '🩹', text: 'Patch Management' },
      { type: 'paragraph', text: 'Patches are text files containing only the differences between two versions of code.' },
      { type: 'code', title: 'Creating and applying patches', prompt: '$ diff -u original_file.c modified_file.c > fix.patch\n$ patch -p1 < fix.patch', output: '' }
    ]
  },

  'lpic2-206-2': {
    title: 'Backup Strategies and Disaster Recovery',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: "Don't Gamble with Your Data" },
      { type: 'paragraph', text: 'An administrator without backups is an administrator who has already lost their job.' },
      { type: 'heading', level: 3, emoji: '🛡️', text: 'Rsync: The King of Incremental Backup' },
      { type: 'code', title: 'Remote Synchronization', prompt: '$ rsync -avz --delete -e ssh /data/ user@backup-server:/backups/', output: 'sending incremental file list\ndata/database.sql\n\nsent 5.6M bytes  received 2.1k bytes  1.2M bytes/sec' },
      { type: 'table', headers: ['Solution', 'Typical Usage'], rows: [
        ['Bacula / Bareos', 'Complex centralized corporate backup'],
        ['Amanda', 'Tape backup and network management'],
        ['LVM Snapshot', '"Frozen" backup of active systems'],
      ]}
    ]
  },

  'lpic2-206-3': {
    title: 'Monitoring and User Notification',
    sections: [
      { type: 'heading', level: 2, emoji: '📢', text: 'Communicating Downtime' },
      { type: 'paragraph', text: 'Before an intervention, it is good practice to notify those who are connected.' },
      { type: 'code', title: 'System Messages', prompt: '# wall "The system will be restarted in 10 minutes for hardware maintenance."', output: '' },
      { type: 'paragraph', text: 'The `/etc/motd` (Message Of The Day) file is shown at login, while `/etc/issue` is shown before the login prompt.' }
    ]
  },

  'lpic2-207-1': {
    title: 'DNS Basics and Caching',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'BIND: The Berkeley Internet Name Domain' },
      { type: 'paragraph', text: 'BIND is the most widespread DNS server in the world. It can act as an authoritative server or a simple cache.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'named.conf Configuration' },
      { type: 'code', title: 'Main file', prompt: '$ cat /etc/bind/named.conf.options', output: 'options {\n  directory "/var/cache/bind";\n  recursion yes;\n  allow-query { 192.168.1.0/24; };\n  forwarders { 8.8.8.8; 1.1.1.1; };\n};' },
      { type: 'infobox', variant: 'exam', content: 'Remember: `named-checkconf` checks for syntax errors in configuration files, while `named-checkzone` checks individual zone files.' }
    ]
  },

  'lpic2-207-2': {
    title: 'Managing DNS Zones',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Forward and Reverse Lookup' },
      { type: 'paragraph', text: 'A Forward zone translates names to IPs, a Reverse zone does the opposite (fundamental for mail servers).' },
      { type: 'table', headers: ['Record', 'Function'], rows: [
        ['SOA', 'Start of Authority (zone parameters)'],
        ['NS', 'Authoritative Name Servers'],
        ['A', 'Maps name to IPv4 address'],
        ['AAAA', 'Maps name to IPv6 address'],
        ['PTR', 'Maps IP to name (used in Reverse)'],
        ['MX', 'Mail Exchanger (mail server)'],
        ['CNAME', 'Alias (a name that points to another name)'],
      ]},
      { type: 'code', title: 'SOA record example', prompt: '@  IN  SOA  ns1.example.com. root.example.com. (\n  2024030601 ; Serial\n  3600       ; Refresh\n  1800       ; Retry\n  604800     ; Expire\n  86400      ; Minimum TTL\n)', output: '' }
    ]
  },

  'lpic2-207-3': {
    title: 'DNS Security and DNSSEC',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Protecting Names' },
      { type: 'paragraph', text: 'Classic DNS is not secure. DNSSEC adds digital signatures to ensure the response hasn\'t been intercepted and modified.' },
      { type: 'infobox', variant: 'warning', content: 'DNSSEC protects against Cache Poisoning but doesn\'t encrypt data. DNS traffic remains visible in plain text.' },
      { type: 'heading', level: 3, emoji: '🛡️', text: 'TSIG (Transaction Signatures)' },
      { type: 'paragraph', text: 'Uses shared secret keys to authenticate zone transfers between Master and Slave servers.' }
    ]
  },

  'lpic2-208-1': {
    title: 'Advanced Apache Configuration',
    sections: [
      { type: 'heading', level: 2, emoji: '🏛️', text: 'Professional Hosting with Apache' },
      { type: 'paragraph', text: 'Apache allows managing high loads and complex configurations via VirtualHosts and MPM (Multi-Processing Modules).' },
      { type: 'table', headers: ['MPM Module', 'Characteristics'], rows: [
        ['prefork', 'One process per connection (safe for non-thread-safe modules like PHP)'],
        ['worker', 'Uses multiple processes and many threads (lighter than prefork)'],
        ['event', 'Optimized to handle many persistent connections (Keep-Alive)'],
      ]},
      { type: 'code', title: 'Verifying loaded modules', prompt: '# apache2ctl -M | grep -i mpm', output: ' mpm_event_module (shared)' },
      { type: 'heading', level: 3, emoji: '📂', text: 'DocumentRoot and Directory' },
      { type: 'paragraph', text: 'Use the `<Directory>` directive to control file access and enable features like `.htaccess` via `AllowOverride`.' }
    ]
  },

  'lpic2-208-2': {
    title: 'Web Security and HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'The Secure Protocol' },
      { type: 'paragraph', text: 'Configuring HTTPS is no longer optional. In LPIC-2, you must know how to manage certificates manually.' },
      { type: 'code', title: 'SSL Configuration in Apache', prompt: '<VirtualHost *:443>\n  ServerName mysite.com\n  SSLEngine on\n  SSLCertificateFile /etc/ssl/certs/mysite.crt\n  SSLCertificateKeyFile /etc/ssl/private/mysite.key\n</VirtualHost>', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Always protect the private key (.key) with restrictive permissions: `chmod 600`. If a hacker gets it, they can decrypt all site traffic!' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx and Snappy Performance',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Why Choose Nginx?' },
      { type: 'paragraph', text: 'Nginx excels at serving static files and acting as a Reverse Proxy in front of other servers.' },
      { type: 'table', headers: ['Function', 'Nginx Directive'], rows: [
        ['Reverse Proxy', 'proxy_pass http://backend_server;'],
        ['Load Balancing', 'upstream backend { server s1; server s2; }'],
        ['Caching', 'proxy_cache_path /var/cache/nginx ...'],
        ['FastCGI (PHP)', 'fastcgi_pass unix:/var/run/php.sock;'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Nginx does not read `.htaccess` files. All configurations must be done in the main files in `/etc/nginx/sites-available/`.' }
    ]
  },

  'lpic2-209-1': {
    title: 'Samba: Linux-Windows Integration',
    sections: [
      { type: 'heading', level: 2, emoji: '🤝', text: 'Files and Printers for Everyone' },
      { type: 'paragraph', text: 'Samba transforms your Linux server into a perfect member of a Windows office.' },
      { type: 'heading', level: 3, emoji: '📝', text: 'smb.conf File Sections' },
      { type: 'table', headers: ['Section', 'Meaning'], rows: [
        ['[global]', 'General server settings (Workgroup, Security)'],
        ['[homes]', 'Automatically creates a share for each user\'s home folder'],
        ['[printers]', 'Manages printer sharing via CUPS'],
        ['[Data]', 'Custom share of a specific folder'],
      ]},
      { type: 'code', title: 'Creating a share', prompt: '[Data]\n   path = /srv/samba/data\n   writable = yes\n   browseable = yes\n   valid users = @technicians', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Remember that Samba users must also have a Linux system account, but not necessarily a Linux login password.' }
    ]
  },

  'lpic2-209-2': {
    title: 'NFS: Network File System',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Native Unix Sharing' },
      { type: 'paragraph', text: 'NFS is incredibly fast for sharing files between Linux servers on a local network.' },
      { type: 'code', title: 'Exporting folders', prompt: '# cat /etc/exports\n/shared  192.168.1.0/24(rw,sync,no_root_squash)', output: '' },
      { type: 'paragraph', text: 'The `no_root_squash` option allows the client\'s root user to have root powers on the remote folder (dangerous, use only if necessary!).' }
    ],
  },

  'lpic2-210-1': {
    title: 'DHCP and Autoconfiguration',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Advanced DHCP' },
      { type: 'paragraph', text: 'A DHCP server doesn\'t just give IPs; it can pass complex parameters like TFTP servers for network boot or NTP servers.' },
      { type: 'code', title: 'Subnet configuration', prompt: 'subnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.100 192.168.1.200;\n  option routers 192.168.1.1;\n  next-server 192.168.1.10; # For PXE boot\n}', output: '' },
      { type: 'infobox', variant: 'tip', content: 'The `omshell` command allows querying and modifying the ISC DHCP server while it is running, without restarting it.' }
    ]
  },

  'lpic2-210-2': {
    title: 'PAM: Pluggable Authentication Modules',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Login Flexibility' },
      { type: 'paragraph', text: 'PAM allows changing the whole system\'s security policy by modifying simple text files in `/etc/pam.d/`.' },
      { type: 'table', headers: ['Modifier', 'Effect'], rows: [
        ['required', 'Success is necessary. If it fails, the user fails but still goes through other modules (to not give clues)'],
        ['requisite', 'Success is necessary. If it fails, interrupts the stack immediately'],
        ['sufficient', 'If this succeeds and no previous "required" failed, authentication is approved immediately'],
        ['optional', 'Success/failure only matters if it\'s the only module in the stack'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'The modules are executed in order (the "stack"). The final result depends on the modifiers of each module.' },
      { type: 'infobox', variant: 'warning', content: 'An error in a PAM file can lock you out of the system! Always keep a root session open while experimenting.' }
    ]
  },

  'lpic2-210-3': {
    title: 'LDAP: Directory Services',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Managing Thousands of Users' },
      { type: 'paragraph', text: 'LDAP is not a relational database, but a directory service optimized for fast reads.' },
      { type: 'code', title: 'DN Structure', prompt: 'dn: uid=claudio,ou=Users,dc=linuxquest,dc=it\nobjectClass: inetOrgPerson\ncn: Claudio\nsn: Dall\'Ara', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Postfix: SMTP Configuration and Security',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'The Professional Digital Postman' },
      { type: 'paragraph', text: 'Postfix is designed to be secure. It is split into multiple processes that communicate with each other, each with minimal privileges.' },
      { type: 'table', headers: ['Command', 'Function'], rows: [
        ['postconf', 'Shows or changes configuration parameters (e.g., postconf -n)'],
        ['postmap', 'Compiles databases (e.g., aliases or transport files)'],
        ['postsuper', 'Operations on the queue (delete stuck emails)'],
        ['postqueue -f', 'Forces instantaneous queue delivery'],
      ]},
    ]
  },

  'lpic2-211-2': {
    title: 'Dovecot and Local Delivery',
    sections: [
      { type: 'heading', level: 2, emoji: '📮', text: 'IMAP and POP3 Access' },
      { type: 'paragraph', text: 'While Postfix sends emails, Dovecot allows users to read them.' },
      { type: 'infobox', variant: 'tip', content: 'Always configure Dovecot to use SSL/TLS. Passing passwords in clear text over standard IMAP/POP3 protocols is extremely risky.' }
    ]
  },

  'lpic2-212-1': {
    title: 'Network Security and IPTables',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'The Wall of Fire' },
      { type: 'paragraph', text: '`iptables` is the classic interface for managing `netfilter` in the kernel.' },
      { type: 'table', headers: ['Table', 'Purpose'], rows: [
        ['filter', 'Default for packet filtering'],
        ['nat', 'For Address Translation (Network Address Translation)'],
        ['mangle', 'To alter specific packet fields (TOS, TTL)'],
        ['raw', 'To configure packets that should not be tracked'],
      ]},
      { type: 'code', title: 'Typical rules', prompt: '# Block all incoming traffic\niptables -P INPUT DROP\n# Accept already established traffic\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT', output: '' }
    ]
  },

  'lpic2-212-2': {
    title: 'Intrusion Detection and Audit',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Technological Sentinels' },
      { type: 'paragraph', text: 'Installing programs like `Fail2Ban` or `AIDE` helps prevent and detect attacks before it is too late.' },
      { type: 'table', headers: ['Tool', 'What it Monitors'], rows: [
        ['Fail2Ban', 'System logs to ban IPs doing brute-force attacks'],
        ['AIDE', 'File integrity (sees if a system file has changed)'],
        ['Lynis', 'Complete system security audit'],
        ['Nmap', 'Open ports and services visible from the outside'],
      ]}
    ]
  },
}
