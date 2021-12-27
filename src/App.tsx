import { useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  const [xValue, setXValue] = useState<null | string>(null);
  const [yValue, setYValue] = useState(null);
  const [fValue, setFValue] = useState(null);
  const [moveValue, setMoveValue] = useState("");
  const [commands]: any[] = useState([]);

  const options: any[] = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];
  const handlePlaceClick = (x: any, y: any, f: any) => {
    if (!x || !y || !f) {
      return alert("Missing X, Y and/or F values");
    }
    commands.push([`PLACE (${x}, ${y}, ${f})`]);
    setXValue(null);
    setYValue(null);
    setFValue(null);
    return;
  };

  return (
    <div className="App">
      <div className="App-container">
        <p>Enter commands and click save</p>
        <div className="Place-container">
          <label>PLACE (</label>
          <Select
            className="Select-place"
            placeholder="X"
            options={options}
            value={xValue}
            onChange={setXValue}
          />
          <label>, </label>
          <Select
            className="Select-place"
            placeholder="Y"
            options={options}
            value={yValue}
            onChange={setYValue}
          />
          <label>, </label>
          <Select
            className="Select-place"
            placeholder="F"
            options={options}
            value={fValue}
            onChange={setFValue}
          />
          <label>)</label>
          <button onClick={() => handlePlaceClick(xValue, yValue, fValue)}>
            +
          </button>
        </div>
        <div>
          <label>MOVE</label>
          <button>+</button>
        </div>
        <div>
          <label>LEFT</label>
          <button>+</button>
        </div>
        <div>
          <label>RIGHT</label>
          <button>+</button>
        </div>
        <div>
          <label>REPORT</label>
          <button>+</button>
        </div>
        <div>
          <textarea readOnly value={commands} />
          <button>SAVE</button>
        </div>
        <div className="grid-container">
          <div className="grid-item">(0,4)</div>
          <div className="grid-item">(1,4)</div>
          <div className="grid-item">(2,4)</div>
          <div className="grid-item">(3,4)</div>
          <div className="grid-item">(4,4)</div>
          <div className="grid-item">(0,3)</div>
          <div className="grid-item">(1,3)</div>
          <div className="grid-item">(2,3)</div>
          <div className="grid-item">(3,3)</div>
          <div className="grid-item">(4,3)</div>
          <div className="grid-item">(0,2)</div>
          <div className="grid-item">(1,2)</div>
          <div className="grid-item">(2,2)</div>
          <div className="grid-item">(3,2)</div>
          <div className="grid-item">(4,2)</div>
          <div className="grid-item">(0,1)</div>
          <div className="grid-item">(1,1)</div>
          <div className="grid-item">(2,1)</div>
          <div className="grid-item">(3,1)</div>
          <div className="grid-item">(4,1)</div>
          <div className="grid-item">(0,0)</div>
          <div className="grid-item">(1,0)</div>
          <div className="grid-item">(2,0)</div>
          <div className="grid-item">(3,0)</div>
          <div className="grid-item">(4,0)</div>
        </div>
      </div>
    </div>
  );
}
export default App;
