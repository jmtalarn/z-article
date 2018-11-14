import React from 'react';
import Article from './article';
import renderer from 'react-test-renderer';
import '../../utils/FontAwesome.init';

describe('Test <Article /> ', () => {

	const dummyArticle = {
		"id": 3995,
		"title": "LESSONS OF INNOVATION FOR 2017",
		"body": `<h1>An HTML CONTENT</h1>\n
			< img src=\"\/var\/site_872\/storage\/images\/media2\/images\/f0019-01\/39968-1-eng-US\/f0019-012.jpg\" width=\"335\" height=\"471\"  style=\"border: 0px  ;\" alt=\"f0019-01\" title=\"f0019-01\" \/>
			<p> Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, no sea takimata sanctus est Lorem ipsum dolor sit amet.  </p>
				`,
		"authors": [ "Robert Safian" ],
	};



	it('renders correctly without article', () => {
		const article = renderer
			.create(<Article article={{}} />)
			.toJSON();
		expect(article).toMatchSnapshot();
	});
	it('renders correctly article', () => {
		const article = renderer
			.create(<Article article={dummyArticle} />)
			.toJSON();
		expect(article).toMatchSnapshot();
	});
	it('renders correctly article without authors', () => {
		const articleData = Object.assign({}, dummyArticle, { authors: null });
		const article = renderer
			.create(<Article article={articleData} />)
			.toJSON();
		expect(article).toMatchSnapshot();
	});
	it('renders correctly article with no authors in article', () => {
		const articleData = { id: dummyArticle.id, title: dummyArticle.title, body: dummyArticle.body };
		const article = renderer
			.create(<Article article={articleData} />)
			.toJSON();
		expect(article).toMatchSnapshot();
	});
});
