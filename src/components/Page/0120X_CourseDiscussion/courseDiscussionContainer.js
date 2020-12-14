import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  getStudentCourse,
  getCourseForumDiscussions,
} from "../../../repositories/CourseRepository.js";

import ShowCourseDiscussionHeader from "./showCourseDiscussionHeader.js";
import ShowDiscussionThread from "./showDiscussionThread.js";
import ShowListofDiscussions from "./showListofDiscussions.js";
import NewDiscussionThreadPost from "./newDisccusionThreadPost.js";

class CourseDiscussionContainer extends React.Component {
  render() {
    const { courseId } = this.props;

    //   this simulates call into LMS to get all discussions associated with a course. it's not clear whether this call should be in the component's render or in the constructor
    const discussions = getCourseForumDiscussions(Number(courseId));
    const course = getStudentCourse(Number(courseId));

    return (
      <>
        <ShowCourseDiscussionHeader course={course} />
        {/* 03IN_01207 gets called from links in the Discussion column shown in ShowListofDiscussions - called from 03IN_01206. Id=1 is 01207 and Id=2 is 01209  */}
        {/* 03IN_01208 gets called from the Reply link within 03IN_01207 (id=1) in Victoria's Post or within 03IN_01209 (03IN_01207 id=2) in Victoria's or Brittany's Post.  */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/03IN_01206">
                <ShowListofDiscussions
                  discussions={discussions}
                  course={course}
                />
              </Route>
              <Route exact path="/03IN_01208">
                <NewDiscussionThreadPost course={course} />
              </Route>
              {/* This route is used by both 03IN_01207 (discussionid=1) and 03IN_01209 (discussionid=2) */}
              {/* url contains discussion id as query string e.g /03IN_01207?discussionid=1 */}
              <Route exact path="/03IN_01207">
                <ShowDiscussionThread />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default CourseDiscussionContainer;
