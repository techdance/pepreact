import React from "react";

import "../../../assets/css/zabuto_calendar.css";

/* global $ */
class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    const { calendar } = this.props;
    // this.state = { calendar: calendar };

    this.showZabutoCalendar = this.showZabutoCalendar.bind(this);
    this.showZabutoCalendarContainer = this.showZabutoCalendarContainer.bind(
      this
    );
  }

  showZabutoCalendar() {
    const { calendar } = this.props;

    this.$elcalendar.zabuto_calendar({
      year: calendar.year,
      month: calendar.month,
      data: calendar.data,
      weekstartson: 0,
      nav_icon: {
        prev: '<i class="fa fa-angle-left"></i>',
        next: '<i class="fa fa-angle-right"></i>',
      },
    });
  }

  showZabutoCalendarContainer() {
    const { calendar } = this.props;

    this.$elcalendarContainer.on(
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
        let eventData = calendar.data;
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

    this.$elcalendarContainer.on(
      "click",
      ".event-styled .popup-close",
      function (e) {
        e.stopPropagation();
        $(this).parents(".popup").css("display", "none");
      }
    );
  }

  componentDidMount() {
    const { calendar } = this.props;

    // these html elements are modified by zabuto calendar
    this.$elcalendar = $(this.elcalendar);
    this.$elcalendarContainer = $(this.elcontainer);

    // get calendar data from Moodle calendar webservice call
    let calendarData = []; // array of objects representing days and their event information to be filled with response from fetch
    // baseURL embeds the user token in the call. This should be extracted to an external context variable.
    //  token is hardcoded to user "reactclient" on the Dev39 server
    const baseUrl =
      "http://137.117.70.79/dev39/webservice/rest/server.php?wstoken=83c52a12193652af3e410ed77cc0f231&moodlewsrestformat=json&wsfunction=core_calendar_get_calendar_monthly_view";

    // get current month and date instead of pulling from the data object.
    const today = new Date();
    // "0" prefix for single digit year and day (for Zabuto Calendar) but Moodle requires single digit
    const year = today.getFullYear();
    const month = Number(today.getMonth()) + 1;
    const twoDigitMonth = month < 10 ? "0" + month : String(month);

    fetch(baseUrl + "&year=" + year + "&month=" + month)
      .then((res) => res.json())
      .then(
        (result) => {
          // add each calendar event from Moodle feed to calendarData
          let calendarDay = 1; // initialize count for calendar day
          // Moodle response comes in the form of weeks - each contains an array of days for that week in the month.
          const weeks = result.weeks;
          for (const week of weeks) {
            const days = week.days;
            for (const day of days) {
              if (day.events[0]) {
                // currently only supporting one event per day to show here
                const newData = {
                  badge: true,
                  //  need to change classname based on some kind of event type
                  classname: "green-dark-event",
                  date:
                    year +
                    "-" +
                    twoDigitMonth +
                    "-" +
                    (calendarDay < 10 ? "0" + calendarDay : calendarDay),

                  description: day.events[0].description,
                  hour: "8:00am EST",
                  link: day.events[0].viewurl,
                  textlink:
                    "View Event <i className='fas fa-angle-double-right'></i>",
                  title: day.events[0].name,
                };
                calendarData.push(newData);
              }

              calendarDay++;
            }
          }

          // update the calendar prop and then show the Zabuto Calendar element.
          calendar.data = calendarData;
          this.showZabutoCalendar();
          this.showZabutoCalendarContainer();
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  }

  componentWillUnmount() {
    this.$elcalendar.zabuto_calendar("destroy");
    this.$elcalendarContainer.zabuto_calendar("destroy");
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
