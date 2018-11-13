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
	});
	it('find accepts a parameter to filter results (tag <\/figcaption> in body)', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("<\/figcaption>");
		expect(articlesFiltered.length).toBeLessThan(articlesFound.length);
	});

	it('gets one article by its id', () => {
		const firstArticleId = articlesStore.find()[ 0 ];
		const anArticleById = articlesStore.get(firstArticleId);
		expect(anArticleById.id).toBe(firstArticleId);
	});

	it('got correct navigation for the first article', () => {
		const firstArticleId = articlesStore.find()[ 0 ];
		const navigation = articlesStore.navigation(firstArticleId);
		expect(navigation.next).toBeTruthy();
		expect(navigation.previous).toBeFalsy();
	});
	it('got correct navigation for the last article', () => {
		const articles = articlesStore.find();
		const lastArticleId = articles[ articles.length - 1 ];
		const navigation = articlesStore.navigation(lastArticleId);
		expect(navigation.next).toBeFalsy();
		expect(navigation.previous).toBeTruthy();
	});
	it('got correct navigation for middle article', () => {
		const articles = articlesStore.find();
		const articleId = articles[ parseInt(articles.length / 2) ];
		const navigation = articlesStore.navigation(articleId);
		expect(navigation.next).toBeTruthy();
		expect(navigation.previous).toBeTruthy();
	});

});
