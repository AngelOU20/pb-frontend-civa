import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const Links = [{ name: "Inicio", link: "/" }];
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-30 top-0 w-full h-16 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src="/logo.webp" className="w-12" alt="" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Inicio de Sesión
          </button>
        </ul>
      </div>
    </div>
  );
};
