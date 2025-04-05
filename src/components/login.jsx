import { useState } from "react"
import { Header } from "./header"

export const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <div>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/US-en-20250331-TRIFECTA-perspective_af0ac1e5-ee28-4f5b-be31-df183943d90f_small.jpg" alt="bg img"/>
            </div>
               <Header/>
                <form className="w-4/12 absolute my-36  mx-auto left-0 right-0 p-12 bg-black text-white rounded-lg bg-black/70">
                    <h1 className="text-white font-bold py-3 text-3xl">{isSignInForm?"Sign In": "Sign Up"}</h1>
                    {!isSignInForm && (<input className=" p-2 my-3 w-full bg-gray-800" type="text"
                     placeholder="Enter Full Name">
                     </input>)}
                    <input className=" p-2 my-3 w-full bg-gray-800" 
                    type="email" placeholder="Enter Email"></input>
                    <input className=" p-2 my-3 w-full bg-gray-800"
                     type="password" placeholder="Enter Password"></input>
                    <button className="p-4 my-4 w-full bg-red-700 cursor-pointer">
                        {isSignInForm ? "LogIn": "Sign Up"}</button>
                    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix? SignUp Now": "Already registered Sign In"}</p>
                </form>
        </div>
    )
}