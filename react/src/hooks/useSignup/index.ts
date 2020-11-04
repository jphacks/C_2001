/**
 *
 *
 * サインアップ用のHooks
 *
 */
import { User } from "../../contexts/auth";
import { fireAuthSignUp } from "../../services/firebase/auth";
export const useSignUp = () => async (
  email: string,
  pass: string,
  name: string
): Promise<User | null> => {
  const credential = await fireAuthSignUp(email, pass, name);
  if (!credential) return null;
  return {
    id: credential.id as string,
    email: credential?.data?.email ? credential?.data.email : "",
    name: credential?.data?.name ? credential?.data.name : "",
  };
};
