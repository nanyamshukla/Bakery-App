import { createBrowserRouter } from "react-router-dom";

import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import ErrorFallback from '../Pages/ErrorFallback/ErrorFallback';

const routesConfig = createBrowserRouter([
    {
        path: "/checkout",
        element: <Checkout />
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorFallback />
    },
]);

export default routesConfig;