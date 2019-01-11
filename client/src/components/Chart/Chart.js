import React from "react";
import "./Chart.css";

const Chart = () => {
  return (
    <div>
      <div>
        <div className="header-195685bc8462969c04" />
        <h1 className="text-center m-4">Mining Profitablility Chart</h1>
        <div className="container chart">
          <div className="mb-2">
            <div className="centered-image-short">
              <div id="bsa-zone_1521482372256-2_123456" />
            </div>
          </div>
          <table className="table table-sm table-hover table-vcenter">
            <thead>
              <tr>
                <th>Name(Tag) / Algorithm</th>
                <th>
                  Block Time /
                  <br />
                  Block Reward /
                  <br />
                  Last Block
                </th>
                <th className="text-center">
                  Difficulty /
                  <br />
                  NetHash
                </th>
                <th className="text-center">
                  Est. Rewards
                  <br />
                  Est. Rewards 24h
                </th>
                <th className="text-center">Exchange Rate</th>
                <th>
                  Market Cap
                  <br />
                  Volume
                </th>
                <th>
                  Rev. BTC
                  <br />
                  Rev. 24h
                </th>
                <th>
                  Rev. $<br />
                  Profit
                </th>
                <th>
                  Profitability
                  <br />
                  Current | 24h
                  <br />3 days | 7 days
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/282/thumb/nrg.png?1543774337"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/282-nrg-energi">Energi(NRG)</a>
                    <br />
                    Energi
                  </div>
                </td>
                <td className="small">
                  BT: 1m 3s
                  <br />
                  BR: 2.28
                  <br />
                  LB: 369,808
                </td>
                <td className="text-center">
                  <strong>10,518,524M</strong>
                  <div className="small">
                    166.96 Gh/s
                    <br />
                    -32.9%
                  </div>
                </td>
                <td className="text-center">
                  1.4909
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Pool negative luck included by default"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                  <br />
                  1.0012
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Pool negative luck included by default"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=NRG_BTC"
                    alt="mining"
                  >
                    0.00031599
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">1.7%</div>
                </td>
                <td>
                  $15,338,738
                  <br />
                  <strong>5.50 BTC</strong>
                </td>
                <td>
                  0.00047
                  <br />
                  0.00032
                </td>
                <td>
                  $1.31
                  <br />
                  <strong>$0.34</strong>
                </td>
                <td>
                  <strong>152%</strong> | 101%
                  <br />
                  113% | 113%
                </td>
              </tr>
              <tr className="table-success">
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/151/thumb/eth.png?1486214743"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/151-eth-ethash">Ethereum(ETH)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 15.44s
                  <br />
                  BR: 2.91
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Reduced due to uncles lowered reward"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                  <br />
                  LB: 7,035,065
                </td>
                <td className="text-center">
                  <strong>2,697,172,965M</strong>
                  <div className="small">
                    174.65 Th/s
                    <br />
                    1.2%
                  </div>
                </td>
                <td className="text-center">
                  0.0082
                  <br />
                  0.0083
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.binance.com/en/trade/ETH_BTC"
                  >
                    0.03767900
                    <br />
                    (Binance)
                  </a>
                  <div className="small">0.9%</div>
                </td>
                <td>
                  $16,311,155,116
                  <br />
                  <strong>8,318.43 BTC</strong>
                </td>
                <td>
                  0.00031
                  <br />
                  0.00031
                </td>
                <td>
                  $1.31
                  <br />
                  <strong>$0.33</strong>
                </td>
                <td>
                  <strong>100%</strong> | 100%
                  <br />
                  100% | 100%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/015/thumb/nicehash2.png?1486215161"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-Ethash
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    8.06 Th/s
                    <br />
                    -3.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00029
                  <br />
                  0.00031
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/daggerhashimoto"
                  >
                    3.32700000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-4.2%</div>
                </td>
                <td>
                  -<br />
                  <strong>28.66 BTC</strong>
                </td>
                <td>
                  0.00029
                  <br />
                  0.00031
                </td>
                <td>
                  $1.28
                  <br />
                  <strong>$0.30</strong>
                </td>
                <td>
                  95% | 98%
                  <br />
                  <strong>106%</strong> | 105%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/256/thumb/tube.png?1531333646"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/256-tube-cryptonightsaber">BitTube(TUBE)</a>
                    <br />
                    CryptoNightSaber
                  </div>
                </td>
                <td className="small">
                  BT: 2m
                  <br />
                  BR: 292.22
                  <br />
                  LB: 246,865
                </td>
                <td className="text-center">
                  <strong>1,953,205,328</strong>
                  <div className="small">
                    16.28 Mh/s
                    <br />
                    -9.0%
                  </div>
                </td>
                <td className="text-center">
                  37.2216
                  <br />
                  33.8736
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/Index?MarketName=BTC-TUBE"
                  >
                    0.00000831
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">0.4%</div>
                </td>
                <td>
                  $3,646,399
                  <br />
                  <strong>1.76 BTC</strong>
                </td>
                <td>
                  0.00031
                  <br />
                  0.00028
                </td>
                <td>
                  $1.17
                  <br />
                  <strong>$0.38</strong>
                </td>
                <td>
                  <strong>100%</strong> | 89%
                  <br />
                  92% | 91%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/260/thumb/ryo.png?1532106101"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/260-ryo-cryptonightheavy">Ryo(RYO)</a>
                    <br />
                    CryptoNightHeavy
                  </div>
                </td>
                <td className="small">
                  BT: 4m 1s
                  <br />
                  BR: 48.59
                  <br />
                  LB: 215,877
                </td>
                <td className="text-center">
                  <strong>878,577,625</strong>
                  <div className="small">
                    3.65 Mh/s
                    <br />
                    5.5%
                  </div>
                </td>
                <td className="text-center">
                  13.7509
                  <br />
                  14.5217
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=RYO_BTC"
                  >
                    0.00001883
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-0.4%</div>
                </td>
                <td>
                  $690,239
                  <br />
                  <strong>0.06 BTC</strong>
                </td>
                <td>
                  0.00026
                  <br />
                  0.00027
                </td>
                <td>
                  $1.14
                  <br />
                  <strong>$0.34</strong>
                </td>
                <td>
                  83% | 87%
                  <br />
                  <strong>90%</strong> | 89%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/283/thumb/clo.png?1546278103"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/283-clo-ethash">Callisto(CLO)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 12s
                  <br />
                  BR: 417.90
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Reduced due to uncles lowered reward"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                  <br />
                  LB: 1,800,234
                </td>
                <td className="text-center">
                  <strong>13,014,346M</strong>
                  <div className="small">
                    1.08 Th/s
                    <br />
                    -1.8%
                  </div>
                </td>
                <td className="text-center">
                  245.5114
                  <br />
                  240.9993
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://hitbtc.com/exchange/CLO-to-BTC"
                  >
                    0.00000111
                    <br />
                    (HitBTC)
                  </a>
                  <div className="small">-0.6%</div>
                </td>
                <td>
                  $3,537,012
                  <br />
                  <strong>9.80 BTC</strong>
                </td>
                <td>
                  0.00027
                  <br />
                  0.00027
                </td>
                <td>
                  $1.11
                  <br />
                  <strong>$0.14</strong>
                </td>
                <td>
                  <strong>88%</strong> | 85%
                  <br />
                  86% | 84%
                </td>
              </tr>
              <tr>
                <td colSpan={9}>
                  <div className="centered-image-short">
                    <div id="bsa-zone_1524495978713-0_123456" />
                  </div>
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/249/thumb/lok2.png?1527876896"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/249-loki-cryptonightheavy">Loki(LOKI)</a>
                    <br />
                    CryptoNightHeavy
                  </div>
                </td>
                <td className="small">
                  BT: 2m
                  <br />
                  BR: 19.12
                  <br />
                  LB: 180,573
                </td>
                <td className="text-center">
                  <strong>1,042,491,722</strong>
                  <div className="small">
                    8.69 Mh/s
                    <br />
                    5.6%
                  </div>
                </td>
                <td className="text-center">
                  4.5626
                  <br />
                  4.8234
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=LOKI_BTC"
                  >
                    0.00005435
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">0.2%</div>
                </td>
                <td>
                  $7,170,426
                  <br />
                  <strong>1.22 BTC</strong>
                </td>
                <td>
                  0.00025
                  <br />
                  0.00026
                </td>
                <td>
                  $1.09
                  <br />
                  <strong>$0.30</strong>
                </td>
                <td>
                  80% | 83%
                  <br />
                  <strong>84%</strong> | 83%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/284/thumb/etnx.png?1546651778"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/284-etnx-cryptonightfast">
                      Electronero(ETNX)
                    </a>
                    <br />
                    CryptoNightFast
                  </div>
                </td>
                <td className="small">
                  BT: 1m 2s
                  <br />
                  BR: 2.85
                  <br />
                  LB: 582,189
                </td>
                <td className="text-center">
                  <strong>54,843,512</strong>
                  <div className="small">
                    884.57 kh/s
                    <br />
                    17.5%
                  </div>
                </td>
                <td className="text-center">
                  22.1012
                  <br />
                  26.0441
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://tradeogre.com/exchange/BTC-ETNX"
                  >
                    0.00001001
                    <br />
                    (TradeOgre)
                  </a>
                  <div className="small">-4.5%</div>
                </td>
                <td>
                  $0
                  <br />
                  <strong>0.17 BTC</strong>
                </td>
                <td>
                  0.00022
                  <br />
                  0.00026
                </td>
                <td>
                  $1.08
                  <br />
                  <strong>$0.29</strong>
                </td>
                <td>
                  71% | <strong>83%</strong>
                  <br />
                  79% | 78%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/026/thumb/nicehash2.png?1527768953"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-CNHeavy
                    <br />
                    CryptoNightHeavy
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    4.76 Mh/s
                    <br />
                    -7.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00024
                  <br />
                  0.00026
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/cryptonightheavy"
                  >
                    0.08320000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-7.2%</div>
                </td>
                <td>
                  -<br />
                  <strong>0.45 BTC</strong>
                </td>
                <td>
                  0.00024
                  <br />
                  0.00026
                </td>
                <td>
                  $1.07
                  <br />
                  <strong>$0.28</strong>
                </td>
                <td>
                  77% | <strong>82%</strong>
                  <br />
                  80% | 77%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/209/thumb/etp.png?1508692794"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/209-etp-ethash">Metaverse(ETP)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 30s
                  <br />
                  BR: 2.57
                  <br />
                  LB: 1,795,365
                </td>
                <td className="text-center">
                  <strong>14,961,008M</strong>
                  <div className="small">
                    498.70 Gh/s
                    <br />
                    23.7%
                  </div>
                </td>
                <td className="text-center">
                  1.3144
                  <br />
                  1.6258
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.bitfinex.com/trading/ETPBTC"
                  >
                    0.00015551
                    <br />
                    (Bitfinex)
                  </a>
                  <div className="small">-1.3%</div>
                </td>
                <td>
                  $35,335,195
                  <br />
                  <strong>10.27 BTC</strong>
                </td>
                <td>
                  0.00020
                  <br />
                  0.00025
                </td>
                <td>
                  $1.05
                  <br />
                  <strong>$0.08</strong>
                </td>
                <td>
                  66% | 80%
                  <br />
                  <strong>85%</strong> | 78%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/279/thumb/xhv.png?1541943524"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/279-xhv-cryptonighthaven">
                      HavenProtocol(XHV)
                    </a>
                    <br />
                    CryptoNightHaven
                  </div>
                </td>
                <td className="small">
                  BT: 2m
                  <br />
                  BR: 21.17
                  <br />
                  LB: 239,481
                </td>
                <td className="text-center">
                  <strong>2,870,927,461</strong>
                  <div className="small">
                    23.92 Mh/s
                    <br />
                    -0.2%
                  </div>
                </td>
                <td className="text-center">
                  1.8346
                  <br />
                  1.8329
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/Index?MarketName=BTC-XHV"
                  >
                    0.00013711
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">0.5%</div>
                </td>
                <td>
                  $3,850,031
                  <br />
                  <strong>35.85 BTC</strong>
                </td>
                <td>
                  0.00025
                  <br />
                  0.00025
                </td>
                <td>
                  $1.04
                  <br />
                  <strong>$0.25</strong>
                </td>
                <td>
                  <strong>81%</strong> | 80%
                  <br />
                  75% | 69%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/271/thumb/dbix.png?1536530690"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/271-dbix-ethash">Dubaicoin(DBIX)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 1m 30s
                  <br />
                  BR: 6.00
                  <br />
                  LB: 555,131
                </td>
                <td className="text-center">
                  <strong>21,445,463M</strong>
                  <div className="small">
                    238.28 Gh/s
                    <br />
                    -13.8%
                  </div>
                </td>
                <td className="text-center">
                  2.1385
                  <br />
                  1.8435
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=DBIX_BTC"
                  >
                    0.00012403
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-1.0%</div>
                </td>
                <td>
                  $1,149,772
                  <br />
                  <strong>1.55 BTC</strong>
                </td>
                <td>
                  0.00027
                  <br />
                  0.00023
                </td>
                <td>
                  $0.95
                  <br />
                  <strong>-$0.02</strong>
                </td>
                <td>
                  <strong>85%</strong> | 73%
                  <br />
                  77% | 75%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/261/thumb/grft.png?1532113346"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/261-grft-cryptonightv8">Graft(GRFT)</a>
                    <br />
                    CryptoNightV8
                  </div>
                </td>
                <td className="small">
                  BT: 1m 58s
                  <br />
                  BR: 639.77
                  <br />
                  LB: 257,772
                </td>
                <td className="text-center">
                  <strong>1,252,034,795</strong>
                  <div className="small">
                    10.61 Mh/s
                    <br />
                    13.7%
                  </div>
                </td>
                <td className="text-center">
                  109.9061
                  <br />
                  125.0194
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://tradeogre.com/exchange/BTC-GRFT"
                  >
                    0.00000169
                    <br />
                    (TradeOgre)
                  </a>
                  <div className="small">-0.5%</div>
                </td>
                <td>
                  $3,183,324
                  <br />
                  <strong>0.75 BTC</strong>
                </td>
                <td>
                  0.00019
                  <br />
                  0.00021
                </td>
                <td>
                  $0.88
                  <br />
                  <strong>-$0.06</strong>
                </td>
                <td>
                  60% | <strong>67%</strong>
                  <br />
                  64% | 63%
                </td>
              </tr>
              <tr>
                <td colSpan={9}>
                  <div className="centered-image-short">
                    <div id="bsa-zone_1521482372256-1_123456" />
                  </div>
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/101/thumb/monero.png?1486175477"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/101-xmr-cryptonightv8">Monero(XMR)</a>
                    <br />
                    CryptoNightV8
                  </div>
                </td>
                <td className="small">
                  BT: 1m 52s
                  <br />
                  BR: 3.32
                  <br />
                  LB: 1,744,878
                </td>
                <td className="text-center">
                  <strong>48,341,433,002</strong>
                  <div className="small">
                    431.62 Mh/s
                    <br />
                    7.8%
                  </div>
                </td>
                <td className="text-center">
                  0.0148
                  <br />
                  0.0159
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.binance.com/en/trade/XMR_BTC"
                  >
                    0.01323500
                    <br />
                    (Binance)
                  </a>
                  <div className="small">0.1%</div>
                </td>
                <td>
                  $917,467,230
                  <br />
                  <strong>912.35 BTC</strong>
                </td>
                <td>
                  0.00020
                  <br />
                  0.00021
                </td>
                <td>
                  $0.88
                  <br />
                  <strong>-$0.06</strong>
                </td>
                <td>
                  63% | <strong>67%</strong>
                  <br />
                  67% | 66%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/029/thumb/nicehash2.png?1539791885"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-CNV8
                    <br />
                    CryptoNightV8
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    25.58 Mh/s
                    <br />
                    -4.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00019
                  <br />
                  0.00021
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/cryptonightv8"
                  >
                    0.07790000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-7.7%</div>
                </td>
                <td>
                  -<br />
                  <strong>2.24 BTC</strong>
                </td>
                <td>
                  0.00019
                  <br />
                  0.00021
                </td>
                <td>
                  $0.87
                  <br />
                  <strong>-$0.06</strong>
                </td>
                <td>
                  62% | <strong>67%</strong>
                  <br />
                  65% | 64%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/211/thumb/pirl2.png?1530823940"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/211-pirl-ethash">Pirl(PIRL)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 11s
                  <br />
                  BR: 6.00
                  <br />
                  LB: 2,807,480
                </td>
                <td className="text-center">
                  <strong>1,417,605M</strong>
                  <div className="small">
                    128.87 Gh/s
                    <br />
                    1.0%
                  </div>
                </td>
                <td className="text-center">
                  32.3411
                  <br />
                  32.6486
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=PIRL_BTC"
                  >
                    0.00000641
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">0.6%</div>
                </td>
                <td>
                  $922,805
                  <br />
                  <strong>0.14 BTC</strong>
                </td>
                <td>
                  0.00021
                  <br />
                  0.00021
                </td>
                <td>
                  $0.87
                  <br />
                  <strong>-$0.10</strong>
                </td>
                <td>
                  67% | 67%
                  <br />
                  <strong>68%</strong> | 66%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/173/thumb/ubq.png?1486175435"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/173-ubq-ubqhash">Ubiq(UBQ)</a>
                    <br />
                    Ubqhash
                  </div>
                </td>
                <td className="small">
                  BT: 1m 30s
                  <br />
                  BR: 7.00
                  <br />
                  LB: 707,814
                </td>
                <td className="text-center">
                  <strong>13,124,142M</strong>
                  <div className="small">
                    145.82 Gh/s
                    <br />
                    -6.0%
                  </div>
                </td>
                <td className="text-center">
                  4.0759
                  <br />
                  3.8316
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/Index?MarketName=BTC-UBQ"
                  >
                    0.00005446
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">-0.2%</div>
                </td>
                <td>
                  $9,633,753
                  <br />
                  <strong>2.23 BTC</strong>
                </td>
                <td>
                  0.00022
                  <br />
                  0.00021
                </td>
                <td>
                  $0.87
                  <br />
                  <strong>-$0.11</strong>
                </td>
                <td>
                  <strong>71%</strong> | 66%
                  <br />
                  69% | 69%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/221/thumb/ella.png?1514372318"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/221-ella-ethash">Ellaism(ELLA)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 12s
                  <br />
                  BR: 4.91
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Reduced due to uncles lowered reward"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                  <br />
                  LB: 3,049,016
                </td>
                <td className="text-center">
                  <strong>556,410M</strong>
                  <div className="small">
                    46.37 Gh/s
                    <br />
                    2.8%
                  </div>
                </td>
                <td className="text-center">
                  67.3466
                  <br />
                  69.2430
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=ELLA_BTC"
                  >
                    0.00000297
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-6.0%</div>
                </td>
                <td>
                  $157,289
                  <br />
                  <strong>0.25 BTC</strong>
                </td>
                <td>
                  0.00020
                  <br />
                  0.00021
                </td>
                <td>
                  $0.85
                  <br />
                  <strong>-$0.12</strong>
                </td>
                <td>
                  64% | 65%
                  <br />
                  <strong>67%</strong> | 60%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/200/thumb/vivo.png?1511299591"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/200-vivo-neoscrypt">Vivo(VIVO)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 2m 9s
                  <br />
                  BR: 4.50
                  <br />
                  LB: 335,673
                </td>
                <td className="text-center">
                  <strong>2.586</strong>
                  <div className="small">
                    86.11 Mh/s
                    <br />
                    -48.0%
                  </div>
                </td>
                <td className="text-center">
                  83.7146
                  <br />
                  44.1259
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=VIVO_BTC"
                  >
                    0.00000436
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-4.3%</div>
                </td>
                <td>
                  $61,249
                  <br />
                  <strong>0.08 BTC</strong>
                </td>
                <td>
                  0.00036
                  <br />
                  0.00019
                </td>
                <td>
                  $0.80
                  <br />
                  <strong>-$0.28</strong>
                </td>
                <td>
                  <strong>117%</strong> | 61%
                  <br />
                  49% | 45%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/178/thumb/music.png?1490568984"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/178-music-ethash">Musicoin(MUSIC)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 13s
                  <br />
                  BR: 246.20
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Reduced due to uncles lowered reward"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                  <br />
                  LB: 4,103,238
                </td>
                <td className="text-center">
                  <strong>2,645,360M</strong>
                  <div className="small">
                    203.49 Gh/s
                    <br />
                    -0.5%
                  </div>
                </td>
                <td className="text-center">
                  711.3305
                  <br />
                  707.7584
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/Index?MarketName=BTC-MUSIC"
                  >
                    0.00000027
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">0.0%</div>
                </td>
                <td>
                  $1,444,173
                  <br />
                  <strong>0.42 BTC</strong>
                </td>
                <td>
                  0.00019
                  <br />
                  0.00019
                </td>
                <td>
                  $0.79
                  <br />
                  <strong>-$0.18</strong>
                </td>
                <td>
                  <strong>62%</strong> | 61%
                  <br />
                  62% | 59%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/245/thumb/bci.png?1527275802"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/245-bci-progpow">Bitcoin Interest(BCI)</a>
                    <br />
                    ProgPow
                  </div>
                </td>
                <td className="small">
                  BT: 9m 40s
                  <br />
                  BR: 10.76
                  <br />
                  LB: 19,608
                </td>
                <td className="text-center">
                  <strong>168,597,109.018</strong>
                  <div className="small">
                    19.05 Gh/s
                    <br />
                    8.9%
                  </div>
                </td>
                <td className="text-center">
                  1.9916
                  <br />
                  2.1680
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://hitbtc.com/exchange/BCI-to-BTC"
                  >
                    0.00008800
                    <br />
                    (HitBTC)
                  </a>
                  <div className="small">-5.6%</div>
                </td>
                <td>
                  $6,695,561
                  <br />
                  <strong>0.44 BTC</strong>
                </td>
                <td>
                  0.00018
                  <br />
                  0.00019
                </td>
                <td>
                  $0.79
                  <br />
                  <strong>-$0.22</strong>
                </td>
                <td>
                  56% | <strong>61%</strong>
                  <br />
                  59% | 57%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/276/thumb/anon.png?1540758695"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/276-anon-zhash">Anon(ANON)</a>
                    <br />
                    Zhash
                  </div>
                </td>
                <td className="small">
                  BT: 10m 8s
                  <br />
                  BR: 32.50
                  <br />
                  LB: 34,339
                </td>
                <td className="text-center">
                  <strong>33,650,499.722</strong>
                  <div className="small">
                    55.35 kh/s
                    <br />
                    -12.0%
                  </div>
                </td>
                <td className="text-center">
                  5.2511
                  <br />
                  4.6210
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=ANON_BTC"
                  >
                    0.00003757
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">3.5%</div>
                </td>
                <td>
                  $0
                  <br />
                  <strong>0.52 BTC</strong>
                </td>
                <td>
                  0.00020
                  <br />
                  0.00017
                </td>
                <td>
                  $0.72
                  <br />
                  <strong>-$0.14</strong>
                </td>
                <td>
                  <strong>63%</strong> | 55%
                  <br />
                  45% | 44%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/214/thumb/btg2.png?1530726686"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/214-btg-zhash">BitcoinGold(BTG)</a>
                    <br />
                    Zhash
                  </div>
                </td>
                <td className="small">
                  BT: 9m 35s
                  <br />
                  BR: 12.50
                  <br />
                  LB: 563,383
                </td>
                <td className="text-center">
                  <strong>205,682.499</strong>
                  <div className="small">
                    2.93 Mh/s
                    <br />
                    22.2%
                  </div>
                </td>
                <td className="text-center">
                  0.0404
                  <br />
                  0.0493
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.binance.com/en/trade/BTG_BTC"
                  >
                    0.00331500
                    <br />
                    (Binance)
                  </a>
                  <div className="small">1.0%</div>
                </td>
                <td>
                  $239,660,064
                  <br />
                  <strong>88.05 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00016
                </td>
                <td>
                  $0.68
                  <br />
                  <strong>-$0.18</strong>
                </td>
                <td>
                  43% | <strong>52%</strong>
                  <br />
                  47% | 44%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/154/thumb/exp2.png?1486175482"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/154-exp-ethash">Expanse(EXP)</a>
                    <br />
                    Ethash
                  </div>
                </td>
                <td className="small">
                  BT: 43s
                  <br />
                  BR: 4.00
                  <br />
                  LB: 1,633,517
                </td>
                <td className="text-center">
                  <strong>5,348,218M</strong>
                  <div className="small">
                    124.38 Gh/s
                    <br />
                    1.5%
                  </div>
                </td>
                <td className="text-center">
                  5.7148
                  <br />
                  5.8030
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/?MarketName=BTC-EXP"
                  >
                    0.00002712
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">-1.2%</div>
                </td>
                <td>
                  $1,181,678
                  <br />
                  <strong>3.14 BTC</strong>
                </td>
                <td>
                  0.00015
                  <br />
                  0.00016
                </td>
                <td>
                  $0.65
                  <br />
                  <strong>-$0.32</strong>
                </td>
                <td>
                  50% | 50%
                  <br />
                  <strong>52%</strong> | 50%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/234/thumb/rvn.png?1522435882"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/234-rvn-x16r">Ravencoin(RVN)</a>
                    <br />
                    X16R
                  </div>
                </td>
                <td className="small">
                  BT: 59s
                  <br />
                  BR: 5,000.00
                  <br />
                  LB: 527,838
                </td>
                <td className="text-center">
                  <strong>57,206.625</strong>
                  <div className="small">
                    4.16 Th/s
                    <br />
                    9.4%
                  </div>
                </td>
                <td className="text-center">
                  36.9228
                  <br />
                  40.3937
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.binance.com/en/trade/RVN_BTC"
                  >
                    0.00000384
                    <br />
                    (Binance)
                  </a>
                  <div className="small">3.6%</div>
                </td>
                <td>
                  $42,070,760
                  <br />
                  <strong>410.46 BTC</strong>
                </td>
                <td>
                  0.00014
                  <br />
                  0.00016
                </td>
                <td>
                  $0.64
                  <br />
                  <strong>-$0.22</strong>
                </td>
                <td>
                  46% | 49%
                  <br />
                  <strong>50%</strong> | 49%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/229/thumb/innova.png?1517254379"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/229-inn-neoscrypt">Innova(INN)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 2m 15s
                  <br />
                  BR: 2.64
                  <br />
                  LB: 299,098
                </td>
                <td className="text-center">
                  <strong>7.014</strong>
                  <div className="small">
                    223.14 Mh/s
                    <br />
                    5.8%
                  </div>
                </td>
                <td className="text-center">
                  18.4240
                  <br />
                  19.4743
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange/?market=INN_BTC"
                  >
                    0.00000755
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-0.9%</div>
                </td>
                <td>
                  $158,281
                  <br />
                  <strong>0.17 BTC</strong>
                </td>
                <td>
                  0.00014
                  <br />
                  0.00015
                </td>
                <td>
                  $0.61
                  <br />
                  <strong>-$0.47</strong>
                </td>
                <td>
                  45% | <strong>47%</strong>
                  <br />
                  46% | 40%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/272/thumb/aion.png?1537990811"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/272-aion-equihash-210-9">Aion(AION)</a>
                    <br />
                    Equihash (210,9)
                  </div>
                </td>
                <td className="small">
                  BT: 10s
                  <br />
                  BR: 1.50
                  <br />
                  LB: 2,135,254
                </td>
                <td className="text-center">
                  <strong>8,871,843.000</strong>
                  <div className="small">
                    887.18 kh/s
                    <br />
                    -11.6%
                  </div>
                </td>
                <td className="text-center">
                  4.1564
                  <br />
                  3.6761
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.binance.com/en/trade/AION_BTC"
                  >
                    0.00003910
                    <br />
                    (Binance)
                  </a>
                  <div className="small">0.7%</div>
                </td>
                <td>
                  $44,502,370
                  <br />
                  <strong>192.36 BTC</strong>
                </td>
                <td>
                  0.00016
                  <br />
                  0.00014
                </td>
                <td>
                  $0.60
                  <br />
                  <strong>-$0.27</strong>
                </td>
                <td>
                  <strong>52%</strong> | 46%
                  <br />
                  47% | 48%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/278/thumb/bcd.png?1541272739"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/278-bcd-bcd">BitcoinDiamond(BCD)</a>
                    <br />
                    BCD
                  </div>
                </td>
                <td className="small">
                  BT: 10m 2s
                  <br />
                  BR: 125.00
                  <br />
                  LB: 550,087
                </td>
                <td className="text-center">
                  <strong>105,007.256</strong>
                  <div className="small">
                    749.17 Gh/s
                    <br />
                    3.3%
                  </div>
                </td>
                <td className="text-center">
                  0.6034
                  <br />
                  0.6235
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.binance.com/en/trade/BCD_BTC"
                  >
                    0.00023000
                    <br />
                    (Binance)
                  </a>
                  <div className="small">0.2%</div>
                </td>
                <td>
                  $146,817,520
                  <br />
                  <strong>74.79 BTC</strong>
                </td>
                <td>
                  0.00014
                  <br />
                  0.00014
                </td>
                <td>
                  $0.60
                  <br />
                  <strong>-$0.34</strong>
                </td>
                <td>
                  45% | 46%
                  <br />
                  <strong>46%</strong> | 44%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/028/thumb/nicehash2.png?1530352348"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-X16R
                    <br />
                    X16R
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    1.30 Th/s
                    <br />
                    -9.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00013
                  <br />
                  0.00014
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/x16r"
                  >
                    0.00620000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-7.5%</div>
                </td>
                <td>
                  -<br />
                  <strong>9.54 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00014
                </td>
                <td>
                  $0.58
                  <br />
                  <strong>-$0.28</strong>
                </td>
                <td>
                  42% | <strong>45%</strong>
                  <br />
                  44% | 43%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/030/thumb/nicehash2.png?1543657385"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-Zhash
                    <br />
                    Zhash
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    443.66 kh/s
                    <br />
                    -2.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00013
                  <br />
                  0.00013
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/zhash"
                  >
                    2.02660000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-4.3%</div>
                </td>
                <td>
                  -<br />
                  <strong>0.96 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00013
                </td>
                <td>
                  $0.55
                  <br />
                  <strong>-$0.31</strong>
                </td>
                <td>
                  41% | <strong>42%</strong>
                  <br />
                  41% | 39%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/207/thumb/btcz3.png?1508781199"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/207-btcz-zhash">BitcoinZ(BTCZ)</a>
                    <br />
                    Zhash
                  </div>
                </td>
                <td className="small">
                  BT: 2m 32s
                  <br />
                  BR: 12,500.00
                  <br />
                  LB: 277,994
                </td>
                <td className="text-center">
                  <strong>3,138.342</strong>
                  <div className="small">
                    169.14 kh/s
                    <br />
                    -16.5%
                  </div>
                </td>
                <td className="text-center">
                  2,645.5280
                  <br />
                  2,209.7705
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://exmo.com/en/trade#?pair=BTCZ_BTC"
                  >
                    0.00000006
                    <br />
                    (Exmo)
                  </a>
                  <div className="small">0.0%</div>
                </td>
                <td>
                  $865,677
                  <br />
                  <strong>0.14 BTC</strong>
                </td>
                <td>
                  0.00016
                  <br />
                  0.00013
                </td>
                <td>
                  $0.55
                  <br />
                  <strong>-$0.31</strong>
                </td>
                <td>
                  <strong>51%</strong> | 42%
                  <br />
                  40% | 38%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/071/thumb/pxc.png?1486175483"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/71-pxc-neoscrypt">Phoenixcoin(PXC)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 1m 39s
                  <br />
                  BR: 25.00
                  <br />
                  LB: 1,967,235
                </td>
                <td className="text-center">
                  <strong>4.418</strong>
                  <div className="small">
                    191.67 Mh/s
                    <br />
                    -16.3%
                  </div>
                </td>
                <td className="text-center">
                  276.4806
                  <br />
                  231.9733
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=PXC_BTC"
                  >
                    0.00000055
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-0.9%</div>
                </td>
                <td>
                  $164,822
                  <br />
                  <strong>0.19 BTC</strong>
                </td>
                <td>
                  0.00015
                  <br />
                  0.00013
                </td>
                <td>
                  $0.53
                  <br />
                  <strong>-$0.55</strong>
                </td>
                <td>
                  <strong>49%</strong> | 41%
                  <br />
                  38% | 35%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/277/thumb/suqa.png?1541271652"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/277-suqa-x22i">SUQA(SUQA)</a>
                    <br />
                    X22i
                  </div>
                </td>
                <td className="small">
                  BT: 2m 6s
                  <br />
                  BR: 2,500.00
                  <br />
                  LB: 72,005
                </td>
                <td className="text-center">
                  <strong>2,011.005</strong>
                  <div className="small">
                    68.55 Gh/s
                    <br />
                    -19.1%
                  </div>
                </td>
                <td className="text-center">
                  292.5448
                  <br />
                  236.5686
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.SUQA_BRIDGE.BTC"
                  >
                    0.00000053
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">5.1%</div>
                </td>
                <td>
                  $1,020,648
                  <br />
                  <strong>0.30 BTC</strong>
                </td>
                <td>
                  0.00016
                  <br />
                  0.00013
                </td>
                <td>
                  $0.52
                  <br />
                  <strong>-$0.42</strong>
                </td>
                <td>
                  <strong>50%</strong> | 40%
                  <br />
                  38% | 33%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/274/thumb/Traid.png?1540718291"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/274-traid-neoscrypt">Traid(TRAID)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 2m
                  <br />
                  BR: 60.00
                  <br />
                  LB: 135,371
                </td>
                <td className="text-center">
                  <strong>8.348</strong>
                  <div className="small">
                    298.80 Mh/s
                    <br />
                    -2.1%
                  </div>
                </td>
                <td className="text-center">
                  352.7538
                  <br />
                  345.2582
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.TRAID_BRIDGE.BTC"
                  >
                    0.00000036
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">3.0%</div>
                </td>
                <td>
                  $15,429
                  <br />
                  <strong>0.05 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00012
                </td>
                <td>
                  $0.52
                  <br />
                  <strong>-$0.56</strong>
                </td>
                <td>
                  <strong>41%</strong> | 40%
                  <br />
                  36% | 39%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/003/thumb/nicehash2.png?1486215159"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-NeoScrypt
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    9.78 Gh/s
                    <br />
                    52.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00012
                  <br />
                  0.00012
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/neoscrypt"
                  >
                    0.04780000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-5.0%</div>
                </td>
                <td>
                  -<br />
                  <strong>0.32 BTC</strong>
                </td>
                <td>
                  0.00012
                  <br />
                  0.00012
                </td>
                <td>
                  $0.51
                  <br />
                  <strong>-$0.57</strong>
                </td>
                <td>
                  38% | 39%
                  <br />
                  <strong>41%</strong> | 40%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/241/thumb/flm.png?1525614728"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/241-flm-phi1612">Folm(FLM)</a>
                    <br />
                    PHI1612
                  </div>
                </td>
                <td className="small">
                  BT: 2m 7s
                  <br />
                  BR: 30.00
                  <br />
                  LB: 221,220
                </td>
                <td className="text-center">
                  <strong>98.928</strong>
                  <div className="small">
                    3.35 Gh/s
                    <br />
                    -24.1%
                  </div>
                </td>
                <td className="text-center">
                  270.8731
                  <br />
                  206.1405
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.FLM_BRIDGE.BTC"
                  >
                    0.00000058
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">0.8%</div>
                </td>
                <td>
                  $23,267
                  <br />
                  <strong>0.00 BTC</strong>
                </td>
                <td>
                  0.00016
                  <br />
                  0.00012
                </td>
                <td>
                  $0.50
                  <br />
                  <strong>-$0.44</strong>
                </td>
                <td>
                  <strong>51%</strong> | 38%
                  <br />
                  38% | 37%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/008/thumb/feathercoin_logo_256px.png?1486175490"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/8-ftc-neoscrypt">Feathercoin(FTC)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 1m 2s
                  <br />
                  BR: 40.00
                  <br />
                  LB: 2,484,869
                </td>
                <td className="text-center">
                  <strong>92.401</strong>
                  <div className="small">
                    6.40 Gh/s
                    <br />
                    14.7%
                  </div>
                </td>
                <td className="text-center">
                  21.4143
                  <br />
                  24.5631
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/Index?MarketName=BTC-FTC"
                  >
                    0.00000473
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">-1.8%</div>
                </td>
                <td>
                  $4,385,810
                  <br />
                  <strong>1.18 BTC</strong>
                </td>
                <td>
                  0.00010
                  <br />
                  0.00012
                </td>
                <td>
                  $0.48
                  <br />
                  <strong>-$0.60</strong>
                </td>
                <td>
                  33% | <strong>37%</strong>
                  <br />
                  36% | 34%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/072/thumb/orb.png?1486175479"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/72-orb-neoscrypt">Orbitcoin(ORB)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 6m
                  <br />
                  BR: 0.50
                  <br />
                  LB: 2,603,544
                </td>
                <td className="text-center">
                  <strong>5.501</strong>
                  <div className="small">
                    65.62 Mh/s
                    <br />
                    -26.8%
                  </div>
                </td>
                <td className="text-center">
                  4.3358
                  <br />
                  3.2049
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=ORB_BTC"
                  >
                    0.00003500
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">2.2%</div>
                </td>
                <td>
                  $467,975
                  <br />
                  <strong>0.04 BTC</strong>
                </td>
                <td>
                  0.00015
                  <br />
                  0.00011
                </td>
                <td>
                  $0.47
                  <br />
                  <strong>-$0.61</strong>
                </td>
                <td>
                  <strong>49%</strong> | 36%
                  <br />
                  34% | 34%
                </td>
              </tr>
              <tr className="table-warning">
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/262/thumb/grv2.png?1533641610"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/262-grv-x16r">Gravium(GRV)</a>
                    <br />
                    X16R
                    <span
                      className="mt-1 float-right badge badge-warning"
                      data-toggle="popover"
                      data-placement="right"
                      data-trigger="hover"
                      data-content="This coin stats were updated more than an hour ago and may be outdated"
                    >
                      Lagging
                    </span>
                  </div>
                </td>
                <td className="small">
                  BT: 1m 3s
                  <br />
                  BR: 3.13
                  <br />
                  LB: 314,947
                </td>
                <td className="text-center">
                  <strong>22.152</strong>
                  <div className="small">
                    1.51 Gh/s
                    <br />
                    -11.5%
                  </div>
                </td>
                <td className="text-center">
                  58.9190
                  <br />
                  52.2524
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.GRV_BRIDGE.BTC"
                  >
                    0.00000214
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">0.8%</div>
                </td>
                <td>
                  $25,697
                  <br />
                  <strong>0.01 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00011
                </td>
                <td>
                  $0.46
                  <br />
                  <strong>-$0.40</strong>
                </td>
                <td>
                  <strong>41%</strong> | 36%
                  <br />
                  35% | 32%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/236/thumb/din.png?1524413585"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/236-din-neoscrypt">Dinero(DIN)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 1m 33s
                  <br />
                  BR: 13.50
                  <br />
                  LB: 314,300
                </td>
                <td className="text-center">
                  <strong>3.030</strong>
                  <div className="small">
                    139.93 Mh/s
                    <br />
                    -20.0%
                  </div>
                </td>
                <td className="text-center">
                  216.6827
                  <br />
                  173.9540
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.DIN_BRIDGE.BTC"
                  >
                    0.00000061
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">-15.8%</div>
                </td>
                <td>
                  $21,965
                  <br />
                  <strong>0.01 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00011
                </td>
                <td>
                  $0.44
                  <br />
                  <strong>-$0.64</strong>
                </td>
                <td>
                  <strong>43%</strong> | 34%
                  <br />
                  33% | 31%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/202/thumb/btx.png?1506457241"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/202-btx-timetravel10">Bitcore(BTX)</a>
                    <br />
                    TimeTravel10
                  </div>
                </td>
                <td className="small">
                  BT: 2m 51s
                  <br />
                  BR: 3.13
                  <br />
                  LB: 320,300
                </td>
                <td className="text-center">
                  <strong>1,425.245</strong>
                  <div className="small">
                    35.80 Gh/s
                    <br />
                    0.7%
                  </div>
                </td>
                <td className="text-center">
                  1.1900
                  <br />
                  1.1987
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://hitbtc.com/exchange/BTX-to-BTC"
                  >
                    0.00008700
                    <br />
                    (HitBTC)
                  </a>
                  <div className="small">-1.2%</div>
                </td>
                <td>
                  $6,278,195
                  <br />
                  <strong>0.74 BTC</strong>
                </td>
                <td>
                  0.00010
                  <br />
                  0.00010
                </td>
                <td>
                  $0.43
                  <br />
                  <strong>-$0.65</strong>
                </td>
                <td>
                  <strong>33%</strong> | 33%
                  <br />
                  32% | 31%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/225/thumb/gbx.png?1514837371"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/225-gbx-neoscrypt">GoByte(GBX)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 2m 36s
                  <br />
                  BR: 3.71
                  <br />
                  LB: 228,507
                </td>
                <td className="text-center">
                  <strong>156.177</strong>
                  <div className="small">
                    4.30 Gh/s
                    <br />
                    9.4%
                  </div>
                </td>
                <td className="text-center">
                  1.1757
                  <br />
                  1.2862
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=GBX_BTC"
                  >
                    0.00008042
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">2.8%</div>
                </td>
                <td>
                  $1,386,270
                  <br />
                  <strong>2.70 BTC</strong>
                </td>
                <td>
                  0.00009
                  <br />
                  0.00010
                </td>
                <td>
                  $0.43
                  <br />
                  <strong>-$0.65</strong>
                </td>
                <td>
                  30% | <strong>33%</strong>
                  <br />
                  32% | 31%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/258/thumb/hth.png?1531343810"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/258-hth-x16r">HelpTheHomeless(HTH)</a>
                    <br />
                    X16R
                  </div>
                </td>
                <td className="small">
                  BT: 1m 3s
                  <br />
                  BR: 1,406.25
                  <br />
                  LB: 263,359
                </td>
                <td className="text-center">
                  <strong>95.566</strong>
                  <div className="small">
                    6.52 Gh/s
                    <br />
                    -17.0%
                  </div>
                </td>
                <td className="text-center">
                  6,196.3447
                  <br />
                  5,148.6585
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.HTH_BRIDGE.BTC"
                  >
                    0.00000002
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">0.0%</div>
                </td>
                <td>
                  $54,153
                  <br />
                  <strong>0.01 BTC</strong>
                </td>
                <td>
                  0.00012
                  <br />
                  0.00010
                </td>
                <td>
                  $0.43
                  <br />
                  <strong>-$0.44</strong>
                </td>
                <td>
                  40% | 33%
                  <br />
                  40% | <strong>52%</strong>
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/201/thumb/bsd.png?1506379606"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/201-bsd-xevan">BitSend(BSD)</a>
                    <br />
                    Xevan
                  </div>
                </td>
                <td className="small">
                  BT: 3m 17s
                  <br />
                  BR: 5.00
                  <br />
                  LB: 579,992
                </td>
                <td className="text-center">
                  <strong>68.184</strong>
                  <div className="small">
                    1.49 Gh/s
                    <br />
                    -11.0%
                  </div>
                </td>
                <td className="text-center">
                  7.0580
                  <br />
                  6.2853
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://bittrex.com/Market/Index?MarketName=BTC-BSD"
                  >
                    0.00001565
                    <br />
                    (Bittrex)
                  </a>
                  <div className="small">-0.4%</div>
                </td>
                <td>
                  $1,415,177
                  <br />
                  <strong>1.01 BTC</strong>
                </td>
                <td>
                  0.00011
                  <br />
                  0.00010
                </td>
                <td>
                  $0.41
                  <br />
                  <strong>-$0.46</strong>
                </td>
                <td>
                  <strong>36%</strong> | 31%
                  <br />
                  31% | 28%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/248/thumb/xmn2.png?1527748540"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/248-xmn-x16r">Motion(XMN)</a>
                    <br />
                    X16R
                  </div>
                </td>
                <td className="small">
                  BT: 2m 2s
                  <br />
                  BR: 8.00
                  <br />
                  LB: 179,866
                </td>
                <td className="text-center">
                  <strong>21.000</strong>
                  <div className="small">
                    739.30 Mh/s
                    <br />
                    -31.0%
                  </div>
                </td>
                <td className="text-center">
                  156.4875
                  <br />
                  108.8685
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.XMN_BRIDGE.BTC"
                  >
                    0.00000082
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">-3.4%</div>
                </td>
                <td>
                  $0
                  <br />
                  <strong>0.01 BTC</strong>
                </td>
                <td>
                  0.00013
                  <br />
                  0.00009
                </td>
                <td>
                  $0.37
                  <br />
                  <strong>-$0.49</strong>
                </td>
                <td>
                  <strong>41%</strong> | 28%
                  <br />
                  28% | 28%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/215/thumb/tzc2.png?1522224431"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/215-tzc-neoscrypt">Trezarcoin(TZC)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 1m 30s
                  <br />
                  BR: 100.00
                  <br />
                  LB: 695,224
                </td>
                <td className="text-center">
                  <strong>28.713</strong>
                  <div className="small">
                    1.37 Gh/s
                    <br />
                    9.0%
                  </div>
                </td>
                <td className="text-center">
                  86.0196
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Pool negative luck included by default"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                  <br />
                  93.7333
                  <span
                    className="ml-1 octicon-inline"
                    data-toggle="popover"
                    data-content="Pool negative luck included by default"
                    data-placement="right"
                    data-trigger="hover"
                  >
                    <svg
                      className="octicon octicon-info"
                      viewBox="0 0 14 16"
                      version="1.1"
                      width={14}
                      height={16}
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
                      />
                    </svg>
                  </span>
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=TZC_BTC"
                  >
                    0.00000087
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-0.9%</div>
                </td>
                <td>
                  $496,701
                  <br />
                  <strong>0.07 BTC</strong>
                </td>
                <td>
                  0.00007
                  <br />
                  0.00008
                </td>
                <td>
                  $0.34
                  <br />
                  <strong>-$0.74</strong>
                </td>
                <td>
                  24% | <strong>26%</strong>
                  <br />
                  23% | 20%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/252/thumb/splb2.png?1528916932"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/252-splb-neoscrypt">SimpleBank(SPLB)</a>
                    <br />
                    NeoScrypt
                  </div>
                </td>
                <td className="small">
                  BT: 3m 3s
                  <br />
                  BR: 4.20
                  <br />
                  LB: 112,600
                </td>
                <td className="text-center">
                  <strong>0.605</strong>
                  <div className="small">
                    14.20 Mh/s
                    <br />
                    14.5%
                  </div>
                </td>
                <td className="text-center">
                  292.7724
                  <br />
                  328.1316
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.SPLB_BRIDGE.BTC"
                  >
                    0.00000022
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">-0.4%</div>
                </td>
                <td>
                  $1,431
                  <br />
                  <strong>0.00 BTC</strong>
                </td>
                <td>
                  0.00006
                  <br />
                  0.00007
                </td>
                <td>
                  $0.30
                  <br />
                  <strong>-$0.78</strong>
                </td>
                <td>
                  21% | <strong>23%</strong>
                  <br />
                  17% | 16%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/273/thumb/msr.png?1538326140"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/273-msr-cryptonightfast">Masari(MSR)</a>
                    <br />
                    CryptoNightFast
                  </div>
                </td>
                <td className="small">
                  BT: 1m 59s
                  <br />
                  BR: 18.04
                  <br />
                  LB: 350,789
                </td>
                <td className="text-center">
                  <strong>5,015,127,022</strong>
                  <div className="small">
                    42.14 Mh/s
                    <br />
                    7.3%
                  </div>
                </td>
                <td className="text-center">
                  1.5385
                  <br />
                  1.6513
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://tradeogre.com/exchange/BTC-MSR"
                  >
                    0.00004159
                    <br />
                    (TradeOgre)
                  </a>
                  <div className="small">-0.2%</div>
                </td>
                <td>
                  $1,553,122
                  <br />
                  <strong>0.64 BTC</strong>
                </td>
                <td>
                  0.00006
                  <br />
                  0.00007
                </td>
                <td>
                  $0.29
                  <br />
                  <strong>-$0.51</strong>
                </td>
                <td>
                  21% | <strong>22%</strong>
                  <br />
                  22% | 22%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/266/thumb/xdna2.png?1536735725"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/266-xdna-hex">XDNA(XDNA)</a>
                    <br />
                    Hex
                  </div>
                </td>
                <td className="small">
                  BT: 1m
                  <br />
                  BR: 1.77
                  <br />
                  LB: 274,477
                </td>
                <td className="text-center">
                  <strong>81.539</strong>
                  <div className="small">
                    5.84 Gh/s
                    <br />
                    -15.2%
                  </div>
                </td>
                <td className="text-center">
                  3.5282
                  <br />
                  2.9933
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=XDNA_BTC"
                  >
                    0.00001340
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">-3.5%</div>
                </td>
                <td>
                  $207,715
                  <br />
                  <strong>0.55 BTC</strong>
                </td>
                <td>
                  0.00005
                  <br />
                  0.00004
                </td>
                <td>
                  $0.17
                  <br />
                  <strong>-$0.41</strong>
                </td>
                <td>
                  <strong>15%</strong> | 13%
                  <br />
                  12% | 12%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/267/thumb/gtm.png?1534683523"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/267-gtm-lyra2z">Gentarium(GTM)</a>
                    <br />
                    Lyra2z
                  </div>
                </td>
                <td className="small">
                  BT: 2m 7s
                  <br />
                  BR: 2.00
                  <br />
                  LB: 118,573
                </td>
                <td className="text-center">
                  <strong>1,104.278</strong>
                  <div className="small">
                    37.35 Gh/s
                    <br />
                    25.5%
                  </div>
                </td>
                <td className="text-center">
                  0.0492
                  <br />
                  0.0617
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.GTM_BRIDGE.BTC"
                  >
                    0.00019022
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">-4.7%</div>
                </td>
                <td>
                  $1,748,620
                  <br />
                  <strong>0.46 BTC</strong>
                </td>
                <td>
                  0.00001
                  <br />
                  0.00001
                </td>
                <td>
                  $0.05
                  <br />
                  <strong>-$0.82</strong>
                </td>
                <td>
                  3% | 4%
                  <br />
                  <strong>4%</strong> | 4%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/254/thumb/mano.png?1529180550"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/254-mano-lyra2z">Mano(MANO)</a>
                    <br />
                    Lyra2z
                  </div>
                </td>
                <td className="small">
                  BT: 3m 41s
                  <br />
                  BR: 5.00
                  <br />
                  LB: 148,435
                </td>
                <td className="text-center">
                  <strong>31.790</strong>
                  <div className="small">
                    617.81 Mh/s
                    <br />
                    0.7%
                  </div>
                </td>
                <td className="text-center">
                  4.2621
                  <br />
                  4.2920
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.MANO_BRIDGE.BTC"
                  >
                    0.00000219
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">2.6%</div>
                </td>
                <td>
                  $16,939
                  <br />
                  <strong>0.03 BTC</strong>
                </td>
                <td>
                  0.00001
                  <br />
                  0.00001
                </td>
                <td>
                  $0.04
                  <br />
                  <strong>-$0.82</strong>
                </td>
                <td>
                  3% | 3%
                  <br />
                  3% | <strong>4%</strong>
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/nice_hash_coins/logos/000/000/027/thumb/nicehash2.png?1527772894"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    Nicehash-Lyra2z
                    <br />
                    Lyra2z
                  </div>
                </td>
                <td className="small">
                  BT: -<br />
                  BR: -<br />
                  LB: -
                </td>
                <td className="text-center">
                  <strong>-</strong>
                  <div className="small">
                    48.34 Gh/s
                    <br />
                    0.0%
                  </div>
                </td>
                <td className="text-center">
                  0.00001
                  <br />
                  0.00001
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.nicehash.com/marketplace/lyra2z"
                  >
                    0.00530000
                    <br />
                    (Nicehash)
                  </a>
                  <div className="small">-10.2%</div>
                </td>
                <td>
                  -<br />
                  <strong>0.29 BTC</strong>
                </td>
                <td>
                  0.00001
                  <br />
                  0.00001
                </td>
                <td>
                  $0.03
                  <br />
                  <strong>-$0.83</strong>
                </td>
                <td>
                  2% | 3%
                  <br />
                  <strong>3%</strong> | 3%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/250/thumb/gin.png?1527877922"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/250-gin-lyra2z">Gincoin(GIN)</a>
                    <br />
                    Lyra2z
                  </div>
                </td>
                <td className="small">
                  BT: 2m 4s
                  <br />
                  BR: 10.00
                  <br />
                  LB: 215,649
                </td>
                <td className="text-center">
                  <strong>11,494.021</strong>
                  <div className="small">
                    398.12 Gh/s
                    <br />
                    -7.6%
                  </div>
                </td>
                <td className="text-center">
                  0.0236
                  <br />
                  0.0218
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.GIN_BRIDGE.BTC"
                  >
                    0.00030000
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">2.5%</div>
                </td>
                <td>
                  $5,896,723
                  <br />
                  <strong>5.74 BTC</strong>
                </td>
                <td>
                  0.00001
                  <br />
                  0.00001
                </td>
                <td>
                  $0.03
                  <br />
                  <strong>-$0.84</strong>
                </td>
                <td>
                  2% | 2%
                  <br />
                  2% | <strong>2%</strong>
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/251/thumb/elli.png?1528232460"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/251-elli-xevan">Elliot(ELLI)</a>
                    <br />
                    Xevan
                  </div>
                </td>
                <td className="small">
                  BT: 1m
                  <br />
                  BR: 0.00
                  <br />
                  LB: 389,260
                </td>
                <td className="text-center">
                  <strong>84,303.022</strong>
                  <div className="small">
                    6.03 Th/s
                    <br />
                    3.2%
                  </div>
                </td>
                <td className="text-center">
                  0.0000
                  <br />
                  0.0000
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.ELLI_BRIDGE.BTC"
                  >
                    0.00000051
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">0.0%</div>
                </td>
                <td>
                  $27,874
                  <br />
                  <strong>0.00 BTC</strong>
                </td>
                <td>
                  0.00000
                  <br />
                  0.00000
                </td>
                <td>
                  $0.00
                  <br />
                  <strong>-$0.86</strong>
                </td>
                <td>
                  <strong>0%</strong> | 0%
                  <br />
                  0% | 0%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/212/thumb/lux2.png?1514825108"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/212-lux-phi2">Luxcoin(LUX)</a>
                    <br />
                    PHI2
                  </div>
                </td>
                <td className="small">
                  BT: 1m
                  <br />
                  BR: 8.00
                  <br />
                  LB: 561,419
                </td>
                <td className="text-center">
                  <strong>2,761.153</strong>
                  <div className="small">
                    197.65 Gh/s
                    <br />
                    -30.8%
                  </div>
                </td>
                <td className="text-center">
                  0.0000
                  <br />
                  0.0000
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://www.cryptopia.co.nz/Exchange?market=LUX_BTC"
                  >
                    0.00015146
                    <br />
                    (Cryptopia)
                  </a>
                  <div className="small">0.4%</div>
                </td>
                <td>
                  $2,099,287
                  <br />
                  <strong>2.77 BTC</strong>
                </td>
                <td>
                  0.00000
                  <br />
                  0.00000
                </td>
                <td>
                  $0.00
                  <br />
                  <strong>$0.00</strong>
                </td>
                <td>
                  <strong>0%</strong> | 0%
                  <br />
                  0% | 0%
                </td>
              </tr>
              <tr className>
                <td>
                  <div className="float-left">
                    <img
                      src="https://images.whattomine.com/coins/logos/000/000/285/thumb/arg.png?1546683740"
                      width={40}
                      height={40}
                      alt="mining"
                    />
                  </div>
                  <div className="ml-5">
                    <a href="/coins/285-agm-phi2">Argoneum(AGM)</a>
                    <br />
                    PHI2
                  </div>
                </td>
                <td className="small">
                  BT: 1m 3s
                  <br />
                  BR: 13.50
                  <br />
                  LB: 95,433
                </td>
                <td className="text-center">
                  <strong>99.451</strong>
                  <div className="small">
                    6.78 Gh/s
                    <br />
                    -21.6%
                  </div>
                </td>
                <td className="text-center">
                  0.0000
                  <br />
                  0.0000
                </td>
                <td className="text-center">
                  <a
                    rel="noopener"
                    className="exrate-link"
                    href="https://wallet.crypto-bridge.org/market/BRIDGE.AGM_BRIDGE.BTC"
                  >
                    0.00000587
                    <br />
                    (CryptoBridge)
                  </a>
                  <div className="small">1.3%</div>
                </td>
                <td>
                  $95,311
                  <br />
                  <strong>0.28 BTC</strong>
                </td>
                <td>
                  0.00000
                  <br />
                  0.00000
                </td>
                <td>
                  $0.00
                  <br />
                  <strong>$0.00</strong>
                </td>
                <td>
                  <strong>0%</strong> | 0%
                  <br />
                  0% | 0%
                </td>
              </tr>
            </tbody>
          </table>
          Last update at 2019-01-11 09:51:15 UTC
        </div>
      </div>
    </div>
  );
};

export default Chart;