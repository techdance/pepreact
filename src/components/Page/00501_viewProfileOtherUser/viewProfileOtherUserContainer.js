import React from "react";

import ShowCollaborationInterests from "./showCollaborationInterests.js";
import ShowCredentials from "./showCredentials.js";
import ShowInstitutionProfle from "./showInstitutionProfile.js";
import ShowPersonalInformation from "./showPersonalInformation.js";
import ShowCommunicationPreferences from "./showCommunicationPreferences.js";
import ShowProfessionalBio from "./showProfessionalBio.js";

//  TLM: constants below represent sample DB records.

const professor = {
  name: "Dr. Bradley Dexter",
  title: "Professor",
  image: "./images/bradley.png",
  communicationPreferences: ["English", "Spanish"],
  emailAddress: "bdexter@ahea.edu",
  phoneNumbers: ["+1 555 432 1100", "+1 555 432 1122"],
  url: "https://www.ahea.edu/about-ahea/college-of-business/bdexter",
  introVideo: "./images/Bradley-video.png",
  disciplines: ["Business"],
  areasOfExpertise: [
    "Business Analytics & Intelligence",
    "Business Ethics",
    "International​ Operations Research & Management",
  ],
  internationalExperience: "1-2 Years of International Experience",
  bio:
    "Divides professional time between teaching undergraduate courses in both classroom and online settings, and providing private consulting specializing in the growt and globalization of small businesses. I also serve on the editorial board of  <em>The Academy of Management Journal</em>.",
  personalMessage:
    '"Success in business requires training and discipline and hard work." David Rockefeller',
  cvLink: "#",
};

const institutionProfile = {
  name: "AHEA University, Iowa City Campus",
  type: "4-year Institution",
  location: "Iowa City, IA USA",
  continent: "North America",
  calendar: "Semester",
  school: "College of Business",
};

const credentials = {
  educationLevel: "Phd",
  professionalMemberships: [
    { name: "Academy of International Business", link: "#" },
    { name: "American Management Association", link: "#" },
  ],
  links: ["#", "#"],
  certificates: ["Business Data Analytics"],
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
};

// array of db records passed to ShowCollaborationInterests class component
const areaofinterest_list = [
  areaofinterest_1,
  areaofinterest_2,
  areaofinterest_3,
];

class ViewProfileOtherUserContainer extends React.Component {
  render() {
    return (
      <>
        <section class="wrap-profile">
          <div class="row row-custom ">
            <div class="col-lg-6">
              <div class="row row-custom sortable">
                <ShowPersonalInformation professor={professor} />
                <ShowCommunicationPreferences professor={professor} />
                <ShowProfessionalBio professor={professor} />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row row-custom sortable">
                {
                  <ShowInstitutionProfle
                    institutionProfile={institutionProfile}
                  />
                }
                {<ShowCredentials credentials={credentials} />}
                {
                  <ShowCollaborationInterests
                    areaofinterest_list={areaofinterest_list}
                  />
                }
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ViewProfileOtherUserContainer;
