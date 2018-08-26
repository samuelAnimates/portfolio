import React, { Component } from 'react';
import "./MediaProject.css";
import HomepageProjectLinksContainer from '../../components/HomepageProjectLinksContainer';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import ProjectPageMainSections from '../../components/ProjectPageMainSections';
import ProjectHeader from '../../components/ProjectHeader';

class MediaProject extends Component {
	projectInfo = {
		title: "Social Media Use by Community-based Organizations (CBOs)",
		synopsis:{
			mediaType: "photo",
			blurb: "A content analysis of CBOs social media posts.",
			embed: {
				src: "../assets/images/projectPhotos/media.png",
				alt: "An illustration highlighting the one-way nature of social media communication we found."
			},
			year: "2013",
			specs: [
				{
					id: "mediaSpecs01",
					lead: "Role",
					body: "Co-author, data collection, & codebook design."
				}
			]
		},
		highlights: [
			{
				id: "mediaHighlights01",
				lead: "Key Finding",
				body: "CBOs in our study used social media to push promotional information. This one-way pattern resembled that of a  newsletter or a static website."
			},
			{
				id: "mediaHighlights02",
				lead: "Citation",
				body: "Ramanadhan S, Mendez SR, Rao M, Viswanath K. Social media use by community-based organizations conducting health promotion: a content analysis. BMC Public Health. 2013;13(1). doi:10.1186/1471-2458-13-1129."
			}
		],
		overview: [
			{
				id: "mediaOverview01",
				lead: "Background",
				body: "Many community-based  organizations (CBOs) help deliver programs that promote public health. They have a lot of influence because of their relationships with local communities and stakeholders. They  may be able to use social media build and  maintain these relationships. Yet, there is a lack of data describing if and how CBOs use social media. This study looks at how CBOs doing health promotion use popular social media. What content do they share? What, if any, interactive social media tools do they use?"
			},
			{
				id: "mediaOverview02",
				lead: "Methods",
				body: "We looked at the social media profiles of CBOs doing health promotion in three MA cities. We focused on Facebook,  Twitter, and YouTube. We used content analysis techniques to  quantitatively summarize social media content. For each organization, we coded all content put forth on the three channels in a 30-day window."
			},
			{
				id: "mediaOverview03",
				lead: "Results",
				body: "We included a total of 166 organizations in our study. We found that 42% of organizations used at least one of the three channels we focused on. Self-promotion was the most common  theme for content. This accounted for 66% of posts, 63% of tweets, and 93% of videos. Most organizations updated Facebook and Twitter content at rates close to industry-recommended frequencies. We found limited interaction with audience members."
			},
			{
				id: "mediaOverview04",
				lead: "Conclusions",
				body: " Much of the CBO social media use seemed to be a one-way flow  of information to the audience. There is room for these  organizations to increase interaction and user engagement. CBOs can reap greater benefits from their time using social media. Future research should look at some of the factors that might affect social media use patterns."
			}
		],
		links: [
			{
				"id": "health0302",
				"isInternalLink": false,
				"text": "Research Article on BMC Public Health",
				"icon": "website",
				"path": "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-1129"
			}
		]	
  }
  
  mediaNavbarLinks = [{title:"Synopsis", id:"mediaNavBarLinkSynopsis"},{title:"Highlights", id:"mediaNavBarLinkHighlights"},{title:"Overview", id:"mediaNavBarLinkOverview"}];
	mediaSynopsisSectionRef = React.createRef();
	mediaHighlightsSectionRef = React.createRef();
	mediaNavbarRef = React.createRef();
	mediaOverviewSectionRef = React.createRef();

	componentDidMount() {
		document.title = "Social Meda Study Page";
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}
	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "mediaNavBarLinkSynopsis"){
			this.mediaSynopsisSectionRef.current.scrollIntoView();
			this.mediaSynopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "mediaNavBarLinkHighlights"){
			this.mediaHighlightsSectionRef.current.scrollIntoView();
			this.mediaHighlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "mediaNavBarLinkOverview"){
			this.mediaOverviewSectionRef.current.scrollIntoView();
			this.mediaOverviewSectionRef.current.focus();
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
							navbarLinks={ this.mediaNavbarLinks }
						/>	
					</div>
				}
				<ProjectHeader title={ this.projectInfo.title } />
				{ this.props.isMobileView === true &&
					<div className="padding-left-p5em padding-right-p5em">
						<SamePageNavBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							handleNavLinkClick={ this.handleNavLinkClick }
							navbarLinks={ this.mediaNavbarLinks }
						/>
					</div>
				}
				<ProjectPageMainSections
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					float={ this.props.responsiveFloat }
					isMobile={ this.props.isMobileView }
					width={ this.props.responsiveWidth }
					highlightsSectionRef={ this.mediaHighlightsSectionRef }
					projectInfo={ this.projectInfo }
					overviewSectionRef={ this.mediaOverviewSectionRef }
					synopsisSectionRef={ this.mediaSynopsisSectionRef }
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

export default MediaProject;