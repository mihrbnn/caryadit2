//context
import MainContextProvider from "./contexts/MainContextProvider";
//components
import { AllFilters } from "./components/Filter";
import { Products } from "./components/Products";
import SearchBar from "./components/Search";
import Footer from "./components/base/Footer";
import Nav from "./components/base/Nav";

//css
import "./index.css";
function App() {
  return ( <>
    <Nav></Nav>
    <div className="container my-5">
      <MainContextProvider>
        <SearchBar />
        <AllFilters />
        <Products />
      </MainContextProvider>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
