import { useDispatch } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";
import { useEffect } from "react";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
