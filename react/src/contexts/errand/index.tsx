import React from "react";
import { createCtx } from "../../services/utils/createCtx";
import { RequestNoticesEntiity } from "../../services/utils/fireStoreEntity";
import { Weaken } from "../../services/utils/Weaken";

export interface RequestNotices
  extends Weaken<RequestNoticesEntiity, "currentLoction" | "lastChange"> {
  currentLoction: {
    latitude: number; // 緯度
    longitude: number; // 経度
  };
  lastChange: Date;
}

export const ErrandProvider: React.FC = () => {
  return <div></div>;
};
