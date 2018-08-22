import React from "react";
import "./SamePageNavBarMobile.css";
import ButtonContainer from '../ButtonContainer';
import SheerWhiteContainer from '../SheerWhiteContainer';
import SamePageNavBarLink from '../SamePageNavBarLink';

const SamePageNavBarMobile = props => (
	<nav className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p75 border-2px margin-auto margin-bottom-2em text-center">
		<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
			<p className="font-weight-600 text-center">On This Page</p>
		</SheerWhiteContainer>
		<div className={ "bg-rgba-250-250-250-p7 border-style-solid border-2px color-inherit padding-bottom-p25em padding-top-p25em navbar-color-scheme-" + props.colorSchemeSuffix}>
			{ props.navbarLinks.map((link, i) =>
				<div key={ i } className="display-inline-block font-size-p8em min-width-6em padding-bottom-p25em padding-left-p2em padding-right-p2em padding-top-p25em font-size-p85em text-center">
					<ButtonContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
						<SamePageNavBarLink
							key={ link.id }
							buttonId={ link.id }
							colorSchemeSuffix={ props.colorSchemeSuffix }
							text={ link.title }
							onClickFunction={ props.handleNavLinkClick }
						/>
					</ButtonContainer>
				</div>
			)}
		</div>
	</nav>
);

export default SamePageNavBarMobile;