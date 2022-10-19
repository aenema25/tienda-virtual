import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Button, Container, Grid, IconButton, Typography, Alert } from "@mui/material"
import { Add, HorizontalRule } from "@mui/icons-material"
import "./product.css"
import { CartContext } from "../context/CartContext"
import db from "../firebase/connection"
import { doc, getDoc } from "firebase/firestore";


const Product = () => {
    const [productDetail, setProductDetail] = useState()
    const [currentStock, setCurrentStock] = useState()
    const [adddedQuantity, setAddedQuantity] = useState(0)
    const [emptyStock, setEmptyStock] = useState(false)
    const [empty, setEmpty] = useState(false)

    const { id } = useParams()

    const addUp = () => {
        if (adddedQuantity < currentStock) {
            setAddedQuantity(adddedQuantity + 1)
        } else {
            setEmpty(true)
        }
    }
    const restDown = () => {
        if (adddedQuantity > 0) {
            setAddedQuantity(adddedQuantity - 1)
            setEmpty(false)
        }
    }
    const updateStock = () => {
        if (currentStock > 0) {
            setCurrentStock(currentStock - adddedQuantity)
            setEmptyStock(false)
        } else {
            setEmptyStock(true)
        }
    }

    const { isInCart, cart, setCart } = useContext(CartContext)

    const addToCart = () => {
        updateStock()
        setAddedQuantity(0)
        if (!emptyStock) {
            const item = {
                name: productDetail.title,
                price: productDetail.price,
                img: productDetail.pictures[1],
                id: productDetail.id
            }
            const check = isInCart(item)
            if (check) {
                const index = cart.findIndex(product => product.name === item.name)
                cart[index].quantity += adddedQuantity
                setCart([...cart])
            } else {
                const addeditem = {
                    ...item,
                    quantity: adddedQuantity,
                }
                setCart([...cart, addeditem])
            }
        }
        alert("Producto agregado al carrito exitosamente")
    }

    useEffect(() => {
        const fetchProductDetail = async () => {
            const productRef = doc(db, "productos", id);
            const productResult = await getDoc(productRef);

            setProductDetail({ id: id, ...productResult.data() })
            // Verificar cuantos items del producto actual estan en el carrito y quitarlos del stock
            const currentItem = cart.find(product => product.id === id)

            const quantityAddedToCart = currentItem ? currentItem.quantity : 0
            setCurrentStock(productResult.data().available_quantity - quantityAddedToCart)
        }
        fetchProductDetail()

    }, [id,cart])

    return (
        <Container>
            {
                productDetail &&
                <Grid container spacing={5} pt={10} alignItems='center' justifyContent="center" sx={{ position: "relative" }}>
                    <div className="back-button">
                        <Link to="/">
                            <Button variant="contained" color="secondary">
                                Volver
                            </Button>
                        </Link>
                    </div>
                    <Grid item xs={12} sm={6} md={4}>
                        <img alt="imageproduct1" src={productDetail.pictures[1]} style={{ maxHeight: "250px", width: "100%" }} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <img alt="imageproduct2" src={productDetail.pictures[2]} style={{ maxHeight: "250px", width: "100%" }} />
                    </Grid>
                    <Grid item xs={6} sm={12} md={4}>
                        <img alt="imageproduct3" src={productDetail.pictures[3]} style={{ maxHeight: "250px", width: "100%" }} />
                    </Grid>
                    <Grid item xs={12}>
                        {
                            empty &&
                            <Alert severity="error">No es posible añadir mas producto (falta de stock)</Alert>
                        }
                        {
                            emptyStock &&
                            <Alert severity="error">Producto sin stock</Alert>
                        }
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="h5" fontWeight={900} >
                            {productDetail.title}
                        </Typography>
                        <Typography variant="h6" fontWeight={500} sx={{ color: "#e63946" }}>
                            ${productDetail.price}
                        </Typography>
                        {productDetail.original_price && <Typography variant={"body2"} fontWeight={600} sx={{ textDecoration: "line-through" }}>${productDetail.original_price}</Typography>}
                        <Typography>
                            Stock disponible: {currentStock} {currentStock > 1 ? 'Unidades' : 'Unidad'}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            ¿ Cuantos desea comprar ?
                        </Typography>
                        <IconButton onClick={restDown}>
                            <HorizontalRule sx={{ color: "#e76f51" }} />
                        </IconButton>
                        {adddedQuantity}
                        <IconButton onClick={addUp}>
                            <Add sx={{ color: "#264653" }} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6} p={2}>
                        <Button variant="contained" sx={{ bgcolor: "#e63946" }}>
                            Comprar ahora
                        </Button>
                    </Grid>
                    <Grid item xs={6} p={2} >
                        <Button variant="contained" color="info" onClick={addToCart}>
                            Agregar al carrito
                        </Button>
                    </Grid>
                </Grid>
            }
        </Container >
    )
}

export default Product