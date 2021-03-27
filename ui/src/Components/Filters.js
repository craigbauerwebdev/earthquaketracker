const Filters = ({
    updateFilter, 
    minMagFilters,
    latFilters,
    longFilters,
    maxRadiusFilters, 
    magnitude,
    lat,
    long,
    maxRadius,
}) => {
  
  return (
    <div className="filters">
        <div className="row">
            <div className="col">
                <select value={lat} onChange={(e) => updateFilter(e, "latitude")} className="form-control">
                    <option value={"0"}>Latitude</option>
                    {latFilters.map((l, i) => {
                        return <option key={i} value={l}>{l}</option>
                    })}
                </select>
            </div>
            <div className="col">
                <select value={long} onChange={(e) => updateFilter(e, "longitude")} className="form-control">
                    <option value={"0"}>Longitude</option>
                    {longFilters.map((l, i) => {
                        return <option key={i} value={l}>{l}</option>
                    })}
                </select>
            </div>
                <div className="col">
                    <select value={maxRadius} onChange={(e) => updateFilter(e, "maxRadius")} className="form-control">
                        <option value={"0"}>Max Radius</option>
                        {maxRadiusFilters.map((m, i) => {
                            return <option key={i} value={m}>{m} km</option>
                        })}
                    </select>
                </div>
            <div className="col">
                    <select value={magnitude} onChange={(e) => updateFilter(e, "magnitude")} className="form-control">
                    <option value={"1"}>Min Magnitude</option>
                    {minMagFilters.map((mag, i) => {
                        return <option key={i} value={mag}>{mag}</option>
                    })}
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filters;
