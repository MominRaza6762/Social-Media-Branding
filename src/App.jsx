import { Route, Routes } from "react-router-dom";
import Navbar from "./BrandingComponents/Navbar/Navbar";
import { Home } from "./BrandingComponents/Home/Home";
import CreateYourChannelHero from './CreateYourChannel/CreateYourChannelHero/CreateYourChannelHero';
import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/createyourchannel" element={<CreateYourChannelHero />} />
      </Routes>
    </div>
  );
}

export default App;
