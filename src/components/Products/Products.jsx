import React from 'react'
import {Grid} from "@material-ui/core"
import Product from "./Product/Product"



const products = [
    {id: 1, name:"Shoes", description: "Running shoes", price: "$5", image:"https://media.kohlsimg.com/is/image/kohls/3798326_Gray_Platinum?wid=600&hei=600&op_sharpen=1"},
    {id: 2, name:"Macbook", description: "Apple Macbook", price: "$100", image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-macbook-air-gold-select-201902?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1548454547923"},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
