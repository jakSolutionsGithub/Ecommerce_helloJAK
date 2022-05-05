import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import Footer from "./Footer";
import ProductDetails from "../../features/catalog/ProductDetails";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<ProductDetails />} />
        <Route path="*" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
