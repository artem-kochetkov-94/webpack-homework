import React from "react";

import "./styles.css";

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { name, label, value, className } = this.props;

    return (
      <div className={`input ${className || ""}`}>
        <label htmlFor={name} className="input__label">
          {label}
        </label>
        <input
          className="input__input"
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }

  onChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }
}
