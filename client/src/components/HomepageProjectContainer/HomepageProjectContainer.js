import React from "react";
import "./HomepageProjectContainer.css";
import HomepageProjectIconContainer from "../HomepageProjectIconContainer";
import HomepageProjectLinksContainer from "../HomepageProjectLinksContainer";
import InlineA from "../InlineA";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";

const HomepageProjectContainer = props => (
    <div className={ "homepage-project-container-color-scheme-" + props.colorSchemeSuffix + " border-style-solid border-width-2px clear-both color-inherit font-Assistant padding-left-p5em padding-right-p5em padding-top-1p5em width-100pc"}>
		<div className="padding-bottom-1em">
			<ResponsiveCtoLFloat
				float = { props.float }
				isMobile={ props.isMobile }
				width="20%"
			>
				<HomepageProjectIconContainer
					icon = { props.project.icon }
					iconAlt = { props.project.iconAlt }
				/>
			</ResponsiveCtoLFloat>
			<ResponsiveCtoLFloat
				float = { props.float }
				isMobile={ props.isMobile }
				width="80%"
			>
				<h3>
					<InlineA
						isInternalLink={ true }
						text={ props.project.title }
						urlPath={ props.project.projectPagePath }
						colorSchemeSuffix ={ props.colorSchemeSuffix }
					/>
				</h3>
				<p>{ props.project.description }</p>
			</ResponsiveCtoLFloat>
		</div>
		<div className="padding-bottom-p25em">
			<HomepageProjectLinksContainer
				links={ props.project.links }
				colorSchemeSuffix={ props.colorSchemeSuffix }
				materialIconFill={ props.materialIconFill }
			/>
		</div>
    </div>
);

export default HomepageProjectContainer;