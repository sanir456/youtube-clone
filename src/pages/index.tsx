import { VideoCard } from "@/components/VideoCard";
import { title } from "process";

export default function Home(){
  return <div >
    <VideoCard 
      title={"Title of video"}
      image={"/photo.png"}
      author={"channel name"}
      view={"views count"}
      ts={"time to upload"}
    ></VideoCard>
    
  </div> 

}
