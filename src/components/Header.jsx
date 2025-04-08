import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


export const Header = () => {

    const navigate = useNavigate();
    const user = useSelector((store)=> store.user);

    const handleSignOut = () =>{
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate("/")
                }).catch((error) => {
                // An error happened.
                navigate("/error")
                });
    }


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
                <img className="w-42"src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        {user &&
       <div className="flex p-3 m-3">
        <img className="w-12 h-12" src="https://occ-0-444-448.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"alt="user icon"/>
       <button className="p-3 m-3 text-white my-4 bg-red-600 cursor-pointer font-bold" onClick={handleSignOut}>Sign Out</button>
       </div>
       }
        </div>
    )
}