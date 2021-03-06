import React from "react";

import Card from "../component/Card.jsx";
import Card2 from "../component/Card2.jsx";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Characters</h1>
				<div className="row scrolling-wrapper" id="horizontal">
					<Card />
				</div>
				<br />
				<br />
				<h1>Planets</h1>
				<div className="row scrolling-wrapper" id="horizontal">
					<Card2 />
				</div>
			</div>
		);
	}
}
