import React from "react";

class CalendarSelector extends React.Component {
  // javascript plugin that renders knob. See https://github.com/aterrien/jQuery-Knob

  componentDidMount() {
    /* global $ */
    this.$tag = $(this.props.tag);
    this.$tag.datepicker({
      dateFormat: "yy-mm-dd",
    });
  }

  componentWillUnmount() {
    this.$tag.datepicker("destroy");
  }

  render() {
    return <div ref={(el) => (this.el = el)}></div>;
  }
}

export default CalendarSelector;
