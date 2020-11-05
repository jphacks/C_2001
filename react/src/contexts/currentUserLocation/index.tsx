import React from "react";
import { createCtx } from "../../services/utils/createCtx";

import {
  RequestNotices,
  useListenReqNotice,
} from "../../services/usecase/currentUserLocation";

export interface CurrentUserLocationContextInterface {
  requestNotice: RequestNotices | null;
}

const [useCurrentUserLocation, CurrentUserLocationContext] = createCtx<
  CurrentUserLocationContextInterface
>();

const CurrentUserLocationProvider: React.FC = ({ children }) => {
  const geolocation = useListenReqNotice();
  return (
    <CurrentUserLocationContext.Provider value={geolocation}>
      {children}
    </CurrentUserLocationContext.Provider>
  );
};

export {
  CurrentUserLocationContext,
  CurrentUserLocationProvider,
  useCurrentUserLocation,
};
