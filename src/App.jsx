import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ScrollTop from "./components/scrollTop/ScrollTop";
import ProductInfo from "./pages/productInfo/ProductInfo";

export default function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/*" element={<NoPage/>}/>
          <Route path="/productinfo" element={<ProductInfo/>}/>

        </Routes>
      </Router>
    </div>
  )
}
