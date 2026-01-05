import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-8 py-8 text-center">
      <div className="mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="light:hover:text-[#747bff] inline-block font-medium text-[#646cff] no-underline hover:text-[#535bf2]"
        >
          <img
            src={viteLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="light:hover:text-[#747bff] inline-block font-medium text-[#646cff] no-underline hover:text-[#535bf2] motion-safe:animate-[logo-spin_20s_linear_infinite]"
        >
          <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="mb-8 text-[3.2em] leading-tight font-normal">Vite + React</h1>
      <div className="p-8">
        <button
          onClick={() => setCount(count => count + 1)}
          className="light:bg-[#f9f9f9] cursor-pointer rounded-lg border border-transparent bg-[#1a1a1a] px-5 py-2.5 text-base font-medium transition-colors duration-250 hover:border-[#646cff] focus-visible:outline-4"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
