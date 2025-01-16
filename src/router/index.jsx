import { createBrowserRouter } from "react-router-dom";
import Root from '../page/Root'
import Home from '../page/Home'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // {
            //     path: 'detail/:no',
            //     element: <Detail />,
            // },
        ]
    },
]);