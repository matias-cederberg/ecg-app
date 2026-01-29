import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function Graph({ points }) {
  const processingRef = useRef();

  const lineColor = '#7fe48c';
  const bgColor = '#202129'

  let xBaseline; 
  let yBaseline;

  let length;
  let segmentLength;
  let iterationLength;

  let animProgress = 0; // keep 0 for builds
  let speed = 0.004;
  const dividerWidthRatio = 0.1;
  let dividerWidth;

  let repeats;
  let dataLength;

  const Sketch = p5i => {
    p5i.setup = () => {

      let canvasWidth = Math.min(p5i.windowWidth * 0.9, 960);
      let canvasHeight = Math.min(p5i.windowWidth * 0.6, 512);

      repeats = p5i.windowWidth > 700 ? 6 : 4;

      p5i.createCanvas(canvasWidth, canvasHeight);

      length = p5i.width * 1;

      dataLength = points.length * repeats;

      iterationLength = length / repeats;

      segmentLength = length / (dataLength - repeats);

      dividerWidth = p5i.width * dividerWidthRatio;

      xBaseline = (p5i.width - length) * 0.5;
      yBaseline = p5i.height * 0.5 + 16;

      p5i.background(bgColor);
    };

    p5i.draw = () => {
      p5i.background(bgColor);

      for (let iteration = 0; iteration < repeats; iteration++)
      {
        p5i.noFill();
        p5i.strokeWeight(4);
        p5i.stroke(lineColor);

        for (let i = 0; i < points.length - 1; i++) {
          drawCurvedLine(p5i, i, iteration)
        };
      }

      p5i.noStroke();
      p5i.fill(bgColor);

      drawDivider(p5i, animProgress);

      animProgress += speed;
      if (animProgress > 1) animProgress = 0;
    };

    p5i.windowResized = () => {
      p5i.setup();
    };
  };

  const drawDivider = (p5i, animProgress) => {
    const leftEdge = -dividerWidth;
    const dividerAnimWidth = p5i.width + dividerWidth * 2;
    p5i.rect(leftEdge + dividerAnimWidth * animProgress, 0, dividerWidth, p5i.height);
  }

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