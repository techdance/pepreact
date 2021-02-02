import React from "react";

export default function ShowListofDiscussions(props) {
  const { discussions, course } = props;
  const url = new URL(document.location.href);
  const host = url.host;

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
                      <td className="discussion">
                        <a
                          href={
                            host + "/03IN_01207?discussionid=" + (index + 1)
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {discussion.title}
                        </a>
                      </td>
                      <td valign="middle">
                        <a href="#0">
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
}
