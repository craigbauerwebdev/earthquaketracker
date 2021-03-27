import { getMeanMagnitude } from "../utils/getMeanMagnitude"

const ResultsData = ({data}) => {
 
  return (
    <div className="results-data">
          <h3>
              Quakes Found: 
              {data && data.length}
              {!data && <span> ...</span>}
          </h3>
          <h3>
              Mean Magnitude:
              {data && getMeanMagnitude()}
              {!data && <span> ...</span>}
          </h3>
          <h3>
              Max Magnitude:
              {data && data.length}
              {!data && <span> ...</span>}
          </h3>
    </div>
  )
}

export default ResultsData;
