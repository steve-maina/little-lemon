import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import HomePage from "../components/HomePage";
import Reserve from "../components/Reserve";
import Base from "../components/Base";


const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Base><App /></Base>,
      children:[
        {
            index:true,
            element:<HomePage />
        },
        {
            path:"/reserve",
            element:<Reserve/>
        }
      ]
    },
  ]);

export default myRouter;