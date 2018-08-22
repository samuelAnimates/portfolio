import React from "react";
import "./ResponsiveCtoLFloat.css";

class ResponsiveCtoLFloat extends React.Component {

	render(){
		var style = {
			float: this.props.float,
			width: this.props.width
		};

		return (
			<div className="margin-auto" style={ style }>
				{ this.props.children }
			</div>
		)
	}

};

export default ResponsiveCtoLFloat;