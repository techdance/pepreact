import React from "react";

import ShowBreadCrumb from "./Navigation/showBreadCrumb.js";
import ShowTopMenu from "./Navigation/showTopMenu.js";
import ShowSideBarMenu from "./Navigation/showSideBarMenu.js";
import ShowMobileSideBarMenu from "./Navigation/showMobileSideBarMenu.js";
import ShowTowerLogo from "./Navigation/showTowerLogo.js";

import CourseDiscussionContainer from "./Page/0120X_CourseDiscussion.js/courseDiscussionContainer.js";

import { student, menuItems } from "../data/student.js";

const breadCrumbList = [
  "Home",
  "My Courses",
  "Ethics in Multinational Management",
  "Discussion",
];

class ExampleBrittany0120XPage extends React.Component {
  render() {
    const { pageOwner, alerts, messages, badges, courses } = student;

    // this component knows which course we are in (it's also indicated in bread crumb list)
    // as a result, the menus (and menu objects and breadcrumb list) belong higher up and course is better passed in props.
    let course = courses[1];

    return (
      <>
        <body className="bg-grey-popup">
          <div id="menu-top-responsive" className="">
            <ShowTowerLogo />
          </div>
          <ShowMobileSideBarMenu />
          <div id="container">
            <ShowSideBarMenu
              owner={pageOwner}
              menuItems={menuItems}
              activeMenuItem={"My Courses"}
            />
            <div id="content" className="">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <ShowTopMenu
                      owner={pageOwner}
                      alerts={alerts}
                      messages={messages}
                      badges={badges}
                    />
                    <ShowBreadCrumb breadCrumbList={breadCrumbList} />

                    {/* current course object does not contain location or term */}
                    <CourseDiscussionContainer
                      course={course}
                      location={"Online"}
                      term={"Spring 2020"}
                      screen={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default ExampleBrittany0120XPage;
