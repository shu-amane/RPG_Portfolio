import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { Test } from "./components/Test"
import Profile from "./components/Profile"

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
