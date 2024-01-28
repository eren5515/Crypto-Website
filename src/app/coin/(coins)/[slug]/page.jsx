import {Coin} from "../../Coin";





const page = ({params}) => {
   return (
      <Coin targetCoin={params.slug}></Coin>
   )
}

export default page;