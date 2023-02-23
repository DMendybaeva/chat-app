import { useAuth } from "../providers/AuthProvider";

export const AuthButton = () => {
  const auth = useAuth();

  return auth.loggedIn ? (
    <button type="button" className="btn btn-primary" onClick={auth.logOut}>
      Выйти
    </button>
  ) : null;
};