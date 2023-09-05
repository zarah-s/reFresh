import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { Recipe } from "../../../../App";
import Assets from "../../../../assets";
interface Props {
  recipe: Recipe | null;
}
const Intro = ({ recipe }: Props) => {
  return (
    <div className="my-28 md:mx-32 mx-5">
      <div className="flex gap-10 items-center md:flex-nowrap flex-wrap justify-center">
        <div className="">
          <h1 className="text-primary text-5xl font-[400]">{recipe?.title}</h1>
          <div className="flex items-center gap-5 my-5">
            <button className="text-white bg-primary p-3 rounded-lg">
              Prep time: {recipe?.duration} min
            </button>
            <button className="text-white bg-[#E89AAA] p-3 rounded-lg">
              Prep time: {recipe?.duration} min
            </button>
          </div>
          <div className="flex items-center gap-5">
            <p>Share Recipe:</p>
            <div className="flex items-center gap-3">
              <FacebookShareButton url={recipe?.videoUrl ?? ""}>
                <Assets.FaceBookIcon />
              </FacebookShareButton>
              <TwitterShareButton url={recipe?.videoUrl ?? ""}>
                <Assets.TwitterIcon />
              </TwitterShareButton>
              <EmailShareButton url={recipe?.videoUrl ?? ""}>
                <Assets.ColoredEmailIcon />
              </EmailShareButton>
            </div>
          </div>
        </div>
        <img src={Assets.RecipeVideoThumbnail} alt="" />
      </div>
    </div>
  );
};

export default Intro;
