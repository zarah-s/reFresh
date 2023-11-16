import Brand from "./Brand";
import Assets from "../../../../assets";

const Brands = () => {
  const brands: {
    title: string;
    image: any;
    colorHex: string;
    content: string;
  }[] = [
    {
      title: "Vanilla",
      image: Assets.Vanilla,
      colorHex: "#DCCEAC",
      content:
        "How refreshing! reFresh Vanilla yoghurt 500ml and 200ml are available to make you feel good, fresh, and alive. reFresh VANILLA YOGHURT contains essential vitamins and nutrients the body needs to stay strong and healthy. It is made from Cow milk which is high in protein that boosts hormones and metabolism. Treat your taste buds with reFresh Vanilla Yoghurt. Need to spice up your breakfast? Enjoy Refresh with your favourite cereals or nuts.",
    },
    {
      title: "Full Cream Milk",
      image: Assets.FullCream,
      colorHex: "#F8F8F8",
      content:
        "Feel refreshed with our reFresh sweetened yoghurt 500ML size. reFresh sweetened yoghurt is a deliciously rich, creamy, and healthy snack, made from Cow’s milk. It contains ingredients to keep you healthy and it is irresistible when consumed with meals. Drink reFresh, Feel Refreshed",
    },
    {
      title: "Strawberry",
      image: Assets.Strawberry,
      colorHex: "#E89AAA",
      content:
        "Take your taste buds on a delicious adventure, drink reFresh Strawberry yoghurt. The 500ML size takes your taste bud on a satisfactory adventure. It creates an unforgettable experience when complemented with a delicious cereal, nuts, meal. It always leaves you wanting more. reFresh Strawberry yoghurt contains minerals and vitamins that keep your body healthy while pleasing your taste buds.",
    },
    {
      title: "Sweetened",
      image: Assets.Sweetened,
      colorHex: "#E2DCC8",
      content:
        "Whether enjoyed as a quick and easy breakfast in your coffee,cereal or tea or as baking recipes for a richer and creamier flavor, our full cream milk is a delicious and nutritious beverage that can be enjoyed by people of all ages. It comes in 500ml bottle.",
    },
  ];
  return (
    <div id="brands" className="my-20">
      <div className="">
        <h1 className="text-primary text-3xl text-center font-[400]">
          Our Assortments
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <p className="text-[#2D2D2D] text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  mt-20">
        <Brand brand={brands[0]} delay={0.2} />
        <Brand brand={brands[1]} delay={1.2} />
        <Brand brand={brands[2]} delay={0.9} />
        <Brand brand={brands[3]} delay={0.5} />
      </div>
    </div>
  );
};

export default Brands;
