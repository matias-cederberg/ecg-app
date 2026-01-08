import { useState } from 'react';
import { ecgList } from './data.js';
import Graph from './Graph.jsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < ecgList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
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

      <Graph client:only="react" />n

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