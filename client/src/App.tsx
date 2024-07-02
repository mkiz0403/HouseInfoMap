import "./App.css";
import HouseMap from "./map/Map";
import { useState } from "react";
import houseData from "./data/houseInfoxlsx.json";
import houseData2 from "./data/houseData2.json";

function App() {
  const [selectedAddress] = useState<string>("");
  const places = houseData;
  const places2 = houseData2;

  return (
    <>
      <HouseMap
        places={places}
        places2={places2}
        selectedAddress={selectedAddress}
      />
    </>
  );
}

export default App;
