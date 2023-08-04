import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const NavbarLeft = () => {
  const [isHovered, setIsHovered] = useState(false);

  const estilo = {
    height: "calc(100vh - 80px)",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="bg-lime-500 w-10 h-screen absolute left-0 top-[80px] px-2 py-10 hover:w-24 transition-all duration-500"
      style={estilo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex flex-col items-center text-white text-md  cursor-pointer gap-6">
        {/* Home */}
        <li>
          <NavLink className="flex flex-col items-center" to="/">
            <BiHomeAlt className="text-2xl" />
            {isHovered && <span>Home</span>}
          </NavLink>
        </li>
        {/* Productos */}
        <li>
          <NavLink className="flex flex-col items-center" to="/productos">
            <FiShoppingCart className="text-2xl" />
            {isHovered && <span>Productos</span>}
          </NavLink>
        </li>
        {/* categotias */}
        <li>
          <NavLink className="flex flex-col items-center" to="/categorias">
            <AiOutlineShopping className="text-2xl" />
            {isHovered && <span>Categorias</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLeft;
