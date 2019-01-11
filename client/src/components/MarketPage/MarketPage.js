import React from "react";
import CryptoTop50 from "./CryptoTop50";
import "./MarketPage.css";

const MarketPage = () => {
  return (
    <div>
      <h1 className="text-center m-4">Cryptocurrency Market</h1>
      <CryptoTop50 />
    </div>
  );
};

export default MarketPage;
