import React from 'react';
import Search from './search';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../utils/FontAwesome.init';

configure({ adapter: new Adapter() });

describe('Test <Search /> ', () => {

	function goToArticle(id) {
		currentArticle = id;
	}
	function searchText(text) {
		state.results = results.filter(result => result.title.indexOf(text) != -1);
	}
	function resetSearch() {
		state = { currentArticle: null, results: [] };
	}
	const results = [ { id: 1000, title: "Title One" }, { id: 1001, title: "Title Two" }, { id: 1002, title: "Title One Two" } ];

	let state = { currentArticle: null, results: [] };


	beforeEach(() => {
		resetSearch();
	});


	it('renders correctly without data', () => {
		const searchComponent = renderer
			.create(<Search />)
			.toJSON();
		expect(searchComponent).toMatchSnapshot();
	});
	it('renders correctly with properties and emptyResults', () => {
		const searchComponent = renderer
			.create(<Search searchArticle={searchText} loadArticle={goToArticle} resetSearch={resetSearch} results={[]} />)
			.toJSON();
		expect(searchComponent).toMatchSnapshot();
	});
	it('renders correctly with properties and results', () => {
		const searchComponent = renderer
			.create(<Search searchArticle={searchText} loadArticle={goToArticle} resetSearch={resetSearch} results={results} />)
			.toJSON();
		expect(searchComponent).toMatchSnapshot();
	});

	// it('renders correctly with next and previous', () => {
	// 	const navigationComponent = renderer
	// 		.create(<Navigation navigation={navigation} loadArticle={goToArticle} />)
	// 		.toJSON();
	// 	expect(navigationComponent).toMatchSnapshot();
	// });
	it('search for "One"', () => {
		const searchComponent = shallow(<Search searchArticle={searchText} loadArticle={goToArticle} resetSearch={resetSearch} results={state.results} />);
		const textSearched = "One";
		searchComponent.find('.search-input').simulate('change', { target: { value: textSearched } });
		expect(state.results.length).toBeLessThan(results.length);
	});
	it('click result', () => {
		const searchComponent = shallow(<Search searchArticle={searchText} loadArticle={goToArticle} resetSearch={resetSearch} results={[]} />);
		searchComponent.setState({ text: "One" }, () => {
			searchComponent.setProps({ results }, () => {
				searchComponent.find('.search-results .article-link:first-child ').simulate('click');
				expect(state.currentArticle).toBe(results[ 0 ].id);
			});

		});



	});
	// it('goes to previous article', () => {
	// 	const navigationComponent = shallow(<Navigation navigation={navigation} loadArticle={goToArticle} />);
	// 	const click = navigationComponent.find('.previous .nav-button').simulate('click');
	// 	expect(currentArticle).toBe(navigation.previous);
	// });

});
