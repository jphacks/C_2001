import React from "react";
export interface GeoLocation {
  latitude: number | null;
  longitude: number | null;
}

export const useGeolocation = () => {
  const [geolocation, setGeolocation] = React.useState<GeoLocation>({
    latitude: null,
    longitude: null,
  });

  React.useEffect(() => {
    let didCancel: boolean = false;
    let watchId: number;

    const successCallback = ({ coords }: Position) => {
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      if (!didCancel) {
        setGeolocation({
          latitude: latitude,
          longitude: longitude,
        });
      }
    };

    const errorCallback = (error: PositionError) => {
      console.log(error);
      if (!didCancel) {
        setGeolocation({
          latitude: null,
          longitude: null,
        });
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      watchId = navigator.geolocation.watchPosition(
        successCallback,
        errorCallback
      );
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
      didCancel = true;
    };
  }, []);

  return geolocation;
};
