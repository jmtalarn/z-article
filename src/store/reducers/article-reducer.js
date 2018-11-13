import * as ACTION from '../../actions/article/type';

const initialState = {
	data: {}
};

function articleReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION.LOAD_ARTICLE:
			return Object.assign(
				{},
				state,
				{ data: action.article }
			);
		default:
			return state;
	}
}

export default articleReducer;
