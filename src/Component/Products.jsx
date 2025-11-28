import React from 'react'

const Products = (props) => {
    return (
        <>
            <section className="text-gray-400 font-serif bg-[#141414]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <Product Image={props.ProductsContaint.Product1.Image} Category={props.ProductsContaint.Product1.Category} Title={props.ProductsContaint.Product1.Title} Price={props.ProductsContaint.Product1.Price}/>
                        <Product Image={props.ProductsContaint.Product2.Image} Category={props.ProductsContaint.Product2.Category} Title={props.ProductsContaint.Product2.Title} Price={props.ProductsContaint.Product2.Price}/>
                        <Product Image={props.ProductsContaint.Product3.Image} Category={props.ProductsContaint.Product3.Category} Title={props.ProductsContaint.Product3.Title} Price={props.ProductsContaint.Product3.Price}/>
                        <Product Image={props.ProductsContaint.Product4.Image} Category={props.ProductsContaint.Product4.Category} Title={props.ProductsContaint.Product4.Title} Price={props.ProductsContaint.Product4.Price}/>
                        <Product Image={props.ProductsContaint.Product5.Image} Category={props.ProductsContaint.Product5.Category} Title={props.ProductsContaint.Product5.Title} Price={props.ProductsContaint.Product5.Price}/>
                        <Product Image={props.ProductsContaint.Product6.Image} Category={props.ProductsContaint.Product6.Category} Title={props.ProductsContaint.Product6.Title} Price={props.ProductsContaint.Product6.Price}/>
                        <Product Image={props.ProductsContaint.Product7.Image} Category={props.ProductsContaint.Product7.Category} Title={props.ProductsContaint.Product7.Title} Price={props.ProductsContaint.Product7.Price}/>
                        <Product Image={props.ProductsContaint.Product8.Image} Category={props.ProductsContaint.Product8.Category} Title={props.ProductsContaint.Product8.Title} Price={props.ProductsContaint.Product8.Price}/>
                        <Product Image={props.ProductsContaint.Product9.Image} Category={props.ProductsContaint.Product9.Category} Title={props.ProductsContaint.Product9.Title} Price={props.ProductsContaint.Product9.Price}/>
                        <Product Image={props.ProductsContaint.Product10.Image} Category={props.ProductsContaint.Product10.Category} Title={props.ProductsContaint.Product10.Title} Price={props.ProductsContaint.Product10.Price}/>
                        <Product Image={props.ProductsContaint.Product11.Image} Category={props.ProductsContaint.Product11.Category} Title={props.ProductsContaint.Product11.Title} Price={props.ProductsContaint.Product11.Price}/>
                        <Product Image={props.ProductsContaint.Product12.Image} Category={props.ProductsContaint.Product12.Category} Title={props.ProductsContaint.Product12.Title} Price={props.ProductsContaint.Product12.Price}/>
                    </div>
                </div>
            </section>
        </>
    )
}
const Product = (props) => {
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" onClick={()=>{console.log(props);}
            }>
                <a href="#" className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.Image} />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{props.Category}</h3>
                    <h2 className="text-indigo-500 title-font text-lg font-medium">{props.Title}</h2>
                    <p className="mt-1 text-white">{props.Price}</p>
                </div>
            </div>
        </>
    )
}

export default Products
