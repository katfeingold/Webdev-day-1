import useAPI from "../app_hooks/useAPI";
import Loader from "./loader";
import { useState } from "react";
function LocationList(){
    // goign to use the hook as the first thing setting an empty string as default
    const [searchString, setSearchString] = useState('')

    const locations = useAPI("catalog/LOCATIONS", {office: "SAS", "page-size":1200,}); //pulls locations out of api

    if(Array.isArray(locations)) return <Loader />; //checks to see if it is an array 
    //this says if locations is an array, then return nothing


    return (
        <div>
            {/* user input will go before the list */}
            {/* below creates an input form */}
            {/* letter e represents the event that will be recieved */}
            <input value={searchString} onChange={(e)=> {
                setSearchString(e.target.value);
                // above takes the input and sends it to the value to use on the page
            }} className="form-control mb-3"
            ></input>
            <ul className="list-group"> 
                {locations.entries //addid the .entries here prior to the filter 
                // filters just the "projects" reusing this filter to also allow a text write filter
                .filter((loc) => {
                    const matcher = new RegExp(searchString, 'ig')//i and g mean case insensitive and global respectivly
                    if(loc.kind === "PROJECT" && matcher.test(loc["public-name"])) return true; //&& is an "and" statement matcher.test "tests" to see if the string matchs input
                    return false;
                    })
                    .map((loc, i) => {
                        return (
                            <a  
                            key={i} 
                            href={`/locations/${loc.name}`} 
                            className="list-group-item"
                            >
                            {loc["public-name"]}
                            </a>
                            );
                    })
                }

            </ul>
        </div>
    );
}

export default LocationList;