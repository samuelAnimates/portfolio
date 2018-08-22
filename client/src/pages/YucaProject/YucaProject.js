import React, { Component } from 'react';
import "./YucaProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class YucaProject extends Component {

	projectInfo = {
		title: "How to Make Yuca Frita",
		synopsis:{
			mediaType: "video",
			blurb: "A how-to animation. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/95826023",
				title: "'How to Make Yuca Frita' full film on Vimeo."
			},
			year: "2014",
			specs: [
				{
					id: "yucaSpecs01",
					lead: "Techniques",
					body: "live action video, stop-motion animation"
				},
				{
					id: "yucaSpecs02",
					lead: "Length",
					body: "01 min. 39 sec."
				}
			]
		},
		highlights: [
			{
				id: "yucaHighlights01",
				lead: "Lessons learned",
				body: "Animation can help bridge language barriers. And music can give a familiar structure to a short film without a story."
			}
		],
		overview: [
			{
				id: "yucaOverview01",
				lead: "Background",
				body: "I started this animation as a scene in a longer animation. I was very disappointed to have to cut it from that film. So, I decided to give it life as its own short with its own structure and message."
			},
			{
				id: "yucaOverview02",
				lead: "Process",
				body: "I started off by shopping for yuca to cook. I made a few batches of yuca frita until I felt comfortable with the dish. I then made three versions of the dish to film. I left the first one raw. I boiled the second one. And I boiled and fried the last version. Each version was in many, many photos until I swapped it out with the next version."
			},
			{
				id: "yucaOverview03",
				lead: "Support",
				body: "I made this film with material support from Harvard VES. Thank you to Ruth Lingford for being my mentor. And thank you to Andrés Ballesteros for the lovely music."
			},
		]
		
	}
	yucaNavbarLinks = [{title:"Synopsis", id:"yucaNavBarLinkSynopsis"},{title:"Highlights", id:"yucaNavBarLinkHighlights"},{title:"Overview", id:"yucaNavBarLinkOverview"}];
	yucaSynopsisSectionRef = React.createRef();
	yucaHighlightsSectionRef = React.createRef();
	yucaNavbarRef = React.createRef();
	yucaOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'How to Make Yuca Frita' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "yucaNavBarLinkSynopsis"){
			this.yucaSynopsisSectionRef.current.scrollIntoView();
			this.yucaSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "yucaNavBarLinkHighlights"){
			this.yucaHighlightsSectionRef.current.scrollIntoView();
			this.yucaHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "yucaNavBarLinkOverview"){
			this.yucaOverviewSectionRef.current.scrollIntoView();
			this.yucaOverviewSectionRef.current.focus();
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
							navbarLinks={ this.yucaNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.yucaNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.yucaHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.yucaOverviewSectionRef }
					synopsisSectionRef={ this.yucaSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default YucaProject;