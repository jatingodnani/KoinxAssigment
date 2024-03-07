import About from "../components/CoinDetail/About";
import CoinDetail from "../components/CoinDetail/Box";
import Sentiments from "../components/CoinDetail/Sentiments";
import Teamdetail from "../components/CoinDetail/Teamdetail";
import Tokenisation from "../components/CoinDetail/Tokenisation";
import Trendingcard from "../components/CoinDetail/TrendingCard/Trendingcard";
import Rightbar from "../components/Rightbar/Rightbar";
import Tab from "../components/Tab/Tab";
import Coinchart from "../components/tradingcgarts/Coinchart";
import { getTokendata } from "../fetchapi/fetchapi";

export default function Home() {
  console.log(getTokendata());
  return (
    <div className="w-full h-min-[100vh]">
      <div className="w-full min-h-[100vh] bg-backj  p-4 box-border ">
        <div className="w-[100%] h-full grid grid-cols-12 mt-4 gap-12 p-6 box-border">
          <div className="col-span-8">
            <Coinchart />

            <Tab />
            <CoinDetail />
            <Sentiments />
            <About />
            <Tokenisation />
            <Teamdetail />
          </div>
          <div className="col-span-4">
            <Rightbar/>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[250px] bg-white">
        <Trendingcard/>
      </div>
    </div>
  );
}
