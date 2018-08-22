import React, { Component } from 'react';
import "./AfterProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class AfterProject extends Component {

	projectInfo = {
		title: "After, After That",
		synopsis:{
			mediaType: "video",
			blurb: "An experimental documentary. A cross between two marks. Full film below.",
			embed: {
				url: "https://player.vimeo.com/video/55657740",
				title: "'After, After That' full film on Vimeo."
			},
			year: "2012",
			specs: [
				{
					id: "afterAfterSpecs01",
					lead: "Techniques",
					body: "live action video, experimental animation"
				},
				{
					id: "afterAfterSpecs02",
					lead: "Length",
					body: "04 min. 16 sec."
				}
			]
		},
		highlights: [
			{
				id: "afterAfterHighlights01",
				lead: "Lessons learned",
				body: "Video editing takes on some qualities of animation. If I think about video editing like animation, I can work with it frame by frame. I can use this to focus in on motion and color in nonfiction work."
			}
		],
		overview: [
			{
				id: "afterAfterOverview01",
				lead: "Background",
				body: "This film was inspired by animated documentaries like Chris Landreth's 'Ryan' and Jonathon Hodgson's 'Feeling My Way'."
			},
			{
				id: "afterAfterOverview02",
				lead: "Process",
				body: "I started off by reaching out through personal contacts and listservs to find people with tattoos/scars that had a story behind them. I ended up interviewing 3 people on camera and making several trips to a tattoo parlor to film the tattoo process, as well as an interview with a tattoo artist. After transcribing the interviews and putting together multiple combinations of the footage, I discovered the final format of this film. I was interested in the similarities of two subjects' verbal storytelling, as well as some of the common themes in their vastly different stories. I started with sound editing on these two interviews. Then, I eited the video to underscore the features of the marks that the interviewees focused on. This was important in documenting these stories, in which the physical marks played a narrative role where theinterviewees couldn't rely on spoken words alone."
			},
			{
				id: "afterAfterOverview03",
				lead: "Support",
				body: "I made this film with equipment from Harvard VES. Thank you to Alfred Guzzetti and George Olken for being great teachers. And thank you to my VES 52R classmates for the feedback."
			},
		]
		
	}

	afterAfterNavbarLinks = [{title:"Synopsis", id:"afterAfterNavBarLinkSynopsis"},{title:"Highlights", id:"afterAfterNavBarLinkHighlights"},{title:"Overview", id:"afterAfterNavBarLinkOverview"}];
	afterAfterSynopsisSectionRef = React.createRef();
	afterAfterHighlightsSectionRef = React.createRef();
	afterAfterNavbarRef = React.createRef();
	afterAfterOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'After, After That' Projet Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "afterAfterNavBarLinkSynopsis"){
			this.afterAfterSynopsisSectionRef.current.scrollIntoView();
			this.afterAfterSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "afterAfterNavBarLinkHighlights"){
			this.afterAfterHighlightsSectionRef.current.scrollIntoView();
			this.afterAfterHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "afterAfterNavBarLinkOverview"){
			this.afterAfterOverviewSectionRef.current.scrollIntoView();
			this.afterAfterOverviewSectionRef.current.focus();
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
							navbarLinks={ this.afterAfterNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.afterAfterNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.afterAfterHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.afterAfterOverviewSectionRef }
					synopsisSectionRef={ this.afterAfterSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default AfterProject;