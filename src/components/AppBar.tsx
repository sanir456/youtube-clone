import { SearchBar } from "./SearchBar"

export function AppBar() {
    return <div className="flex justify-between pt-1">
        <div>
            Logo
        </div>
        <div >
            <SearchBar></SearchBar>
        </div>
        <div>
            Signin
        </div>
    </div>
}