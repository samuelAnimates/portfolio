import React, { Component } from 'react';
import "./ApplesProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class ApplesProject extends Component {
	projectInfo = {
		title: "AR-Tarot",
		synopsis:{
			mediaType: "video",
			blurb: "Demo of a web-enabled party game",
			embed: {
				url: "https://player.vimeo.com/video/235844101",
				title: "'Everything But Apples' Demo Presentation on Vimeo"
			},
			year: "2017",
			specs: [
				{
					id: "applesSpecs01",
					lead: "Frameworks",
					body: "Express, React, Node, and Socket"
				}
			]
		},
		highlights: [
			{
				id: "applesHighlights01",
				lead: "Role",
				body: "I focused on the backend of the game. I co-designed the card database and co-wrote the overall game logic. I focused on tracking the movement of cards to the central screen and sending signals to other player devices via socket.io."
			},
			{
				id: "applesHighlights02",
				lead: "Lessons Learned",
				body: "I learned a lot about the benefits of simplifying communication between devices. As we front-loaded the transfer of information via socket.io, the game mechanics got easier to manage."
			}
		],
		overview: [
			{
				id: "applesOverview01",
				lead: "Goal",
				body: "Working in a team of 6 over the course of ~2 weeks, create an application using MVC architecture, database queries, and a technology new to us at the time. We created a multiplayer party game designed for player's hands to be displayed on a phone screen, with a main game 'table' displayed on a central laptop screen. Socket.io facilitated two-way connection between the 'table' and players' hands."
			},
			{
				id: "applesOverview02",
				lead: "Process",
				body: "This was a whirlwind project we're all extremely proud of: our first multiplayer web app deployed to heroku, all with a cohesive mobile-ready frontend design. I wrote our ORM, controller, and router files necessary for retrieving cards from a database, before moving on to the actual game logic. This side of the backend development was filled with a lot of fun puzzles, trying to figure out efficient ways to divide the game logic between player devices in order to reduce the overall number of server calls + the amount of data shuttled back and forth. Given our short time frame, we all ended up pitching in to fix front and backend bugs as they popped up. So, I also created our SVG logo to make the front-end display a little more efficient. Thank you to my teammates Amanda Gault, Jordan Peart, Gowri Rajasekaran, Max Rashes, & Bex Way."
			}
		],
		links: [
			{
				"isInternalLink": false,
				"id": "web0202",
				"text": "''Apples' GitHub Repo",
				"icon": "code",
				"path": "https://github.com/amgault/everythingButApples"
			},
			{
				"isInternalLink": false,
				"id": "web0203",
				"text": "'Apples' Demo on Heroku",
				"icon": "website",
				"path": "https://everythingbutapples.herokuapp.com"
			}
		]
		
	}

	applesNavbarLinks = [{title:"Synopsis", id:"applesNavBarLinkSynopsis"},{title:"Highlights", id:"applesNavBarLinkHighlights"},{title:"Overview", id:"applesNavBarLinkOverview"}];
	applesSynopsisSectionRef = React.createRef();
	applesHighlightsSectionRef = React.createRef();
	applesNavbarRef = React.createRef();
	applesOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'Everything But Apples' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "applesNavBarLinkSynopsis"){
			this.applesSynopsisSectionRef.current.scrollIntoView();
			this.applesSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "applesNavBarLinkHighlights"){
			this.applesHighlightsSectionRef.current.scrollIntoView();
			this.applesHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "applesNavBarLinkOverview"){
			this.applesOverviewSectionRef.current.scrollIntoView();
			this.applesOverviewSectionRef.current.focus();
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
							navbarLinks={ this.applesNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.applesNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.applesHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.applesOverviewSectionRef }
					synopsisSectionRef={ this.applesSynopsisSectionRef }
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

export default ApplesProject;