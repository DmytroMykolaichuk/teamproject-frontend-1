import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/MainLayout/MainLayout/MainLayout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';

import LoginPage from 'pages/LoginPage';
import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage';
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<MainPage />} />
          }
          index
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/calendar"
              component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/"
          element={<PrivateRoute redirectTo="/login" component={<Layout />} />}
        >
          <Route path="calendar" element={<CalendarPage />}>
            <Route path="month" element={<CalendarPage />} />
            <Route path="day" element={<CalendarPage />} />
          </Route>
          <Route path="account" element={<AccountPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    )
  );
};
