import React, { Component } from 'react';
import './HomePage.css';
import Footer from '../../components/Footer';
import HomepageAboutMeSection from '../../components/HomepageAboutMeSection';
import HomepageProjectsSection from '../../components/HomepageProjectsSection';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import SamePageNavBar from '../../components/SamePageNavBar';
import SamePageNavBarMobile from '../../components/SamePageNavBarMobile';
import SheerWhiteContainer from '../../components/SheerWhiteContainer';

class HomePage extends Component {

	state = { 
		navbarClassName: "margin-auto margin-bottom-2em",
		navbarLinksClassName: "float-left font-size-p85em padding-left-0 text-center",
		navbarLinks: [{title:"About", id:"navBarLinkAbout"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Animation", id:"navBarLinkAnimation"},{title:"Health", id:"navBarLinkHealth"},{title:"Web", id:"navBarLinkWeb"},{title:"Video", id:"navBarLinkVideo"},{title:"Art", id:"navBarLinkArt"}]
	};

	projectData = { 
		aboutMeSection:{
			quote: "I could trace back about 80% of my humor to specific SpongeBob episodes.",
			paragraphs: [
				{
					id: "aboutMeParagraph01",
					lead: "In short",
					body: "I make animations. I'm a community-based researcher. And I do front end web development, with an eye on web accessibility. I see the privilege of having chances to gain these skills; I want to use these chances to open up more rom for more people in the spaces I occupy."
				},
				{	
					id: "aboutMeParagraph02",
					lead: "Interests",
					body: "community-based research, social determinants of health, accessibility, digital documentary."
				}
			],
			links: [
				{
					"isInternalLink": false,
					"id": "aboutLink01",
					"text": "My CV as a Published Google Doc",
					"icon": "document",
					"path": "https://docs.google.com/document/d/e/2PACX-1vSMS4XleOQlHUDp5mbn00Z29u8Pbg3EhHyVDzDJag1cWMi6uTh6vCOnqk6BYG7L16BAlchdHuvuq5zb/pub"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink02",
					"text": "My Vimeo Profile",
					"icon": "video",
					"path": "https://www.vimeo.com/user15152945"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink03",
					"text": "My GitHub Profile",
					"icon": "code",
					"path": "https://github.com/smendez92"
				},
				{
					"isInternalLink": false,
					"id": "aboutLink04",
					"text": "My LinkedIn Profile",
					"icon": "accountCircle",
					"path": "https://www.linkedin.com/in/samuel-r-mendez/"
				},
			]
		},
		highlightsSection: {
			id: "HIGHLIGHTS",
			projects:	[
				{
					"id": "highlights01",
					"title": "10 Days in Saigon",
					"description": "A 10-week web series documenting wheelchair travel in Ho Chi Minh City, Vietnam.",
					"icon": "./assets/images/homepageIcons/homepage-icon-saigon.svg",
					"iconAlt": "'10 Days' logo: three overlayed Accessible Icons, suggesting fast forward movement.",
					"projectPagePath": "/projects/saigon",
					"links": [
						{
							"isInternalLink": true,
							"path": "/projects/saigon",
							"componentPage": "SaigonProject",
							"id": "highlights0101",
							"text": "'10 Days' Overview",
							"icon": "page"
						},
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
				},
				{
					"id": "highlights02",
					"title": "Wheelchair Travel A11Y Wiki",
					"description": "In-progress demo of a wheelchair travel accessibility (A11Y) wiki.",
					"icon": "./assets/images/homepageIcons/homepage-icon-wiki.svg",
					"iconAlt": "'A11Y Wiki' logo: a spinning gear/flower made up of geometric shapes.",
					"projectPagePath": "/projects/wiki",
					"links": [
						{
							"isInternalLink": true,
							"path": "/projects/wiki",
							"componentPage": "WikiProject",
							"id": "highlights0201",
							"text": "'A11Y Wiki' Overview",
							"icon": "page",
							
						},
						{
							"isInternalLink": false,
							"id": "highlights0202",
							"text": "'A11Y Wiki' GitHub Repo",
							"path": "https://github.com/smendez92/wheelchairWiki",
							"icon": "code"
						},
						{
							"isInternalLink": false,
							"id": "highlights0204",
							"text": "'A11Y Wiki' Demo on Heroku",
							"path": "https://wheelchairtravelwiki.herokuapp.com",
							"icon": "website"
						}
					]
				},
				{
					"id": "highlights03",
					"title": "A Bodega",
					"description": "An experimental documentary; an asset-based look at health equity, made with ingredients from a bodega in Lawrence, MA.",
					"icon": "./assets/images/homepageIcons/homepage-icon-bodega.svg",
					"iconAlt": "'A Bodega' cartoon logo: a frying pan.",
					"projectPagePath": "/projects/bodega",
					"links": [
						{
							"isInternalLink": true,
							"path": "/projects/bodega",
							"componentPage": "BodegaProject",
							"id": "highlights0301",
							"text": "'A Bodega' Overview",
							"icon": "page"
						},
						{
							"isInternalLink": false,
							"id": "highlights0302",
							"text": "'A Bodega' Film on Vimeo",
							"path": "https://vimeo.com/91566613",
							"icon": "film"
						}
					]
				}
			]
		},
		projectSections: [
			{
				"title": "Animated Films",
				"id": "animationSection",
				"projects": [
					{
						"id": "animation01",
						"title": "No One Can Hear You",
						"description": "A mixed-media animation: the memories of Officer Hernández, an astronaut losing contact with her crewmates and drifting off into space.",
						"icon": "./assets/images/homepageIcons/homepage-icon-hernandez.svg",
						"iconAlt": "",
						"projectPagePath": "/projects/hernandez",
						"links": [
							{
								"isInternalLink": true,
								"id": "animation0101",
								"path": "/projects/hernandez",
								"componentPage": "HernandezProject",
								"text": "'No One Can Hear You' Overview",
								"icon": "page",
							},
							{
								"isInternalLink": false,
								"id": "animation0102",
								"text": "'No One Can Hear You' excerpt on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/233932687"
							}
						]
					},
					{
						"id": "animation02",
						"title": "By Foot: Busan and the Sea",
						"description": "An experimental documentary: a solo trip through Busan, South Korea.",
						"icon": "./assets/images/homepageIcons/homepage-icon-busan.svg",
						"iconAlt": "",
						"projectPagePath": "/projects/busan",
						"links": [
							{
								"isInternalLink": true,
								"id": "animation0201",
								"path": "/projects/busan",
								"componentPage": "BusanProject",
								"text": "'Busan' Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "animation0202",
								"text": "'Busan' Trailer on Vimeo",
								"path": "https://vimeo.com/203944431",
								"icon": "video"
							}
						]
					},
					{
						"id": "animation03",
						"title": "Persefone's Breakfast",
						"description": "An experimental animation: Persephone's voice messages to Hades as she leaves the Underworld once and for all.",
						"icon": "./assets/images/homepageIcons/homepage-icon-breakfast.svg",
						"iconAlt": "",
						"projectPagePath": "/projects/breakfast",
						"links": [
							{
								"isInternalLink": true,
								"id": "animation0301",
								"path": "/projects/breakfast",
								"componentPage": "BreakfastProject",
								"text": "'Persefone's Breakfast' Overview",
								"icon": "page",
								
							},
							{
								"isInternalLink": false,
								"id": "animation0302",
								"text": "'Persefone's Breakfast' Film on Vimeo",
								"path": "http://www.vimeo.com/134973465",
								"icon": "film",
								
							}
						]
					},
					{
						"id": "animation04",
						"title": "How to Make Yuca Frita",
						"description": "An instructional animation: peel, chop, remove the stringy core, boil, fry, and eat.",
						"icon": "./assets/images/homepageIcons/homepage-icon-yuca.svg",
						"iconAlt": "",
						"projectPagePath": "/projects/yuca",
						"links": [
							{
								"isInternalLink": true,
								"id": "animation0401",
								"path": "/projects/yuca",
								"componentPage": "YucaProject",
								"text": "'Yuca' Overview",
								"icon": "page",
							},
							{
								"isInternalLink": false,
								"id": "animation0402",
								"text": "'Yuca' Film on Vimeo",
								"path": "http://www.vimeo.com/95826024",
								"icon": "film"
							}
						]
					},
					{
						"id": "animation05",
						"title":"After, After That",
						"icon":"./assets/images/homepageIcons/homepage-icon-after.svg",
						"iconAlt": "",
						"description":"An experimental documentary. A cross between two marks.",
						"projectPagePath": "/projects/after",
						"links":[
							{
								"isInternalLink": true,
								"id": "animation0501",
								"path": "/projects/after",
								"componentPage": "AfterProject",
								"text": "'After, After That' Overview",
								"icon": "page",
							},
							{
								"isInternalLink": false,
								"id": "animation0502",
								"text": "After, After That' Film on Vimeo",
								"icon": "film",
								"path": "https://vimeo.com/55657740"
							}
						]
					}
				]
			},
			{
				"title": "Public Health Research",
				"id": "healthSection",
				"projects": [
					{
						"id": "health01",
						"title": "Health for All",
						"icon": "./assets/images/homepageIcons/homepage-icon-nlm.svg",
						"iconAlt": "",
						"description": "Ongoing prototype development for a clinical trial informational tool under development in partnership with Chicago Public Libraries.",
						"projectPagePath": "/projects/health",
						"links": [
							{
								"isInternalLink": true,
								"id": "health0101",
								"path": "/projects/healthforall",
								"componentPage": "HealthforallProject",
								"text": "'Health for All' Overview",
								"icon": "page"
							}
						]
					},
					{
						"id": "health03",
						"title": "Social Media Use by Community-Based Organizations",
						"icon": "./assets/images/homepageIcons/homepage-icon-media.svg",
						"iconAlt": "",
						"description": "A content analysis of social media content by community-based organizations conducting health outreach.",
						"projectPagePath": "/projects/media",
						"links": [
							{
								"isInternalLink": true,
								"id": "health0301",
								"path": "/projects/media",
								"componentPage": "Project",
								"text": "Social Media Study Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "health0302",
								"text": "Research Article on BMC Public Healt",
								"icon": "website",
								"path": "https://bmcpublichealth.biomedcentral.com/articles/10.1186/1471-2458-13-1129"
							}
						]
					},
					{
						"id": "health04",
						"title": "Bodegas Saludables",
						"icon": "./assets/images/homepageIcons/homepage-icon-lmhtf.svg",
						"iconAlt": "",
						"description": "Video explaining a community research partner's public health program.",
						"projectPagePath": "/projects/lmhtf",
						"links": [
							{
								"isInternalLink": true,
								"id": "health0401",
								"path": "/projects/lmhtf",
								"componentPage": "LmhtfProject",
								"text": "'Bodegas Saludables' Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "health0402",
								"text": "'Bodegas Saludables'excerpt on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/231980215"
							}
						]
					}
				]
			},
			{
				"title": "Web Development",
				"id": "webSection",
				"projects": [
					{
						"id": "web01",
						"title": "AR-Tarot",
						"icon": "./assets/images/homepageIcons/homepage-icon-tarot.svg",
						"iconAlt": "",
						"description": "An online tarot reading utilizing A-frame to embed an augmented reality display.",
						"projectPagePath": "/projects/tarot",
						"links": [
							{
								"isInternalLink": true,
								"id": "web0101",
								"path": "/projects/tarot",
								"componentPage": "TarotProject",
								"text": "'AR-Tarot' Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "web0102",
								"text": "'AR-Tarot' GitHub Repo",
								"icon": "code",
								"path": "https://github.com/smendez92/AR-tarot"
							},
							{
								"isInternalLink": false,
								"id": "web0103",
								"text": "'AR-Tarot' Demo on GitHub Pages",
								"icon": "website",
								"path": "https://smendez92.github.io/AR-tarot/index"
							}
						]
					},
					{
						"id": "web02",
						"title": "Everything But Apples",
						"icon": "./assets/images/homepageIcons/homepage-icon-apples.svg",
						"iconAlt": "",
						"description": "A multiplayer web-enabled party game; a social-digital version of Apples to Apples.",
						"projectPagePath": "/projects/apples",
						"links": [
							{
								"isInternalLink": true,
								"id": "web0201",
								"path": "/projects/apples",
								"componentPage": "ApplesProject",
								"text": "'Apples' Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "web0202",
								"text": "''Apples' GitHub Repo",
								"icon": "code",
								"path": "https://github.com/amgault/everythingButApples"
							},
							{
								"isInternalLink": false,
								"id": "web0203",
								"text": "'Apples' Demo on Heroku",
								"icon": "website",
								"path": "https://everythingbutapples.herokuapp.com"
							}
						]
					},
					{
						"id": "web03",
						"title": "GiftPitch Demo",
						"icon": "./assets/images/homepageIcons/homepage-icon-giftpitch.svg",
						"iconAlt": "",
						"description": "Front-end logic for a web app letting users take a personality quiz to help find the perfect gift for someone from Amazon, Etsy, or Ebay.",
						"projectPagePath": "/projects/giftpitch",
						"links": [
							{
								"isInternalLink": true,
								"id": "web0301",
								"path": "/projects/giftpitch",
								"componentPage": "GiftpitchProject",
								"text": "GiftPitch Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "web0302",
								"text": "GiftPitch Walkthrough Video on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/235300604"
							},
							{
								"isInternalLink": false,
								"id": "web0303",
								"text": "GiftPitch GitHub Repo",
								"icon": "code",
								"path": "https://github.com/jmoc1181/GiftProject"
							}
						]
					}
				]
			},
			{
				"title": "Videos",
				"id": "videoSection",
				"projects": [
					{
						"id": "video01",
						"title": "Spanish Community Center (SCC) Promo Video",
						"icon": "./assets/images/homepageIcons/homepage-icon-joliet.svg",
						"iconAlt": "",
						"description": "A promotional video for the Spanish Community Center in Joliet.",
						"projectPagePath": "/projects/joliet",
						"links": [
							{
								"isInternalLink": true,
								"id": "video0101",
								"path": "/projects/joliet",
								"componentPage": "JolietProject",
								"text": "SCC Promo Video Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "video0102",
								"text": "SCC Promo Video on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/221224584"
							}
						]
					},
					{
						"id": "video02",
						"title": "Artemis I Fundraiser Video",
						"icon": "./assets/images/homepageIcons/homepage-icon-artemis.svg",
						"iconAlt": "",
						"description": "A fundraising video for a high-altitude balloon launch by South Side Hackerspace: Chicago to document the 2017 solar eclipse.",
						"projectPagePath": "/projects/artemis",
						"links": [
							{
								"isInternalLink": true,
								"id": "video0201",
								"path": "/projects/artemis",
								"componentPage": "ArtemisProject",
								"text": "'Artemis I' Video Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "video0202",
								"text": "'Artemis I' Video on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/223448852"
							},
							{
								"isInternalLink": false,
								"id": "video0203",
								"text": "'Artemis I' Fundraising Campaign",
								"icon": "website",
								"path": "https://www.generosity.com/education-fundraising/experience-the-2017-eclipse-with-us-artemis-i"
							}
						]
					},
					{
						"id": "video03",
						"title": "WhyUEdu Info Series",
						"icon": "./assets/images/homepageIcons/homepage-icon-whyu.svg",
						"iconAlt": "",
						"description": "2 sets of informational videos & worksheets on aspects of the US college application process.",
						"projectPagePath": "/projects/whyu",
						"links": [
							{
								"isInternalLink": true,
								"id": "video0301",
								"path": "/projects/whyu",
								"componentPage": "WhyuProject",
								"text": "WhyUEdu Series Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "video0302",
								"text": "WhyUEdu Series Excerpt 1 on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/128663374/341f06632a"
							},
							{
								"isInternalLink": false,
								"id": "video0303",
								"text": "WhyUEdu Series Excerpt 2 on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/128663372/553014bdd5"
							},
							{
								"isInternalLink": false,
								"id": "video0304",
								"text": "WhyUEdu Series Worksheet PDF",
								"icon": "document",
								"path": "./assets/documents/Why+Essay+Planning+Worksheet.pdf"
							}
						]
					},
					{
						"id": "video04",
						"title": "'Teeny' Kickstarter Video",
						"icon": "./assets/images/homepageIcons/homepage-icon-teeny.svg",
						"iconAlt": "",
						"description": "A fundraising video for a Kickstarter campaign promoting a Taiwanese artisan's work.",
						"projectPagePath": "/projects/teeny",
						"links": [
							{
								"isInternalLink": true,
								"id": "video0401",
								"path": "/projects/teeny",
								"componentPage": "TeenyProject",
								"text": "'Teeny' Video Overview",
								"icon": "page"
							},
							{
								"isInternalLink": false,
								"id": "video0402",
								"text": "'Teeny' Fundraising Video on Vimeo",
								"icon": "video",
								"path": "http://www.vimeo.com/172990828"
							},
							{
								"isInternalLink": false,
								"id": "video0403",
								"text": "Teeny' Fundraising Campaign",
								"icon": "website",
								"path": "https://www.kickstarter.com/projects/849732009/teeny-artisan-coin-holders-for-your-change-and-ess"
							}
						]
					}
				]
			},
			{
				"title": "Art In Person",
				"id": "artSection",
				"projects": [
					{
						"id": "art01",
						"title": "Connect the Dots!",
						"icon": "./assets/images/homepageIcons/homepage-icon-dots.svg",
						"iconAlt": "",
						"description": "An interactive art installation taking place in a public bathroom.",
						"projectPagePath": "/projects/dots",
						"links": [
							{
								"isInternalLink": true,
								"id": "art0101",
								"path": "/projects/dots",
								"componentPage": "DotsProject",
								"text": "'Dots' Overview",
								"icon": "page"
							}
						]
					},
					{
						"id": "art02",
						"title": "Walks Through Cambridge",
						"icon": "./assets/images/homepageIcons/homepage-icon-walks.svg",
						"iconAlt": " ",
						"description": "A site-specific public art installation in Harvard Yard, produced for Harvard ARTS FIRST 2011.",
						"projectPagePath": "/projects/walks",
						"links": [
							{
								"isInternalLink": true,
								"id": "art0201",
								"path": "/projects/walks",
								"componentPage": "WalksProject",
								"text": "'Walks' Overview",
								"icon": "page"
							}
						]
					}
				]
			}
		]
	};
	
	aboutSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	navbarRef = React.createRef();
	animationSectionRef = React.createRef();
	healthSectionRef = React.createRef();
	webSectionRef = React.createRef();
	videoSectionRef = React.createRef();
	artSectionRef = React.createRef();
	projectSectionRefs = [this.animationSectionRef, this.healthSectionRef, this.webSectionRef, this.videoSectionRef, this.artSectionRef]

	componentDidMount() {
		document.title = "Samuel Animates";

	};

	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAbout"){
			this.aboutSectionRef.current.scrollIntoView();
			this.aboutSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkNews"){
			this.newsSectionRef.current.scrollIntoView();
			this.newsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkAnimation"){
			this.animationSectionRef.current.scrollIntoView();
			this.animationSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHealth"){
			this.healthSectionRef.current.scrollIntoView();
			this.healthSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkWeb"){
			this.webSectionRef.current.scrollIntoView();
			this.webSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkVideo"){
			this.videoSectionRef.current.scrollIntoView();
			this.videoSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkArt"){
			this.artSectionRef.current.scrollIntoView();
			this.artSectionRef.current.focus();
		};
	}

  render() {
    return (
		<div className={ "clearfix homepage-color-scheme-" + this.props.colorSchemeSuffix }>
			{ this.props.isMobileView === false &&
				<MenuBar
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
					isMobileView={ this.props.isMobileView }
				>
					<SamePageNavBar
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						handleNavLinkClick={ this.handleNavLinkClick }
						handleKeyPress={ this.handleKeyPress }
						navbarLinks={ this.state.navbarLinks }
					/>
				</MenuBar>
			}
			<div className={ "margin-auto max-width-50em width-85pc "  + this.props.mainPaddingLeftClassName }>
				<main>
					{ this.props.isMobileView === true &&
						<MenuBarMobile
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							isMobileView={ this.props.isMobileView }
						>
							<SamePageNavBarMobile
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
								navbarLinks={ this.state.navbarLinks }
								handleButtonClick={ this.handleButtonClick }
								handleNavLinkClick={ this.handleNavLinkClick }
								navbarRef={ this.navbarRef }
							>
								<SheerWhiteContainer colorSchemeSuffix={ this.props.colorSchemeSuffix }>
									<p tabindex="0" className="font-weight-600 text-center" ref={ this.navbarRef }>Jump Down</p>
								</SheerWhiteContainer>
							</SamePageNavBarMobile>
						</MenuBarMobile>
					}
					<HomepageAboutMeSection
						blurbWidth={ this.props.blurbWidth }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						float={ this.props.responsiveFloat }
						quote={ this.projectData.aboutMeSection.quote }
						links={ this.projectData.aboutMeSection.links }
						materialIconFill={ this.props.materialIconFill }
						portraitWidth={ this.props.portraitWidth }
						paragraphs={ this.projectData.aboutMeSection.paragraphs }
						responsiveFloat={ this.props.responsiveFloat }
						ref={ this.aboutSectionRef }
					/>
					<HomepageProjectsSection
						id={ this.projectData.highlightsSection.id }
						float={ this.props.responsiveFloat }	
						title="Highlighted Projects"
						projects={ this.projectData.highlightsSection.projects }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						materialIconFill={ this.props.materialIconFill }
						ref={ this.highlightsSectionRef }
					/>
					{ this.projectData.projectSections.map((projectSection, index) =>
						<HomepageProjectsSection
							id={ projectSection.id }
							key={ projectSection.id }
							float={ this.props.responsiveFloat }	
							title={ projectSection.title }
							projects={ projectSection.projects }
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
							materialIconFill={ this.props.materialIconFill }
							ref={ this.projectSectionRefs[index] }
						/>
					)}
				</main>
				<Footer
					colorSchemeSuffix={ this.props.colorSchemeSuffix }
				/>
			</div>
		</div>
    );
  };
}

export default HomePage;
