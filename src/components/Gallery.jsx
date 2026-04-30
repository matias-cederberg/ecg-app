import { useState } from 'react';
import { ecgList } from './data.js';
import GalleryItem from './GalleryItem.jsx';

export default function Gallery() {
  const [pageIndex, setPageIndex] = useState(0);
  const [ecgIndex, setEcgIndex] = useState(0);
  const [seed, setSeed] = useState(1);

  const resetGraph = () => {
    setSeed(Math.random());
  };

  const hasNext = ecgIndex < ecgList.length - 1;
  const hasPrevious = ecgIndex > 0;

  let ecg = ecgList[ecgIndex];

  function handleNextEcgClick() {
    resetGraph();

    let target;
    target = hasNext ? ecgIndex + 1 : 0;
    setEcgIndex(target);
    setPageIndex(0);
  }

  function handlePreviousEcgClick() {
    resetGraph();

    let target;
    target = hasPrevious ? ecgIndex - 1 : ecgList.length - 1;
    setEcgIndex(target);
    setPageIndex(0);
  }

  function handleNextPageClick() {
    resetGraph();

    if (pageIndex < ecg.pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
    else
    {
      handleNextEcgClick();
    }
  }

  function handlePreviousPageClick() {
    resetGraph();

    setPageIndex(0);
  }

  return (
    <>
      <div class="galleryDiv">
        <h1>
          {ecg.name}
        </h1>

        <GalleryItem data={ecg.pages[pageIndex]} graphSeed={seed} client:only="react" />

        <p/>

        <div class="horizontalContainer">
          <button onClick={handleNextPageClick} class="button">
            <b>Seuraava</b> <span class="material-symbols-rounded">chevron_forward</span>
          </button>
        </div>

        <p/>
      </div>

      <div class="horizontalContainer">
        <button onClick={handlePreviousEcgClick} class="button">
          <span class="material-symbols-rounded">chevron_backward</span>
        </button>
        <h3>
          {ecgIndex + 1} / {ecgList.length}
        </h3>
        <button onClick={handleNextEcgClick} class="button">
          <span class="material-symbols-rounded">chevron_forward</span>
        </button>
      </div>
      {ecg.name}
    </>
  );
}


// <button onClick={handleMoreClick}>
//   {showMore ? 'Hide' : 'Show'} details
// </button>
// {showMore && <p>{ecg.description}</p>}