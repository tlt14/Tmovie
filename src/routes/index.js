import { DefaultLayout, DetailLayout } from "../components/Layout";
import Detail from "../pages/detail";
import Home from "../pages/home";
import SearchPage from "../pages/search";
import ViewAll from "../pages/viewAll";

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
  {
    path:"/:option",
    element: <ViewAll />,
    layout: DefaultLayout
  },
  {
    path:"/search",
    element: <SearchPage />,
    layout: DefaultLayout
  }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
