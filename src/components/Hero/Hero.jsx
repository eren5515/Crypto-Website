import "../Hero/Hero.scss";
import { useState } from "react";

export default function Hero({coinData}) {

  const [apiLoad, setApiLoad] = useState(true);
   
  function priceFormatter(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
   


  return (
    <div className="hero-container">
      <img className="btc-floating-img floating-img" src="https://cdn.discordapp.com/attachments/336171716126572548/1200923217351676034/bitcoin.png?ex=65c7f1e7&is=65b57ce7&hm=2a2b15b7429736255ee055aaae11bf0d6f3b602f1df3d838d87f1331f25e532b&" alt="" />
      <img className="eth-floating-img floating-img" src="https://cdn.discordapp.com/attachments/336171716126572548/1200923217074868325/ethereum.png?ex=65c7f1e7&is=65b57ce7&hm=502f0857ace47f484254d5c74184e20c60dd2aa612e63b0bc659ae92ff991ebb&" alt="" />
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
