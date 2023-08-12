const Intro = () => {
  return (
    <div className="faq-bg py-10 md:h-[80vh]  w-full mt-20">
      <div className="">
        <div className="flex items-center justify-center flex-col mt-20">
          <h1 className="text-primary text-5xl font-medium">FAQs</h1>
          <p className="text-primary md:w-1/2 sm:mx-5 xs:mx-5 text-center mt-2">
            Do you have a few questions? Below are some of our frequently asked
            questions.If you are still unsure if Farmfresh is right for you can
            contact us here
          </p>
          <button className="bg-primary md:w-1/4 p-3 mt-10 text-white rounded-lg ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
