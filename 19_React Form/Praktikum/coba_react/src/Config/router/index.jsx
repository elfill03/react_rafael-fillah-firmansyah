import CreateProduct from "../../views/CreateProduct";
import LandingPage from "../../views/LandingPage";

const router = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/createproduct",
    element: <CreateProduct />,
  },
];

export default router;
