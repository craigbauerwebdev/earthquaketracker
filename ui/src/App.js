import axios from 'axios';
import Filters from "./Components/Filters";
import { formatMag } from "./utils/formatMag";
import { formatDate } from "./utils/formatDate";
import {
  latitudeFilters,
  longitudeFilters,
  maxRadiusFilters,
} from "././utils/getFilters";
import Loader from "./Components/GeneralPurpose/Loader";
import React, {/* useCallback, */ useEffect, useState} from "react";
import ResultsData from "./Components/ResultsData";
import Results from "./Components/Results";

const App = () => {
  const [data, setData] = useState(null);
  const [minMagFilters, setMinMagFilters] = useState([]);
  const [magnitude, setMagnitude] = useState("1");
  const [long, setLong] = useState("0");
  const [lat, setLat] = useState("0");
  const [maxRadius, setMaxRadius] = useState("20000");
  const [endIndex, setEndIndex] = useState(20);
  const [start, setStart] =useState("1970-1-1");
  const [end, setEnd] = useState(formatDate(new Date()));

  // Get all data on load for creating filters
  useEffect(() => {
    axios.get("/getalldata")
      .then(res => {
        setData(res.data);
        getFilters(res.data);
      });
  }, []);

  // get filtered data based on user input //     /${start}/${end}
  useEffect(() => {
      setData([]);
      setEndIndex(10);
    axios.get(`/getfiltereddata/${magnitude}/${long}/${lat}/${maxRadius}/${start}/${end}`)
        .then(res => {
          setData(res.data);
        });
  }, [ 
    setMagnitude,
    setLong,
    setLat,
    setMaxRadius,
    setStart,
    setEnd,
    magnitude,
    lat,
    long,
    maxRadius,
    start,
    end,
  ]);

  const updateEndIndex = () => {
    setEndIndex(endIndex + 20);
  }

  const handleStart = (day) => {
    setStart(formatDate(day));
  }

  const handleEnd = (day) => {
    setEnd(formatDate(day));
  }

  const updateFilter = (e, filterType) => {
    if (filterType === "magnitude") {
      setMagnitude(e.target.value);
    }
    if (filterType === "latitude") {
      setLat(e.target.value);
    }
    if (filterType === "longitude") {
      setLong(e.target.value);
    }
    if (filterType === "maxRadius") {
      setMaxRadius(e.target.value);
    }
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
    }
  }

  return data && minMagFilters ? (
    <div className="base">
      <h1>Earthquake Tracker</h1>
      <Filters 
        data={data.features} 
        minMagFilters={minMagFilters} 
        latFilters={latitudeFilters}
        longFilters={longitudeFilters}
        maxRadiusFilters={maxRadiusFilters}
        magnitude={magnitude}
        lat={lat}
        long={long}
        maxRadius={maxRadius}
        updateFilter={updateFilter}
        handleStart={handleStart}
        handleEnd={handleEnd}
      />
      <ResultsData 
        data={data?.features} 
      />
      <Results 
        data={data?.features} 
        updateEndIndex={updateEndIndex} 
        endIndex={endIndex} 
      />
    </div>
  ) : ( 
    <Loader />  
  );
}

export default App;
