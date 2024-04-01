import { useState } from "react";
import "./App.css";
import FormItem from "./components/formItem/FormItem";

function App() {
  const formLength = [1, 2, 3];
  const [formNo, setFormNo] = useState(formLength[0]);

  const handleNextClick = () => {
    setFormNo((formNo) => formNo + 1);
  };
  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <div className="card w-1/2 rounded-md shadow-md bg-white p-5">
        {/* show indicator  */}
        <div className="flex justify-center items-center">
          {formLength.map((v, i) => (
            <>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  formNo - 1 === i ||
                  formNo - 1 === i + 1 ||
                  formNo === formLength.length
                    ? "bg-blue-500"
                    : "bg-slate-400"
                } h-[35px] flex justify-center items-center`}
              >
                {v}
              </div>
              {i !== formLength.length - 1 && (
                <div
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formLength.length
                      ? "bg-blue-500"
                      : "bg-slate-400"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>

        {/* show form component dynamically */}
        <div className="mt-6">
          {formNo === 1 && (
            <div>
              <FormItem
                title="Which describes you best?"
                description="this will help us personalize your experience"
              />
              <div
                onClick={handleNextClick}
                className="mt-4 flex justify-center items-center"
              >
                <button
                  className={`px-8 py-2 text-lg rounded-md text-white bg-black`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
