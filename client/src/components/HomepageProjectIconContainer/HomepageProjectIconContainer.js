import React from "react";
import "./HomepageProjectIconContainer.css";
import HomepageProjectIcon from "../HomepageProjectIcon";

const HomepageProjectIconContainer = props => (
	<div className="height-5em margin-auto max-width-100pc padding-3px width-auto">
		<HomepageProjectIcon
			icon = { props.icon }
			iconAlt = { props.iconAlt }
		/> 
	</div>
);

export default HomepageProjectIconContainer;