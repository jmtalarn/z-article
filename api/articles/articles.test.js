const articlesStore = require('./articles-store');

describe('Article API ', () => {
	it('find returns something not null', () => {
		const articlesFound = articlesStore.find();
		expect(articlesFound).toBeTruthy();
		expect(articlesFound).not.toBeNull();
	});
	it('find accepts a parameter to filter results', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("lessons");
		expect(articlesFiltered.length).toBeLessThan(articlesFound.length);
		expect(articlesFound).toEqual(
			expect.arrayContaining(articlesFiltered)
		);
	});
	it('gets one article by its id', () => {
		const firstArticleFound = articlesStore.find()[ 0 ];
		const id = firstArticleFound.id;
		const anArticleById = articlesStore.get(id);
		expect(anArticleById).toBe(firstArticleFound);
	});
});
