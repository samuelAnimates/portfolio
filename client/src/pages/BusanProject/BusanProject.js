import React, { Component } from 'react';
import "./BusanProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'


class BusanProject extends Component {
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
		title: "By Foot: Busan and the Sea",
		synopsis:{
			mediaType: "video",
			blurb: "An animated travel documentary. Trailer below.",
			embed: {
				url: "https://player.vimeo.com/video/203944431",
				title: "'By Foot: Busan and the Sea' Trailer on Vimeo."
			},
			year: "2016",
			specs: [
				{
					id: "busanSpecs01",
					lead: "Techniques",
					body: "pixilation, photography and documentary video"
				},
				{
					id: "busanSpecs02",
					lead: "Length",
					body: "04 min. 22 sec."
				}
			]
		},
		highlights: [
			{
				id: "busanHighlights01",
				lead: "Lessons learned",
				body: "Animation is a useful documentary tool. I like how it can shrink and expand real-world space. I like how it can make a fun, immersive film with no characters or stories to hook people. I like how I can use it to mix well-planned shots with spontaneous scenes."
			},
			{
				id: "busanHighlights01",
				lead: "Recognition",
				body: "Exceptional Artistry award winner, Official Latino Film Fest, New York, 2017. Official selection SHORT to the Point, 2017."
			}
		],
		overview: [
			{
				id: "busanOverview01",
				lead: "Background",
				body: "I wanted to use animation as an observational documentary method. That means no narrator. No interviews. No voiceover explaining things. I wondered how I could use animation to give people a sense of familiarity, the way that narrators and characters do. Long-term, I want to find out how to give people more insight into new places and other people's feelings. So, I decided to start withmy own feelings during solo travel."
			},
			{
				id: "busanOverview02",
				lead: "Process",
				body: "This film has a very high-enery pace. But filming it required a lot of slow, steady walking. Sometimes I would take a few steps, snap a photo, and repeat. And repat. And repeat until I got tired. Other times, I listened to the environment around me. I used a micropohone to chase down sounds that felt unique to the city. Other times, I retraced my steps a lot. I wanted to take photos of patterns in the space I just walked through. Some days I went out to record with a detailed plan. Other days, I would get off the train and just see where my feet took me. Editing all the photos and video clips together was a nightmare. But a fun nightmare. And finally, I asked a drummer I met to record some beats for me to edit together as background music."
			},
			{
				id: "busanOverview03",
				lead: "Support",
				body: "Thank you to the strangers who helped me when I got lost. And thank you to the strangers who became friends. Thank you Dennis, Mateo, and Ruth Lingford for your feedback on drafts of this film. Shout out to Andrew Blad for the amazing drum tracks."
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "animation0202",
				"text": "'Busan' Trailer on Vimeo",
				"path": "https://vimeo.com/203944431",
				"icon": "video"
			}
		]
		
	}

	busanNavbarLinks = [{title:"Synopsis", id:"busanNavBarLinkSynopsis"},{title:"Highlights", id:"busanNavBarLinkHighlights"},{title:"Overview", id:"busanNavBarLinkOverview"}];
	busanSynopsisSectionRef = React.createRef();
	busanHighlightsSectionRef = React.createRef();
	busanNavbarRef = React.createRef();
	busanOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'By Foot: Busan and the Sea' Projet Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "busanNavBarLinkSynopsis"){
			this.busanSynopsisSectionRef.current.scrollIntoView();
			this.busanSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "busanNavBarLinkHighlights"){
			this.busanHighlightsSectionRef.current.scrollIntoView();
			this.busanHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "busanNavBarLinkOverview"){
			this.busanOverviewSectionRef.current.scrollIntoView();
			this.busanOverviewSectionRef.current.focus();
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
							navbarLinks={ this.busanNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.busanNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.busanHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.busanOverviewSectionRef }
					synopsisSectionRef={ this.busanSynopsisSectionRef }
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

export default BusanProject;