const articles = require('./articles');
test('check the result of an operation is not null', () => {
	const articlesFound = articles.find();
	expect(articlesFound).toBeTruthy();
	expect(articlesFound).not.toBeNull();

});
