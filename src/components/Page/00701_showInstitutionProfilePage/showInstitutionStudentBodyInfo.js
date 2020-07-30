import React from "react";

import CanvasJSReact from "../../../assets/js/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ShowInstitutionStudentBodyInfo extends React.Component {
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
    CanvasJSReact.CanvasJS.addColorSet("customColorSet", [
      "#0a4366",
      "#ff7900",
      "#808184",
      "#f98461",
      "#d9695f",
      "#e05850",
    ]);

    const chart_full_vs_part_time = {
      animationEnabled: true,
      height: 320,
      colorSet: "customColorSet",
      legend: {
        cursor: "pointer",
      },
      data: [
        {
          type: "pie",
          showInLegend: true,
          toolTipContent: "{name}: <strong>{y}</strong>",
          indexLabel: "{y}",
          dataPoints: [
            { y: this.props.studentBodyInfo.fullTime, name: "Full-Time" },
            { y: this.props.studentBodyInfo.partTime, name: "Part-Time" },
          ],
          indexLabelPlacement: "inside",
          indexLabelFontColor: "#fff",
          indexLabelFontSize: 22,
          indexLabelFontWeight: "bolder",
        },
      ],
    };

    const chart_in_vs_out_state = {
      animationEnabled: true,
      height: 320,
      colorSet: "customColorSet",
      legend: {
        cursor: "pointer",
      },
      data: [
        {
          type: "pie",
          showInLegend: true,
          toolTipContent: "{name}: <strong>{y}</strong>",
          indexLabel: "{y}",
          dataPoints: [
            { y: this.props.studentBodyInfo.inState, name: "In-State" },
            { y: this.props.studentBodyInfo.outofState, name: "Out of State" },
            {
              y: this.props.studentBodyInfo.international,
              name: "International",
            },
          ],
          indexLabelPlacement: "inside",
          indexLabelFontColor: "#fff",
          indexLabelFontSize: 22,
          indexLabelFontWeight: "bolder",
        },
      ],
    };

    return (
      <>
        <div className="row row-custom section-student-body mb-3">
          <div className="col-lg-12">
            <div className=" box box-border-radius box-shadow bg-white">
              <div className="inner-wrap">
                <div className="box-top d-flex justify-content-between">
                  <h2 className="box-subhead mw-100">
                    <i className="far fa-user-graduate"></i> Student Body
                  </h2>
                  <div>
                    <h3 className="ar">
                      {this.props.studentBodyInfo.asofTerm +
                        " " +
                        this.props.studentBodyInfo.asofYear}
                    </h3>
                    <em>{"Updated " + this.props.studentBodyInfo.updated}</em>
                  </div>
                </div>
                <div className="box-middle color-white">
                  <div className="row row-custom">
                    <div className="col-md-4 mb-2">
                      <div className="box-color box-color-blue mb-2">
                        <h4 className="color-white">Total</h4>
                        <div className="box-number font-100 text-center">
                          {this.props.studentBodyInfo.total}
                        </div>
                      </div>
                      <div className="box-color box-color-blue mb-2">
                        <h4 className="color-white">Undergraduate Students</h4>
                        <div className="box-number font-100 text-center">
                          {this.props.studentBodyInfo.undergraduate}
                        </div>
                      </div>
                      <div className="box-color box-color-blue">
                        <h4 className="color-white">Graduate Students</h4>
                        <div className="box-number text-center">
                          {this.props.studentBodyInfo.graduate}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 mb-2">
                      <div className="box-chart-pie">
                        <div
                          id="chartContainer"
                          style={{ height: "320px", width: "100%" }}
                        >
                          <CanvasJSChart
                            options={chart_full_vs_part_time}
                            onRef={(ref) => (this.chart = ref)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="box-chart-pie">
                        <div
                          id="chartContainer2"
                          style={{ height: "320px", width: "100%" }}
                        >
                          <CanvasJSChart
                            options={chart_in_vs_out_state}
                            onRef={(ref) => (this.chart = ref)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row-custom">
                    <div className="col-md-4 mb-2">
                      <div className="box-color box-color-orange color-blak">
                        <h4>Female Students</h4>
                        <div className="box-number text-center color-black">
                          {this.props.studentBodyInfo.female.number +
                            " (" +
                            this.props.studentBodyInfo.female.percent +
                            "%)"}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="box-color box-color-orange">
                        <h4>Male Students</h4>
                        <div className="box-number text-center color-black">
                          {this.props.studentBodyInfo.male.number +
                            " (" +
                            this.props.studentBodyInfo.male.percent +
                            "%)"}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="box-color box-color-orange">
                        <h4>Other Students</h4>
                        <div className="box-number text-center color-black">
                          {this.props.studentBodyInfo.other.number +
                            " (" +
                            this.props.studentBodyInfo.other.percent +
                            "%)"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowInstitutionStudentBodyInfo;
