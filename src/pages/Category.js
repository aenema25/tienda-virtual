import { useEffect, useState } from "react"
import ProductsContainer from "../components/ProductsContainer"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/connection"

const Category = () => {

    const [products, setProducts] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetchProducts = () => {
            const categoryRef = query(collection(db, "productos"), where("category", "==", id));
            getDocs(categoryRef).then((queryCategory) => {
                const categoryResult = []
                queryCategory.forEach((doc) => {
                    const data = doc.data()
                    const product = ({ id: doc.id, ...data })
                    categoryResult.push(product)
                });
                setProducts(categoryResult)
            })
        }
        fetchProducts()
    }, [id])
    return (
        <Container>
            {
                products?.length > 0 ? <ProductsContainer products={products} /> : <div>No hay productos en esta categoria</div>
            }
        </Container>
    )
}

export default Category