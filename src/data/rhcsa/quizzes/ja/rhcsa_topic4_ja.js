// RHCSA Quiz — Topic 4: Local Storage — LVM (日本語)
// 20 MCQ questions

export const rhcsaTopic4QuizzesJA = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'ブロックデバイス（ディスクやパーティション）とその階層構造をツリー形式で表示するコマンドはどれですか？',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: '`lsblk` (list block devices) は、システム上のすべてのブロックデバイスを視覚的なツリー形式で、サイズ、タイプ、マウントポイントと共に表示します。',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'RHEL9においてGPTパーティションを作成するために「推奨されている」コマンドラインツールはどれですか？',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: '`parted` はGPTをネイティブにサポートしており、RHEL9における標準の推奨ツールです。最近の `fdisk` (v2.26以降) もGPTをサポートしていますが公式ドキュメントでは `parted` が多用されます。',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '`parted` を使用して、/dev/sdb 上の「1GiB から 2GiB まで」の領域に新しいパーティションを作成する正しいコマンドはどれですか？',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: '`parted` の構文は `mkpart <パーティション名/タイプ> <ファイルシステムタイプ> <開始位置> <終了位置>` です。ここでのファイルシステムタイプ (ext4) は単なるラベル（システムへのヒント）であり、フォーマット処理そのものは行いません。',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'すべてのブロックデバイスの UUID（一意識別子）とファイルシステムタイプを表示するコマンドはどれですか？',
    options: ['lsblk -f', 'blkid', 'df -T', 'A と B の両方'],
    correct: 3,
    explanation: '`blkid` はより詳細にシステムスクリプト向けに出力し、`lsblk -f` は人間にとって見やすい視覚的な表形式で UUID とファイルシステムタイプを表示します。どちらも正解です。',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '`parted` や `fdisk` で新しいパーティションを作成した後、システムを「再起動せずに」カーネルにパーティションテーブルの変更を認識させるコマンドはどれですか？',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: '`partprobe` コマンドはカーネルに対してディスク (/dev/sdb など) のパーティションテーブルを再読み込みするように指示し、再起動の手間を省きます。',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '新しい空のパーティションから論理ボリューム (LV) を作成するまでの「正しい順序」はどれですか？',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'LVMの構築順序は常にボトムアップです：物理ボリューム(PV)作成 → それを束ねてボリュームグループ(VG)作成 → VGから切り出して論理ボリューム(LV)作成。',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '通常のパーティションなどを、LVMの「物理ボリューム (Physical Volume)」として初期化するコマンドはどれですか？',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: '`pvcreate <デバイス名>` は、指定されたストレージデバイスにLVM制御用のメタデータを書き込み、物理ボリューム (PV) として使用できるように初期化します。',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '/dev/sdb1 と /dev/sdc1 の2つの物理ボリュームを使って、"datavg" という名前の「ボリュームグループ (Volume Group)」を新規作成するコマンドはどれですか？',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: '`vgcreate <VG名> <PV1> [PV2...]` は、1つまたは複数の初期化済みPVを組み合わせて新しいプール (VG) を作成します。',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '「すでに存在している」ボリュームグループ "datavg" に、新しく用意した物理ボリューム /dev/sdd1 を追加して容量を拡張するコマンドはどれですか？',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: '`vgextend <VG名> <追加するPV名>` を使用することで、既存のVGに新しいPVを追加し、利用可能な全体容量 (PEの総数) を増やすことができます。',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'システム上のボリュームグループ (VG) に関する「詳細な」情報（総容量、空きPE数、PEサイズなど）を表示するコマンドはどれですか？',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: '`vgdisplay` は対象VGの詳細なメタデータを表示します（名前、権限、PEサイズ、未割り当てのFree PEなど）。',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'ボリュームグループ "datavg" の中に、2GiB の容量を持つ "datalv" という名前の「論理ボリューム (Logical Volume)」を作成するコマンドはどれですか？',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: '構文は `lvcreate -L <サイズ> -n <LVの名前> <親となるVGの名前>` です。`-L` (大文字) は GiB などの絶対サイズ指定、`-l` (小文字) は PE (エクステント) の個数指定です。',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'ext4 ファイルシステムを持つ論理ボリューム "datalv" の容量を「1GiB 拡張」し、「同時に」中のファイルシステムもそのサイズに合わせてリサイズするコマンドはどれですか？',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'A と B の両方が正しい',
    ],
    correct: 3,
    explanation: 'Aは手動でLVを拡張したあと別途FSを拡張する古典的な手法です。Bの `-r` (resizefs) オプションを使えば、LVの拡張と同時に安全にFS（ext4やxfs）も自動拡張してくれます。実務では `-r` が推奨されます。',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '「XFS」ファイルシステムでフォーマットされた論理ボリュームを lvextend した「直後」に、手動で当該ファイルシステムを拡張するために使用するコマンドはどれですか？',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'ext4 ならば `resize2fs <デバイス>` ですが、XFS の場合は `xfs_growfs <マウントポイント>` を使用します。XFSはオンライン（マウント中）での拡張のみをサポートし、デバイスパスではなくマウントポイントを引数に取ります。',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'VG "datavg" 内に作成されたLV "datalv" の「デバイスファイル」へのパスとして正しいものはどれですか？',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'LVMは自動的に `/dev/<VG名>/<LV名>` というシンボリックリンクを作成します。また、`/dev/mapper/<VG名>-<LV名>` というリンクも同時に存在し、どちらを使っても同じブロックデバイス (/dev/dm-X) を指します。',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'システム上のすべての論理ボリュームの「簡潔な表形式」の要約情報を表示するコマンドはどれですか？',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'B と C の両方'],
    correct: 3,
    explanation: '`lvdisplay` は詳細なテキストブロックスタイルで、`lvs` はすっきりと見やすい表 (Table) 形式で情報を表示します。状況によって使い分けます。',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '/etc/fstab ファイルにおいて、従来のデバイス名 (/dev/sdb1 など) よりも「UUID」を使用することが強く推奨されるのはなぜですか？',
    options: [
      'UUIDの方が短くて覚えやすいから',
      'デバイス名は再起動や物理構成の変更で（sda⇔sdbのように）変わる可能性があるが、UUIDは絶対に変化しないから',
      'RHEL9では従来のデバイス名(/dev/sdX)の使用が完全に禁止されたから',
      'UUIDを使用するとディスクのマウント速度とI/Oパフォーマンスが向上するから',
    ],
    correct: 1,
    explanation: 'USBメモリを挿したりディスクコントローラの認識順が変わったりすると `/dev/sda` と `/dev/sdb` が入れ替わることがあります。UUIDはファイルシステム作成時に生成される固有のハッシュであり、配線が変わっても不変です。',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '`/etc/fstab` に新しい設定を追記した後、次回の再起動時にシステムがクラッシュしないか（構文が正しいか）を「再起動せずに」即座にテストするコマンドはどれですか？',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: '`mount -a` (all) は、fstabファイル内に記述されているがまだマウントされていないすべてのエントリをマウントしようと試みます。もし記述ミスがあればこの時点で構文エラーが出るため、再起動時のパニックを防げます。',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: '`/dev/mapper/datavg-datalv` を ext4 にて `/data` にデフォルトオプションで自動マウントさせたい場合、`/etc/fstab` の正しい記述はどれですか？',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'fstabの列の並び順は `<デバイス/UUID> <マウントポイント> <ファイルシステム種類> <オプション> <dump要否> <fsck順序>` です。',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: '/dev/sdb2 パーティションを「スワップ領域(Swap)」としてフォーマットし、それを即座にシステムで有効化するコマンドセットはどれですか？',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'スワップ領域は専用の `mkswap` コマンドでフォーマット（署名）し、`swapon` コマンドでカーネルに認識させて有効化します。永続化するには fstab にも記載します。',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: '現在システムで有効になっている「すべてのアクティブなスワップ領域」とその使用量・サイズを表示するコマンドはどれですか？',
    options: ['swapon --show', 'cat /proc/swaps', 'free -h', 'これらすべて'],
    correct: 3,
    explanation: '`swapon --show`、`cat /proc/swaps` はどのパーティションがスワップとして使われているかの詳細な一覧を出力し、`free -h` はシステム全体のメモリとスワップの総合計を見やすく表示します。すべて正解です。',
  },
]
