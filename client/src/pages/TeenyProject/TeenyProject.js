import React, { Component } from 'react';
import "./TeenyProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class TeenyProject extends Component {

	projectInfo = {
		title: "Teeny Fundraiser Video",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/172990828",
				title: "'Teeny fundraising video on Vimeo."
			},
			year: "2017",
			specs: [
				{
					id: "teenySpecs01",
					lead: "Role:",
					body: "Director, editor, animator."
				},
				{
					id: "teenySpecs02",
					lead: "Length",
					body: "04 min. 16 sec."
				}
			]
		},
		highlights: [
			{
				id: "teenyHighlights01",
				lead: "Goal",
				body: "Use existing narration and product photos as a starting point to create a 1-minute promo video for a Kickstarter campaign."
			},
			{
				id: "teenyHighlights02",
				lead: "Outcome",
				body: "A short promo video for a successfully funded Kickstarter campaign."
			}
		],
		overview: [
			{
				id: "teenyOverview01",
				lead: "Process",
				body: "I started off with a storyboard based on a pre-recorded voiceover. Then I wrote a shorter version of the narration to re-record. I made animation segments and shot new product footage. I also included existing product photos. I edited the final video for use on the Kickstarter campaign page."
			}
		],
		links: [
			{
				"isInternalLink": false,
				"id": "video0402",
				"text": "'Teeny' Fundraising Video on Vimeo",
				"icon": "video",
				"path": "http://www.vimeo.com/172990828"
			},
			{
				"isInternalLink": false,
				"id": "video0403",
				"text": "Teeny' Fundraising Campaign",
				"icon": "website",
				"path": "https://www.kickstarter.com/projects/849732009/teeny-artisan-coin-holders-for-your-change-and-ess"
			}
		]
		
	}
	teenyNavbarLinks = [{title:"Synopsis", id:"teenyNavBarLinkSynopsis"},{title:"Highlights", id:"teenyNavBarLinkHighlights"},{title:"Overview", id:"teenyNavBarLinkOverview"}];
	teenySynopsisSectionRef = React.createRef();
	teenyHighlightsSectionRef = React.createRef();
	teenyNavbarRef = React.createRef();
	teenyOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "Teeny Fundraiser Video Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "teenyNavBarLinkSynopsis"){
			this.teenySynopsisSectionRef.current.scrollIntoView();
			this.teenySynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "teenyNavBarLinkHighlights"){
			this.teenyHighlightsSectionRef.current.scrollIntoView();
			this.teenyHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "teenyNavBarLinkOverview"){
			this.teenyOverviewSectionRef.current.scrollIntoView();
			this.teenyOverviewSectionRef.current.focus();
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
							navbarLinks={ this.teenyNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.teenyNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.teenyHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.teenyOverviewSectionRef }
					synopsisSectionRef={ this.teenySynopsisSectionRef }
				/>
				<HomepageProjectLinksContainer
					links={ this.projectInfo.links }
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					materialIconFill={ this.props.materialIconFill }
				/>
			</div>
		);
  	}
}

export default TeenyProject;