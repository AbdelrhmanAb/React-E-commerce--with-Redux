import React from 'react'

// REDUX import
import { useSelector, useDispatch } from 'react-redux'
import { addToCard, catogProducts, SearchOfProduct } from '../feature/getProductData/getData'
import { FetchProductsDate } from '../feature/getProductData/getData';
//-----------



import Rating from '../components/rating';
import backgroundimg from "../assets/images/gradient-blue-background-free-vector.jpg"

const Shop = () => {

  const [catogery, setCatogery] = React.useState("Search by catogery");
  const [search, setSearch] = React.useState("")


  // redux code
  const dispatch = useDispatch()

  const productsData = useSelector((state) => { return (state.productDate.products); }) || []

    

  const Filterproductslist = useSelector(
    (state) => {


      return (state.productDate.CategoryList);
    })


  const handleSearchField = (value) => {
    setSearch(value)
    dispatch(SearchOfProduct(value))

  }
  const handleAddToCard = (product) => {
    dispatch(addToCard(product))


  }


  React.useEffect(() => {
    dispatch(FetchProductsDate())
    dispatch(addToCard())
  }, [])


  return (
    <main>
      {/* ------------------- SEC-1 hero image-sec ----------------- */}
      <section>
        <div className="bg-neutral-content">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${backgroundimg})`,
            }}
            className=' w-full h-48  flex items-center justify-center '>
            <h1 className="
             text-8xl font-bold
             bg-gradient-to-r from-indigo-500 to-purple-600
               bg-clip-text text-transparent
             transition-all duration-300
           hover:from-pink-500 hover:to-yellow-500">
              Shop Now
            </h1>

          </div>
          <div className="flex py-22 px-12 bg-neutral-content    ">

            <select value={catogery} onChange={(value) => {
              setCatogery(value.target.value)
              dispatch(catogProducts(value.target.value))

            }} className="select select-secondary bg-info text-xl ">
              <option disabled={true}>Search by catogery</option>
              <option>men's clothing</option>
              <option>jewelery</option>
              <option>electronics</option>
              <option>women's clothing</option>
            </select>

            <label className="input input-lg input-secondary bg-info-content w-3/5 m-auto ">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" value={search} onChange={(value) => { handleSearchField(value.target.value) }} required placeholder="Search" />
            </label>
          </div>
        </div>
      </section>
      {/* ------------------- SEC-1 hero image-sec ----------------- */}


      {/* ------------------- SEC-2 Products pro-sec ----------------- */}
      <section>
        <div className='py-12 flex flex-col items-center rounded-2xl  w-full bg-neutral-content' >
          {/* <h3 className='text-5xl text-accent font-bold capitalize'>shop</h3>

                    <div className=' flex justify-center mt-6 w-full' >
                        <div className="divider divider-neutral h-1 w-1/3 text-accent  ">NEW </div>
                    </div> */}


          {/* --------- Products from api ------------ */}
          <div className='w-4/5 grid  md:grid-cols-3 grid-cols-1 gap-12 items-start  ' >
            {Filterproductslist.map((item) => {
              return (
                <div style={{ maxHeight: "550px" }} key={item.id} className="card gap-3 transition-all hover:scale-105 hover:shadow-2xl  bg-primary-content text-neutral shadow-sm">
                  <figure className=' w-full  max-h-2/5'>
                    <img
                      className='scale-50'
                      src={item.image}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 style={{ height: "80px" }} className="card-title overflow-hidden">{item.title}</h2>
                    <p style={{ height: "120px" }} className='  overflow-hidden'>{item.description}</p>
                    <div className="flex flex-col text-lg w-full items- my-3 justify-center">
                      <p><span className='font-bold mr-1.5'> category:</span>{item.category}</p>
                      <p><span className='font-bold'> price:</span>12.3</p>
                      <div className='flex items-center'>
                        <span className='font-bold'>Rating:</span> <Rating value={item.rating.rate} />
                      </div>

                    </div>
                    <div className="card-actions justify-end">
                      <button onClick={() => { handleAddToCard(item) }} className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>)

            })}
          </div>
          {/* --------- Products from api ------------ */}
        </div>
      </section>

      {/* ------------------- SEC-2 Products pro-sec ----------------- */}
    </main>
  )
}

export default Shop