import React, { Component } from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ArticleLink = ({ title, id, onClick }) => {
	return (
		<li>
			<button className="article-link" onClick={() => onClick(id)}>{title}</button>
		</li>);
};

export class Search extends Component {

	constructor(props) {
		super(props);

		this.state = { text: '' };
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
		this.goToArticle = this.goToArticle.bind(this);
	}

	onSearchTextChange(event) {

		const { searchArticle } = this.props;
		const text = event.target.value;

		this.setState({ text });
		searchArticle(text);
	}
	goToArticle(id) {
		const { loadArticle, resetSearch } = this.props;
		this.setState({ text: '' });
		loadArticle(id);
		resetSearch();

	}
	renderEmpty() {
		return <div className="search-results-empty">No results ...</div>;
	}
	renderResults() {
		const { results } = this.props;
		return (
			<ul>
				{results.map((result, idx) => (
					<ArticleLink
						key={idx}
						id={result.id}
						title={result.title}
						onClick={this.goToArticle}
					/>
				)
				)}
			</ul>
		);
	}
	renderSearchResults() {
		const { results } = this.props;
		return (
			this.state.text ?
				<div className="search-results">
					{results.length ? this.renderResults() : this.renderEmpty()}
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
					value={this.state.text}
					placeholder="Search for an awesome article"
					onChange={this.onSearchTextChange}
				/>
				{this.renderSearchResults()}
			</div>
		);
	}

}
