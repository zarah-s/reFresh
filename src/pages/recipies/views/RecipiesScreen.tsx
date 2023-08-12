import NavBar from "../../../common/components/nav/NavBar";
import Footer from "../../../common/components/footer/Footer";
import Intro from "./components/Intro";
import StepsAndIngredients from "./components/StepsAndIngredients";
import Recipies from "../../home/views/components/Recipies";

const RecipiesScreen = () => {
  return (
    <div>
      <NavBar activeTab="Recipies" />
      <Intro />

      <StepsAndIngredients />
      <Recipies title="Keep on cooking" />
      <Footer />
    </div>
  );
};

export default RecipiesScreen;
