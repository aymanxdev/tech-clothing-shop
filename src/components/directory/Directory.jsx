import React, { Component } from "react";
import MenuItem from "../menu-item/MenuItem";
import { sections } from "./directory.data";
import "./directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
