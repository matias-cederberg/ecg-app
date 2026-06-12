import ImageGraph from './ImageGraph.jsx';

export default function GalleryItem({ data }, graphSeed) {
  if ("graph" in data) {
    if ("description" in data) {
      return (
        <>
          <div class="graphDiv">
            <ImageGraph data={data} key={graphSeed} client:only="react" />
          </div>
          <p>{data.description}</p>
        </>
      );
    }
    else {
      return (
        <div class="graphDiv">
          <ImageGraph data={data} key={graphSeed} client:only="react" />
        </div>
      );
    }
  }

  else if ("image" in data) {
    if ("description" in data) {
      return (
        <>
          <img src={data.image}></img>
          <p>{data.description}</p>
        </>
      );
    }
    else {
      return (
        <img src={data.image}></img>
      );
    }
  }
  else if ("button" in data) {
    return (
      <div class="horizontalContainer">
        <a href="/ecg-app/quizPage/" class="button">Testi: Rytmien tunnistaminen</a>
      </div>  
    );
  }

  else {
    return (
      <p>{data.description}</p>
    );
  }
}