import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/layOut/LayOut"
import HomeScreen from "../pages/HomeScreen"

export const MainRoute = createBrowserRouter ([

    {
        path:"/",
        element:<LayOut/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>,
            },
        ]
    }
])