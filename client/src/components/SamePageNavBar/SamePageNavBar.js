import React from "react";
import "./SamePageNavBar.css";
import SheerWhiteContainer from '../SheerWhiteContainer';
import ButtonContainer from '../ButtonContainer';
import SamePageNavBarLink from '../SamePageNavBarLink';

const SamePageNavBar = props => (
	<nav className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p75 border-2px">
		<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
			<p className="font-weight-600 text-center">On This<br/>Page</p>
		</SheerWhiteContainer>
		<div className={ "bg-rgba-250-250-250-p7 border-style-solid border-2px clearfix color-inherit padding-bottom-p25em padding-top-p25em navbar-color-scheme-" + props.colorSchemeSuffix }>
			<ul>
				{ props.navbarLinks.map((link, i) =>
					<li key={ i }>
						<div className="font-size-p75em padding-bottom-p1em padding-top-p1em float-none width-9em">
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
					</li>
				)}
			</ul>
		</div>
	</nav>
);

export default SamePageNavBar;