import {createBrowserRouter} from "react-router-dom"
import Main from "../../Layout/Main/Main"
import Blogs from "../../Pages/Blogs/Blogs";
import Error404 from "../../Pages/Error404/Error404";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleCategory from "../../Pages/SingleCategory/SingleCategory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <Error404></Error404>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: `/singleCategory/:id`,
				loader: ({ params }) => fetch(`/${params.id}`),
        element: <SingleCategory></SingleCategory>,
      },
    ],
  },
]);
export default router;