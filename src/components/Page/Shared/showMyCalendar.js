import React from "react";

import "../../../assets/css/zabuto_calendar.css";

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
          if (eventData[i].date === date) {
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
        if ($(this).find(".popup").css("display") === "none") {
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

function RenderColorKeyBadge(props) {
  //  Renders the badge on the calendar that shows color coding for items on the calendar
  //  if colorKeys object is empty, then show nothing.

  const { colorKeys } = props;

  if (colorKeys.length) {
    return (
      <a
        className="icon-certificate-bg"
        href="#0"
        data-toggle="modal"
        data-target="#mycalendarModal-2"
      >
        {colorKeys.length}
      </a>
    );
  } else {
    return <></>;
  }
}

function RenderColorKeyModal(props) {
  //  Renders the modal when the colorKeys badge is clicked showing the color coding for items on the calendar.
  //  if colorKeys object is empty, then show nothing.

  const { colorKeys } = props;

  if (colorKeys.length) {
    return (
      <div
        className="modal fade modalToltip"
        id="mycalendarModal-2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-310" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div id="toltip-my-calendar" className="toltip toltip-1-2">
                {colorKeys.map((colorKey, index) => (
                  <div key={index} className="toltip-item toltip-overlay mb-2">
                    <a href="#0" className="d-flex align-items-center">
                      <div
                        className={
                          "toltip-icon toltip-icon2 " + colorKey.iconColor
                        }
                      >
                        <i className="far fa-calendar-alt color-white"></i>
                      </div>
                      <div className="toltip-text color-white">
                        <p>{colorKey.name}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

class ShowMyCalendar extends React.Component {
  render() {
    const { calendar } = this.props;

    return (
      <>
        <div className="inner-wrap">
          <div className="box-top2 position-relative">
            <h2 className="box-subhead">
              <span className="icon-regular fa-calendar-alt"></span>
              My Calendar
              <RenderColorKeyBadge colorKeys={calendar.colorKeys} />
            </h2>
            <a href="#0" className="icon-setting icon-box">
              <span className="icon-solid fa-cog"></span>
            </a>

            {/* <!-- Modal Badges --> */}
            <RenderColorKeyModal colorKeys={calendar.colorKeys} />
          </div>
        </div>
        <div className="box-middle">
          <MyCalendar calendar={calendar} />
        </div>
      </>
    );
  }
}

export default ShowMyCalendar;
