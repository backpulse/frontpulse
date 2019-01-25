import React from 'preact';

import {Router} from 'preact-router';

import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Verify from 'pages/Verify';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Navbar/>
				<Router onChange={this.onRouteChange}>
					<Home exact path="/"/>
					<Verify exact path="/verify/:id"/>
				</Router>
			</div>
		);
	}
}

export default App;