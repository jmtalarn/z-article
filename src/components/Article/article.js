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
			<h3 className="article-authors">
				<FontAwesomeIcon className="icon" icon="users" />
				{authors ? authors.map((author, idx) => <span key={idx} className="article-author">{author}</span>) : null}
			</h3>
		);

	}
	renderArticle() {
		const { article } = this.props;
		return (
			<>
				<h2 className="article-title">
					<FontAwesomeIcon className="icon" icon="box" />{article.title}
				</h2>

				<div
					className="article-body"
					dangerouslySetInnerHTML={
						{ __html: article.body }
					}
				/>
			</>
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
