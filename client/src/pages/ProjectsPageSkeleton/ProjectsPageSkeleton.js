import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./ProjectsPageSkeleton.css";
import GenericFloatingSection from '../../components/GenericFloatingSection';
import Footer from '../../components/Footer';
import MenuBar from '../../components/MenuBar';
import MenuBarMobile from '../../components/MenuBarMobile';
import NewPageNavBar from '../../components/NewPageNavBar';
import NewPageNavBarMobile from '../../components/NewPageNavBarMobile';
import AfterProject from "../../pages/AfterProject";
import ApplesProject from "../../pages/ApplesProject";
import ArtemisProject from "../../pages/ArtemisProject";
import BodegaProject from "../../pages/BodegaProject";
import BreakfastProject from "../../pages/BreakfastProject";
import BusanProject from "../../pages/BusanProject";
import DotsProject from "../../pages/DotsProject";
import GiftpitchProject from "../../pages/GiftpitchProject";
import HealthforallProject from "../../pages/HealthforallProject";
import HernandezProject from "../../pages/HernandezProject";
import JolietProject from "../../pages/JolietProject";
import LmhtfProject from "../../pages/LmhtfProject";
import MediaProject from "../../pages/MediaProject";
import SaigonProject from "../../pages/SaigonProject";
import TarotProject from "../../pages/TarotProject";
import TeenyProject from "../../pages/TeenyProject";
import WalksProject from "../../pages/WalksProject";
import WhyuProject from "../../pages/WhyuProject";
import WikiProject from "../../pages/WikiProject";
import YucaProject from "../../pages/YucaProject";

class ProjectsPageSkeleton extends Component {
	state = {
		doNotTrack: true,
		fontSizeLevel: "14pt",
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%",
		navbarLinks: [{title:"Synopsis", id:"navBarLinkSynopsis"},{title:"Highlights", id:"navBarLinkHighlights"},{title:"Overview", id:"navBarLinkOverview"}]
	}

	synopsisSectionRef = React.createRef();
	highlightsSectionRef = React.createRef();
	overviewSectionRef = React.createRef();
	
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleNavLinkClick = event => {
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkSynopsis"){
			this.synopsisSectionRef.current.scrollIntoView();
			this.synopsisSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkHighlights"){
			this.highlightsSectionRef.current.scrollIntoView();
			this.highlightsSectionRef.current.focus();
		};
		if(event.target.attributes.getNamedItem("buttonId").value === "navBarLinkOverview"){
			this.overviewSectionRef.current.scrollIntoView();
			this.overviewSectionRef.current.focus();
		};
	}

	render() {
		return (
			<div className={ "clearfix font-Assistant projectPage-color-scheme-" + this.props.colorSchemeSuffix }>
				{ this.props.isMobileView === false &&
					<MenuBar
						navbarLinks={ this.props.navbarLinks }
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
						isMobileView={ this.props.isMobileView }
					>
						<NewPageNavBar
							colorSchemeSuffix={ this.props.colorSchemeSuffix }
						/>
					</MenuBar>
				}
				{ this.props.isMobileView === true &&
					<div className="margin-auto max-width-60em width-90pc">
						<MenuBarMobile>
							<NewPageNavBarMobile
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
							/>
						</MenuBarMobile>
					</div>
				}
				<div className={"margin-auto max-width-60em width-90pc " + this.props.mainPaddingLeftClassName}>
					<main>
						<Router>
							<GenericFloatingSection
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
							>
								<Route exact path='/projects/after' render={props => (
									<AfterProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								
								<Route exact path='/projects/apples' render={props => (
									<ApplesProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/artemis' render={props => (
									<ArtemisProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/bodega' render={props => (
									<BodegaProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/breakfast' render={props => (
									<BreakfastProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/busan' render={props => (
									<BusanProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/dots' render={props => (
									<DotsProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/giftpitch' render={props => (
									<GiftpitchProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/healthforall' render={props => (
									<HealthforallProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/hernandez' render={props => (
									<HernandezProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/joliet' render={props => (
									<JolietProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/lmhtf' render={props => (
									<LmhtfProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/media' render={props => (
									<MediaProject
										colorSchemeNameRoot="healthProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/saigon' render={props => (
									<SaigonProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/tarot' render={props => (
									<TarotProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/teeny' render={props => (
									<TeenyProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/walks' render={props => (
									<WalksProject
										colorSchemeNameRoot="artProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/whyu' render={props => (
									<WhyuProject
										colorSchemeNameRoot="videoProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/wiki' render={props => (
									<WikiProject
										colorSchemeNameRoot="webProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
								<Route exact path='/projects/yuca' render={props => (
									<YucaProject
										colorSchemeNameRoot="filmProjectPage-color-scheme-"
										colorSchemeSuffix={ this.props.colorSchemeSuffix }
										doNotTrack={ this.props.doNotTrack }
										fontSizeLevel={ this.props.fontSizeLevel }
										isMobileView={ this.props.isMobileView }
										materialIconFill={ this.props.materialIconFill }
										responsiveFloat={ this.props.responsiveFloat }
										responsiveWidth={ this.props.responsiveWidth }
									/>
								)}/>
							</GenericFloatingSection>
						</Router>
					</main>
					<Footer
						colorSchemeSuffix={ this.props.colorSchemeSuffix }
					/>
				</div>
			</div>
		);
  	}
}

export default ProjectsPageSkeleton;