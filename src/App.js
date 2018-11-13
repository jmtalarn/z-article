import React, { Component } from 'react';
import Search from './components/Search';
import './utils/FontAwesome.init';
import './App.css';


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="header">
					<h1 className="title"> Z-article </h1>
					<Search />
				</header>
				<main>
					<article>
						<h2>article</h2>
					</article>
					<nav>
						navigation
					</nav>
				</main>
			</div>
		);
	}
}

export default App;
