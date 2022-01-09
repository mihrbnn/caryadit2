//context
import MainContextProvider from "./contexts/MainContextProvider";
//components
import AbvFilter from "./components/Filter/AbvFilter";
import Products from "./components/Products/Products";
import SearchBar from "./components/Search/SearchBar";
//css
import "./index.css";
function App() {
  return (
    <div className="container my-5">
      <MainContextProvider>
        <SearchBar />
        <AbvFilter />
        <Products />
      </MainContextProvider>
    </div>
  );
}

export default App;
