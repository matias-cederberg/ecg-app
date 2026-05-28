import ImageGraph from './ImageGraph.jsx';

export default function GalleryItem({ data }, graphSeed) {
  if ("graph" in data) {
    return (
      <div class="graphDiv">
        <ImageGraph data={data} key={graphSeed} client:only="react" />
      </div>
    );
  }
  else if ("image" in data) {
    return (
      <img src={data.image}></img>
    );
  }
  else {
    return (
      <p>{data.description}</p>
    );
  }
}