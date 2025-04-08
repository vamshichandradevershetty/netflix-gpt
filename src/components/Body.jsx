import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Browse } from './Browse'
import { Login } from './login'
import { useEffect } from "react";
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export const Body = ()=>{
  const dispatch = useDispatch();
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

    //reducer listens when user sign in or signout and onauthstatechanged() code is given by firebase to manage users
    useEffect(()=>{ //useeffect is used as we are setting up this eventlistener only once as user sign-in or signout only once
      onAuthStateChanged(auth, (user) => {
          if (user) {
             // User is signed in or signed up
            const {uid,email,displayName} = user; // we can extract these fields from user object
            // ...
            dispatch(
              addUser({uid:uid,email:email,displayName:displayName})
            );
          } else {
            dispatch(removeUser()); // when User is signed out
          }
        });
    },[])
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )

}