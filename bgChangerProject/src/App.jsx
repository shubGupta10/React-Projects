import { useState } from "react";

function App() {
  let [color, setColor] = useState("Black");

  return (
    <div>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-white text-center font-bold text-3xl p-4 ">
          Playing With Colors
        </h1>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full  text-white"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full  text-white"
              style={{ backgroundColor: "blue" }}
            >
              BLUE
            </button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full  text-white"
              style={{ backgroundColor: "olive" }}
            >
              OLIVE
            </button>

            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4 py-1 rounded-full   text-white"
              style={{ backgroundColor: "grey" }}
            >
              GREY
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full  text-white"
              style={{ backgroundColor: "purple" }}
            >
              PURPLE
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full  "
              style={{ backgroundColor: "yellow" }}
            >
              YELLOW
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full   text-white"
              style={{ backgroundColor: "black" }}
            >
              BLACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
