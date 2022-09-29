import { Box, Grid } from "@mui/material"
import ItemCard from "../ItemCard"

const ProductsContainer = ({ products }) => {

    return (
        <Box sx={{paddingTop:"20px"}}>
            <Grid container spacing={5} justifyContent="center" alignItems="stretch" >
                {
                    products.map((product,index) => (
                        <Grid item xs={3} key={index}>
                            <ItemCard product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ProductsContainer