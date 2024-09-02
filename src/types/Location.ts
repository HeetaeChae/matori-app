interface Region {
  latitude: number;
  longitude: number;
}

interface Delta {
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Boundary {
  northEast: Region;
  southWest: Region;
}

export { Region, Delta, Boundary };
