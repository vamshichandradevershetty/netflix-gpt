import { useRef, useState } from "react"
import { Header } from "./header"
import { checkValidate } from "../utils/validate";
import {auth} from "../utils/firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bg_img, default_avtar } from "../utils/Constants";
export const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [erroMessage, setErrorMessage] = useState(null);
    const name = useRef(null); 
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    const handleClick =()=>{
      
        const message = checkValidate(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm)
            {
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: name.current.value, photoURL: default_avtar
                  }).then(() => {
                    // Profile updated!
                    console.log(user);
                    const {uid,email,displayName} = auth.currentUser; // we can extract these fields from user object
                                // ...
                    dispatch(
                      addUser({uid:uid,email:email,displayName:displayName})
                    );
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                    // ...
                  });
                  
                  // ...
                })  
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                    // ..
                  });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
    // ...
         })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });

        }
    };
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <div>
            <img className="absolute" src={bg_img} alt="bg img"/>
            </div>
               <Header/>
                <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute my-36  mx-auto left-0 right-0 p-12 bg-black text-white rounded-lg bg-black/70">
                    <h1 className="text-white font-bold py-3 text-3xl">{isSignInForm?"Sign In": "Sign Up"}</h1>
                    {!isSignInForm && (<input ref={name} className=" p-2 my-3 w-full bg-gray-800" type="text"
                     placeholder="Enter Full Name">
                     </input>)}
                    <input className=" p-2 my-3 w-full bg-gray-800" 
                    ref={email}
                    type="email" placeholder="Enter Email"></input>
                    <input className=" p-2 my-3 w-full bg-gray-800"
                     ref={password} type="password" placeholder="Enter Password"></input>
                     <p className="font-bold p-2 text-lg text-red-500">{erroMessage}</p>
                    <button className="p-4 my-4 w-full bg-red-700 cursor-pointer" onClick={handleClick}>
                        {isSignInForm ? "LogIn": "Sign Up"}</button>
                    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Netflix? SignUp Now": "Already registered Sign In"}</p>
                </form>
        </div>
    )
}