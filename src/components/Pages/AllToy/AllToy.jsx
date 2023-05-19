import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardAllToys from "./CardAllToys";

const AllToy = () => {
  const [searchText, setSearchText] = useState();
  const allToys = useLoaderData();
  console.log(allToys);

  const handleSearch = () => {
    fetch(`http://localhost:5000/allToySearch${searchText}`)
      .then((response) => response.json())
      .then((data) => setSearchText(data))
      .catch((error) =>{
        console.log(error);
      })
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-8">
        <input
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 ml-8 mt-10 mb-10 px-20">
        {allToys.map((toys) => (
          <CardAllToys key={toys._id} toys={toys} />
        ))}
      </div>
    </div>
  );
};

export default AllToy;
