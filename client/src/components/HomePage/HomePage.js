import React from "react";
// import { Jumbotron, Container } from 'reactstrap';
import CryptoMiningClip from "../..//styles/media/crypto-mining-lg.mp4";
import "./HomePage.css";
import Mine1 from "../../styles/media/gpu-coin-cash.jpg";
import Mine2 from "../../styles/media/gpu2.jpg";

const HomePage = () => {

  
    return (
    <div className="front-page">
      <div className="vid-container">
        <video autoPlay muted loop id="myVideo" width="100%">
          <source src={CryptoMiningClip} type="video/mp4" />
        </video>
        <div className="titleContainer">
          <h1 className='minerzTitle'>Crypto Minerz</h1>
          <h6 className='minerzSubtitle'>Cryptocurrency Mining - Learn & Shop</h6>
        </div>
      </div>
      <div className="container">
        <div className="fr">
          <div>
            <img src={Mine1} alt="mining1" />
          </div>
          <div className="fr-content">
            <h3>Earn $$$ by Mining</h3>
            <br />
            <h5>Set up your mining equipment and start earning now!</h5>
          </div>
        </div>
        <div className="fr">
          <div className="fr-content">
            <h3>Buy your Mining Equipment Here!</h3>
            <br />
            <h5>
              We sell top of the line Equipment for all your Mining needs!
            </h5>
            <div className="button-container">
              <a href="/store">
                <button>Shop Now</button>
              </a>
            </div>
          </div>
          <div>
            <img src={Mine2} alt="mining2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
