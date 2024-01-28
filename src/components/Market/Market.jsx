"use client";
import Link from "next/link";
import "../Market/Market.scss";

import { useEffect, useState } from "react";

export default function Market({ coinData }) {
  const [currentData, setData] = useState(coinData);
  const [currentPage, setPage] = useState(1);
  const [apiLoad, setApiLoad] = useState(true);

  function priceFormatter(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const slicedData = coinData.slice(currentPage * 10 - 10, currentPage * 10);
  let element;
  if (typeof document !== 'undefined') {  
    element = document.getElementById("market");
};
  return (
    <div id="market" className="market-wrapper">
      <h1>Market Update</h1>
      <div className="market-div">
        <div className="market-header-div">
          <h3>Coin</h3>

          <h3>Price</h3>
          <h3>24h Change</h3>
          <h3>Market Cap</h3>
        </div>

        <div className="market-coins-div" onLoad={() => setApiLoad(false)}>
          {apiLoad && <span className="loader"></span>}

          {slicedData.map((item) => (
            <Link href={"/coin/"+item.id}>
              <div className="market-coin-div">
                <div className="market-coin-logo-and-name">
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                </div>
                <h3 className="market-coin-div-element">$ {priceFormatter(item.current_price)}</h3>
                <h3
                  className={
                    item.price_change_percentage_24h < 0
                      ? "red-price market-coin-div-element"
                      : "green-price market-coin-div-element"
                  }
                >

                  {Math.round(item.price_change_percentage_24h * 100) / 100}%
                </h3>

                <h3 className="market-coin-div-element">$ {priceFormatter(item.market_cap)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pagination-div">
        <button
          onClick={() => {
            setPage(1);
            element.scrollIntoView();

          }}
          className={currentPage == 1 ? "selected-page" : ""}
        >
          1
        </button>
        <button
          onClick={() => {
            setPage(2);
            element.scrollIntoView();

          }}
          className={currentPage == 2 ? "selected-page" : ""}
        >
          2
        </button>
        <button
          onClick={() => {
            setPage(3);
            element.scrollIntoView();

          }}
          className={currentPage == 3 ? "selected-page" : ""}
        >
          3
        </button>
        <button
          onClick={() => {
            setPage(4);
            element.scrollIntoView();

          }}
          className={currentPage == 4 ? "selected-page" : ""}
        >
          4
        </button>
        <button
          onClick={() => {
            setPage(5);
            element.scrollIntoView();

          }}
          className={currentPage == 5 ? "selected-page" : ""}
        >
          5
        </button>
      </div>
    </div>
  );
}
