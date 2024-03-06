import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
function Header() {
  return (
    <nav className="h-[2.5rem] p-[1rem]  flex item-center  justify-between  shadow-lg shadow-rgba(0,0,0,0.029) bg-white">
      <div className="w-[10%]">
        <img src="../assets/fame.png" />
        jjjj
      </div>
      <div className="hidden sm:flex items-center justify-evenly  text-[14px] lg:w-[50%] md:w-[70%] sm:gap-3">
        <Link
          className="no-underline font-ubuntu font-semibold text-black hover:text-lightdark transition duration-75"
          to="/"
        >
          Crypto Taxes
        </Link>
        <Link
          className="font-ubuntu font-semibold text-black no-underline font-xl"
          to="/"
        >
          Free Tools
        </Link>
        <Link
          className="font-ubuntu font-semibold text-black no-underline"
          to="/"
        >
          Resource Center
        </Link>
        <button className="bg-blue p-2 px-6 capitalize font-tenor-sans font-semibold rounded-xl border-0 text-white">
          get started
        </button>
       </div>
       <div className="flex item-center justify-center sm:hidden">
        <IoReorderThree className="text-4xl" />
        </div>
    </nav>
  );
}

export default Header;
