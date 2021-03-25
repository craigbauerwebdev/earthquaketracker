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
                <div className="col">
                    <select value={places} onChange={(e) => updateFilter(e, "places")} className="form-control">
                        <option value={"All Places"}>All Places</option>
                        {placesFilters.map((place, i) => {
                            //console.log(mag);
                            return <option key={i} value={place}>{place}</option>
                        })}
                    </select>
                </div>
                <div className="col">
                    <select value={places} onChange={(e) => updateFilter(e, "magnitude")} className="form-control">
                        <option value={"1"}>All Magnitudes</option>
                        {minMagFilters.map((mag, i) => {
                            //console.log(mag);
                            return <option key={i} value={mag}>{mag}</option>
                        })}
                    </select>
                  </div>
                {/* <div className="col">
                    <select value={location} onChange={(e) => sortBy(e, "location")} className="form-control">
                        <option value="AllLocations">All Locations</option>
                        {locationFilters.map((loc) => {
                            //console.log(loc);
                            return <option key={loc} value={loc}>{loc}</option>
                        })}
                    </select>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Filters;
