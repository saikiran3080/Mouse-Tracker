import React, { useState, useEffect } from "react";

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ X: 0, Y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ X: event.clientX, Y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    console.log("Mouse move listener added");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("Mouse move lsitener removed");
    };
  }, []);

  return (
    <>
      <h1>Mouse Position</h1>
      <p>
        X:{mousePosition.X} , Y: {mousePosition.Y}
      </p>
    </>
  );
}

export default MouseTracker;
