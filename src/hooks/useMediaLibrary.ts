import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import showSettingsAlert from "../utils/showSettingsAlert";
import { Alert, AppStateStatus } from "react-native";

const selectLimit = 5 as const;

function useMediaLibrary(appStatusStatus: AppStateStatus) {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<MediaLibrary.Asset[]>(
    []
  );

  const [hasNextPage, setHasNextPage] = useState<undefined | boolean>();
  const [endCursor, setEndCursor] = useState<undefined | string>();

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

      handleFetchPhotos();
    })();
  }, [appStatusStatus]);

  const handleFetchPhotos = async (cursor?: string | undefined) => {
    const {
      assets,
      endCursor: newEndCursor,
      hasNextPage: newHasNextPage,
    } = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.photo,
      first: 20,
      after: cursor,
    });

    setPhotos((prev) => [...prev, ...assets]);
    setEndCursor(newEndCursor);
    setHasNextPage(newHasNextPage);
  };

  const handleSelectPhoto = (newSelectedPhoto: MediaLibrary.Asset) => {
    const aleadySelectedPhotoIdx = selectedPhotos.findIndex(
      (selectedPhoto) => selectedPhoto === newSelectedPhoto
    );
    const isAleadySelectedPhoto = aleadySelectedPhotoIdx !== -1;
    const isOverLimit =
      !isAleadySelectedPhoto && selectedPhotos.length >= selectLimit;

    if (isAleadySelectedPhoto) {
      setSelectedPhotos((prev) =>
        prev.filter((_, index) => index !== aleadySelectedPhotoIdx)
      );
    } else if (isOverLimit) {
      Alert.alert(
        "사진을 선택할 수 없습니다.",
        "사진은 5장까지 선택할 수 있습니다."
      );
    } else {
      setSelectedPhotos((prev) => [...prev, newSelectedPhoto]);
    }
  };

  const handleInitialize = () => {
    setPhotos([]);
    setSelectedPhotos([]);
    setHasNextPage(undefined);
    setEndCursor(undefined);
  };

  return {
    photos,
    selectedPhotos,
    hasNextPage,
    endCursor,
    handleFetchPhotos,
    handleSelectPhoto,
    handleInitialize,
  };
}

export default useMediaLibrary;
