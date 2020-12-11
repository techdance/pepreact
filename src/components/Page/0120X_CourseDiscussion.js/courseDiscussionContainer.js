import React from "react";

import {
  getStudentCourse,
  getCourseDiscussions,
} from "../../../repositories/CourseRepository.js";

function RenderHeader(props) {
  const { course } = props;

  return (
    <section className="row row-custom announcements mb-4">
      <div className="col-lg-12">
        <div className="box box-border-radius box-shadow bg-white w-100">
          <h2 className="box-subhead pl-0 font30 mw-100 mb-2">
            {course.code + ": " + course.name}
          </h2>
          <h3 className="color-orange font24 mb-3">
            {"Location: " + (course.location.online ? "Online" : "InPerson")}
          </h3>
          <h5 className="color-grey font18 font-weight-bold">{course.term}</h5>
        </div>
      </div>
    </section>
  );
}

class CourseDiscussionContainer extends React.Component {
  constructor(props) {
    super(props);

    //   this simulates call into LMS to get all discussions associated with a course. it's not clear whether this call should be in the component's render or in the constructor
    let discussions = getCourseDiscussions(Number(this.props.courseId));

    const makeState = {
      discussions: discussions,
      screen: this.props.screen,
    };

    this.state = makeState;

    this.renderListofDiscussions = this.renderListofDiscussions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({ screen: "2" });
    console.log(this.state);
  };

  renderListofDiscussions = (course) => {
    let { discussions } = this.state;

    return (
      <section className="three-columns">
        <div className="row row-custom mb-4 sortable">
          <div className="col-lg-12 mb-4">
            <div className="box box-border-radius box-shadow bg-white height-auto">
              <h2 className="box-subhead pl-0 font30 mw-100 mb-2 color-orange">
                {"Join in the " + course.name + " Discussions?"}
              </h2>
              <h3 className="color-grey-2 mb-3">
                Share your thoughts, ideas, and concerns here. You must make at
                least two posts.
              </h3>
              <a
                href="#0"
                className="btn btn-blue btn-w-100 font18"
                style={{ lineHeight: "1 !important" }}
              >
                Add
              </a>

              <div className="table-wrapper-scroll-x my-custom-scrollbar">
                <table
                  width="100%"
                  className="table-course"
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th>Discussion</th>
                      <th>Started By</th>
                      <th>Created</th>
                      <th>Last Post</th>
                      <th>Replies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {discussions.map((discussion, index) => (
                      <tr
                        key={index}
                        className={{ 1: "odd", 2: "even" }[index % 2]}
                      >
                        <td className="star">
                          <i className="far fa-star"></i>
                        </td>
                        <td className="discussion">{discussion.title}</td>
                        <td valign="middle">
                          <a href="#0" onClick={this.handleClick}>
                            <img
                              width="50"
                              src={discussion.startedByImage}
                              alt=""
                            />{" "}
                            {discussion.startedBy}
                          </a>
                        </td>
                        <td>{discussion.createdTimeStamp} </td>
                        <td>
                          <div className="td-img">
                            <img
                              width="50"
                              src={discussion.lastPostImage}
                              alt=""
                            />
                          </div>
                          <div className="td-text">
                            <a href="#0">{discussion.lastPostName} </a>
                            <br />
                            {discussion.lastPostTimeStamp}
                          </div>
                        </td>
                        <td>{discussion.numReplies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    const { courseId } = this.props;

    const { screen } = this.state;

    const course = getStudentCourse(Number(courseId));

    return (
      <>
        <RenderHeader course={course} />
        {screen === 1 && this.renderListofDiscussions(course)}
      </>
    );
  }
}

export default CourseDiscussionContainer;
