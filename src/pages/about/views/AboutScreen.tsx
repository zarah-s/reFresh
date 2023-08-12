import NavBar from "../../../common/components/nav/NavBar";
import Footer from "../../../common/components/footer/Footer";
import Carousel from "./components/Carousel";
import CatchPhrase from "./components/CatchPhrase";
import OurStory from "./components/OurStory";
import Company from "./components/Company";
import Brief from "./components/Brief";

const AboutScreen = () => {
  return (
    <div>
      <NavBar activeTab="About" />
      <div className="mt-20"></div>
      <Carousel />
      <CatchPhrase />

      <OurStory />

      <Brief />

      <Company />

      <Footer />
    </div>
  );
};

export default AboutScreen;
