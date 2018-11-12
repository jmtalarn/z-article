# Technical test
The following exercise is the test for Z****. Please complete the proposed exercise and send it back at your earliest convenience. You don’t have any strict deadline, but try to do not spend more than 3-4 hours to complete the exercise.

Good luck and enjoy the test!

## Requirements
*	Create a REST api to implement the following methods:
	*	/articles/:id => returns a given article from articles.json, containing the fields body, title and authors. Edit the content of the body prepending the string <https://cdn2.audiencemedia.com/> to each image
	*	/articles => return a list of articles ids
	*	 /articles?q=:search => returns a list of articles containing the searched text within the title, body or authors
*	Create a client which displays the article title, authors and the rendered body
*	In the footer add navigation to the next and previous article. The first page should only contain the "next" link, the last page should only contain the "prev" link.
*	Add a search box which returns the content from the search endpoint
*	Feel free to use any server and client technology, but justify your choice. Propose a scalable 
solution, which could be potentially extended by features such as menus, sharing 
functionalities, …
*	Focus on setting up (or at least describing) the application (code style, design 
patterns...) and its environment (task runner, unit tests, pre/post processors...). 
*	Provide the necessary installation instructions
