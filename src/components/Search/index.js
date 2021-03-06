import { Search } from './search';
import { connect } from 'react-redux';
import { searchArticle, loadArticle, resetSearch } from '../../actions/article';

const SearchState = function (state, props) {
	const { article: { search } } = state;

	return {
		results: search
	};
};

const SearchDispatch = function (dispatch) {
	return {
		searchArticle: (text) => {
			dispatch(searchArticle(text));
		},
		loadArticle: (id) => {
			dispatch(loadArticle(id));
		},
		resetSearch: () => {
			dispatch(resetSearch());
		}

	};
};

var SearchContainer = connect(
	SearchState,
	SearchDispatch
)(Search);

export default SearchContainer;
