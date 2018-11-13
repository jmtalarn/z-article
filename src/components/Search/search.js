import React, { Component } from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { resetSearch } from '../../actions/article';

const ArticleLink = ({ title, id, onClick }) => (
	<li>
		<a className="article-link" href="#" onClick={() => onClick(id)}>{title}</a>

	</li>);

export default class Search extends Component {

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
		const { loadArticle } = this.props;
		loadArticle(id);
		resetSearch();
		this.setState({ text: '' });
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
					value={this.state.value}
					placeholder="Search for an awesome article"
					onChange={this.onSearchTextChange}
				/>
				{this.renderSearchResults()}
			</div>
		);
	}

}
