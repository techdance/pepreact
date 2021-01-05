import React from "react";

export default class Flexslider extends React.Component {
  componentDidMount() {
    /* global $ */
    this.$el = $(this.el);
    this.$el.flexslider({
      animation: "fade",
      slideshow: false,
      animationLoop: false,
      startAt: 0,
    });
  }

  componentWillUnmount() {
    this.$el.flexsider("destroy");
  }

  render() {
    return (
      <div>
        <div className="flexslider mb-4" ref={(el) => (this.el = el)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
