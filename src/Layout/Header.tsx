import { invoke } from "@tauri-apps/api";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const NavButtonHandler = async () => {
    invoke("greet", { name: "World" }).then((response) =>
      console.log(response)
    );
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-headerImg bg-cover bg-center w-full h-[55%] flex flex-col justify-between">
      {isOpen && (
        <div className="fixed inset-0 z-1 bg-black opacity-80">
          <div className="flex flex-row justify-center items-center h-full">
            <div className="flex flex-col items-center p-4 text-white text-xl">
              <h2 className="text-yellow-100 text-3xl mb-4">붕어빵 플레이리스트</h2>
              <hr className="w-56 border-yellow-100 mb-6" />
              <p className="mb-2">붕어빵 플레이리스트</p>
              <p className="mb-2">플레이리스트 추천</p>
            </div>
            <div className="flex flex-col items-center p-4 text-white text-xl">
              <h2 className="text-yellow-100 text-3xl mb-4">붕어빵 이야기</h2>
              <hr className="w-56 border-yellow-100 mb-6" />
              <p className="mb-2">붕어빵 이야기</p>
              <p className="mb-2">메뉴 이야기</p>
            </div>
            <div className="flex flex-col items-center p-4 text-white text-xl">
              <h2 className="text-yellow-100 text-3xl mb-4">붕어빵 이야기</h2>
              <hr className="w-56 border-yellow-100 mb-6" />
              <p className="mb-2">붕어빵 이야기</p>
              <p className="mb-2">메뉴 이야기</p>
            </div>
            <div className="flex flex-col items-center p-4 text-white text-xl">
              <h2 className="text-yellow-100 text-3xl mb-4">붕어빵 이야기</h2>
              <hr className="w-56 border-yellow-100 mb-6" />
              <p className="mb-2">붕어빵 이야기</p>
              <p className="mb-2">메뉴 이야기</p>
            </div>
            <div className="flex flex-col items-center p-4 text-white text-xl">
              <h2 className="text-yellow-100 text-3xl mb-4">붕어빵 이야기</h2>
              <hr className="w-56 border-yellow-100 mb-6" />
              <p className="mb-2">붕어빵 이야기</p>
              <p className="mb-2">메뉴 이야기</p>
            </div>
          </div>
        </div>
      )}
      {/* top header */}
      <div className="flex flex-row justify-between text-white pt-4 px-14 text-4xl">
        <h1 className="text-center">붕어빵</h1>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* middle header */}
      <div className="flex flex-row justify-center text-black px-14 text-8xl">
        <h1 className="text-center">붕어빵 소식</h1>
      </div>

      {/* bottom header */}
      <div className="flex flex-row justify-start pl-64 text-4xl text-black w-full h-14">
        <button className="bg-neutral-400 text-white w-1/12">1</button>
        <button className="bg-white w-1/3">
          <select className="w-full h-full text-xl p-2">
            <option>슈크림 붕어빵</option>
            <option>팥 붕어빵</option>
            <option>김치 붕어빵</option>
            <option>고구마 붕어빵</option>
          </select>
        </button>
        <button className="bg-black  w-1/3">
          <select className="bg-neutral-800 text-white w-full h-full text-xl p-2">
            <option>서현점</option>
            <option>수원점</option>
            <option>남부터미널점</option>
            <option>강름점</option>
          </select>
        </button>
        <div className="bg-white w-full" />
      </div>
    </div>
  );
}
