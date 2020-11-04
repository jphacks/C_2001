/**
 *
 * ログアウト用のHooks
 *
 */
import { fireAuthLogOut } from "../../services/firebase/auth";
export const useLogin = (email: string, pass: string): Promise<void> =>
  fireAuthLogOut();
