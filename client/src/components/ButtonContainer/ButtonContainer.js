import React from "react";
import "./ButtonContainer.css";

const ButtonContainer = props => (
	<div className={"box-shadow-3px-4px-2px-rgba-221-126-192-p3 padding-2px buttonContainer-color-scheme-" + props.colorSchemeSuffix }>
		{ props.children }
	</div>
);

export default ButtonContainer;