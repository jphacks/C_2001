/**
 *
 * Firebase Authenticationのロジックの実態を記述
 *
 */
import FireApp from "../config";
import firebase from "firebase";
import { DocData, getDoc, setDoc } from "../store";
import { USERS_QUERY } from "../../utiils/fireeStoreQuery";
import { UsersEntity } from "../../utiils/fireStoreEntity";

export const FireAuth = FireApp.auth();

/**
 * 返り値：Promise<DocData | null>　Fiirestoreに保存されているUserデータを<DocData>型で返す
 * @param email ログイン用メールアドレス
 * @param pass ログイン用パスワード
 */
export const fireAuthSignIn = async (
  email: string,
  pass: string
): Promise<DocData | null> =>
  FireAuth.signInWithEmailAndPassword(email, pass)
    .then(async (credential: firebase.auth.UserCredential) => {
      try {
        const uid = credential.user?.uid;
        return uid ? getDoc(`${USERS_QUERY}/${uid}`) : null;
      } catch (error) {
        throw error;
      }
    })
    .catch((error) => {
      throw error;
    });

/**
 * 返り値：Promise<DocData | null>　Fiirestoreに保存されているUserデータを<DocData>型で返す
 * @param email ログイン用メールアドレス
 * @param pass ログイン用パスワード
 * @param name ユーザーネーム
 */
export const fireAuthSignUp = async (
  email: string,
  pass: string,
  name: string
): Promise<DocData | null> =>
  FireAuth.createUserWithEmailAndPassword(email, pass)
    .then(async (credencial) => {
      try {
        const uid = credencial.user?.uid;
        if (!uid) throw Error("not found uid");

        await setDoc(`${USERS_QUERY}/${uid}`, {
          name: name,
          email: credencial.user?.email ? credencial.user?.email : "",
        } as UsersEntity);
        return uid ? getDoc(`${USERS_QUERY}/${uid}`) : null;
      } catch (error) {
        throw error;
      }
    })
    .catch((error) => {
      throw error;
    });

/**
 * ログアウト
 * 失敗時Errorをthrow
 */
export const fireAuthLogOut = () => FireAuth.signOut();
