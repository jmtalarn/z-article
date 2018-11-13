import Article from './product-page';
import { connect } from 'react-redux';
import { loadArticle } from '../../actions/article';

const ArticleState = function (state, props) {
	const { article } = state;

	return {
		article
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
