import React, { Component } from 'react';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class PlannedparenthoodProject extends Component {
  projectInfo = {
		title: "Perceptions of Planned Parenthood",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwearemuui%2Fvideos%2F1838183853120576%2F&show_text=0&width=560",
				title: "'10 Days in Saigon' episode on Facebook."
			},
			year: "2017",
			specs: [
				{
					id: "saigonSpecs01",
					lead: "Role",
					body: "Director, videographer, editor."
				},
				{
					id: "saigonSpecs02",
					lead: "Length",
					body: "02 min. 18 sec."
				}
			]
		},
		highlights: [
			{
				id: "saigonHighlights01",
				lead: "Goal",
				body: "Create a short bilingual promotional video introducing the Spanish Community Center (SCC) to potential donors and community members."
			}
		],
		overview: [
			{
				id: "saigonOverview01",
				lead: "Motivation",
				body: "I chose to take this on as a volunteer project because of the amazing and necessary work that the SCC does for the saigon community. Just a few words into conversation with staff, volunteers, or leadership, and you can see just how dedicated this group is to serving the significant, but often ignored, Spanish-speaking population of Will County, IL."
			},
			{
				id: "saigonOverview02",
				lead: "Process",
				body: "I fleshed out the concept and went to saigon to record interviews with SCC staff and volunteers. I worked with the SCC executive director to frame the community and staff experience within the broad scope of services they offer."
			}
		]		
  }
  
  saigonNavbarLinks = [{title:"Synopsis", id:"saigonNavBarLinkSynopsis"},{title:"Highlights", id:"saigonNavBarLinkHighlights"},{title:"Overview", id:"saigonNavBarLinkOverview"}];
	saigonSynopsisSectionRef = React.createRef();
	saigonHighlightsSectionRef = React.createRef();
	saigonNavbarRef = React.createRef();
	saigonOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in Saigon' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "saigonNavBarLinkSynopsis"){
			this.saigonSynopsisSectionRef.current.scrollIntoView();
			this.saigonSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "saigonNavBarLinkHighlights"){
			this.saigonHighlightsSectionRef.current.scrollIntoView();
			this.saigonHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "saigonNavBarLinkOverview"){
			this.saigonOverviewSectionRef.current.scrollIntoView();
			this.saigonOverviewSectionRef.current.focus();
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
							navbarLinks={ this.saigonNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.saigonNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.saigonHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.saigonOverviewSectionRef }
					synopsisSectionRef={ this.saigonSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default PlannedparenthoodProject;