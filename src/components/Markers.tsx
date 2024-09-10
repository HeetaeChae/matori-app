import useMarker from "../hooks/queries/useMarker";
import { Boundary } from "../types/Location";
import { markerDatas } from "../dummy/markerDatas";
import Marker from "./MarkerItem";
import MarkerItem from "./MarkerItem";

interface MarkersProps {
  mapBoundary: Boundary;
}

function Markers({ mapBoundary }: MarkersProps) {
  return markerDatas.map((item, index) => {
    const { latitude, longitude, shopInfo } = item;
    const { category } = shopInfo;

    return (
      <MarkerItem
        key={index}
        latitude={latitude}
        longitude={longitude}
        category={category}
      />
    );
  });
}

export default Markers;
