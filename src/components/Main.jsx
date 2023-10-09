import React, { useEffect, useState } from "react";
import staysData from "../datas/staysData";
import StayItem from "./StayItem";
import { useSelector } from "react-redux";

let init = true;

const Main = () => {
  const [filteredData, setFilteredData] = useState(staysData);
  let totalStaysShown = filteredData.length;

  const {
    location: locationRedux,
    guests,
    doTheSearch,
  } = useSelector((state) => state.staysFilter);
  const { totalGuests: totalGuestsRedux } = guests;

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }
    const result = staysData.filter((item) => {
      const cityAndCountry = `${item.city}, ${item.country}`;
      return (
        cityAndCountry.includes(locationRedux) &&
        totalGuestsRedux <= item.maxGuests
      );
    });
    setFilteredData(result);
  }, [doTheSearch]);

  let content = filteredData.map((item, index) => {
    return <StayItem key={index} stayDetail={item} />;
  });

  if (filteredData.length === 0) {
    content = (
      <p className="text-center">
        Uh-oh, it looks like there are no stays that fit your request right now.
        <br />
        <br /> You can try to explore different options! :)
      </p>
    );
  }

  return (
    <main className="text-[#333]">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h1 className="text-lg font-bold sm:text-2xl ">Stays in Finland</h1>
        <p className="text-[#4F4F4F] font-medium text-sm">
          {totalStaysShown} {totalStaysShown === 1 ? "stay" : "stays"}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {content}
      </div>
    </main>
  );
};

export default Main;
