import React, { useEffect, useState, useRef } from "react";

/* global $ */
function showZabutoCalendar(element, calendar) {
  element.zabuto_calendar({
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

function showZabutoCalendarContainer(element, calendar) {
  element.on("click", ".zabuto_calendar .event-styled .day", function () {
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
  });

  element.on("click", ".event-styled .popup-close", function (e) {
    e.stopPropagation();
    $(this).parents(".popup").css("display", "none");
  });
}

function convertMoodleCalendarMonthToZabutoCalendarMonth(
  moodleResult,
  twoDigitMonth,
  year
) {
  // add each calendar event from Moodle feed to calendarData
  // Moodle response comes in the form of weeks - each contains an array of days for that week in the month.
  let calendarDay = 1;
  const weeks = moodleResult.weeks;
  let calendarData = []; // array of objects representing days and their event information to be returned

  console.log(moodleResult);

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
          textlink: "View Event <i className='fas fa-angle-double-right'></i>",
          title: day.events[0].name,
        };
        calendarData.push(newData);
      }
      calendarDay++;
    }
  }
  return calendarData;
}

export default function MyZabutoCalendar(props) {
  const { calendar } = props;

  const elcalendar = useRef(null);
  const elcontainer = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // these html elements are modified by zabuto calendar
    const $elcalendar = $(elcalendar.current);
    const $elcontainer = $(elcontainer.current);

    // get calendar data from Moodle calendar webservice call

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
          // update the calendar prop and then show the Zabuto Calendar element.
          calendar.data = convertMoodleCalendarMonthToZabutoCalendarMonth(
            result,
            twoDigitMonth,
            year
          );
          showZabutoCalendar($elcalendar, calendar);
          showZabutoCalendarContainer($elcontainer, calendar);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    return function cleanup() {
      $elcalendar.zabuto_calendar("destroy");
      $elcontainer.zabuto_calendar("destroy");
    };
  }, [calendar]);

  return (
    // Need to wrap element modified by JQuery in div element because React only sees one child of div
    <div>
      {/* define the calendar element use ref so that React leaves element out of its processing */}
      <div ref={elcontainer} id="my-calendar-container">
        <div ref={elcalendar} id="my-calendar"></div>
      </div>
    </div>
  );
}
