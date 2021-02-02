import React from "react";

function ShowCourseDiscussionHeader(props) {
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

export default ShowCourseDiscussionHeader;
