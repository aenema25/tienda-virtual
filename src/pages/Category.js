import { useEffect, useState } from "react"
import ProductsContainer from "../components/ProductsContainer"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"

const Category = () => {

    const [products, setProducts] = useState()

    const { id } = useParams()

    const fetchProducts = async () => {
        const req = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=zapatillas%20nike%20${id}&official_store=all&limit=20`)
        const result = await req.json()
        setProducts(result.results)
    }

    useEffect(() => {
        fetchProducts()
    }, [id])
    return (
        <Container>
            {
                products && <ProductsContainer products={products} />
            }
        </Container>
    )
}

export default Category