import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>

      <div className="h-screen ">
      <div className="button-container p-10 flex justify-between items-center flex-wrap pt-96">
        <button
          className="py-1.5 px-4 rounded-2xl bg-blue-500 text-white outline-none"
          onClick={() => setColor("	#89CFF0")}
        >
          Blue
        </button>
        <button
          className="py-1.5 px-4 rounded-2xl bg-pink-500 text-white"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="py-1.5 px-4 rounded-2xl bg-orange-500 text-white"
          onClick={() => setColor("	#FFAA33")}
        >
          Orange
        </button>
        <button
          className="py-1.5 px-4 rounded-2xl bg-black text-white"
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
      <div className="flex justify-center"><button
        className="py-1.5 px-4 rounded-2xl bg-green-900 text-white"
        onClick={() => setColor("olive")}
      >
        Default
      </button></div>
      </div>

    </div>
  );
}

export default App;
