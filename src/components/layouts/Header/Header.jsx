import logo from "../../../assets/logo.svg";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../store/ui-slice";
import PopupMenu from "./PopupMenu";

const Header = () => {
  const { showPopupMenu } = useSelector((state) => state.theUI);
  const { location: locationFilter, guests } = useSelector(state => state.staysFilter)
  const {totalGuests} = guests;
  console.log(guests);

  const dispatch = useDispatch();

  const handlerShowPopupMenu = () => {
    dispatch(UIActions.togglePopupMenu());
  };

  return (
    <header className="flex justify-between sm:items-center font-mulish pt-[22px] pb-[37px] sm:pt-8 sm:pb-[67px] gap-9 flex-col sm:flex-row">
      <div>
        <img src={logo} alt="windbnb-logo" />
      </div>
      <div className="flex self-center max-w-[297px] flex-1 rounded-2xl shadow-bsOne">
        <div className="py-[19px] px-4 flex">
          <Input
            readOnly
            placeholder="Add Location"
            className="w-full text-sm cursor-pointer"
            actionOnClick={handlerShowPopupMenu}
          />
        </div>
        <div className="py-[19px] px-4 flex border-x-[1px] border-solid border-[#F2F2F2]">
          <Input
            // readOnly
            placeholder="Add Guest"
            // value={guestsFilter === 0 ? '' : guestsFilter}
            className="w-full text-sm cursor-pointer"
            actionOnClick={handlerShowPopupMenu}
          />
        </div>
        <div className="py-[19px] px-4 flex text-[#EB5757]">
          <span
            className="cursor-pointer material-symbols-outlined"
            onClick={handlerShowPopupMenu}
          >
            search
          </span>
        </div>
      </div>
      {showPopupMenu && <PopupMenu />}
    </header>
  );
};

export default Header;
