import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault/LayoutDefault";
import Home from "../Pages/home/index";
import Aboutus from "../Pages/aboutus/index";
import Campaign from "../Pages/campaign";
import Filter from "../Pages/filter";
import Hotsearch from "../Pages/hotsearch";
import Login from "../Pages/login";
import Pinpoint from "../Pages/pinpoint";
import Register from "../Pages/register";
import Thongke from "../Pages/thongke";




export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "campaign",
        element: <Campaign />,
      },
      {
        path: "filter",
        element: <Filter />,
      },
      {
        path: "hotsearch",
        element: <Hotsearch />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "pinpoint",
        element: <Pinpoint />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "thongke",
        element: <Thongke />,
      },
    ],
  },


  // {
  //   path: "/admin",
  //   element: <Admin />, 
    
  // },

  // {
  //   path: "/shop",
  //   element: <Shop />, 
    
  // },

];