import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import { WatchListContext } from '../context/WatchListContext';
const Navbar = () => {
  const {watchlist}=useContext(WatchListContext);
  return (
    <nav className="z-10 bg-gray-900 p-4 text-white flex justify-between w-full top-0 fixed">
        <Link to="/" className="text-xl font-bold">Movie App</Link>
        <Link to="/watchlist" className='text-xl'>
        Watchlist({watchlist.length})
        </Link>
    </nav>
  )
}

export default Navbar