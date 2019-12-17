import { h, Component } from 'preact';
import style from './style';

export default class Piano extends Component {
	state = {

	};


	renderPiano=()=>{
		
		return(
			<div class='table-responsive'>
				<table class='table-bordered mt-3'>
					<tr>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						
					</tr>
					<tr>
					<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
						<td class={style.tut}></td>
					</tr>
				</table>
			</div>
		)
	}
	
	render() {
		return (
			<div class={style.profile+" container"}>
				{this.renderPiano()}
			</div>
		);
	}
}
