import React from "react";
import Checkbox from "./Checkbox";

const FilterSection = ({ categoryName, categoryProp, options, dispatch }) => {
  const filterList = (value, type) => {
    console.log(categoryProp, value);
    dispatch({
      type,
      payload: {
        categoryProp,
        value,
      }
    });
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <h5>{ categoryName }</h5>
          {options.map((item) =>
            <Checkbox key={item} item={item} onChecked={filterList} />
          )}
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <hr/>
      </div>
    </>
  );
};

export default FilterSection;