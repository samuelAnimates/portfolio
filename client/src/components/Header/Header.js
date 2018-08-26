import React from "react";
import "./Header.css";
import Button from "../Button";
import ButtonContainer from "../ButtonContainer";

const Header = props => (
	<header className={ "header-color-scheme-" + props.colorSchemeSuffix + " margin-auto padding-bottom-1em padding-top-1em text-center width-85pc " + props.mainPaddingLeftClassName }>
		<div className="padding-bottom-p5em">
			{ props.colorSchemeSuffix==="default" &&
				<img alt="Samuel Animates: Portfolio Page" src="../assets/images/branding/logo.svg" className="display-inline height-2p75em padding-left-p25em padding-right-p25em width-auto"/>
			}
			{ props.colorSchemeSuffix==="highContrast" &&
				<img alt="Samuel Animates: Portfolio Page" src="../assets/images/branding/logo-inverse.svg" className="display-inline height-2p75em padding-left-p25em padding-right-p25em width-auto"/>
			}
			<h1 ref={ props.headerRef } tabIndex="0" className="display-inline padding-left-p25em padding-right-p25em"><span className="font-size-p4em">By </span>Samuel R. Mendez</h1>
		</div>
		<div className="font-size-p85em padding-bottom-1em padding-top-1em">
			<div className="display-inline-block padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em">
				<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
					<Button
						buttonType="contrastToggle"
						onClickFunction={ props.handleButtonClick }
						text="Click to toggle color contrast"
						colorSchemeSuffix={ props.colorSchemeSuffix }
						tabIndex="0"
					/>
				</ButtonContainer>
			</div>
			<div className="display-inline-block padding-bottom-p25em padding-left-p25em padding-right-p25em padding-top-p25em">
				<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>	
					<Button
						buttonType="fontSizeToggle"
						onClickFunction={ props.handleButtonClick }
						text="Click to toggle font size"
						colorSchemeSuffix={ props.colorSchemeSuffix }
						tabIndex="0"
					/>
				</ButtonContainer>
			</div>
		</div>
	</header>
);

export default Header;