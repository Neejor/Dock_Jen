import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Specialty1 from "./components/Specialty1";
import Specialty2 from "./components/Specialty2";
import Menu from "./components/Menu";
import Team from "./components/Team";
import CarouselD from "./components/Carousel";
import FormD from "./components/Form";
import Additional from "./components/Additional";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Specialty1 />
      <Specialty2 />
      <Menu />
      <Team />
      <CarouselD />
      <FormD />
      <Additional />
    </div>
  );
}

export default App;
