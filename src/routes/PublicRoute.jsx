import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
// import { selectUser } from '../store/auth/selectors';
// import { Navigate } from 'react-router';

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return children;
  }
  return <Navigate to={"/recommended"} />;
};

export default PublicRoute;