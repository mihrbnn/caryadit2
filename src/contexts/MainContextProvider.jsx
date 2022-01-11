import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  //main beers
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  // ph ve srm filter
  const [phValue, setPhValue] = useState([0, 7]);
  const [srmValue, setSrmValue] = useState([0]);
  //search
  const [search, setSearch] = useState("");
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const beersPerPage = 6;
  const pagesVisited = pageNumber * beersPerPage;
  // abv filter data
  const [abvFilterType, setAbvFilterType] = useState("n");
  const [alcoholValue, setAlcoholValue] = useState(5);

  const value = {
    data,
    setData,
    search,
    setSearch,
    setFilteredItems,
    filteredItems,
    pageNumber,
    setPageNumber,
    beersPerPage,
    pagesVisited,
    abvFilterType,
    setAbvFilterType,
    phValue,
    setPhValue,
    srmValue,
    setSrmValue,
    alcoholValue,
    setAlcoholValue,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
