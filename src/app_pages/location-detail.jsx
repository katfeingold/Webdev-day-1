import useAPI from "../app_hooks/useAPI"
import Loader from "../app_components/loader";
import Map from "../app_components/map";
import TimeseriesChartcontainer from "../app_components/timeseries-charts-container";

const displayAttribues = [
    {
        label:"Name",
        key: "public-name"
    },{
        label:"Desc.",
        key: "description"
    },{
        label:"Time Zone",
        key: "timezone-name"
    },{
        label:"Vertical Datum",
        key: "vertical-datum"
    },
];


function LocationDetail({params}){
    const name = params.name;

    const location = useAPI(`locations/${name}`, {
        office: "SAS",
    });

// return <Loader />     //This tests to show the loader

if(Array.isArray(location)) return <Loader />

  //  console.log(location);

    return(
        <div className="container pb-4" >
            <div className="row">
                <div className ="col">
                    <div className="card text-white bg-dark mt-3 mb-3">
                     <div className="card-body">
                        {
                            displayAttribues.map((attr) => {
                                return(
                                    <div className="row">
                                     <div className="col-4">{attr.label}</div>
                                     <div className="col-8">{location[attr.key]}</div>
                                    </div>
                                )
                            })
                        }

                     </div>
                    </div>
                </div>
                <div className ="col">
                    <div className="mt-3">
                        {/* mt-3 gives the margin at the top of the page  standing for margine top*/}
                        <Map lon={location.longitude} lat={location.latitude} />
                    </div>
                </div>

            </div>
            <hr/>
            <div className="row">
                <TimeseriesChartcontainer location={location}/>
            </div>
        </div>
    );
}


export default LocationDetail;