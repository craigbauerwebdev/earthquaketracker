import axios from 'axios';
import React, {useEffect, useState} from "react";
import Results from "./Components/Results";

const App = () => {
  const [data, setData] = useState(null);

  // Get all data
  useEffect(() => {
    axios.get("/getfilteredquakes")
      .then(res => {
        setData(res.data)
      });
  }, []);

  return data ? (
    <div className="base">
      <h1>Earthquake Tracker</h1>
      {/* <ResultsData /> */}
      {data?.features && <h3>Quakes Found: {data?.features.length}</h3>}
      {/* <Filters /> */}
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
