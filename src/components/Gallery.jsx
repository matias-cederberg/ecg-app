import { useState } from 'react';
import { ecgList } from './data.js';
import Graph from './Graph.jsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [seed, setSeed] = useState(1);
  const resetGraph = () => {
    setSeed(Math.random());
  };
  const hasNext = index < ecgList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    resetGraph();
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    resetGraph();
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(ecgList.length - 1);
    }
  }

  let ecg = ecgList[index];
  return (
    <>
      <h2>
        {ecg.name}
      </h2>
      <h3>
        ({index + 1} of {ecgList.length})
      </h3>

      <Graph points={ecg.points} key={seed} client:only="react" />

      <p>{ecg.description}</p>
      <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
    </>
  );
}


// <button onClick={handleMoreClick}>
//   {showMore ? 'Hide' : 'Show'} details
// </button>
// {showMore && <p>{ecg.description}</p>}