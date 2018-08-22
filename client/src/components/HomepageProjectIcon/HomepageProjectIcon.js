import React from "react";
import "./HomepageProjectIcon.css";

const HomepageProjectIcon = props => (
	<img alt={ props.iconAlt } className="display-block  height-100pc margin-auto text-center" src={ props.icon }></img>
);

export default HomepageProjectIcon;