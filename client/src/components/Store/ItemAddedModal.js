import React, {Component} from 'react'
import { withUser } from '../../context/UserProvider'
import './ModalStyle.css'

class ItemAddedModal extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    handleCloseModal = () => {
        this.props.toggleItemAddedNotification()
    }

    render(){
        return(
            <div id="simpleModal" className= {this.props.productAddedModalOn ? 'modalShow' : 'modalHide' }>
                <div className="my-modal-content">
                    <span className="closeBtn" onClick={this.handleCloseModal}>&times;</span>
                    {
                    this.props.token === ''  ? <h2 className='modalTitle'> You must be logged in to add items </h2> : <h2 className='modalTitle'> Your Item Has Been Added </h2> 
                    }
                    
                </div>
            </div>
        )
    }
}

export default withUser(ItemAddedModal)