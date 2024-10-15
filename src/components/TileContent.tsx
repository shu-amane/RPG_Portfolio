import Neru from "../assets/image/CAT01.svg"
import Bon from "../assets/image/CAT02.svg"
import PC from "../assets/image/PC.svg"
import Monitor from "../assets/image/Monitor.svg"
import Bed from "../assets/image/Bed.svg"
import Book from "../assets/image/Book.svg"
import Floor from "../assets/image/Floor.svg"
import Wall from "../assets/image/Wall.svg"
import Cane from "../assets/image/Cane.svg"
import Sword from "../assets/image/Sword.svg"
import { TILES } from "../../constants"

interface TileContentProps {
  type: number
  onClick: () => void
}

export const TileContent = ({
  type,
  onClick,
} : TileContentProps) => {
  switch (type) {
    case TILES.WALL:
      return (
        <img 
          src={Wall}
          alt="Wall"
          className="w-full h-full absolute z-10" 
        />
      )
    case TILES.MONITOR:
      return (
        <img 
          src={Monitor}
          alt="Monitor"
          onClick={onClick}
          className="w-full h-full absolute z-10" 
        />
      )
    case TILES.PC:
      return (
        <img
          src={PC}
          alt="PC"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      )
    case TILES.BED:
      return (
        <img
          src={Bed}
          alt="Bed"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      )
    case TILES.BOOK:
      return (
        <img
          src={Book}
          alt="Book"
          onClick={onClick}
          className="w-full h-full absolute z-10"
        />
      )
     case TILES.CAT01:
       return (
         <img
           src={Neru}
           alt="Neru"
           onClick={onClick}
           className="w-full h-full absolute z-10"
         />
       )
      case TILES.CAT02:
        return (
          <img
            src={Bon}
            alt="Bon"
            onClick={onClick}
            className="w-full h-full absolute z-10"
          />
        )
      case TILES.CANE:
        return (
          <img
            src={Cane}
            alt="Cane"
            onClick={onClick}
            className="w-full h-full absolute z-10"
          />
        )
      case TILES.SWORD:
        return (
          <img
            src={Sword}
            alt="Sword"
            onClick={onClick}
            className="w-full h-full absolute z-10"
          />
        )
      default:
        return (
          <img
            src={Floor}
            alt="Floor"
            className="w-full h-full absolute z-10"
          />
        )
    }
}