import React from "react";

import ShowRetentionRateDimensions from "./showRetentionRateDimensions.js";
import CanvasJSReact from "../../../assets/js/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const retentionRateDimensions = [
  "College",
  "Academic Delivery Method",
  "Class Year",
  "Gender",
  "Age Group",
  "Resident/Commuter",
  "Campus Location",
  "Nationality",
];

class ReportDrillDownContainer extends React.Component {
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
    const chart = {
      animationEnabled: true,
      title: {
        text: "RETENTION RATES BY COLLEGE",
        fontSize: 20,
        fontFamily: "Merriweather Sans",
      },
      subtitles: [
        {
          text: "",
        },
      ],
      height: 300,
      toolTip: {
        shared: false,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
        fontSize: 12,
      },
      dataPointWidth: 35,
      data: [
        {
          type: "column",
          name: "Communications",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2017", y: 64 },
            { label: "2018", y: 68 },
            { label: "2019", y: 72 },
          ],
        },
        {
          type: "column",
          name: "Business",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2017", y: 65 },
            { label: "2018", y: 67 },
            { label: "2019", y: 70 },
          ],
        },
        {
          type: "column",
          name: "Science & Engineering",
          showInLegend: true,
          yValueFormatString: "#,##0.# Units",
          dataPoints: [
            { label: "2017", y: 62 },
            { label: "2018", y: 63 },
            { label: "2019", y: 65 },
          ],
        },
      ],
    };

    return (
      <>
        <section className="three-columns">
          <div className="row row-custom mb-4">
            <div className="col-lg-12">
              <div className="box box-border-radius box-shadow bg-white pt-2 pb-2">
                <div className="inner-wrap">
                  <div className="box-top position-relative">
                    <h2 className="box-subhead mw-100 font28 pl-0 mb-0">
                      {" "}
                      RETENTION RATES BY COLLEGE
                    </h2>
                    <a href="#0" className="icon-setting icon-box btn-menu">
                      <span className="icon-solid fa-cog"></span>
                    </a>

                    <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                      <ul>
                        <li>
                          <a href="#">Create New</a>
                        </li>
                        <li>
                          <a href="#0" className="btn-remove">
                            Remove
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-custom mb-4">
            <div className="col-lg-8 mb-3">
              <div className="box box-border-radius box-shadow bg-white pt-4">
                <div className="inner-wrap">
                  <div className="box-middle">
                    <div class="row">
                      <div class="col-md-12 img-resp">
                        <div
                          id="chartContainer"
                          style={{ height: "300px", width: "100%" }}
                        >
                          <CanvasJSChart
                            options={chart}
                            onRef={(ref) => (this.chart = ref)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ShowRetentionRateDimensions
              retentionRateDimensions={retentionRateDimensions}
            />
          </div>
        </section>
      </>
    );
  }
}

export default ReportDrillDownContainer;
