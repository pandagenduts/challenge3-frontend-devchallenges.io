import Input from "../Input";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../store/ui-slice";
import { useState } from "react";
import Guests from "./Guests";

const PopupMenu = () => {
  const [selectedFilter, setSelectedFilter] = useState("location");
  const dispatch = useDispatch();
  const { location, guests, doTheSearch } = useSelector(state => state.staysFilter)

  console.log(guests);

  const handlerShowPopupMenu = () => {
    dispatch(UIActions.togglePopupMenu());

    // do the search
  };

  const handlerFormSubmit = (event) => {
    event.preventDefault();

    // do the search
  };

  const handlerLocation = () => {
    setSelectedFilter("location");
  };

  const handlerGuests = () => {
    setSelectedFilter("guests");
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
              onClick={handlerShowPopupMenu}
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
                onClick={handlerLocation}
              >
                <label htmlFor="location">LOCATION</label>
                <Input type="text" placeholder="Add Location" name="location" />
              </div>
              <div
                className="border-t-[1px] sm:border-solid sm:border-x-[1px] border-[#F2F2F2]"
                onClick={handlerGuests}
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
                  <div className="flex items-center gap-[10px]">
                    <span className="material-symbols-outlined ">
                      location_on
                    </span>
                    Helsinki, Finland
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="material-symbols-outlined text-[#4F4F4F]">
                      location_on
                    </span>
                    Turku, Finland
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="material-symbols-outlined text-[#4F4F4F]">
                      location_on
                    </span>
                    Oulu, Finland
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="material-symbols-outlined text-[#4F4F4F]">
                      location_on
                    </span>
                    Vaasa, Finland
                  </div>
                </div>
              )}
              {selectedFilter === "guests" && (
                <div id="guests-filter" className="py-9 px-[26px] sm:col-start-2 sm:col-end-2">
                  <Guests title='Adults' description='Ages 13 or above' />
                  <Guests title='Children' description='Ages 2-12' />
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
