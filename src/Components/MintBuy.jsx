import React, { useState } from "react";

const MintBuy = () => {
  const [rangeValue, setRangeValue] = useState(100);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    console.log(rangeValue);
  };

  return (
    <div className="mintBuyCon">
      <h1>MINT</h1>
      <div className="inputCon">
        <div className="input">
          <p>Price per NFT</p>
          <div className="innerInput">
            <input
              type="text"
              value="0xFa71C31485Fa84e1881B7e75FFA22220E99E65A3"
              disabled
              className="address"
            />
            <input
              type="text"
              className="quantity"
              disabled
              placeholder={rangeValue}
            />
            <input
              type="range"
              name=""
              id=""
              className="range"
              min="0"
              max="100"
              value={rangeValue}
              onChange={handleRangeChange}
            />
            <button>MINT 1 NFT</button>
          </div>
        </div>
        <img src="member1.webp" alt="NFT image" />
      </div>
      <p className="my-10px">Amount:</p>
      <p className="my-10px">Total:</p>
    </div>
  );
};

export default MintBuy;
