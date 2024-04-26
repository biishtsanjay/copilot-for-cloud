"use client";
import React from "react";

const IFrame = ({ src }) => {
  return (
    <div>
      <iframe
        src={src}
        sandbox="allow-scripts allow-same-origin"
        width="100%"
        height="400"
      ></iframe>
    </div>
  );
};

export default IFrame;
