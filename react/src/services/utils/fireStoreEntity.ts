import firebase from "firebase";

export interface UsersEntity {
  email: string;
  name: string;
}

export interface FriendsListEntity {
  chatRoomId: string;
}

export interface ChatRoomsEntity {
  members: Array<string>;
  // requestStatus: {
  //   message: string;
  //   requestLocation: string;
  //   type: string;
  // };
}

export interface MessagesEntity {
  ownerId: string;
  content: {
    message: string;
  };
  createdAt: firebase.firestore.Timestamp | Date;
}

export interface RequestNoticesEntiity {
  currentLoction: firebase.firestore.GeoPoint;
  // latitude : 緯度
  // longitude : 経度
  lastChange: firebase.firestore.Timestamp;
  locationStatus: {
    convenienceStore: boolean;
    drugstore: boolean;
    superMaquette: boolean;
  };
  requestStatus: {
    clientUserId: string;
    type: "none" | "request" | "responce";
  };

  userStatus: {
    clientUserId: string;
    type: "public" | "private" | "request" | "contract";
  };
}

export interface NoticesEntity {
  content: {
    message: string;
  };
  noticeRooms: Array<string>;
  noticeType: "none" | "chat";
}

export interface OriginalLocationsEntity {
  locationPoint: firebase.firestore.GeoPoint;
  // latitude : 緯度
  // longitude : 経度

  name: string;
}

export interface ResponceNoticeEntity {
  candidates: Array<{
    uid: string;
    name: string;
    chatRoomId: string;
  }>;
}
