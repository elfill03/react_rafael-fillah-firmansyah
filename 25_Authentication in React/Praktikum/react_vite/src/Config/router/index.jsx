import CreateProduct from "../../views/CreateProduct";
import LandingPage from "../../views/LandingPage";
import Counter from "../redux/Counter.view";

const router = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/createproduct",
    element: <CreateProduct />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
];

export default router;
