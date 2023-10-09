import Input from "../Input";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../store/ui-slice";
import { useEffect, useRef, useState } from "react";
import Guests from "./Guests";
import locationLists from "../../../datas/locationLists";
import LocationListItem from "./LocationListItem";
import { staysFilterActions } from "../../../store/stays-filter-slice";

let init = true;

const PopupMenu = () => {
  const dispatch = useDispatch();
  const locationRef = useRef();
  const { location: locationRedux } = useSelector((state) => state.staysFilter);

  // to show what search filter to show
  const [selectedFilter, setSelectedFilter] = useState("location");
  // render location based on input value
  const [locationListsFiltered, setLocationListsFiltered] = useState(locationLists);
  // the state for input value
  const [locationFilter, setLocationFilter] = useState("");

  // trigger when input value changed
  const actionOnChange = (event) => {
    setLocationFilter(event.target.value.toLowerCase().replace(",", ""));
    if(event.target.value.trim() === '') {
      dispatch(staysFilterActions.setLocation(''))
    }
  };

  useEffect(() => {
    locationRef.current.value = locationRedux;
    setLocationFilter(locationRedux.toLowerCase().replace(",", ""));
  }, [locationRedux])

  useEffect(() => {
    setLocationListsFiltered(
      locationLists.filter((item) =>
        item.toLowerCase().replace(",", "").includes(locationFilter)
      )
    );
  }, [locationFilter]);

  const handleShowPopupMenu = () => {
    dispatch(UIActions.togglePopupMenu());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  // set which search filter to show
  const handleLocation = () => {
    setSelectedFilter("location");
  };

  const handleGuests = () => {
    setSelectedFilter("guests");
  };

  return (
    <menu className="fixed top-0 left-0 flex flex-col w-screen h-screen">
      <div
        id="menu-overlay"
        className="fixed top-0 left-0 w-screen h-screen backdrop-blur-[2px] z-10"
        onClick={handleShowPopupMenu}
      />
      <form
        onSubmit={handleFormSubmit}
        className="z-20 px-3 pt-[18px] pb-6 sm:pt-[93px] bg-white min-h-[632px] sm:min-h-[500px] flex flex-col justify-between max-w-[1280px] w-full mx-auto"
      >
        <div>
          <div
            id="popup-menu-header"
            className="flex items-center justify-between mb-4 sm:hidden"
          >
            <p className="text-xs font-bold">Edit your search</p>
            <span
              className="cursor-pointer material-symbols-outlined"
              onClick={handleShowPopupMenu}
            >
              close
            </span>
          </div>
          <nav className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 shadow-bsOne rounded-[16px]">
              <div
                className={`flex flex-col gap-1 justify-center py-[11px] px-[26px] rounded-2xl border border-solid duration-150 ${
                  selectedFilter === "location"
                    ? "border-[#333]"
                    : "border-transparent"
                }`}
                onClick={handleLocation}
              >
                <label htmlFor="location">LOCATION</label>
                <input
                  type="text"
                  placeholder="Add Location"
                  name="location"
                  onChange={actionOnChange}
                  className="outline-none"
                  ref={locationRef}
                />
              </div>
              <div
                className="border-t-[1px] sm:border-solid sm:border-x-[1px] border-[#F2F2F2]"
                onClick={handleGuests}
              >
                <div
                  className={`flex flex-col gap-1 justify-center py-[11px] px-[26px] rounded-2xl border border-solid  border-[#333] ${
                    selectedFilter === "guests"
                      ? "border-[#333]"
                      : "border-transparent"
                  }`}
                >
                  <label htmlFor="guest">GUESTS</label>
                  <Input
                    type="number"
                    placeholder="Add guest"
                    name="guests"
                    readOnly
                  />
                </div>
              </div>
              <div className="hidden sm:flex justify-center py-[11px] px-[26px]">
                <Button>Search</Button>
              </div>
            </div>
            <div className="text-sm sm:grid sm:grid-cols-3">
              {selectedFilter === "location" && (
                <div
                  id="location-filter"
                  className="py-9 px-[26px] text-[#4F4F4F] flex flex-col gap-9 sm:col-start-1 sm:col-end-1"
                >
                  {locationListsFiltered.map((item, index) => (
                    <LocationListItem location={item} key={index} />
                  ))}
                </div>
              )}
              {selectedFilter === "guests" && (
                <div
                  id="guests-filter"
                  className="py-9 px-[26px] sm:col-start-2 sm:col-end-2"
                >
                  <Guests title="Adults" description="Ages 13 or above" />
                  <Guests title="Children" description="Ages 2-12" />
                </div>
              )}
            </div>
          </nav>
        </div>
        <Button className="self-center sm:hidden">Search</Button>
      </form>
    </menu>
  );
};

export default PopupMenu;
