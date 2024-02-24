import useAuth from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { HOME_ROUTE } from "utils/routenames";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth();
  return user.email ? <Element {...rest} /> : <Navigate to={HOME_ROUTE} />;
};

export default PrivateRoute;
