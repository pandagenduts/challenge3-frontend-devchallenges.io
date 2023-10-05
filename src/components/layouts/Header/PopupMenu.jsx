import Input from "../Input";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { UIActions } from "../../../store/ui-slice";

const PopupMenu = () => {
  const dispatch = useDispatch();

  const handlerShowPopupMenu = () => {
    dispatch(UIActions.togglePopupMenu());
  };

  const handlerFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <menu className="fixed top-0 left-0 flex flex-col w-screen h-screen">
      <div
        id="menu-overlay"
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-[2px] z-10"
        onClick={handlerShowPopupMenu}
      />
      <form
        onSubmit={handlerFormSubmit}
        className="z-20 px-3 pt-[18px] pb-6 bg-white min-h-[632px] flex flex-col justify-between"
      >
        <div>
          <div
            id="popup-menu-header"
            className="flex items-center justify-between mb-4"
          >
            <p className="text-xs font-bold font-mulish">Edit your search</p>
            <span
              className="cursor-pointer material-symbols-outlined"
              onClick={handlerShowPopupMenu}
            >
              close
            </span>
          </div>
          <nav className="">
            <div className="flex flex-col sm:flex-row shadow-bsOne rounded-[16px] py-[11px] px-[26px]">
              <div className="flex flex-col">
                <label htmlFor="location">LOCATION</label>
                <Input type="text" placeholder="Add Location" name="location" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="guest">GUESTS</label>
                <Input
                  type="number"
                  placeholder="Add guest"
                  name="guests"
                  readOnly
                />
              </div>
              <Button className="hidden sm:flex">Search</Button>
            </div>
            <div className="grid"></div>
          </nav>
        </div>
        <Button className="self-center">Search</Button>
      </form>
    </menu>
  );
};

export default PopupMenu;
