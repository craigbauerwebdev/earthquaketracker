import axios from 'axios';
import Filters from "./Components/Filters";
import { formatMag } from "./utils/formatMag";
import React, {/* useCallback, */ useEffect, useState} from "react";
import Results from "./Components/Results";

const App = () => {
  const [data, setData] = useState(null);
  //const [placesFilters, setPlacesFilters] = useState(null);
  const [minMagFilters, setMinMagFilters] = useState([]);

  const [magnitude, setMagnitude] = useState("1");
  const [long, setLong] = useState("100");
  const [lat, setLat] = useState("37");
  const [maxRadius, setMaxRadius] = useState("2000");

  //const [places, setPlaces] = useState(null);

  // Get all data on load for creating filters
  useEffect(() => {
    axios.get("/getalldata")
      .then(res => {
        setData(res.data);
        getFilters(res.data);
      });
  }, []);

  // get filtered data based on user input
  useEffect(() => {
    if (magnitude) {
      console.log("Magnitude: ", magnitude);
      axios.get(`/getfiltereddata/${magnitude}/${long}/${lat}/${maxRadius}`) ///${long}/${lat}/${maxRadius}
        .then(res => {
          setData(res.data);
        });
    }
  }, [
    magnitude, 
    setMagnitude,
    lat,
    long,
    maxRadius,
  ]);

  const updateFilter = (e, filterType) => {
    //console.log(e.target.value, filterType);
    if (filterType === "magnitude") {
      setMagnitude(e.target.value);
    }
    /* if (filterType === "search") {
      setPlaces(e.target.value);
    } */
  }

  const getFilters = (data) => {
    if (data) {
      let mags = data?.features.map((quake) => {
        if (quake?.properties.mag && quake?.properties.mag > 0) {
          return formatMag(quake?.properties.mag);
        }
        return null;
      })
      setMinMagFilters([...new Set(mags.sort())]);
      //setPlacesFilters([...new Set(places)]);
    }
  }

  //console.log(placesFilters);

  return data && minMagFilters ? (
    <div className="base">
      <h1>Earthquake Tracker</h1>
      <Filters 
        data={data.features} 
        minMagFilters={minMagFilters} 
        //placesFilters={placesFilters}
        updateFilter={updateFilter} />
      {/* <ResultsData /> */}
      {data?.features && <h3>Quakes Found: {data?.features.length}</h3>}
      <Results data={data?.features} />
    </div>
  ) : (  
    <div className="loading-screen">
      <div className="loader-wrap center">
        <div className="loader"></div>
        <p>Just a second</p>
      </div>
    </div> 
  );
}

export default App;
