import React, { Component } from 'react';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class WikiProject extends Component {
  projectInfo = {
		title: "Wheelchair Accessibility (A11Y) Travel Wiki",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwearemuui%2Fvideos%2F1838183853120576%2F&show_text=0&width=560",
				title: "'10 Days in wiki' episode on Facebook."
			},
			year: "2017",
			specs: [
				{
					id: "wikiSpecs01",
					lead: "Role",
					body: "Director, videographer, editor."
				},
				{
					id: "wikiSpecs02",
					lead: "Length",
					body: "02 min. 18 sec."
				}
			]
		},
		highlights: [
			{
				id: "wikiHighlights01",
				lead: "Goal",
				body: "Create a short bilingual promotional video introducing the Spanish Community Center (SCC) to potential donors and community members."
			}
		],
		overview: [
			{
				id: "wikiOverview01",
				lead: "Motivation",
				body: "I chose to take this on as a volunteer project because of the amazing and necessary work that the SCC does for the wiki community. Just a few words into conversation with staff, volunteers, or leadership, and you can see just how dedicated this group is to serving the significant, but often ignored, Spanish-speaking population of Will County, IL."
			},
			{
				id: "wikiOverview02",
				lead: "Process",
				body: "I fleshed out the concept and went to wiki to record interviews with SCC staff and volunteers. I worked with the SCC executive director to frame the community and staff experience within the broad scope of services they offer."
			}
		]		
  }
  
  wikiNavbarLinks = [{title:"Synopsis", id:"wikiNavBarLinkSynopsis"},{title:"Highlights", id:"wikiNavBarLinkHighlights"},{title:"Overview", id:"wikiNavBarLinkOverview"}];
	wikiSynopsisSectionRef = React.createRef();
	wikiHighlightsSectionRef = React.createRef();
	wikiNavbarRef = React.createRef();
	wikiOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in wiki' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "wikiNavBarLinkSynopsis"){
			this.wikiSynopsisSectionRef.current.scrollIntoView();
			this.wikiSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "wikiNavBarLinkHighlights"){
			this.wikiHighlightsSectionRef.current.scrollIntoView();
			this.wikiHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "wikiNavBarLinkOverview"){
			this.wikiOverviewSectionRef.current.scrollIntoView();
			this.wikiOverviewSectionRef.current.focus();
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
							navbarLinks={ this.wikiNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.wikiNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.wikiHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.wikiOverviewSectionRef }
					synopsisSectionRef={ this.wikiSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default WikiProject;