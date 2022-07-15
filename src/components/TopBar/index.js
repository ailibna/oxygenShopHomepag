import Menu from '../Menu';
import GetWidth from '../../hook/getWidth';
import Logo from './Logo';
import SearchBar from './SearchBar';
import AccountBurrons from './AccountButtons'
function TopBar() {
    const { width } = GetWidth();
    return (
        <>
        {width>750?
            <>
                <div className="topBar">
                    <Logo />
                    <SearchBar />
                    <AccountBurrons />
                </div>
                <Menu />
                </>
                : 
                <>
                    <div className='mobileTopBar'>
                        <Logo />

                    </div>
                </>}
            </>
    )
}

export default TopBar;
