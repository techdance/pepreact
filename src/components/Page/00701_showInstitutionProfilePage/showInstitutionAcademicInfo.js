import React from "react";

import CanvasJSReact from "../../../assets/js/canvasjs.react.js";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ShowCollegesAndSchools = (props) => {
  const { collegesAndSchools } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="box-color border-grey h-100">
        <h4 className="mb-3">Colleges & Schools</h4>
        <div className="text-center font60 color-black mb-4">5</div>
        <div className="list-bullet">
          <ul>
            {collegesAndSchools.map((name, index) => (
              <li key={index}>
                <a href="#0">{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

class ShowDegreePrograms extends React.Component {
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
    const chart = this.props.chart;

    return (
      <div className="col-md-4 mb-4">
        <div className="box-color border-grey h-100">
          <h4 className="mb-3">Degree Programs</h4>
          <div id="chartContainer3" style={{ height: "300px", width: "100%" }}>
            <CanvasJSChart
              options={chart}
              onRef={(ref) => (this.chart = ref)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class ShowDegreesGranted extends React.Component {
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
    const chart = this.props.chart;
    const granted = this.props.granted;

    return (
      <div className="col-md-4 mb-4">
        <div className="box-color border-grey h-100">
          <h4 className="mb-3">Degrees Granted During</h4>

          <div className="color-black line-height-15">
            <p>
              <strong>Academic Year: {granted.Year}</strong>
            </p>
            <p>
              Associate Degrees: {granted.Associate}
              <br />
              Bachelor's Degrees: {granted.Bachelor}
              <br />
              Master's Degrees: {granted.Master} <br />
              Doctorate Degrees: {granted.Doctorate}
            </p>
          </div>
          <div id="chartContainer4" style={{ height: "170px", width: "100%" }}>
            <CanvasJSChart
              options={chart}
              onRef={(ref) => (this.chart = ref)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const ShowAccreditations = (props) => {
  const { accreditations } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="box-color border-grey h-100">
        <h4 className="mb-3">Accreditation</h4>
        <div className="list-bullet">
          <ul>
            {accreditations.map((accreditation, index) => (
              <li key={index}>
                <a href="#">{accreditation}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ShowRecognitions = (props) => {
  const { recognitions } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="box-color border-grey h-100">
        <h4 className="mb-3">Recognition</h4>
        <div className="list-bullet">
          <ul>
            {recognitions.map((recognition, index) => (
              <li key={index}>
                <a href="#0">{recognition}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ShowDegreesOffered = (props) => {
  const { degrees } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="box-color border-grey h-100">
        <h4 className="mb-3">Degrees Offered</h4>
        <div className="list-bullet">
          <ul>
            {degrees.map((degree, index) => (
              <li key={index}>
                <a href="#0">{degree}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

class ShowInstitutionAcademicInfo extends React.Component {
  render() {
    const totalDegrees =
      Number(this.props.academic.degreePrograms.undergraduate) +
      Number(this.props.academic.degreePrograms.graduate);
    const degreeProgramsChart = {
      animationEnabled: true,
      height: 300,
      colorSet: "customColorSet",
      title: {
        dockInsidePlotArea: true,
        fontSize: 75,
        fontWeight: "normal",
        horizontalAlign: "center",
        verticalAlign: "center",
        text: totalDegrees,
      },
      legend: {
        cursor: "pointer",
      },
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize: 17,
          indexLabel: "{y}",
          toolTipContent: "{y} (#percent%)",
          dataPoints: [
            {
              y: this.props.academic.degreePrograms.undergraduate,
              name: "Undergraduate",
            },
            {
              y: this.props.academic.degreePrograms.graduate,
              name: "Graduate",
            },
          ],
        },
      ],
      indexLabelPlacement: "inside",
      indexLabelFontColor: "#fff",
      indexLabelFontSize: 11,
      indexLabelFontWeight: "bolder",
    };

    const degreesGrantedChart = {
      animationEnabled: true,
      height: 170,
      data: [
        {
          type: "bar",
          name: "companies",
          axisYType: "secondary",
          color: "#0a4366",
          dataPoints: [
            {
              y: this.props.academic.degreesGranted.Doctorate,
              label: "Doctorate Degrees",
            },
            {
              y: this.props.academic.degreesGranted.Master,
              label: "Master's Degrees",
            },
            {
              y: this.props.academic.degreesGranted.Bachelor,
              label: "Bachelor's Degrees",
            },
            {
              y: this.props.academic.degreesGranted.Associate,
              label: "Associate Degrees",
            },
          ],
        },
      ],
    };

    return (
      <>
        <div className="row row-custom section-academics mb-3">
          <div className="col-lg-12">
            <div className=" box box-border-radius box-shadow bg-white">
              <div className="inner-wrap">
                <div className="box-top d-flex justify-content-between">
                  <h2 className="box-subhead mw-100">
                    <span className="icon-book-user icon-regular"></span>{" "}
                    Academic
                  </h2>
                  <div>
                    <h3 className="ar">
                      {this.props.academic.asofTerm +
                        " " +
                        this.props.academic.asofYear}
                    </h3>
                    <em>{this.props.academic.updated}</em>
                  </div>
                </div>
                <div className="box-middle color-white">
                  <div className="row row-custom">
                    <ShowCollegesAndSchools
                      collegesAndSchools={
                        this.props.academic.collegesAndSchools
                      }
                    />
                    <ShowDegreePrograms chart={degreeProgramsChart} />

                    <ShowDegreesGranted
                      chart={degreesGrantedChart}
                      granted={this.props.academic.degreesGranted}
                    />

                    <ShowAccreditations
                      accreditations={this.props.academic.accreditations}
                    />

                    <ShowRecognitions
                      recognitions={this.props.academic.recognitions}
                    />

                    <ShowDegreesOffered
                      degrees={this.props.academic.degreesOffered}
                    />
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

export default ShowInstitutionAcademicInfo;
