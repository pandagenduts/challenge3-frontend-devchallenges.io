import React, { useState } from "react";
import staysData from "../datas/staysData";
import StayItem from "./StayItem";

const Main = () => {
  const [filteredData, setFilteredData] = useState(staysData);
  let totalStaysShown = filteredData.length;
  if (filteredData.length > 12) totalStaysShown = "12+";

  function searchStays(query, staysData) {
    const results = [];
    let searchTerms = null;
    console.log(query.includes(","));
    if (query.includes(",")) {
      searchTerms = query.trim().toLowerCase().split(",");
    } else {
      searchTerms = query.trim().toLowerCase().split(" ");
      if(searchTerms[1]) searchTerms[1] = ` ${searchTerms[1]}`
      
    }
    // const searchTerms = query.trim().toLowerCase().split(",");
    console.log(searchTerms);

    staysData.forEach((stay) => {
      const cityAndCountry = `${stay.city.toLowerCase()}, ${stay.country.toLowerCase()}`;

      if (cityAndCountry.includes(query.toLowerCase())) {
        results.push(stay);
      } else {
        let match = true;
        searchTerms.forEach((term) => {
          if (!cityAndCountry.includes(term.trim())) {
            match = false;
          }
        });
        if (match) {
          results.push(stay);
        }
      }
    });

    return results;
  }

  const query = "helsinki finland";
  const searchResults = searchStays(query, staysData);
  console.log(searchResults);

  return (
    <main className="text-[#333]">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h1 className="text-lg font-bold sm:text-2xl ">Stays in Finland</h1>
        <p className="text-[#4F4F4F] font-medium text-sm">
          {totalStaysShown} {totalStaysShown === 1 ? "stay" : "stays"}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item, index) => {
          return <StayItem key={index} stayDetail={item} />;
        })}
      </div>
    </main>
  );
};

export default Main;
