/**
 *
 * ログアウト用のHooks
 *
 */
import { fireAuthLogOut } from "../../services/firebase/auth";

export const useLogout = () => (): Promise<void> => fireAuthLogOut();
