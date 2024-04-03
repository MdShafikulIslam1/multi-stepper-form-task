import { createBrowserRouter } from "react-router-dom";
import LearningPath from "../components/LearningPath/LearningPath";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/learning-path",
    element: <LearningPath />,
  },
]);

export default router;
