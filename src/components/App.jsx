import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentUser } from "../redux/auth/authOperation";
import { FAVORITES_ROUTE, HOME_ROUTE, TEACHERS_ROUTE } from "utils/routenames";

import Layout from "./Layout/Layout";
import { colors } from "utils/randomcolor";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";
import { authSlice } from "../redux/auth/authSlice";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../pages/Home/Home"));
const TeachersPage = lazy(() => import("../pages/Teachers/Teachers"));
const FavoritesPage = lazy(() => import("../pages/Favorites/Favorites"));

export const App = () => {
  const dispatch = useDispatch();
  const { setRandomStyle } = authSlice.actions;

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    dispatch(setRandomStyle(colors[randomIndex]));
  }, [dispatch, setRandomStyle]);

  return (
    <>
      <Routes>
        <Route path={HOME_ROUTE} element={<Layout />}>
          <Route
            index
            path={HOME_ROUTE}
            element={<AuthRoute element={HomePage} />}
          />
          <Route index path={TEACHERS_ROUTE} element={<TeachersPage />} />
          <Route
            index
            path={FAVORITES_ROUTE}
            element={<PrivateRoute element={FavoritesPage} />}
          />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
};
