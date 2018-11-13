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
	it('find accepts a parameter to filter results (tag <\/figcaption> in body)', () => {
		const articlesFound = articlesStore.find();
		const articlesFiltered = articlesStore.find("<\/figcaption>");
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

	it('got correct navigation for the first article', () => {
		const firstArticle = articlesStore.find()[ 0 ];
		const id = firstArticle.id;
		const navigation = articlesStore.navigation(id);
		expect(navigation.next).toBeTruthy();
		expect(navigation.previous).toBeFalsy();
	});
	it('got correct navigation for the last article', () => {
		const articles = articlesStore.find();
		const lastArticle = articles[ articles.length - 1 ];
		const id = lastArticle.id;
		const navigation = articlesStore.navigation(id);
		expect(navigation.next).toBeFalsy();
		expect(navigation.previous).toBeTruthy();
	});
	it('got correct navigation for middle article', () => {
		const articles = articlesStore.find();
		const article = articles[ parseInt(articles.length / 2) ];
		const id = article.id;
		const navigation = articlesStore.navigation(id);
		expect(navigation.next).toBeTruthy();
		expect(navigation.previous).toBeTruthy();
	});

});
