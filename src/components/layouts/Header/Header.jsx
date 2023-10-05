import ReactDOM, { useState } from "react";
import logo from "../../../assets/logo.png";
import Button from "../Button";
import Input from "../Input";

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
          <Input
            actionOnClick={handlerShowMenu}
            type="text"
            readOnly
            className="w-full bg-slate-300 cursor-pointer"
          />
        </div>
        <div>
          <Input
            actionOnClick={handlerShowMenu}
            type="text"
            readOnly
            className="w-full bg-slate-400 cursor-pointer"
          />
        </div>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={handlerShowMenu}
        >
          search
        </span>
      </div>
      {showMenu && (
        <menu className="fixed top-0 left-0 w-screen h-screen px-3 py-[18px] flex flex-col">
          <div
            id="menu-overlay"
            className="fixed top-0 left-0 w-screen h-screen backdrop-blur-[2px] z-10"
            onClick={handlerShowMenu}
          />
          <nav className="z-20 bg-slate-500">
            <div className="flex">
              <div>
                <label htmlFor="location"></label>
                <input type="text" />
              </div>
              <div></div>
              <Button>Search</Button>
            </div>
            <div className="grid"></div>
          </nav>
        </menu>
      )}
    </header>
  );
};

export default Header;
