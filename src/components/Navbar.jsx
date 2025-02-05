import React from 'react';
import logo from '../assets/Logo.png'
import SortSelect from './SortSelect';
const Navbar = () => {
    return (
        <div className='flex justify-between py-5 border-b-2'>
            <div className='flex items-center'>
                <img src={logo} className='w-32' />
            </div>
            <div>
                <button className='btn'>Sort By View</button>
            </div>
            <div>
                <button className='btn bg-red-600 text-white'>Blog</button>
            </div>
        </div>
    );
};

export default Navbar;