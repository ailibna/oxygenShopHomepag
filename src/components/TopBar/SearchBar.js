import SearchIcon from '../../assets/images/Group 1699.svg';

function SearchBar () {
    return(
        <div className="topBar__searchBar">
            <div className="topBar__searchBar__area">
                <img src={SearchIcon} alt="" />
                <input type="text" placeholder="جستجو در محصولات اکسیژن … " />
            </div>
        </div>
    )
}
export default SearchBar