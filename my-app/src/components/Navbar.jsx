import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-sky-600 shadow-md border-b-5  border-b-pink-500      ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">MyStore</h1>

        {/* Links */}
        <ul className="flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-yellow-300 transition">Shop</Link>
          </li>
          <li>
            <Link to="/card" className="hover:text-yellow-300 transition">Card</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;