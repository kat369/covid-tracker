const tabletListHeader = [
  'Area',
  'Active',
  'Confirmed',
  'Recovered',
  'Home Obs',
  'Hospital Obs',
  'Total Obs',
];

function ListView({ data }) {
  if (data.length === 0) {
    return <p>no data</p>
  }
  return (
    <div className="body_list">
      <table className="table table-striped">
        <thead>
          <tr>
            {tabletListHeader.map((thContent) => {
              return (
                <th key={thContent} scope="col">
                  {thContent}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((datum) => (
            <tr key={datum.area}>
              <td>{datum.area}</td>
              <td>{datum.active}</td>
              <td>{datum.confirmed}</td>
              <td>{datum.recovered}</td>
              <td>{datum.home_obs}</td>
              <td>{datum.hospital_obs}</td>
              <td>{datum.total_obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListView;
