import {AiOutlineSearch} from 'react-icons/ai';


function SearchBar({value, onChangeText}) {

  return (
    <div className="search-container">
      {/* <AiOutlineSearch /> */}
      <input
        className='sbx-custom__input'
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder={" Search beer by name" }
      />
    </div>
  );
}
export default SearchBar;
