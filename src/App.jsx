import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleBlog from "./pages/SingleBlog"
import EditBlog from "./pages/EditBlog"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
      <Route path="/edit/" element={<EditBlog />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
