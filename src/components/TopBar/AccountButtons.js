import WishListIcon from '../../assets/images/Path_2428.svg';
import CartIcon from '../../assets/images/Group_1679.svg';
import AccountIcon from '../../assets/images/Group_1676.svg';
function AccountBurrons () {
    return(
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
    )
}
export default AccountBurrons