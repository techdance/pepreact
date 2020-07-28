import React from "react";
import Select from "react-select";

// import EditInstitutionOverview from "./editInstitutionOverview.js";

var institution = {
  Overview: {
    description1:
      "AHEA University (AU) is a private, not-for-profit institution, offering an array of innovative academic programs that complement on-campus educational opportunities and resources with accessible distance learning programs to foster academic excellence, intellectual inquiry, leadership, research, and commitment to community through engagement of students and faculty.",
    description2:
      "AU has always had an inclusive and unique approach to education. It offers a personal, nurturing atmosphere. With so many traditional and non-traditional learning opportunities, AU is the ideal place for students of any age to reach their potential.",
    foundedYear: "1997",
    academicCalendar: "Semester",
    type: ["Private", "Not-for-Profit", "Coed"],
    primaryLanguage: "English",
    otherLanguages: ["Spanish", "Mandarin"],
    president: "Sean Gladwell",
    employees: "86",
    alumni: "20,783",
    image: "images/AHEA.png",
    facebookLink: "#0",
    twitterLink: "#0",
    instagramLink: "#0",
    linkedinLink: "#0",
    youtubeLink: "#0",
  },
  ContactInfo: {
    phone: "+1 800 902 5555",
    fax: "+1 561 555 1234",
    url: "https://www.ahea.edu",
    email: "info@ahea.edu",
    address: {
      name1: "AHEA University",
      name2: "Main Office",
      address1: "101 N. Federal Hwy",
      address2: "Suite 600",
      city: "Boca Raton",
      state: "FL",
      country: "USA",
      zipcode: "33432",
      continent: "North America",
    },
  },
  StudentBodyInfo: {
    asof: "Fall 2020",
    updated: "2020-03-16",
    total: "6,793",
    undergraduate: "4,912",
    graduate: "1,881",
    female: {
      number: "3,610",
      percent: "53",
    },
    male: {
      number: "3,173",
      percent: "46.7",
    },
    other: {
      number: "10",
      percent: "0.3",
    },
    fullTime: "5911",
    partTime: "882",
    inState: "2873",
    outofState: "3100",
    international: "820",
  },
  FacultyInfo: {
    asof: "Fall 2020",
    updated: "2020-03-16",
    fullTime: "364",
    studentFacultyRatio: "24:1",
    highestDegreeField: {
      number: "236",
      percent: "84.9",
    },
    averageUndergraduateClassSize: "20",
  },

  Academic: {
    asof: "Fall 2020",
    updated: "2020-03-16",
    collegesAndSchools: [
      "College of Arts and Sciences",
      "College of Business",
      "Henry C. Lee College of Criminal Justice and Forensic Science",
      "School of Health Sciences",
      "Tagliatela College of Engineering",
    ],
    degreePrograms: {
      undergraduate: "33",
      graduate: "55",
    },

    degreesGranted: {
      Year: "2018-2019",
      Associate: 38,
      Bachelor: 1189,
      Master: 731,
      Doctorate: 13,
    },

    accreditations: [
      "Counsel for the Accreditation of Educator Preparation",
      "Accreditation Board for Engineering and Technology (ABET)",
      "ANSI National Accreditation Board Certified (ANAB)",
      "Commission on English Language Accreditation (CEA)",
    ],
    recognitions: [
      "Leah Meyer Austin Award (2019)",
      "Top Producer of Fulbright U.S. Students (2019)",
      "Institution of the Year, Dive Awards (2017)",
      "Sustainability and Sustainable Development Award, AASCU (2016)",
    ],
    degreesOffered: [
      "Associate",
      "Undergraduate",
      "Graduate",
      "Doctorate, Criminal Justice",
      "Dual Degree Programs",
    ],
  },
};

const testlanguageList = [
  { value: "Afrikanns", label: "Afrikanns" },
  { value: "Albanian", label: "Albanian" },
  { value: "Arabic", label: "Arabic" },
  { value: "Armenian", label: "Armenian" },
  { value: "Basque", label: "Basque" },
  { value: "Bengali", label: "Bengali" },
  { value: "Bulgarian", label: "Bulgarian" },
  { value: "Catalan", label: "Catalan" },
  { value: "Cambodian", label: "Cambodian" },
  { value: "Chinese (Mandarin)", label: "Chinese (Mandarin)" },
  { value: "Croation", label: "Croation" },
  { value: "Czech", label: "Czech" },
  { value: "Danish", label: "Danish" },
  { value: "Dutch", label: "Dutch" },
  { value: "English", label: "English" },
  { value: "Estonian", label: "Estonian" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finnish", label: "Finnish" },
  { value: "French", label: "French" },
  { value: "Georgian", label: "Georgian" },
  { value: "German", label: "German" },
  { value: "Greek", label: "Greek" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Hebrew", label: "Hebrew" },
  { value: "Hindi", label: "Hindi" },
  { value: "Hungarian", label: "Hungarian" },
  { value: "Icelandic", label: "Icelandic" },
  { value: "Indonesian", label: "Indonesian" },
  { value: "Irish", label: "Irish" },
  { value: "Italian", label: "Italian" },
  { value: "Japanese", label: "Japanese" },
  { value: "Javanese", label: "Javanese" },
  { value: "Korean", label: "Korean" },
  { value: "Latin", label: "Latin" },
  { value: "Latvian", label: "Latvian" },
  { value: "Lithuanian", label: "Lithuanian" },
  { value: "Macedonian", label: "Macedonian" },
  { value: "Malay", label: "Malay" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Maltese", label: "Maltese" },
  { value: "Maori", label: "Maori" },
  { value: "Marathi", label: "Marathi" },
  { value: "Mongolian", label: "Mongolian" },
  { value: "Nepali", label: "Nepali" },
  { value: "Norwegian", label: "Norwegian" },
  { value: "Persian", label: "Persian" },
  { value: "Polish", label: "Polish" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Quechua", label: "Quechua" },
  { value: "Romanian", label: "Romanian" },
  { value: "Russian", label: "Russian" },
  { value: "Samoan", label: "Samoan" },
  { value: "Serbian", label: "Serbian" },
  { value: "Slovak", label: "Slovak" },
  { value: "Slovenian", label: "Slovenian" },
  { value: "Spanish", label: "Spanish" },
  { value: "Swahili", label: "Swahili" },
  { value: "Swedish ", label: "Swedish " },
  { value: "Tamil", label: "Tamil" },
  { value: "Tatar", label: "Tatar" },
  { value: "Telugu", label: "Telugu" },
  { value: "Thai", label: "Thai" },
  { value: "Tibetan", label: "Tibetan" },
  { value: "Tonga", label: "Tonga" },
  { value: "Turkish", label: "Turkish" },
  { value: "Ukranian", label: "Ukranian" },
  { value: "Urdu", label: "Urdu" },
  { value: "Uzbek", label: "Uzbek" },
  { value: "Vietnamese", label: "Vietnamese" },
  { value: "Welsh", label: "Welsh" },
  { value: "Xhosa", label: "Xhosa" },
];

class EditAddressInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.address;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes
    const { name, value } = event.target;

    //  set local state
    let address = this.state;
    address[name] = value;
    this.setState({ address });

    // pass current state up to parent to propogate changes
    this.props.onChange("address", address);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let address = this.state;
    address[field] = value;
    this.setState({ address });

    // pass current state up to parent component
    this.props.onChange("address", address);
  };

  render() {
    const { name1 } = this.state;

    return (
      <>
        <label htmlFor="contactInfo">Address</label>
        <input
          type="text"
          name="name1"
          id="name1"
          value={name1}
          onChange={this.handleChange}
        />
        <div className="col-md-12">
          <button href="#0" className="btn btn-blue" type="submit">
            Save
          </button>
        </div>
      </>
    );
  }
}

class EditContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.ContactInfo;

    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let ContactInfo = this.state;
    ContactInfo[name] = value;
    this.setState({ ContactInfo });

    /// pass current state up to parent to propogate changes
    this.props.onChange("ContactInfo", ContactInfo);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state and then passes current state up to parent component

    //  update local state wth changes from child component
    let ContactInfo = this.state;
    ContactInfo[field] = value;
    // you could pass the event here but also null if it is not necessary nor useful
    this.props.onChange("ContactInfo", ContactInfo);
  };

  render() {
    const { phone, address } = this.state;

    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="contactInfo">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <EditAddressInfo address={address} onChange={this.passChangeUp} />
        </form>
      </>
    );
  }
}

class InstitutionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = institution;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.passChangeUp = this.passChangeUp.bind(this);
  }

  handleChange = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;
    const { name, value } = event.target;

    //  set local state
    let institution = this.state;
    institution[name] = value;
    this.setState({ institution });

    // This is the parent component so instead of passing change up just update the parent object state.
    this.passChangeUp("institution", institution);
  };

  passChangeUp = (field, value) => {
    // receives from child component any state changes at their level.
    //  updates the local state. Since this is the parent component, we're done.

    //  update local state wth changes from child component
    let institution = this.state;
    institution[field] = value;
    this.setState({ institution });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submit current state");

    // this.state contains the current revised version of the institution object so should store to institution data.
  };

  render() {
    const { Overview, ContactInfo } = this.state;

    const otherLanguages = Overview.otherLanguages;
    let testotherLanguages = [];

    otherLanguages.map((otherLanguage, index) =>
      testotherLanguages.push({
        value: otherLanguage,
        label: otherLanguage,
      })
    );

    console.log(testotherLanguages);

    return (
      <>
        {/* <EditInstitutionOverview Overview={Overview} /> */}
        <EditContactInfo
          ContactInfo={ContactInfo}
          onChange={this.passChangeUp}
          onSubmit={this.handleSubmit}
        />

        <div className="form-group mb-2">
          <label>Other Languages</label>
          {/* <select
            multiple={true}
            value={Overview.otherLanguages}
            className="input select"
            // onChange={this.handleChange}
          >
            {languagelist.map((language, index) => (
              <option key={index}>{language}</option>
            ))}
          </select> */}

          <Select
            defaultValue={testotherLanguages}
            isMulti
            name="otherLanguages"
            options={testlanguageList}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </>
    );
  }
}

export default InstitutionForm;
