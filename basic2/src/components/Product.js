import "./Product.css"
import ProductItem from "./ProductItem.js"
import Card from "./Card.js";

const Product = (props)=>{
    return (
        <Card className="Products">
            <ProductItem>
                title = {props.item[0].name}
                amount = {props.item[0].price}
                date = {props.item[0].date}
            </ProductItem>
            <ProductItem>
                title = {props.item[1].name}
                amount = {props.item[1].price}
                date = {props.item[1].date}
            </ProductItem>
            <ProductItem>
                title = {props.item[2].name}
                amount = {props.item[2].price}
                date = {props.item[2].date}
            </ProductItem>
            <ProductItem>
                title = {props.item[3].name}
                amount = {props.item[3].price}
                date = {props.item[3].date}
            </ProductItem>
        </Card>
        
    );
}

export default Product;