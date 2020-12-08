class CalendarColorKeys {
  name = null;
  iconColor = null;
}

class CalendarData {
  date = null;
  badge = null;
  title = null;
  description = null;
  hour = null;
  link = null;
  classname = null;
}

class Calendar {
  month = null;
  year = null;
  colorKeys = []; // array of CalendarColorKeys objects
  data = []; // array of CalendarData objects

  constructor() {
    this.month = "10";
    this.year = "2019";
    this.colorKeys = []; // array of CalendarColorKeys objects
    this.data = [
      //blue-event, green-event, orange-event, purple-event
      {
        date: "2019-10-15",
        badge: true,
        title: "Refine Course Description",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "http://www.google.com",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2019-10-18",
        badge: true,
        title: "Determine Credit Hours",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "#",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2019-10-25",
        badge: true,
        title: "Review Accreditation Guidelines",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "#",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
      {
        date: "2019-10-29",
        badge: true,
        title: "Write Student Learning Outcomes",
        description: "<b>Bradley Dexter</b>, <i>Organizer</i>",
        hour: "",
        link: "#",
        textlink:
          "View Status <i class='far far-icon fa-arrow-alt-circle-right'></i>",
        classname: "orange-event",
      },
    ]; // array of CalendarData objects
  }
}

export default Calendar;
