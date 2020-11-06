import React from "react";
import firebase from "firebase";
import {
  Locations,
  LocationsContextInterface,
} from "../../../contexts/location";
import { getSubCollection, setCollection } from "../../firebase/store";
import { ORIGINAL_LOCATION_QUERY } from "../../utils/fireeStoreQuery";

export const useLocationsUsecase = (): LocationsContextInterface => {
  const [locations, setLocations] = React.useState<Locations>({
    defaultLocations: ["superMaquette", "convenienceStore", "drugstore"],
    originalLocations: [],
  });
  const [onLoad, setOnLoad] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);

  const saveLocation = async (
    uid: string,
    name: string,
    latitude: number,
    longitude: number
  ) => {
    setOnLoad(false);
    try {
      await setCollection(`${ORIGINAL_LOCATION_QUERY(uid)}`, {
        name: name,
        locationPoint: new firebase.firestore.GeoPoint(latitude, longitude),
      });

      setLocations({
        ...locations,
        originalLocations: [
          ...locations.originalLocations,
          {
            name: name,
            locationPoint: {
              latitude: latitude,
              longitude: longitude,
            },
          },
        ],
      });
      setOnLoad(true);
    } catch (error) {
      console.error(error);
      setOnLoad(true);
      setError(new Error("Locationを保存できませんでした"));
    }
  };

  const fetchLocation = async (uid: string) => {
    if (!uid) return;

    try {
      const location = await getSubCollection(
        `${ORIGINAL_LOCATION_QUERY(uid)}`
      );

      if (!location) return;

      const originalLocation = location.map((d) => {
        return {
          name: d.data?.name ? d.data.name : "",

          locationPoint: {
            latitude: d.data?.locationPoint?.latitude
              ? d.data.locationPoint.latitude
              : 1,
            longitude: d.data?.locationPoint?.longitude
              ? d.data.locationPoint.longitude
              : 1,
          },
        };
      });

      setLocations({
        ...locations,
        originalLocations: originalLocation,
      });
    } catch (error) {
      console.error(error);
      setOnLoad(true);
      setError(new Error("Locationを読み込めませんでした"));
    }
  };

  return { locations, saveLocation, fetchLocation, error, onLoad };
};
