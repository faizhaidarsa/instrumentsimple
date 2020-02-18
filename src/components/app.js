import { h, Component } from 'preact';
import { Router } from 'preact-router';
import 'bootstrap/dist/css/bootstrap.min.css'
// The store:
import createStore from 'unistore'
import devtools    from 'unistore/devtools'

// Preact integration
import { Provider, connect } from 'unistore/preact'



let initial={
	guitarChord:[
		{
			name:'C',
			position:[
				[0,0,0,0,0],
				[0,1,0,0,0],
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,0,1,0],
				[0,0,0,0,0]
			]
		},{
			name:'D',
			position:[
				[0,0,1,0,0],
				[0,0,0,1,0],
				[0,0,1,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'Dm',
			position:[
				[0,1,0,0,0],
				[0,0,0,1,0],
				[0,0,1,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'E',
			position:[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,1,0,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'Em',
			position:[
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'F',
			position:[
				[0,1,0,0,0],
				[0,1,0,0,0],
				[0,0,1,0,0],
				[0,0,0,1,0],
				[0,1,0,0,0],
				[0,1,0,0,0]
			]
		},{
			name:'G',
			position:[
				[0,0,0,1,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,0,1,0]
			]
		},{
			name:'A',
			position:[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'Am',
			position:[
				[0,0,0,0,0],
				[0,1,0,0,0],
				[0,0,1,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'A7',
			position:[
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0],
				[0,0,1,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]
			]
		},{
			name:'B',
			position:[
				[0,0,1,0,0],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[0,0,1,0,0],
				[0,0,1,0,0]
			]
		},{
			name:'Bm',
			position:[
				[0,0,1,0,0],
				[0,0,0,1,0],
				[0,0,0,0,1],
				[0,0,0,0,1],
				[0,0,1,0,0],
				[0,0,1,0,0]
			]
		}
		
	],
	selectedChord:null
} 
let store =  process.env.NODE_ENV === 'production' ?  createStore(initial) : devtools(createStore(initial));

import Header from './header';

// Code-splitting is automated for routes
import Guitar from '../routes/guitar';
import Piano from '../routes/piano';
import Drum from '../routes/drum';
import Home from '../routes/home';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		// console.log(this)
	};

	render() {
		return (
			<Provider store={store}>
			<div id="app">
				 
				<Header />
				<Router onChange={this.handleRoute}>
				
					<Home path="/"/>
					<Guitar path="/guitar" instrument="Guitar"/>
					<Piano path="/piano" instrument="Piano"/>
					<Drum path="/drum" instrument="Drum"/>
				
				</Router>
			
			</div>
			</Provider>
		);
	}
}
