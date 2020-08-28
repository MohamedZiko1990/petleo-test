import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayBoard = (props) => {
  console.log(props.array);

  const List = props.array.map((data) => {
    console.log(data);
    return <DisplayItem type={data.type} value={data.value} unit={data.unit} />;
  });
  return (
    <div>
      <div>
        <h1>Current Health Data:</h1>
        <h3>Last Weight: {props.weight} KG</h3>
        <h3>Last Pulse: {props.pulse} bpm</h3>
        <h3>Last Temperature: {props.temperature} C </h3>
      </div>
      <hr></hr>
      <div>{List}</div>
    </div>
  );
};

export default DisplayBoard;
