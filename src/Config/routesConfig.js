import { createBrowserRouter } from "react-router-dom";

import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import ErrorFallback from '../Pages/ErrorFallback/ErrorFallback';

const routesConfig = createBrowserRouter([
    {
        path: "/Bakery-App/checkout",
        element: <Checkout />
    },
    {
      path: "/Bakery-App/",
      element: <Home />,
      errorElement: <ErrorFallback />
    },
]);

export default routesConfig;