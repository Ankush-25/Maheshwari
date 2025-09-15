import './App.css'
import { Route, Routes } from "react-router"
import Layout from './components/Layout.jsx'
import Home from './components/home.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App