import { useState } from "react";

const BurgerStack = ({ ingredients, handleRemoveIngredient }) => {

    return (
        <ul className="burgerstack">
        {ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => handleRemoveIngredient(index)}>X</button>
                </li>
            ))
        ) : (
            <li>No Ingredients</li>
        )}
        </ul>
    );
};
  
export default BurgerStack;
  