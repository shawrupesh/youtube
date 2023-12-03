import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_DETAILS_API } from "./Constant";
export default function VideoCardDetails({videoData}) {
  const [, setVideoDetails]=useState()
  const [searchParam]=useSearchParams()
const param=searchParam.get("v")

useEffect(()=>{
  fetchData()
},[])

  async function   fetchData (){
  const data= await fetch(YOUTUBE_VIDEO_DETAILS_API(param))
  const details= await data.json()
  setVideoDetails(details)
  console.log(details.items[0].snippet.thumbnails,"details");
}
      return (
        <>
         <div className=" ml-32 flex gap-4  items-center flex-wrap mt-8">
            <div className="w-1/2 gap-2  mt-8 rounded-lg  hover:rounded-xl  cursor-pointer">
              {/* <img alt='video' src={videoDetails?.items[0].snippet.thumbnails.maxres.url} />   */}
              <iframe width="700" height="315" src={"https://www.youtube.com/embed/"+param} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
        </>
      );
    }
    