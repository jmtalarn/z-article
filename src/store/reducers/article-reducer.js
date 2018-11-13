import * as ACTION from '../../actions/article/type';

const initialState = {
	data: {},
	search: []
};

function articleReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION.LOAD_ARTICLE:
			return Object.assign(
				{},
				state,
				{ data: action.article }
			);
		case ACTION.SEARCH_ARTICLE:
			return Object.assign(
				{},
				state,
				{ search: action.articles }
			);
		default:
			return state;
	}
}

export default articleReducer;
