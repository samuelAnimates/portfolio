import React, { Component } from 'react';
import "./WalksProject.css";
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader'

class WalksProject extends Component {
	projectInfo = {
		title: "Walks through Cambridge",
		synopsis:{
			mediaType: "photo",
			blurb: "Site-specific public art installation. Part of the Arts First festival at Harvard.",
			embed: {
				src: "../assets/images/projectPhotos/walks.jpg",
				alt: "I installed this art piece along the paths of Haravrd Yard. They're set up so you can read one paragraph, line by line, as you move forward along the path."
			},
			year: "2011",
			specs: [
				{
					id: "walksSpecs01",
					lead: "Materials",
					body: "Metal yard posts. Paper signs."
				}
			]
		},
		highlights: [
			{
				id: "walksHighlights01",
				lead: "Motivation",
				body: "During my first 2 years at Harvard, I felt isolated. Isolated from the broader student community and from the Boston-Cambridge area. I started this project to gauge how some of my peers were feeling too."
			},
			{
				id: "walksHighlights02",
				lead: "Support",
				body: "This work received funding from an ARTS FIRST '11 grant. Thanks to Khin, Cherish, Robert, Jake, Michelle and Dipona for their participation."
			}
		],
		overview: [
			{
				id: "walksOverview01",
				lead: "Process",
				body: "I took 2 groups  on 30-minute silent walks, in 1 direction away from the freshman dorms of Harvard Yard. Afterwards, I interviewed them about their experience on the walk. We also talked about their adjustment to life at Harvard. I compiled key quotes and major themes to write 2 paragraphs about the experience. I divided the text into sentences on yard signs so viewers would read 1 line at a time as they walked along a path within Harvard Yard."
			},
			{
				id: "walksOverview02",
				lead: "Yard Sign Text, Side 1",
				body: "It was sunny and warm as we walked straight past the Northwest Labs, to places we’ve never seen—it was a little amazing. Walking eventually became automatic, like riding a train looking at the scenery. Past the cobblestone and buildings with character is a different world in an actual neighborhood. The whole time I felt like I was in one of those movies where the main character goes to an alternate universe: they can see/hear everything going on, but they can’t interact with it."
			},
			{
				id: "walksOverview03",
				lead: "Yard Sign Text, Side 2",
				body: "I liked Cambridge immediately: the college town experience, with Boston right there as an option as well. But it doesn’t feel much different from Ann Arbor, aside from a big city right there. It feels less real somehow. I guess because the Square is filled with shops and boutiques, not like a big grocery store or something. Maybe it’s just because I haven’t explored Cambridge or maybe I don’t use it as a real town. In some ways I feel like living somewhere is supposed to mean grocery shopping. But I mean I don’t know what that means if I’m not living here."
			}
		]
		
	}

	walksNavbarLinks = [{title:"Synopsis", id:"walksNavBarLinkSynopsis"},{title:"Highlights", id:"walksNavBarLinkHighlights"},{title:"Overview", id:"walksNavBarLinkOverview"}];
	walksSynopsisSectionRef = React.createRef();
	walksHighlightsSectionRef = React.createRef();
	walksNavbarRef = React.createRef();
	walksOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "'Walks Through Cambridge' Project Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "walksNavBarLinkSynopsis"){
			this.walksSynopsisSectionRef.current.scrollIntoView();
			this.walksSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "walksNavBarLinkHighlights"){
			this.walksHighlightsSectionRef.current.scrollIntoView();
			this.walksHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "walksNavBarLinkOverview"){
			this.walksOverviewSectionRef.current.scrollIntoView();
			this.walksOverviewSectionRef.current.focus();
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
							navbarLinks={ this.walksNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.walksNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					doNotTrack={ this.props.doNotTrack }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.walksHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.walksOverviewSectionRef }
					synopsisSectionRef={ this.walksSynopsisSectionRef }
				/>
			</div>
		);
  	}
}

export default WalksProject;