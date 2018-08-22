import React, { Component } from 'react';
import "./MediaProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class MediaProject extends Component {
	projectInfo = {
		title: "Social Media Study",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwearemuui%2Fvideos%2F1838183853120576%2F&show_text=0&width=560",
				title: "'10 Days in media' episode on Facebook."
			},
			year: "2017",
			specs: [
				{
					id: "mediaSpecs01",
					lead: "Role",
					body: "Director, videographer, editor."
				},
				{
					id: "mediaSpecs02",
					lead: "Length",
					body: "02 min. 18 sec."
				}
			]
		},
		highlights: [
			{
				id: "mediaHighlights01",
				lead: "Goal",
				body: "Create a short bilingual promotional video introducing the Spanish Community Center (SCC) to potential donors and community members."
			}
		],
		overview: [
			{
				id: "mediaOverview01",
				lead: "Motivation",
				body: "I chose to take this on as a volunteer project because of the amazing and necessary work that the SCC does for the media community. Just a few words into conversation with staff, volunteers, or leadership, and you can see just how dedicated this group is to serving the significant, but often ignored, Spanish-speaking population of Will County, IL."
			},
			{
				id: "mediaOverview02",
				lead: "Process",
				body: "I fleshed out the concept and went to media to record interviews with SCC staff and volunteers. I worked with the SCC executive director to frame the community and staff experience within the broad scope of services they offer."
			}
		]		
  }
  
  mediaNavbarLinks = [{title:"Synopsis", id:"mediaNavBarLinkSynopsis"},{title:"Highlights", id:"mediaNavBarLinkHighlights"},{title:"Overview", id:"mediaNavBarLinkOverview"}];
	mediaSynopsisSectionRef = React.createRef();
	mediaHighlightsSectionRef = React.createRef();
	mediaNavbarRef = React.createRef();
	mediaOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in media' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "mediaNavBarLinkSynopsis"){
			this.mediaSynopsisSectionRef.current.scrollIntoView();
			this.mediaSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "mediaNavBarLinkHighlights"){
			this.mediaHighlightsSectionRef.current.scrollIntoView();
			this.mediaHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "mediaNavBarLinkOverview"){
			this.mediaOverviewSectionRef.current.scrollIntoView();
			this.mediaOverviewSectionRef.current.focus();
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
							navbarLinks={ this.mediaNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.mediaNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.mediaHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.mediaOverviewSectionRef }
					synopsisSectionRef={ this.mediaSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default MediaProject;