import React, { Component} from 'react';
import './profileStyle.css'
import { Button } from "reactstrap";
import { withUser } from '../../context/UserProvider'

  class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            showForm: false,
            name: this.props.user.name,
            email: this.props.user.email
        }
        this.profileImage = {
            width: '300px',
            height: '300px', 
            backgroundImage: `url(https://static.boredpanda.com/blog/wp-content/uploads/2017/02/perfectly-round-chinchilla-camerons-chinchillas-15-58ad5374a8afb__700.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
    }

    handleShowHideForm = () => {
        !this.state.showForm ? this.setState({showForm: true}) : this.setState({showForm: false}) 
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: [value]
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
           name: this.state.name,
           email: this.state.email
        }
        this.props.handleUserInfoEdit(updates)
    }

    render(){
        // console.log(this.props.user.name)
        console.log(this.state.name)
        console.log(this.props.user.email)
        return (
            <div className='pageWrapper'>
                
                <div className='profileWrapper'>
                    <div className='leftColumn'>
                        <h2 className='pageHeader'> My Profile </h2>
                        <div className='profilePhoto' style={this.profileImage}></div>
                    </div>
                    {
                    this.state.showForm === false ?
                    
                    <div className='rightColumn'>
                        <h4 className='profileText'> 
                            Name: <span className='textSpan'> {this.state.name} </span> 
                        </h4>
                        <h4 className='profileText'> 
                            Email: <span className='textSpan'> {this.state.email} </span> 
                        </h4>
                        <div className='changeInfoButtounContainer'>
                            <Button onClick={this.handleShowHideForm}> Change </Button>
                        </div>
                    </div>
                    :
                    <div className='rightColumn'>
                        <form onSubmit={this.handleUserInfoEdit} className='editInfoForm'>
                        <h4 className='profileText'> 
                            Name: <input className='inputField' name='name' value={this.state.name} onChange={this.handleChange}></input>
                        </h4>
                        <h4 className='profileText'> 
                            Email: <input className='inputField' name='email' value={this.state.email} onChange={this.handleChange}></input>
                        </h4>  
                        <Button onClick={this.handleShowHideForm}> Save </Button>
                        </form>
                    </div>
                    }

                </div>
            </div>
        );
    }
};

export default withUser(Profile);