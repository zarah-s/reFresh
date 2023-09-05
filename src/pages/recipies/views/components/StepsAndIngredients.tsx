import { Recipe } from "../../../../App";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
interface Props {
  recipe: Recipe | null;
}
const StepsAndIngredients = ({ recipe }: Props) => {
  return (
    <div className="md:mx-20 mx-5">
      <div className="flex gap-20 md:flex-nowrap flex-wrap items-center justify-between">
        <div className="w-full">
          <h1 className="text-3xl font-[400] text-primary">Ingredients</h1>
          <h1 className="text-4xl font-[500] text-[#398796]">
            {recipe?.title}
          </h1>
          <small className="text-[#1F1F1F]">{recipe?.description}</small>
          <Ingredients ingredients={recipe?.ingredients ?? []} />
        </div>

        <div className="w-full">
          <h1 className="text-3xl font-[400] text-primary">How to make it</h1>

          <Steps steps={recipe?.steps ?? ""} />
        </div>
      </div>
    </div>
  );
};

export default StepsAndIngredients;
