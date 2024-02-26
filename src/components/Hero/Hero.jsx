import "../Hero/Hero.scss";
import { useState } from "react";

export default function Hero({coinData}) {

  const [apiLoad, setApiLoad] = useState(true);
   
  function priceFormatter(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
   


  return (
    <div className="hero-container">
      <img className="btc-floating-img floating-img" src="https://github.com/eren5515/asd/blob/main/bitcoin.png?raw=true" alt="" />
      <img className="eth-floating-img floating-img" src="https://github.com/eren5515/asd/blob/main/ethereum.png?raw=true" alt="" />
      <h1>TRACK AND TRADE <span>CRYPTO CURRENCIES</span></h1>
      <div onLoad={() => setApiLoad(false)} className="top-coins-div">
       {apiLoad && <span className="loader"></span> }
       {coinData.map((item) => (
        <div className="top-coin-div">

          <img src={item.image} alt="" />

          <h3>
            {item.name+" "} 
            <span className={item.price_change_percentage_24h < 0 ?"red-price":"green-price"}>
              {Math.round((item.price_change_percentage_24h) * 100) / 100}%
            </span>
          </h3>
          <h2>$ {priceFormatter(item.current_price)}</h2>


        </div>
       ))}
      </div>
      <button  className="see-prices-button"> <a href="#market">See Prices</a></button>

    </div>
  );
}
