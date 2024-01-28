"use client";

import { useEffect, useState } from "react";
import "../coin/Coin.scss";
import Navbar from "../../components/Navbar/Navbar";
import DOMPurify from "dompurify";
export const Coin = ({ targetCoin }) => {
  const [data, setData] = useState([]);

  function priceFormatter(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${targetCoin}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
      );

      const data = await response.json();

      setData(data);
    }

    getData();
  }, []);

  return (
    <div className="coin-page-wrapper">
      <Navbar></Navbar>

      <div className="coin-container">
        <div className="coin-info-left">
          {data.image ? <img src={data.image.large} alt="" /> : null}
          <h1>{data.name}</h1>

          <h2>Rank #{data.market_cap_rank}</h2>
        </div>

        <div className="coin-info-right">
          <div className="coin-info-top">
            <h2>24h Change: <span className={data.market_data?(data.market_data.price_change_percentage_24h < 0 ? "red-price":"green-price"):""}>{data.market_data? Math.round((data.market_data.price_change_percentage_24h) * 100) / 100:null}%</span></h2>
            <h2>
              Price: <span className="green-price">${data.market_data? priceFormatter(data.market_data.current_price.usd):null}</span>
            </h2>
            <h2>Symbol: {data.symbol?data.symbol:null}</h2>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                data.description ? data.description.en : ""
                
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}


