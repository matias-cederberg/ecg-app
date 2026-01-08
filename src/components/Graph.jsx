import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Graph = () => {
  const processingRef = useRef();

  let xBaseline; 
  let yBaseline;

  let length;
  let segmentLength;

  let points = [
    0.1,
    0.2,
    -0.1,
    0.1,
    0.1,
    -0.3,
    0.3,
    0.0,
  ];

  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(512, 512);

      length = p.width * 0.75;

      segmentLength = length / (points.length - 1);

      xBaseline = (p.width - length) * 0.5;
      yBaseline = p.height * 0.5;
    };

    p.draw = () => {
      p.background(230, 230, 255);

      p.strokeWeight(5)
      for (let i = 0; i < points.length - 1; i++) {
        let x2 = xBaseline + segmentLength * (i + 1)
        let y2 = yBaseline + p.height * points[i + 1];
        p.line(xBaseline + segmentLength * i, yBaseline + p.height * points[i], x2, y2);
      }
    };
  };

  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    return () => newp5.remove();
  }, [])

  return <div ref={processingRef} />;
};

export default Graph;