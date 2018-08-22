import React from "react";
import "./UnorderedBulletlessList.css";

const UnorderedBulletlessList = props => (
	<ul className="display-block list-style-position-outside">
		{ props.listItems.map(listItem =>
			<li key={ listItem.id } className="display-block text-indent-neg1p7em margin-bottom-p35em margin-left-1p7em">
				<span className="font-weight-600">{ listItem.lead }:</span> { listItem.body }
			</li>
		)}
	</ul>
);

export default UnorderedBulletlessList;