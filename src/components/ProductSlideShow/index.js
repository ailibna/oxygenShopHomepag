import AddToWishListIcon from '../../assets/images/Group 1232.svg'
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];

function productSlideShow(props) {
    return(
        <div className="productSlideShow">
        <div className="productSlideShow__topBar">
            <span className="title">{props.title}</span>
            <button className="showMore">محصولات بيشتر …</button>
        </div>
        <div className="productSlideShow__products">
            <Carousel breakPoints={breakPoints} pagination={false}>
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
            </Carousel>
        </div>
    </div>
    )
}
export default productSlideShow