export const rhcsaExtendedContentJA = {
  'rhcsa-1-1': {
    title: 'ディープダイブ：高度なリダイレクトとディスクリプタ',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Linuxにおけるファイルディスクリプタ' },
      { type: 'paragraph', text: 'Linuxでは入出力ストリームを含め、「すべてがファイル」です。各プロセスはデフォルトで3つのファイルディスクリプタ（FD）を開いています：' },
      { type: 'table', headers: ['FD', '名前', '標準的な目的'], rows: [
        ['0', 'stdin', 'キーボード入力'],
        ['1', 'stdout', '端末への出力（成功）'],
        ['2', 'stderr', '端末への出力（エラー）'],
      ]},
      { type: 'code', title: '組み合わせリダイレクト', prompt: '# stdoutをファイルに書き込み、stderrを破棄する\n$ command > output.txt 2> /dev/null\n\n# stderrをstdoutにリダイレクトし（2>&1）、その後stdoutをファイルにリダイレクトする\n$ command > output.txt 2>&1\n\n# stderr+stdoutをファイルにリダイレクトするBashのショートカット\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: '試験のヒント', content: 'find /や「Permission denied」エラーを大量に生成するコマンドを使用する場合は、「2> /dev/null」を追加して、実際のプロセス結果のみのクリーンな出力を取得しましょう。' }
    ]
  },
  'rhcsa-4-2': {
    title: 'ディープダイブ：LVMアーキテクチャ',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: '物理 vs 論理' },
      { type: 'paragraph', text: '論理ボリュームマネージャ（LVM）は、物理ディスクとファイルシステムの間に抽象化レイヤーを追加し、従来のパーティションでは不可能な柔軟性を可能にします。' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'LVMの基本的な構成ブロック（デフォルトは4MB）。PVはPEに分割されます。' },
        { term: 'Logical Element (LE)', desc: 'PEに1:1でマッピングされます（ミラーリングシナリオでは1:N）。' },
      ]},
      { type: 'infobox', variant: 'exam', content: '試験では、「vgcreate -s 16M vgname /dev/sdb1」を使用して、特定のPEサイズ（例：16MB）でVGを作成するよう求められる場合があります。' }
    ]
  },
  'rhcsa-9-1': {
    title: 'ディープダイブ：SELinuxのトラブルシューティング',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'トラブルシューティングのワークフロー' },
      { type: 'paragraph', text: 'SELinuxがサービスをブロックしている場合、どうすればよいでしょうか？' },
      { type: 'timeline', events: [
        { year: 'ステップ1', title: 'SELinuxかどうかの確認', desc: '「setenforce 0」を実行してサービスを再起動します。機能する場合はSELinuxが原因です。「setenforce 1」で再度有効にします。' },
        { year: 'ステップ2', title: 'ログの確認', desc: '/var/log/audit/audit.logで「denied」メッセージを探します：ausearch -m AVC -ts recent' },
        { year: 'ステップ3', title: '解決策の生成', desc: 'audit2allowまたはsealertを使用します。「sealert -a /var/log/audit/audit.log」は、問題を修正するための正確なコマンド（setseboolやsemanage fcontextなど）を提供します。' },
      ]},
    ]
  }
}
