export default function Header() {

  const NavButtonHandler = () => {
    console.log("a");
  }

  return (
    <div className="bg-mainImg bg-cover bg-center w-full h-1/2 flex flex-col justify-between">
      {/* top header */}
      <div className="flex flex-row justify-between text-white pt-4 px-14 text-4xl">
        <h1 className="text-center">붕어빵</h1>
        <button className="text-center" onClick={NavButtonHandler}>X</button>
      </div>

      {/* middle header */}
      <div className="flex flex-row justify-center text-black pt-4 px-14 text-8xl">
        <h1 className="text-center">붕어빵 소식</h1>
      </div>

      {/* bottom header */}
      <div className="flex flex-row justify-center text-white pt-4 px-14 text-4xl">
        <h1 className="text-center">붕어빵 소식</h1>
      </div>
    </div>
  );
}