import { axiosInstance } from "../network/axiosInstance";
import { Region } from "../types/Location";

const GOOGLE_MAP_API_KEY = "";

const getAddressApi = async (params: Region) => {
  const region = `${params.latitude},${params.longitude}`;

  const { data } = await axiosInstance.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region}&key=${GOOGLE_MAP_API_KEY}`
  );

  const address = data.results[0]?.formatted_address;

  return address;
};

export { getAddressApi };
