import React, { useState } from "react";
import categoriesData from "../categoriesData";

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
          {options.map((item, index) =>
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

const Checkbox = ({ item, onChecked }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (event) => {
    if (checked === false) {
      onChecked(event.target.name, 'ADD_FILTER_CATEGORY');
    } else {
      onChecked(event.target.name, 'REMOVE_FILTER_CATEGORY');
    }
    setChecked(!checked);
  }

  return(
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={handleChecked}
        name={`${item}`}
        id={`defaultCheck${item}`}
      />
      <label className="form-check-label" htmlFor={`defaultCheck${item}`}>
        {item}
      </label>
    </div>
  );
}

export default Filters;