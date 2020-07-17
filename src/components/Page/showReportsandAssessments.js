import React from "react";

import CanvasJSReact from "../../assets/js/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ShowReportsandAssessments extends React.Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    const chart_1 = {
      animationEnabled: true,
      title: {
        text: "BUDGET VS. ACTUALS",
        fontSize: 14,
        fontFamily: "Merriweather Sans",
      },
      axisY: {
        suffix: "%",
      },
      toolTip: {
        shared: true,
        reversed: true,
      },
      legend: {
        reversed: true,
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontSize: 10,
      },
      dataPointWidth: 12,
      data: [
        {
          type: "stackedColumn100",
          name: "Budget",
          showInLegend: true,
          yValueFormatString: '#,##0"%"',
          fallingColor: "#DD7E86",
          dataPoints: [
            { label: "Jan", y: 20 },
            { label: "Feb", y: 40 },
            { label: "Mar", y: 10 },
            { label: "Apr", y: 30 },
            { label: "May", y: 82 },
            { label: "Jun", y: 72 },
            { label: "Jul", y: 51 },
            { label: "Aug", y: 61 },
            { label: "Sep", y: 66 },
            { label: "Oct", y: 22 },
            { label: "Nov", y: 33 },
            { label: "Dec", y: 23 },
          ],
        },

        {
          type: "stackedColumn100",
          name: "Actuals",
          showInLegend: true,
          yValueFormatString: '#,##0"%"',
          dataPoints: [
            { label: "Jan", y: 30 },
            { label: "Feb", y: 100 },
            { label: "Mar", y: 7 },
            { label: "Apr", y: 43 },
            { label: "Apr", y: 30 },
            { label: "May", y: 20 },
            { label: "Jun", y: 25 },
            { label: "Jul", y: 16 },
            { label: "Aug", y: 35 },
            { label: "Sep", y: 44 },
            { label: "Oct", y: 51 },
            { label: "Nov", y: 22 },
            { label: "Dec", y: 55 },
          ],
        },
      ],
    };

    const chart_2 = {
      animationEnabled: true,
      title: {
        text: "RETENTION RATES BY COLLEGE",
        fontSize: 14,
        fontFamily: "Merriweather Sans",
      },
      subtitles: [
        {
          text: "",
        },
      ],
      toolTip: {
        shared: false,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
        fontSize: 10,
      },
      dataPointWidth: 20,
      data: [
        {
          type: "column",
          name: "Communications",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2017", y: 23 },
            { label: "2018", y: 37 },
            { label: "2019", y: 50 },
          ],
        },
        {
          type: "column",
          name: "Business",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2017", y: 70 },
            { label: "2018", y: 54 },
            { label: "2019", y: 20 },
          ],
        },
        {
          type: "column",
          name: "Science & Engineering",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2017", y: 84 },
            { label: "2018", y: 40 },
            { label: "2019", y: 70 },
          ],
        },
      ],
    };

    const chart_3 = {
      animationEnabled: true,
      title: {
        text: "GRADUCATION RATES",
        fontSize: 14,
        fontFamily: "Merriweather Sans",
      },
      subtitles: [
        {
          text: "",
        },
      ],
      toolTip: {
        shared: false,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries3,
        fontSize: 10,
      },
      dataPointWidth: 18,
      data: [
        {
          type: "column",
          name: "4-Years",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2016", y: 63 },
            { label: "2017", y: 23 },
            { label: "2018", y: 37 },
            { label: "2019", y: 50 },
          ],
        },
        {
          type: "column",
          name: "5-Years",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2016", y: 20 },
            { label: "2017", y: 70 },
            { label: "2018", y: 54 },
            { label: "2019", y: 20 },
          ],
        },
        {
          type: "column",
          name: "6-Years",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2016", y: 44 },
            { label: "2017", y: 84 },
            { label: "2018", y: 40 },
            { label: "2019", y: 70 },
          ],
        },
      ],
    };

    return (
      <>
        <div class="col-lg-12 mb-4">
          <div class="box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top position-relative">
                <h2 class="box-subhead mw-100">
                  <span class="icon-regular icon-chart-bar"></span>Reports &
                  Assessment
                </h2>
                <a
                  href="javascript:void(0);"
                  class="icon-setting icon-box btn-menu"
                >
                  <span class="icon-solid fa-cog"></span>
                </a>

                <div class="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#">Create New Course</a>
                    </li>
                    <li>
                      <a href="#">Go to My Course</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box-middle">
                <div class="row">
                  <div class="col-md-4 img-resp">
                    <div
                      id="chartContainer1"
                      class="resp-mb-4"
                      style={{ height: "300px", width: "100%" }}
                    >
                      <CanvasJSChart
                        options={chart_1}
                        onRef={(ref) => (this.chart = ref)}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 img-resp">
                    <div
                      id="chartContainer2"
                      class="resp-mb-4"
                      style={{ height: "300px", width: "100%" }}
                    >
                      <CanvasJSChart
                        options={chart_2}
                        onRef={(ref) => (this.chart = ref)}
                      />
                    </div>
                  </div>
                  <div class="col-md-4 img-resp">
                    <div
                      id="chartContainer3"
                      class="resp-mb-4"
                      style={{ height: "300px", width: "100%" }}
                    >
                      <CanvasJSChart
                        options={chart_3}
                        onRef={(ref) => (this.chart = ref)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-center">
            <a href="#" class="btn btn-blue">
              View More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ShowReportsandAssessments;
