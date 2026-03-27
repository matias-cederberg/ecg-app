import ImageGraph from './ImageGraph.jsx';

export default function GalleryItem({ data }, graphSeed) {
  if ("points" in data) {
    return (
      <div class="graphDiv">
        <ImageGraph data={data} key={graphSeed} client:only="react" />
      </div>
    );
  }
  else {
    return (
      <p>{data.description}</p>
    );
  }
}