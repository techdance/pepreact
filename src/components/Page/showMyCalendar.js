import React from "react";

import "../../assets/css/zabuto_calendar.css";

class MyCalendar extends React.Component {
  componentDidMount() {
    let eventData = [
      //blue-event, green-event, orange-event, purple-event
      {
        date: "2020-03-05",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "http://www.google.com",
        classname: "green-dark-event",
      },
      {
        date: "2020-03-10",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "green-light-event",
      },
      {
        date: "2020-03-12",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "green-dark-event",
      },
      {
        date: "2020-03-16",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "blue-light-event",
      },
      {
        date: "2020-03-18",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "green-light-event",
      },
      {
        date: "2020-03-19",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "green-dark-event",
      },
      {
        date: "2020-03-24",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "green-light-event",
      },
      {
        date: "2020-03-26",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "green-dark-event",
      },
      {
        date: "2020-03-30",
        badge: true,
        title: "Human Subjects Approval",
        description: "<b>William Stinson</b>, <i>Organizer</i>",
        hour: "8:00am EST",
        link: "#",
        textlink: "View Event <i class='fas fa-angle-double-right'></i>",
        classname: "blue-light-event",
      },
    ];

    /* global $ */
    this.$calendar = $(this.props.calendarTag);
    this.$calendar.zabuto_calendar({
      year: "2020",
      month: "03",
      data: eventData,
      weekstartson: 0,
      nav_icon: {
        prev: '<i class="fa fa-angle-left"></i>',
        next: '<i class="fa fa-angle-right"></i>',
      },
    });

    this.$calendarContainer = $(this.props.calendarContainer);
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
    return <div ref={(el) => (this.el = el)}></div>;
  }
}

class ShowMyCalendar extends React.Component {
  render() {
    return (
      <>
        <div class="col-lg-3 mb-4">
          <div class="calendar box box-border-radius box-shadow bg-white">
            <div class="inner-wrap">
              <div class="box-top2 position-relative">
                <h2 class="box-subhead">
                  <span class="icon-regular fa-calendar-alt"></span>
                  My Calendar
                  <a
                    class="icon-certificate-bg"
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#mycalendarModal-2"
                  >
                    3
                  </a>
                </h2>
                <a href="#" class="icon-setting icon-box">
                  <span class="icon-solid fa-cog"></span>
                </a>

                {/* <!-- Modal Badges --> */}
                <div
                  class="modal fade modalToltip"
                  id="mycalendarModal-2"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="modalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-310" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div id="toltip-my-calendar" class="toltip toltip-1-2">
                          <div class="toltip-item toltip-overlay mb-2">
                            <a href="#" class="d-flex align-items-center">
                              <div class="toltip-icon toltip-icon2 toltip-icon-brown">
                                <i class="far fa-calendar-alt color-white"></i>
                              </div>
                              <div class="toltip-text color-white">
                                <p>College of communications</p>
                              </div>
                            </a>
                          </div>
                          <div class="toltip-item toltip-overlay mb-2">
                            <a href="#" class="d-flex align-items-center">
                              <div class="toltip-icon toltip-icon2 toltip-icon-blue-light">
                                <i class="far fa-calendar-alt color-white"></i>
                              </div>
                              <div class="toltip-text color-white">
                                <p>College of Business</p>
                              </div>
                            </a>
                          </div>
                          <div class="toltip-item toltip-overlay mb-2">
                            <a href="#" class="d-flex align-items-center">
                              <div class="toltip-icon toltip-icon2 toltip-icon-green">
                                <i class="far fa-calendar-alt color-white"></i>
                              </div>
                              <div class="toltip-text color-white">
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
            <div class="box-middle">
              {/* <!-- define the calendar element --> */}
              <div id="my-calendar-container">
                <div id="my-calendar"></div>
              </div>

              <MyCalendar
                calendarTag={"#my-calendar"}
                calendarContainer={"#my-calendar-container"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowMyCalendar;
