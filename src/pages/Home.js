import ProductsContainer from "../components/ProductsContainer"
import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import Example from "../components/Carousel"

const Home = () => {
    const [products, setProducts] = useState()

    const fetchProducts = async () => {
        const req = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=zapatillas%20nike&official_store=all&limit=20")
        const result = await req.json()
        setProducts(result.results)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Example />
                </Grid>
                <Grid item xs={12}>
                    {
                        products && <ProductsContainer products={products} />
                    }
                </Grid>
            </Grid>
        </Container>

    )
}

export default Home