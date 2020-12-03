import React, { useState } from "react";

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

export default Checkbox;
