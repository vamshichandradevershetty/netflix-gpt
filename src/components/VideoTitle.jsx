export const VideoTitle = ({title,overview}) =>{
    return (
        <div className="w-screen aspect-video pt-[20%] px-4 md:px-24 absolute text-white bg-gradient-to-r to-black">
            <h1 className="text-2xl md:text-4xl font-bold m-2">{title}</h1>
            <p className="hidden md:inline-block py-8 text-lg w-2/4">{overview}</p>
            <div className="">
                <button className="px-3 m-2  md:p-2 text-xl rounded-lg bg-white text-black cursor-pointer hover:bg-opacity-50 transition"> ▶ Play</button>
                <button className="hidden md:inline-block p-2 text-xl rounded-lg bg-white text-black cursor-pointer hover:bg-opacity-50 transition"> 🛈 More Info</button>
            </div>
        </div>
    )
}