import React from "react";
import CKEditor from "ckeditor4-react";

import { getForumDiscussion } from "../../../repositories/ForumDiscussionRepository.js";

class NewDiscussionThreadPost extends React.Component {
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
      newPost: {
        // This is a Post Class found in ForumDisussion.js
        postName: null,
        image: null,
        postDate: null,
        comment: null,
      },
    };

    this.updatePost = this.updatePost.bind(this);
  }

  updatePost = (event) => {
    // handles field form changes at this level of nested form components and then passes changes up to parent component
    //  sets local state first and then passes current stateful object up to parent to propogate changes

    // get user input change from the synthetic event;

    const value = event.editor.getData();
    let { newPost } = this.state;
    newPost["comment"] = value;
    this.setState({ newPost: newPost });
  };

  render() {
    const { course } = this.props;
    const { forumDiscussion, newPost } = this.state;
    return (
      <>
        <section className="row row-custom  mb-4">
          <div className="col-lg-12">
            <div className="box box-border-radius box-shadow bg-white w-100">
              <div className="pt-3 position-relative">
                <a href="#0" className="icon-setting icon-box">
                  <i className="fas fa-cog"></i>
                </a>
                <h3 className="color-orange font24 mb-3">General</h3>
                <h3 className="color-black font24 mb-3">{course.code}</h3>

                <div className="row">
                  <div className="col-md-2 mb-3"></div>
                  <div className="col-md-8 mb-3">
                    <input
                      type="text"
                      name=""
                      value={"Re: " + forumDiscussion.title}
                      className="w-100 pl-2 pr-2 pt-1 pb-1"
                      readOnly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 mb-3">
                    Summary{" "}
                    <i
                      className="fa fa-question-circle color-blue float-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="col-md-8 mb-3">
                    <CKEditor onChange={this.updatePost} data={newPost} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    {/* TBD on save call API to update the discussion with this new additional post */}
                    <a href="#0" className="btn btn-blue btn-w-100 mr-2">
                      Save
                    </a>
                    <a href="#0" className="btn btn-border">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default NewDiscussionThreadPost;
