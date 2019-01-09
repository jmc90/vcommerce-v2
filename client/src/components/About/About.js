import React from "react";
import "./About.css";
import Rig from "../../styles/media/mining-rig.jpg";

const About = () => {
  return (
    <div className="container about-container">
      <br />
      <h1>A Guide to Mining Cryptocurrency</h1>
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
            <div className='d-flex align-items-center justify-content-center'>
              <ul className="about-menu my-4">
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
                        Bitcoin Mining Difficulty and Network Hash Power
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
          <p>POW, etc</p>
          <p>
            Cryptocurrency mining includes two functions, namely: adding
            transactions to the blockchain (securing and verifying) and also
            releasing new currency. Individual blocks added by miners should
            contain a proof-of-work, or PoW.
          </p>
          <br />
          <hr />
          <h3>
            <p id="options" />
            Mining Investment Options - Hardware vs Cloud
          </h3>
          <p>
            All Cryptocurrency mining utilizes hardware. The difference between
            <em> Cloud mining</em> and <em> Hardware mining</em> is who owns the
            mining equipment
          </p>
          <br />
          <h4>
            <p id="cloud" />
            Cloud Mining
          </h4>
          <p>
            Cloud mining is the practice of renting mining hardware (or a
            portion of their hashing power) and having someone else do the
            mining for you.
          </p>
          <br />
          <h4>
            <p id="hardware" />
            Hardware Mining
          </h4>
          <p>hardware...</p>
          <br />
          <hr />
          <h3>Cryptocurrency Mining Profitability</h3>
          <p>
            Mining secures a cryptocurrency's network. Without miners, there
            would be no one to update cryptocurrency’s ledger, which is known as
            the blockchain. The more miners you have, the more decentralized and
            secure the network is. Due to miners’ crucial role in the network,
            an incentive system was designed so that miners will be compensated
            for providing their services.
          </p>
          <p>
            Each block mined by miners contains a block reward—a fixed amount of
            bitcoins that are paid out to the miner that mined the block.
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
            Cryptocurrency prices are extremely volatile and thus be predicted.
            You may calculate your profitability today with a Bitcoin price of{" "}
            <em>X</em> and experience a price drop to <em>Y</em> a day afterward
            that will significantly affect your profitability. In short, be
            prepared for price movements and understand that Bitcoin’s price is
            a factor that you cannot control.
          </p>
          <br />
          <h4>
            <p id="reward" />
            Block Reward
          </h4>
          <p>
            Unlike Bitcoin’s price, the Bitcoin block reward is predictable:
            Every four years, the amount of bitcoins awarded for each block is
            cut in half . In 2012, the reward was cut from 50 bitcoins per block
            to 25 and is now 12.5 bitcoins per block. In 2020, this reward will
            fall to just 6.25 bitcoins per block, and so forth.
          </p>
          <p>
            Note that while each halving cuts miners’ reward in half, the
            increase in demand that results may lead to Bitcoin’s price rising,
            keeping mining profitable.
          </p>
          <br />
          <hr />
          <h3>
            <p id="concl" />
            Conclusion
          </h3>
          <p>
            To conclude, this Bitcoin mining calculator can give you a much
            better idea about your potential to run a profitable mining
            operation. Remember, however, that some factors such as Bitcoin’s
            price and mining difficulty, change every day and can have dramatic
            effects on profitability.
          </p>
          <br />
        </div>
      </article>
    </div>
  );
};

export default About;
