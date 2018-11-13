import React, { Component } from 'react';
import './navigation.css'
	;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navigation extends Component {

	render() {

		return (
			<nav className="navigation">
				<button className="nav-button">
					<FontAwesomeIcon icon="step-backward" />
				</button>
				<button className="nav-button">
					<FontAwesomeIcon icon="step-forward" />
				</button>
			</nav>
		);
	}

}
