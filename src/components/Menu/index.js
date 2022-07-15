import MenuItems from './items'
function Menu() {
    return (
    <div className="menu">
        <nav className="menu__items">
           {MenuItems.map((e, index)=>{
                return <span key={index}>{e}</span>}) 
            }
        </nav>
    </div>
    )
}
export default Menu;
