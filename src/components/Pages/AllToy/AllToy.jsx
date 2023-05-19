import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";

const AllToy = () => {
  const allToys = useLoaderData();
  console.log(allToys);

  return (
    <div>
      <div className="overflow-x-auto w-full my-container">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Product info</th>
              <th> Orderer Info </th>
              <th> Available Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <AllToyTable key={toy._id} toy={toy}></AllToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
