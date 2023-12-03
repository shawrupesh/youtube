const API_KEY="AIzaSyBZw3EYQeK7ceKq6pJYnXlxAPAYXv9bth0"
export const YOUTUBE_VIDEO_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+API_KEY
export function YOUTUBE_VIDEO_DETAILS_API(id){
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
}
 