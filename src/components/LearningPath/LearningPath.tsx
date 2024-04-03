const LearningPath = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-10 md:p-20">
      <div>
        <div>
          <h1 className="text-2xl md:text-4xl font-medium text-slate-600 text-center">
            Learning path based on your answer
          </h1>
          <p className="text-center my-4">
            choose one to get started , you can switch anytime
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 p-10">
          {/* first card */}
          <div
            className="flex-1 w-full md:w-1/2 relative flex border p-8 justify-center items-center gap-4 cursor-pointer
           rounded"
          >
            <div className="px-2 py-1 uppercase font-medium text-sm text-center absolute -top-4 left-1/4  bg-orange-500 rounded-xl text-white">
              Most popular
            </div>
            <p className="w-full text-start">
              <span className="font-medium">Foundational Math </span>
              build your foundation skills in algebra,geometry and probability
            </p>
            <div className="w-64">
              <img
                src="https://assets-global.website-files.com/6421c69c26daff7aacff565e/64ca82b4f761fa41533ea81f_Why%20is%20math%20so%20hard%3F.webp"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          {/* second card */}
          <div className="flex flex-1 border p-8 justify-center items-center gap-4 w-full cursor-pointer rounded ">
            <p className="w-full text-start">
              <span className="font-medium">Foundational Math </span>
              build your foundation skills in algebra,geometry and probability
            </p>
            <div className="w-64">
              <img
                src="https://assets-global.website-files.com/6421c69c26daff7aacff565e/64ca82b4f761fa41533ea81f_Why%20is%20math%20so%20hard%3F.webp"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
