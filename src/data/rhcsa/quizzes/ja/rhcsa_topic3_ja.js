// RHCSA Quiz — Topic 3: Running System Management (日本語)
// 22 MCQ questions

export const rhcsaTopic3QuizzesJA = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '古い「ランレベル 3（マルチユーザー、グラフィックスなし・CUI）」に相当する systemd のターゲットはどれですか？',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: '`multi-user.target` はランレベル 3 (CLI/テキストモード) に相当します。`graphical.target` はランレベル 5 (GUIモード) に相当します。',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'システムの「デフォルトターゲット（起動時のモード）」を永続的（パーマネント）に変更するにはどうしますか？',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: '`systemctl set-default <ターゲット名>` は、`/etc/systemd/system/default.target` という名前のシンボリックリンクを作成（または上書き）することで、永続的なデフォルトの起動ターゲットを設定します。',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'RHCSAの試験でルートパスワードをリセットする際など、起動プロセスを中断して「緊急シェル (emergency shell)」に入るために GRUB カーネルパラメータに追記する単語はどれですか？',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: '`rd.break` は、システムディスク (`/sysroot`) がマウントされる前、initramfs のフェーズで起動を意図的に中断します。これは RHEL9 などのモダンなシステムにおける root パスワードリセットの標準手順です。',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'SELinux が有効な RHEL9 で `rd.break` を使い root パスワードを変更した後、再起動する「前」に必ず実行しなければならないコマンドはどれですか？',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'パスワード変更などのために `/etc/shadow` を直接（かつSELinuxポリシーが読み込まれていない状態で）編集したため、ファイルのコンテキストが失われています。`touch /.autorelabel` は、次回の起動時にファイルシステム全体の SELinux ラベルを強制的に再マーキングさせます。',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'システムを再起動「せず」に、即座にレスキューターゲット（シングルユーザーモード）へ移行するコマンドはどれですか？',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: '`systemctl isolate <ターゲット>` は、指定されたターゲットとその依存関係のみを起動し、それ以外の不要なサービスを直ちに停止させることで、再起動せずにシステムの状態（モード）を切り替えます。',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '現在設定されているデフォルトターゲットを確認するコマンドはどれですか？',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: '`systemctl get-default` は、現在のデフォルトターゲット（default.target シンボリックリンクのリンク先）を標準出力に表示します。',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'コマンド `kill -9 <PID>` はどのシグナルを送信しますか？',
    options: ['SIGTERM (15) — ソフトな終了要求', 'SIGKILL (9) — 強制的な即時終了', 'SIGHUP (1) — 設定の再読み込み', 'SIGSTOP (19) — プロセスの一時停止'],
    correct: 1,
    explanation: '`-9` は SIGKILL を意味します。このシグナルはプロセスにキャッチ（ブロック）されたり無視されたりすることはなく、OSカーネルによって問答無用で即座にプロセスが強制終了されます。',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'すでに実行中の PID 1234 のプロセスの CPU 優先度（nice 値）を「-5」に変更するコマンドはどれですか？',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: '`renice -n <値> -p <PID>` は、既存の「実行中」のプロセスの nice 値を変更（リナイス）します。`nice` コマンド自体は、新しいプロセスを立ち上げるときにのみ使用します。',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'nice 値の範囲において、プロセスに対する「最も高い優先度（CPUタイム）」を示す値はどれですか？',
    options: ['100（最高値）', '-20（最低値、最高優先度）', '+19（最高値）', '0（デフォルト）'],
    correct: 1,
    explanation: 'nice 値は -20（高い優先度、他を押しのけて実行される／root のみ設定可能）から +19（低い優先度、他人にCPUを譲る）の範囲です。値が「少ない」ほど、プロセスの「nice（親切さ）」が少なくなり、優先度が高くなります。',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'システム上の「すべてのユーザー」の「すべてのプロセス」を、詳細なフォーマットで表示するコマンドはどれですか？',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: '`ps aux` は定番のBSDスタイルのコマンドです。a = すべてのユーザー、u = ユーザー指向の列フォーマット（CPU/メモリ使用率などを含む）、x = 制御端末（TTY）を持たないデーモンプロセスも含む。',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '"httpd" という名前で実行されている「すべて」のプロセスに対して、終了シグナル (SIGTERM) を送るコマンドはどれですか？',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: '`killall <プロセス名>` は、指定した完全なプロセス名を持つすべての実行中プロセスに対してシグナル（デフォルトは15/SIGTERM）を送信します。`pkill` はパターンマッチングで使用されます。',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Ctrl+Z などで一時停止 (suspend) され、ジョブ番号 `%2` となっているバックグラウンドジョブを、再度フォアグラウンド（画面の手前）に呼び出して再開させるコマンドはどれですか？',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: '`fg %番号` (foreground) はバックグラウンドのジョブを手前に呼び出します。`bg %番号` (background) は一時停止中のジョブを裏でサイレントに再開させます。`jobs` コマンドで現在のジョブ一覧を確認できます。',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'sshd サービスを「OS 起動時の自動起動（自動開始）」に設定しつつ、同時に「今すぐ起動」する一石二鳥のコマンドはどれですか？',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: '`systemctl enable --now <サービス>` オプションは、enable（自動起動の有効化）と start（即時実行）の2つの手順を1回のコマンドでスマートに処理します。',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '`systemctl stop` と `systemctl disable` の正確な違いは何ですか？',
    options: [
      '両者は完全に同一である',
      'stop はサービスを「今すぐ」停止させる；disable は「次回の再起動時」に自動で起動しないようにする',
      'disable はサービスを「今すぐ」停止させる；stop はサービスそのものをシステムから削除する',
      'stop はサービスを恒久的に削除する',
    ],
    correct: 1,
    explanation: '`stop` は現在のセッション（実行中メモリ）でのみサービスを止めます。OSが再起動すればまた起動します。`disable` は起動時のシンボリックリンクを削除し、再起動時の自動起動を無効化するだけで、現在動いているプロセスは止めません。',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '手動で `start` を打たれた場合や、他のサービスが依存して呼び出そうとした場合でも、絶対に起動しないようにサービスを完全に「封印（ブロック）」するコマンドはどれですか？',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: '`mask` を使用すると、該当サービスのユニットファイルが `/dev/null` へのシンボリックリンクに置き換えられるため、誰もいかなる方法でもそのサービスを起動できなくなります。元に戻すには `unmask` を使用します。',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '特定のサービス（例: httpd）の実行中のステータス、PID、および最近数行のログを一度に確認するコマンドはどれですか？',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: '`systemctl status <サービス名>` は、サービスの稼働状態（active/failed）、enable設定、メインプロセスのPID、そして末尾の数行のログ出力を提供する非常に便利な診断ツールです。',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: '`/etc/systemd/system/` などの systemd サービス設定ファイル（.service）を手動で編集した後、systemd の内部プロセスにその変更を認識させるための必須コマンドはどれですか？',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: '設定ファイルを直接書き換えても、systemdのデーモンはそれを自動的に検知しません。`systemctl daemon-reload` を実行して、ディスク上のユニットファイルをメモリに再読み込み（リフレッシュ）させる必要があります。',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'システム全体のログを「リアルタイム」で画面に流し続ける（追跡する）コマンドはどれですか？',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: '`journalctl -f` (follow) は、新しいログエントリが追加されるたびにそれをターミナルに継続して出力します。従来の `tail -f /var/log/messages` の systemd 版です。',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'journalctl を使用して、「sshd」サービスに関連するログ「のみ」を抽出（フィルタリング）する正しい構文はどれですか？',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: '`-u` (unit) オプションを使用すると、特定の systemd ユニット（この場合は sshd.service）によって生成されたログエントリだけを的確に絞り込むことができます。',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'デフォルトでは再起動時に消えてしまう揮発性の systemd ジャーナルログを、「永続的（ディスクに保存）」にするためにはどのファイルを設定しますか？',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: '`/etc/systemd/journald.conf` を編集して `Storage=persistent` と設定（または `/var/log/journal` ディレクトリを手動で作成）すると、ジャーナルログは再起動後もディスクに残るようになります。',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: '現在ログインしているユーザー名の権限で、個人的な定期的スケジュールタスク (cron job) を新規作成・編集するために使用するコマンドはどれですか？',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: '`crontab -e` (edit) は、環境変数 EDITOR で設定されたエディタを開き、現在のユーザーの crontab を安全に編集し、保存時に構文チェックと crond へのリロードを自動で行います。',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: '「毎週月曜日の 午前 3:30」にスクリプトを実行する、正しい cron のスケジュール指定はどれですか？',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Cron の 5つのフィールドは前から順に「分 (0-59)」「時 (0-23)」「日 (1-31)」「月 (1-12)」「曜日 (0-7, 1=月曜)」です。したがって `30 3 * * 1` は、すべての週の月曜日（1）の 3時 30分を示します。',
  },
]
