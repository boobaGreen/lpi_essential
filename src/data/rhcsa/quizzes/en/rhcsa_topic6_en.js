// RHCSA Quiz — Topic 6: System Maintenance (English) — 15 questions

export const rhcsaTopic6QuizzesEN = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Which command installs the "httpd" package with dnf?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: 'dnf install <package> installs the package and its dependencies. yum is its predecessor and is deprecated.',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'How do you update all system packages?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'Both A and B'],
    correct: 3,
    explanation: 'dnf update and dnf upgrade are equivalent on RHEL9. They update all installed packages.',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'How do you find out which package provides the file /usr/bin/vim?',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'Both B and C',
    ],
    correct: 3,
    explanation: 'Both dnf provides and rpm -qf answer the question "which package contains this file". rpm only works if already installed.',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'How do you configure a local repository from a DVD/ISO into /etc/yum.repos.d/?',
    options: [
      'Create a .repo file with baseurl=file:///mount/point',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: 'A .repo file with baseurl=file:///path configures a local repo. Set gpgcheck=0 if it is unsigned.',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'How do you list all installed packages?',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Both B and C'],
    correct: 3,
    explanation: 'Both dnf list installed and rpm -qa list all installed packages.',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Which rpm command shows the files contained in an installed package?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'rpm -ql (query list) lists all files installed by a package.',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'How do you verify the integrity of files from an installed package?',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: 'rpm -V (verify) compares the package files with what is actually installed, reporting differences.',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'How do you install a local RPM package without automatically resolving dependencies?',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: '--nodeps ignores dependencies. -ivh installs with verbose output and a progress hash. Use with caution!',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Where are the main configuration parameters for GRUB2 located on RHEL9?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: '/etc/default/grub contains the editable parameters. grub.cfg is auto-generated and should not be modified manually.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'After editing /etc/default/grub, which command regenerates grub.cfg?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'grub2-mkconfig -o /boot/grub2/grub.cfg regenerates the GRUB2 configuration file.',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'How do you set the GRUB menu timeout to 5 seconds?',
    options: [
      'Edit GRUB_TIMEOUT=5 in /etc/default/grub, then run grub2-mkconfig',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'Modify GRUB_TIMEOUT in the /etc/default/grub file, then regenerate grub.cfg with grub2-mkconfig.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Which file contains the GRUB2 menu entries for the available kernels?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 1,
    explanation: '/boot/grub2/grub.cfg is the generated file with all boot entries. Scripts in /etc/grub.d/ contribute to generating it.',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'How do you install a package group like "Development Tools" with dnf?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'Both B and C',
    ],
    correct: 3,
    explanation: 'Both dnf group install and dnf groupinstall are valid for installing package groups.',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Which rpm option shows information about an installed package (description, version, etc.)?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: 'rpm -qi (query info) shows the name, version, architecture, description, and build date of an installed package.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'How do you download a package without installing it?',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: 'dnf download <package> downloads the RPM file without installing it. Useful for transferring to offline systems.',
  },
]
