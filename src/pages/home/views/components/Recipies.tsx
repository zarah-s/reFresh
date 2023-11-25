import { useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Assets from "../../../../assets";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../../../constants/Routes";
import { Recipe } from "../../../../App";
interface Props {
  title?: string;
  subtitle?: string;
  recipes: Recipe[];
}
const Recipies = ({ subtitle, title, recipes }: Props) => {
  const splideRef = useRef<Splide | null>(null); // Add TypeScript type annotation
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleScreenWidthChange = () => {
    setScreenWidth(window.innerWidth);
    // Perform any actions or updates based on the screen width change
  };

  useEffect(() => {
    // Event listener for screen resize
    window.addEventListener("resize", handleScreenWidthChange);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("resize", handleScreenWidthChange);
    };
  }, []);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      const interval = setInterval(() => {
        splideInstance?.go("+1");
      }, 4000); // Adjust the interval (in milliseconds) as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  return (
    <div id="recipies" className="md:m-20 sm:my-20 xs:my-20">
      <h1 className="text-3xl text-primary text-center font-semibold">
        {title ?? "Recipies"}
      </h1>
      <p className="text-center">
        {subtitle ?? "Get the latest news about our products"}
      </p>
      <div className="my-10"></div>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage: screenWidth >= 576 ? 5 : 2,
          pagination: false,
          gap: "10px",
        }}
        aria-label=""
      >
        {recipes.map((item, _) => {
          return (
            <SplideSlide key={item._id} className="mx-3">
              <div className="recipe-card">
                <img
                  src={item.imageUrl}
                  className="rounded-xl w-full xxl:h-96 h-64 object-cover"
                  alt=""
                />
                <div className="recipe-content bg-primary">
                  <p className="text-sm text-white">{item.description}</p>
                  <button
                    onClick={() => {
                      navigate(RoutesPath.recipies, { state: item });
                    }}
                    className="bg-white shadow-lg text-primary w-full rounded-lg p-2 text-sm mt-3"
                  >
                    View
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Recipies;
