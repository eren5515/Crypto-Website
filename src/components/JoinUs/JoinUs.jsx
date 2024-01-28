import "../JoinUs/JoinUs.scss";
export default function JoinUs() {
  return (
    <div id="join" className="join-us-wrapper">
      <div className="join-us-top-div">

      <img
          className="floating-img"
          src="https://cdn.discordapp.com/attachments/336171716126572548/1200923217351676034/bitcoin.png?ex=65c7f1e7&is=65b57ce7&hm=2a2b15b7429736255ee055aaae11bf0d6f3b602f1df3d838d87f1331f25e532b&"
          alt=""
        />

        <h1>
          JOIN US VIA <span>DISCORD</span>
        </h1>
  
        <img
          className="floating-img"
          src="https://cdn.discordapp.com/attachments/336171716126572548/1200923217074868325/ethereum.png?ex=65c7f1e7&is=65b57ce7&hm=502f0857ace47f484254d5c74184e20c60dd2aa612e63b0bc659ae92ff991ebb&"
          alt=""
        />
      </div>
      <p>Invest and manage all your crypto at one place.</p>
      <button>Join via Discord</button>
    </div>
  );
}
