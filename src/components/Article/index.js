import Article from './article';
import { connect } from 'react-redux';
import { loadArticle } from '../../actions/article';

const ArticleState = function (state, props) {
	console.log(state);
	const { article: { data = {} } } = state;

	return {
		data
	};
};

const ArticleDispatch = function (dispatch) {
	return {
		loadArticle: (id) => {
			dispatch(loadArticle(id));
		}
	};
};

var ArticleContainer = connect(
	ArticleState,
	ArticleDispatch
)(Article);

export default ArticleContainer;
