import { useState } from "react";
import RelativeButton from "./RelativeButton";

interface CameraProps {
    label: string;
}


function Cam ( cam: CameraProps )   {
    const [right, setRight] = useState(true);

    
    return (
        <div className="bg-gray-800 flex flex-col items-center">
            <h1 className="text-white text-4xl font-bold">{cam.label}</h1>
            <div className='flex justify-center border border-black rounded-lg'>
                <img src={`http://localhost:8080/dose_feed/${right?"right":"left"}`} alt="Video"/>
            </div>
            <RelativeButton label="Switch Hands" onClick={() => {setRight(!right)}}  />
        </div>


    );
}

export default Cam