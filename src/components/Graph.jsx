import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function Graph({ data }) {
  const processingRef = useRef();

  const lineColor = '#7fe48c';
  const bgColor = '#202129'

  let strokeWeight;

  let startPoint = {};
  let cursor = {};
  let graph = {};
  let canvas;

  // scrolling
  let prevMouseX = 0;
  let scrollAmount = 0;
  let isScrollEnabled = false;

  // divider animation
  let animProgress = 0; // keep 0 for builds
  let speed;

  const dividerWidthRatio = 0.1;
  let dividerWidth;
  let dividerStart;
  let dividerEnd;

  let repeats;


  const Sketch = p5i => {
    p5i.setup = () => {

      // canvas scaling calculations for different window sizes
      let canvasWidth = Math.min(p5i.windowWidth * 0.95, 1580);
      let canvasHeight = Math.min(p5i.windowWidth * 0.6, 412);

      repeats = 8;
      strokeWeight = p5i.windowWidth > 700 ? 4 : 3;

      canvas = p5i.createCanvas(canvasWidth, canvasHeight);

      graph.w = canvasHeight / 1.5;
      graph.h = canvasHeight / 2;

      let heartRateRatio = 60 / data.heartRate
      graph.w *= heartRateRatio;

      startPoint = {
        x: (canvasWidth / 2 + scrollAmount) - graph.w * 3.35,
        y: canvasHeight / 1.5
      };

      if (Math.abs(scrollAmount) > graph.w) {
        scrollAmount -= graph.w * Math.sign(scrollAmount);
      };

      //startPoint.x += scrollAmount;

      canvas.mouseOver(() => isScrollEnabled = true);
      canvas.mouseOut(() => isScrollEnabled = false);

      // divider animation
      dividerStart = -graph.w;
      let mult = p5i.windowWidth > 700 ? 5 : 3;

      dividerEnd = graph.w * mult;

      p5i.frameRate(60);
      speed = 0.001 * graph.w * (data.heartRate / 60);
      animProgress = dividerStart;

      dividerWidth = p5i.width * dividerWidthRatio;

      // initial draw to prevent flicker on resize
      p5i.draw();
    };


    p5i.draw = () => {
      p5i.background(bgColor);

      p5i.cursor('grab');
      if (p5i.mouseIsPressed) p5i.cursor('grabbing');

      for (let iteration = 0; iteration < repeats; iteration++)
      {
        p5i.noFill();
        p5i.strokeWeight(strokeWeight);
        p5i.stroke(lineColor);

        cursor.x = startPoint.x + iteration * graph.w;
        cursor.y = startPoint.y;

        for (let i = 0; i < data.points.length; i++) {
          drawCurvedLine(p5i, i, cursor, iteration);
        };
      };

      drawDivider(p5i);

      p5i.rectMode(p5i.CENTER);
      p5i.textAlign(p5i.CENTER);
      p5i.textSize(18);
      p5i.fill(lineColor);
      
      let s = `HR: ${Math.floor(data.heartRate)}`;
      p5i.text(s, p5i.width / 2, p5i.height - 12, 200, 40);
    };


    p5i.mouseDragged = () => {
      if (!isScrollEnabled) return false;

      scrollAmount += p5i.mouseX - prevMouseX;
      prevMouseX += p5i.mouseX - prevMouseX;
      
      p5i.setup();

      // prevent default behavior
      return false;
    }

    p5i.touchMoved = () => {
      if (!isScrollEnabled) return false;

      scrollAmount += p5i.mouseX - prevMouseX;
      prevMouseX += p5i.mouseX - prevMouseX;
      
      p5i.setup();

      // prevent default behavior
      return false;
    }

    p5i.mousePressed = () => {
      prevMouseX = p5i.mouseX;
    }

    p5i.windowResized = () => {
      p5i.setup();
    };
  };


  const drawDivider = (p5i) => {
    p5i.noStroke();
    p5i.fill(bgColor);

    animProgress += speed * p5i.deltaTime;
    if (animProgress > dividerEnd) animProgress = dividerStart;

    const leftEdge = -dividerWidth;
    const dividerAnimWidth = p5i.width + dividerWidth * 2;
    
    p5i.rectMode(p5i.CORNER);
    p5i.rect(animProgress, 0, dividerWidth, p5i.height);
  };


  const drawCurvedLine = (p5i, i, cursor, iteration) => {

    let {x, y} = cursor;
    let {amplitude, duration, elevation} = data.points[i]

    let x2 = x + duration * graph.w;
    let y2 = startPoint.y - elevation * graph.h;

    let controlPoint = {x: x, y: y}

    if (amplitude > 0)
    {
      // shift endpoints to make line look smoother
      x, y -= .3;
      x2, y2 -= .3;
      controlPoint.x = x + (duration * graph.w) / 2;
      controlPoint.y = startPoint.y - amplitude * graph.h;
    };

    cursor.x = x2;
    cursor.y = y2;
    
    p5i.bezier(x, y, controlPoint.x, controlPoint.y, controlPoint.x, controlPoint.y, x2, y2);

    if (i == data.points.length - 1) {
      p5i.line(x2, y2, startPoint.x + graph.w * (iteration + 1), y2);
    }
  };


  useEffect(() => {
    const newp5 = new p5(Sketch, processingRef.current);
    return () => newp5.remove();
  }, [])

  return <div ref={processingRef} />;
};

//export default Graph;