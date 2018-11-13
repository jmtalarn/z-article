import React, { Component } from 'react';
import Search from './components/Search';
import Navigation from './components/Navigation';
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
					<Navigation />
				</main>
			</div>
		);
	}
}

export default App;
