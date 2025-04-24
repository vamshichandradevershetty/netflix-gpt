import { bg_img } from "../utils/Constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearch = ()=>{
    return (
        <>
        <div className="fixed -z-10">
            <img className="h-screen w-screen object-cover" src={bg_img} alt="bg img"/>
        </div>
        <div className="">
            <GPTSearchBar/>
            <GPTSuggestions/>
        </div>
        </>
    )
}

export default GPTSearch;