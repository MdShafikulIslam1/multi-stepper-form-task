// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react";
// import "./App.css";
// import FormItem from "./components/formItem/FormItem";
// import ImageTextPairing from "./components/formItem/ImageTextPairing/ImageTextPairing";
// import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
// import {
//   bestOptions,
//   interestedOptions,
//   mathematicianOptions,
// } from "./constant";

// interface IStateValue {
//   describe: string;
//   interested: string;
// }

// function App() {
//   const formLength = [1, 2, 3, 4, 5];
//   const [formNo, setFormNo] = useState(formLength[0]);
//   const [stateValue, setStateValue] = useState<IStateValue>({
//     describe: "",
//     interested: "",
//   });
//   const [selectedItem, setSelectedItem] = useState<number | null>(null);
//   const [isShowSpinner, setIsShowSpinner] = useState<boolean>(false);

//   const handleItemClick = (index: number, title: string) => {
//     setSelectedItem(index);
//     setStateValue({
//       ...stateValue,
//       describe: title,
//     });
//     // setSelectedItem(null);
//   };
//   const handleNextClick = () => {
//     setFormNo((formNo) => formNo + 1);
//     // if (formNo === 1 && stateValue.describe) {
//     //   setFormNo(formNo + 1);
//     // } else if (formNo === 2 && stateValue.interested) {
//     //   setFormNo(formNo + 1);
//     // }
//   };

//   const handlePrevClick = () => {
//     setFormNo(formNo - 1);
//   };

//   const finalSubmit = () => {
//     setIsShowSpinner(true);
//     setTimeout(() => {
//       setIsShowSpinner(false);
//     }, 2000);
//   };

//   return (
//     <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
//       <div className="card w-1/2 rounded-md shadow-md bg-white p-5">
//         {/* show indicator  */}
//         <div className="flex justify-center items-center">
//           {formLength.map((v, i) => (
//             <>
//               <div
//                 className={`w-[35px] my-3 text-white rounded-full ${
//                   formNo - 1 === i ||
//                   formNo - 1 === i + 1 ||
//                   formNo - 1 === i + 2 ||
//                   formNo - 1 === i + 3 ||
//                   formNo === formLength.length
//                     ? "bg-blue-500"
//                     : "bg-slate-400"
//                 } h-[35px] flex justify-center items-center`}
//               >
//                 {v}
//               </div>
//               {i !== formLength.length - 1 && (
//                 <div
//                   className={`w-[85px] h-[2px] ${
//                     formNo === i + 2 ||
//                     formNo === i + 3 ||
//                     formNo === i + 4 ||
//                     formNo === formLength.length
//                       ? "bg-blue-500"
//                       : "bg-slate-400"
//                   }`}
//                 ></div>
//               )}
//             </>
//           ))}
//         </div>

//         {/* show form component dynamically */}
//         <div className="mt-6">
//           {formNo === 1 ? (
//             // first form element
//             <div>
//               <FormItem
//                 title="Which describes you best?"
//                 description="this will help us personalize your experience"
//                 data={bestOptions}
//                 setSelectedItem={setSelectedItem}
//                 selectedItem={selectedItem}
//                 handleItemClick={handleItemClick}
//               />
//               <div
//                 onClick={handleNextClick}
//                 className="mt-4 flex justify-center items-center"
//               >
//                 <button
//                   className={`px-8 py-2 text-lg rounded-md text-white ${
//                     selectedItem !== null ? "bg-black" : "bg-slate-400"
//                   }`}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           ) : formNo === 2 ? (
//             // second form element
//             <div>
//               <FormItem
//                 title="Which are you most interested in?"
//                 description="choose just one,this will help us get you started"
//                 data={interestedOptions}
//                 setSelectedItem={setSelectedItem}
//                 selectedItem={selectedItem}
//                 handleItemClick={handleItemClick}
//               />
//               <div className="mt-4 flex gap-5 justify-center items-center">
//                 <button
//                   onClick={handlePrevClick}
//                   className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextClick}
//                   className={`px-8 py-2 text-lg rounded-md text-white ${
//                     selectedItem !== null ? "bg-black" : "bg-slate-400"
//                   }`}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           ) : formNo === 3 ? (
//             // third form element
//             <div>
//               <ImageTextPairing
//                 image="https://w7.pngwing.com/pngs/156/1012/png-transparent-measuring-scales-scales-miscellaneous-angle-triangle.png"
//                 title="You are in the right place"
//                 description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus vitae eveniet ab maiores molestiae animi voluptas quidem, illo quisquam?"
//               />
//               <div className="mt-4 flex gap-5 justify-center items-center">
//                 <button
//                   onClick={handlePrevClick}
//                   className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextClick}
//                   className={`px-8 py-2 text-lg rounded-md text-white ${
//                     selectedItem !== null ? "bg-black" : "bg-slate-400"
//                   }`}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           ) : formNo === 4 ? (
//             // mathematically options - forth element
//             <div>
//               <FormItem
//                 title="What is your math comfort level ?"
//                 description="choose the highest level you confident in"
//                 data={mathematicianOptions}
//                 setSelectedItem={setSelectedItem}
//                 selectedItem={selectedItem}
//                 handleItemClick={handleItemClick}
//               />
//               <div className="mt-4 flex gap-5 justify-center items-center">
//                 <button
//                   onClick={handlePrevClick}
//                   className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextClick}
//                   className={`px-8 py-2 text-lg rounded-md text-white ${
//                     selectedItem !== null ? "bg-black" : "bg-slate-400"
//                   }`}
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           ) : (
//             // last element - excited form submission card
//             <div>
//               <ImageTextPairing
//                 title="you are on your way !"
//                 image="https://img.freepik.com/free-vector/happy-boy-with-backpack-jumping_1308-88237.jpg"
//                 description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ducimus vitae eveniet ab maiores molestiae animi voluptas quidem, illo quisquam?"
//               />
//               <div className="mt-4 flex gap-5 justify-center items-center">
//                 <button
//                   onClick={handlePrevClick}
//                   className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={finalSubmit}
//                   className={`px-8 py-2 text-lg rounded-md text-white ${
//                     selectedItem !== null ? "bg-black" : "bg-slate-400"
//                   }`}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//         {isShowSpinner && <LoadingSpinner />}
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import FormItem from "./components/formItem/FormItem";
import ImageTextPairing from "./components/formItem/ImageTextPairing/ImageTextPairing";
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
  const navigate = useNavigate();

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
      navigate("/learning-path");
    }, 2000);
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      {isShowSpinner ? (
        <LoadingSpinner />
      ) : (
        <div className="card w-1/2 rounded-md shadow-md bg-white p-5">
          {/* show indicator  */}
          <div className="flex justify-center items-center">
            {formLength.map((v, i) => (
              <>
                <div
                  className={`w-[35px] my-3 text-white rounded-full ${
                    formNo - 1 === i ||
                    formNo - 1 === i + 1 ||
                    formNo - 1 === i + 2 ||
                    formNo - 1 === i + 3 ||
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

          {/* show form component dynamically */}
          <div className="mt-6">
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
                <div
                  onClick={handleNextClick}
                  className="mt-4 flex justify-center items-center"
                >
                  <button
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
                <div className="mt-4 flex gap-5 justify-center items-center">
                  <button
                    onClick={handlePrevClick}
                    className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
                  >
                    Previous
                  </button>
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
            ) : formNo === 3 ? (
              // third form element
              <div>
                <ImageTextPairing
                  image="https://w7.pngwing.com/pngs/156/1012/png-transparent-measuring-scales-scales-miscellaneous-angle-triangle.png"
                  title="You are in the right place"
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
                    onClick={handleNextClick}
                    className={`px-8 py-2 text-lg rounded-md text-white ${
                      selectedItem !== null ? "bg-black" : "bg-slate-400"
                    }`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : formNo === 4 ? (
              // mathematically options - forth element
              <div>
                <FormItem
                  title="What is your math comfort level ?"
                  description="choose the highest level you confident in"
                  data={mathematicianOptions}
                  setSelectedItem={setSelectedItem}
                  selectedItem={selectedItem}
                  handleItemClick={handleItemClick}
                />
                <div className="mt-4 flex gap-5 justify-center items-center">
                  <button
                    onClick={handlePrevClick}
                    className="px-3 py-2 text-lg rounded-md text-white bg-blue-500"
                  >
                    Previous
                  </button>
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
            ) : (
              // last element - excited form submission card
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
        </div>
      )}
    </div>
  );
}

export default App;
