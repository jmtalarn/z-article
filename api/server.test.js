const request = require('supertest');
const articlesStore = require('./data/articles.json');

describe('Express server ', function () {
	var server;
	const api = '/api/articles';
	const existingId = articlesStore.data[ 0 ].id;
	const existingArticleUrl = `${api}/${existingId}`;
	const unexistingArticleUrl = `${api}/A1B2C3`;

	beforeEach(function () {
		server = require('./server');
	});
	afterEach(function () {
		server.close();
	});
	it(`responds OK to ${api}`, (done) => {
		request(server)
			.get(api)
			.expect(200, done);
	});
	it(`responds OK to ${existingArticleUrl} (existing id)`, (done) => {
		request(server)
			.get(existingArticleUrl)
			.expect(200, done);
	});
	it(`responds with an article and a navigation for an existing article on ${existingArticleUrl} `, (done) => {
		request(server)
			.get(existingArticleUrl)
			.expect(200)
			.end(function (err, res) {
				const response = res.body;
				expect(response.article).toBeTruthy();
				expect(response.navigation).toBeTruthy();
				expect(response.article.id).toBe(existingId);
				done();
			});
	});


	it(`responds 404 to ${unexistingArticleUrl} (unexisting id)`, (done) => {
		request(server)
			.get(unexistingArticleUrl)
			.expect(404, done);
	});

	it('404 everything else', (done) => {
		request(server)
			.get('/foo/bar')
			.expect(404, done);
	});
});
