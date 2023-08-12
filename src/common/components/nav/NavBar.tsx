import { Link } from "react-router-dom";
import Assets from "../../../assets";
import RoutesPath from "../../../constants/Routes";
import { useState } from "react";

const NavBar = ({ activeTab }: { activeTab: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="bg-white fixed top-0 w-full z-50 p-3">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center md:hidden ">
          <img
            src={Assets.LogoWhite}
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div className={` w-full md:block md:w-auto ${open ? "" : "hidden"}`}>
        <ul className="flex items-center justify-center gap-0 md:space-y-0 sm:space-y-10 xs:space-y-10 font-medium flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li
            className={`${
              activeTab === "Home" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            <Link to={RoutesPath.home}>Home</Link>
          </li>
          <li
            className={`${
              activeTab === "Assortments" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            <Link to="/#brands">Assortments</Link>
          </li>
          <li
            className={`${
              activeTab === "Shop" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            <Link to="#">Shop</Link>
          </li>
          <li
            className={`${
              activeTab === "Recipies" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            <Link to="/#recipies">Recipies</Link>
          </li>
          <li className="md:block sm:hidden xs:hidden">
            <img src={Assets.LogoWhite} alt="" />
          </li>
          <li
            className={`${
              activeTab === "Contact" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            <Link to="/#contact">Contact</Link>
          </li>
          <li
            className={`${
              activeTab === "Distributor" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            Distributor
          </li>
          <li
            className={`${
              activeTab === "About" ? " font-[700]" : " font-light"
            } text-primary`}
          >
            <Link to={RoutesPath.about}>About reFresh</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
