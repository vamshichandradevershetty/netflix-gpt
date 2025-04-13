import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Browse } from './Browse'
import { Login } from './login'
import Error from "./Error";



export const Body = ()=>{
 
  const appRouter = createBrowserRouter(
    [
      {
      path: "/",
      element: <Login/>,
      },
      {
        path: "/browse",
        element:<Browse/>,
      },
      {
        path:"*",
      errorElement: <Error/>
      }
    ]
    
  )

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )

}