import React from "react";

class InternationalExperience extends React.Component {
  constructor(props) {
    super(props);
    let internationalExperience = this.props.internationalExperience;

    switch (internationalExperience) {
      case "0 Years of International Experience":
        this.state = { experience: 0 };
        break;
      case "1-2 Years of International Experience":
        this.state = { experience: 1 };
        break;
      case "3-7 Years of International Experience":
        this.state = { experience: 2 };
        break;
      case "7+ Years of International Experience":
        this.state = { experience: 3 };
        break;
      default:
        this.state = { experience: 0 };
        break;
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();

    let internationalExperience = this.props.internationalExperience;

    switch (event.target.value) {
      case "0":
        this.setState({ experience: 0 });
        internationalExperience = "0 Years of International Experience";
        break;
      case "1":
        this.setState({ experience: 1 });
        internationalExperience = "1-2 Years of International Experience";
        break;
      case "2":
        this.setState({ experience: 2 });
        internationalExperience = "3-7 Years of International Experience";
        break;
      case "3":
        this.setState({ experience: 3 });
        internationalExperience = "7+ Years of International Experience";
        break;
      case "4":
        this.setState({ experience: 4 });
        internationalExperience = "7+ Years of International Experience";
        break;
      default:
        this.setState({ experience: 0 });
        internationalExperience = "0 Years of International Experience";
        break;
    }

    /// pass current state up to parent to propogate changes
    this.props.onChange("internationalExperience", internationalExperience);
  };

  render() {
    let { experience } = this.state;

    return (
      <>
        <div className="wrap-range-label">
          <ul>
            <li>1 &ndash; 2 Years</li>
            <li>3 &ndash; 7 Years</li>
            <li>7+ Years</li>
          </ul>
        </div>
        <div className="wrap-range">
          <input
            type="range"
            min="0"
            max="4"
            value={experience}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}

export default InternationalExperience;
