// 実験文の呈示順序
var shuffleSequence = seq("intro", sepWith("sep", seq("practice", "s1")));

// 練習用の type 名 = "practice"
var practiceItemTypes = ["practice"];

// 終了時のメッセージ
/// ランダムコードの生成
var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var numbers = '0123456789'  + '0123456789'  + '0123456789';

var randomcode = '';

randomcode += alphabets[Math.floor(Math.random() * alphabets.length)];

for (var i = 0; i < 6; i++) {
     randomcode += numbers[Math.floor(Math.random() * numbers.length)];
};

var completionMessage = "確認コードは「" + randomcode + "」です。\n\n このコードをコピーし、Yahoo! クラウドソーシング側の入力フォームにペーストしてください．\n\n(コードは作業ごとに毎回異なるものが生成されます)";

// 初期設定
var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "ここまでは練習です。本実験をはじめます。準備ができましたらスペースキーを押してください。"
    },
    "DashedSentenceNoSpace", {
        mode: "self-paced reading"
    },
    "Question", {
	showNumbers: false,
	randomOrder: false,
	as: ["Y: はい", "N: いいえ"],
	instructions: "Y キー（はい）か N キー（いいえ）を押すか、マウスでクリックしてください",
	autoFirstChar: true,
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true,
	continueMessage: "次に進む"
    }
];

var items = [
    ["sep", "Separator", { }],  // つなぎ画面
    ["intro", "Form", {         // 導入画面
        html: { include: "example_intro.html" },
        validators: {  }
    } ],
    
    // 練習問題
    ["practice",
     "DashedSentenceNoSpace", {s: "これは 練習用の 文です。"},
     // 乱数コード記録用ダミー質問
     "Question", {q: ""+randomcode+"", timeout: 10},
     "DashedSentenceNoSpace", {s: "スペースバーを 押すたびに 次の 文節が 表示されます。"}
    ],

//    ["code", "Question", {q: ""+randomcode+"", timeout: 10}], 
    
    // 本実験
    // 【出典】 BCCWJ OW6X_00000 『文部科学白書』文部科学省 (2005)
    [["s1",1], 
     //    s1    OW    OW6X_00000    10    220
     "DashedSentenceNoSpace", {s: "１　 日本文化の 発信に よる 国際文化交流の 推進"},
     //    s2    OW    OW6X_00000    220    350
     "DashedSentenceNoSpace", {s: "（１） 文化庁文化交流使事業"},
     //    s3    OW    OW6X_00000    350    470
     "DashedSentenceNoSpace", {s: "１　 文化庁文化交流使事業"},
     //    s4    OW    OW6X_00000    470    1740
     "DashedSentenceNoSpace", {s: "　文化庁文化交流使事業は， 芸術家， 文化人等， 文化に 携わる 人々に， 一定期間 「文化交流使」として 世界の 人々の 日本文化への 理解の 深化や， 日本と 外国の 文化人の ネットワークの 形成・強化に つながる 活動を 展開してもらう ことを 目的と して， 平成１５年度から 始めた 事業です。"},
     //    s5    OW    OW6X_00000    1740    3780
     "DashedSentenceNoSpace", {s: "　「文化交流使」の 活動には， （ⅰ） 日本在住の 芸術家， 文化人が 海外に 一定期間 滞在し， 日本の 文化に関する 講演， 講習や 実演などを 行う 「海外派遣型」， （ⅱ） 海外在住の 日本文化に 深い 知見を 持つ 芸術家， 文化人が， 講演， 講習， 現地メディアへの 投稿， 出演等を 行う 「現地滞在者型」， （ⅲ） 講演等で 来日する 諸外国の 著名な 芸術家が， 日本滞在期間を 利用して 学校などを 訪問して 実演・講演等を 行う 「来日芸術家型」の 三つの 類型が あります。"},
     //    s6    OW    OW6X_00000    3780    4520
     "DashedSentenceNoSpace", {s: "　平成１６年度は， 「海外派遣型」文化交流使として １１名， 「現地滞在型」文化交流使として ４名， 「来日芸術家型」文化交流使として ４組の 指名を 行いました。"},
     //    s7    OW    OW6X_00000    4520    5540
     "DashedSentenceNoSpace", {s: "重要無形文化財保持者， 写真家や 音楽家など 様々な 分野で 活躍中の 方々の 活動を通じて， 日本文化の これまで 紹介されていなかった 一面や， 日本文化に なじみの 薄かった 国や 地域での 日本文化の 紹介などの 活動を 行っています。"},
     //    s8    OW    OW6X_00000    5540    5760
     "DashedSentenceNoSpace", {s: "図表◆２‐９‐１５　 平成１６年文化交流使一覧"},
     //    s9    OW    OW6X_00000    5760    5910
     "DashedSentenceNoSpace", {s: "２　 文化庁文化交流使活動報告会"},
     //    s10    OW    OW6X_00000    5910    6490
     "DashedSentenceNoSpace", {s: "　平成１５年度に 文化庁文化交流使として 海外で 活動した 人々による 報告会を， 東京国立博物館 平成館大講堂にて 開催しました。"},
     //    s11    OW    OW6X_00000    6490    7640
     "DashedSentenceNoSpace", {s: "　笑福亭鶴笑氏（落語家）， 田中千世子氏（映画評論家）， バロン吉本氏（漫画家）， 三浦尚之氏（福島学院大学教授）， 渡辺洋一氏（和太鼓奏者）の ５名が 活動報告を 行うとともに， 国際文化交流について 討論し， さらに 笑福亭鶴笑氏による パペット落語"},
     //    s12    OW    OW6X_00000    7640    8040
     "DashedSentenceNoSpace", {s: "（笑福亭鶴笑氏が自ら考案した落語形式で，足や膝につけた人形を操りながら演じる。）"},
     //    s13    OW    OW6X_00000    8040    8150
     "DashedSentenceNoSpace", {s: "の 実演が 行われました。"},
     //    s14    OW    OW6X_00000    8150    8340
     "DashedSentenceNoSpace", {s: "▲ 笑福亭鶴笑氏による パペット落語の 実演"},
     //    s15    OW    OW6X_00000    8340    8490
     "DashedSentenceNoSpace", {s: "（２） 国際文化フォーラムの 開催"},
     //    s16    OW    OW6X_00000    8490    9570
     "DashedSentenceNoSpace", {s: "　「国際文化フォーラム」は， 国際的に 著名な 国内外の 芸術家・文化人などを 招聘し， 座談会， 講演などの 形式により， 世界の 文化芸術の 最新の 諸相や 動向について 語り合ってもらう ことを 目的と して， 平成１５年度から 開始した 事業です。"},
     //    s17    OW    OW6X_00000    9570    10730
     "DashedSentenceNoSpace", {s: "　平成１６年度も １５年度に 引き続き， １１月に 関西地区で， 「文化の 多様性」の 共通テーマの 下に， 「国際情勢における 『文化の 多様性』の 意義」， 「シルクロードと 仏教文化」などについて 話し合い， 世界に 向け， 文化の メッセージを 強く 発信しました。"},
     //    s18    OW    OW6X_00000    10730    11000
     "DashedSentenceNoSpace", {s: "図表◆２‐９‐１６　 平成１６年度国際文化フォーラム行事"},
     //    s19    OW    OW6X_00000    11000    11100
     "DashedSentenceNoSpace", {s: "（３） 国際芸術見本市"},
     //    s20    OW    OW6X_00000    11100    11960
     "DashedSentenceNoSpace", {s: "　舞台芸術の ブース設置や 実演を 行う ことにより， 国内外の 劇場関係者に， 我が 国の 新進の 舞台芸術作品などを 紹介する 国際芸術見本市を， 平成１６年８月に 東京芸術劇場にて 開催しました。"},
     //    s21    OW    OW6X_00000    11960    12480
     "DashedSentenceNoSpace", {s: "文化庁から 国際舞台芸術交流センターへ 委任を 行い， 実演デモンストレーション（ショーケース）を 制作しました。"},
     //    s22    OW    OW6X_00000    12480    12550
     "DashedSentenceNoSpace", {s: "＊ ショーケース"},
     //    s23    OW    OW6X_00000    12550    12800
     "DashedSentenceNoSpace", {s: "複数の 舞台公演の ハイライトを 網羅的に 提示する もの。"},
     //    s24    OW    OW6X_00000    12800    12940
     "DashedSentenceNoSpace", {s: "２　 文化多様性条約策定の 動き"},
     //    s25    OW    OW6X_00000    12940    13900
     "DashedSentenceNoSpace", {s: "　ユネスコでは， 異なる 文化間の 相互理解を 深め， 寛容， 対話， 協力を 重んじる 異文化間交流を 発展させ， 世界の 平和と 安全に 結び付けるために， 平成１３年に 「文化多様性に関する 世界宣言」が 採択されました。"},
     //    s26    OW    OW6X_00000    13900    14750
     "DashedSentenceNoSpace", {s: "さらに， １５年１０月の 第３２回ユネスコ総会では， １７年秋の 次回ユネスコ総会に 向けて， 文化多様性条約の 策定作業を 開始する ことが 決議され， 具体的な 検討作業が 開始されています。"},
     //    s27    OW    OW6X_00000    14750    15690
     "DashedSentenceNoSpace", {s: "　文化庁では， この ような 状況に 鑑み， 平成１６年６月に 文化審議会 文化政策部会に 「文化多様性に関する 作業部会」（座長：富澤秀機テレビ大阪株式会社取締役社長）を 設置し， ９月に 報告を まとめました。"},
     //    s28    OW    OW6X_00000    15690    18010
     "DashedSentenceNoSpace", {s: "報告の 中では， １ 文化多様性の 保護は 維持可能な 発展の ための 原動力であり， 世界の 平和と 安全に 寄与する こと， ２ グローバル化が 進展する 中で， 他文化の 尊重と 共存を 目指し， 異文化間の 対話の 促進が 重要である こと， ３ ユネスコにおいて 文化多様性の 保護・促進の ための 国際的な 枠組みが 構築される ことを 支持すべき こと， ４ 文化多様性を 保護・促進するための 措置としては， 規制措置を 安易に 認めるのではなく， 各国が 人材育成， 補助金を 活用した 環境整備を 行う ことが 適当である ことなどが 提言されました。"},
     //    s29    OW    OW6X_00000    18010    18570
     "DashedSentenceNoSpace", {s: "文部科学省では， この 報告も 参考に しながら， 今後， ユネスコにおける 文化多様性条約の 審議に 積極的に 参画する 予定です。"},
     //    s30    OW    OW6X_00000    18570    18670
     "DashedSentenceNoSpace", {s: "３　 日本語教育の 振興"},
     //    s31    OW    OW6X_00000    18670    18790
     "DashedSentenceNoSpace", {s: "（１） 日本語学習者の 現状"},
     //    s32    OW    OW6X_00000    18790    19850
     "DashedSentenceNoSpace", {s: "　近年， 我が 国における 外国人の 増加や 諸外国との 国際交流の 進展により， 日本語学習者は 増加しており， 海外で 約２３５万人（平成１５年国際交流基金調べ）， 国内で １３万５，１４６人（１５年１１月文化庁調べ）に 上っています。"},
     //    s33    OW    OW6X_00000    19850    20020
     "DashedSentenceNoSpace", {s: "（２） 地域における 日本語教育の 支援"},
     //    s34    OW    OW6X_00000    20020    21000
     "DashedSentenceNoSpace", {s: "　我が 国に 在留する 外国人は， 近年 増加の 一途を たどっており， 地域において 多様な 文化的背景を 持った 幅広い 年齢層の 人々が， 社会の 様々な 場面で， 日本人と 深い かかわりを 持ちながら 生活するように なっています。"},
     //    s35    OW    OW6X_00000    21000    22670
     "DashedSentenceNoSpace", {s: "　文化庁では， こう した 外国人に対する 日本語教育を 推進する ため， 日本語の 学習を 支援する ボランティアや コーディネータ（ボランティアなどの中核となる者）を 対象と した 研修を 平成１６年度は 全国１２地域で 実施している ほか， 子どもを 持つ 親と その 子どもを 対象に した 「学校の 余裕教室等を 活用した 親子参加型日本語教室」事業を 全国１８か所で 実施しています。"},
     //    s36    OW    OW6X_00000    22670    24180
     "DashedSentenceNoSpace", {s: "　また， 日本語を 第二言語として 学ぶ 人の 中でも 特に 成長期に ある 子どもたちが， 日本語や 生活習慣等を 学ぶ ことや， 日本人の 同世代の 子どもたちとの 交流を 通じた 心身 共に 健やかな 成長を 支援する ため， 文化庁 及び 文部科学省の 関係課が 連携し 「外国人の 子どもの ための 居場所づくりプログラム」を 平成１６年度から 開始しています。"},

     "Question",       {q: "ユネスコで採択されたのは、「文化多様性に関する世界宣言」である。", hasCorrect: 0}
     // hasCorrect: 0 = Y: はい, 1 = N: いいえ
    ]

];

