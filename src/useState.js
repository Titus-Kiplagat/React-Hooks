import React, { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("");
	const [count, setCount] = useState(0);
  //state including objects
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateCarColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
	};
	
	const handleDecrement = () => {
		setCount((previousCount) => previousCount - 1)
	}

	const handleIncrement = () => {
		setCount(previousCount => previousCount + 1)
	}

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")} type="button">
        change color
      </button>

      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={updateCarColor} type="button">
        update car color
			</button>
			
			<p>Increment and decrement</p>
      <div>
        <button onClick={handleDecrement} style={{fontSize: 50}}>-</button>
				<span style={{ marginLeft: 20, marginRight: 20 }}>{count}</span>
        <button onClick={handleIncrement} style={{fontSize: 50}}>+</button>
      </div>
    </>
  );
};

export default UseState;
