import "./Search.css"
import { useState } from "react";
function Search({searchText}) {
const [filterText, setFilterText] = useState("");

const handleChange =(e)=>{
setFilterText(e.target.value);
searchText(filterText);
}

    return ( <div className="searchContainer">
        <input value={filterText} onChange={handleChange}  className="searchInput" type="text" placeholder="Search..." />
    </div> );
}

export default Search;