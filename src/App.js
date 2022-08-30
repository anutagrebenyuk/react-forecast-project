import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather app</h1>
      <button className="btn btn-primary mt-5">HH</button>
      <p>
        {" "}
        This site is coded by Hanna Hrebeniuk and is{" "}
        <a href="https://github.com/anutagrebenyuk/react-forecast-project">
          open-sourced
        </a>{" "}
        on GitHub
      </p>
    </div>
  );
}
