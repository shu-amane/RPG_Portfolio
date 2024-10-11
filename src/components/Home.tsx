import { Link, useNavigate } from "react-router-dom"
import { useKey } from "react-use"
import Message from "./Message"

export default function Home() {
  const message = "Amaneのポートフォリオです！"
  const navigate = useNavigate()

  useKey("Enter", () => {
    navigate("/profile")
  })
  return(
    <div className="flex flex-col justify-between min-h-[calc(100vh-200px)] p-2">
      <h1 className="text-4xl mb-8 text-center">
        Final Tails of Amane Quest
      </h1>
      <Link to="/profile" className="flex items-center space-x-2 border-2 p-2 rounded w-1/2">
        <span>▶︎</span>
        <span>ぼうけんをする</span>
      </Link>
      <div className="flex items-cente space-x-2 border-2 p-2 rounded mt-auto">
        <Message message={message} />
      </div>
    </div>
  )
}