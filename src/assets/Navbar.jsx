import React from "react";
import todo from './todo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <nav className="flex justify-evenly  bg-sky-950 " style={{ height: "50px" }}>
        <div className="flex" style={{ width: "20%" }}>
          <img style={{ height: "50px" }} src={todo} alt="Logo" />
          <span className="font-bold text-white mx-2 my-3 font-mono" >To-Do-List</span>
        </div>
        <div>
          <ul className="text-white flex">
            <Link className='p-1 my-2 mx-2  hover:underline hover:font-semibold '  to='/' >
              Home
            </Link>
            <Link className='p-1 my-2 mx-2  hover:font-semibold '  to='/about'>
              About
            </Link>
            
          </ul>
        </div>
        
        
      </nav>
    </>
  );
};

export default Navbar;
