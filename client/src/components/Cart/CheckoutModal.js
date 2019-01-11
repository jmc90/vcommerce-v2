import React, {Component} from 'react'
import { withProducts } from '../../context/ProductProvider'
import './ModalStyle.css'

class CheckoutModal extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    handleCloseModal = () => {
        this.props.toggleModal()
    }

    render(){

        return(
            <div id="simpleModal" className= {this.props.checkoutModalOn ? 'modalShow' : 'modalHide' }>
                <div className="my-modal-content">
                    <span className="closeBtn" onClick={this.handleCloseModal}>&times;</span>
                    <h2 className='modalTitle'> Complete Order </h2>
                    <form>
                        First Name <input className='my-input-field' type='text'></input>
                        Last Name <input className='my-input-field' type='text'></input>
                        Address <input className='my-input-field' type='text'></input>
                        City<input className='my-input-field' type='text'></input>
                        State <input className='my-input-field' type='text'></input>
                        Zip Code <input className='my-input-field' type='text'></input>
                        <button onClick={this.handleCloseModal}>Submit Order</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withProducts(CheckoutModal)