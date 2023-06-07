import { createContext, useContext } from "react";

export type UserInfo = {
  name?: string;
  email?: string;
  photoUrl?: string;
  uid?: string;
};

type AuthContextType = {
  signIn: (userinfo: UserInfo) => void;
  signOut: () => void;
  user: UserInfo;
};

const AuthContext = createContext<AuthContextType>({
  signIn: () => {},
  signOut: () => {},
  user: {},
});

// This hook can be used to access the user info.
export function useAuth(): AuthContextType {
  return useContext(AuthContext) as AuthContextType;
}

export default AuthContext;
