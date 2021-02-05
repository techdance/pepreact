import React from "react";

export default class CalendarSelector extends React.Component {
  // javascript widget that renders the calendar. See https://api.jqueryui.com/datepicker/ and https://jqueryui.com/datepicker/

  componentDidMount() {
    /* global $ */
    // below fails on modals because of event delegation. have added a function in custom.js for now to address but not a good solution.
    this.$el = $(this.el);
    this.$el.datepicker({
      dateFormat: "yy-mm-dd",
    });

    this.handleChange = this.handleChange.bind(this);
    this.$el.on("change", this.handleChange);
    // this.$el.on("show", {
    //   function() {
    //     this.$el.datepicker({
    //       dateFormat: "yy-mm-dd",
    //     });
    //   },
    // });
  }

  componentWillUnmount() {
    this.$el.off("change", this.handleChange);
    this.$el.datepicker("destroy");
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    const { id, className, name, value } = this.props;

    return (
      <div>
        <input
          ref={(el) => (this.el = el)}
          type="text"
          id={id}
          className={className}
          name={name}
          defaultValue={value}
        />
      </div>
    );
  }
}
