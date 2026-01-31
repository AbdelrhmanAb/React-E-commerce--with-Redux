import { useState } from 'react'
import Home from './pages/home';
import { Routes, Route } from "react-router-dom"
import Shop from './pages/shop';
import Card from './pages/card';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import Navbar from './components/Navbar';
import Footer from './components/footer';


function App() {
  const [count, setCount] = useState(0)



  return (<>
    <Navbar />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      limit={3}
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/card" element={<Card />} />
    </Routes>
    <Footer />

  </>
  );
}

export default App;