//context
import MainContextProvider from "./contexts/MainContextProvider";
//components
import { AbvFilter } from "./components/Filter";
import { Products } from "./components/Products";
import SearchBar from "./components/Search";
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
