import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Testimonial from "./pages/Testimonial"
import Notices from "./pages/Notices"
import Statics from "./pages/Statics"
import "./assets/fonts/fonts.css";

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/statics" element={<Statics />} />
      </Routes>
    </Router>

  )
}

export default App
