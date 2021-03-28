import { getMeanMagnitude } from "../utils/getMeanMagnitude";
import { getMaxMagnitude } from "../utils/getMaxMagnitude";

const ResultsData = ({data}) => {
 
  return (
    <div className="results-data">
          <h3>
              Quakes Found:{" "}
              {data && data.length}
              {!data && <span> ...</span>}
          </h3>
          <h3>
              Mean Magnitude:{" "}
              {data && data.length && getMeanMagnitude(data)}
              {!data && <span> ...</span>}
          </h3>
          <h3>
              Max Magnitude:{" "}
              {data && data.length && getMaxMagnitude(data)}
              {!data && <span> ...</span>}
          </h3>
    </div>
  )
}

export default ResultsData;
