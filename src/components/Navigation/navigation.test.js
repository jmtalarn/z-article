import React from 'react';
import Navigation from './navigation';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '../../utils/FontAwesome.init';

configure({ adapter: new Adapter() });

describe('Test <Navigation /> ', () => {

	let currentArticle = 1000;
	const navigation = { previous: 999, next: 1001 };

	beforeEach(() => {
		currentArticle = 1000;
	});

	function goToArticle(id) {
		currentArticle = id;
	}
	it('renders correctly without data', () => {
		const navigationComponent = renderer
			.create(<Navigation navigation={{}} loadArticle={goToArticle} />)
			.toJSON();
		expect(navigationComponent).toMatchSnapshot();
	});
	it('renders correctly with next and previous', () => {
		const navigationComponent = renderer
			.create(<Navigation navigation={navigation} loadArticle={goToArticle} />)
			.toJSON();
		expect(navigationComponent).toMatchSnapshot();
	});
	it('goes to next article', () => {
		const navigationComponent = shallow(<Navigation navigation={navigation} loadArticle={goToArticle} />);
		const click = navigationComponent.find('.next .nav-button').simulate('click');
		expect(currentArticle).toBe(navigation.next);
	});
	it('goes to previous article', () => {
		const navigationComponent = shallow(<Navigation navigation={navigation} loadArticle={goToArticle} />);
		const click = navigationComponent.find('.previous .nav-button').simulate('click');
		expect(currentArticle).toBe(navigation.previous);
	});

});
