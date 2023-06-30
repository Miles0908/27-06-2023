import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Contacts from "./components/Contacts";
import Filters from "./components/Filters/Filters";

import ProductSection from "./components/ProductSection/ProductSection";

function App() {
  const [productSection, setProductSection] = useState("");

  const [rum, setRum] = useState(true);
  const [vodka, setVodka] = useState(true);
  const [gin, setGin] = useState(true);

  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return (
          <div className="App__contacts">
           
            <Contacts />
          </div>
        );
      case "":
        return (
          <>
           
            <Filters
              rum={rum}
              vodka={vodka}
              gin={gin}
              setRum={setRum}
              setVodka={setVodka}
              setGin={setGin}
            />
            {rum && (
              <ProductList name="Rum" setProductSection={setProductSection} />
            )}
            {vodka && (
              <ProductList name="Vodka" setProductSection={setProductSection} />
            )}
            {gin && (
              <ProductList name="Gin" setProductSection={setProductSection} />
            )}
          </>
        );
      default:
        return (
          <ProductSection
            productSection={productSection}
            setProductSection={setProductSection}
          />
        );
    }
  };
  return (
    <div className="App">
      <ul>
        <li onClick={() => setProductSection("")}>Home</li>
        <li onClick={() => setProductSection("contacts")}>Contacts</li>
      </ul>

      {onRender()}
    </div>
  );
}

export default App;
