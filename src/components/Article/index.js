import React, { Component } from 'react';
import './article.css'
	;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Article extends Component {

	render() {

		return (
			<article className="article">
				<h2 className="article-title">
					<FontAwesomeIcon className="icon" icon="box" />article
				</h2>
				<h3 className="article-authors">
					<FontAwesomeIcon className="icon" icon="users" />
					<span className="article-author">Author 1</span><span className="article-author">Author 2</span><span className="article-author">Author 3</span>
				</h3>
				<div className="article-body">
					<p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  Stet clita kasd gubergren,  no sea takimata sanctus est Lorem ipsum dolor sit amet.  sed diam voluptua.  no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

					<p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  Stet clita kasd gubergren,  no sea takimata sanctus est Lorem ipsum dolor sit amet.  sed diam voluptua.  no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

					<p>Lorem ipsum dolor sit amet,Stet clita kasd gubergren,  consetetur sadipscing elitr,  consetetur sadipscing elitr,  At vero eos et accusam et justo duo dolores et ea rebum.  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  Stet clita kasd gubergren,  no sea takimata sanctus est Lorem ipsum dolor sit amet.  sed diam voluptua.  no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
				</div>
			</article>
		);
	}

}
