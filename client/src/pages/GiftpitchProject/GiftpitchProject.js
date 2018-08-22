import React, { Component } from 'react';
import "./GiftpitchProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class GiftpitchProject extends Component {
	projectInfo = {
		title: "GiftPitch Demo",
		synopsis:{
			mediaType: "video",
			blurb: "A web app ",
			embed: {
				url: "https://player.vimeo.com/video/235300604",
				title: "GiftPitch Walkthrough on Vimeo"
			},
			year: "2018",
			specs: [
				{
					id: "giftpitchSpecs01",
					lead: "Frameworks",
					body: "4 videos and 5 worksheets in simplified Chinese."
				}
			]
		},
		highlights: [
			{
				id: "giftpitchHighlights01",
				lead: "Context",
				body: "First class project for Northwestern Coding Boot Camp: a web app that lets users take a personality quiz about a loved one to receive a tailored set of gift options for them from Amazon, Etsy, and Ebay."
			},
			{
				id: "giftpitchHighlights02",
				lead: "Role",
				body: "Developer responsible for personality quiz logic and tying results to appropriate calls; content writer."
			}
		],
		overview: [
			{
				id: "giftpitchOverview02",
				lead: "Process",
				body: "This was a whirlwind project we're all extremely proud of: our first multiplayer web app deployed to heroku, all with a cohesive mobile-ready frontend design. I wrote our ORM, controller, and router files necessary for retrieving cards from a database, before moving on to the actual game logic. This side of the backend development was filled with a lot of fun puzzles, trying to figure out efficient ways to divide the game logic between player devices in order to reduce the overall number of server calls + the amount of data shuttled back and forth. Given our short time frame, we all ended up pitching in to fix front and backend bugs as they popped up. So, I also created our SVG logo to make the front-end display a little more efficient. Thank you to my teammates Amanda Gault, Jordan Peart, Gowri Rajasekaran, Max Rashes, & Bex Way."
			}
		]
		
	}

	giftpitchNavbarLinks = [{title:"Synopsis", id:"giftpitchNavBarLinkSynopsis"},{title:"Highlights", id:"giftpitchNavBarLinkHighlights"},{title:"Overview", id:"giftpitchNavBarLinkOverview"}];
	giftpitchSynopsisSectionRef = React.createRef();
	giftpitchHighlightsSectionRef = React.createRef();
	giftpitchNavbarRef = React.createRef();
	giftpitchOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "GiftPitch Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "giftpitchNavBarLinkSynopsis"){
			this.giftpitchSynopsisSectionRef.current.scrollIntoView();
			this.giftpitchSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "giftpitchNavBarLinkHighlights"){
			this.giftpitchHighlightsSectionRef.current.scrollIntoView();
			this.giftpitchHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "giftpitchNavBarLinkOverview"){
			this.giftpitchOverviewSectionRef.current.scrollIntoView();
			this.giftpitchOverviewSectionRef.current.focus();
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
							navbarLinks={ this.giftpitchNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.giftpitchNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.giftpitchHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.giftpitchOverviewSectionRef }
					synopsisSectionRef={ this.giftpitchSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default GiftpitchProject;