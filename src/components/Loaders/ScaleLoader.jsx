import React from "react";
import { ScaleLoader } from "react-spinners";

const ScaleLoader = () => {
  return (
    <>
      <ScaleLoader
        color="#8a2be2"
        cssOverride={{}}
        height={50}
        loading
        margin={3}
        radius={6}
        speedMultiplier={1}
        width={11}
      />
    </>
  );
};

export default ScaleLoader;
