import * as ACTION from './types';

const API_URL = '/api/articles';

export function loadArticle(id) {
	dispatch => {
		fetch(`${API_URL}/${id}`)
			.then(
				response => response.json(),
				error => console.error('An error occurred loading article.', error))
			.then(json => {
				dispatch(
					{
						type: ACTION.LOAD_ARTICLE,
						article: json,
					});
			});
	};

};
