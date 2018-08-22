import React, { Component } from 'react';
import "./BreakfastProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class BreakfastProject extends Component {

	projectInfo = {
		title: "Persefone's Breakfast",
		synopsis:{
			mediaType: "video",
			blurb: "\"We're talking and you're listening.\" Voice messages from Persephone to Hades. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/134973465",
				title: "\"Persefone's Breakfast\" full film on Vimeo."
			},
			year: "2012",
			specs: [
				{
					id: "persefoneSpecs01",
					lead: "Techniques",
					body: "live action video, 2D/3D digital animation, archival footage, & object animation."
				},
				{
					id: "persefoneSpecs02",
					lead: "Length",
					body: "06 min. 44 sec."
				}
			]
		},
		highlights: [
			{
				id: "persefoneHighlights01",
				lead: "Lessons learned",
				body: "I can make DIY animations out of my one-room apartment if I have to. And I shouldn't under-sell the power of a good color scheme."
			},
			{
				id: "persefoneHighlights01",
				lead: "Recognition",
				body: "Exceptional Artistry nomination, Official Latino Short Film Festival, New York, 2016. Finalist, Chicagoland Shorts Vol. 3."
			}
		],
		overview: [
			{
				id: "persefoneOverview01",
				lead: "Background",
				body: "I used this film to explore my own anger around the issue of food deserts. Food deserts block people from having fresh food. Food deserts block long-term health. Food deserts block connection points to people's food culture and traditions. When a person can't buy ingredients to cook their own people's food, they miss out on a chapter of their own story. I used other projects to highlight resources that minortizied communities built up for themselves. I used 'Persefone's Breakfast' to imagine what it would be like to opt out of oppressive systems entirely."
			},
			{
				id: "persefoneOverview02",
				lead: "Process",
				body: "I started by making models of the Underworld. First on paper. Then 3D digital models. I thought about the Underworld as a big city in the near future. Sinking under water. Centralized resources and decision-making. People cut off from each other. From there, I made short test animations. I imagined the media that might force a story onto Perséfone. I imagined the forces that might change her name to Persephone. I imagined the tools the Underworld would use to convince her she could never leave. Maps, newsreels, food, statistics, graphs. I cycled through phases of writing, animating, recording, editing, and getting feedback. Eventually, I figured out the film's final shape. I chose voice messages as the main format to drive the story. I wanted to make space for Persefone to control her story again. She completely dictates the pace of the film. She's free to leave the audience on hold while she cooks. She rejects the narrative the Underworld has forced on her. She uses food to leave it behind once and for all."
			},
			{
				id: "persefoneOverview03",
				lead: "Support",
				body: "I made my final city models with help from Ed Whetstone's Kludge City script. Thank you to Clare and Allison for your feedback on my writing. Thank you Dennis, Mateo, Brooke, Jasmine, Andrew, Rebecca, Lauren, and Ruth Lingford for your feedback on early film drafts. Applause for Cecilia Garcia's fantastic vocal performance! Thank you CTRL Sound Studios for your work. Thank you Andrés Ballesteros for the glitchy music."
			},
		]
		
	}

	breakfastNavbarLinks = [{title:"Synopsis", id:"breakfastNavBarLinkSynopsis"},{title:"Highlights", id:"breakfastNavBarLinkHighlights"},{title:"Overview", id:"breakfastNavBarLinkOverview"}];
	breakfastSynopsisSectionRef = React.createRef();
	breakfastHighlightsSectionRef = React.createRef();
	breakfastNavbarRef = React.createRef();
	breakfastOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'Persefone's Breakfast' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "breakfastNavBarLinkSynopsis"){
			this.breakfastSynopsisSectionRef.current.scrollIntoView();
			this.breakfastSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "breakfastNavBarLinkHighlights"){
			this.breakfastHighlightsSectionRef.current.scrollIntoView();
			this.breakfastHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "breakfastNavBarLinkOverview"){
			this.breakfastOverviewSectionRef.current.scrollIntoView();
			this.breakfastOverviewSectionRef.current.focus();
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
							navbarLinks={ this.breakfastNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.breakfastNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.breakfastHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.breakfastOverviewSectionRef }
					synopsisSectionRef={ this.breakfastSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default BreakfastProject;