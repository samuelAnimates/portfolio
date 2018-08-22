import React from "react";
import "./SheerWhiteContainer.css";

const SheerWhiteContainer = props => (
	<div className={ "border-style-solid border-width-2px sheerWhiteContainer-color-scheme-" + props.colorSchemeSuffix }>
		<div className="padding-top-p5em">
			{ props.children }
		</div>
	</div>
);

export default SheerWhiteContainer;