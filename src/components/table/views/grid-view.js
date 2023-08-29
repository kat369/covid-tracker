function GridView({ data }) {
  if (data.length === 0) {
    return <p>no data</p>
  }
  return (
    <div className="card-container">
      {data.map((datum) => (
        <div className="card" key={datum.area}>
          <h2 className="card-header">{datum.area}</h2>
          <div className="card-body">
            <h4 className="card-title">Active Cases : {datum.active}</h4>
            <div>
              <span>Confirmed:</span>{datum.confirmed}
              <span>Recovered:</span>{datum.recovered}
            </div>
            <div>
              <span>Home-obs:</span>{datum.home_obs}
              <span>Hospital-obs:</span>{datum.hospital_obs}
            </div>
            <span>Total-obs:</span>{datum.total_obs}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridView;
