import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <>
      <main>
        <form action={addIngredients} className="input-container">
          <input
            type="text"
            placeholder="e.g. oregano"
            className="input-box"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button className="input-btn">+ Add ingredient</button>
        </form>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
        )}
        {recipe && <ClaudeRecipe recipe={recipe} />}
      </main>
    </>
  );
}
