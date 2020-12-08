import React from "react";

import "../../../assets/css/owl.carousel.css";
import "../../../assets/css/owl.theme.default.min.css";

class OwlCarousel extends React.Component {
  componentDidMount() {
    /* global $ */
    this.$tag = $(this.props.tag);
    this.$tag.owlCarousel({
      singleItem: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      loop: true,
      margin: 10,
      navigation: true,
      responsiveClass: true,
      responsive: {
        1000: {
          items: 1,
          nav: true,
          loop: true,
          margin: 20,
        },
        300: {
          items: 1,
          nav: true,
          loop: true,
          margin: 20,
        },
      },
    });

    this.$dots = $(".owl-dots");
    this.$dots.appendTo("#dots-number");
  }

  componentWillUnmount() {
    this.$tag.owlCarousel("destroy");
  }

  render() {
    return <div ref={(el) => (this.el = el)}></div>;
  }
}

class ShowAnnouncements extends React.Component {
  render() {
    const { disabled, announcements } = this.props;

    return (
      <>
        <section className="row row-custom announcements mb-4">
          <div className="col-lg-12">
            <div
              className={
                "box box-border-radius box-shadow bg-white w-100" +
                (disabled ? "  disabled" : "")
              }
            >
              <div className={disabled ? "disabled-overlay" : ""}></div>
              <h2 className="box-subhead icon-fa-box icon-bullhorn">
                Announcements
              </h2>

              <OwlCarousel tag={".owl-carousel"} />

              <div id="wrap-owl-announcement">
                <div id="owl-announcement" className="owl-carousel owl-theme">
                  {announcements.map((announcement, index) => (
                    <div key={index} className="item">
                      <p>
                        {announcement.msg}{" "}
                        <a href={announcement.link}>Learn More</a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="dots-number"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ShowAnnouncements;
