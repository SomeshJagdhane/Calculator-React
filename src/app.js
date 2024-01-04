import { useState } from "react";

const keyValues = [
  7,
  8,
  9,
  " * ",
  4,
  5,
  6,
  " / ",
  1,
  2,
  3,
  " - ",
  0,
  ".",
  " = ",
  " + ",
];

function Button({ buttonValue, text, setText }) {
  function controlKey() {
    let newText = null;
    try {
      if (buttonValue === ` = `) {
        newText = eval(text);
      } else newText = text + buttonValue;

      setText(newText);
    } catch (error) {
      alert("Please enter valid input");
    }
  }
  return (
    <button className="key" onClick={(e) => controlKey()}>
      {buttonValue}
    </button>
  );
}

function Keypad({ text, setText }) {
  const buttons = [];
  keyValues.forEach((buttonValue) => {
    buttons.push(
      <Button
        key={buttonValue}
        buttonValue={buttonValue}
        text={text}
        setText={setText}
      />
    );
  });
  return <div className="keypad">{buttons}</div>;
}

function Display({ text, setText }) {
  function controlInput(inputText) {
    const validInputs = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "+",
      "-",
      "*",
      "/",
      "=",
      ".",
      " ",
      "(",
      ")",
    ];

    const lastChar = inputText[inputText.length - 1];
    if (validInputs.includes(lastChar)) setText(inputText);
    else setText(inputText.substring(0, inputText.length - 1));
  }
  return (
    <input
      className="display"
      type="text"
      value={text}
      onChange={(e) => controlInput(e.target.value)}
    ></input>
  );
}

function Calculator() {
  const [text, setText] = useState("");

  return (
    <div className="calculator">
      <Display text={text} setText={setText} />
      <Keypad text={text} setText={setText} />
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h2>Calculator</h2>
      <Calculator />
    </div>
  );
}
