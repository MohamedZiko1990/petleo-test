import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Charts.css";

const Charts = (props) => {
  const config1 = {
    chart: {
      type: "spline",
    },
    title: {
      text: `Weights`,
    },
    xAxis: {
      categories: props.datesW,
    },
    series: [
      {
        data: props.arrayW,
      },
    ],
  };

  const config2 = {
    chart: {
      type: "spline",
    },
    title: {
      text: `Pulses`,
    },
    xAxis: {
      categories: props.datesP,
    },
    series: [
      {
        data: props.arrayP,
      },
    ],
  };

  const config3 = {
    chart: {
      type: "spline",
    },
    title: {
      text: `Temperature`,
    },
    xAxis: {
      categories: props.datesT,
    },
    series: [
      {
        data: props.arrayT,
      },
    ],
  };

  return (
    <div className="m-auto pt-5">
      <HighchartsReact
        className="chart"
        highcharts={Highcharts}
        options={config1}
      />
      <HighchartsReact
        className="chart"
        highcharts={Highcharts}
        options={config2}
      />
      <HighchartsReact
        className="chart"
        highcharts={Highcharts}
        options={config3}
      />
    </div>
  );
};

export default Charts;
