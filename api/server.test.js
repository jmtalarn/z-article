const request = require('supertest');
describe('Express server ', function () {
	var server;
	const api = '/api/articles';
	beforeEach(function () {
		server = require('./server');
	});
	afterEach(function () {
		server.close();
	});
	it(`responds to ${api}`, function testSlash(done) {
		request(server)
			.get(api)
			.expect(200, done);
	});
	it('404 everything else', function testPath(done) {
		request(server)
			.get('/foo/bar')
			.expect(404, done);
	});
});
