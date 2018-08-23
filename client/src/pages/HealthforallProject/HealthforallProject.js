import React, { Component } from 'react';
import "./HealthforallProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class HealthforallProject extends Component {
  projectInfo = {
		title: "Health for All",
		synopsis:{
			mediaType: "photo",
			blurb: "A partnership to increase knowledge of clinical trials in Chicago's underrepresented communities.",
			embed: {	
				src: "../assets/images/projectPhotos/healthforall.jpg",
				alt: "Health for All logo."
			},
			year: "2018",
			specs: [
				{
					id: "healthforallSpecs01",
					lead: "Role",
					body: "guided user-centered design process for first project year; led co-design sessions and usability tests."
				}
			]
		},
		highlights: [
			{
				id: "healthforallHighlights01",
				lead: "Contributions",
				body: "F"
			}
		],
		overview: [
			{
				id: "healthforallOverview01",
				lead: "Background",
				body: "Many communities face health disparities. They might get certain diseases more often than others. Or they might face complications from a common disease more often. Clinical trials help find new treatments for disease. However, not all communities take part in clinical trials at the same rate. This means we can't be so sure that new medical breakthroughs will work for everyone. This pattern might make health disparities worse."
			},
			{
				id: "healthforallOverview02",
				lead: "Project Goals",
				body: "Northwestern University and Chicago Public Library teamed up to create Health for All. Through this project, they hope to teach people from all communities about clinical trials. Long-term, they hope to help make participation in clinical trials more equal all across Chicago."
			},
			{
				id: "healthforallOverview03",
				lead: "My Involvement",
				body: "Northwestern University and Chicago Public Library teamed up to create Health for All. Through this project, they hope to teach people from all communities about clinical trials. Long-term, they hope to help make participation in clinical trials more equal all across Chicago."
			}
		],
		links: [
			{
				"isInternalLink": false,
				"id": "health0101",
				"text": "Health for All website",
				"icon": "website",
				"path": "http://healthforallproject.org/"
			},
		]		
  }
  
  healthforallNavbarLinks = [{title:"Synopsis", id:"healthforallNavBarLinkSynopsis"},{title:"Highlights", id:"healthforallNavBarLinkHighlights"},{title:"Overview", id:"healthforallNavBarLinkOverview"}];
	healthforallSynopsisSectionRef = React.createRef();
	healthforallHighlightsSectionRef = React.createRef();
	healthforallNavbarRef = React.createRef();
	healthforallOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'10 Days in healthforall' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "healthforallNavBarLinkSynopsis"){
			this.healthforallSynopsisSectionRef.current.scrollIntoView();
			this.healthforallSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "healthforallNavBarLinkHighlights"){
			this.healthforallHighlightsSectionRef.current.scrollIntoView();
			this.healthforallHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "healthforallNavBarLinkOverview"){
			this.healthforallOverviewSectionRef.current.scrollIntoView();
			this.healthforallOverviewSectionRef.current.focus();
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
							navbarLinks={ this.healthforallNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.healthforallNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.healthforallHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.healthforallOverviewSectionRef }
					synopsisSectionRef={ this.healthforallSynopsisSectionRef }
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

export default HealthforallProject;