
function Cam() {
    return (
        <div className="bg-gray-800 flex flex-col items-center">
            <h1 className="text-white text-4xl font-bold">Camera</h1>
            <div className='flex justify-center border border-black rounded-lg'>
                <img src="http://localhost:8080/video_feed" alt="Video"/>
            </div>
        </div>


    );
}

export default Cam