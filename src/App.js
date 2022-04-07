import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [sliderVal, setSliderVal] = useState(50);
  const selector = useRef("");
  const ProgressBar = useRef("");

  const handleSlider = (e) => {
    console.log(e.target.value);

    setSliderVal(e.target.value);

    if (e.target.value <= 2) {
      selector.current.style.left = 2 + "%";
      ProgressBar.current.style.width = 2 + "%";
    } else if (e.target.value >= 98) {
      selector.current.style.left = 98 + "%";
      ProgressBar.current.style.width = 98 + "%";
    } else {
      selector.current.style.left = e.target.value + "%";
      ProgressBar.current.style.width = e.target.value + "%";
    }
  };

  return (
    <div className="App">
      <div className="main">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          id="slider-left"
          onChange={handleSlider}
        />
        <div ref={selector} id="selector">
          <div className="SelectBtn"></div>
          <div id="SelectValue">{sliderVal}</div>
        </div>
        <div ref={ProgressBar} id="ProgressBar"></div>
      </div>
    </div>
  );
}

export default App;
