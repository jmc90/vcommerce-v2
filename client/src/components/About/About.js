import React from "react";
import "./About.css";
import Rig from "../../styles/media/mining-rig.jpg";
import Multi from "../../styles/media/multi.jpg"

const About = () => {
  return (
    <div className="container">
      <br />
      <h1 className='title'>A Guide to Mining Cryptocurrency</h1>
      <article>
        <div>
          <hr />
          <div className="menu-block d-flex flex-row-reverse flex-wrap justify-content-center">
            <div>
              <img
                className="mining-rig shadow m-4"
                src={Rig}
                alt="mining rig"
              />
            </div>
            <div className="about-menu d-flex align-items-center justify-content-center">
              <ul className="about my-4">
                <li>
                  <a href="#what-is">What is Crypto Mining?</a>
                </li>
                <li>
                  <a href="#options">Mining Investment Options</a>
                  <ul>
                    <li>
                      <a href="#cloud">Cloud Mining</a>
                    </li>
                    <li>
                      <a href="#hardware">Hardware Mining</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#profitability-calc">
                    Cryptocurrency Mining Profitability
                  </a>
                  <ul>
                    <li>
                      <a href="#hw-costs">Hardware Costs</a>
                    </li>
                    <li>
                      <a href="#efficiency">Hardware Efficiency</a>
                    </li>
                    <li>
                      <a href="#electrical-costs">Electricity Costs</a>
                    </li>
                    <li>
                      <a href="#difficulty-hash">
                        Bitcoin Mining Difficulty
                      </a>
                    </li>
                    <li>
                      <a href="#price">Bitcoin Price</a>
                    </li>
                    <li>
                      <a href="#reward">Block Reward</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#concl">Conclusion</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <h3>
            <p id="what-is" />
            What is Crypto Mining?
          </h3>
          <br />
          <p>
            Cryptocurrency mining, or cryptomining, is a process in which
            transactions for various forms of cryptocurrency are verified and
            added to the blockchain digital ledger. Cryptocurrency mining has
            increased both as a topic and activity as cryptocurrency usage
            itself has grown exponentially in the last few years.
          </p>
          <p>
            Each time a cryptocurrency transaction is made, a cryptocurrency
            miner is responsible for ensuring the authenticity of information
            and updating the blockchain with the transaction. The mining process
            itself involves competing with other cryptominers to solve
            complicated mathematical problems with cryptographic hash functions
            that are associated with a block containing the transaction data.
          </p>
          <p>
            The first cryptocurrency miner to crack the code is rewarded by
            being able to authorize the transaction, and in return for the
            service provided, cryptominers earn small amounts of cryptocurrency
            of their own. In order to be competitive with other cryptominers,
            though, a cryptocurrency miner needs a computer with specialized
            hardware.
          </p>
          <p>
            Mining secures a cryptocurrency's network. Without miners, there
            would be no one to update cryptocurrency’s ledger, which is known as
            the blockchain. The more miners you have, the more decentralized and
            secure the network is. Due to miners’ crucial role in the network,
            an incentive system was designed so that miners will be compensated
            for providing their services.
          </p>
          <br />
          <hr />
          <h3>
            <p id="options" />
            Mining Investment Options - Hardware vs Cloud
          </h3>
          <br />
          <p>
            All Cryptocurrency mining utilizes hardware. The difference between
            <em> Cloud mining</em> and <em> Hardware mining</em> is who owns the
            mining equipment. There are several factors to consider when
            considering these options. The ultimate goal is to determine which
            provides the best return on investment (ROI).
          </p>
          <br />
          <h4>
            <p id="cloud" />
            Cloud Mining
          </h4>
          <p>
            Cloud mining is the practice of renting mining hardware (or a
            portion of their hashing power) and having someone else do the
            mining for you. As an investor, you pay for a contract that provides
            you with a certian amount of hashing power. Cloud mining contracts
            provide a low barrier to entry by not having to purchase mining
            equipment.
          </p>
          <br />
          <h4>
            <p id="hardware" />
            Hardware Mining
          </h4>
          <p>
            There are benefits to owning your own equipment, as well as
            downsides. Initial investments to purchase equipment can be high as
            well as electricity and other costs. However, by owning your own
            equipment, you are not sharing any of your earnings with others.
          </p>
          <br />
          <hr />
          <h3>Cryptocurrency Mining Profitability</h3>
          <br />
          <p>
            There are several factors which determine the profitability of
            cryptocurrency mining. It is important to consider and understand
            each to make a profitable investment.
          </p>
          <br />
          <h4>
            <p id="hw-costs" />
            Hardware Costs
          </h4>
          <p>
            The up-front cost of mining hardware is usually the largest expense
            for any new mining operation. Just like good computers cost more
            money, good mining hardware is expensive. There are three main
            mining hardware manufacturers today that supply miners on the
            market.
          </p>
          <p>
            When purchasing mining hardware, you will want to look at a miner’s
            hash rate measured in Terra Hash (Th/s). A higher hash rate means a
            more powerful miner.
          </p>
          <p>
            Miners also generate heat and need to be supplied with electricity.
            Unless you already have the needed parts, you will likely need to
            purchase cooling fans and power supplies. Make sure to take these
            into account and add them into the “hardware cost” section of the
            calculator.
          </p>
          <br />
          <h4>
            <p id="efficiency" />
            Hardware Efficiency
          </h4>
          <p>
            Hash power alone is not enough to determine the quality of a miner.
            Similar to the way cars are rated by their MPG (miles per gallon),
            miners are valued by how many bitcoins they yield according to the
            electricity they consume.
          </p>
          <p>
            The reason for that is that miners use massive amounts of
            electricity, and electricity costs money. In short, you want a miner
            that has a high hash rate and uses the provided electricity
            efficiently.
          </p>
          <p>
            W/Gh (watts per gigahash) is the metric used to display a miner’s
            efficiency. The lower this number, the more efficient the miner.
          </p>
          <br />
          <h4>
            <p id="electrical-costs" />
            Electricity Costs
          </h4>
          <p>
            Electricity costs can make or break a mining operation. A huge
            monthly electric bill means significant costs on top of the up-front
            cost of the hardware.
          </p>
          <p>
            China’s cheap electricity is one of the reasons why nearly 60% of
            Bitcoin’s network hashing power is located there. In the United
            States, for example, most mining hardware is run in Washington
            State, where power costs are relatively cheap thanks to
            hydroelectricity. Venezuela’s crisis and the cheap electricity
            resulting from it have made Bitcoin mining extremely profitable
            there.
          </p>
          <p>
            Electric costs for cooling are yet another factor to consider, as
            miners generate significant heat during the mining process.
            Insufficient cooling may impair your mining operation or even lead
            to irreparable damage in the hardware. However, there are ways to
            harness this by-product to your advantage.
          </p>
          <p>
            Creative miners in cold areas can use the heat generated by miners
            to heat their houses in the winter. If the heat generated by miners
            will partly replace your normal heating costs, it can be another way
            to save money and improve your chances of profitability.
          </p>
          <p>
            Miners in cold areas also have an advantage because they may not
            need to use extra fans to cool the hardware.
          </p>
          <br />
          <h4>
            <p id="difficulty-hash" />
            Bitcoin Mining Difficulty and Network Hash Power
          </h4>
          <p>
            The Bitcoin mining difficulty makes sure that Bitcoin blocks are
            mined, on average, every 10 minutes. A higher difficulty is
            indicative of more hash power joining the network (i.e., more or
            stronger miners are at work).
          </p>
          <p>
            As can be expected, more hash power on the network means that the
            current miners control a lower percentage of the Bitcoin network’s
            hash power.
          </p>
          <p>
            The network’s hash rate and difficulty are external factors that
            should be accounted for. However, it’s impossible to predict what
            the difficulty will be months in advance. Still, stay alert to
            advances in mining technology and efficiency to get a better idea of
            how the network’s hash rate and difficulty may look down the line.
          </p>
          <br />
          <h4>
            <p id="price" />
            Bitcoin Price
          </h4>
          <p>
            Cryptocurrency prices are extremely volatile and thus cannot be predicted. Be prepared for price movements and understand that Bitcoin’s price is a factor that you cannot control.
          </p>
          <br />
          <h4>
            <p id="reward" />
            Block Reward
          </h4>
          <p>
            Unlike Bitcoin’s price, the Bitcoin block reward is predictable. Every four years, the amount of bitcoins awarded for each block is cut in half. In 2012, the reward was cut from 50 bitcoi block to 25 and is now 12.5 bitcoins per block. In 2020 reward will fall to just 6.25 bitcoins per block, and so forth.
          </p>
          <p>
            Note that while each halving cuts miners’ reward in half, the increase in demand that results may lead to Bitcoin’s rising, keeping mining profitable.
          </p>
        </div>
        <br />
        <hr />
        <hr />
        <div className="conclusion d-flex flex-row-reverse flex-wrap justify-content-center">
          <div>
            <img className="mining-rig shadow m-4" src={Multi} alt="mining" />
          </div>
          <div>
            <h3>
              <p id="concl" />
              Conclusion
            </h3>
            <br />
            <p>
              To conclude, there is the potential to run a profitable mining operation. Remember, however, that some factors  Bitcoin’s price and mining difficulty, change every day and can have dramatic effects on profitability. Proper research will aid in obtaining a positive ROI.
            </p>
            <br />
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;