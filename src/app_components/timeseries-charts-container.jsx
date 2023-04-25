
import useAPI from "../app_hooks/useAPI";
import Loader from "./loader"
import { useState, } from "react";
import TimeseriesChart from "./timeseries-chart";

function TimeseriesChartcontainer( {location}) {
    const [tsChecked, setTsChecked] = useState([]);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");


    const timeseries =useAPI("catalog/TIMESERIES", {
        like: `${location.name}.*`,
        office: location["office-id"],
    });

    if(Array.isArray(timeseries)) return <Loader />
    // console.log(timeseres);



    return (
        <>
        {/* states this column takes up 3 of the 12 parts of the page */}
        <div className="col-3"> 
        <div className="form-group mb-3">
            <label className="form-label"> Start:</label>
            <input 
                className="form-control" 
                type="datetime-local" 
                value = {start} 
                onChange={ (e)=> {
                    setStart(e.target.value);
            }}
            ></input>
        </div>
        <div className="form-group mb-3">
            <label className="form-label"> End:</label>
            <input 
                className="form-control" 
                type="datetime-local" 
                value = {end} 
                onChange={ (e)=> {
                    setEnd(e.target.value);
            }}
            ></input>
        </div>
            <div className="form-group">
                {timeseries.entries.filter((ts) => {
                        return !!ts.extents.length;
                        // above says that extents .length is going to be a number and by saying not not, we are saying 0 is false all else true
                    }).sort((a, b) =>{
                        if(a.name > b.name) return 1;
                        if (a.name<b.name) return -1;
                        return 0;
                        // sort wants a 1 a 0 or -1 his says if b is a higher letter return -1, return 0 if same
                    }).map((ts, i) =>{
                        return (
                            <div key={ts.name} className="form-check">
                                <label className="form-check-label">
                                <input 
                                   type="checkbox"
                                   className="form-check-input"
                                   name="ts-radio"
                                   id={`ts-radio-${i}`}
                                   value={ts.name}
                                   checked={tsChecked.indexOf(ts.name) !== -1} 
                                    onChange={(e) =>{
                                        if(e.currentTarget.checked){
                                            setTsChecked([...tsChecked, e.currentTarget.value])

                                        }else{
                                            const idx = tsChecked.indexOf(e.currentTarget.value)
                                            if(idx !== -1){
                                                tsChecked.splice(idx, 1);
                                                setTsChecked([...tsChecked]);
                                            }
                                        }
                                    }}
                                />
                                {ts.name}
                                </label>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        {/* this gives the remaining 9 columns of the page to this column */}
        <div className="col-9">        
            <TimeseriesChart 
            tsNames={tsChecked} 
            office={location["office-id"]} 
            start={start} 
            end={end}  
            />
        </div>
        </>
    );
}


export default TimeseriesChartcontainer;