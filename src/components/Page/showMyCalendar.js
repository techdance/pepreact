import React from "react";

import "../../assets/css/zabuto_calendar.css";

class MyCalendar extends React.Component {
  componentDidMount() {
    let eventData = this.props.calendar.data;

    /* global $ */
    this.$elcalendar = $(this.elcalendar);
    this.$elcalendar.zabuto_calendar({
      year: this.props.calendar.year,
      month: this.props.calendar.month,
      data: eventData,
      weekstartson: 0,
      nav_icon: {
        prev: '<i class="fa fa-angle-left"></i>',
        next: '<i class="fa fa-angle-right"></i>',
      },
    });

    /* global $ */
    this.$calendarContainer = $(this.elcontainer);
    this.$calendarContainer.on(
      "click",
      ".zabuto_calendar .event-styled .day",
      function () {
        //$(".zabuto_calendar .event-styled .day").live('click', function(){
        var myId = $(this).parent(".event-styled").attr("id");
        var date = myId.substr(-10, 10);
        var title = "";
        var description = "";
        var hour = "";
        var link = "";
        var textlink = "";

        for (var i = 0; i < eventData.length; i++) {
          if (eventData[i].date == date) {
            title = eventData[i].title;
            description = eventData[i].description;
            hour = eventData[i].hour;
            link = eventData[i].link;
            textlink = eventData[i].textlink;
          }
        }

        if ($(this).find(".popup").length === 0) {
          $(this).append(
            "<span class='popup'><span class='event-title'>" +
              title +
              "<span class='popup-close'>x</span></span><span class='event-content'>" +
              description +
              "<br>" +
              hour +
              "</span><span class='event-link'><span onclick=\"location.href='" +
              link +
              '\'" style="color:black;">' +
              textlink +
              "</span></span></span>"
          );
        }
        if ($(this).find(".popup").css("display") == "none") {
          $(this).find(".popup").css("display", "block");
        }
      }
    );

    this.$calendarContainer.on("click", ".event-styled .popup-close", function (
      e
    ) {
      e.stopPropagation();
      $(this).parents(".popup").css("display", "none");
    });
  }

  componentWillUnmount() {
    this.$calendar.zabuto_calendar("destroy");
  }

  render() {
    return (
      // Need to wrap element modified by JQuery in div element because React only sees one child of div
      <div>
        {/* define the calendar element use ref so that React leaves element out of its processing */}
        <div
          ref={(elcontainer) => (this.elcontainer = elcontainer)}
          id="my-calendar-container"
        >
          <div
            ref={(elcalendar) => (this.elcalendar = elcalendar)}
            id="my-calendar"
          ></div>
        </div>
      </div>
    );
  }
}

class ShowMyCalendar extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="calendar box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top2 position-relative">
                <h2 className="box-subhead">
                  <span className="icon-regular fa-calendar-alt"></span>
                  My Calendar
                  <a
                    className="icon-certificate-bg"
                    href="#0"
                    data-toggle="modal"
                    data-target="#mycalendarModal-2"
                  >
                    3
                  </a>
                </h2>
                <a href="#" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>

                {/* <!-- Modal Badges --> */}
                <div
                  className="modal fade modalToltip"
                  id="mycalendarModal-2"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="modalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-310"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-body">
                        <div
                          id="toltip-my-calendar"
                          className="toltip toltip-1-2"
                        >
                          <div className="toltip-item toltip-overlay mb-2">
                            <a href="#" className="d-flex align-items-center">
                              <div className="toltip-icon toltip-icon2 toltip-icon-brown">
                                <i className="far fa-calendar-alt color-white"></i>
                              </div>
                              <div className="toltip-text color-white">
                                <p>College of communications</p>
                              </div>
                            </a>
                          </div>
                          <div className="toltip-item toltip-overlay mb-2">
                            <a href="#" className="d-flex align-items-center">
                              <div className="toltip-icon toltip-icon2 toltip-icon-blue-light">
                                <i className="far fa-calendar-alt color-white"></i>
                              </div>
                              <div className="toltip-text color-white">
                                <p>College of Business</p>
                              </div>
                            </a>
                          </div>
                          <div className="toltip-item toltip-overlay mb-2">
                            <a href="#" className="d-flex align-items-center">
                              <div className="toltip-icon toltip-icon2 toltip-icon-green">
                                <i className="far fa-calendar-alt color-white"></i>
                              </div>
                              <div className="toltip-text color-white">
                                <p>College of Science & Engineering</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-middle">
              <MyCalendar calendar={this.props.calendar} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowMyCalendar;
