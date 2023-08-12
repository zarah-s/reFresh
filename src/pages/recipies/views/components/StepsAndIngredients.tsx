import Ingredients from "./Ingredients";
import Steps from "./Steps";

const StepsAndIngredients = () => {
  return (
    <div className="md:mx-20 mx-5">
      <div className="flex gap-20 md:flex-nowrap flex-wrap items-center justify-between">
        <div className="">
          <h1 className="text-3xl font-[400] text-primary">Ingredients</h1>
          <h1 className="text-4xl font-[500] text-[#398796]">
            Goat Cheese Pasta salad
          </h1>
          <small className="text-[#1F1F1F]">
            Do you have a few questions? Below are some of our frequently asked
            questions.If you are still unsure if Farmfresh is right for you can
            contact us here
          </small>
          <Ingredients />
        </div>

        <div className="">
          <h1 className="text-3xl font-[400] text-primary">How to make it</h1>

          <Steps />
        </div>
      </div>
    </div>
  );
};

export default StepsAndIngredients;
