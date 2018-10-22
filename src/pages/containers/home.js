import React , {Component} from  'react';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import VideoPlayer from '../../player/containers/video-player';
import HandleError from '../../error/containers/handle-error';
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
			<HandleError>
				<HomeLayout>
					<Related/>
					<Categories
						categories={this.props.data.categories}
						handleOpenModal={this.handleOpenModal}
					/>
					{
			            this.state.modalVisible &&
			            <ModalContainer>
			              <Modal
			                handleClick={this.handleCloseModal}
			              >
			                <VideoPlayer
			                  autoplay
			                  src={this.state.media.src}
			                  title={this.state.media.title}
			                />
			              </Modal>
			            </ModalContainer>
			          }
				</HomeLayout>
			  </HandleError>
			);
	}
}
export default Home