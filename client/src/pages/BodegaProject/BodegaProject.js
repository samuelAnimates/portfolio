import React, { Component } from 'react';
import "./BodegaProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class BodegaProject extends Component {

	projectInfo = {
		title: "A Bodega",
		synopsis:{
			mediaType: "video",
			blurb: "An animated documentary about the food for sale in a Lawrence, MA, bodega.",
			embed: {
				url: "https://player.vimeo.com/video/91566613",
				title: "'A Bodega' full film on Vimeo."
			},
			year: "2014",
			specs: [
				{
					id: "bodegaSpecs01",
					lead: "Techniques",
					body: "Experimental documentary made with object animation, pixilation & live action video."
				},
				{
					id: "bodegaSpecs02",
					lead: "Length",
					body: "05 min. 58 sec."
				}
			]
		},
		highlights: [
			{
				id: "bodegaHighlights01",
				lead: "Lessons learned",
				body: "Animation can be a powerful documentary tool to start conversations around social equity where they might not usually come up."
			},
			{
				id: "bodegaHighlights02",
				lead: "Support",
				body: "Created with financial support from the Harvard Visual and Environmental Studies department, a Cordeiro Global Health and Health Policy Summer Research Fellowship, and a grant from the Harvard College Research Program."
			}
		],
		overview: [
			{
				id: "bodegaOverview01",
				lead: "Background",
				body: "Mass media often discuss social issues like food access in terms of what's lacking. What is a particular part of the city missing? What outside help do we need to affect change? So I took a look at this issue of food access in Lawrence, MA, focusing on the assets in place. I wanted to highlight existing opportunities for change within the city. This method also gives credit to local residents for their current efforts in addressing this issue. This highlights the work residents have done despite systemic hurdles that produce food access issues across the country."
			},
			{
				id: "bodegaOverview02",
				lead: "Process",
				body: "Over the course of 3 months, I filmed observational footage at several bodegas in Lawrence, MA, that sell produce. I conducted interviews with members of the Lawrence Mayor's Health Task Force and the owners of one such bodega, focusing on the topic of food access and the food for sale in this corner store. Over the course of 6 months, I used stop-motion animation sequences to document food bought at the bodega, illustrate dishes that local residents might make out of the ingredients, and contextualize the bodega within the city. Through an iterative process of animation, editing, and critique, I dropped some segments from the film and chose others to expand on until the final shape of the film was formed."
			},
			{
				id: "bodegaOverview03",
				lead: "Recognition",
				body: "National Academy of Medicine's Visualize Health Equity project, official selection and panel speaker, Washington DC, 2017. Chicago Onscreen: Local Film Showcase, official selection, Chicago Park District, 2017. Chicago REEL Shorts Film Festival, Best Documentary nomination, Chicago, IL, 2014. Blue Plum Animation Festival, official selection, Johnson City, TN, 2014."
			}
		],
		"links": [
			{
				"isInternalLink": false,
				"id": "highlights0302",
				"text": "'A Bodega' Film on Vimeo",
				"path": "https://vimeo.com/91566613",
				"icon": "film"
			}
		]	
  }
  
	bodegaNavbarLinks = [{title:"Synopsis", id:"bodegaNavBarLinkSynopsis"},{title:"Highlights", id:"bodegaNavBarLinkHighlights"},{title:"Overview", id:"bodegaNavBarLinkOverview"}];
	bodegaSynopsisSectionRef = React.createRef();
	bodegaHighlightsSectionRef = React.createRef();
	bodegaNavbarRef = React.createRef();
	bodegaOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'A Bodega' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "bodegaNavBarLinkSynopsis"){
			this.bodegaSynopsisSectionRef.current.scrollIntoView();
			this.bodegaSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "bodegaNavBarLinkHighlights"){
			this.bodegaHighlightsSectionRef.current.scrollIntoView();
			this.bodegaHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "bodegaNavBarLinkOverview"){
			this.bodegaOverviewSectionRef.current.scrollIntoView();
			this.bodegaOverviewSectionRef.current.focus();
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
							navbarLinks={ this.bodegaNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.bodegaNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.bodegaHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.bodegaOverviewSectionRef }
					synopsisSectionRef={ this.bodegaSynopsisSectionRef }
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

export default BodegaProject;