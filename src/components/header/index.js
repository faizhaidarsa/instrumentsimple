import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header+" bg-secondary"}>
		<Link href="/">
		<h1>Instrument App</h1>
		</Link>
		{/* <nav>
			<Link activeClassName={style.active} href="/guitar">Guitar</Link>
			<Link activeClassName={style.active} href="/piano">Piano</Link>
			<Link activeClassName={style.active} href="/drum">Drum</Link>
		</nav> */}
	</header>
);

export default Header;
