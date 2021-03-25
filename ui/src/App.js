import axios from 'axios';
import Filters from "./Components/Filters";
import { formatMag } from "./utils/formatMag";
import React, {useEffect, useState} from "react";
import Results from "./Components/Results";

const App = () => {
  const [data, setData] = useState(null);
  const [placesFilters, setPlacesFilters] = useState(null);
  const [minMagFilters, setMinMagFilters] = useState([]);

  const [magnitude, setMagnitude] = useState(1);
  const [places, setPlaces] = useState(null);

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
    //if (magnitude) {
    axios.get(`/getfiltereddata/${magnitude}`)
      .then(res => {
        setData(res.data);
        //getFilters(res.data);
      });
  }, [
    magnitude, 
    setMagnitude,
    places,
    setPlaces
  ]);

  const updateFilter = (e, filterType) => {
    console.log(e.target.value, filterType);
    if (filterType === "places") {
      setPlaces(e.target.value);
    }
    if (filterType === "magnitude") {
      setMagnitude(e.target.value);
    }
  }

  console.log("Places: ", places);

  const getFilters = (data) => {
    //console.log(data);
    if (data) {
      let places = data?.features.map((quake) => {
        if (quake?.properties.place) {
          return quake?.properties.place;
        }
        return null;
      })
      let mags = data?.features.map((quake) => {
        if (quake?.properties.mag) {
          return formatMag(quake?.properties.mag);
        }
        return null;
      })
      setMinMagFilters([...new Set(mags)]);
      setPlacesFilters([...new Set(places)]);
    }
  }

  //console.log(placesFilters);

  return data && placesFilters && minMagFilters ? (
    <div className="base">
      <h1>Earthquake Tracker</h1>
      <Filters 
        data={data.features} 
        minMagFilters={minMagFilters} 
        placesFilters={placesFilters}
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
