import React, { Component } from 'react';
import "./JolietProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class JolietProject extends Component {
	projectInfo = {
		title: "Joliet Spanish Community Center Promo Video",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/221224584",
				title: "Joliet Spanish Community Center video on Vimeo."
			},
			year: "2017",
			specs: [
				{
					id: "jolietSpecs01",
					lead: "Role",
					body: "Director, videographer, editor."
				},
				{
					id: "jolietSpecs02",
					lead: "Length",
					body: "02 min. 18 sec."
				}
			]
		},
		highlights: [
			{
				id: "jolietHighlights01",
				lead: "Goal",
				body: "Create a short bilingual promotional video introducing the Spanish Community Center (SCC) to potential donors and community members."
			}
		],
		overview: [
			{
				id: "jolietOverview01",
				lead: "Motivation",
				body: "I chose to take this on as a volunteer project because of the amazing and necessary work that the SCC does for the Joliet community. Just a few words into conversation with staff, volunteers, or leadership, and you can see just how dedicated this group is to serving the significant, but often ignored, Spanish-speaking population of Will County, IL."
			},
			{
				id: "jolietOverview02",
				lead: "Process",
				body: "I fleshed out the concept and went to Joliet to record interviews with SCC staff and volunteers. I worked with the SCC executive director to frame the community and staff experience within the broad scope of services they offer."
			}
		]
		
	}
	jolietNavbarLinks = [{title:"Synopsis", id:"jolietNavBarLinkSynopsis"},{title:"Highlights", id:"jolietNavBarLinkHighlights"},{title:"Overview", id:"jolietNavBarLinkOverview"}];
	jolietSynopsisSectionRef = React.createRef();
	jolietHighlightsSectionRef = React.createRef();
	jolietNavbarRef = React.createRef();
	jolietOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "Joliet SCC Promo Video Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "jolietNavBarLinkSynopsis"){
			this.jolietSynopsisSectionRef.current.scrollIntoView();
			this.jolietSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "jolietNavBarLinkHighlights"){
			this.jolietHighlightsSectionRef.current.scrollIntoView();
			this.jolietHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "jolietNavBarLinkOverview"){
			this.jolietOverviewSectionRef.current.scrollIntoView();
			this.jolietOverviewSectionRef.current.focus();
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
							navbarLinks={ this.jolietNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.jolietNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.jolietHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.jolietOverviewSectionRef }
					synopsisSectionRef={ this.jolietSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default JolietProject;