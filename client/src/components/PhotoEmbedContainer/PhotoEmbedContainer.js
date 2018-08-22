import React from "react";
import "./PhotoEmbedContainer.css";

const PhotoEmbedContainer = props => (
	<div className="display-inline-block width-75pc">
		<img className="width-100pc" src={ props.embed.src } alt={ props.embed.alt }/>
	</div>
);

export default PhotoEmbedContainer;