import React from "react";
import "./SamePageNavBarLink.css";
import Button from "../Button";

const SamePageNavBarLink = props => (
	<Button
		tabIndex="0"
		buttonType="navbarLink"
		buttonId={ props.buttonId }
		onClickFunction={ props.onClickFunction }
		colorSchemeSuffix={ props.colorSchemeSuffix }
		text={ props.text }
	/>
);

export default SamePageNavBarLink;