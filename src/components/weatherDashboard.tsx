const WeatherDashboard = () => {
  return (
    <section className="weather-dashboard">
      <h1>How's the sky looking today?</h1>

      <div className="input-container">
        <input
          type="text"
          className="search-input"
          id={"search-input"}
          name={"search-input"}
        />
        <button className={"search-btn"} id={"search-btn"} name={"search-btn"}>
          Search
        </button>
      </div>
    </section>
  );
};

export default WeatherDashboard;
