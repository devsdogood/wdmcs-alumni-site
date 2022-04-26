interface AnimatedProgressBarProps {
  width: number;
  from: number;
  to: number;
}

import React, { useEffect, useState } from "react";

export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = (
  props
) => {
  const [value, setValue] = React.useState(props.from);

  React.useEffect(() => {
    setValue(props.to * props.width);
  });

  return (
    <div
      style={{ width: props.width, height: "50px" }}
      className="rounded-md bg-slate-100"
    >
      <div
        className="delay-1000 duration-[4000ms] rounded-md text-3xl font-extrabold bg-orange-500"
        style={{ width: `${value}px`, height: "50px" }}
      >
        <span className="inline-block align-middle">{props.to * 100}%</span>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
