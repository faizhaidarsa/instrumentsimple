import { h, Component } from 'preact';
import style from './style';
import {Link} from 'preact-router'

export default class Home extends Component {
	
	render() {
		return (
			<div class={style.profile+" container-fluid"}>
				<div class='card mt-3 border-0'>
					<div class='card-header bg-dark text-white rounded-bottom'>
					<h3 class='text-center'>Choose your instrument!</h3>
					</div>
					<div class='card-body'>
						<div class='row d-flex justify-content-center'>
							<div class='col-sm-6 col-md-4 mb-3 mb-sm-0'>
								<div class='card shadow-sm'>
									<Link href='/guitar'>
									<div class={'card-img-top text-center '+style.gede}>
										<img style={{width:'100%'}} src='../../assets/icons/guitar-flat-icon.jpg' />
									</div>
									</Link>
									
								</div>
							</div>
							<div class='col-sm-6 col-md-4 mb-3 mb-sm-0'>
							<div class='card shadow-sm'>
							<Link href='/piano'>
							<div class={'card-img-top text-center '+style.gede}>
										<img style={{width:'100%'}} src='../../assets/icons/piano-keys-flat-icon.jpg' />
									</div>
									</Link>
									
								</div>
							</div>
							{/* <div class='col-sm-6 col-md-4 mt-0 mt-sm-3 mt-md-0'>
							<div class='card shadow-sm'>
							<Link href='/drum'>
							<div class={'card-img-top text-center '+style.gede}>
										<img style={{width:'100%'}} src='../../assets/icons/android-chrome-512x512.png' />
									</div>
									</Link>
								</div>
							</div> */}
						</div>
					</div>
				</div>

			</div>
		);
	}
}
