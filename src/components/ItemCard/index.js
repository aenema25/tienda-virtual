import { Box, Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import './itemdetail.css'

const ItemCard = ({ product }) => {

    const colors = ["#FED9B7", "#F5EBE0", "#EDF6F9", "#caf0f8", "#f8edeb", "#fefae0", "#f3dae1"]

    return (
        <Box>
            <Grid container spacing={2} alignItems="center" justifyContent={"space-between"} sx={{ minHeight: "450px" }}>
                <Grid item xs={12}>
                    <Box className="product-image" sx={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
                        <img alt="product" src={`https://http2.mlstatic.com/D_NQ_NP_${product.thumbnail_id}-O.webp`} width={'100%'} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" fontWeight={900}>{product.title}</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant={"body1"} fontWeight={600} sx={{ color: "#e63946" }}>
                        ${product.price}
                    </Typography>
                    {product.original_price && <Typography variant={"body2"} fontWeight={600} sx={{ textDecoration: "line-through" }}>${product.original_price}</Typography>}
                </Grid>
                <Grid item xs={12}>
                    <Link to={`/item/${product.id}`}>
                        <Button variant="contained" sx={{ bgcolor: "#e63946", borderRadius: "10px", paddingX: '15px' }}>
                            Ver mas
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ItemCard