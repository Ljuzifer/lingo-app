import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { TEACHERS_ROUTE } from "utils/routenames";

const AuthRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();
  return user.email ? <Navigate to={TEACHERS_ROUTE} /> : <Element {...rest} />;
};

export default AuthRoute;
