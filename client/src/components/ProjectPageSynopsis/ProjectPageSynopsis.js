import React from "react";
import "./ProjectPageSynopsis.css";
import GenericFloatingSection from "../GenericFloatingSection";
import PhotoEmbedContainer from "../PhotoEmbedContainer";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";
import UnorderedBulletlessList from "../UnorderedBulletlessList";
import VideoEmbedContainer from "../VideoEmbedContainer";

const ProjectPageSynopsis = React.forwardRef((props, ref) => (
	
	<ResponsiveCtoLFloat
		float = { props.float }
		isMobile={ props.isMobile }
		width={ props.width }
	>
		<div className="padding-left-p5em padding-right-p5em">
			<GenericFloatingSection colorSchemeSuffix={ props.colorSchemeSuffix }>
				<div className="background-color-rgb-3-3-3 clearfix color-rgb-251-251-251 padding-left-1em padding-right-1em text-center">
					<div className="padding-bottom-1em padding-top-1em">
						<h2 className="font-weight-600" tabIndex="0" ref={ ref }>Synopsis</h2>
						<p className="font-size-p9em text-left">{ props.synopsis.blurb }</p>
					</div>
					{ props.synopsis.mediaType === "video" &&
						<VideoEmbedContainer
							colorSchemeSuffix={props.colorSchemeSuffix}
							embed={ props.synopsis.embed }
							doNotTrack={ props.doNotTrack }
						/>
					}
					{ props.synopsis.mediaType === "photo" &&
						<PhotoEmbedContainer
							embed={ props.synopsis.embed }
						/>
					}
					<div className="font-size-p9em ine-height-1p1em">
						<p className="font-weight-600">{ props.synopsis.year }</p>
						<div className="text-left">
							<UnorderedBulletlessList
								listItems={ props.synopsis.specs }
							/>
						</div>
					</div>
				</div>
			</GenericFloatingSection>
		</div>
	</ResponsiveCtoLFloat>

));

export default ProjectPageSynopsis;