import React from 'react';
import {PiTree} from 'react-icons/pi';
import {MdEmail} from 'react-icons/md';

const NavbarUp = () => {
    return (
      <div className="w-full h-20 bg-white px-10 py-4 flex justify-between items-center border-b-2 border-lime-600">
        <div className="text-lime-600 flex flex-col items-center ">
          <PiTree className="text-4xl" />
          <span className="font-bold">La Ceiba</span>
        </div>
        <div className='flex items-center gap-2 cursor-pointer'>
          <MdEmail className="text-xl text-lime-600" />
          <span className="text-lime-600 text-md font-light">
            correo@prueba.com
          </span>
        </div>
      </div>
    );
};

export default NavbarUp;