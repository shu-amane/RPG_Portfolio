import Floor from "../assets/image/Floor.svg"
import { TILES } from "../../constants"
import { TileContent } from "./TileContent"

interface TileProps{
  type: number
  onClick: () => void
}

export function Tile({
  type,
  onClick
}: TileProps) {
  return(
    <div className="relative w-full h-full" onClick={onClick}>
      <TileContent
        type={type}
        onClick={onClick}/>
      {type !== TILES.WALL && (
        <img src={Floor} alt="Floor" className="w-full h-full absolute z-0"/>
      )}
    </div>
  )
}