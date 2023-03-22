import React from "react";
import { useSelector } from "react-redux";
const Show = () => {
  const number = useSelector((state) => state.numb.number);
  
  return <div>{number}</div>;
};

export default Show;
