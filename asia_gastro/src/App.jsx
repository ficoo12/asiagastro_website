import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUs";
import BrandsPage from "./pages/Brands";
import AssortmentPage from "./pages/Assortment";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";
import footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/products",
        element: <AssortmentPage></AssortmentPage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },

      {
        path: "/brands",
        element: <BrandsPage></BrandsPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
