import { bg_img } from "../utils/Constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";

const GPTSearch = ()=>{
    return (
        <div className="">
            <div>
            <img className="absolute -z-10" src={bg_img} alt="bg img"/>
            </div>
            <GPTSearchBar/>
            <GPTSuggestions/>
        </div>
    )
}

export default GPTSearch;