import './index.css'

const Product = props => {
  const {details} = props
  const {thumbnail, title, brand, stock, price, discountPercentage} = details
  const stockStatus = stock > 0 ? 'In stock' : 'Out of stock'
  return (
    <div className="product-con">
      <img src={thumbnail} alt="logo" className="thumbnail" />
      <p className="title">{title}</p>
      <p className="stock">{stockStatus}</p>
      <p className="price">{price}</p>
      <button className="view-btn" type="button">
        View
      </button>
    </div>
  )
}

export default Product
