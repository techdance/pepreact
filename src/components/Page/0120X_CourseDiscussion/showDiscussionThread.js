import React from "react";

import { getForumDiscussion } from "../../../repositories/ForumDiscussionRepository.js";

function MsgFooter(props) {
  const { index } = props;

  const url = new URL(document.location.href);
  const host = url.host;

  if (!index) {
    return (
      <>
        <a href="#0">Permalink</a> | <a href="#0">Reply</a>
      </>
    );
  } else {
    return (
      <>
        <a href="#0">Permalink</a> |<a href="#0">Show Parent</a> |
        <a href="#0">Edit</a> |<a href="#0">Remove</a> |
        <a
          href={host + "/03IN_01208?discussionid=1"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reply
        </a>{" "}
        |<a href="#0">Export to Portfolio</a>
      </>
    );
  }
}

function MsgDate(props) {
  const { index, post } = props;

  if (!index) {
    return post.postDate;
  } else {
    return (
      <>
        By <a href="#0">{post.postName}</a> - {post.postDate}{" "}
      </>
    );
  }
}

class ShowDiscussionThread extends React.Component {
  constructor(props) {
    super(props);
    let url = new URL(document.location.href);
    const discussionId = url.searchParams.get("discussionid");

    if (discussionId === null) {
      //  need to call homepage or something, url should not be called without courseid and discussionid
    }

    // not sure if this should be in constructor or in the regular render method
    let forumDiscussion = getForumDiscussion(Number(discussionId));
    this.state = {
      forumDiscussion: forumDiscussion,
    };
  }

  render() {
    const { forumDiscussion } = this.state;

    return (
      <>
        <section className="row row-custom  mb-4">
          <div className="col-lg-12">
            <div className="box box-border-radius box-shadow bg-white w-100">
              <h2 className="box-subhead pl-0 font30 mw-100 mb-2">
                {forumDiscussion.title}
              </h2>
              <select className="mb-3 form-control select-w">
                <option>Display replies in nested form</option>
              </select>

              {forumDiscussion.posts.map((post, index) => (
                <div
                  className={
                    "wrap-message " +
                    (!index ? "" : "margin-left-" + index * 30)
                  }
                >
                  <div className="msg-header">
                    <div className="msg-image">
                      <img src={post.image} width="53" alt={post.postName} />
                    </div>
                    <div className="msg-title">
                      <h4>{forumDiscussion.title}</h4>
                      <div className="msg-date">
                        <MsgDate index={index} post={post} />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="msg-body">
                    <p>{post.comment}</p>
                  </div>
                  <div className="msg-footer">
                    <MsgFooter index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ShowDiscussionThread;
