import React from "react";
import "./ProjectHeader.css";

const ProjectHeader = props => (
	<h1 className="padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p5em text-center">{props.title}</h1>
);

export default ProjectHeader;