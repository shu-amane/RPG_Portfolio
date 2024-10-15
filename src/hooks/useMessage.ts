import { useState } from "react"
import { TILES } from "../../constants"

export function useMessage() {
  const [message, setMessage] = useState("")
  
  const handleTileClick = (type: number) => {
    switch(type) {
      case TILES.MONITOR:
        setMessage("おとこが　3にん　こんびにの　まえで　さわいでいる　ひとりが　にげだした　「あしたは　れいもんどに　とって　さいこうの　あさに　なるだろう　あさめし　だって　おれたちが　くった　どんな　ごちそうより　うまいはずさ」　ぼくも　もう　いかなきゃ……！")
        break
      case TILES.CAT01:
        setMessage("種族：ねこ　種類：ノルウェージャンフォレストキャット　名前：ネル　特徴：イケメン　かわいい")
        break
      case TILES.CAT02:
        setMessage("種族：ねこ　種類：ミックス　名前：ぼん　特徴：垂金権造　かわいい")
        break
      case TILES.BOOK:
        setMessage("好きな映画：ファイトクラブ, サマーウォーズ, 貞子VS伽椰子　好きな漫画：HUNTER×HUNTER, 嘘喰い, からくりサーカス　好きなゲーム：FF8, Xenogears, LIVE A LIVE")
        break
      case TILES.PC:
        setMessage("名前：Amane　Lv:38　趣味：映画, 漫画, ゲーム, バンジージャンプ")
        break
      case TILES.CANE:
        setMessage("資格：AWS SAA, LPIC LEVEL1　現在はAWS DVAの勉強中")
        break
      case TILES.BED:
        setMessage("寝れば大抵のことは上手くいく")
        break
      case TILES.SWORD:
        setMessage("技術スタック：Python, PHP, Vue, React, javascript, TypeScript")
        break
      default:
        setMessage("")
        break
      }
  }
  return{
    message,
    handleTileClick,
  }
}