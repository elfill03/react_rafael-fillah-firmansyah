import LoginPage from "../../component/auth/LoginPage/LoginPage";
import RegisterPage from "../../component/auth/RegisterPage/RegisterPage";
import CreateProduct from "../../views/CreateProduct";
import LandingPage from "../../views/LandingPage";
import Counter from "../redux/Counter.view";

const router = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
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
