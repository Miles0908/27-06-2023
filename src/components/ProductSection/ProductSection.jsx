import "./index.css";
import { useState, useEffect } from "react";
import { GET } from "../utils/http";


const ProductSection = ({ productSection, setProductSection }) => {
  const [productData, setProductData] = useState({});
  useEffect(() => {
    GET("?s=" + productSection).then((data) => setProductData(data.drinks[0]));
  }, []);

  console.log(productData);
  const onHandleClick = () => setProductSection("");

  return (
    <div className="ProductSection">
      <img src={productData.strDrinkThumb} alt={productData.strDrink} />
      <div className="ProductSection__text">
        <div className="ProductSection__text--heading">
          <h1>{productData.strDrink}</h1>
          <p>{productData.strAlcoholic}</p>
          <p>{productData.strCategory}</p>
        </div>
        <p>❤️</p>
      </div>
      <ul className="ProductSection__ingredients">
        {Array.from({ length: 15 }, (_, i) => {
          const ingredient = productData[`strIngredient${i + 1}`];
          if (ingredient) {
            return <li key={i}>{ingredient}</li>;
          }
          return null;
        })}
      </ul>
      <p className="ProductSection__instruct">
        <b>{productData.strInstructionsIT}</b>
      </p>
      <button className="ProductSection__close--button" onClick={onHandleClick}>
        ❌
      </button>
    </div>
  );
};
export default ProductSection;
