import logo from "../../../assets/logo.png";
import Button from "../Button";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../store/ui-slice";
import PopupMenu from "./PopupMenu";

const Header = () => {
  const { showPopupMenu } = useSelector((state) => state.theUI);
  const dispatch = useDispatch();

  const handlerShowPopupMenu = () => {
    dispatch(UIActions.togglePopupMenu());
  }

  return (
    <header className="flex justify-between font-mulish">
      <div>
        <img src={logo} alt="windbnb-logo" />
      </div>
      <div className="flex max-w-[297px] flex-1">
        <div>
          <Input
            readOnly
            placeholder="Add Location"
            className="w-full cursor-pointer bg-slate-300"
            actionOnClick={handlerShowPopupMenu}
          />
        </div>
        <div>
          <Input
            readOnly
            placeholder="Add Guest"
            className="w-full cursor-pointer"
            actionOnClick={handlerShowPopupMenu}
          />
        </div>
        <span
          className="cursor-pointer material-symbols-outlined"
          onClick={handlerShowPopupMenu}
        >
          search
        </span>
      </div>
      {showPopupMenu && <PopupMenu />}
    </header>
  );
};

export default Header;
