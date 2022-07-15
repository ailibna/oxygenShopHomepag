import BrandItems from "./items"
function Brands () {
    return(
    <div className="brands">
        <div className="brands__item">
        {
            BrandItems.map((e, index)=>{
                return(
                        <img src={e} alt="" key={index}/>
                        )
                    })
                }
        </div>
    </div>
    )
}
export default Brands