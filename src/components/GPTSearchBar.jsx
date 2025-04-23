import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { openai } from "../utils/openAi";

const GPTSearchBar = () =>{
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null);
    
    const handleGptClick = async()=>{

        console.log(searchText.current.value);
                      
        const query="act as a movie recommendation system to suggest some movies"+searchText.current.value;

        try{
            const completion = await openai.chat.completions.create({
              messages: [{ role: 'user', content: query} ],
              model: 'gpt-3.5-turbo',
            });
            console.log(completion.choices[0].message.content);
            return;
        }
        catch(error){
            if(error.status === 429)
            {
                console.warn("ratelimit exceeded");
                
            }
        }
        }
    return (
        <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input  ref={searchText} className="p-4 m-4 col-span-9 bg-white"type="text" placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className="p-4 m-4 col-span-3 bg-red-600 rounded-lg text-white cursor-pointer" onClick={handleGptClick}>{lang[langKey].search}</button>
        </form>
        </div>
    );
}
export default GPTSearchBar;