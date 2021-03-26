//import {getDateString} from "../utils/getDateString";

const Filters = ({
    //data, 
    updateFilter, 
    minMagFilters,
    placesFilters, 
    magnitude,
    places,
}) => {
  
  return (
    <div className="filters">
        <div className="filters">
            <div className="row">
                {/* <div className="col">
                    <select value={places} onChange={(e) => updateFilter(e, "places")} className="form-control">
                        <option value={"All Places"}>All Places</option>
                        {placesFilters.map((place, i) => {
                            //console.log(mag);
                            return <option key={i} value={place}>{place}</option>
                        })}
                    </select>
                </div> */}
                <div className="col">
                    <select value={places} onChange={(e) => updateFilter(e, "magnitude")} className="form-control">
                        <option value={"1"}>All Magnitudes</option>
                        {minMagFilters.map((mag, i) => {
                            //console.log(mag);
                            return <option key={i} value={mag}>{mag}</option>
                        })}
                    </select>
                </div>
            </div>
            {/* <div className="row search">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search by Place..."
                    onChange={(e) => updateFilter(e, "search")}
                    aria-label="Search" />
            </div> */}
        </div>
    </div>
  )
}

export default Filters;
