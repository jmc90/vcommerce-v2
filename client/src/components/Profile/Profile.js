import React, { Component} from 'react';
import './profileStyle.css'
import { Button } from "reactstrap";

  class Profile extends Component{
    constructor(){
        super()
        this.state = {
            showForm: false,
            name: 'Eric',
            email: 'Admin@ChinchillasRule.com '
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

    render(){
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
                        <form className='editInfoForm'>
                        <h4 className='profileText'> 
                            Name: <input className='inputField' value={this.state.name}></input>
                        </h4>
                        <h4 className='profileText'> 
                            Email: <input className='inputField' value={this.state.email}></input>
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

export default Profile;