import React, { Component } from 'react';
import './search.css'
	;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Search extends Component {

	render() {

		return (
			<div className="search">
				<FontAwesomeIcon className="search-icon" icon="search" />
				<input type="text"
					className="search-input"
					placeholder="Search for an awesome article"
				/>
				<div className="search-results">
					<div className="search-results-empty">
						No results ...
					</div>
				</div>
			</div>
		);
	}

}
