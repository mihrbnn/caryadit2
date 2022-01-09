import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { abv_gt, abv_lt } from "../../api";
import { MainContext } from "../../contexts/MainContextProvider";

function AbvFilter() {
  const { setGt, setLt } = useContext(MainContext);

  useEffect(() => {
    fetch(abv_gt)
      .then((response) => response.json())
      .then((json) => {
        setGt(json);
      });
  }, []);

  useEffect(() => {
    fetch(abv_lt)
      .then((response) => response.json())
      .then((json) => {
        setLt(json);
      });
  }, []);

  return <div className="row d-flex flex-row">Abv Filter</div>;
}
export default AbvFilter;
