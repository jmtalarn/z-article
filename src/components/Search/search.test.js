import React from 'react';
import { Search, ArticleLink } from './search';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../utils/FontAwesome.init';

configure({ adapter: new Adapter() });

describe('Test <Search /> ', () => {
	let state = { currentArticle: null, results: [] };

	const goToArticle = jest.fn((id) => {
		state.currentArticle = id;
	});

	function searchText(text) {
		state.results = results.filter(result => result.title.indexOf(text) != -1);
	}
	function resetSearch() {
		state = { currentArticle: null, results: [] };
	}
	const results = [ { id: 1000, title: "Title One" }, { id: 1001, title: "Title Two" }, { id: 1002, title: "Title One Two" } ];




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

	it('search for "One"', () => {
		const searchComponent = shallow(<Search searchArticle={searchText} loadArticle={goToArticle} resetSearch={resetSearch} results={state.results} />);
		const textSearched = "One";
		searchComponent.find('.search-input').simulate('change', { target: { value: textSearched } });
		expect(state.results.length).toBeLessThan(results.length);
	});
	it('item clicked', () => {
		const props = { searchArticle: searchText, loadArticle: goToArticle, resetSearch: resetSearch, results: [] };
		const searchComponent = mount(<Search {...props} />);

		searchComponent.setState({ text: "One" }, () => {
			searchComponent.setProps({ results: results }, () => {
				searchComponent.find(ArticleLink).first().find('button').simulate('click');
				expect(goToArticle).toHaveBeenCalled();
			});

		});



	});
	// it('goes to previous article', () => {
	// 	const navigationComponent = shallow(<Navigation navigation={navigation} loadArticle={goToArticle} />);
	// 	const click = navigationComponent.find('.previous .nav-button').simulate('click');
	// 	expect(currentArticle).toBe(navigation.previous);
	// });

});
