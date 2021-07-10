import Container from "./Components/Container";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div id="wrapper">
      <Navbar />
    <br />
      <br />
      <br />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Dashboard />
          <div className="container-fluid">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}
