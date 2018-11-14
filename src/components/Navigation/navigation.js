import React, { Component } from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navigation extends Component {

	constructor(props) {
		super(props);
		this.goToArticle = this.goToArticle.bind(this);
	}
	goToArticle(id) {
		const { loadArticle } = this.props;
		loadArticle(id);
	}
	render() {
		const { navigation } = this.props;

		return (
			<nav className="navigation">
				<div className="previous">
					{navigation && navigation.previous ?
						<button
							className="nav-button"
							onClick={() => this.goToArticle(navigation.previous)}
						>
							<FontAwesomeIcon icon="step-backward" />
						</button> :
						null
					}
				</div>
				<div className="next">
					{navigation && navigation.next ?
						<button
							className="nav-button"
							onClick={() => this.goToArticle(navigation.next)}
						>
							<FontAwesomeIcon icon="step-forward" />
						</button>
						: null
					}
				</div>

			</nav>
		);
	}

}
