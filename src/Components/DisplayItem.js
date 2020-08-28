import React from "react";

const DisplayItem = (props) => {
  return (
    <div>
      <h3>
        {props.type}: {props.value} {props.unit}
      </h3>
    </div>
  );
};

export default DisplayItem;
