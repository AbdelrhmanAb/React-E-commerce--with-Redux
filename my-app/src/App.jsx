import { useState } from 'react'
import Home from './pages/home';
import {  Routes, Route } from "react-router-dom"
import Shop from './pages/shop';
import Card from './pages/card';


import { useSelector, useDispatch } from 'react-redux'
import { getDate } from './feature/getProductData/getData'
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  // redux code
  const dispatch = useDispatch()
  const productsData = useSelector((state) => state.products)


  return (<>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    
 </>  
  );
}

export default App;