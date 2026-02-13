import { useState } from 'react';
import { ecgList } from './data.js';
import Graph from './Graph.jsx';

export default function Gallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [ecgIndex, setEcgIndex] = useState(0);
  const [seed, setSeed] = useState(1);

  const resetGraph = () => {
    setSeed(Math.random());
  };

  const hasNext = ecgIndex < ecgList.length - 1;
  const hasPrevious = ecgIndex > 0;

  function handleNextEcgClick() {
    resetGraph();

    let target;
    target = hasNext ? ecgIndex + 1 : 0;
    setEcgIndex(target);
  }

  function handlePreviousEcgClick() {
    resetGraph();

    let target;
    target = hasPrevious ? ecgIndex - 1 : ecgList.length - 1;
    setEcgIndex(target);
  }

  function handleNextPageClick() {
    resetGraph();

    setPageIndex(1);
  }

  function handlePreviousPageClick() {
    resetGraph();

    setPageIndex(0);
  }

  let ecg = ecgList[ecgIndex];

  if ("points" in ecg.pages[pageIndex]) {
    return (
      <>
        <h1>
          {ecg.name}
        </h1>

        <div class="graphDiv">
          <Graph data={ecg.pages[pageIndex]} key={seed} client:only="react" />
        </div>

        <p/>

        <div class="horizontalContainer">
          <button onClick={handlePreviousPageClick} class="button">
            <span class="material-symbols-rounded">article</span>
          </button>
          <button onClick={handleNextPageClick} class="button">
            <span class="material-symbols-rounded">bid_landscape</span>
          </button>
        </div>

        <p/>

        <div class="horizontalContainer">
          <button onClick={handlePreviousEcgClick} class="button">
            <span class="material-symbols-rounded">arrow_left_alt</span>
          </button>
          <h3>
            Rytmi {ecgIndex + 1} / {ecgList.length}
          </h3>
          <button onClick={handleNextEcgClick} class="button">
            <span class="material-symbols-rounded">arrow_right_alt</span>
          </button>
        </div>
      </>
    );
  } 
  else {
    return (
      <>
        <h1>
          {ecg.name}
        </h1>

        <p>{ecg.pages[pageIndex].description}</p>

        <p/>

        <div class="horizontalContainer">
          <button onClick={handlePreviousPageClick} class="button">
            <span class="material-symbols-rounded">article</span>
          </button>
          <button onClick={handleNextPageClick} class="button">
            <span class="material-symbols-rounded">bid_landscape</span>
          </button>
        </div>

        <p/>

        <div class="horizontalContainer">
          <button onClick={handlePreviousEcgClick} class="button">
            <span class="material-symbols-rounded">arrow_left_alt</span>
          </button>
          <h3>
            Rytmi {ecgIndex + 1} / {ecgList.length}
          </h3>
          <button onClick={handleNextEcgClick} class="button">
            <span class="material-symbols-rounded">arrow_right_alt</span>
          </button>
        </div>
      </>
    );
  }
  
}


// <button onClick={handleMoreClick}>
//   {showMore ? 'Hide' : 'Show'} details
// </button>
// {showMore && <p>{ecg.description}</p>}