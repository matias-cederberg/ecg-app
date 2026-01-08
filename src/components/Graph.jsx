import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function Graph({ points }) {
  const processingRef = useRef();

  let xBaseline; 
  let yBaseline;

  let length;
  let segmentLength;
  let iterationLength;

  let animProgress = 0; // keep 0 for builds
  let speed = 0.006;

  let repeats = 3;
  let dataLength;

  const Sketch = p5i => {
    p5i.setup = () => {
      p5i.createCanvas(512, 512);

      length = p5i.width * 0.9;

      dataLength = points.length * repeats;

      iterationLength = length / repeats;

      segmentLength = length / (dataLength - repeats);

      xBaseline = (p5i.width - length) * 0.5;
      yBaseline = p5i.height * 0.5;
    };

    p5i.draw = () => {
      p5i.background(230, 230, 255);



      for (let iteration = 0; iteration < repeats; iteration++)
      {
        p5i.noFill();
        p5i.strokeWeight(5);
        p5i.stroke(1);

        for (let i = 0; i < points.length - 1; i++) {
          drawCurvedLine(p5i, i, iteration)
        };
      }

      p5i.noStroke();
      p5i.fill(230, 230, 255);
      p5i.rect(0 + p5i.width * animProgress, 0, p5i.width, p5i.height);

      animProgress += speed;
      if (animProgress > 1) animProgress = 0;
    };
  };

  const drawCurvedLine = (p5i, i, iteration) => {
    let x = xBaseline + segmentLength * i + iterationLength * iteration;
    let y = yBaseline - p5i.height * points[i].elevation;

    let xControl = x;
    let yControl = y;
    if (points[i].amplitude > 0)
      {
        xControl = xBaseline + ((segmentLength * i) + segmentLength * 0.5) + iterationLength * iteration;
        yControl = yBaseline - p5i.height * points[i].amplitude;
      };

    let x2 = xBaseline + segmentLength * (i + 1) + iterationLength * iteration
    let y2 = yBaseline - p5i.height * points[i + 1].elevation;
    
    p5i.bezier(x, y, xControl, yControl, xControl, yControl, x2, y2);
  }

  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    return () => newp5.remove();
  }, [])

  return <div ref={processingRef} />;
};

//export default Graph;