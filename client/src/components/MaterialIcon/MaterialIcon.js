import React from "react";

const MaterialIcon = props => (	
	<div className="display-inline-block">
		{props.iconName === "accountCircle" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/><path d="M0 0h24v24H0z" fill="none"/>	
			</svg>
		}
		{ props.iconName === "code" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d='M0 0h24v24H0V0z' fill='none'/><path d='M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'/>
			</svg>
		}
		{ props.iconName === "document" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d='M0 0h24v24H0z' fill='none'/><path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'/>
			</svg>
		}
		{ props.iconName === "film" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d='M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z'/><path d='M0 0h24v24H0z' fill='none'/>
			</svg>
		}
		{ props.iconName === "map" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d='M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z'/><path d='M0 0h24v24H0z' fill='none'/>	
			</svg>
		}
		{ props.iconName === "page" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 0h24v24H0z" fill="none"/><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"/>
			</svg>
		}
		{props.iconName === "slides" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"/><path fill="none" d="M0 0h24v24H0V0z"/>
			</svg>
		}
		{ props.iconName === "video" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d='M0 0h24v24H0V0z' fill='none'/><path d='M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z'/>
			</svg>
		}
		{props.iconName === "website" &&
			<svg aria-hidden="true" className="icon" fill={ props.materialIconFill } height="16" viewBox="0 0 22 22" width="20" xmlns="http://www.w3.org/2000/svg">
				<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z'/><path d='M0 0h24v24H0z' fill='none'/>
			</svg>
		}
	</div>
);
export default MaterialIcon;