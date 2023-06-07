import { useRouter, useSegments } from "expo-router";
import { FC, ReactNode, useEffect, useState } from "react";
import AuthContext, { UserInfo } from "../../context/auth";
import isEmpty from "lodash/isEmpty";

type ProviderProps = {
  children: ReactNode;
};

// This hook will protect the route access based on user authentication.
export function useProtectedRoute(user: UserInfo) {
  const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      isEmpty(user) &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (!isEmpty(user) && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, segments]);
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const [user, setAuth] = useState({});
  useProtectedRoute(user);
  return (
    <AuthContext.Provider
      value={{
        signIn: (userinfo: UserInfo) => setAuth(userinfo),
        signOut: () => setAuth({}),
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
