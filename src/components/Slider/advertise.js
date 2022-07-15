import AdvertiseItems from './advertiseItems'
import OfferIcon from '../../assets/images/Path 2411.svg'
function Advertise () {
    return(
        <div className="slider__advertise">
                {AdvertiseItems.map((e, index)=>{
                    return(
                        <div className="slider__advertise__item" key={index}>
                            <div className="slider__advertise__item__content">
                                <img src={OfferIcon} alt="" />
                                <span className="productName">{e.name}</span>
                                <span className="productPrice">قیمت : {e.price}  تومان</span>
                            </div>
                            <div className="slider__advertise__item__pic">
                                <img src={e.image} alt="" />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default Advertise