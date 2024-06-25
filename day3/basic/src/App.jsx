import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Main from "./layouts/Main"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App
