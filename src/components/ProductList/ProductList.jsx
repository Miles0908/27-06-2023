import "./index.css";
import { useState, useEffect } from "react";
import ProductItem from "../productItem/ProductItem";

const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);
  const [inputCocktail, setInputCocktail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputCocktail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        inputCocktail
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks) {
          setListData(data.drinks);
          setErrorMessage("");
        } else {
          setListData([]);
          setErrorMessage("Cocktail non trovato.");
        }
      });
  };

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks));
  }, [name]);

  return (
    <div className="ProductList">
      <h2>{name}</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputCocktail}
          onChange={handleInputChange}
          placeholder="Cerca cocktail..."
        />
        <button type="submit">Cerca</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div className="ProductList__list">
        {listData.map((drink) => (
          <ProductItem
            data={drink}
            setProductSection={setProductSection}
            key={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
