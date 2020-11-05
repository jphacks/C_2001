import firebase from "firebase";

export interface UsersEntity {
  email: string;
  name: string;
}

export interface FriendsList {
  chatRoomId: string;
  name: string;
}

export interface ChatRoomsEntity {
  members: Array<string>;
  requestStatus: {
    message: string;
    requestLocation: string;
    type: string;
  };
}

export interface MessagesEntity {
  ownerId: string;
  content: {
    message: string;
  };
  createdAt: firebase.firestore.Timestamp | Date;
}

export interface RequestNoticesEntiity {
  currentLoction: {
    latitude: number; // 緯度
    longitude: number; // 経度
  };
  lastChange: firebase.firestore.Timestamp;
  locationStatus: {
    convenienceStore: boolean;
    drugstore: boolean;
    superMaquette: boolean;
  };
  requestStatus: "none" | "requested" | "responseed";
  userStatus: {
    clientUserId: string;
    type: "public" | "private" | "requested" | "contracted";
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
  locationPoint: {
    latitude: number; // 緯度
    longitude: number; // 経度
  };
  name: string;
}
