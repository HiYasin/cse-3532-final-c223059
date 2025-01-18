import React from "react";

const SortSelect = () => {
  return (
    <select className="select select-bordered w-full max-w-xs">
      <option disabled selected>
        Sort By View
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  );
};

export default SortSelect;
