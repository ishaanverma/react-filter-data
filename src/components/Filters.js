import React from "react";
import categoriesData from "../categoriesData";
import FilterSection from "./FilterSection";

const Filters = ({ dispatch }) => {
  return (
    <div className="filters my-3">
      {categoriesData.map((item, index) =>
        <FilterSection
          key={index}
          categoryProp={item.property}
          categoryName={item.displayName}
          options={item.options}
          dispatch={dispatch}
        />
      )}
    </div>
  )
};

export default Filters;
