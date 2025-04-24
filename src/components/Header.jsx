import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import {auth} from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { default_avtar, netflix_logo, SupportedLanguages } from "../utils/Constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import lang from "../utils/languageConstants";
import { changeLang } from "../utils/configSlice";



export const Header = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const user = useSelector((store)=> store.user);
    const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch)

   const handleGPTSearchClick =()=>{
    dispatch(toggleGPTSearchView());
   }

    const handleSignOut = () =>{
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                }).catch((error) => {
                // An error happened.
                Navigate("/error")
                });
    }

     //reducer listens when user sign in or signout and onauthstatechanged() code is given by firebase to manage users
     useEffect(()=>{ //useeffect is used as we are setting up this eventlistener only once as user sign-in or signout only once
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
               // User is signed in or signed up
              const {uid,email,displayName} = user; // we can extract these fields from user object
              // ...
                dispatch(
                addUser({uid:uid,email:email,displayName:displayName})
                );
              Navigate("/browse")
            } else {
              dispatch(removeUser()); // when User is signed out
              Navigate("/");
            }
          });
          return () => unsubscribe(); // whenever component is unmounted we have to unsubscribe it so, we are calling it in return function 
      },[])

      const handleLangChange = (e)=>{
        //console.log(e.target.value);
        dispatch(changeLang(e.target.value))
      }


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
                <img className="w-42 mx-auto md:mx-0"src={netflix_logo} alt="logo"/>
          { user &&
              <div className="flex p-3 m-3 justify-between">
                { showGPTSearch &&
                <select className="p-2 m-6 rounded-lg bg-gray-500 text-white" onChange={handleLangChange}>
                  {
                    SupportedLanguages.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                }
                </select>
                }<button className=" p-2 m-6 text-white rounded-lg bg-red-600" onClick={handleGPTSearchClick}>{showGPTSearch ? "Homepage": "GPT Search"}</button>
              <img className="hidden md:block w-12 h-12" src={default_avtar}alt="user icon"/>
              <button className="p-2 m-6 rounded-lg text-white my-4 bg-red-600 cursor-pointer font-bold" onClick={handleSignOut}>Sign Out</button>
            </div>
       }
        </div>
    )
}