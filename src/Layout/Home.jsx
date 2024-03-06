import CoinDetail from "../components/CoinDetail/Box";
import Tab from "../components/Tab/Tab";
import Coinchart from "../components/tradingcgarts/Coinchart";
import { getTokendata } from "../fetchapi/fetchapi";

export default function Home() {
  console.log(getTokendata())
  return (
    <div className="w-full min-h-[100vh] bg-backj flex justify-center">
      <div className="w-[90%] h-full grid grid-cols-12 mt-4 gap-12">
        <div className="col-span-8">
          
          <Coinchart />
       
          <Tab/>
          <CoinDetail/>
        </div>
        <div className="col-span-4">
          kk
        </div>
      </div>
    </div>
  );
}

