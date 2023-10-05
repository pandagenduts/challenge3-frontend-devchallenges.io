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
            readOnly
            placeholder="Add Location"
            className="w-full bg-slate-300 cursor-pointer"
          />
        </div>
        <div>
          <Input
            actionOnClick={handlerShowMenu}
            readOnly
            placeholder="Add Guest"
            className="w-full cursor-pointer"
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
          <nav className="z-20 bg-white">
            <div className="flex flex-col sm:flex-row shadow-bsOne rounded-[16px] py-[11px] px-[26px]">
              <div className="flex flex-col">
                <label htmlFor="location">LOCATION</label>
                <Input type="text" placeholder="Add Location" name='location' />
              </div>
              <div className="flex flex-col">
                <label htmlFor="guest">GUESTS</label>
                <Input type="text" placeholder="Add guest" name='guests' />
              </div>
              <Button className='hidden sm:inline-block'>Search</Button>
            </div>
            <div className="grid"></div>
          </nav>
        </menu>
      )}
    </header>
  );
};

export default Header;
