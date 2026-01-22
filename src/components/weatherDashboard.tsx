import { SearchIcon } from "./svg.tsx";

const WeatherDashboard = () => {
  return (
    <section className="weather-dashboard">
      <h1>How's the sky looking today?</h1>

      <div className="input-container">
        <SearchIcon />
        <input
          type="text"
          className="search-input"
          id={"search-input"}
          name={"search-input"}
          placeholder={"Search for a place..."}
        />
        <button className={"search-btn"} id={"search-btn"} name={"search-btn"}>
          Search
        </button>
      </div>
    </section>
  );
};

export default WeatherDashboard;
