// RHCSA Quiz — Topic 6: System Maintenance (日本語) — 15 questions

export const rhcsaTopic6QuizzesJA = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'dnf を使用して "httpd" パッケージをインストールするコマンドはどれですか？',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: '`dnf install <パッケージ名>` で、指定したパッケージとその依存関係をすべてダウンロードしてインストールします。`yum` は dnf の前身であり、現在は dnf へのシンボリックリンクになっています。',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'システムにインストールされている「すべてのパッケージ」を最新版にアップデートするにはどうしますか？',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'A と B の両方'],
    correct: 3,
    explanation: 'RHEL8 / RHEL9 の `dnf` においては、`dnf update` と `dnf upgrade` は完全に同一の動作（不要な古い依存パッケージの削除付きアップデート）を行います。',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'ある特定のファイル（例：`/usr/bin/vim`）が「どのパッケージから提供されているか」を調べるコマンドはどれですか？',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'B と C の両方',
    ],
    correct: 3,
    explanation: '`dnf provides <パス>` はリポジトリ全体を検索します（未インストールのコマンドを探すのに便利）。`rpm -qf <パス>` は既にローカルにインストールされているパッケージデータベースにのみ問い合わせます。どちらも正解です。',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'マウントしたインストール DVD や ISO イメージをソースとして、`/etc/yum.repos.d/` にローカルリポジトリを設定する正しい方法はどれですか？',
    options: [
      'baseurl=file:///マウントポイント を記述した .repo ファイルを手動で作成する',
      'dnf addrepo file:///マウントポイント',
      'rpm --import /マウントポイント',
      'dnf config-manager --add-repo /マウントポイント',
    ],
    correct: 0,
    explanation: '最も確実で試験でも多用されるのは、`/etc/yum.repos.d/` 配下に手動で `.repo` ファイルを作成し、`baseurl=file:///マウントポイント` (AppStream や BaseOS へのパス) を記述する方法です。GPGキーがない場合は `gpgcheck=0` も設定します。',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'システムに「現在インストールされている」すべてのパッケージを一覧表示する方法はどれですか？',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'B と C の両方'],
    correct: 3,
    explanation: '`dnf list installed` と `rpm -qa` の両方が、現在ローカルシステムにインストールされているすべての RPM パッケージのリストを出力します。',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'ある「インストール済み」のパッケージ（例: httpd）によってシステムに配置された「すべてのファイルの一覧」を表示する rpm コマンドはどれですか？',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: '`rpm -ql` (query list) は、指定したパッケージが含まれているすべてのファイル・ディレクトリの絶対パスを一覧表示します。',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'インストール済みパッケージのファイルが、改ざんされたり誤って変更されたりしていないか「ファイルの整合性」を検証するコマンドはどれですか？',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: '`rpm -V` (verify) は、ディスク上の実際のファイルの状態（サイズ、MD5ハッシュ、パーミッション、所有者など）を、RPMデータベース内の元のメタデータと比較し、差分があれば警告を出力します。',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'インターネットに繋がっていない環境で、依存関係のチェックを「完全に無視して」ローカルの RPM パッケージを強制インストールするコマンドはどれですか？',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: '`--nodeps` オプションは依存パッケージの不足エラーを無視して強制インストールします。`-ivh` は Install, Verbose, Hash(進行状況の表示) を意味します。システムが不安定になるため最終手段です。',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'RHEL9 において、システム管理者が手動で編集すべき GRUB2 ブートローダの「主要な設定パラメータ（タイムアウト時間やカーネルオプションなど）」が保存されているファイルはどれですか？',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: 'ユーザーが安全に編集できる共通設定ファイルは `/etc/default/grub` です。`/boot/grub2/grub.cfg` はコマンドによって自動生成されるファイルであり、直接編集してはいけません。',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '`/etc/default/grub` を編集した後、その変更を実際のブート設定ファイル (`grub.cfg`) に反映させるために実行するコマンドはどれですか？',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: '`grub2-mkconfig -o /boot/grub2/grub.cfg` コマンドが、`/etc/default/grub` の内容と `/etc/grub.d/` のスクリプトを元に、新しい完全な grub.cfg を生成（上書き出力）します。',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'OS起動時の GRUB メニューの「待機時間（タイムアウト）」を 5秒 に変更する正しい手順はどれですか？',
    options: [
      '/etc/default/grub 内の GRUB_TIMEOUT=5 を編集し、grub2-mkconfig を実行する',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'タイムアウト時間は `/etc/default/grub` 内の変数 `GRUB_TIMEOUT=5` を書き換えます。書き換えただけでは反映されないため、必ず直後に `grub2-mkconfig -o /boot/grub2/grub.cfg` を実行します。',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: '起動可能なすべてのカーネルエントリ（メニュー項目）の最終的なリストが実際に格納されている生成済みのファイルはどれですか？',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 1,
    explanation: '最終的な実データの格納場所は `/boot/grub2/grub.cfg` です。このファイルの中にOSを起動するためのメニュー名、カーネルパス、initrd パスなどがすべて記述されています。',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'dnf を使用して "Development Tools" のような複数のソフトウェアがまとまった「パッケージグループ」を一括インストールするにはどうしますか？',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'B と C の両方',
    ],
    correct: 3,
    explanation: '`dnf group install "Group Name"` と `dnf groupinstall` のどちらも使用可能です。グループインストールは、関連するツール群を一度に揃えるのに非常に便利です。',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'インストール済みの特定のパッケージに関するメタ情報（詳細な説明文、バージョン、ビルド日時、作成者など）を表示する rpm オプションはどれですか？',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: '`rpm -qi` (query info) は、リポジトリにパッケージを公開したベンダが用意したマニュアル的な説明や、ライセンス情報などを表示します。',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'dnf を使用して、パッケージを「システムにインストールはせず」に RPM ファイルとしてカレントディレクトリに「ダウンロードのみ」行うコマンドはどれですか？',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: '`dnf download <パッケージ名>` を実行すると、リポジトリから対象の .rpm 拡張子のファイルのみをダウンロードします。オフラインマシンのためにパッケージをUSBメモリで運ぶ際などに必須のコマンドです。',
  },
]
