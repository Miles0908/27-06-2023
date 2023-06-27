import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList"

import ProductSection from "./components/ProductSection/ProductSection";


function App() {
  const [productSection, setProductSection] = useState("");
  return (
    <div className="App">
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList name="rum" setProductSection={setProductSection} />
          <ProductList name="vodka" setProductSection={setProductSection} />
          <ProductList name="gin" setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;
