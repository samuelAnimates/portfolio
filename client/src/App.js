import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from './components/Button';
import ButtonContainer from './components/ButtonContainer';
import HomePage from "./pages/HomePage";
import Header from './components/Header';

import ProjectsPageSkeleton from "./pages/ProjectsPageSkeleton";

import './App.css';

class App extends Component {
  
  state = {
		colorSchemeSuffix: "default",
		doNotTrack: true,
		fontSizeLevel: "14pt",
		isMobileView: true,
		mainPaddingLeftClassName: "padding-left-0em",
		responsiveFloat:"none",
		responsiveWidth:"50%"
  }

  headerRef = React.createRef();
  
  componentWillMount() {
		this.updateIsMobileVariable();
		
		//The following "Do Not Track" request check logic is adapted from Corbin Davenport's example at https://dev.to/corbindavenport/how-to-correctly-check-for-do-not-track-with-javascript-135d
		if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
			if (window.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.doNotTrack === "1" || navigator.msDoNotTrack === "1") {
				this.setState({doNotTrack:true});
			} else {
				this.setState({doNotTrack:false});
			}
		} else {
			this.setState({doNotTrack:false});
		}
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateIsMobileVariable.bind(this));
	};
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateIsMobileVariable.bind(this));
	};
	
	handleButtonClick = event => {
		event.preventDefault();
		if(event.target.attributes.getNamedItem("buttontype").value === "fontSizeToggle"){
			this.handleFontSizeToggleButtonClick();
		};
		if(event.target.attributes.getNamedItem("buttontype").value === "contrastToggle"){
			this.handleContrastToggleButtonClick();
		};
		if(event.target.attributes.getNamedItem("buttontype").value === "scrollToTop"){
			this.handleScrollToTopButtonClick();
		};
		if(event.target.attributes.getNamedItem("buttontype").value === "navbarLink"){
			this.handleNavLinkClick();
		};
	}

	handleContrastToggleButtonClick = () =>{
		if (this.state.isHighContrast === true){
			this.setState({isHighContrast: false,colorSchemeSuffix: "default", materialIconFill: "rgb(3,3,3)"});
		}
		else{
			this.setState({isHighContrast: true,colorSchemeSuffix: "highContrast", materialIconFill: "rgb(251,251,251)"});
		}
	};

	handleFontSizeToggleButtonClick = () =>{	
		if (this.state.fontSizeLevel === "14pt"){
			this.setState({fontSizeLevel: "16pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize ="16pt";
			
		}
		else if (this.state.fontSizeLevel === "16pt"){
			this.setState({fontSizeLevel: "20pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize = "20pt";
		}
		else if (this.state.fontSizeLevel === "20pt"){
			this.setState({fontSizeLevel: "24pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize = "24pt";
		}
		else {
			this.setState({fontSizeLevel: "14pt"}, this.updateIsMobileVariable);
			document.body.style.fontSize = "14pt";
		}
  };

	handleScrollToTopButtonClick = () =>{
		this.headerRef.current.scrollIntoView();
		this.headerRef.current.focus();
	};
  
	updateIsMobileVariable = () =>{
		if(window.innerWidth < 800) {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else if(this.state.fontSizeLevel !== "14pt") {
			this.setState({isMobileView: true,  mainPaddingLeftClassName: "padding-left-0", responsiveFloat:"none", responsiveWidth: "100%"});
		}
		else {
			this.setState({isMobileView: false, mainPaddingLeftClassName: "padding-left-6p5em", responsiveFloat:"left", responsiveWidth: "50%"});
		}
	};

  render() {
		return (
      <div className={ "clearfix font-Assistant projectPage-color-scheme-" + this.state.colorSchemeSuffix }>
		<Header
			mainPaddingLeftClassName={ this.state.mainPaddingLeftClassName }
			handleButtonClick={ this.handleButtonClick }
			colorSchemeSuffix={ this.state.colorSchemeSuffix }
			headerRef={this.headerRef}
		/>
        <Router>
            <Switch>
            	<Route exact path="/" render={props => (
					<HomePage
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						doNotTrack={ this.state.doNotTrack }
						fontSizeLevel={ this.state.fontSizeLevel }
						isMobileView={ this.state.isMobileView }
						mainPaddingLeftClassName={ this.state.mainPaddingLeftClassName }
						responsiveFloat={ this.state.responsiveFloat }
						responsiveWidth={this.state.responsiveWidth}
					/>
				)}/>
            	<Route path="/projects/:project" render={props => (
					<ProjectsPageSkeleton
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						doNotTrack={ this.state.doNotTrack }
						fontSizeLevel={ this.state.fontSizeLevel }
						headerRef={ this.headerRef }
						isMobileView={ this.state.isMobileView }
						mainPaddingLeftClassName={ this.state.mainPaddingLeftClassName }
						responsiveFloat={ this.state.responsiveFloat }
						responsiveWidth={this.state.responsiveWidth}
					/>
				)}/>
            </Switch>
        </Router>
		{ this.state.isMobileView === true &&
			<div className="bottom-0 position-fixed right-0 width-3em">
				<ButtonContainer colorSchemeSuffix = { this.state.colorSchemeSuffix }>
					<Button
						buttonType="scrollToTop"
						colorSchemeSuffix={ this.state.colorSchemeSuffix }
						onClickFunction={ this.handleButtonClick }
						text="Top"
						tabIndex="0"
					/> 
				</ButtonContainer>
			</div>
		}
      </div>
    )
  }

}

export default App;