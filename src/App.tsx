import { Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./pages/home/views/HomeScreen";
import { useEffect, useState } from "react";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";
import FaqScreen from "./pages/faq/views/FaqScreen";
import RecipiesScreen from "./pages/recipies/views/RecipiesScreen";
import axios from "axios";
import { toast } from "react-toastify";
import Assets from "./assets";
export interface Recipe {
  _id: string;
  title: string;
  description: string;
  duration: number;
  ingredients: string[];
  videoUrl: string;
  imageUrl: string;
  category: string;
  steps: string;
}
const App = () => {
  const location = useLocation();

  const scrollToHash = (hash: string) => {
    const blogElement = document.getElementById(
      hash.split("").slice(1).join("")
    );
    if (blogElement) {
      window.scrollTo({
        behavior: "smooth",
        top: blogElement.offsetTop,
      });
    }
  };
  useEffect(() => {
    scrollToHash(location.hash);
  }, [location.hash]);

  const [recipies, setRecipies] = useState<Recipe[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const fetchRecipies = async () => {
    try {
      const response = await axios.get(
        "https://farmfresh-api.vercel.app/api/recipes/category?category=farmfresh"
      );
      console.log(response.data.data);
      setRecipies(response.data.data);
    } catch (error) {
      toast.error("Network error");
    }
  };

  useEffect(() => {
    fetchRecipies();
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <Routes>
        <Route index element={<HomeScreen recipes={recipies} />} />
        <Route path={RoutesPath.about} element={<AboutScreen />} />
        <Route path={RoutesPath.faq} element={<FaqScreen />} />
        <Route
          path={RoutesPath.recipies}
          element={<RecipiesScreen recipes={recipies} />}
        />
      </Routes>
      {isVisible ? (
        <div className="fixed bottom-10 right-5">
          <button
            onClick={scrollToTop}
            className="shadow-2xl rotate-180 p-3 bg-white rounded-full"
          >
            <Assets.Dropdown height={20} width={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
