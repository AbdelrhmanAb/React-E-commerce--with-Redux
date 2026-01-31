import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiShop } from "react-icons/ci";


import { useSelector } from 'react-redux';


const Navbar = () => {
  const card = useSelector((state)=> state.productDate.card)
  const cardLength = card.length

  return (
    <nav className="bg-sky-600 shadow-md border-b-5  border-b-pink-500  fixed z-30 top-0 w-full     ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
      <Link to={"/"}>  <h1 className="text-white flex gap-1 items-center text-2xl font-bold"><span className=' font-bold'><CiShop size={"2rem"} /></span>Cartify</h1></Link>
        {/* Links */}
        <ul className="flex space-x-6 text-white font-medium">
          <li>
            {/* <Link to="/" className="hover:text-yellow-300 transition">Home</Link> */}
          </li>
          <li>
            <Link to="/shop" className="hover:text-yellow-300 transition">Shop</Link>
          </li>
          <li>
            <Link to="/card" className="hover:text-yellow-300 transition">Card</Link>
          </li>
          <li className=' relative'><span className=' absolute bg-accent bottom-4 py-1 px-2 text-xs rounded-full left-1.5 z-0'>{cardLength}</span><FaShoppingCart size={"1.4rem"}/></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;