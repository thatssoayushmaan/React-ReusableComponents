import Container from "./Components/Container";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div id="wrapper">
      <Dashboard />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}
