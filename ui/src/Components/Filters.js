import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

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
    handleStart,
    handleEnd,
}) => {

const handleDayChangeStart = (day) => {
    console.log(day);
    handleStart(day);
}

const handleDayChangeEnd = (day) => {
    console.log(day);
    handleEnd(day);
}
  
return (
    <div className="filters">
        <div className="row date-filters">
            <div className="col day-picker" align="center">
                <span>Start Date: </span>
                <DayPickerInput 
                    onDayChange={handleDayChangeStart}
                    inputProps={{ readOnly: true }}
                />
            </div>
            <div className="col day-picker" align="center">
                <span>End Date: </span>
                <DayPickerInput 
                    onDayChange={handleDayChangeEnd}
                    inputProps={{ readOnly: true }}
                />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <span>Latitude</span>
                <select value={lat} onChange={(e) => updateFilter(e, "latitude")} className="form-control">
                    {latFilters.map((l, i) => {
                        return <option key={`lat${i}`} value={l}>{l} deg</option>
                    })}
                </select>
            </div>
            <div className="col">
                <span>Longitude</span>
                <select value={long} onChange={(e) => updateFilter(e, "longitude")} className="form-control">
                    {longFilters.map((l, i) => {
                        return <option key={`long${i}`} value={l}>{l} deg</option>
                    })}
                </select>
            </div>
                <div className="col">
                    <span>Max Radius</span>
                    <select value={maxRadius} onChange={(e) => updateFilter(e, "maxRadius")} className="form-control">
                        {maxRadiusFilters.map((m, i) => {
                            return <option key={`maxradius${i}`} value={m}>{m} km</option>
                        })}
                    </select>
                </div>
            <div className="col">
                    <span>Min Magnitude</span>
                    <select value={magnitude} onChange={(e) => updateFilter(e, "magnitude")} className="form-control">
                    {minMagFilters.map((mag, i) => {
                        return <option key={`minmag${i}`} value={mag}>{mag}</option>
                    })}
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filters;
