import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/category/:id',
          Component: CategoryNews,
          loader: () => fetch('/news.json'),
          hydrateFallbackElement: <Loading></Loading>
        }
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: '/auth/login',
          Component: Login,
        },
        {
          path: '/auth/register',
          Component: Register,
        },

      ]
    },
    {
      path: '/news-details/:id',
      element: <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: () => fetch('/news.json'),
      hydrateFallbackElement: <Loading></Loading>
    },
    {
      path: '/*',
      element: <h2>Error404</h2>
    }
  ]
)


export default router;