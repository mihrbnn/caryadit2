import AbvFilter from "./AbvFilter";
import PhFilter from "./PhFilter";
import SrmFilter from "./SrmFilter";

const AllFilters = () => {
  return (
    <div className="container row row-cols-auto">
      <div className="col-4">
        <AbvFilter />
      </div>
      <div className="col-4">
        <PhFilter />
      </div>
      <div className="col-4">
        <SrmFilter />
      </div>
    </div>
  );
};

export default AllFilters;
