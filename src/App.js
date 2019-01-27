import React from 'preact';

import {Router} from 'preact-router';

import Navbar from 'components/Navbar';

import Home from 'pages/Home';
import Verify from 'pages/Verify';
import Terms from 'pages/Terms';
import Privacy from 'pages/Privacy';

class App extends React.Component {

	onRouteChange = () => {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="app">
				<Navbar/>
				<Router onChange={this.onRouteChange}>
					<Home exact path="/"/>
					<Verify exact path="/verify/:id"/>
					<Terms exact path="/terms"/>
					<Privacy exact path="/privacy"/>
				</Router>
			</div>
		);
	}
}

export default App;