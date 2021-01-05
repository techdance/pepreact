import React from "react";

import CanvasJSReact from "../../../../assets/js/canvasjs.react";

export var statusDoughnut = {
  ref: null, // dumb but global variable with a reference to the status doughnut chart in order to update it from other components
  percentComplete: 0, // more dumb.
};

export default class StatusDoughnut extends React.Component {
  render() {
    let CanvasJSChart = CanvasJSReact.CanvasJSChart;

    statusDoughnut.percentComplete =
      this.props.initialComplete !== undefined ? this.props.initialComplete : 0;

    const percentage = statusDoughnut.percentComplete;
    var colorDonut = "#339900";
    var colornumberDonut = "#000000";
    const options = {
      animationEnabled: true,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      percentageInnerCutout: 70,
      animationSteps: 100,
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        animateRotate: false,
        animiateScale: true,
      },
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
          cutoutPercentage: 80,
          showInLegend: false,
          dataPoints: [
            {
              y: parseInt(percentage),
              color: colorDonut, //green
            },
            {
              y: parseInt(100) - parseInt(percentage),
              color: "#e6e6e6", //grey
            },
          ],
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
}
