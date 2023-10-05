import { useState } from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handlerShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="flex justify-between">
      <div>
        <img src={logo} alt="windbnb-logo" />
      </div>
      <div className="flex max-w-[297px] flex-1">
        <div>
          <input className="w-full bg-slate-300" type="text" readOnly />
        </div>
        <div>
          <input className="w-full bg-slate-400" type="text" readOnly />
        </div>
        <span class="material-symbols-outlined">search</span>
      </div>
      {showMenu && (
        <menu className="bg-slate-500 fixed top-0 left-0 w-screen h-screen px-3 py-[18px]">
          <div
            id="menu-overlay"
            className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-80 z-10"
          ></div>
          <nav className="z-20">
            <div>navigation here</div>
            <div className="grid"></div>
          </nav>
        </menu>
      )}
    </header>
  );
};

export default Header;
