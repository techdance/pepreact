import React from "react";

import ShowBadges from "./showBadges.js";
import ShowAlerts from "./showAlerts.js";
import ShowMessages from "./showMessages.js";
import ShowProfileIcon from "./showProfileIcon.js";
import ShowSearchBox from "./showSearchBox.js";

const badges = ["Networking"];

const alert1 = {
  type: "message",
  image: "images/randy.png",
  text:
    "Randy Wolff uploaded a document in What Artificial Intelligence Can Do for Small Business project",
};

const alert2 = {
  type: "matches",
  image: "",
  text:
    "Karthic Koothrappali, Joanne Byrne and others have matched with you as suggested partners",
};

const alert3 = {
  type: "message",
  image: "images/Inez.png",
  text:
    "Inez Campos was added to the Ethics in Multinational Management project",
};

const alert4 = {
  type: "bullhorn",
  image: "",
  text:
    "Register today for the International Conference on Big Data in Business",
};

const alert5 = {
  type: "message",
  image: "images/Li.png",
  text: "Missed call from Li Wei",
};

const alerts = [alert1, alert2, alert3, alert4, alert5];

const message1 = {
  from: "Clinton Harris",
  time: "9:08 PM",
  subject: "Welcome to AHEA",
  text:
    "We’re so glad you are taking advantage of the benefits of AHEA membership. Enclosed please find…",
};

const message2 = {
  from: "Clinton Harris",
  time: "4:12 PM",
  subject: "Your syllabus is available.",
  text:
    "Your syllabus template for the global business course is currently attached for review.",
};

const message3 = {
  from: "Inez Campos",
  time: "2:23 PM",
  subject: "Academic Paper",
  text:
    "Hello Bradley. I found an academic paper that would support our collaboration – relatively new and incorporates the cloud.",
};

const message4 = {
  from: "Brittany Simms",
  time: "11:46 PM",
  subject: "Chapter 1 Questions",
  text:
    "Hi Dr. Dexter – Chapter 1 has me wondering about the implications of regulations globally as well.",
};

const message5 = {
  from: "Inez Campos",
  time: "8:59 PM",
  subject: "Review Questions",
  text:
    "Hello Bradley. Looking forward to consolidating our review questions into a central area.",
};

const messages = [message1, message2, message3, message4, message5];

class ShowTopMenu extends React.Component {
  render() {
    return (
      <>
        <section className="top">
          <ShowBadges badges={badges} />
          <ShowAlerts alerts={alerts} />
          <ShowMessages messages={messages} />
          <ShowProfileIcon
            firstName={this.props.owner.Person.firstName}
            image={this.props.owner.Person.iconImage}
          />

          <ShowSearchBox />
        </section>
      </>
    );
  }
}

export default ShowTopMenu;
