import React, { Component } from 'react';
import "./WikiProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class WikiProject extends Component {
  projectInfo = {
		title: "Wheelchair Accessibility (A11Y) Travel Wiki",
		synopsis:{
			mediaType: "photo",
			blurb: "A wheelchair accessibility wiki demo.",
			embed: {
				src: "../assets/images/projectPhotos/wiki.jpg",
				alt: "'10 Days in wiki' episode on Facebook."
			},
			year: "2017",
			specs: [
				{
					id: "wikiSpecs01",
					lead: "Role",
					body: "Designer and front-end programmer of initial demo."
				},
				{
					id: "wikiSpecs02",
					lead: "Frameworks:",
					body: "react, Mongo, Express, and Node"
				}
			]
		},
		highlights: [
			{
				id: "wikiHighlights01",
				lead: "Goal",
				body: "Show the value of having a standardized format for online accessibility reviews, and the necessity of including more contextual information about cities as a whole."
			}
		],
		overview: [
			{
				id: "wikiOverview01",
				lead: "Background",
				body: "This project arose from my work with Muui on our '10 Days in Saigon' web series. We want to make a searchable, flexible, collective database to store usable information about wheelchair accessible travel by city. Our goal is to provide a structure for desribing wheelchair accessibility that can help people contribute to collective knowledge without a steep learning curve. Initial demo developed together with Bex Way. Currently undergoing a process of feedack and revision."
			},
			{
				id: "wikiOverview02",
				lead: "Process",
				body: "The initial demo is live on Heroku, with plans in place to improve the web accessibiility of the site. Then, I want to experiment with addinf more functionality around placing map markers, finding the nearest bathroom, and web accessibility."
			}
		],
		links: [
			{
				"isInternalLink": false,
				"id": "highlights0202",
				"text": "'A11Y Wiki' GitHub Repo",
				"path": "https://github.com/smendez92/wheelchairWiki",
				"icon": "code"
			},
			{
				"isInternalLink": false,
				"id": "highlights0204",
				"text": "'A11Y Wiki' Demo on Heroku",
				"path": "https://wheelchairtravelwiki.herokuapp.com",
				"icon": "website"
			}
		]		
  }
  
  wikiNavbarLinks = [{title:"Synopsis", id:"wikiNavBarLinkSynopsis"},{title:"Highlights", id:"wikiNavBarLinkHighlights"},{title:"Overview", id:"wikiNavBarLinkOverview"}];
	wikiSynopsisSectionRef = React.createRef();
	wikiHighlightsSectionRef = React.createRef();
	wikiNavbarRef = React.createRef();
	wikiOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "A11Y Wiki Project Page";
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
				<HomepageProjectLinksContainer
					links={ this.projectInfo.links }
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					materialIconFill={ this.props.materialIconFill }
				/>
			</div>
		);
  	}
}

export default WikiProject;