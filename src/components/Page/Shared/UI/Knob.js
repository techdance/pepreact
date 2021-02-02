import React from "react";

class Knob extends React.Component {
  // javascript plugin that renders knob. See https://github.com/aterrien/jQuery-Knob

  componentDidMount() {
    /* global $ */
    this.$tag = $(this.props.tag);
    this.$tag.knob({
      readOnly: true,
    });
  }

  componentWillUnmount() {
    this.$tag.knob("destroy");
  }

  render() {
    return <div ref={(el) => (this.el = el)}></div>;
  }
}

export default Knob;
