import { invoke } from "@tauri-apps/api";

export default function Header() {
  const NavButtonHandler = async () => {
    invoke("greet", { name: "World" }).then((response) =>
      console.log(response)
    );
  };

  return (
    <div className="bg-mainImg bg-cover bg-center w-full h-[55%] flex flex-col justify-between">
      {/* top header */}
      <div className="flex flex-row justify-between text-white pt-4 px-14 text-4xl">
        <h1 className="text-center">붕어빵</h1>
        <button className="text-center" onClick={NavButtonHandler}>
          X
        </button>
      </div>

      {/* middle header */}
      <div className="flex flex-row justify-center text-black px-14 text-8xl">
        <h1 className="text-center">붕어빵 소식</h1>
      </div>

      {/* bottom header */}
      <div className="flex flex-row justify-start pl-64 text-4xl text-black w-full h-14">
        <button className="bg-white border-solid border-2 border-black w-1/12">
          1
        </button>
        <button className="bg-white border-solid border-2 border-black w-1/3">
          <select className="w-full h-full text-xl p-2">
            <option>슈크림 붕어빵</option>
            <option>팥 붕어빵</option>
            <option>김치 붕어빵</option>
            <option>고구마 붕어빵</option>
          </select>
        </button>
        <button className="bg-white border-solid border-2 border-black w-1/3">
          <select className="w-full h-full text-xl p-2">
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
