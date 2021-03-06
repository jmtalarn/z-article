import * as ACTION from './type';

const API_URL = '/api/articles';

export function loadArticle(id) {
	return dispatch => {
		return fetch(`${API_URL}/${id}`)
			.then(
				response => response.json(),
				error => console.error('An error occurred loading article.', error))
			.then(json => {
				return dispatch(
					{
						type: ACTION.LOAD_ARTICLE,
						data: json.article,
						navigation: json.navigation
					});
			});
	};
};

export function searchArticle(text) {
	return dispatch => {
		fetch(`${API_URL}/?q=${text}`)
			.then(
				response => response.json(),
				error => console.error('An error occurred loading article.', error))
			.then(json => {
				return dispatch(
					{
						type: ACTION.SEARCH_ARTICLE,
						articles: json,
					});
			});
	};
};
export function resetSearch() {
	return (
		{
			type: ACTION.RESET_SEARCH
		}
	);
}
