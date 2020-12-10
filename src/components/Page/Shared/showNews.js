import React from "react";

import { news } from "../../../data/news.js";

class ShowNews extends React.Component {
  render() {
    const newsTile = {
      title: "News",
      icon: "icon-regular icon-signal-stream",
    };
    return (
      <>
        <div className="col-lg-3 mb-4">
          <div className="news box box-border-radius box-shadow bg-white">
            <div className="inner-wrap">
              <div className="box-top position-relative">
                <h2 className="box-subhead">
                  <span className={newsTile.icon}></span>
                  {newsTile.title}
                </h2>
                <a href="#0" className="icon-setting icon-box">
                  <span className="icon-solid fa-cog"></span>
                </a>
                <div className="toltip2 menu-toltip toltip-overlay any-toltip">
                  <ul>
                    <li>
                      <a href="#0">More Mews</a>
                    </li>
                    <li>
                      <a href="#0" className="btn-remove">
                        Remove
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-middle">
              {news.map((article, index) => (
                <div key={index} className="item">
                  <a href={article.sourceLink}>
                    {article.source}
                    <span className="details">{article.title}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShowNews;
