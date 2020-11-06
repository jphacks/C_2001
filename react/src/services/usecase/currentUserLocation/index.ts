import React, { useState } from "react";
import { updateDoc, subscribeDocSnapshoot } from "../../firebase/store";
import firebase from "firebase";
import {
  REQUEST_NOTICES_QUERY,
  RESPONCE_NOTICES_QUERY,
} from "../../utils/fireeStoreQuery";
import { RequestNoticesEntiity } from "../../utils/fireStoreEntity";

import { useAuth } from "../../../hooks/useAuth";
import { timestampToDateRecursively } from "../../utils/timestampToDateRecursively";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { RequestNotices } from "../../../contexts/currentUserLocation";

export const useListenReqNoticeUsecase = () => {
  const { userCredential } = useAuth();
  const [requestNotice, setRequestNotice] = useState<RequestNotices | null>(
    null
  );

  const geolocation = useGeolocation();

  React.useEffect(() => {
    if (!userCredential.user?.id) return;

    const unsubscribe = subscribeDocSnapshoot(
      `${REQUEST_NOTICES_QUERY}/${userCredential.user.id}`,
      (snapshot) => {
        if (!(snapshot.exists && userCredential.user?.id)) return;

        const data = snapshot.data() as RequestNoticesEntiity;

        if (data.requestStatus.type === "request") {
          updateDoc(`${REQUEST_NOTICES_QUERY}/${userCredential.user.id}`, {
            requestStatus: {
              type: "responce",
              clientUserId: "",
            },
            lastChange: new Date(),
            currentLoction: new firebase.firestore.GeoPoint(
              geolocation.latitude ? geolocation.latitude : 0,
              geolocation.longitude ? geolocation.longitude : 0
            ),
          });

          updateDoc(
            `${RESPONCE_NOTICES_QUERY}/${data.requestStatus.clientUserId}`,
            {
              candidates: firebase.firestore.FieldValue.arrayUnion(
                userCredential.user.id
              ),
            }
          );
          return;
        }

        setRequestNotice({
          currentLoction: {
            latitude: data.currentLoction.latitude,
            longitude: data.currentLoction.latitude,
          },
          lastChange: timestampToDateRecursively(data.lastChange.toDate()),
          locationStatus: {
            convenienceStore: data.locationStatus.convenienceStore,
            drugstore: data.locationStatus.drugstore,
            superMaquette: data.locationStatus.superMaquette,
          },
          requestStatus: data.requestStatus,
          userStatus: {
            clientUserId: data.userStatus.clientUserId,
            type: data.userStatus.type,
          },
        });
      }
    );

    return () => {
      unsubscribe();
    };
  }, [userCredential.user]);

  React.useEffect(() => {}, [requestNotice]);

  return { requestNotice };
};
