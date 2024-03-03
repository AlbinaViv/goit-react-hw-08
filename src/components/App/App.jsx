import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from "../PrivateRoute";
import { Layout } from "../Layout";
import { refreshUser } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
import { RestrictedRoute } from "../RestrictedRoute";

const Home = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<ContactsPage />}
              />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

//   return (
//     <>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {/* {isLoading && <p>Loading contacts...</p>}
//       {error && <p>{error}</p>} */}
//       {isLoading && !error && <b>Request in progress...</b>}
//       {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
//       <ContactList />
//     </>
//   );
// };
