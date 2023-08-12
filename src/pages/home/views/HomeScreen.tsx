import NavBar from "../../../common/components/nav/NavBar";
import Assets from "../../../assets";
import Brands from "./components/Brands";
import Recipies from "./components/Recipies";
import About from "./components/About";
import Footer from "../../../common/components/footer/Footer";

const HomeScreen = () => {
  return (
    <div className="">
      <NavBar activeTab="Home" />
      <div className="mt-24">
        <img src={Assets.HomeBG} className="w-full" alt="" />
      </div>

      <Brands />
      <div className="">
        <img
          src={Assets.Grid}
          className="h-[80vh] w-full object-cover"
          alt=""
        />
      </div>
      <Recipies />
      <About />
      <Footer />
    </div>
  );
};

export default HomeScreen;
