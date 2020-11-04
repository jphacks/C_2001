/**
 *
 * ログアウト用のHooks
 *
 */
import { fireAuthLogOut } from "../../services/firebase/auth";
export const useLogout = () => (email: string, pass: string): Promise<void> =>
  fireAuthLogOut();
