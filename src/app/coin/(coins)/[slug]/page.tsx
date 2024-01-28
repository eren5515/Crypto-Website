import Coin from "../../page";
import {FC} from "react";

interface pageProps{
   params: {slug: string}
}






const page: FC<pageProps> = ({params}) => {
   return (
      <Coin targetCoin={params.slug}></Coin>
   )
}

export default page;