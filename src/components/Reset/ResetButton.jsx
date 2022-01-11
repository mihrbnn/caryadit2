import { useEffect, useContext } from "react";
//api
import { baseURL } from "../../api";
//context
import { MainContext } from "../../contexts/MainContextProvider";

const ResetButton = () => {
  const { data, setData, setAbvFilterType, setAlcoholValue, setSearch } =
    useContext(MainContext);

  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setSearch("");
        setAbvFilterType("n");
        setAlcoholValue(0);
      });
  };

  return (
    <>
      <button id="reset" className="reset-button" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default ResetButton;
