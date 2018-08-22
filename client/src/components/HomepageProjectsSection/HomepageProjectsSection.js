import React from "react";
import "./HomepageProjectsSection.css";
import HomepageProjectContainer from "../HomepageProjectContainer";
import SheerWhiteContainer from "../SheerWhiteContainer";
import GenericFloatingSection from "../GenericFloatingSection";

const HomepageProjectsSection = React.forwardRef((props, ref) => (
	
	<GenericFloatingSection colorSchemeSuffix={props.colorSchemeSuffix}>
		<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
			<h2 tabIndex="0" ref={ ref } className="color-inherit text-center">{ props.title }</h2>
		</SheerWhiteContainer>
		{ props.projects.map(project =>
			<HomepageProjectContainer
				key={ project.id }
				float={ props.float }	
				isMobile={ props.isMobile }
				project={ project }
				colorSchemeSuffix={ props.colorSchemeSuffix }
				materialIconFill={ props.materialIconFill }
			/>
		)}
	</GenericFloatingSection>

));

export default HomepageProjectsSection;