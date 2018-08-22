import React, { Component } from 'react';
import "./HernandezProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class HernandezProject extends Component {
	state = {
		colorSchemeSuffix: "default",
		fontSizeLevel: 1,
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
	}

	projectInfo = {
		title: "No One Can Hear You",
		synopsis:{
			mediaType: "video",
			blurb: "Officer Hernández's life flashes before her eyes as she drifts off into space. Sneak peek snippet below.",
			embed: {
				url: "https://player.vimeo.com/video/55657740",
				title: "'No One Can Hear You' snippet on Vimeo."
			},
			year: "In-progress",
			specs: [
				{
					id: "hernandezSpecs01",
					lead: "Techniques",
					body: "live action video, hand drawn animation, found footage, 2D digital animation."
				},
				{
					id: "hernandezSpecs02",
					lead: "Length",
					body: "Around 6 minutes, probably."
				}
			]
		},
		highlights: [
			{
				id: "hernandezHighlights01",
				lead: "Progress",
				body: "The sound is laid out. Key pieces of animation are in place. And I'm feeling good!"
			}
		],
		overview: [
			{
				id: "hernandezOverview01",
				lead: "Motivation",
				body: "I want to play with documentary animation methods. I think I can use a fictional character to help me do this. But I'm not sure yet. There's also something in here about my experiences with alienation and forming my own identity as a first generation college student. We'll just have to wait and see."
			}
		]
		
	}

	hernandezNavbarLinks = [{title:"Synopsis", id:"hernandezNavBarLinkSynopsis"},{title:"Highlights", id:"hernandezNavBarLinkHighlights"},{title:"Overview", id:"hernandezNavBarLinkOverview"}];
	hernandezSynopsisSectionRef = React.createRef();
	hernandezHighlightsSectionRef = React.createRef();
	hernandezNavbarRef = React.createRef();
	hernandezOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'No One Can Hear You' Projet Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "hernandezNavBarLinkSynopsis"){
			this.hernandezSynopsisSectionRef.current.scrollIntoView();
			this.hernandezSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "hernandezNavBarLinkHighlights"){
			this.hernandezHighlightsSectionRef.current.scrollIntoView();
			this.hernandezHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "hernandezNavBarLinkOverview"){
			this.hernandezOverviewSectionRef.current.scrollIntoView();
			this.hernandezOverviewSectionRef.current.focus();
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
							navbarLinks={ this.hernandezNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.hernandezNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.hernandezHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.hernandezOverviewSectionRef }
					synopsisSectionRef={ this.hernandezSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default HernandezProject;