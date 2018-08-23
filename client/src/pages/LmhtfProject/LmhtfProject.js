import React, { Component } from 'react';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class LmhtfProject extends Component {
  projectInfo = {
		title: "Bodegas Saludables",
		synopsis:{
			mediaType: "video",
			blurb: "Intro video for a local public health program in Lawrence, MA.",
			embed: {
				url: "https://player.vimeo.com/video/231980215",
				title: "'Bodegas Saludables' excerpt on Vimeo."
			},
			year: "2014",
			specs: [
				{
					id: "lmhtfSpecs01",
					lead: "Length",
					body: "03 min. 05 sec. (Shorter excerpt above)"
				}
			]
		},
		highlights: [
			{
				id: "lmhtfHighlights01",
				lead: "Lessons Learned",
				body: "By being proactive in communication with community partners, it's possible to respond to project timeline changes and still meet the needs of all partners."
			}
		],
		overview: [
			{
				id: "lmhtfOverview01",
				lead: "Context",
				body: "Made for community partners at the while working on my senior thesis film A Bodega."
			},
			{
				id: "lmhtfOverview02",
				lead: "Process",
				body: "I started making my film 'A Bodega' with the aim of making a documentary about a public health program by the Lawrence Mayor's Health Task Force (MHTF). They were starting a new program focused on helping corner stores stock fresh/frozen prodce, as well host cooking demos and excerises classes, to create an environment of health around local resources. I visited bodegas and sat in on meetings with the MHTF, recording interviews and documentary footage along the way.The timeline of the MHTF project ended up not aligning with my own timeline for finishing my thesis film and graduating from college. However, there was still a need for a tool to help explain the MHTF's goals & engage potential stakeholders around their corner store project. So, I worked on this video while finishing my thesis as a part of our partnership."
			}
		]		
  }
  
  lmhtfNavbarLinks = [{title:"Synopsis", id:"lmhtfNavBarLinkSynopsis"},{title:"Highlights", id:"lmhtfNavBarLinkHighlights"},{title:"Overview", id:"lmhtfNavBarLinkOverview"}];
	lmhtfSynopsisSectionRef = React.createRef();
	lmhtfHighlightsSectionRef = React.createRef();
	lmhtfNavbarRef = React.createRef();
	lmhtfOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in lmhtf' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "lmhtfNavBarLinkSynopsis"){
			this.lmhtfSynopsisSectionRef.current.scrollIntoView();
			this.lmhtfSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "lmhtfNavBarLinkHighlights"){
			this.lmhtfHighlightsSectionRef.current.scrollIntoView();
			this.lmhtfHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "lmhtfNavBarLinkOverview"){
			this.lmhtfOverviewSectionRef.current.scrollIntoView();
			this.lmhtfOverviewSectionRef.current.focus();
		};
	}

	render() {
		return (
			<div className={ "clearfix " + this.props.colorSchemeNameRoot + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<div className="font-Overpass position-fixed left-0">
						<SamePageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.lmhtfNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.lmhtfNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
          			colorSchemeSuffix={ this.props.colorSchemeSuffix }
          			doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.lmhtfHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.lmhtfOverviewSectionRef }
					synopsisSectionRef={ this.lmhtfSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default LmhtfProject;