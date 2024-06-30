export function VideoCard(props : any) {
    return <div>
        <img className="rounded-xl cursor-pointer" src={props.image}></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-2 ">
                <img className="rounded-full h-16 w-16 pt-1" src={props.image}></img>
            </div>
            <div className="col-span-10 pl-4">
                <div className="text-lg font-bold">
                    {props.title}
                </div>
                <div className="text-gray-500 text-base">
                    {props.author}
                </div>
                <div className="text-gray-500 text-base">
                    {props.view} | {props.ts}
                </div>    
            </div>
            
        </div>
    </div>
}