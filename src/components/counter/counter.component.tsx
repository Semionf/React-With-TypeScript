import React from "react";
import { ICounterProps } from "../../interfaces/props/counter.props";

import "./style.scss";
export const CounterComponent = ({ init, className }: ICounterProps) => {
  return (
    <div className={"counter-container " + { className }}>
      <h1>Counter</h1>
      <p>
        Current count: <strong>{init}</strong>
      </p>
    </div>
  );
};
