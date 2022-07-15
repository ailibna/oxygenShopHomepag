import DotPic from '../../assets/images/Group 1297.png';
import BoxPic from '../../assets/images/Mask Group 61.png';
import TimerRemind from './timerRemind';
import OfferProductItems from './items';
import WishListIcon from '../../assets/images/Group 1232.svg';
function OfferProductSection () {
    return(
        <div className="offerProducts">
            <div className="offerProducts__descriptiopn">
                <div className="title">
                    <span>پیشنهاد شگفت انگیز !</span>
                </div>
                <div className="images">
                    <img src={DotPic} alt="" />
                    <img src={BoxPic} alt="" />
                </div>
                <TimerRemind />
            </div>
            <div className="offerProducts__productSlideShow">
                {
                    OfferProductItems.map((e, index)=>{
                        return(
                            <div className="offerProducts__productSlideShow__item" key={index}>
                                <div className="image">
                                    <img className="addToWishIcon" src={WishListIcon} alt="" />
                                    <img src={e.image} alt="" />
                                </div>
                                <div className="content">
                                    <span className="content__name">{e.name}</span>
                                    <span className="content__price">قیمت : {e.price}  تومان</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default OfferProductSection