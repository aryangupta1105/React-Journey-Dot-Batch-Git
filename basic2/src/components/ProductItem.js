import Card from "./Card";
import "./ProductItem.css"
import React, { useState } from 'react'
import ProductDate from "./ProductDate";

const ProductItem = (props)=>{
    const [title , setTitle] = useState(props.title)

    return(
        <Card className="product-item">
            <ProductDate date={props.date}/>
            <div className="product-item__description">
                <h2>{title}</h2>
            </div>

        </Card>
    )
}

export default ProductItem;