import { useState, useEffect } from 'react';
import { ecgList } from './data.js';
import ImageGraph from './ImageGraph.jsx';


export default function Quiz() {
  const [ecgIndex, setEcgIndex] = useState(0);
  const [seed, setSeed] = useState(1);
  let choices = [0, 1, 2];

  const hasNext = ecgIndex < ecgList.length - 1;
  const hasPrevious = ecgIndex > 0;

  let offset = hasNext ? 0 : -10;
  choices = [ecgIndex, ecgIndex + offset + 1, ecgIndex + offset + 2]

  shuffleArray(choices);

  const resetGraph = () => {
    setSeed(Math.random());
  };

  function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }



  function handleNextEcgClick() {
    resetGraph();

    

    let target;
    target = hasNext ? ecgIndex + 1 : 0;

    // let offset = hasNext ? 0 : -10;
    // choices = [target, target + offset + 1, target + offset + 2]

    setEcgIndex(target);
  }

  function handlePreviousEcgClick() {
    resetGraph();

    let target;
    target = hasPrevious ? ecgIndex - 1 : ecgList.length - 1;
    setEcgIndex(target);
  }

  

  //if ecgIndex = 0

  useEffect(() => {
    shuffleArray(ecgList);
  }, []);

  let ecg = ecgList[ecgIndex];

  return (
    <>
      <div class="galleryDiv">

        
        <ImageGraph data={ecg.pages[1]} key={seed} client:only="react" />
        <p/>

        <p/>
      </div>
      
      <p/>

      <button onClick={handleNextEcgClick} class="button">
        {ecgList[choices[0]].name}
      </button>

      <p/>

      <button onClick={handleNextEcgClick} class="button">
        {ecgList[choices[1]].name}
      </button>

      <p/>
      
      <button onClick={handleNextEcgClick} class="button">
        {ecgList[choices[2]].name}
      </button>

      
    </>
  );
}


// <button onClick={handleMoreClick}>
//   {showMore ? 'Hide' : 'Show'} details
// </button>
// {showMore && <p>{ecg.description}</p>}