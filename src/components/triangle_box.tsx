// triangle_box.tsx

// imports
import React from "react";
import Triangle from "./triangle";

const TrianglesBox = () => {
  return (
    <span>
      <Triangle
        animateParams={{ rotate: "-45deg", x: [0, -6, 0], y: [0, -6, 0] }}
        className="zelda-botw-triangle-up absolute left-0 top-0 -mx-1"
      />
      <Triangle
        animateParams={{ rotate: "45deg", x: [0, 6, 0], y: [0, -6, 0] }}
        className="zelda-botw-triangle-up absolute right-0 top-0 -mx-1"
      />
      <Triangle
        animateParams={{ rotate: "45deg", x: [0, -6, 0], y: [0, 6, 0] }}
        className="zelda-botw-triangle-down absolute left-0 bottom-0 -mx-1"
      />
      <Triangle
        animateParams={{ rotate: "-45deg", x: [0, 6, 0], y: [0, 6, 0] }}
        className="zelda-botw-triangle-down absolute right-0 bottom-0 -mx-1 z-10"
      />
    </span>
  )
};

export default TrianglesBox;
