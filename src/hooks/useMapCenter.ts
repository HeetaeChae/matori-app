import { useEffect, useState } from "react";
import { Delta, Region } from "../types/Location";

function useMapCenter(location: Region & Delta) {
  const [mapCenter, setMapCenter] = useState<Region>({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  useEffect(() => {
    handleChangeMapCenter(location);
  }, [location]);

  const handleChangeMapCenter = (location: Region & Delta) => {
    const centerRegion = {
      latitude: location.latitude,
      longitude: location.longitude,
    };

    setMapCenter(centerRegion);
  };

  return { mapCenter };
}

export default useMapCenter;
