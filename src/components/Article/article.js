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
	renderArticle() {
		const { data } = this.props;
		return (
			<>
				<h2 className="article-title">
					<FontAwesomeIcon className="icon" icon="box" />{data.title}
				</h2>
				<h3 className="article-authors">
					<FontAwesomeIcon className="icon" icon="users" />
					{data.authors.map((author, idx) => <span key={idx} className="article-author">{author}</span>)}
				</h3>
				<div
					className="article-body"
					dangerouslySetInnerHTML={
						{ __html: data.body }
					}
				/>
			</>
		);
	}
	render() {
		const { data } = this.props;

		return (
			<article className="article">
				{Boolean(data) ? this.renderArticle() : this.renderEmpty()}
			</article>
		);
	}

}
