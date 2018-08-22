import React from "react";
import "./ProjectPageHighlights.css";
import GenericFloatingSection from "../GenericFloatingSection";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";
import UnorderedBulletlessList from "../UnorderedBulletlessList";

const ProjectPageHighlights = React.forwardRef((props, ref) => (
	
	<ResponsiveCtoLFloat
		float = { props.float }
		isMobile={ props.isMobile }
		width={ props.width }
	>
		<div className="padding-left-p5em padding-right-p5em">
			<GenericFloatingSection colorSchemeSuffix={props.colorSchemeSuffix}>
				<div className={ "color-inherit paddng-bottom-1em paddng-left-1em paddng-right-1em paddng-top-1em text-center projectPageHighlights-color-scheme-" + props.colorSchemeSuffix }> 
					<div>
						<h2 tabIndex="0" ref={ ref }>Highlights</h2>
					</div>
					<div className="padding-top-p5em text-left">
						<UnorderedBulletlessList
							listItems={ props.highlights }
						/>
					</div>
				</div>
			</GenericFloatingSection>
		</div>
	</ResponsiveCtoLFloat>

));

export default ProjectPageHighlights;