import { Delete } from "@mui/icons-material"
import { Box, Typography, Container, Button, Grid, Paper, IconButton } from "@mui/material"
import { useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../components/context/CartContext"
import "./cart.css"

const Cart = () => {
    const { cart, deleteProduct } = useContext(CartContext)

    return (

        <Container>
            <Grid container spacing={2} justifyContent="stretch">
                <Grid item xs={12}>
                    <Typography variant="h4" fontWeight={600} textAlign={"justify"}>
                        Carro de compra
                    </Typography>
                </Grid>
                <Grid item xs={9}>
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
                        <Box p={5} sx={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
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
                <Grid item xs={3}>
                    <Paper sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <Typography variant="h6" fontWeight={700}>
                            Resumen de tu compra
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <Typography variant="subtitle1" fontWeight={700}>
                                Total
                            </Typography>
                            <Typography>
                                ${cart.reduce((previousvalue, product) => previousvalue + (product.quantity * product.price), 0)}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                            <Link to="/">
                                <Button variant="contained" color="error">
                                    Volver
                                </Button>
                            </Link>
                            <Button variant="contained" color="primary">
                                Ir a pagar
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cart