export const USERS_QUERY = "Users";
export const FRIENDS_LIST_QUERY = (uid: string) =>
  `${USERS_QUERY}/${uid}/FriendsList`;
export const CHAT_ROOMS_QUERY = "ChatRooms";
export const CHAT_MESSAGE_QUERY = (id: string) =>
  `${CHAT_ROOMS_QUERY}/${id}/Messages`;
export const REQUEST_NOTICES_QUERY = "RequestNotices";
export const RESPONCE_NOTICES_QUERY = "ResponceNotices";
export const NOTICES_QUERY = "Notices";
export const ORIGINAL_LOCATION_QUERY = (uid: string) =>
  `${USERS_QUERY}/${uid}/OriginalLocations`;
