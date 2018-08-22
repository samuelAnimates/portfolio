import React from "react";
import "./NewPageNavBarMobile.css";
import InlineA from '../InlineA';
import SheerWhiteContainer from '../SheerWhiteContainer';

const NewPageNavBarMobile = props => (
	<nav className="box-shadow-3px-4px-2px-rgba-221-126-192-p3 border-style-solid border-color-rgba-150-150-150-p75 border-2px left-0">
		<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
			<p className="font-weight-600 text-center">Go To New Page</p>
		</SheerWhiteContainer>
		<div className={ "bg-rgba-250-250-250-p7 border-style-solid border-2px clearfix color-inherit padding-bottom-p25em padding-top-p25em navbar-color-scheme-" + props.colorSchemeSuffix }>
			<ul className="list-style-type-none">
				<li>
					<div className="font-size-p75em padding-bottom-p1em padding-top-p1em float-left padding-left-p5em padding-right-p5em width-9em">
						<InlineA
							isInternalLink={true}	
							text="Home"
							urlPath="/"
							colorSchemeSuffix={ props.colorSchemeSuffix }
						/>
					</div>
				</li>
			</ul>
		</div>
	</nav>
);

export default NewPageNavBarMobile;