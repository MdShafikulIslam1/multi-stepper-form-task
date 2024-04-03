import { useState } from "react";
import "./App.css";
import FormItem from "./components/formItem/FormItem";
import ImageTextPairing from "./components/formItem/ImageTextPairing/ImageTextPairing";
import LearningPath from "./components/LearningPath/LearningPath";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import {
  bestOptions,
  interestedOptions,
  mathematicianOptions,
} from "./constant";

interface IStateValue {
  describe: string;
  interested: string;
}

function App() {
  const formLength = [1, 2, 3, 4, 5];
  const [formNo, setFormNo] = useState(formLength[0]);
  const [stateValue, setStateValue] = useState<IStateValue>({
    describe: "",
    interested: "",
  });
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleItemClick = (index: number, title: string) => {
    setSelectedItem(index);
    setStateValue({
      ...stateValue,
      describe: title,
    });
  };
  const handleNextClick = () => {
    setFormNo((formNo) => formNo + 1);
  };

  const handlePrevClick = () => {
    setFormNo(formNo - 1);
  };

  const finalSubmit = () => {
    setIsShowSpinner(true);
    setTimeout(() => {
      setIsShowSpinner(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-w-full flex justify-center items-center">
      {isShowSpinner ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col items-center justify-center rounded-md shadow-sm bg-white p-5">
          {!isSubmitted && (
            <div className="flex justify-center items-center mb-4">
              {formLength.map((v, i) => (
                <>
                  <div
                    key={i}
                    className={`w-6 h-6 text-white rounded-full ${
                      formNo - 1 === i ||
                      formNo - 1 === i + 1 ||
                      formNo - 1 === i + 2 ||
                      formNo - 1 === i + 3 ||
                      formNo === formLength.length
                        ? "bg-blue-500"
                        : "bg-slate-400"
                    } flex justify-center items-center`}
                  >
                    {v}
                  </div>
                  {i !== formLength.length - 1 && (
                    <div
                      className={`w-10 md:w-20 h-1 ${
                        formNo === i + 2 ||
                        formNo === i + 3 ||
                        formNo === i + 4 ||
                        formNo === formLength.length
                          ? "bg-blue-500"
                          : "bg-slate-400"
                      }`}
                    ></div>
                  )}
                </>
              ))}
            </div>
          )}

          <div className="">
            {isSubmitted ? (
              <div className="">
                <LearningPath />
              </div>
            ) : (
              <div>
                {formNo === 1 ? (
                  // first form element
                  <div>
                    <FormItem
                      title="Which describes you best?"
                      description="this will help us personalize your experience"
                      data={bestOptions}
                      setSelectedItem={setSelectedItem}
                      selectedItem={selectedItem}
                      handleItemClick={handleItemClick}
                    />
                    <div className="mt-8 flex justify-center items-center">
                      <button
                        onClick={handleNextClick}
                        className={`px-8 py-2 text-lg rounded-md text-white ${
                          selectedItem !== null ? "bg-black" : "bg-slate-400"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ) : formNo === 2 ? (
                  // second form element
                  <div>
                    <FormItem
                      title="Which are you most interested in?"
                      description="choose just one,this will help us get you started"
                      data={interestedOptions}
                      setSelectedItem={setSelectedItem}
                      selectedItem={selectedItem}
                      handleItemClick={handleItemClick}
                    />
                    <div className="mt-8 flex gap-3 md:gap-5 justify-center items-center">
                      <button
                        onClick={handlePrevClick}
                        className="px-4 md:px-8 py-2 text-lg rounded-md text-white bg-blue-500"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNextClick}
                        className={`px-4 md:px-8 py-2 text-lg rounded-md text-white ${
                          selectedItem !== null ? "bg-black" : "bg-slate-400"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ) : formNo === 3 ? (
                  // third form element
                  <div className="my-14">
                    <ImageTextPairing
                      image="https://i.ibb.co/Brg12Pm/measurement-removebg-preview.png"
                      title="You are in the right place"
                      description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus vitae eveniet ab maiores molestiae animi voluptas quidem, illo quisquam?"
                    />
                    <div className="mt-8 flex gap-3 md:gap-5 justify-center items-center">
                      <button
                        onClick={handlePrevClick}
                        className="px-4 md:px-8 py-2 text-lg rounded-md text-white bg-blue-500"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNextClick}
                        className={`px-4 md:px-8 py-2 text-lg rounded-md text-white ${
                          selectedItem !== null ? "bg-black" : "bg-slate-400"
                        }`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ) : formNo === 4 ? (
                  // fourth form element
                  <div>
                    <FormItem
                      title="What is your math comfort level ?"
                      description="choose the highest level you confident in"
                      data={mathematicianOptions}
                      setSelectedItem={setSelectedItem}
                      selectedItem={selectedItem}
                      handleItemClick={handleItemClick}
                    />
                    <div className="mt-8 flex gap-5 justify-center items-center">
                      <button
                        onClick={handlePrevClick}
                        className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNextClick}
                        className={`px-8 py-2 text-lg rounded-md text-white bg-black`}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <ImageTextPairing
                      title="you are on your way !"
                      image="https://img.freepik.com/free-vector/happy-boy-with-backpack-jumping_1308-88237.jpg"
                      description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus vitae eveniet ab maiores molestiae animi voluptas quidem, illo quisquam?"
                    />
                    <div className="mt-4 flex gap-5 justify-center items-center">
                      <button
                        onClick={handlePrevClick}
                        className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
                      >
                        Previous
                      </button>
                      <button
                        onClick={finalSubmit}
                        className={`px-8 py-2 text-lg rounded-md text-white ${
                          selectedItem !== null ? "bg-black" : "bg-slate-400"
                        }`}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
