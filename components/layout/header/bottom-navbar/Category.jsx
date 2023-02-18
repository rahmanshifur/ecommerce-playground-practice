import ModelManuItem from "./model-manu-item";
import ModelManuItemImgA from "../../../../assets/img/product-40 1.png"



const Category = () => {


    return (
        <div className="modal-area">
            <div className='row p-4'>

                <div className='col-4 text-center' >
                    <ModelManuItem
                        img={ModelManuItemImgA}
                        title={`row.name`}
                    />
                </div>
            </div>
        </div>
    )
}
export default Category;