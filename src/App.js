import React from 'preact';

import {Router} from 'preact-router';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Navbar/>
				<Router onChange={this.onRouteChange}>
					<Home path="/"/>
				</Router>
			</div>
		);
	}
}

export default App;