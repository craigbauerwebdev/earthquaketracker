import {getDateString} from "../utils/getDateString";
import {formatMag} from "../utils/formatMag";

const Results = ({data}) => {
  console.log("Data: ", data);
  const getResults = (data) => {
    if (data) {
      return data.slice(0,100).map(quake => {
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
        <td>No Earthquages Matchd Your Search</td>
      </tr>
    );
  }

  return (
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
  )
}

export default Results;
