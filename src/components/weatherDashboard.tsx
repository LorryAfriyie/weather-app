import axios from "axios";
import { useEffect } from "react";

const WeatherDashboard = () => {
  useEffect(() => {
    async function example() {
      try {
        await axios
          .get(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true",
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally();
      } catch (e) {
        console.error(e);
      }
    }

    example();
  }, []);
  return (
    <section className="weather-dashboard">
      <h1>How's the sky looking today?</h1>

      <div className="input-container">
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
