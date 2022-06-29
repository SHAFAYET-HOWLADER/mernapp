import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Login from './pages/Login'


function App() {
  return (
    <Navbar>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/service" element={<Service/>}></Route>
          </Routes>
    </Navbar>
  );
}

export default App;
