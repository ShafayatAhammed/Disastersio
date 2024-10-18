import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { NavItem, navItems } from "./navbar.jsx";
import useOffcanvas from "../hooks/use-offcanvas.jsx";
import { useEffect } from "react";
import Notification from "../assets/notification.png";
import Avatar from "../assets/avatar.png";

const Offcanvas = () => {
  const { isOpen, setIsOpen } = useOffcanvas();

  const hideOffcanvas = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const offcanvasHidder = () => {
      if (window.innerWidth >= 1200) {
        if (!isOpen) {
          hideOffcanvas();
        }
      }

      return;
    };

    window.addEventListener("resize", offcanvasHidder);

    return () => {
      window.removeEventListener("resize", offcanvasHidder);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 ${
        !isOpen && "hidden"
      } h-full w-[250px] bg-high-whitesmoke overflow-auto`}
    >
      <div className="flex justify-end p-1">
        <Icon
          icon="material-symbols:close"
          className="text-[45px] cursor-pointer hover:bg-red-500 hover:text-white transition-colors rounded-full"
          onClick={hideOffcanvas}
        />
      </div>
      <ul className="flex flex-col items-center gap-2 mt-3">
        {navItems.map((item, i) => {
          return (
            <NavItem
              area="offcanvas"
              item={item}
              url={i === 0 ? "/" : item.toLowerCase()}
              key={i}
            />
          );
        })}
      </ul>
      <div className="flex flex-col items-center gap-2 mt-3 text-center sm:hidden">
        <div className="relative flex items-center justify-center w-10 h-10 transition-colors bg-white rounded-full cursor-pointer hover:bg-gray-100">
          <img src={Notification} alt="notification" />
          <div className="w-[10px] h-[10px] bg-[#4ADE80] rounded-full absolute top-0 right-0" />
        </div>
        <div className="w-10 h-10 rounded-full cursor-pointer">
          <img
            src={Avatar}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="text-normal-gray">
          <h4 className="font-semibold">Usman Zafar</h4>
          <p className="text-sm font-normal">usmanzafar@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
