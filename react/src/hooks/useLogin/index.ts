/**
 *
 * ログイン用のHooks
 *
 */
import { User } from "../../contexts/auth";
import { fireAuthSignIn } from "../../services/firebase/auth";
export const useLogIn = () => async (
  email: string,
  pass: string
): Promise<User | null> => {
  const credential = await fireAuthSignIn(email, pass);

  if (!credential) return null;

  return {
    id: credential.id as string,
    email: credential?.data?.email ? credential?.data.email : "",
    name: credential?.data?.name ? credential?.data.name : "",
  };
};
