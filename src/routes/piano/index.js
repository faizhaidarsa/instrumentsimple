import { h, Component } from 'preact';
import style from './style';

export default class Piano extends Component {
	state = {

	};


	renderPiano=()=>{
		
		return(
			<div class='table-responsive'>
				<table class='table-responsive mt-3' style={{border:'1px solid'}}>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr class='border-bottom-0'>
						<td colSpan='3' class={style.tut}></td>
						
						<td colSpan='2' class={style.tut+' bg-dark'}></td>
						<td colSpan='2' class={style.tut}></td>
						
						<td colSpan='2' class={style.tut+' bg-dark'}></td>
						<td colSpan='3' class={style.tut}></td>
						
						<td colSpan='3' class={style.tut}></td>
						
						<td colSpan='2' class={style.tut+' bg-dark'}></td>
						<td colSpan='2' class={style.tut}></td>
						<td colSpan='2' class={style.tut+' bg-dark'}></td>
						<td colSpan='2' class={style.tut}></td>
						<td colSpan='2' class={style.tut+' bg-dark'}></td>
						<td colSpan='3' class={style.tut}></td>
						
					</tr>
					<tr class='border-top-0'>
					
						<td colSpan='4' class={style.tut}></td>
						<td colSpan='4' class={style.tut}></td>
						<td colSpan='4' class={style.tut}></td>
						<td colSpan='4' class={style.tut}></td>
						<td colSpan='4' class={style.tut}></td>
						<td colSpan='4' class={style.tut}></td>
						<td colSpan='4' class={style.tut}></td>
						
						
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
