interface Props {
  ingredients: string[];
}
const Ingredients = ({ ingredients }: Props) => {
  return (
    <ul className="my-10 bg-[#EFFFFF] p-5 rounded-lg">
      {ingredients.map((mp, index) => {
        return (
          <li key={index} className=" list-disc my-5 text-[#1F1F1F] text-xs">
            {mp}
          </li>
        );
      })}
    </ul>
  );
};

export default Ingredients;
