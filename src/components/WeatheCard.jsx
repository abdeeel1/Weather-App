const WeatherCard = ({ name, icon, temp, description, humidity, wind }) => {
  return (
    <div
      className="card shadow-lg p-2 mx-auto mt-4 border-0"
      style={{
        width: "22rem",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #6dd5fa, #2980b9)",
        color: "white",
      }}
    >
      <h2 className="fw-bold mt-0">{name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
        className="mx-auto"
        style={{ width: "120px" }}
      />

      <h1 className="fw-bold">{temp}°C</h1>
      <p className="fst-italic mb-2 text-capitalize">{description}</p>

      <div
        className="d-flex justify-content-between px-3 py-2"
        style={{
          background: "rgba(235, 217, 217, 0.445)",
          borderRadius: "10px",
        }}
      >
        <p className="m-0">💧 Humidity: {humidity}%</p>
        <p className="m-0">🌬 Wind: {wind} km/h</p>

        
      </div>
      <p className="text-secondary mt-2">By : najibabdessamad10@gmail.com</p>
    </div>
  );
};

export default WeatherCard;
