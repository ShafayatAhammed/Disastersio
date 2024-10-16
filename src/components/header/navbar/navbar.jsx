import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Notification from "../../../assets/notification.png";
import Avatar from "../../../assets/avatar.png";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import useReference from "../../../hooks/use-reference.jsx";

export const NavItem = ({ area, item, url }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? `${
              area === "navbar" && "flex items-center"
            } xl4:text-xl text-high-dark font-bold ${
              area === "navbar" && "border-b-[3px] border-high-dark"
            } list-none`
          : `${area === "navbar" && "flex items-center"} text-normal-gray ${
              area === "navbar" ? "font-normal" : "font-bold"
            } list-none xl4:text-xl hover:text-high-dark ${
              area === "navbar" &&
              "hover:font-bold hover:border-b-[3px] hover:border-high-dark"
            } ${
              area === "navbar" ? "transition-all" : "transition-colors"
            } duration-75`
      }
    >
      <li>{item}</li>
    </NavLink>
  );
};

export const navItems = [
  "Dashboard",
  "Incidents",
  "Locations",
  "Activities",
  "Documents",
  "Cypher Ai",
];

const Navbar = () => {
  const { offcanvasRef } = useReference();

  const showOffcanvas = () => {
    offcanvasRef.current.classList.remove("hidden");
  };

  return (
    <nav className="flex justify-between border-b bg-high-whitesmoke border-[#3F3F46]">
      <section className="flex items-center my-3 ml-8 sm:ml-20">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-full h-full xl4:w-[140px] xl4:h-[45px]"
          />
        </Link>
      </section>
      <ul className="hidden gap-8 xlnav:flex">
        {navItems.map((item, i) => {
          return (
            <NavItem
              area="navbar"
              item={item}
              url={i === 0 ? "/" : item.toLowerCase()}
              key={i}
            />
          );
        })}
      </ul>
      <section className="flex items-center gap-2 my-3 mr-8 sm:mr-20">
        <div className="relative items-center justify-center hidden w-10 h-10 transition-colors bg-white rounded-full cursor-pointer xl4:w-12 xl4:h-12 hover:bg-gray-100 sm:flex">
          <img src={Notification} alt="notification" />
          <div className="w-[10px] h-[10px] xl4:w-3 xl4:h-3 bg-[#4ADE80] rounded-full absolute top-0 right-0" />
        </div>
        <div className="hidden w-10 h-10 rounded-full cursor-pointer xl4:w-12 xl4:h-12 sm:block">
          <img
            src={Avatar}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="hidden text-normal-gray sm:block">
          <h4 className="font-semibold xl4:text-xl">Usman Zafar</h4>
          <p className="text-sm font-normal xl4:text-base">
            usmanzafar@gmail.com
          </p>
        </div>
        <Icon
          icon="fe:bar"
          className="text-[55px] cursor-pointer xlnav:hidden"
          onClick={showOffcanvas}
        />
      </section>
    </nav>
  );
};

export default Navbar;
