import React from "react";
import { createCtx } from "../../services/utils/createCtx";
import { RequestNoticesEntiity } from "../../services/utils/fireStoreEntity";
import { useListenReqNoticeUsecase } from "../../services/usecase/currentUserLocation";
import { Weaken } from "../../services/utils/Weaken";
export interface RequestNotices
  extends Weaken<RequestNoticesEntiity, "currentLoction" | "lastChange"> {
  currentLoction: {
    latitude: number; // 緯度
    longitude: number; // 経度
  };
  lastChange: Date;
}

export interface CurrentUserLocationContextInterface {
  requestNotice: RequestNotices | null;
  toggleStatusFn: (status: "private" | "public") => void;
}

const [useCurrentUserLocation, CurrentUserLocationContext] = createCtx<
  CurrentUserLocationContextInterface
>();

const CurrentUserLocationProvider: React.FC = ({ children }) => {
  const requestNotice = useListenReqNoticeUsecase();
  return (
    <CurrentUserLocationContext.Provider value={requestNotice}>
      {children}
    </CurrentUserLocationContext.Provider>
  );
};

export {
  CurrentUserLocationContext,
  CurrentUserLocationProvider,
  useCurrentUserLocation,
};
