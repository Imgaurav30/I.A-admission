import React from 'react';
import BMD from "../assets/bmd.jpg"
import BiharLogo from "../assets/biharlogo.png"
import { Link } from 'react-router-dom';
function Header() {
  return (

    <div className='w-[100%] mx-auto flex justify-evenly items-center bg-white p-4'>
        <div>
            <Link to={"/"}>
                <img src={BMD} alt="" className="w-20" />
            </Link>
        </div>
        <div>
            <h2 className="md:text-5xl font-bold text-[#FF7350] text-center" >Braj Mohan Das College, Dayalpur</h2>
            <p className='text-center md:text-2xl text-[#FF7350]'>(A Constituent Unit of B.R.A. Bihar University, Muzaffarpur)</p>
        </div>
        <div>
            <Link>
            <img src={BiharLogo} alt="" className="w-20" />
            </Link>
        </div>
    </div>
  );
}

export default Header;
