import CategoryItems from "./items"
function Category () {
    return(
        <div className="category">
            {
                CategoryItems.map((e, index) => {
                    return (
                        <div className="category__item" key={index}>
                            <img src={e.image} alt="" />
                            <h2 className="title">{e.title}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Category