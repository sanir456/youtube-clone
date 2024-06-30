export function VideoCard(props : any) {
    return <div>
        <img className="rounded-xl" src={props.image}></img>
        <div className="grid grid-cols-12">
            <div className="col-span-1">
                <img className="rounded-full h-20 w-20" src={props.image}></img>
            </div>
            <div className="col-span-11">
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