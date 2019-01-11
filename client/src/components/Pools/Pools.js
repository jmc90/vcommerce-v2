import React from "react";
import PoolChart from "../../styles/media/pool-piechart.png";

const Pools = () => {
  return (
    <div className="pool-page m-5">
      <h1 className="text-center m-4">Mining Profitablility Chart</h1>
      <div className="piechart m-5">
        <img src={PoolChart} alt="pool chart" />
      </div>
      <div className="pool-list">
        <h3>1. BTC.com</h3>
        <h3>2. Antpool</h3>
        <h3>3. ViaBTC</h3>
        <h3>4. Slush</h3>
        <h3>5. F2pool</h3>
        <h3>6. BTC.top</h3>
        <h3>7. Bitclub.Network</h3>
        <h3>8. BTCC</h3>
        <h3>9. Bitfury</h3>
        <h3>10. BW Pool</h3>
      </div>
      <div className="pool-table">
        <h2 className="m-5">Bitcoin Mining Pool Comparison</h2>
        <table class="m-5">
          <tbody>
            <tr>
              <th class="font-secondary">Pool</th>
              <th class="font-secondary">Location</th>
              <th class="font-secondary">Fees</th>
              <th class="font-secondary">Private Pool</th>
            </tr>
            <tr>
              <td>
                <strong>BitFury</strong>
              </td>
              <td>Georgia</td>
              <td>0%</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <strong>BTCC</strong>
              </td>
              <td>China</td>
              <td>2-3%</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <strong>Slush Pool</strong>
              </td>
              <td>Czech Republic</td>
              <td>2%</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <strong>Antpool</strong>
              </td>
              <td>China</td>
              <td>1%</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <strong>BW</strong>
              </td>
              <td>China</td>
              <td>1%</td>
              <td>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pools;
