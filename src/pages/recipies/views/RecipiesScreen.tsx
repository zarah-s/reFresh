import NavBar from "../../../common/components/nav/NavBar";
import Footer from "../../../common/components/footer/Footer";
import Intro from "./components/Intro";
import StepsAndIngredients from "./components/StepsAndIngredients";
import Recipies from "../../home/views/components/Recipies";
import { Recipe } from "../../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
interface Props {
  recipes: Recipe[];
}
const RecipiesScreen = ({ recipes }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  useEffect(() => {
    const state = location.state;
    if (!state) {
      navigate(-1);
    } else {
      setRecipe(state);
    }
  }, []);
  return (
    <div>
      <div className="w-screen">
        <NavBar activeTab="Recipies" />
      </div>

      <Intro recipe={recipe} />

      <StepsAndIngredients recipe={recipe} />
      <Recipies recipes={recipes} title="Keep on cooking" />
      <Footer />
    </div>
  );
};

export default RecipiesScreen;
