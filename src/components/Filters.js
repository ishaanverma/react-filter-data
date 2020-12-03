import React from "react";
import categoriesData from "../categoriesData";
import FilterSection from "./FilterSection";

const Filters = ({ dispatch }) => {
  return (
    <div className="filters my-5">
      <div className="row">
        <div className="col">
          <h5>FILTERS</h5>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <hr/>
      </div>
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
