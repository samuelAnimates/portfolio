import React from "react";
import "./HomepageAboutMeSection.css";
import GenericFloatingSection from "../GenericFloatingSection";
import HomepageProjectLinksContainer from "../HomepageProjectLinksContainer";
import ResponsiveCtoLFloat from "../ResponsiveCtoLFloat";
import SheerWhiteContainer from '../SheerWhiteContainer';

const HomepageAboutMeSection = React.forwardRef((props, ref) => (
	<GenericFloatingSection colorSchemeSuffix={ props.colorSchemeSuffix }>
		<div className={ "homepageAboutMeSection-color-scheme-" + props.colorSchemeSuffix + " color-inherit"}>
			<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
				<h2 tabIndex="0" className="text-center" ref={ ref }>ABOUT ME</h2>
			</SheerWhiteContainer>
			<ResponsiveCtoLFloat 
				width={ props.portraitWidth }
				float={ props.responsiveFloat }
			>
				<div className="font-Assistant padding-bottom-1em padding-left-20px padding-right-20px padding-top-1em">
					<div className="max-height-12em margin-auto text-center width-75pc">
						<img alt="" className="height-auto margin-auto max-height-12em max-width-100pc" src="./assets/images/branding/portrait.svg"></img>
					</div>
					<div className="font-Overpass font-size-p75em padding-T-1p5em">
						<p>"{ props.quote }"</p>
					</div>
				</div>
			</ResponsiveCtoLFloat>
				<ResponsiveCtoLFloat
					width={ props.blurbWidth }
					float={ props.responsiveFloat }
				>
						<div className="font-Assistant padding-bottom-1em padding-left-20px padding-right-20px padding-top-1em">
							{props.paragraphs.map(paragraph =>
								<p key={ paragraph.id } className="padding-top-p5em padding-bottom-p5em"><span className="font-weight-600">{ paragraph.lead }:</span> { paragraph.body }</p>
							)}
						</div>
				</ResponsiveCtoLFloat>
			<div className="border-color-rgba100-100-100-p9 border-style-solid border-width-2px-0-0-0 clear-both color-black font-Assistant height-100pc padding-top-1em">
				<div className="padding-bottom-p25em">
					<h3 className="text-center">PERSONAL LINKS</h3>
					<HomepageProjectLinksContainer
						links = { props.links }
						colorSchemeSuffix={ props.colorSchemeSuffix }
						materialIconFill={ props.materialIconFill }
					/>
				</div>	
			</div>
		</div>
	</GenericFloatingSection>
));

export default HomepageAboutMeSection;