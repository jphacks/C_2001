/**
 *
 * Firebase Authenticationのロジックの実態を記述
 *
 */
import FireApp from "../config";
import firebase from "firebase";
import { DocData, getDoc, setDoc } from "../store";
import { USERS_QUERY } from "../../utiils/fireeStoreQuery";

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
  FireAuth.signInWithEmailAndPassword(email, pass).then(
    async (credential: firebase.auth.UserCredential) => {
      const uid = credential.user?.uid;
      return uid ? getDoc(`${USERS_QUERY}/${uid}`) : null;
    }
  );

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
  FireAuth.createUserWithEmailAndPassword(email, pass).then(
    async (credencial) => {
      try {
        const uid = credencial.user?.uid;
        const nickName = name ? name : credencial.user?.email;
        await setDoc(`${USERS_QUERY}/${uid}`, {
          name: nickName,
          id: uid,
          email: credencial.user?.email,
        });
        return uid ? getDoc(`${USERS_QUERY}/${uid}`) : null;
      } catch (error) {
        throw error;
      }
    }
  );

/**
 * ログアウト
 * 失敗時Errorをthrow
 */
export const fireAuthLogOut = async () => FireAuth.signOut();
