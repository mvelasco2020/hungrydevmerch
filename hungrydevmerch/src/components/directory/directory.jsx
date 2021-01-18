import React from "react";
import MenuItem from "../menu-item/menu-item.jsx";
import "./directory.scss";

import { connect } from "react-redux"
import {selectDirectorySections} from "../../redux/directory/directory.selectors"

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  )

}
const mapStateToProps = (state) => ({ sections: selectDirectorySections(state) })
export default connect(mapStateToProps)(Directory);
