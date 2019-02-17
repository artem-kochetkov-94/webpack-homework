import React from "react";

import "./styles.css";

export default class Tag extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const checked = this.state.checked;
    const { name, label, className } = this.props;

    return (
      <label
        htmlFor={name}
        className={`tag ${className || ""} ${checked ? "tag_checked" : ""}`}
      >
        <div className="tag__label">{label}</div>
        <input
          checked={checked}
          type="checkbox"
          id={name}
          name={name}
          className="tag__input"
          onChange={this.onChange}
        />
      </label>
    );
  }

  onChange() {
    this.setState({
      checked: !this.state.checked
    });
  }
}
