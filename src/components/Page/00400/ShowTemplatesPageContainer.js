import React, { useEffect, useRef, useState } from "react";
import {
  getTemplateBookmarks,
  getTemplateCourseDevelopment,
} from "../../../repositories/TemplateRepository.js";

//  using jQuery
/* global $ */

export default function ShowTemplatesPageContainer() {
  const bookmarks = getTemplateBookmarks();
  const courseDevelopments = getTemplateCourseDevelopment();

  // manages which template type is selected from the menu shown in IsotopeFilter component
  const [selected, setSelected] = useState("*");
  const onClick = (name) => {
    switch (name) {
      case "*":
      case "bookmarks":
      case "course-development":
        setSelected(name);
        break;
      default:
    }
  };

  const isotopeContainer = useRef(null);

  return (
    <section onClick={({ target: { name } }) => onClick(name)}>
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="box bg-white box-border-radius">
            <h1 className="headline color-black mb-3">Templates</h1>

            <IsotopeFilter selected={selected} />
          </div>
        </div>
      </div>
      <IsotopeContainer containerRef={isotopeContainer} selected={selected}>
        {bookmarks.map((bookmark, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-sm-6 pb-3 bookmarks"
          >
            <div className="theme-box">
              <img
                src={bookmark.coverImage}
                alt="Template"
                className="img-responsive"
              />
              <div className="theme-info pt-2">
                <div className="clearfix">
                  <h2>
                    <span className="icon-regular icon-bullhorn"></span>{" "}
                    Bookmarks
                  </h2>
                </div>
                <p>
                  <strong className="color-black block">
                    {bookmark.title}
                  </strong>
                  {bookmark.description}
                </p>
                <div className="buttons d-flex">
                  <a href="#0" className="card-btn mr-05">
                    <i className="fas fa-chevron-square-down"></i> Download
                  </a>
                  <a href="#0" className="card-btn ml-05">
                    <i className="fas fa-bookmark"></i> Bookmark
                  </a>
                </div>
              </div>
              <div
                className="content-details fadeIn-bottom"
                style={{
                  background: "url(" + bookmark.coverImage + ") no-repeat",
                }}
              >
                <div className="content-overlay"></div>
                <div className="inner">
                  <h3 className="content-title">{bookmark.title}</h3>
                  <h2>
                    <span className="icon-regular icon-bullhorn"></span>{" "}
                    Bookmarks
                  </h2>

                  <div className="buttons d-flex">
                    <a href="#0" className="mr-2">
                      <i className="fas fa-chevron-square-down"></i> Download
                    </a>
                    <a href="#0" className="ml-2">
                      <i className="fas fa-bookmark"></i> Bookmark
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {courseDevelopments.map((courseDevelopment, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-4 col-sm-6 pb-3 course-development"
          >
            <div className="theme-box">
              <img
                src={courseDevelopment.coverImage}
                alt="Template"
                className="img-responsive"
              />
              <div className="theme-info pt-2">
                <div className="clearfix">
                  <h2>
                    <span className="icon-regular icon-tasks"></span> Course
                    Development
                  </h2>
                </div>
                <p>
                  <strong className="color-black block">
                    {courseDevelopment.title}
                  </strong>
                  {courseDevelopment.description}
                </p>
                <div className="buttons d-flex">
                  <a href="#0" className="card-btn mr-05">
                    <i className="fas fa-chevron-square-down"></i> Download
                  </a>
                  <a href="#0" className="card-btn ml-05">
                    <i className="far fa-bookmark"></i> Bookmark
                  </a>
                </div>
              </div>
              <div
                className="content-details fadeIn-bottom"
                style={{
                  background:
                    "url(" + courseDevelopment.coverImage + ") no-repeat",
                }}
              >
                <div className="content-overlay"></div>
                <div className="inner">
                  <h3 className="content-title">{courseDevelopment.title}</h3>
                  <h2>
                    <span className="icon-regular icon-tasks"></span> Course
                    Development
                  </h2>

                  <div className="buttons d-flex">
                    <a href="#0" className="mr-2">
                      <i className="fas fa-chevron-square-down"></i> Download
                    </a>
                    <a href="#0" className="ml-2">
                      <i className="far fa-bookmark"></i> Bookmark
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </IsotopeContainer>
    </section>
  );
}

function IsotopeFilter({ selected }) {
  return (
    <div
      className="isotopeFilter"
      // onClick={({ target: { name } }) => onClick(name)}
    >
      <a
        href="#0"
        data-filter="*"
        className={selected === "*" ? "current" : ""}
        name="*"
      >
        All
      </a>
      <a
        href="#0"
        data-filter=".bookmarks"
        className={selected === "bookmarks" ? "current" : ""}
        name="bookmarks"
      >
        Bookmarks
      </a>
      <a
        href="#0"
        data-filter=".course-development"
        className={selected === "course-development" ? "current" : ""}
        name="course-development"
      >
        Course Development
      </a>
    </div>
  );
}

function IsotopeContainer(props) {
  const { selected } = props;
  const isotopeContainer = useRef(null);

  // manages which template tiles are shown based on current menu selection using animation from isotope
  useEffect(() => {
    const $isotopeContainer = $(isotopeContainer.current);
    const selector = selected === "*" ? "*" : "." + selected;

    $isotopeContainer.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  });

  return (
    <div
      ref={isotopeContainer}
      className="row row-custom-2 isotopeContainer themelist"
    >
      {props.children}
    </div>
  );
}
