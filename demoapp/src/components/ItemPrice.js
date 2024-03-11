import './ItemPrice.css';

function ItemPrice(props){
    const price = props.price; 
    const currency = props.currency;
    const quantity = props.quantity;
    return (
        <div className='ItemPrice'>
            <div>
                {price} {currency} {quantity}
            </div>
        </div>
    )
}

export default ItemPrice;