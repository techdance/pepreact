import React from "react";

export default class SlideToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    /* global $ */
    this.$el = $(this.el);
    this.$el.on("click", this.handleClick);
  }
  componentWillUnmount() {
    this.$el.off("click", this.handleClick);
  }

  handleClick(e) {
    this.$el.find(".dropdown_week").slideToggle(300);
    this.$el.find(".btn-week").toggleClass("show");
  }

  render() {
    return <div ref={(el) => (this.el = el)}>{this.props.children}</div>;
  }
}
