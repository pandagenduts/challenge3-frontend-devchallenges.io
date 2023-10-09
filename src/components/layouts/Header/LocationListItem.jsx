import { useDispatch } from "react-redux";
import { staysFilterActions } from "../../../store/stays-filter-slice";

const LocationListItem = ({ location }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(staysFilterActions.setLocation(location));
  };

  return (
    <div className="flex items-center gap-[10px] cursor-pointer" onClick={handleClick}>
      <span className="material-symbols-outlined ">location_on</span>
      {location}
    </div>
  );
};

export default LocationListItem;
