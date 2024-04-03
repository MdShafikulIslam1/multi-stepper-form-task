const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center p-10">
      <div className="w-16 h-16  rounded-full animate-spin border-[8px] border-dashed border-orange-500"></div>
      <p className="font-bold md:text-xl first-letter:uppercase">
        finding learning path recommendations for you based on your response
      </p>
    </div>
  );
};

export default LoadingSpinner;
