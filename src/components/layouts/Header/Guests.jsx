import { useState } from "react";
import { useDispatch } from "react-redux";
import { staysFilterActions } from "../../../store/stays-filter-slice";

const Guests = ({ title, description }) => {
  const [guests, setGuests] = useState(0);
  const dispatch = useDispatch();

  const handleAddGuests = () => {
    setGuests((prev) => prev + 1);
    dispatch(staysFilterActions.setGuests("ADD"));
  };

  const handleDecreaseGuests = () => {
    if (guests > 0) setGuests((prev) => prev - 1);
    dispatch(staysFilterActions.setGuests("DECREASE"));
  };

  return (
    <div className="mb-[52px]">
      <p>{title}</p>
      <p className="text-[#BDBDBD] mb-3">{description}</p>
      <div className="flex gap-[15px] items-center text-[#828282]">
        <button
          className="w-[23px] h-[23px] outline outline-1 outline-[#828282] rounded-[4px] cursor-pointer"
          onClick={handleDecreaseGuests}
        >
          -
        </button>
        <span className="text-[#333] font-bold">{guests}</span>
        <button
          className="w-[23px] h-[23px] outline outline-1 outline-[#828282] rounded-[4px] cursor-pointer"
          onClick={handleAddGuests}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Guests;
