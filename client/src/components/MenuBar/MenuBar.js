import React from "react";
import "./MenuBar.css";

const MenuBar = props => (	
	<div className="font-Overpass position-fixed top-0">
		{ props.children }		
	</div>
);
export default MenuBar;