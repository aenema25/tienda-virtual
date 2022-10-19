import { Delete } from "@mui/icons-material"
import { Box, Typography, Container, Button, Grid, Paper, IconButton, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import "./cart.css"
import { collection, addDoc, writeBatch, doc, getDoc } from "firebase/firestore";
import db from "../firebase/connection"

const Cart = () => {
    const { cart, deleteProduct, setCart } = useContext(CartContext)
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const total = cart.reduce((previousvalue, product) => previousvalue + (product.quantity * product.price), 0)

    const makeOrder = async () => {
        const parsedItems = cart.map(product => { return { id: product.id, title: product.name, price: product.price, qty: product.quantity } })
        const payload = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
            item: [...parsedItems],
            date: new Date().toISOString(),
            total: total
        }
        // crear orden de compra en firebase
        const createdOrder = await addDoc(collection(db, "ordenes"), payload)
        if (createdOrder.id) {
            alert("Compra realizada con exito !")
        } else {
            alert("Ocurrio un error inesperado, intenta nuevamente")
        }

        // actualizar stock en firebase
        const batch = writeBatch(db)
        for (const product of parsedItems) {
            const ref = doc(db, "productos", product.id)
            const docData = await getDoc(ref)
            if (docData.data().available_quantity) {
                batch.update(ref, {
                    available_quantity: docData.data().available_quantity - product.qty
                })
            }
        }
        batch.commit()
        // Vaciar carro al terminar la compra 
        setCart([])
        
    }


    return (

        <Container>
            <Grid container spacing={2} justifyContent="stretch">
                <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={600} textAlign={"justify"}>
                        Carro de compra
                    </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    {
                        cart.length > 0 &&
                        <Paper sx={{ paddingX: 5, paddingY: 2 }}>
                            <table className="table">
                                <tr className="table-header">
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                                {
                                    cart.map(product => (
                                        <tr className="table-content">
                                            <td className="product-detail">
                                                <img alt="carro" src={product.img} width="100px" />
                                                <Typography>{product.name}</Typography>
                                                <Typography className="product-price">${product.price}</Typography>
                                            </td>
                                            <td>
                                                <Typography>
                                                    {product.quantity}
                                                </Typography>
                                            </td>
                                            <td>
                                                <Typography>
                                                    ${product.price}
                                                </Typography>
                                            </td>
                                            <td>
                                                <IconButton onClick={() => deleteProduct(product.id)}>
                                                    <Delete />
                                                </IconButton>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </Paper>
                    }
                    {
                        cart.length === 0 &&
                        <Box p={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                            <Typography variant="h4" fontWeight={700}>
                                Carro vacio :(
                            </Typography>
                            <Typography variant="subtitle1">
                                Aun no haz agregado productos al carrito
                            </Typography>
                            <Typography>
                                ¡ Que esperas ! haz click <Link to="/">AQUI</Link> para revisar el catalogo de productos
                            </Typography>
                        </Box>
                    }
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ padding: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <Typography variant="h6" fontWeight={700}>
                            Resumen de tu compra
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <Typography variant="subtitle1" fontWeight={700}>
                                Total
                            </Typography>
                            <Typography>
                                ${total}
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography>
                                    Nombre
                                </Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="text" value={name} onChange={(e) => setName(e.target.value)} />

                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Telefono
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Correo
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={6}>
                                <Link to="/">
                                    <Button variant="contained" color="error">
                                        Volver
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <Button disabled={!name || !phone || !email} variant="contained" color="primary" onClick={makeOrder}>
                                    Ir a pagar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart