import React, { Component } from 'react';
import "./SaigonProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class SaigonProject extends Component {
  projectInfo = {
		title: "10 Days in Saigon",
		synopsis:{
			mediaType: "video",
			blurb: "An original wheelchair travel series made with the group Muui.",
			embed: {
				url: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwearemuui%2Fvideos%2F1838183853120576%2F&show_text=0&width=560",
				title: "'10 Days in Saigon' episode on Facebook."
			},
			year: "2017",
			specs: [
				{
					id: "saigonSpecs01",
					lead: "Role",
					body: "Director, videographer, editor."
				},
				{
					id: "saigonSpecs02",
					lead: "Length",
					body: "10-week web series"
				}
			]
		},
		highlights: [
			{
				id: "saigonHighlights01",
				lead: "Lessons Learned",
				body: "Documenting everyday experiences can be an effective way of examinaing a social issue. We focused on travel as an enjoyable personal activity, which allowed us to highlight the need for wheelchair accesibility while avoiding tropes of 'inspiration'."
			},
			{
				id: "saigonHighlights02",
				lead: "Recognition",
				body: "We Care Film Fest, official selection, 2017."
			},
			{
				id: "saigonHighlights03",
				lead: "Recognition",
				body: "Travel FilmFest, Best Travel Web Series nomination, 2017."
			}
		],
		overview: [
			{
				id: "saigonOverview01",
				lead: "Background",
				body: "This project grew out of a conversation with Kunho Kim, cofounder of Muui. One of the group's goals is to 'make disability sexier' by creating projects that address wheelchair users' needs while creating a more well-rounded depiction disability than is typically seen in mass media. A major goal of this work was to create a method of incorporating accessibility info into a general interest series. Our background research revealed a lack of models to follow, so we set out to discover what this could like ourselves. We decided to make a travel series showing a wheelchair user hanging out in an exciting city with his friends. We avoided unnecessarily exoticizing the city by giving the microphone to local residents. We avoid 'otherizing' disability by highlighting first-person footage from a wheelchair user's point of view."
			},
			{
				id: "saigonOverview02",
				lead: "Process",
				body: "We scheduled days of travel with Kunho's friends in the city where he spent his teen years: Saigon, Vietnam. Everywhere we went, Kunho wore a GoPro and documented wheelchair accessibility while I recorded observational footage on a DSLR. We then recorded interviews with Kunho's local friends, and we edited the audio down to web-friendy snippets. From there, I edited the videos and trained remote interns to make Korean, English, & Vietnamese subtitles for Facebook and YouTube"
			}
		],
		links: [
			{
				"isInternalLink": false,
				"id": "highlights0102",
				"text": "'10 Days' Trailer on Facebook",
				"icon": "video",
				"path": "https://www.facebook.com/wearemuui/videos/1834490626823232/"
			},
			{
				"isInternalLink": false,
				"id": "highlights0103",
				"text": "'10 Days' Google Map",
				"icon": "map",
				"path": "https://www.google.com/maps/d/viewer?mid=1msCQD_ab_Lz6mLz80wyu1qHXCBk&hl=en_US&ll=10.798291852220926%2C106.67387433398437&z=13"
			},
			{
				"isInternalLink": false,
				"id": "highlights0104",
				"text": "'10 Days' Article",
				"icon": "website",
				"path": "https://www.giantrobot.media/stories/2017/5/30/muui"
			}
		]		
  }
  
  saigonNavbarLinks = [{title:"Synopsis", id:"saigonNavBarLinkSynopsis"},{title:"Highlights", id:"saigonNavBarLinkHighlights"},{title:"Overview", id:"saigonNavBarLinkOverview"}];
	saigonSynopsisSectionRef = React.createRef();
	saigonHighlightsSectionRef = React.createRef();
	saigonNavbarRef = React.createRef();
	saigonOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in Saigon' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "saigonNavBarLinkSynopsis"){
			this.saigonSynopsisSectionRef.current.scrollIntoView();
			this.saigonSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "saigonNavBarLinkHighlights"){
			this.saigonHighlightsSectionRef.current.scrollIntoView();
			this.saigonHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "saigonNavBarLinkOverview"){
			this.saigonOverviewSectionRef.current.scrollIntoView();
			this.saigonOverviewSectionRef.current.focus();
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
							navbarLinks={ this.saigonNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.saigonNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.saigonHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.saigonOverviewSectionRef }
					synopsisSectionRef={ this.saigonSynopsisSectionRef }
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

export default SaigonProject;