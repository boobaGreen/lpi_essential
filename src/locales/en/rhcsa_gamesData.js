// RHCSA Games Data — English
// Used by useGameData() when courseId === 'rhcsa'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1 — Essential Tools
  { command: 'grep -r "pattern" /etc/', description: 'Recursively search for a pattern in /etc/' },
  { command: 'tar -czvf archive.tar.gz /dir', description: 'Create a gzip-compressed archive' },
  { command: 'tar -xzvf archive.tar.gz', description: 'Extract a tar.gz archive' },
  { command: 'find / -name "*.conf" -type f', description: 'Find all .conf files on the system' },
  { command: 'chmod 755 file', description: 'rwxr-xr-x — owner executes, others read/execute' },
  { command: 'chown mario:dev file', description: 'Change owner and group of a file' },
  { command: 'ln -s /real/src /symbolic/link', description: 'Create a symbolic link' },
  { command: 'man -k "keyword"', description: 'Search all man pages for a keyword' },
  // Topic 2 — Shell Scripting
  { command: 'export VAR="value"', description: 'Make a variable available to child processes' },
  { command: 'RESULT=$(command)', description: 'Capture command output into a variable' },
  { command: '[ -f "$FILE" ]', description: 'Test if variable points to an existing file' },
  { command: '[ -d "$DIR" ]', description: 'Test if variable points to an existing directory' },
  { command: '[ -z "$VAR" ]', description: 'Test if a string is empty' },
  { command: 'for f in /etc/*.conf; do echo $f; done', description: 'Iterate over all .conf files in /etc/' },
  // Topic 3 — System Management
  { command: 'systemctl enable --now sshd', description: 'Enable and start sshd in a single command' },
  { command: 'systemctl mask httpd', description: 'Prevent any startup of the httpd service' },
  { command: 'systemctl set-default multi-user.target', description: 'Set the default boot target (CLI)' },
  { command: 'journalctl -u sshd -f', description: 'Follow sshd service logs in real time' },
  { command: 'kill -9 PID', description: 'Send SIGKILL to forcefully terminate a process' },
  { command: 'renice -n -5 -p PID', description: 'Change the priority of a running process' },
  // Topic 4 — LVM Storage
  { command: 'pvcreate /dev/sdb1', description: 'Initialize a partition as an LVM Physical Volume' },
  { command: 'vgcreate datavg /dev/sdb1', description: 'Create a Volume Group from a Physical Volume' },
  { command: 'lvcreate -L 2G -n datalv datavg', description: 'Create a 2GiB Logical Volume' },
  { command: 'lvextend -L +1G -r /dev/vg/lv', description: 'Extend LV and resize the filesystem' },
  { command: 'xfs_growfs /mountpoint', description: 'Grow a mounted XFS filesystem' },
  // Topic 5 — File System
  { command: 'mkfs.xfs /dev/sdb1', description: 'Format a partition with XFS filesystem' },
  { command: 'cryptsetup luksFormat /dev/sdc1', description: 'Format a partition with LUKS encryption' },
  { command: 'cryptsetup open /dev/sdc1 vault', description: 'Open a LUKS container as /dev/mapper/vault' },
  { command: 'setfacl -m u:mario:rw file', description: 'Add ACL permissions for user mario' },
  { command: 'getfacl file', description: 'Display extended ACL entries of a file' },
  // Topic 6 — System Maintenance
  { command: 'dnf install package', description: 'Install a package with all its dependencies' },
  { command: 'dnf provides /usr/bin/vim', description: 'Find which package provides a file/command' },
  { command: 'rpm -qf /usr/bin/passwd', description: 'Find the owner package of an installed file' },
  { command: 'rpm -ql package-name', description: 'List all files included in a package' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Regenerate the GRUB2 configuration' },
  // Topic 7 — Networking
  { command: 'nmcli con mod ens3 ipv4.addresses 192.168.1.100/24', description: 'Set a static IP on a connection' },
  { command: 'nmcli con up ens3', description: 'Activate and apply network configuration' },
  { command: 'firewall-cmd --add-service=http --permanent', description: 'Permanently open port 80 in the firewall' },
  { command: 'firewall-cmd --reload', description: 'Apply permanent firewall rules without reboot' },
  { command: 'ssh-copy-id mario@server', description: 'Copy SSH public key to the remote server' },
  // Topic 8 — Users and Groups
  { command: 'useradd -m -s /bin/bash mario', description: 'Create user with home directory and bash shell' },
  { command: 'usermod -aG wheel mario', description: 'Add mario to wheel group (sudo access)' },
  { command: 'chage -M 90 mario', description: 'Set password expiry to 90 days' },
  { command: 'visudo', description: 'Safely edit /etc/sudoers with syntax validation' },
  { command: 'userdel -r mario', description: 'Delete user and their home directory' },
  // Topic 9 — SELinux
  { command: 'getenforce', description: 'Show the current SELinux mode' },
  { command: 'setenforce 0', description: 'Switch SELinux to permissive mode (temporary)' },
  { command: 'restorecon -Rv /path', description: 'Recursively restore default SELinux contexts' },
  { command: 'setsebool -P httpd_can_network_connect on', description: 'Permanently enable an SELinux boolean' },
  { command: 'semanage port -a -t http_port_t -p tcp 8443', description: 'Add port 8443 to SELinux http_port_t type' },
  // Topic 10 — Containers
  { command: 'podman run -d --name web -p 8080:80 nginx', description: 'Start nginx container in background on port 8080' },
  { command: 'podman exec -it container bash', description: 'Open a bash shell in a running container' },
  { command: 'podman build -t myapp:1.0 .', description: 'Build an image from Containerfile in current directory' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1 — Easy
  { text: 'The default filesystem on RHEL9 for new partitions is XFS.', answer: true, explanation: 'XFS is the default filesystem on RHEL7+ and RHEL9 for its scalability.', difficulty: 1 },
  { text: '"systemctl enable sshd" immediately starts the sshd service.', answer: false, explanation: 'enable only configures automatic startup at boot. Use "start" or "--now" to start immediately.', difficulty: 1 },
  { text: 'The /etc/fstab file controls filesystems automatically mounted at boot.', answer: true, explanation: '/etc/fstab is read by systemd at boot to mount configured filesystems.', difficulty: 1 },
  { text: 'A nice value of -20 indicates the highest CPU priority for a process.', answer: true, explanation: 'The nice range goes from -20 (highest priority) to +19 (lowest priority).', difficulty: 1 },
  { text: 'SIGKILL (9) can be ignored by a process.', answer: false, explanation: 'SIGKILL cannot be caught, blocked, or ignored. It terminates the process immediately.', difficulty: 1 },
  { text: '"pvcreate" creates a Logical Volume in LVM.', answer: false, explanation: 'pvcreate initializes a Physical Volume. Logical Volumes are created with lvcreate.', difficulty: 1 },
  { text: 'SELinux in "permissive" mode blocks policy violations.', answer: false, explanation: 'Permissive logs violations but does NOT block them. Only enforcing blocks them.', difficulty: 1 },
  { text: 'Podman requires a root daemon to run, just like Docker.', answer: false, explanation: 'Podman is daemonless and supports rootless containers, unlike Docker.', difficulty: 1 },
  { text: '"restorecon" restores default SELinux contexts on files.', answer: true, explanation: 'restorecon restores SELinux contexts according to policy rules defined with semanage fcontext.', difficulty: 1 },
  { text: 'A filesystem UUID changes every time the device is mounted.', answer: false, explanation: 'The UUID is assigned at filesystem creation and never changes. It is permanent and unique.', difficulty: 1 },
  { text: '"dnf remove" also automatically removes orphan dependencies.', answer: false, explanation: 'dnf remove removes only the specific package. Orphan dependencies are removed with "dnf autoremove".', difficulty: 1 },
  { text: 'A hard link can point to files on different filesystems.', answer: false, explanation: 'Hard links must be on the same filesystem (same inode table). Symbolic links can be cross-filesystem.', difficulty: 1 },
  { text: '/etc/shadow contains user passwords in hashed form.', answer: true, explanation: '/etc/shadow stores password hashes, accessible only to root for security.', difficulty: 1 },

  // Difficulty 2 — Medium
  { text: '"lvextend -r" automatically resizes the filesystem after extending the LV.', answer: true, explanation: '-r (resize) makes lvextend automatically call resize2fs or xfs_growfs after extending.', difficulty: 2 },
  { text: '"firewall-cmd --add-port=8080/tcp" without --permanent persists after reboot.', answer: false, explanation: 'Without --permanent, the rule is temporary. It is lost on reboot or --reload.', difficulty: 2 },
  { text: '"semanage fcontext" immediately changes the contexts of existing files.', answer: false, explanation: 'semanage fcontext only adds the rule to the database. restorecon must be run to apply it.', difficulty: 2 },
  { text: '/etc/default/grub contains the GRUB2 menu entries.', answer: false, explanation: '/etc/default/grub contains parameters. Menu entries are in /boot/grub2/grub.cfg, generated by grub2-mkconfig.', difficulty: 2 },
  { text: '"usermod -G wheel mario" (without -a) keeps all of mario\'s previous groups.', answer: false, explanation: 'Without -a, -G REPLACES all supplementary groups. Use -aG to add without removing.', difficulty: 2 },
  { text: 'XFS supports shrinking a filesystem.', answer: false, explanation: 'XFS can ONLY grow. It does not support shrinking. ext4 (with resize2fs) supports shrinking when unmounted.', difficulty: 2 },
  { text: '"crontab -e" edits the root user\'s crontab by default.', answer: false, explanation: 'crontab -e edits the CURRENT USER\'s crontab. For root you must be root or use "sudo crontab -e".', difficulty: 2 },
  { text: 'The /dev/mapper/name mount point is created after cryptsetup open.', answer: true, explanation: 'cryptsetup open creates the device mapper /dev/mapper/name which is then formatted and mounted.', difficulty: 2 },
  { text: 'setsebool without -P modifies the SELinux boolean permanently.', answer: false, explanation: 'Without -P the change is temporary and lost on reboot. -P makes the boolean persistent.', difficulty: 2 },
  { text: '"partprobe" installs GRUB2 on the specified partition.', answer: false, explanation: 'partprobe informs the kernel of partition table changes without rebooting.', difficulty: 2 },
  { text: 'The ":z" tag in a Podman bind mount relabels for SELinux shared use between containers.', answer: true, explanation: ':z = shared label (shareable). :Z = private label (exclusive container use). Both needed with SELinux.', difficulty: 2 },
  { text: '"journalctl -b" shows only logs from the current boot.', answer: true, explanation: '-b filters the journal showing only current boot logs. -b -1 shows the previous boot.', difficulty: 2 },

  // Difficulty 3 — Hard
  { text: 'After resetting the root password with rd.break, you must run "touch /.autorelabel" for SELinux.', answer: true, explanation: 'Modifying /etc/shadow requires SELinux relabeling. touch /.autorelabel forces it on the next boot.', difficulty: 3 },
  { text: 'The "nosuid" mount option prevents execution of binary files.', answer: false, explanation: 'nosuid ignores setuid/setgid bits. noexec prevents binary execution. They are two different options.', difficulty: 3 },
  { text: 'In /etc/fstab, the "pass" field set to 2 indicates high-priority fsck scanning.', answer: false, explanation: 'pass=1 is highest priority (root). pass=2 scans after pass=1 filesystems. pass=0 means no fsck.', difficulty: 3 },
  { text: '"systemctl daemon-reload" is required after modifying a unit file.', answer: true, explanation: 'systemd caches unit files. daemon-reload rereads them from disk without restarting services.', difficulty: 3 },
  { text: '"semanage port -a" adds a port permanently without restarting SELinux.', answer: true, explanation: 'semanage modifies the SELinux policy database. The change is immediate and permanent.', difficulty: 3 },
  { text: '"mv" preserves the original SELinux context of the moved file.', answer: true, explanation: 'mv preserves the source context, which may be incorrect in the destination. Use restorecon after.', difficulty: 3 },
  { text: '"rpm -V" shows package files with unsatisfied dependencies.', answer: false, explanation: 'rpm -V verifies integrity (size, checksum, permissions) of package files. Dependencies are checked with rpm -R.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'systemctl _____ sshd', answer: 'enable --now', hint: 'enable and start in one command', difficulty: 1 },
  { prompt: 'dnf _____ httpd', answer: 'install', hint: 'install the package', difficulty: 1 },
  { prompt: 'useradd -m -s /bin/bash _____', answer: 'mario', hint: 'name of the user to create', difficulty: 1 },
  { prompt: 'pvcreate _____', answer: '/dev/sdb1', hint: 'partition device path', difficulty: 1 },
  { prompt: 'getenforce', answer: 'getenforce', hint: 'shows current SELinux mode', difficulty: 1 },
  { prompt: 'firewall-cmd --add-service=http _____', answer: '--permanent', hint: 'makes the rule persistent', difficulty: 1 },
  { prompt: 'podman _____ -it ubi9 /bin/bash', answer: 'run', hint: 'start a container', difficulty: 1 },
  { prompt: 'tar -czvf backup.tar.gz _____', answer: '/etc/ssh/', hint: 'directory to archive', difficulty: 1 },
  { prompt: 'passwd _____', answer: 'mario', hint: 'user whose password to set', difficulty: 1 },
  { prompt: 'systemctl _____ httpd', answer: 'status', hint: 'show service status', difficulty: 1 },
  // Difficulty 2
  { prompt: 'vgcreate datavg _____', answer: '/dev/sdb1', hint: 'Physical Volume to add to the VG', difficulty: 2 },
  { prompt: 'lvcreate _____ 2G -n datalv datavg', answer: '-L', hint: 'flag to specify absolute size', difficulty: 2 },
  { prompt: 'lvextend -L +1G _____ /dev/datavg/datalv', answer: '-r', hint: 'also resize the filesystem', difficulty: 2 },
  { prompt: 'setenforce _____', answer: '0', hint: 'permissive mode (for debugging)', difficulty: 2 },
  { prompt: 'usermod _____ wheel mario', answer: '-aG', hint: 'add to group WITHOUT removing others', difficulty: 2 },
  { prompt: 'chage _____ 90 mario', answer: '-M', hint: 'set maximum password age in days', difficulty: 2 },
  { prompt: 'firewall-cmd _____', answer: '--reload', hint: 'apply permanent rules', difficulty: 2 },
  { prompt: 'ssh-keygen -t _____', answer: 'ed25519', hint: 'modern recommended algorithm', difficulty: 2 },
  { prompt: 'cryptsetup _____ /dev/sdc1', answer: 'luksFormat', hint: 'format with LUKS encryption', difficulty: 2 },
  { prompt: 'grub2-mkconfig -o _____', answer: '/boot/grub2/grub.cfg', hint: 'path to GRUB2 config file', difficulty: 2 },
  // Difficulty 3
  { prompt: 'semanage fcontext -a -t httpd_sys_content_t "_____"', answer: '/web(/.*)?', hint: 'regex pattern for all files in directory', difficulty: 3 },
  { prompt: 'restorecon _____ /var/www/html', answer: '-Rv', hint: 'recursive and verbose', difficulty: 3 },
  { prompt: 'setsebool _____ httpd_can_network_connect on', answer: '-P', hint: 'makes the boolean permanent', difficulty: 3 },
  { prompt: 'podman run -v /data:/data:_____ nginx', answer: 'Z', hint: 'SELinux private label for exclusive use', difficulty: 3 },
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'switch to target without reboot', difficulty: 3 },
  { prompt: 'mkfs._____ /dev/datavg/datalv', answer: 'xfs', hint: 'default RHEL9 filesystem', difficulty: 3 },
  { prompt: 'semanage port -a -t http_port_t -p tcp _____', answer: '8443', hint: 'common alternative HTTPS port', difficulty: 3 },
  { prompt: 'journalctl -u sshd _____ "1 hour ago"', answer: '--since', hint: 'filter logs from a certain time', difficulty: 3 },
  { prompt: 'rpm -_____ /usr/bin/passwd', answer: 'qf', hint: 'query: which package owns this file?', difficulty: 3 },
  { prompt: 'nmcli con mod ens3 ipv4.method _____', answer: 'manual', hint: 'mode for static IP (not DHCP)', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-lvm-order',
    category: 'Correct LVM Order',
    question: 'Drag the LVM commands into the correct order:',
    items: [
      { text: 'lvcreate -L 2G -n datalv datavg', order: 3 },
      { text: 'mkfs.xfs /dev/datavg/datalv', order: 4 },
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
    ],
  },
  {
    id: 'dd-selinux-modes',
    category: 'SELinux Modes',
    question: 'Match the behavior to the SELinux mode:',
    items: [
      { text: 'Blocks AND logs violations', matches: 'Enforcing' },
      { text: 'Only logs, does not block', matches: 'Permissive' },
      { text: 'SELinux completely disabled', matches: 'Disabled' },
    ],
  },
  {
    id: 'dd-systemd-match',
    category: 'systemd Targets',
    question: 'Match the target to its equivalent runlevel:',
    items: [
      { text: 'multi-user.target', matches: 'Runlevel 3 (CLI)' },
      { text: 'graphical.target', matches: 'Runlevel 5 (GUI)' },
      { text: 'rescue.target', matches: 'Runlevel 1 (Single user)' },
    ],
  },
  {
    id: 'dd-firewall-cmds',
    category: 'Firewall Rules Classification',
    question: 'Classify firewall commands as temporary or permanent:',
    items: [
      { text: 'firewall-cmd --add-service=http', category: 'Temporary' },
      { text: 'firewall-cmd --add-service=http --permanent', category: 'Permanent' },
      { text: 'firewall-cmd --add-port=8080/tcp', category: 'Temporary' },
      { text: 'firewall-cmd --add-port=8080/tcp --permanent', category: 'Permanent' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-rhcsa-1', description: 'Show the current SELinux mode', prompt: 'getenforce', expectedOutput: 'Enforcing', hint: 'Use getenforce', difficulty: 1 },
  { id: 'tc-rhcsa-2', description: 'Show the default systemd target', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Use systemctl get-default', difficulty: 1 },
  { id: 'tc-rhcsa-3', description: 'Show block devices in tree format', prompt: 'lsblk', expectedOutput: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS', hint: 'Use lsblk', difficulty: 1 },
  { id: 'tc-rhcsa-4', description: 'Find which package provides /usr/bin/vim', prompt: 'dnf provides */vim', expectedOutput: 'vim-enhanced', hint: 'Use dnf provides', difficulty: 2 },
  { id: 'tc-rhcsa-5', description: 'Check which package installed /usr/bin/passwd', prompt: 'rpm -qf /usr/bin/passwd', expectedOutput: 'passwd-', hint: 'Use rpm -qf', difficulty: 1 },
  { id: 'tc-rhcsa-6', description: 'Show SELinux ports for http_port_t type', prompt: 'semanage port -l | grep http_port_t', expectedOutput: 'http_port_t', hint: 'Use semanage port -l with grep', difficulty: 2 },
  { id: 'tc-rhcsa-7', description: 'Find the PID of the sshd process', prompt: 'pgrep sshd', expectedOutput: '[0-9]+', hint: 'Use pgrep', difficulty: 1 },
  { id: 'tc-rhcsa-8', description: 'Show disk space with filesystem type', prompt: 'df -Th', expectedOutput: 'Filesystem', hint: 'Use df with -T and -h options', difficulty: 1 },
  { id: 'tc-rhcsa-9', description: 'List active network connections with nmcli', prompt: 'nmcli connection show', expectedOutput: 'NAME', hint: 'Use nmcli connection show', difficulty: 2 },
  { id: 'tc-rhcsa-10', description: 'Show running Podman containers', prompt: 'podman ps', expectedOutput: 'CONTAINER ID', hint: 'Use podman ps', difficulty: 1 },
  { id: 'tc-rhcsa-11', description: 'Show all SELinux booleans related to httpd', prompt: 'getsebool -a | grep httpd', expectedOutput: 'httpd_', hint: 'Use getsebool -a with grep', difficulty: 2 },
  { id: 'tc-rhcsa-12', description: 'Create a directory and check its SELinux context', prompt: 'mkdir /test && ls -Zd /test', expectedOutput: 'default_t', hint: 'Use mkdir and ls -Zd', difficulty: 3 },
  { id: 'tc-rhcsa-13', description: 'Show available LVM Volume Groups', prompt: 'vgs', expectedOutput: 'VG', hint: 'Use vgs for summary', difficulty: 2 },
  { id: 'tc-rhcsa-14', description: 'Read the last 10 logs for the httpd service', prompt: 'journalctl -u httpd -n 10', expectedOutput: 'httpd', hint: 'Use journalctl with -u and -n', difficulty: 2 },
  { id: 'tc-rhcsa-15', description: 'Check firewall rules in the public zone', prompt: 'firewall-cmd --zone=public --list-all', expectedOutput: 'public', hint: 'Use firewall-cmd --list-all', difficulty: 2 },
]
