import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function Graph({ data }) {
  const processingRef = useRef();

  const lineColor = '#7fe48c';
  const bgColor = '#202129'

  let strokeWeight;

  let startPoint = {x: 0, y: 0};
  let cursor = {x: 0, y: 0};

  let graphLength;
  let graphHeight;

  let lastFrame = Date.now();
  let interval = setInterval(tick, 0);
  let deltaTime = 0;
  let animProgress = 0; // keep 0 for builds
  let speed = 0.3;

  const dividerWidthRatio = 0.1;
  let dividerWidth;

  let repeats;
  let dataLength;

  const Sketch = p5i => {
    p5i.setup = () => {

      let canvasWidth = Math.min(p5i.windowWidth * 0.95, 1080);
      let canvasHeight = Math.min(p5i.windowWidth * 0.6, 412);

      repeats = 8;
      strokeWeight = p5i.windowWidth > 700 ? 4 : 3;

      p5i.createCanvas(canvasWidth, canvasHeight);

      graphLength = canvasHeight / 2;
      graphHeight = canvasHeight / 2;

      dividerWidth = p5i.width * dividerWidthRatio;

      startPoint = {x: (canvasWidth / 2) - graphLength * 3.35, y: canvasHeight / 1.5};

      p5i.draw();
    };

    p5i.draw = () => {
      p5i.background(bgColor);

      for (let iteration = 0; iteration < repeats; iteration++)
      {
        p5i.noFill();
        p5i.strokeWeight(strokeWeight);
        p5i.stroke(lineColor);

        cursor.x = startPoint.x + iteration * graphLength;
        cursor.y = startPoint.y;

        for (let i = 0; i < data.points.length; i++) {
          drawCurvedLine(p5i, i, cursor, iteration);
        };
      };

      p5i.noStroke();
      p5i.fill(bgColor);

      drawDivider(p5i);

      p5i.rectMode(p5i.CENTER);
      p5i.textAlign(p5i.CENTER);
      p5i.textSize(18);
      p5i.fill(lineColor);
      
      let s = `HR: ${data.heartRate}`;
      p5i.text(s, p5i.width / 2, p5i.height - 12, 200, 40);
    };

    p5i.windowResized = () => {
      p5i.setup();
    };
  };

  const drawDivider = (p5i) => {
    animProgress += speed * deltaTime;
    if (animProgress > p5i.width) animProgress = 0;

    const leftEdge = -dividerWidth;
    const dividerAnimWidth = p5i.width + dividerWidth * 2;
    
    p5i.rectMode(p5i.CORNER);
    p5i.rect(animProgress, 0, dividerWidth, p5i.height);
  };

  const drawCurvedLine = (p5i, i, cursor, iteration) => {
    let x = cursor.x;
    
    let y = cursor.y;

    let x2 = x + data.points[i].duration * graphLength;
    let y2 = startPoint.y - data.points[i].elevation * graphHeight;

    let controlPoint = {x: x, y: y}
    if (data.points[i].amplitude > 0)
    {
      x, y -= .3;
      x2, y2 -= .3;
      controlPoint.x = x + (data.points[i].duration * graphLength) / 2;
      controlPoint.y = startPoint.y - data.points[i].amplitude * graphHeight;
    };

    cursor.x = x2;
    cursor.y = y2;
    
    p5i.bezier(x, y, controlPoint.x, controlPoint.y, controlPoint.x, controlPoint.y, x2, y2);

    if (i == data.points.length - 1) {
      p5i.line(x2, y2, startPoint.x + graphLength * (iteration + 1), y2);
    }
  };

  function tick() {
    let now = Date.now();
    deltaTime = now - lastFrame;
    lastFrame = now;
  }

  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    return () => newp5.remove();
  }, [])

  return <div ref={processingRef} />;
};

//export default Graph;