import { Header } from "./components/header.tsx";
import { ErrorIcon, RetryIcon } from "./components/svg.tsx";
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

      <h2 className={"connection-error-header"}>Something went wrong</h2>

      <p className={"secondary-font-color connection-error-text"}>
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>

      <button className={"retry-btn"}>
        <span className="btn-content">
          <RetryIcon />
          <p>Retry</p>
        </span>
      </button>
    </div>
  );
}
export default App;
