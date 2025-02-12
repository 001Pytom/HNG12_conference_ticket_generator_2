import Image from "./Image";
import logo from "../data/images/Header/logo.png";
import { Link, NavLink } from "react-router-dom";
import arrow from "../data/images/Header/arrow.png";

const navList = [
  {
    name: "Event",
    link: "/event",
  },
  {
    name: "My Ticket",
    link: "/ticket",
  },
  {
    name: "About Project",
    link: "/about",
  },
];

function Header() {
  return (
    <div className="font-jeju w-full max-w-[1200px]  flex justify-between items-center py-3 px-4 border border-secondary rounded-3xl mt-6 ">
      <div>
        <Link to="/">
          {" "}
          <Image src={logo} alt="logo" />{" "}
        </Link>
      </div>

      <nav className="hidden md:flex gap-4 items-center">
        {navList.map((item) => (
          <NavLink
            key={item.name}
            to={item.link}
            className={({ isActive }) =>
              `font-jeju text-[18px] leading-[18px] tracking-[0] font-normal p-[10px] ${
                isActive ? "text-white" : "text-textBasic"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button className="flex items-center gap-2 py-4 px-6 border border-borderYellow rounded-xl bg-white  hover:bg-primary hover:border-white transition-all duration-200">
        <span className="text-textBlack text-base font-normal hover:text-white">
          MY TICKETS
        </span>
        <Image src={arrow} alt="arrow" />
      </button>
    </div>
  );
}

export default Header;
