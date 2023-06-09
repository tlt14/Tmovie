import { DefaultLayout, DetailLayout } from "../components/Layout";
import Detail from "../pages/detail";
import Home from "../pages/home";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    layout: DefaultLayout,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
    layout: DetailLayout,
  },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
