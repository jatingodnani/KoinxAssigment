import About from "../components/CoinDetail/About";
import CoinDetail from "../components/CoinDetail/CoinBox";
import Sentiments from "../components/CoinDetail/Sentiments";
import Teamdetail from "../components/CoinDetail/Teamdetail";
import Tokenisation from "../components/CoinDetail/Tokenisation";
import Trendingcard from "../components/CoinDetail/TrendingCard/Trendingcard";
import Rightbar from "../components/Rightbar/Rightbar";
import Tab from "../components/Tab/Tab";
import Coinchart from "../components/tradingcgarts/Coinchart";
import { getTokendata } from "../fetchapi/fetchapi";

export default function Home() {
  return (
    <div className="h-full flex flex-col md:flex-row  gap-12 p-6 box-border bg-[#eff2f5]">
      <div className="w-full md:w-[60%] border-box ">
        <Coinchart />
        <Tab />
        <CoinDetail />
        <Sentiments />
        <About />
        <Tokenisation />
        <Teamdetail />
      </div>
      <div className="w-full md:w-[30%]">
        <Rightbar />
      </div>
    </div>
  );
}
