import { h, Component } from 'preact';
import style from './style';

export default class Piano extends Component {
	state = {

	};


	// Note: `user` comes from the URL, courtesy of our router
	render() {
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
