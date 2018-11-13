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
				{
					data: action.data,
					navigation: action.navigation
				}
			);
		case ACTION.SEARCH_ARTICLE:
			return Object.assign(
				{},
				state,
				{ search: action.articles }
			);
		case ACTION.RESET_SEARCH:
			return Object.assign(
				{},
				state,
				{ search: [] }
			);
		default:
			return state;
	}
}

export default articleReducer;
