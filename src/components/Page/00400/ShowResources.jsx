import React from "react";

const HOST = "http://localhost:3000"; // this needs to be consolidated into one file containing constants (or ENV vars)

const resourceTiles = [
  {
    title: "Getting Started",
    color: "asset-type-a",
    description:
      "Begin using the InspirED platform, and its solutions, with these quick tips and instructions.",
    icon: "icon-rocket-launch",
    viewMoreLink: "#0", // Should go to 00401
    manageLink: "#0", // Not sure where this should go.
  },
  {
    title: "Best Practices",
    color: "asset-type-b",
    description:
      "Discover techniques that will help you optimize InspirED to manage the academic lifecycle, collaborate with peers, and engage constituents.",
    icon: "icon-medal",
    viewMoreLink: "#0",
    manageLink: "#0",
  },
  {
    title: "Tutorials",
    color: "asset-type-d",
    description:
      "View these brief videos to get you up and running in InspirED.",
    icon: "icon-laptop",
    viewMoreLink: "#0",
    manageLink: "#0",
  },
  {
    title: "TEMPLATES",
    color: "asset-type-e",
    description:
      "Utilize AHEA's professionally-constructed templates to support curriculum development, campus programs, and strategic initiatives.",
    icon: "icon-clipboard-list-check",
    viewMoreLink: HOST + "/01IN_00409", // Should go to 00409
    manageLink: HOST + "/20IN_00413", // Not sure where this should go.
  },
];

function ShowResourceTile({ resourceTile }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="box box-border-radius box-shadow bg-white">
        <div
          className={
            "inner-wrap inner-wrap-flex asset " +
            resourceTile.color +
            " asset-type-a align-items-center"
          }
        >
          <div className="content-left">
            <span
              className={
                "icon-duotone " +
                resourceTile.icon +
                " icon-size-95 cl-primary-" +
                resourceTile.color +
                " cl-secondary-" +
                resourceTile.color
              }
            ></span>
          </div>
          <div className="content-right">
            <div className="box-top position-relative text-uppercase">
              <h2>{resourceTile.title}</h2>
            </div>
            <div className="box-middle">
              <p>{resourceTile.description}⁠</p>
            </div>
            <div className="box-bottom font-weight-bold">
              <p>
                <a
                  href={resourceTile.viewMoreLink}
                  className="btn btn-blue mr-3"
                >
                  View More
                </a>{" "}
                <a href={resourceTile.manageLink} className="btn btn-blue">
                  Manage
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShowResources() {
  return (
    <section className="wrap-resources">
      <div className="row row-custom sortable">
        {resourceTiles.map((resourceTile, index) => (
          <ShowResourceTile key={index} resourceTile={resourceTile} />
        ))}
      </div>
    </section>
  );
}
