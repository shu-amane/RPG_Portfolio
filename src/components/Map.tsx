import { Tile } from "./Tile"
import Message from "./Message"
// import { TILES } from "../../constants"
import { useMessage } from "../hooks/useMessage"

export default function Map() {
  const roomMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 4, 1, 5, 6, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 8, 1, 1, 1, 1, 3, 1, 0],
    [0, 9, 1, 1, 2, 1, 1, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]

  const {
    message,
    handleTileClick
  } = useMessage()

  return(
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-9 bg-black p-4">
        {roomMap.flatMap((row, rowIndex) =>
          row.map((tile, colIndex) => {
            return(
              <div 
                key={`${rowIndex}-${colIndex}`}
                className="flex items-center justify-center w-8 h-8 bg-gray-800 border border-gray-700"
              >
                <Tile
                  type={tile}
                  onClick={() => handleTileClick(tile)}
                />
              </div>
            )
          })
        )}
      </div>
      {message && (
        <div className="mt-4 p-4 border-2 rouded">
          <Message message={message}/>
        </div>
      )}
    </div>
  )
}