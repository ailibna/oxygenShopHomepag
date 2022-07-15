import PrevButton from '../../assets/images/Path 2410.svg'
import nextButton from '../../assets/images/Path 2409.svg'
import AddToWishListIcon from '../../assets/images/Group 1232.svg'
function productSlideShow(props) {
    return(
        <div className="productSlideShow">
        <div className="productSlideShow__topBar">
            <span className="title">{props.title}</span>
            <button className="showMore">محصولات بيشتر …</button>
        </div>
        <div className="productSlideShow__products">
            <img className="nextPrevItems" src={PrevButton} alt="" />
            {
                props.products.map((e, index)=>{
                    return(
                        <div className="productSlideShow__products__item" key={index}>
                            <div className="image">
                                <img className="addToWishIcon" src={AddToWishListIcon} alt="" />
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
            <img className="nextPrevItems" src={nextButton} alt="" />
        </div>
    </div>
    )
}
export default productSlideShow