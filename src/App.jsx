import "./styles.css";
import React, { useState } from "react";
//two lists on click move to toher direction
const intialLeft = ["HTML", "JS", "Typescript", "CSS"];
const intialRight = ["React", "Vue", "Angular", "Node"];

export default function App() {
  const [leftList, setLeftList] = useState(intialLeft);
  const [rightList, setRightList] = useState(intialRight);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const moveToRight = () => {
    setRightList([...rightList, ...selectedLeft]);
    setLeftList(leftList.filter((item) => !selectedLeft.includes(item)));
    setSelectedLeft([]);
  };
  const moveToLeft = () => {
    setLeftList([...leftList, ...selectedRight]);
    setRightList(rightList.filter((item) => !selectedRight.includes(item)));
    setSelectedRight([]);
  };

  const reset = () => {
    setLeftList(intialLeft);
    setRightList(intialRight);
    setSelectedLeft([]);
    setSelectedRight([]);
  };

  const renderList = (items, selected, setSelected) => (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => {
                setSelected((prev) =>
                  prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item]
                );
              }}
            />
            {item}
          </label>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="App" style={{ display: "flex", alignItems: "center" }}>
      {renderList(leftList, selectedLeft, setSelectedLeft)}
      <div
        style={{
          margin: "0 10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <button onClick={moveToRight}> &gt; </button>
        <button onClick={moveToLeft}> &lt;</button>
        <button onClick={reset}> Reset </button>
      </div>
      {renderList(rightList, selectedRight, setSelectedRight)}
    </div>
  );
}
