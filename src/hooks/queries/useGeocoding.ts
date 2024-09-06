import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getAddressApi } from "../../api/geocoding";
import { Region } from "../../types/Location";
import { queryKeys } from "../../constants/queryKeys";

const { GEOCODING, GET_ADDRESS } = queryKeys;

function useGeocoding() {
  const getAddress = (params: Region, options?: any) => {
    console.log(params);
    return useQuery({
      queryKey: [
        GEOCODING,
        GET_ADDRESS,
        typeof params.latitude,
        typeof params.longitude,
      ],
      queryFn: () => getAddressApi(params),
      ...options,
    });
  };

  return { getAddress };
}

export default useGeocoding;
