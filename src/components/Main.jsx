import React, { useState } from "react";
import staysData from "../datas/staysData";
import { StarIcon } from "./Icons";

const Main = () => {
  const [filteredData, setFilteredData] = useState(staysData);

  return (
    <main className="text-[#333]">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h1 className="text-lg font-bold sm:text-2xl ">Stays in Finland</h1>
        <p className="text-[#4F4F4F] font-medium text-sm">12+ stays</p>
      </div>
      <div className="grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => {
          return (
            <div className="flex flex-col w-full h-auto max-w-md sm:max-w-none">
              <img
                className="h-full max-h-[238px] w-full sm:h-[296px] object-cover mb-[15px] rounded-3xl"
                src={item.photo}
                alt={item.title}
              />
              <div className="flex gap-[11px] items-center justify-between text-sm mb-3">
                {/* {item.superHost && } */}
                <div className="flex gap-[11px] items-center">
                  <span className="text-xs font-bold text-[#4F4F4F] py-[6px] px-2.5 border border-solid border-[#4F4F4F] rounded-xl">SUPER HOST</span>
                  <span className="text-[#828282]">{item.type}</span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <span className="text-[#EB5757]"><StarIcon /></span>
                  <span className="text-[#4F4F4F]">{item.rating}</span>
                </div>
              </div>
              <p className="text-sm font-semibold sm:text-base">{item.title}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
