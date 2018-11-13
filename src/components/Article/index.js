import Article from './article';
import { connect } from 'react-redux';


const ArticleState = function (state, props) {

	const { article: { data = {} } } = state;

	return {
		article: data
	};
};

const ArticleDispatch = function (dispatch) {
	return {

	};
};

var ArticleContainer = connect(
	ArticleState,
	ArticleDispatch
)(Article);

export default ArticleContainer;
