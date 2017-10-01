import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class SectionHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			minsLeft: null,
			secsLeft: null
		};
	}

	componentDidMount() {
		let totalTime = 60;

		let countDown = () => {
			totalTime--;
			let minute = Math.floor(totalTime/60);
			let secs = Math.floor(totalTime%60);

			if (totalTime <= 0) {
				minute = secs = `0${0}`;
			} else if (secs < 10) {
				secs = `0${secs}`;
			}

			this.setState({
				minsLeft: minute,
				secsLeft: secs
			});
		};
		setInterval(countDown, 1000);
	}

	render() {
		return(
			<header className="header">
				<h4 className="header__text"><span className="header__text_bold">Question 2 of 30</span> - Multiple Choice</h4>
				<p className="header__text">Time remaining: {this.state.minsLeft}:{this.state.secsLeft}</p>
			</header>
		)
	}
	
}

export default SectionHeader;