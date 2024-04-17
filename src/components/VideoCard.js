const VideoCard = ({info}) => {
    const {snippet} = info ?? [];
    const {channelTitle,title, thumbnails} = snippet ?? "";
    return ( 
    <div className="p-2 m-2 w-64 h-72 bg-white rounded-lg">
        <img className="rounded-lg" src={thumbnails?.medium.url} alt="thumbnails"/>
        <ul>
            <li className="font-bold">{channelTitle}</li>
            <li className="text-sm font-sans">{title}</li>
            <li className="text-sm font-semibold font-mono">{info?.statistics.viewCount} - views</li>
            
        </ul>
    </div> );
}
 
export default VideoCard;