import React, { Component } from 'react';
import './article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Article extends Component {

	render() {
		const { article: { data } } = this.props;
		return (
			<article className="article">
				<h2 className="article-title">
					<FontAwesomeIcon className="icon" icon="box" />{article.title}
				</h2>
				<h3 className="article-authors">
					<FontAwesomeIcon className="icon" icon="users" />
					{article.authors.map((author, idx) => <span key={idx} className="article-author">{author}</span>)}
				</h3>
				<div
					className="article-body"
					dangerouslySetInnerHTML={
						{ __html: article.body }
					}
				/>
			</article>
		);
	}

}
