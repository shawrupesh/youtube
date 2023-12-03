import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./Constant";
import VideoCard from "./VideoCard";

export default function Body() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideoData(data?.items);
  }
  if (!videoData.length > 0) {
    return null;
  }
  console.log(videoData)
  return (
    <div className=" ml-8 flex gap-4  items-center flex-wrap mt-8">
    {videoData.map((singleVideo)=>{
        return ( 
        <VideoCard key={singleVideo.id} videoData={singleVideo} />
        )
    })}
        </div>
      
  );
}
