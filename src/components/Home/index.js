import {useState, useEffect} from 'react'
import './index.css'
import Product from '../product'

const Home = () => {
  const [allProducts, updateAllProducts] = useState([])
  const [queryParams, updateParams] = useState('')
  const [allCategories, updateAllCategories] = useState([])
  const [activeCategory, updateActiveCategory] = useState('mobiles')

  const changeActiveCategory = event => {
    updateActiveCategory(event.target.value)
  }

  const updateAllProductsInstance = data => {
    updateAllProducts(data)
    // console.log(data)
  }

  const getAllProductsData = async () => {
    const url = 'https://dummyjson.com/products'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.products)
    updateAllProductsInstance(data.products)
  }

  const getCategories = async () => {
    const url = 'https://dummyjson.com/products/categories'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    updateAllCategories(data)
  }

  useEffect(() => {
    getAllProductsData()
    getCategories()
  }, [queryParams])

  //   console.log(allProducts)

  return (
    <div className="main-con">
      <div className="category-search-con">
        <div>
          <select value={activeCategory} onChange={changeActiveCategory}>
            {allCategories.map(each => (
              <option value={each} key={each}>
                {each}
              </option>
            ))}
          </select>
        </div>
        <input className="search-bar" type="search" placeholder="Search" />
      </div>

      {allProducts.map(each => (
        <Product details={each} key={each.id} />
      ))}
    </div>
  )
}

export default Home
