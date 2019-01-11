import React from "react";
import PoolChart from "../../styles/media/pool-piechart.png";

const Pools = () => {
  return (
    <div className="pool-page m-5">
      <h1 className="text-center m-4">Mining Pool Volume Comparison</h1>
      <div className="piechart m-5">
        <img src={PoolChart} alt="pool chart" />
      </div>
      <hr />
      <div className="pool-list my-5">
        <h2 className="mb-4">Top 5 Pools by Hashing Power</h2>
        <h5>1. BTC.com</h5>
        <h5>2. Antpool</h5>
        <h5>3. ViaBTC</h5>
        <h5>4. Slush</h5>
        <h5>5. F2pool</h5>
      </div>
      <hr />
      <div className="mt-5">
        <h1 className="text-center m-4">About Mining Pools</h1>
        <p>
          Mining pools consist of a collection of miners who have pooled their
          resources together in-order to mine a cryptocurrency. As the mining
          difficulty of a cryptocurrency increases, so too does the
          computational power required to mine it.
        </p>
        <p>
          This increase in computational power can often be too expensive for a
          solo miner to handle as it could result in higher energy costs, or the
          requirement of more specialised hardware.
        </p>
        <p>
          Therefore, miners form collectives in-order to better limit the cost
          of their mining activity. If you are unsure of what exactly
          cryptocurrency mining is, check out this Mycryptopedia article here.
        </p>
        <h3>Multipool Mining</h3>
        <p>
          Even though there are Single Mining pools that mine for only a single
          cryptocurrency, Multipools allow a user to constantly switch between
          the mining of a cryptocurrency depending on the profitability of the
          coin at any given time. In-order to determine the most profitable
          cryptocurrency to mine at a given time, a Multipool will take into
          account:
        </p>
        <ul>
          <li>The difficulty of mining the coin</li>
          <li>The exchange rate between cryptocurrencies</li>
          <li>The block generation times</li>
          <li>The hash rate of the network</li>
        </ul>
        <p>
          Multipools are incredibly useful if a user is uncertain about which
          coin is best to mine at any given time. However, because the
          cryptocurrency that was just mined is typically immediately exchanged
          for another one, the price of the mined cryptocurrency can often end
          up declining slightly.
        </p>
        <h3>Pool Rewards</h3>
        <p>
          There are a variety of methods in which a mining pool can share the
          reward once a block has successfully been added to a blockchain. A few
          pool reward structures to consider including following:
        </p>
        <p>
          <b>Pay-per-share (PPS):</b> As one of the most basic pool reward
          structures, the PPS approach offers an instant payout for each share
          of the cryptographic puzzle solved. The payout is offered from the
          mining pool’s existing balance.
        </p>
        <p>
          <b>Full-pay-per-share (FPPS):</b> As well as benefiting from the block
          reward, the FPPS approach allows for participating miners to benefit
          from transaction fees. A transaction fee is calculated over a certain
          period, added to the block reward, and then distributed to the miners
          according to the PPS model described above.
        </p>
        <p>
          Additional examples of pool reward structures can be found on the
          Bitcoin Wiki page.
        </p>

        <h3>Advantages Vs. Disadvantages of Pool Mining</h3>
        <p>
          To conclude, mining pools have their own advantages and disadvantages.
          A few advantages to consider when deciding whether to enter a mining
          pool include:
        </p>
        <ul>
          <li>More stable income</li>
          <li>Potentially lower costs of mining</li>
          <li>Potential of generating a higher income</li>
        </ul>
        <p>Conversely, disadvantages of mining pools include:</p>
        <ul>
          <li>Mining pools may suffer interruptions</li>
          <li>Block rewards have to be shared</li>
          <li>Potentially unfavourable pool reward structure</li>
        </ul>
        <p>
          It is important to understand what a mining pool is before deciding to
          engage with one. This article was designed to give you an in-depth but
          accessible insight into mining pools.
        </p>
      </div>
    </div>
  );
};

export default Pools;
