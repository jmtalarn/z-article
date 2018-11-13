import React, { Component } from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}
	onSearchTextChange(event) {
		console.log(this.props);
		const { searchArticle } = this.props;
		const text = event.target.value;
		this.setState({ text });
		searchArticle(text);
	}
	renderEmpty() {
		return <div className="search-results-empty">No results ...</div>;
	}
	renderResults() {
		const { results } = this.props;
		return (
			<ul>
				{results.map((result, idx) => <li key={idx}>{result.title}</li>)};
			</ul>
		);
	}
	renderSearchResults() {
		const { results } = this.props;
		return (
			this.state.text ?
				<div className="search-results">
					{results.length !== '' ? this.renderResults() : this.renderEmpty()}
				</div>
				: null
		);
	}
	render() {

		return (
			<div className="search">
				<FontAwesomeIcon className="search-icon" icon="search" />
				<input type="text"
					className="search-input"
					value={this.state.value}
					placeholder="Search for an awesome article"
					onChange={this.onSearchTextChange}
				/>
				{this.renderSearchResults()}
			</div>
		);
	}

}
