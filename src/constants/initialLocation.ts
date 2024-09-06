const initialRegion = {
  latitude: 37.5664056,
  longitude: 126.9778222,
} as const;

const initialLargeScaleDelta = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
} as const;

const initialSmallScaleDelta = {
  latitudeDelta: 0.0028,
  longitudeDelta: 0.0019,
};

export { initialRegion, initialLargeScaleDelta, initialSmallScaleDelta };
