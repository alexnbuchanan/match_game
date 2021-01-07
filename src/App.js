import React, { useState, useEffect } from "react";
import "./App.css";

function Box({ index, styleColor, updateStatus, currentStatus }) {
  return (
    <div className="flip-container">
      <div
        className={`flipper ${currentStatus ? "flipped" : ""}`}
        onClick={() => {
          updateStatus(index);
        }}
      >
        <div className="front"></div>

        <div className="back">{styleColor}</div>
      </div>
    </div>
  );
}

function Reset({ newColors, colors, thing }) {
  return (
    <button
      className="Reset"
      type="button"
      onClick={() => newColors(colors, thing)}
    >
      Reset
    </button>
  );
}

function App() {
  const [status, setStatus] = useState([
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false },
    { clicked: false }
  ]);

  const [color, setColor] = useState([
    <img className="picture" src="/images/black_panther.jpg" />,
    <img className="picture" src="/images/black_panther.jpg" />,
    <img className="picture" src="/images/bobcat.jpg" />,
    <img className="picture" src="/images/bobcat.jpg" />,
    <img className="picture" src="/images/cheetah.jpg" />,
    <img className="picture" src="/images/cheetah.jpg" />,
    <img className="picture" src="/images/jaguar.jpg" />,
    <img className="picture" src="/images/jaguar.jpg" />,
    <img className="picture" src="/images/lion.jpg" />,
    <img className="picture" src="/images/lion.jpg" />,
    <img className="picture" src="/images/snow_leopard.jpg" />,
    <img className="picture" src="/images/snow_leopard.jpg" />,
    <img className="picture" src="/images/tiger.jpg" />,
    <img className="picture" src="/images/tiger.jpg" />,
    <img className="picture" src="/images/wild_cat.jpg" />,
    <img className="picture" src="/images/wild_cat.jpg" />,
  ]);

  const [holder, setHolder] = useState([]);

  const [lockBoard, setLockBoard] = useState(false); /* lock board */

  const [guess, setGuess] = useState(0);

  useEffect(() => {
    resetColor(color, status);
  }, []);

  function delayedResolve(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  async function updateStatus(index) {
    if (lockBoard) return; /* lock board */
    if (!status[index].clicked) {
      const newStatus = [...status];
      newStatus[index].clicked = true;

      let newHolder = [...holder, { index, color: color[index].props.src }];

      setStatus(newStatus);

      if (newHolder.length === 2) {
        const newGuess = guess + 1;
        setGuess(newGuess);
        setLockBoard(true); /* lock board */
        if (!holderTest(newHolder)) {
          await delayedResolve(1500);
          newHolder.map((x) => {
            newStatus[x.index].clicked = false;
          });
        }
        newHolder = [];
      }
      setLockBoard(false);
      setHolder(newHolder);
    }
  }

  /*
  console.log(holder.length);
  console.log(holder);
  console.log(status);

     function misMatch(newHolder){
      return (newHolder.map((x) => {
        newStatus[x.index].clicked = false;
      }))
    } */

  function holderTest(holderToTest) {
    if (holderToTest[0].color === holderToTest[1].color) {
      return true;
    }
  }

  function resetColor(array, array2) {
    setGuess(0);
    const newColors = [...array];
    const newArray = [...array2];

    for (var i = newColors.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newColors[i];
      newColors[i] = newColors[j];
      newColors[j] = temp;
    }

    newArray.map((x) => {
      x.clicked = false;
    });

    return setColor(newColors), setStatus(newArray);
  }

  return (
    <div className="Container">
      <div>
        <div className="Tools">
          <p className="Moves">Moves: {guess}</p>
          <Reset newColors={resetColor} colors={color} thing={status} />
        </div>

        <div className="Grid">
          <div className="column">
            <Box
              index={0}
              styleColor={color[0]}
              updateStatus={updateStatus}
              currentStatus={status[0].clicked}
            />
            <Box
              index={1}
              styleColor={color[1]}
              updateStatus={updateStatus}
              currentStatus={status[1].clicked}
            />
            <Box
              index={2}
              styleColor={color[2]}
              updateStatus={updateStatus}
              currentStatus={status[2].clicked}
            />
            <Box
              index={3}
              styleColor={color[3]}
              updateStatus={updateStatus}
              currentStatus={status[3].clicked}
            />
          </div>
          <div className="column">
            <Box
              index={4}
              styleColor={color[4]}
              updateStatus={updateStatus}
              currentStatus={status[4].clicked}
            />
            <Box
              index={5}
              styleColor={color[5]}
              updateStatus={updateStatus}
              currentStatus={status[5].clicked}
            />
            <Box
              index={6}
              styleColor={color[6]}
              updateStatus={updateStatus}
              currentStatus={status[6].clicked}
            />
            <Box
              index={7}
              styleColor={color[7]}
              updateStatus={updateStatus}
              currentStatus={status[7].clicked}
            />
          </div>
          <div className="column">
            <Box
              index={8}
              styleColor={color[8]}
              updateStatus={updateStatus}
              currentStatus={status[8].clicked}
            />
            <Box
              index={9}
              styleColor={color[9]}
              updateStatus={updateStatus}
              currentStatus={status[9].clicked}
            />
            <Box
              index={10}
              styleColor={color[10]}
              updateStatus={updateStatus}
              currentStatus={status[10].clicked}
            />
            <Box
              index={11}
              styleColor={color[11]}
              updateStatus={updateStatus}
              currentStatus={status[11].clicked}
            />
          </div>
          <div className="column">
            <Box
              index={12}
              styleColor={color[12]}
              updateStatus={updateStatus}
              currentStatus={status[12].clicked}
            />
            <Box
              index={13}
              styleColor={color[13]}
              updateStatus={updateStatus}
              currentStatus={status[13].clicked}
            />
            <Box
              index={14}
              styleColor={color[14]}
              updateStatus={updateStatus}
              currentStatus={status[14].clicked}
            />
            <Box
              index={15}
              styleColor={color[15]}
              updateStatus={updateStatus}
              currentStatus={status[15].clicked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
