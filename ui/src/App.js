import axios from 'axios';
import Filters from "./Components/Filters";
import ErrorBoundary from "./Components/GeneralPurpose/ErrorBoundary"
import { formatMag } from "./utils/formatMag";
import { formatDate } from "./utils/formatDate";
import {
  latitudeFilters,
  longitudeFilters,
  maxRadiusFilters,
} from "././utils/getFilters";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setMinMag,
  setMaxRadius,
  setLatitude,
  setLongitude,
  setStartTime,
  setEndTime,
  setEndIndex,
  setMinMagFilters,
} from "./store/actions";
import Loader from "./Components/GeneralPurpose/Loader";
import React, {/* useCallback, */ useEffect/* , useState */} from "react";
import ResultsData from "./Components/ResultsData";
import Results from "./Components/Results";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const minMagFilters = useSelector(state => state.minMagFilters);
  const lat = useSelector(state => state.latitude);
  const long = useSelector(state => state.longitude);
  const endIndex = useSelector(state => state.endIndex);
  const magnitude = useSelector(state => state.minMag);
  const maxRadius = useSelector(state => state.maxRadius);
  const start = useSelector(state => state.start);
  const end = useSelector(state => state.end);

  // Get all data on load for creating filters
  useEffect(() => {
    const getFilters = (data) => {
      if (data) {
        let mags = data?.features.map((quake) => {
          if (quake?.properties.mag && quake?.properties.mag > 0) {
            return formatMag(quake?.properties.mag);
          }
          return null;
        })
        dispatch(setMinMagFilters([...new Set(mags.sort())]));
      }
    }
    axios.get("/getalldata")
      .then(res => {
        dispatch(setData(res.data))
        getFilters(res.data);
      })
      .catch(function (error) {
        alert(error);
      });
  }, [dispatch]);

  // get filtered data based on user input //     /${start}/${end}
  useEffect(() => {
      dispatch(setData([]));
      dispatch(setEndIndex(20));
    axios.get(`/getfiltereddata/${magnitude}/${long}/${lat}/${maxRadius}/${start}/${end}`)
        .then(res => {
          dispatch(setData(res.data));
        })
        .catch(function (error) {
          alert(error);
        });
  }, [ 
    dispatch,
    magnitude,
    lat,
    long,
    maxRadius,
    start,
    end,
  ]);

  const updateEndIndex = () => {
    dispatch(setEndIndex(endIndex + 20));
  }

  const handleStart = (day) => {
    //setStart(formatDate(day));
    dispatch(setStartTime(formatDate(day)));
  }

  const handleEnd = (day) => {
    //setEnd(formatDate(day));
    dispatch(setEndTime(formatDate(day)));
  }

  const updateFilter = (e, filterType) => {
    if (filterType === "magnitude") {
      //setMagnitude(e.target.value);
      dispatch(setMinMag(e.target.value));
    }
    if (filterType === "latitude") {
      dispatch(setLatitude(e.target.value));
    }
    if (filterType === "longitude") {
      dispatch(setLongitude(e.target.value));
    }
    if (filterType === "maxRadius") {
      //setMaxRadius(e.target.value);
      dispatch(setMaxRadius(e.target.value));
    }
  }

  return data ? (
    <div className="base">
      <h1>Earthquake Tracker</h1>
      <ErrorBoundary>
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
      </ErrorBoundary>

      <ErrorBoundary>
        <ResultsData 
          data={data?.features} 
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <Results 
          data={data?.features} 
          updateEndIndex={updateEndIndex} 
          endIndex={endIndex} 
        />
      </ErrorBoundary>
    </div>
  ) : ( 
    <Loader />  
  );
}

export default App;
