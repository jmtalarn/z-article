import React, { Component } from 'react';
import './article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Article extends Component {

	renderEmpty() {
		return (
			<p>
				No article loaded! Search on the top bar to show something.
			</p>
		);
	}
	renderAuthors() {
		const { article: { authors = [] } } = this.props;
		return (
			authors && authors.length ?
				<h3 className="article-authors">
					<FontAwesomeIcon className="icon" icon="users" />
					{authors.map((author, idx) => <span key={idx} className="article-author">{author}</span>)}
				</h3>
				:
				null
		);

	}
	renderArticle() {
		const { article } = this.props;
		return (
			<React.Fragment>
				<h2 className="article-title">
					<FontAwesomeIcon className="icon" icon="box" />{article.title}
				</h2>
				{this.renderAuthors()}
				<div
					className="article-body"
					dangerouslySetInnerHTML={
						{ __html: article.body }
					}
				/>
			</React.Fragment>
		);
	}
	render() {
		const { article } = this.props;

		return (
			<article className="article">
				{Object.keys(article).length ? this.renderArticle() : this.renderEmpty()}
			</article>
		);
	}

}
