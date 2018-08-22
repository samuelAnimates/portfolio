import React from "react";
import "./HomepageNewsSection.css";
import GenericFloatingSection from "../GenericFloatingSection";
import SheerWhiteContainer from '../SheerWhiteContainer';
import UnorderedBulletlessList from '../UnorderedBulletlessList';

const HomepageNewsSection = React.forwardRef((props, ref) => (
	<GenericFloatingSection colorSchemeSuffix={ props.colorSchemeSuffix }>
			<SheerWhiteContainer colorSchemeSuffix={ props.colorSchemeSuffix }>
				<h2 tabindex="0" ref={ ref } className="text-center">RECENT NEWS</h2>
			</SheerWhiteContainer>
			<div className={ "homepageNewsSection-color-scheme-" + props.colorSchemeSuffix + " border-style-solid border-width-2px color-inherit font-Assistant height-100pc margin-auto padding-left-3em padding-right-3em padding-top-2em" }>
				<UnorderedBulletlessList
					listItems = { props.newsItems }
				/>
			</div>
	</GenericFloatingSection>
));

export default HomepageNewsSection;