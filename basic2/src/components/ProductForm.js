import './ProductForm.css'

function ProductForm()
{
    return(
        <form>
            <div className='new-product-title'>
           <label>Title</label>
            <input type='text'></input>
           </div>
           <div className='new-product-date'>
           <label >Date</label>
            <input type='date' min='2024-01-12' max='2024-12-12'></input>
           </div>
           <div>
                <button type='submit'> Add to Cart</button>
           </div>
        </form>
    );
}


export default ProductForm;