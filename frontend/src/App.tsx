import "./styles/main.css";

import logo from "./assets/logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center">
      <img src={logo} alt="logo" className="w-[200px] mt-7 mb-10" />
      <p className="text-white text-5xl font-black">
        Seu
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          {" "}
          duo{" "}
        </span>
        está aqui!
      </p>

      <div className="grid grid-cols-6 gap-6 mt-6">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/csgo.jpg" alt="" className="w-[180px] h-60" />
          <div className="w-full pt-10 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/csgo.jpg" alt="" className="w-[180px] h-60" />
          <div className="w-full pt-10 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/csgo.jpg" alt="" className="w-[180px] h-60" />
          <div className="w-full pt-10 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/csgo.jpg" alt="" className="w-[180px] h-60" />
          <div className="w-full pt-10 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/csgo.jpg" alt="" className="w-[180px] h-60" />
          <div className="w-full pt-10 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/csgo.jpg" alt="" className="w-[180px] h-60" />
          <div className="w-full pt-10 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS: GO</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="mt-5 bg-nlw-gradient rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] pl-8 w-[1200px] h-28 rounded-lg mt-1 flex justify-between items-center">
          <div>
            <strong className="text-white text-2xl font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-[#A1A1AA] block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className=" bg-violet-500 hover:bg-violet-600 mr-8 px-4 py-3  text-white rounded-md flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
