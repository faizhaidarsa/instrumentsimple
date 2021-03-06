import { h, Component } from 'preact';
import style from './style';

export default class Drum extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ instrument }, { time}) {
		return (
			<div class={style.profile}>
				<h1>Profile: {instrument}</h1>
				<p>This is the user profile for a user named { instrument }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<button onClick={this.increment}>Click Me</button>
					{' '}
					Clicked {this.state.count} times.
				</p>
			</div>
		);
	}
}
