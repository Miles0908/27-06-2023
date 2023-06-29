import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Contacts from "./components/Contacts";

import ProductSection from "./components/ProductSection/ProductSection";

function App() {
  const [productSection, setProductSection] = useState("");


  const onRender = () => {
    switch (productSection) {
      case "contacts":
        return <Contacts />;
      case "":
        return (
          <>
            <ProductList name="rum" setProductSection={setProductSection} />
            <ProductList name="vodka" setProductSection={setProductSection} />
            <ProductList name="gin" setProductSection={setProductSection} />
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
