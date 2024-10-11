import { useState, useRef } from "react"
import { useKey } from "react-use"

export function useArrowNavigation(length: number) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedIndexRef = useRef(selectedIndex)

  const updateIndex = (newIndex: number) => {
    setSelectedIndex(newIndex)
    selectedIndexRef.current = newIndex
  }

  useKey("ArrowUp", () => {
    updateIndex(
      selectedIndexRef.current > 0 ? selectedIndexRef.current - 1 : length -1
    )
  })

  useKey("ArrowDown", () => {
    updateIndex(
      selectedIndexRef.current < length - 1 ? selectedIndexRef.current + 1 : 0
    )
  })

  return { selectedIndex, updateIndex }
}