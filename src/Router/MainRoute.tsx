import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Block/Layout"
import HomeScreen from "../Pages/HomeScreen"


export const MainRoute = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<HomeScreen/>
                }
            ]
        }
    ]
)