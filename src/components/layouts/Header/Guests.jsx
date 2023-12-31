import { useDispatch, useSelector } from "react-redux";
import { staysFilterActions } from "../../../store/stays-filter-slice";

const Guests = ({ title, description }) => {
  const dispatch = useDispatch();

  const titleLowerCase = title.toLowerCase(); // 'children' or 'adults'
  const guests = useSelector(state => state.staysFilter.guests); // { adults: 0, children: 0 }
  // this destructured adults or children dynamically based on title props
  const { [titleLowerCase]: numberOfGuests } = guests;

  // staysFilterActions.set is dynamic based on title props
  const setTotalGuestsAction = title === 'Adults' ? staysFilterActions.setAdults : staysFilterActions.setChildren;

  const handleAddGuests = () => {
    dispatch(setTotalGuestsAction("ADD"));
  };

  const handleDecreaseGuests = () => {
    dispatch(setTotalGuestsAction("DECREASE"));
  };

  return (
    <div className="mb-[52px]">
      <p>{title}</p>
      <p className="text-[#BDBDBD] mb-3">{description}</p>
      <div className="flex gap-[15px] items-center text-[#828282]">
        <div
          className="w-[23px] h-[23px] outline outline-1 outline-[#828282] rounded-[4px] cursor-pointer flex items-center justify-center"
          onClick={handleDecreaseGuests}
        >
          -
        </div>
        <span className="text-[#333] font-bold">{numberOfGuests}</span>
        <div
          className="w-[23px] h-[23px] outline outline-1 outline-[#828282] rounded-[4px] cursor-pointer flex items-center justify-center"
          onClick={handleAddGuests}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Guests;
