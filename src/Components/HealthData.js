import React from "react";
import DisplayBoard from "./DisplayBoard";
import DropDownMenu from "./DropDownMenu";
import GenerateGraphs from "./GenerateGraphs";
import Charts from "./Charts";

class HealthData extends React.Component {
  state = {
    arrayToDisplay: [],
    Graphs: false,
    arrayW: [],
    arrayP: [],
    arrayT: [],
    DatesW: [],
    DatesP: [],
    DatesT: [],
  };

  // console.log(props.array);
  // console.log(props.weight);
  // console.log(props.pulse);
  // console.log(props.temperature);

  handleDropdownSelection = (month, year) => {
    // console.log(month);
    // console.log(year);
    var arr1 = [];
    for (let i = 0; i < this.props.array.length; i++) {
      var dateString = this.props.array[i].timestamp;
      var date = new Date(dateString);

      // console.log(Number(date.getFullYear()));
      // console.log(year);
      if (
        Number(date.getFullYear()) >= year &&
        Number(date.getMonth()) >= month
      ) {
        arr1.push(this.props.array[i]);
      }
    }
    //console.log(arr1);

    this.setState({ arrayToDisplay: arr1 });
  };

  handleButtonPress = () => {
    //console.log("Clicked");
    var weights = [];
    var pulses = [];
    var temperatures = [];
    var datesW = [];
    var datesP = [];
    var datesT = [];
    for (let i = 0; i < this.props.array.length; i++) {
      if (this.props.array[i].type === "WEIGHT") {
        weights.push(this.props.array[i].value);
        var dateString = this.props.array[i].timestamp;
        var date = new Date(dateString);
        datesW.push(date.toISOString().substring(0, 10));
        //console.log(date.toISOString().substring(0, 10));
        //console.log(weight);
      } else if (this.props.array[i].type === "PULSE") {
        pulses.push(this.props.array[i].value);
        datesP.push(date.toISOString().substring(0, 10));
        //datesP.push(this.props.array[i].timestamp);
        //console.log(pulse);
      } else if (this.props.array[i].type === "TEMPERATURE") {
        temperatures.push(this.props.array[i].value);
        datesT.push(date.toISOString().substring(0, 10));
        //datesT.push(this.props.array[i].timestamp);
        //console.log(temperature);
      }
    }
    //console.log(weights);

    this.setState({
      Graphs: true,
      arrayW: weights,
      arrayP: pulses,
      arrayT: temperatures,
      DatesW: datesW,
      DatesP: datesP,
      DatesT: datesT,
    });
  };

  componentDidUpdate = () => {
    console.log(this.state.arrayW);
    console.log(this.state.DatesW);
  };

  render() {
    return (
      <div className="ml-4">
        <div className="row">
          <div className="col-2">
            <GenerateGraphs onClick={this.handleButtonPress} />
          </div>
          <div
            className={`col-4 d-${
              this.state.Graphs === true ? "none" : "block"
            }`}
          >
            <DropDownMenu onSelect={this.handleDropdownSelection} />
          </div>
          <div
            className={`col-6 d-${
              this.state.Graphs === true ? "none" : "block"
            }`}
          >
            <DisplayBoard
              weight={this.props.weight}
              pulse={this.props.pulse}
              temperature={this.props.temperature}
              array={this.state.arrayToDisplay}
            />
          </div>
          <div
            className={`col-10 d-${
              this.state.Graphs === false ? "none" : "block"
            }`}
          >
            <Charts
              arrayW={this.state.arrayW}
              arrayP={this.state.arrayP}
              arrayT={this.state.arrayT}
              datesW={this.state.DatesW}
              datesP={this.state.DatesP}
              datesT={this.state.DatesT}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HealthData;
