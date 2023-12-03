 import { useNavigate } from "react-router-dom";
 export default function VideoCard({videoData}) {
    const {title, thumbnails, channelTitle}=videoData.snippet
    const navigate=useNavigate()
    function Handler(){
      navigate(`/watch?v=${videoData.id}`)
    }
  return (
    <>
    
        <div onClick={Handler} className="w-64 gap-2  mt-8 rounded-lg  hover:rounded-xl  cursor-pointer">
            <img  src={thumbnails.high.url} alt="video" />
            <h5  className="font-bold">{channelTitle}</h5>
            <span>{title.substring(0,50)}...</span>
            <h6> {Math.floor(videoData.statistics.viewCount/10000)}K views</h6>
        </div>
    </>
  );
}
