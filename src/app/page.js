"use client"

import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Market from "../components/Market/Market";
import { useEffect, useState } from "react";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import JoinUs from "../components/JoinUs/JoinUs";
import Footer from "../components/Footer/Footer";

export default  function Home() {

const [data,setData]= useState([]);

 
 

 useEffect(() => {
  const getData = async () => {

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`);
  
  
    const data = await response.json();
  
    setData(data);
  
  }
  getData();
 }, [])
 




  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar></Navbar>
     <Hero coinData={data.slice(0,4)}></Hero>
     <Market coinData={data}></Market>
     <ChooseUs></ChooseUs>
     <JoinUs></JoinUs>
     <Footer></Footer>
    </main>
  );
}
