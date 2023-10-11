import React, { useState, useEffect, useRef } from "react";

import moon from "../../assets/moon.png"
import sun from "../../assets/sun.png"

import "./calculator.css";


const Calculator = () => {
  const resultRef = useRef();
  const [isdarkMode, setDarkMode] = useState(false);
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  const handleOnChange = (e) => {
    if (/^[\d+\-*%/.(){}\s]+$/.test(e.target.value)) setResult(e.target.value);
  };
  const handelOnClick = (event) => {
    event.preventDefault();
    if (event.target.value === "clear") {
      setResult("");
      setAnswer("");
    } else if (event.target.value === "=") {
      let p = eval(result);
      setAnswer(p);
      console.log(p);
    } else if (/^[\d+\-*%/.(){}\s]+$/.test(event.target.value)) {
      setResult(result + event.target.value);
      console.log(result + event.target.value);
    }
  };

  return (
    <>
      <div className="app" dark-theme={isdarkMode ? "dark" : ""}>
        <div className="app_calculator">
          <div className="app_calculator_navbar">
            <div
              className="app_calculator_navbar_toggle"
              onClick={() => setDarkMode(!isdarkMode)}
            >
              <div
                className={`app_calculator_navbar_toggle_circle ${
                  isdarkMode ? "app_calculator_navbar_toggle_circle_active" : ""
                }`}
              />
            </div>
            <img src={isdarkMode ? moon : sun} alt="Dark mon" />
          </div>

          <div className="header">
            <input
              type="text"
              ref={resultRef}
              className="result"
              onChange={handleOnChange}
              value={result}
            />
            <br />
            <div className="answer">{answer}</div>
          </div>

          <div className="keypad">
            <input
              className="btn"
              type="button"
              value="7"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="8"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="9"
              onClick={handelOnClick}
            />

            <input
              className="btn"
              type="button"
              value="clear"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="4"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="5"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="6"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="/"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="1"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="2"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="3"
              onClick={handelOnClick}
            />

            <input
              className="btn"
              type="button"
              value="*"
              onClick={handelOnClick}
            />
            <input
              className="btn zero"
              type="button"
              value="0"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="."
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="+"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="-"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="("
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value=")"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="%"
              onClick={handelOnClick}
            />
            <input
              className="btn"
              type="button"
              value="="
              onClick={handelOnClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
