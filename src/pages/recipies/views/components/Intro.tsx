import Assets from "../../../../assets";

const Intro = () => {
  return (
    <div className="my-28 md:mx-32 mx-5">
      <div className="flex gap-10 items-center md:flex-nowrap flex-wrap justify-center">
        <div className="">
          <h1 className="text-primary text-5xl font-[400]">
            Goat Cheese Pasta Salad
          </h1>
          <div className="flex items-center gap-5 my-5">
            <button className="text-white bg-primary p-3 rounded-lg">
              Prep time: 20 min
            </button>
            <button className="text-white bg-[#E89AAA] p-3 rounded-lg">
              Prep time: 20 min
            </button>
          </div>
          <div className="flex items-center gap-5">
            <p>Share Recipe:</p>
            <div className="flex items-center gap-3">
              <button>
                <Assets.FaceBookIcon />
              </button>
              <button>
                <Assets.TwitterIcon />
              </button>
              <button>
                <Assets.ColoredEmailIcon />
              </button>
            </div>
          </div>
        </div>
        <img src={Assets.RecipeVideoThumbnail} alt="" />
      </div>
    </div>
  );
};

export default Intro;
