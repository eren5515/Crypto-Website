import "../Navbar/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const [navbar, setNavbar] = useState(false);
  const[mobileNav, setMobileNav] = useState(false);


  const openNav = () => {
    setMobileNav(!mobileNav);
  };

  const changeBackground = () => {
    if (window.scrollY >= 106) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div className={!navbar ? "navbar" : "navbar navbar-scrolled"}>
      <Link href="/">
        <h1>CRYPTO</h1>
      </Link>

      <div className="nav-links-div">
        <a href="/">Home</a>
        <a href="#market">Market</a>
        <a href="#choose">Choose Us</a>
        <a href="#join">Join</a>
      </div>

      <div className="nav-icons-div">
        <FontAwesomeIcon
          icon={faXTwitter}
          style={{ color: "#ffffff" }}
          size="xl"
        />
        <FontAwesomeIcon
          icon={faDiscord}
          style={{ color: "#ffffff" }}
          size="xl"
        />
        <FontAwesomeIcon
        onClick={openNav}
          className="hamburger-menu-icon"
          icon={faBars}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
      </div>

      <div className={mobileNav?"mobile-nav-div nav-open":"mobile-nav-div"}>
      <FontAwesomeIcon onClick={openNav} className="mobile-nav-close" icon={faXmark} size="xl" style={{color: "#000000",}} />
        <a onClick={openNav} href="/">Home</a>
        <a onClick={openNav} href="#market">Market</a>
        <a onClick={openNav} href="#choose">Choose Us</a>
        <a onClick={openNav} href="#join">Join</a>
      </div>
    </div>
  );
}
