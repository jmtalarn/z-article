import React, { Component } from 'react';
import Search from './components/Search';
import Navigation from './components/Navigation';
import Article from './components/Article/article';
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
				<Article />
				<main>
					<Navigation />
				</main>
			</div>
		);
	}
}

export default App;
