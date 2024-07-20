import React from 'react'
import ReactDom from 'react-dom/client'
import Form from './components/Form';
import Empty from './Empty'
import LoginSignup from './LoginSignup';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import FormA from './components/FormA';
import FacultyAppraisalLandingPage from './components/FacultyAppraisalLandingPage'

const AppLayout = () => {

    return (
        <div>
            <Empty/>
            <Outlet/>
        </div>
    )

};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <FacultyAppraisalLandingPage />,
                errorElement: <Error />,
            },
            {
                path: "/infoForm",
                element: <Form />,
                errorElement: <Error/>
            },
            {
                path: "/formA",
                element: <FormA/>,
                errorElement: <Error/>
            },
           
        ],
        errorElement: <Error />,
    },
])

const root = ReactDom.createRoot(document.getElementById("main"));

root.render(<RouterProvider router={appRouter} />)


