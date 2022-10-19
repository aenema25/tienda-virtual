import ProductsContainer from "../components/ProductsContainer"
import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/connection"

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts =  () => {
            const productsRef = collection(db, "productos");
            getDocs(productsRef).then((queryProducts) => {
                const productsResult = []
                queryProducts.forEach((doc) => {
                    const data = doc.data()
                    const product = ({ id: doc.id, ...data })
                    productsResult.push(product)
                });
                setProducts(productsResult)
            })
        }
        fetchProducts()


    }, [])
    return (
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Carousel />
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