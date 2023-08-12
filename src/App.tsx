import { Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./pages/home/views/HomeScreen";
import { useEffect } from "react";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";
import FaqScreen from "./pages/faq/views/FaqScreen";
import RecipiesScreen from "./pages/recipies/views/RecipiesScreen";

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
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={RoutesPath.about} element={<AboutScreen />} />
      <Route path={RoutesPath.faq} element={<FaqScreen />} />
      <Route path={RoutesPath.recipies} element={<RecipiesScreen />} />
    </Routes>
  );
};

export default App;
