import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Browse } from './Browse'
import { Login } from './login'

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
      }
    ])
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )

}