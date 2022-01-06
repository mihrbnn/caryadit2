// import {AiOutlineSearch} from 'react-icons/ai';


function SearchBar({value, onChangeFunc}) {

  return (
    <div className="search-container my-4">
      {/* <AiOutlineSearch /> */}
      <input
        className='sbx-custom__input'
        type="text"
        onChange={onChangeFunc}
        placeholder={" Search beer by name" }
      />
    </div>
  );
}
export default SearchBar;
