import React, { Component } from 'react';
import "./TarotProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class TarotProject extends Component {
	projectInfo = {
		title: "AR-Tarot",
		synopsis:{
			mediaType: "photo",
			blurb: "A web app ",
			embed: {
				src: "../assets/images/projectPhotos/tarot.gif",
				alt: "An animated gif showcasing a tarot reading hovering above a placemarker in augmented reality."
			},
			year: "2018",
			specs: [
				{
					id: "artarotSpecs01",
					lead: "Composition",
					body: "4 videos and 5 worksheets in simplified Chinese."
				}
			]
		},
		highlights: [
			{
				id: "artarotHighlights02",
				lead: "Lessons Learned",
				body: "I learned a bit about using AR in a web project. I also thought more about accessibility of AR. Is a text alternative enough? Is there a better way to incorporate non-visual alternatives to common AR techniques?"
			}
		],
		overview: [
			{
				id: "artarotOverview01",
				lead: "Process",
				body: "I started off this project with an idea to get a tarot reading in augmented reality. The most seamless way I found to do that in a web app was through A-frame and a Hiro marker. The process of picking a random card from a deck 3 times wzs pretty straightforward to program. I decided to leave the logic open to easily draw different numbers of cards and display different formations for different kinds of readings in the future. I then figured out how I wanted to display them in a simplistic Augmented reality reading, and a more detailed text alternative. The most tedious part was making a digital deck of cards with illustrations and semi-personalized interpretations so the card descriptions could make sense in wide array of topics."
			},
			{
				id: "artarotOverview02",
				lead: "Web Accessibility (A11Y) Considerations",
				body: "This app was designed with a 2D on-screen option for displaying tarot readings, suitable for those without access to a printed Hiro marker or those who rely on a screen reader. Illustration descriptions are readable by everyone as an interpretation aid, and linked to the images in an ARIA-compatible way."
			},
			{
				id: "artarotOverview03",
				lead: "Next Steps",
				body: "I think I may need to use local storage to take the user to a standalone URL for AR-readings. I ran into problems tryingto dynamically update the page contents with A-Frame. I would also like to add a second reading layout and fix some mobile layout issues."
			}
		]
		
	}

	artarotNavbarLinks = [{title:"Synopsis", id:"artarotNavBarLinkSynopsis"},{title:"Highlights", id:"artarotNavBarLinkHighlights"},{title:"Overview", id:"artarotNavBarLinkOverview"}];
	artarotSynopsisSectionRef = React.createRef();
	artarotHighlightsSectionRef = React.createRef();
	artarotNavbarRef = React.createRef();
	artarotOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "AR-Tarot Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "artarotNavBarLinkSynopsis"){
			this.artarotSynopsisSectionRef.current.scrollIntoView();
			this.artarotSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "artarotNavBarLinkHighlights"){
			this.artarotHighlightsSectionRef.current.scrollIntoView();
			this.artarotHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "artarotNavBarLinkOverview"){
			this.artarotOverviewSectionRef.current.scrollIntoView();
			this.artarotOverviewSectionRef.current.focus();
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
							navbarLinks={ this.artarotNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.artarotNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.artarotHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.artarotOverviewSectionRef }
					synopsisSectionRef={ this.artarotSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default TarotProject;