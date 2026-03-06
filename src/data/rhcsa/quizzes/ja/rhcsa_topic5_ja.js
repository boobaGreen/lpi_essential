// RHCSA Quiz — Topic 5: File System (日本語) — 20 questions

export const rhcsaTopic5QuizzesJA = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '/dev/sdb1 上に ext4 ファイルシステムを作成するコマンドはどれですか？',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'A と B の両方'],
    correct: 3,
    explanation: '`mkfs.ext4` と `mkfs -t ext4` は完全に等価です（内部的に同じプロセスを呼び出します）。実務ではより短く打てる `mkfs.ext4` がよく使われます。',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'RHEL9 において、新しいパーティションを作成する際の「デフォルト」のファイルシステムはどれですか？',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: '高いスケーラビリティ（拡張性）と優れたI/Oパフォーマンスの理由から、RHEL7 以降（RHEL9 含む）のデフォルトのファイルシステムは XFS になっています。',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '/data にマウントされている XFS ファイルシステムの詳細なメタデータ情報（ブロックサイズなど）を表示するコマンドはどれですか？',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: '`xfs_info <マウントポイント>` は、動作中の XFS ファイルシステムのパラメータを表示します。`tune2fs` や `dumpe2fs` は ext2/ext3/ext4 専用のツールです。',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: '破損した XFS ファイルシステムを修復（リペア）するために使用するコマンドはどれですか？',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'XFS の修復には `xfs_repair` を使用します。注意点として、修復対象のデバイスは「必ずアンマウント（オフライン）状態」である必要があります。',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: '一定時間アクセスがない場合に、自動的にファイルシステムをアンマウントさせる設定が可能なマウントオプションはどれですか？',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: '`x-systemd.automount` は、systemd のオートマウント機能をトリガーします。これと `x-systemd.idle-timeout` などを組み合わせることで、オンデマンドのマウントとタイムアウトによる自動アンマウントが実現できます。',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '/dev/sdc1 を LUKS 暗号化フォーマットで初期化するコマンドはどれですか？',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: '`cryptsetup luksFormat` はデバイス上に LUKS コンテナ（ヘッダーと鍵スロット）を構築します。実行時に大文字の「YES」とパスフレーズの入力が求められます。',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '`luksFormat` の後、その LUKS コンテナを "datadisk" という論理的な名前で「開く（マッピングする）」コマンドはどれですか？',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'A と B の両方',
    ],
    correct: 3,
    explanation: '最近の cryptsetup のバージョンでは、新しい汎用構文である `open` と、レガシー構文である `luksOpen` のどちらを使っても同じ意味になります。結果として `/dev/mapper/datadisk` というブロックデバイスが作成されます。',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'システム起動時に、インタラクティブ（対話的）なパスワード入力なしで LUKS ボリュームを自動的に開くための設定を記述するファイルはどこですか？',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: '`/etc/crypttab` ファイルに設定を記述します。ここにマッピング名、物理デバイスパス、そしてパスワードの代わりに読み込ませる「キーファイル」のパスを指定します。',
  },

  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'RHEL9 において、NFS ファイルシステムをクライアントとしてマウントするためにインストールが必要なパッケージはどれですか？',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: '`nfs-utils` には NFS のクライアント機能とサーバー機能のユーティリティが両方含まれています。Samba (Windows 共有) のマウントには `cifs-utils` が必要です。',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'NFS 共有 `192.168.1.10:/data` を `/mnt/data` に永続的にマウントするための `/etc/fstab` の正しいエントリはどれですか？',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'フォーマットは `サーバーIP:/共有パス マウントポイント nfs オプション 0 0` です。最近のシステムでは `nfs4` を指定するか、単に `nfs` と書いても自動でバージョンネゴシエーションが行われます。',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'autofs の設定において、`/misc` ディレクトリ配下に対する個別のマウント設定（NFS 共有の割り当てなど）が記述されるファイルは通常どれですか？',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 1,
    explanation: 'マスター設定ファイルである `/etc/auto.master` 内で、`/misc` というディレクトリに対する処理を `/etc/auto.misc` という設定ファイルに委任するような構成が一般的です。',
  },

  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '`/project` ディレクトリに対して、特定のユーザー "mario" に読み取り/書き込み (rw) 権限を追加するコマンドはどれですか？',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: '`setfacl -m` (modify) オプションに続けて `u:ユーザー名:権限` を指定することで、特定のユーザー単体に向けたアクセス制御リスト (ACL) エントリを追加または変更できます。',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'ファイルに設定されている ACL (Access Control List) を表示するコマンドはどれですか？',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: '`getfacl <ファイル名>` は、そのファイルやディレクトリに設定されている標準のパーミッションと、拡張された ACL のエントリを一覧表示します。',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'ディレクトリに対して setGID (Set Group ID) 権限を設定すると、どのような効果がありますか？',
    options: [
      'そのディレクトリ内のバイナリが root 権限で実行されるようになる',
      '新しいファイルが作成された際、作成者のメイングループではなく、「そのディレクトリの所有グループ」を自動的に継承する',
      'root ユーザーだけが書き込めるようになる',
      'ディレクトリ全体が削除できなくなる',
    ],
    correct: 1,
    explanation: 'ディレクトリに `chmod g+s` で setGID ビットを立てると、その中に作られるすべての新規ファイルやサブディレクトリは、親ディレクトリと同じ所有グループを引き継ぎます。共有フォルダで大変便利な機能です。',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '`/shared` ディレクトリ内に「新しく作成されるファイル」すべてに対して、自動的に "mario" の rw 権限の ACL を適用させる（デフォルトACLにする）方法はどれですか？',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'A と C の両方が正しい',
    ],
    correct: 3,
    explanation: '`setfacl` において `d:` (あるいは `--default`) を先頭につけることで、そのACLが「デフォルトACL」としてディレクトリに設定され、今後の新規作成ファイルに自動で引き継がれるようになります。',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'ext4 ファイルシステムのマウント時に、明示的に ACL サポートを有効化するための `/etc/fstab` でのオプション指定はどれですか？',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'マウントオプションに `acl` を追加することで POSIX ACL がサポートされます。ただし、RHEL9 などの最新のカーネルやデフォルトのファイルシステム設定では、多くの場合 `acl` は初めから暗黙的に有効になっています。',
  },

  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'そのファイルシステム上にあるプログラム（実行可能ファイル）を「実行できないようにする（実行を禁止する）」セキュリティ向けのマウントオプションはどれですか？',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: '`noexec` はバイナリやスクリプトの実行をブロックします。`nosuid` は SUID/SGID ビットを無効化します。これらは、ユーザーが自由に書き込める `/tmp` などのパーティションに対してセキュリティ強化のために使われます。',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '現在マウントされている各ファイルシステムにおいて、ディスクの全体容量、使用量、および「利用可能な空き容量」を表示するコマンドはどれですか？',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: '`df -h` (disk free, human readable) はマウントポイントごとの空き容量の概要を示します。対して `du -sh` (disk usage) は、特定のディレクトリやファイルがどれだけの容量を消費しているかを集計します。',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: '`/etc/fstab` に記述したデバイスのマウントに失敗した場合でも、システム起動時のエラー（エマージェンシーモードへの突入）を防ぎ、そのまま OS の起動を継続させるためのオプションはどれですか？',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: '`nofail` オプションは、systemd に対してマウントの失敗を許容するように指示します。接続されていない可能性のある外付けUSBドライブや、ネットワーク遅延で繋がらないNFSなどのマウントエントリに必須のオプションです。',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'LUKS ボリュームを `luksOpen` コマンドで仮想的に開いた後、その中に ext4 ファイルシステムを構築する（フォーマットする）ための正しいコマンドはどれですか？',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/volume_name',
      'cryptsetup mkfs /dev/mapper/volume_name',
      'luks-mkfs /dev/mapper/volume_name',
    ],
    correct: 1,
    explanation: '一度 LUKS ボリュームを開いたら、物理デバイス (`/dev/sdX`) ではなく、デバイスマッパーによって生成された仮想化ブロックデバイス (`/dev/mapper/名前`) に対して `mkfs` を実行する必要があります。',
  },
]
