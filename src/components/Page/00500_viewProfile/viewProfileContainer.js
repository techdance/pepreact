import React from "react";

import ShowCollaborationInterests from "../Shared//showCollaborationInterests.js";

import ShowCredentials from "../Shared/showCredentials.js";
import ShowInstitutionProfle from "../Shared/showInstitutionProfile.js";
import ShowPersonalInformation from "../Shared/showPersonalInformation.js";
import ShowCommunicationPreferences from "../Shared/showCommunicationPreferences.js";
import ShowProfessionalBio from "../Shared/showProfessionalBio.js";

//  TLM: constants below represent sample DB records.


const professor = {
  name: "Dr. Gordon Stanley",
  title: "Senior Director of Administrative Systems",
  image: "./images/Gordon.png",
  communicationPreferences: ["English", "NA"],
  emailAddress: "gstanley@ahea.edu",
  phoneNumbers: ["+1 555-432-7788", "+1 555-432-1100"],
  url: "https://www.ahea.edu/about-ahea/provost-office/provost",
  introVideo: "./images/Gordon-video.png",
  disciplines: ["Business"],
  areasOfExpertise: [
    "Institutional Research",
    "Graduate Research Funding",
    "Accrediting Standards Planning and Execution",
  ],
  internationalExperience: "",
  bio:
    "Dr. Stanley began his tenure as AHEA University's provost on July 1, 2012, following a 24-plus year career at Center State University, where he served as the George and Sadye Joy Raye Professor of Economics and editor of the Journal of Small Public Universities. From 2000-2005 Dr. Stanley served as dean of the College of Business and Entrepreneurialship, Central State's largest academic unit with more than 400 faculty and 5,500 students. He also chaired the economics department from 1995 to 1999 and directed the honors program from 1999 to 2005. An honors graduate in economics from the University of North Dakota, Dr. Stanley received his Ph.D. from the same institution, specializing in Global Affairs.",
  personalMessage:
    '"The goal of education is the advancement of knowledge and the dissemination of truth." -John Fitzgerald Kennedy',
  cvLink: "#",
  school: "Enterprise Information Technology Services",
};

const institutionProfile = {
  name: "AHEA University, Iowa City Campus",
  type: "4-year Institution",
  location: "Iowa City, IA USA",
  continent: "North America",
  calendar: "Semester",
};

const credentials = {
  educationLevel: "Phd",
  professionalMemberships: [
    { name: "Association of College Administration Professionals (ACAP)", link: "#" },
    { name: "Council for the Advancement of Standards in Higher Education (CAS)", link: "#" },
    { name: "NAFSA: Association of International Educators", link: "#" },
  ],
  links: ["#", "#"],
  certificates: ["Internationalization of Higher Education"],
};

const areaofinterest_1 = {
  projectType: "Research",
  description:
    "I am interested in finding one or two partners to conduct a longitudinal study on the impact of Brexit of the EU and what changes will take place in the economy as a result.",
  discipline: "Economic",
  deliveryMethod: "Online",
  collaborationType: "Global",
  region: "Europe",
  programLength: "Semester",
  preferredLanguage: "English",
  credits: "4",
  programLevel: "Undergraduate",
  dateRange: "Today 2020",
  created: true,
};

const areaofinterest_2 = {
  projectType: "Academic Journal",
  description:
    "I am looking for partners to help author an article on the impact of mobile technology on business acumen. There is a lot of literature on international business acumen, but nothing has been updated since the onset of our 24/7 connectivity with mobile devices.",
  discipline: "Business",
  deliveryMethod: "Online",
  collaborationType: "Global",
  region: "All",
  programLength: "Semester",
  preferredLanguage: "English",
  credits: "4",
  programLevel: "Undergraduate",
  dateRange: "Today 2020",
  created: true,
};

const areaofinterest_3 = {
  projectType: "Course Development",
  description:
    "I would like to co-develop a business ethics class focused on multinational corporations and how ethics may or may not conflict with the culture in countries where MNCs are located.",
  discipline: "Business",
  deliveryMethod: "Online",
  collaborationType: "Global",
  region: "All",
  programLength: "Semester",
  preferredLanguage: "English",
  credits: "3",
  programLevel: "Undergraduate",
  dateRange: "Today 2020",
  created: true,
};

// array of db records passed to ShowCollaborationInterests class component
const areaofinterest_list = [
  areaofinterest_1,
  areaofinterest_2,
  areaofinterest_3,
];

// sameUser flag is used to distinguish when those component are viewed by the page owner or not.
//  sameUser = "true" when page owner and profile owner are the same person. Otherwise, sameUser = "false"
//  for example, in page 00501, page owner and profile owner are two different people.

class ViewProfileContainer extends React.Component {
  render() {
    return (
      <>
        <section class="wrap-profile">
          <div class="row row-custom sortable">
            <ShowPersonalInformation professor={professor} sameUser="true" />
            <ShowInstitutionProfle
              institutionProfile={institutionProfile}
            />
            <ShowCommunicationPreferences professor={professor} />
            <ShowCredentials credentials={credentials} />
            <ShowProfessionalBio professor={professor} />
            <ShowCollaborationInterests areaofinterest_list={areaofinterest_list} />
          </div>

        </section>
      </>
    );
  }
}

export default ViewProfileContainer;
