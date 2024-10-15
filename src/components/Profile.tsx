import { useArrowNavigation } from "../hooks/useArrowNavigation"
import { useRef } from "react"
import { useKey } from "react-use"
import { Link, useNavigate } from "react-router-dom"

export default function Profile() {
  const fields = [
    "名前： Amane",
    "Lv： 38",
    "職業： エンジニア",
  ]

  const choises = [
    {answer: "はい", message: "ゲームを始めます", path: "/map"},
    {answer: "いいえ", message: "前の画面に戻ります", path: "/"},
  ]

  const navigate = useNavigate()
  const { selectedIndex, updateIndex } = useArrowNavigation(choises.length)
  const selectedIndexRef = useRef(selectedIndex)
  selectedIndexRef.current = selectedIndex

  function handleSelect(index: number) {
    updateIndex(index)
  }


  useKey("Enter", () => {
    navigate(choises[selectedIndexRef.current].path)
  })

  return(
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-black border-2 border-white rounded-md p-6 w-72 mb-5">
        <div className="text-left">
          {fields.map((field, index) => (
            <p
              key={index}
              className="flex items-center"
            >
              {field}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-black border-2 border-white rounded-mb p-6 w-72">
        <div className="text-left">
          <p>このセーブデータでよろしいですか？</p>
          {choises.map((choise, index) => (
            <p 
              className="flex items-center"
              key={index}
              onClick={() => handleSelect(index)}>
                {selectedIndex === index ? (
                  <span className="mr-2 animate-blink">{"▶︎"}</span>
                ) : (
                  <span className="mr-2 animate-blink">{"　"}</span>
                )}
                <Link to={choise.path}>{choise.answer}</Link>
              </p>
          ))}
        </div>
      </div>
    </div>
  )
}