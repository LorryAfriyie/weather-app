import { Header } from "./components/header.tsx";
import { ErrorIcon } from "./components/svg.tsx";
import WeatherDashboard from "./components/weatherDashboard";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <NoConnectionMsg />
      {/*<WeatherDashboard />*/}
    </div>
  );
}

function NoConnectionMsg() {
  return (
    <div className={"connection-container"}>
      <ErrorIcon />
      <h2>Something went wrong</h2>
      <p>
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>

      <button>Retry</button>
    </div>
  );
}
export default App;
