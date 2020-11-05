export const USERS_QUERY = "Users";
export const FRIENDS_LIST_QUERY = (uid: string) =>
  `${USERS_QUERY}/${uid}/FriendsList`;
export const CHAT_ROOMS_QUERY = "ChatRooms";
export const CHAT_ROOM_ID_QUERY = `${CHAT_ROOMS_QUERY}/:id`;
export const REQUEST_NOTICES_QUERY = "RequestNotices";
export const NOTICES_QUERY = "Notices";
