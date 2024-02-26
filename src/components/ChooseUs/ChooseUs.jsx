import "../ChooseUs/ChooseUs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faPen, faSquareCheck, faMobileScreenButton,faSackDollar, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function ChooseUs() {
  return (
    <div id="choose" className="choose-us-wrapper">
      <h1 className="choose-us-h1">
        WHY <span>CHOOSE US</span>
      </h1>

      <div className="choose-us-div">
        <div className="choose-us-items-div">
          <div className="choose-us-item">
            <FontAwesomeIcon icon={faWallet} style={{ color: "#ffffff" }} />
            <div>
              <h2>CONNECT YOUR WALLET</h2>
              <h3>Use Trust Wallet, Metamask or to connect to the app.</h3>
            </div>
          </div>

          <div className="choose-us-item">
          <FontAwesomeIcon icon={faPen} style={{color: "#ffffff",}} />            <div>
              <h2>SELECT YOUR QUANTITY</h2>
              <h3>
                Upload your crypto and set a title, description and price.
              </h3>
            </div>
          </div>

          <div className="choose-us-item">
          <FontAwesomeIcon icon={faSquareCheck} style={{color: "#ffffff",}} />            <div>
              <h2>CONFIRM TRANSACTION</h2>
              <h3>Earn by selling your crypto on our marketplace.</h3>
            </div>
          </div>
        </div>
        <img
          className="choose-us-middle-img"
          src="https://github.com/eren5515/asd/blob/main/choose-main.39852b7511b28d44406f.png?raw=true"
          alt=""
        />
        <div className="choose-us-items-div">
          <div className="choose-us-item">
          <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#ffffff",}} />            <div>
              <h2>RECEIVE YOUR OWN NFTS</h2>
              <h3>Invest all your crypto at one place on one platform.</h3>
            </div>
          </div>

          <div className="choose-us-item">
          <FontAwesomeIcon icon={faSackDollar} style={{color: "#ffffff",}} />            <div>
              <h2>TAKE A MARKET TO SELL</h2>
              <h3>Discover, collect the right crypto collections to trade.</h3>
            </div>
          </div>

          <div className="choose-us-item">
          <FontAwesomeIcon icon={faLayerGroup} style={{color: "#ffffff",}} />            <div>
              <h2>DRIVE YOUR COLLECTION</h2>
              <h3>We make it easy to Discover, Invest and manage.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
