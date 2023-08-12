import Brand from "./Brand";
import Assets from "../../../../assets";

const Brands = () => {
  const brands: { title: string; image: any; colorHex: string }[] = [
    {
      title: "Vanilla",
      image: Assets.Vanilla,
      colorHex: "#DCCEAC",
    },
    {
      title: "Full Cream Milk",
      image: Assets.FullCream,
      colorHex: "#F8F8F8",
    },
    {
      title: "Strawberry",
      image: Assets.Strawberry,
      colorHex: "#E89AAA",
    },
    {
      title: "Sweetened",
      image: Assets.Sweetened,
      colorHex: "#E2DCC8",
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
