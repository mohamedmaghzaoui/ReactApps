// App.js
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./ProductListing";
import ProductCreate from "./ProductCreate";
import ProductDetail from "./ProductDetail";
import ProductEdit from "./ProductEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route
            path="/product/detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/product/edit/:productId" element={<ProductEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
