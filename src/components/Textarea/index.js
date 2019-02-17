import React from "react";

import "./styles.css";

export default class Textarea extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { name, label, value, className } = this.props;

    return (
      <div className={`textarea ${className || ""}`}>
        <label htmlFor={name} className="textarea__label">
          {label}
        </label>
        <textarea
          className="textarea__input"
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
