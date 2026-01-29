import { useState } from 'react'
import Home from './pages/home';
import {  Routes, Route } from "react-router-dom"
import Shop from './pages/shop';
import Card from './pages/card';


import Navbar from './components/Navbar';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)

 

  return (<>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      <Footer/>
    
 </>  
  );
}

export default App;