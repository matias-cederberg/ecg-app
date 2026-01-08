import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function Graph({ points }) {
  const processingRef = useRef();

  let xBaseline; 
  let yBaseline;

  let length;
  let segmentLength;

  // points = [
  //   { elevation: 0.0, amplitude: 0.0 },
  //   { elevation: 0.0, amplitude: 0.02 },
  //   { elevation: 0.0, amplitude: 0.0 },
  //   { elevation: 0.0, amplitude: 0.0 },

  //   { elevation: -0.1, amplitude: 0.0 },
  //   { elevation: 0.3, amplitude: 0.0 },
  //   { elevation: -0.2, amplitude: 0.0 },

  //   { elevation: 0.0, amplitude: 0.0 },
  //   { elevation: 0.0, amplitude: 0.06 },
  //   { elevation: 0.0, amplitude: 0.0 },
  //   { elevation: 0.0, amplitude: 0.0 },
  // ]

  const Sketch = p5i => {
    p5i.setup = () => {
      p5i.createCanvas(512, 512);

      length = p5i.width * 0.75;

      segmentLength = length / (points.length - 1);

      xBaseline = (p5i.width - length) * 0.5;
      yBaseline = p5i.height * 0.5;
    };

    p5i.draw = () => {
      p5i.background(230, 230, 255);

      p5i.noFill();
      p5i.strokeWeight(5);
      p5i.stroke(1);

      for (let i = 0; i < points.length - 1; i++) {
        drawCurvedLine(p5i, i)
      };
    };
  };

  const drawCurvedLine = (p5i, i) => {
    let x = xBaseline + segmentLength * i;
    let y = yBaseline - p5i.height * points[i].elevation;

    let xControl = x;
    let yControl = y;
    if (points[i].amplitude > 0)
      {
        xControl = xBaseline + ((segmentLength * i) + segmentLength * 0.5);
        yControl = yBaseline - p5i.height * points[i].amplitude;
      };

    let x2 = xBaseline + segmentLength * (i + 1)
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