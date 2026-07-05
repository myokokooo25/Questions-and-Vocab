const Kuroshiro = require('kuroshiro');
const KuromojiAnalyzer = require('kuroshiro-analyzer-kuromoji');

async function test() {
  const K = Kuroshiro.default || Kuroshiro;
  const kuroshiro = new K();
  await kuroshiro.init(new KuromojiAnalyzer());
  const result = await kuroshiro.convert("鉄骨製品の製作計画に関する次の記述のうち、最も不適当なものはどれか。", { mode: "furigana", to: "hiragana" });
  console.log(result.replace(/<rp>\(<\/rp>|<rp>\)<\/rp>/g, ''));
}
test();
