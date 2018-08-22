import React, { Component } from 'react';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class HealthforallProject extends Component {
  projectInfo = {
		title: "Health for All",
		synopsis:{
			mediaType: "video",
			blurb: "A partnership between Northwestern Medicine and Chicago Public Library to spread knowledge and awareness of clinical trials in underrepresented communities.",
			embed: {
				url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwearemuui%2Fvideos%2F1838183853120576%2F&show_text=0&width=560",
				title: "'10 Days in healthforall' episode on Facebook."
			},
			year: "2017",
			specs: [
				{
					id: "healthforallSpecs01",
					lead: "Role",
					body: "Director, videographer, editor."
				},
				{
					id: "healthforallSpecs02",
					lead: "Length",
					body: "02 min. 18 sec."
				}
			]
		},
		highlights: [
			{
				id: "healthforallHighlights01",
				lead: "Role",
				body: "Focus Group and Co-design session lead; prototyping and coordinating with our developnebt team to create a web app based off of paper and digital prototypes."
			}
		],
		overview: [
			{
				id: "healthforallOverview01",
				lead: "Background",
				body: "I chose to take this on as a volunteer project because of the amazing and necessary work that the SCC does for the healthforall community. Just a few words into conversation with staff, volunteers, or leadership, and you can see just how dedicated this group is to serving the significant, but often ignored, Spanish-speaking population of Will County, IL."
			},
			{
				id: "healthforallOverview02",
				lead: "Process",
				body: "I fleshed out the concept and went to healthforall to record interviews with SCC staff and volunteers. I worked with the SCC executive director to frame the community and staff experience within the broad scope of services they offer."
			}
		]		
  }
  
  healthforallNavbarLinks = [{title:"Synopsis", id:"healthforallNavBarLinkSynopsis"},{title:"Highlights", id:"healthforallNavBarLinkHighlights"},{title:"Overview", id:"healthforallNavBarLinkOverview"}];
	healthforallSynopsisSectionRef = React.createRef();
	healthforallHighlightsSectionRef = React.createRef();
	healthforallNavbarRef = React.createRef();
	healthforallOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in healthforall' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "healthforallNavBarLinkSynopsis"){
			this.healthforallSynopsisSectionRef.current.scrollIntoView();
			this.healthforallSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "healthforallNavBarLinkHighlights"){
			this.healthforallHighlightsSectionRef.current.scrollIntoView();
			this.healthforallHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "healthforallNavBarLinkOverview"){
			this.healthforallOverviewSectionRef.current.scrollIntoView();
			this.healthforallOverviewSectionRef.current.focus();
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
							navbarLinks={ this.healthforallNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.healthforallNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.healthforallHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.healthforallOverviewSectionRef }
					synopsisSectionRef={ this.healthforallSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default HealthforallProject;