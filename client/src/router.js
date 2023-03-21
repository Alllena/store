import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import BasketPage from "./pages/BasketPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import {
  MAIN_ROUTE,
  HOME_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  BASKET_ROUTE,
  PRODUCT_ROUTE,
} from "./utils/consts";

export const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: HOME_ROUTE,
        element: <HomePage />,
      },
      {
        path: SHOP_ROUTE,
        element: <ShopPage />,
      },
      {
        path: ADMIN_ROUTE,
        element: <AdminPage />,
      },
      {
        path: BASKET_ROUTE,
        element: <BasketPage />,
      },
      {
        path: LOGIN_ROUTE,
        element: <LoginPage />,
      },
      {
        path: REGISTRATION_ROUTE,
        element: <LoginPage />,
      },
      {
        path: PRODUCT_ROUTE + "/:id",
        element: <ProductPage />,
      },
    ],
  },
]);
