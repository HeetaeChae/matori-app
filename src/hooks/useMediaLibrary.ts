import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import showSettingsAlert from "../utils/showSettingsAlert";
import { AppStateStatus } from "react-native";

function useMediaLibrary(appStatusStatus: AppStateStatus) {
  useEffect(() => {
    if (appStatusStatus !== "active") {
      return;
    }
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        showSettingsAlert({
          title: "사진 보관함 접근 허용",
          description:
            "나의 사진을 사용하기 위해 앱이 사진보관함에 접근할 수 있도록 허용해주세요.",
        });
      }

      const albums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
      });

      console.log(albums);
    })();
  }, [appStatusStatus]);
}

export default useMediaLibrary;
