import React from "react";
import "./ProjectPageMainSections.css";
import ProjectPageHighlights from '../ProjectPageHighlights';
import ProjectPageOverview from '../ProjectPageOverview';
import ProjectPageSynopsis from '../ProjectPageSynopsis';

const ProjectPageMainSections = props => (
	<div>
		<ProjectPageSynopsis
			colorSchemeSuffix={ props.colorSchemeSuffix }
			doNotTrack={ props.doNotTrack }
			float={ props.float }
			isMobile={ props.isMobileView }
			ref={ props.synopsisSectionRef }
			synopsis={ props.projectInfo.synopsis }
			width={ props.width }
		/>
		<ProjectPageHighlights
			colorSchemeSuffix={ props.colorSchemeSuffix }
			float={ props.float }
			highlights={ props.projectInfo.highlights }
			isMobile={ props.isMobileView }
			ref={ props.highlightsSectionRef }
			synopsis={ props.projectInfo.synopsis }
			width={ props.width }
		/>
		<ProjectPageOverview
			colorSchemeSuffix={ props.colorSchemeSuffix }
			overview={ props.projectInfo.overview }
			ref={ props.overviewSectionRef }
		/>
	</div>
);

export default ProjectPageMainSections;