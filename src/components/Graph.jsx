import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Graph = () => {
  const processingRef = useRef();
  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(600, 400);
    };

    p.draw = () => {
      p.background(135, 206, 235);
    };
     };
   useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    return newp5.remove;
    }, [])

  return <div ref={processingRef} />;
};

export default Graph;