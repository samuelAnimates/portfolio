import React, { Component } from 'react';
import "./VideoEmbedContainer.css";
import Button from '../Button';
import ButtonContainer from '../ButtonContainer';


class VideoEmbedContainer extends Component {
	state = {
		doNotDisplayVideo: true
	};

	componentWillMount(){
		this.setState({doNotDisplayVideo: this.props.doNotTrack});
	};

	handleVideoEmbedButtonClick = event => {
		event.preventDefault();
		this.setState({doNotDisplayVideo: false});
	};

	render() {
		return (
			<div className="display-inline-block width-75pc">
				{ this.state.doNotDisplayVideo === false &&
					<div className="video-embed-container">
						<iframe frameBorder="0" src={ this.props.embed.url } title={ this.props.embed.title } webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true">
							It looks like your browser has trouble displaying this embedded video. <a href={ this.props.embed.url } target='_blank'>Go to this link if you wish to see the video.</a>
						</iframe>
					</div>
				}
				{ this.state.doNotDisplayVideo === true &&
					<div>
						<ButtonContainer colorSchemeSuffix={ this.props.colorSchemeSuffix }>
							<Button
								buttonType="embeddedVideo"
								onClickFunction={ this.handleVideoEmbedButtonClick }
								text="Click to display embedded video."
								colorSchemeSuffix={ this.props.colorSchemeSuffix }
								tabIndex="0"
							/>
						</ButtonContainer>
					</div>
				}
			</div>
		);
	}
}

export default VideoEmbedContainer;