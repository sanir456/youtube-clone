import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        title:"Title of video",
        image:"/photo.png",
        author:"channel name",
        view:"views count",
        ts:"time to upload"
    },
    {
        title:"Title of video",
        image:"/photo.png",
        author:"channel name",
        view:"views count",
        ts:"time to upload"
    },
    {
        title:"Title of video",
        image:"/photo.png",
        author:"channel name",
        view:"views count",
        ts:"time to upload"
    },
    {
        title:"Title of video",
        image:"/photo.png",
        author:"channel name",
        view:"views count",
        ts:"time to upload"
    },
    {
        title:"Title of video",
        image:"/photo.png",
        author:"channel name",
        view:"views count",
        ts:"time to upload"
    },
    {
        title:"Title of video",
        image:"/photo.png",
        author:"channel name",
        view:"views count",
        ts:"time to upload"
    }

]

export function VideoGrid() {
    return <div className="grid lg:grid-cols-4 gap-4 p-4 md:grid-cols-2">
        {
            VIDEOS.map(video => {
                return <VideoCard 
                    title={video.title}
                    image={video.image}
                    author={video.author}
                    view={video.view}
                    ts={video.ts}
                ></VideoCard>
            })
        }

    </div>    
}