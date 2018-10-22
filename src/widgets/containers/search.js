import React,{Component} from 'react';
import Search from '../components/Search';

class SearchContainer extends Component {
	state = {
		value: 'Luis Fonsi'
	}
	handleSubmit = event => {
		event.preventDefault();
		console.log(this.input.value,'submit');
	}
	setInputRef = element =>{
		
		this.input = element;
	}
	handleInputChange = event =>{

		this.setState({
			value : event.target.value.replace(' ','-')
		})
	}
	render(){
		//console.log("state",this.state.value)
		return (
			<Search
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleInputChange}
				value={this.state.value}
			/>
		)
	}
}
export default SearchContainer