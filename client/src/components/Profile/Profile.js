import React, { Component} from 'react';
import './profileStyle.css'

  class Profile extends Component{
    constructor(){
        super()
        this.state = {

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


    render(){
        return (
            <div className='pageWrapper'>
                <h2 className='pageHeader'> My Profile </h2>
                <div className='profileWrapper'>
                    <div className='profilePhoto' style={this.profileImage}></div>
                    <div className='profileTextContainer'>
                        <h4 className='profileText'> Name: Eric</h4>
                        <h4 className='profileText'> Email: Eric@chinchillasRule.com</h4>
                        <div className='changeInfoButtounContainer'>
                            <button> Change Info </button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
};

export default Profile;