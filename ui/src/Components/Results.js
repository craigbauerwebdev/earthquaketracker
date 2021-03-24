import {getDateString} from "../utils/getDateString";

const Results = ({data}) => {
  console.log("Data: ", data);
  const getResults = (data) => {
    return data.map(quake => {
      return (
        <tr key={quake.id}>
          <td>{quake?.properties.mag}</td>
          <td>{quake?.properties.place}</td>
          <td>{getDateString(quake.properties.time)}</td>
        </tr>
      );
    })
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
