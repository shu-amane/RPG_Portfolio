import { Typewriter } from "react-simple-typewriter"

interface MessageProps {
  message: string
}

export default function Message({ message }: MessageProps) {
  return(
    <div style={{ whiteSpace: "pre-line" }}>
      <Typewriter
        key={message}
        words={[message]}
        cursor
        cursorStyle="_"
        typeSpeed={50}
        delaySpeed={1000}
      />
    </div>
  )
}
