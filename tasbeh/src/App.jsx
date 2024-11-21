import { useState } from "react";
import "./App.css";

import Button from "./components/button/index";

function App() {
  let [son, sona] = useState(0);
  let [packson, packs] = useState(0);
  let [sum, sumf] = useState(0);

  function pack() {
    if (son == 33) {
      sona((son = 1));
      packs(packson + 1);
    }
  }

  return (
    <div className="tasbeh">
      <div className="vrapper">
        <button
          className="button"
          onClick={() => {
            if (son < 33) {
              sona(son + 1);
            }

            sumf(sum+1)

            pack();
          }}
        >
          +
        </button>
        <p className="soni">{son}</p>
        <button
          className="button"
          onClick={() => {
            sona(son =0);
          }}
        >
          0
        </button>
        <p className="pack">{packson} don atoliq sanalgan tasbeh </p>
        <p className="sum">tasbeh toliq {sum} martta bosilgan</p>
      </div>
    </div>
  );
}

export default App;
