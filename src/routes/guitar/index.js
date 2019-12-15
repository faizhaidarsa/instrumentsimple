import { h,Component,Fragment } from 'preact';
import style from './style';
import {Provider,connect } from 'unistore/preact'

export default class Guitar extends Component {
	state = {
		chord:[
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
		selected:null
	};

	setSelected=(value)=>{
		let selectedChord = this.state.chord.filter(item=>{
			return item.name===value
		})
		// console.log(selectedChord[0]);
		
		this.setState({selected:selectedChord[0]})

	}

	renderChord=()=>{
		return this.state.chord.map(item=>{
			return(
				<div class='col-6 col-md-3 mt-3'> 
					<button class='btn shadow-none btn-block btn-dark' onClick={()=>{this.setSelected(item.name)}}>{item.name}</button>
				</div>
			)
		})
	}

	renderFretBoard=()=>{
		let name=''
		let table=[]
			let tune=['E','B','G','D','A','E']
		if(this.state.selected){
			let position = this.state.selected.position
			name=this.state.selected.name
			// console.log(position)
			for(let i =0;i<6;i++){
				let row=[]
				for(let j=0;j<5;j++){
					if(j==0){
						row.push(
						<td>{tune[i]}</td>
								)	
					}else
					if(position[i][j]===1){
						row.push(
					<td><strong>O</strong></td>
						)
					}else{
						row.push(
							<td></td>
						)
					}
					
				}
				table.push(
					<tr class='text-center'>
						{row}
					</tr>
				)
			
			}
		}else{
			
			
			for(let i =0;i<6;i++){
				let row=[]
				for(let j=0;j<5;j++){
					if(j==0){
						row.push(
						<td>{tune[i]}</td>
						)
					}else{
						row.push(
							<td></td>
						)
					}
					
				}
				table.push(
					<tr class='text-center'>
						{row}
					</tr>
				)
			
			}
			
			
		}
		return(
			<Fragment>
			<div class='table-responsive'>

			
			<table class='table table-bordered table-dark'>
				<tr class='text-center'>
					<td></td>
					<td>Fret 1</td>
					<td>Fret 2</td>
					<td>Fret 3</td>
					<td>Fret 4</td>
				</tr>
				{table}
			</table>
			</div>
			<h1 class='text-center strong'>{name}</h1>
			</Fragment>
		)
		
	}

	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
			<div class={style.profile+" container"}>
				<div class='row mb-3'>
					{this.renderChord()}
				</div>
				{this.renderFretBoard()}
			</div>
		);
	}
}
