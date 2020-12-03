import React from "react";

function RenderHeader(props) {
  const { course, location, term } = props;

  return (
    <section className="row row-custom announcements mb-4">
      <div className="col-lg-12">
        <div className="box box-border-radius box-shadow bg-white w-100">
          <h2 className="box-subhead pl-0 font30 mw-100 mb-2">
            {course.code + ": " + course.name}
          </h2>
          <h3 className="color-orange font24 mb-3">
            {"Location: " + location}
          </h3>
          <h5 className="color-grey font18 font-weight-bold">{term}</h5>
        </div>
      </div>
    </section>
  );
}

class CourseDiscussionContainer extends React.Component {
  constructor(props) {
    //   this simulates call into LMS to get all discussions associated with a course.

    let discussions = [
      {
        title: "Are ethical and legal the same thing",
        startedBy: "Bradley Dexter",
        startedByImage: "images/bradley.png",
        createdTimeStamp: "2020-03-06 10:02 AM",
        lastPostName: "Victoria Banks",
        lastPostImage: "images/Victoria.png",
        lastPostTimeStamp: "2020-03-09 12:17 PM",
        numReplies: "1",
      },
      {
        title: "Lab 1: Introducing myself",
        startedBy: "Sean Johnson",
        startedByImage: "images/Sean.png",
        createdTimeStamp: "2020-03-07 3:17 PM",
        lastPostName: "Timothy Parker",
        lastPostImage: "images/Tim.png",
        lastPostTimeStamp: "2020-03-04 8:03 AM",
        numReplies: "6",
      },
      {
        title: "Test message - hi everyone",
        startedBy: "William Sandler",
        startedByImage: "images/William.png",
        createdTimeStamp: "2020-03-03 11:46 AM",
        lastPostName: "Merrill Winston",
        lastPostImage: "images/Merrill.png",
        lastPostTimeStamp: "2020-03-03 1:37 PM",
        numReplies: "2",
      },

      {
        title: "Welcome",
        startedBy: "Bradley Dexter",
        startedByImage: "images/bradley.png",
        createdTimeStamp: "2020-03-02 2:13 PM",
        lastPostName: "Jessica Thompson",
        lastPostImage: "images/Jessica.png",
        lastPostTimeStamp: "2020-03-04 6:12 PM",
        numReplies: "12",
      },
    ];

    super(props);

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
                  cellpadding="0"
                  cellspacing="0"
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
    const { course, location, term } = this.props;

    const { screen } = this.state;

    return (
      <>
        <RenderHeader course={course} location={location} term={term} />
        {screen === 1 && this.renderListofDiscussions(course)}
      </>
    );
  }
}

export default CourseDiscussionContainer;
