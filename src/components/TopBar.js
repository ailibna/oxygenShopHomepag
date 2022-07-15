import Logo from '../assets/images/Group 1264.svg'
import SearchIcon from '../assets/images/Group 1699.svg'
import WishListIcon from '../assets/images/Path_2428.svg'
import CartIcon from '../assets/images/Group_1679.svg'
import AccountIcon from '../assets/images/Group_1676.svg'
import Menu from './Menu'
function TopBar() {
return (
    <>
        <div className="topBar">
            <div className="topBar__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="topBar__searchBar">
                <div className="topBar__searchBar__area">
                    <img src={SearchIcon} alt="" />
                    <input type="text" placeholder="جستجو در محصولات اکسیژن … " />
                </div>
            </div>
            <div className="topBar__icons">
                <div className="topBar__icons__wishList">
                    <img src={WishListIcon} alt="" />
                </div>
                <div className="topBar__icons__cart">
                    <img src={CartIcon} alt="" />
                </div>
                <div className="topBar__icons__account">
                    <img src={AccountIcon} alt="" />
                </div>
            </div>
        </div>
        <Menu />
    </>
)
}

export default TopBar;
