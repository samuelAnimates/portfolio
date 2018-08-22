import React from "react";
import "./Button.css";

const Button = props => (
	
	<button buttonid={ props.buttonId } buttontype={ props.buttonType } className={ "border-style-outset border-width-2px border-radius-12px font-Overpass font-size-p9em padding-p5em width-100pc z2 button-color-scheme-" + props.colorSchemeSuffix } onClick={ props.onClickFunction }>
		{ props.text }
	</button>

);

export default Button;