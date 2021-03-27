import {getDateString} from "../utils/getDateString";
import {formatMag} from "../utils/formatMag";
import lodash from "lodash";
import Loader from "./GeneralPurpose/Loader";

const Results = ({
  data,
  endIndex,
  updateEndIndex
}) => {
  //console.log("Data: ", data);

  const getResults = (data) => {
    if (data) {
      if (lodash.isEmpty(data)) {
        return (
          <tr>
            <td className="loader" align="center" colSpan="3">
              No Earthquakes Found. Please adjust your search.
            </td>
          </tr>
        );
      }
      return data.slice(0, endIndex).map(quake => {
        return (
          <tr key={quake.id}>
            <td>{formatMag(quake?.properties.mag)}</td>
            <td>{quake?.properties.place}</td>
            <td>{getDateString(quake?.properties.time)}</td>
          </tr>
        );
      })
    }
    return (
      <tr>
        <td className="loader" align="center" colSpan="3"><Loader /></td>
      </tr>
    );
  }

  return data ? (
    <>
      <div className="results">
        <div className="quake">
          <table width="100%">
            <thead>
              <tr>
                <th colSpan="1" align="left" width="15%">MAG</th>
                <th colSpan="1" align="left" width="55%">PLACE</th>
                <th colSpan="1" align="left" width="30%">TIME</th>
              </tr>
            </thead>
            <tbody>
              {getResults(data)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Check end index with results length */}
      {endIndex < data.length &&
        <button onClick={updateEndIndex}>Load More</button>
      }
    </>
  ) : <p>Loading UI</p>
}

export default Results;
