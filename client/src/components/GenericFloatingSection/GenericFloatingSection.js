import React from "react";
import "./GenericFloatingSection.css";

const GenericFloatingSection = props => (
	<section className={"generic-floating-section-color-scheme-" + props.colorSchemeSuffix + " box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-width-2px color-inherit clear-both margin-bottom-2em margin-top-1em width-100pc"}>
		{ props.children }
	</section>	
);

export default GenericFloatingSection;