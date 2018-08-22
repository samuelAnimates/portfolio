import React, { Component } from 'react';
import "./DotsProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class DotsProject extends Component {
	projectInfo = {
		title: "Connect the Dots!",
		synopsis:{
			mediaType: "photo",
			blurb: "Site-specific art installation. Location: 2 public bathrooms in Harvard College housing.",
			embed: {
				src: "../assets/images/projectPhotos/dots-3.jpg",
				alt: "A penguin themed connect-the-dot poster hung on the wall of a public bathroom."
			},
			year: "2013",
			specs: [
				{
					id: "dotsSpecs01",
					lead: "Role",
					body: "Director, editor, and project manager."
				},
				{
					id: "dotsSpecs02",
					lead: "Materials",
					body: "Paper, pens, tape, and ribbon."
				}
			]
		},
		highlights: [
			{
				id: "dotsHighlights01",
				lead: "Lessons Learned",
				body: "Interactions can create fun surprises, even in a familiar space."
			},
			{
				id: "dotsHighlights02",
				lead: "Support",
				body: "This project received funding from the General Education program at Harvard University and logistic support from the Quincy House dorm."
			}
		],
		overview: [
			{
				id: "dotsOverview01",
				lead: "Process",
				body: "I designed a connect-the-dots banner to match the penguin mascot theme of Harvard's Quincy House. I printed the posters and hung them in two Quincy House public bathrooms. I attached pens to the paper towel dispenser. Anonymous classmates filled in the posters over the next 2 weeks. "
			}
		]
		
	}

	dotsNavbarLinks = [{title:"Synopsis", id:"dotsNavBarLinkSynopsis"},{title:"Highlights", id:"dotsNavBarLinkHighlights"},{title:"Overview", id:"dotsNavBarLinkOverview"}];
	dotsSynopsisSectionRef = React.createRef();
	dotsHighlightsSectionRef = React.createRef();
	dotsNavbarRef = React.createRef();
	dotsOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'Connect the Dots!' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "dotsNavBarLinkSynopsis"){
			this.dotsSynopsisSectionRef.current.scrollIntoView();
			this.dotsSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "dotsNavBarLinkHighlights"){
			this.dotsHighlightsSectionRef.current.scrollIntoView();
			this.dotsHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "dotsNavBarLinkOverview"){
			this.dotsOverviewSectionRef.current.scrollIntoView();
			this.dotsOverviewSectionRef.current.focus();
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
							navbarLinks={ this.dotsNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.dotsNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.dotsHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.dotsOverviewSectionRef }
					synopsisSectionRef={ this.dotsSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default DotsProject;