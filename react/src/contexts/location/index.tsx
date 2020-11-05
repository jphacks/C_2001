/**
 *
 * お店のLocaton情報のGlobal State Context
 *
 */
import React from "react";
import { useLocationsUsecase } from "../../services/usecase/locations";
import { createCtx } from "../../services/utils/createCtx";

import { OriginalLocationsEntity } from "../../services/utils/fireStoreEntity";
import { Weaken } from "../../services/utils/Weaken";

export interface OriginalLocations
  extends Weaken<OriginalLocationsEntity, "locationPoint"> {
  locationPoint: {
    latitude: number; // 緯度
    longitude: number; // 経度
  };
}
export interface Locations {
  defaultLocations: ["superMaquette", "convenienceStore", "drugstore"];
  originalLocations: Array<OriginalLocations | null>;
}

export interface LocationsContextInterface {
  locations: Locations;
  saveLocation: (
    uid: string,
    name: string,
    latitude: number,
    longitude: number
  ) => void;
  fetchLocation: (uid: string) => void;
  error: Error | null;
  onLoad: boolean;
}

const [useLocations, LocationsContext] = createCtx<LocationsContextInterface>();

const LocationsProvider: React.FC = ({ children }) => {
  const locations = useLocationsUsecase();
  return (
    <LocationsContext.Provider value={locations}>
      {children}
    </LocationsContext.Provider>
  );
};

export { LocationsContext, LocationsProvider, useLocations };
