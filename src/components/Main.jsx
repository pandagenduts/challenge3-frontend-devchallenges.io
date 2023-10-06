import React, { useState } from "react";
import staysData from "../datas/staysData";
import StayItem from "./StayItem";

const Main = () => {
  const [filteredData, setFilteredData] = useState(staysData);
  let totalStaysShown = filteredData.length;
  if(filteredData.length > 12) totalStaysShown = '12+'

  return (
    <main className="text-[#333]">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h1 className="text-lg font-bold sm:text-2xl ">Stays in Finland</h1>
        <p className="text-[#4F4F4F] font-medium text-sm">{totalStaysShown} {totalStaysShown === 1 ? 'stay' : 'stays'}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => {
          return (
            <StayItem stayDetail={item} />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
