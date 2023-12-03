import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from "../App";
import Body from "./Body";
import VideoCardDetails from "./VideoCardDetails";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:'/',
          element:<Body />
        },
        {
          path:'watch',
          element:<VideoCardDetails />
        }
      ]
      
    }
   
  ]);
  