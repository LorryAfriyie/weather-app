import { Header } from "./components/header.tsx";
import WeatherDashboard from "./components/weatherDashboard";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <WeatherDashboard />
    </div>
  );
}

export default App;
