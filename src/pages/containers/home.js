import React , {Component} from  'react';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';
import Categories from '../../categories/components/categories';

class Home extends Component {
	state = {
		modalVisible : false,
	}

	handleOpenModal = (media) => {
		this.setState({
			modalVisible : true,
			media
		})
	}
	handleCloseModal= (event) =>{
		this.setState({
			modalVisible : false,
		})
	}

	render (){
		return (
			<HomeLayout>
				<Related/>
				<Categories
					categories={this.props.data.categories}
					handleOpenModal={this.handleOpenModal}
				/>
			</HomeLayout>
			);
	}
}
export default Home