import React, {Component} from 'react'
import { withUser } from '../../context/UserProvider'

class ContactModal extends Component {
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
                    <h2 className='modalTitle'>Thanks for contacting us! We will respond to you shortly.</h2>
                </div>
            </div>
        )
    }
}

export default withUser(ContactModal)