import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Stock = () => {
  const { symbol, name, price } = useParams();

  console.log(symbol, name, price);

  return (
    <>
      <h1>{name}Info</h1>
      <p>{symbol} Symbol</p>
      <p>{price}Price</p>
      <p>Change</p>
    </>
  );
};

export default Stock;
