import BrandItems from "./items";
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 }
  ];
function Brands () {
    return(
    <div className="brands">
        <div className="brands__item">
        <Carousel breakPoints={breakPoints} pagination={false} showArrows={false}>

        {
            BrandItems.map((e, index)=>{
                return(
                        <img src={e} alt="" key={index}/>
                        )
                    })
                }
        </Carousel>
        </div>
    </div>
    )
}

export default Brands