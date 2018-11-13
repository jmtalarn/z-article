import Navigation from './navigation';
import { connect } from 'react-redux';
import { loadArticle } from '../../actions/article';

const NavigationState = function (state, props) {
	const { article: { navigation = {} } } = state;

	return {
		navigation
	};
};

const NavigationDispatch = function (dispatch) {
	return {
		loadArticle: (id) => {
			dispatch(loadArticle(id));
		},
	};
};

var NavigationContainer = connect(
	NavigationState,
	NavigationDispatch
)(Navigation);

export default NavigationContainer;
