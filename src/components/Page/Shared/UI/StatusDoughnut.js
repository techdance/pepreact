import React from "react";

import CanvasJSReact from "../../../../assets/js/canvasjs.react";

export var statusDoughnut = {
  ref: null, // dumb but global variable with a reference to the status doughnut chart in order to update it from other components
  percentComplete: 0, // more dumb.
};

export default function StatusDoughnut(props) {
  const { initialComplete } = props;

  let CanvasJSChart = CanvasJSReact.CanvasJSChart;
  let colorDonutOn = "#339900"; //green
  let colorDonutOff = "#e6e6e6"; //gray
  statusDoughnut.percentComplete =
    initialComplete !== undefined ? initialComplete : 0;

  const percentage = statusDoughnut.percentComplete;

  const dataPoints = [
    {
      y: parseInt(percentage),
      color: colorDonutOn,
    },
    {
      y: parseInt(100) - parseInt(percentage),
      color: colorDonutOff,
    },
  ];

  var colornumberDonut = "#000000"; //black
  const options = {
    animationEnabled: true,
    interactivityEnabled: false,
    animationDuration: 750,
    subtitles: [
      {
        text: percentage + "%",

        verticalAlign: "center",
        horizontalAlign: "center",
        fontSize: 24,
        fontWeight: "normal",
        fontColor: colornumberDonut,
        fontFamily: "Merriweather Sans",
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        startAngle: 270,
        radius: "100%", // Sets the outer radius of the doughnut chart
        innerRadius: "80%", // Sets the inner radius. The difference between outer and inner is the width of the doughnut
        showInLegend: false,
        dataPoints: dataPoints,
      },
    ],
  };

  const containerProps = {
    width: 140,
    height: 140,
    margin: "auto",
  };

  return (
    <>
      <a href="#0">
        <div className="box-middle-inner text-center box-status">
          <h4>STATUS</h4>

          <div id="donut1" className="wrap-donut">
            <CanvasJSChart
              options={options}
              containerProps={containerProps}
              onRef={(ref) => (statusDoughnut.ref = ref)}
            />
          </div>
        </div>
      </a>
    </>
  );
}
