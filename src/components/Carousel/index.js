import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Typography } from '@mui/material'
import image1 from "../../assets/carousel1.jpg"
import image2 from "../../assets/carousel2.jpg"
import image3 from "../../assets/carousel3.jpg"

const HomeCarousel = () => {
    const items = [
        {
            name: "Las mejores zapatillas en un solo lugar",
            description: "Mucho diseños disponible para todos los gustos",
            bgcolor: "#F5EBE0",
            image: image1,
            key: 1,
        },
        {
            name: "Para todas los gustos, para todos los estilos",
            description: "Encuentra el modelo perfecto solo aca! ",
            bgcolor: "#f1faee",
            image: image2,
            key: 2,
        },
        {
            name: "Calidad precio garantizado",
            description: "Los mejores precios al alcanze de todos",
            bgcolor: "#f8edeb",
            image: image3,
            key: 3,
        }
    ]

    return (
        <Carousel indicators={false}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

const Item = ({ item }) => (
    <Paper sx={{ borderRadius: "30px", backgroundColor: item.bgcolor, maxHeight: "400px" }}>
        <Grid container alignItems={'center'} >
            <Grid item xs={12} sm={6} md={8}p={5}>
                <Typography variant="h4" textAlign={"justify"} fontWeight={900}>
                    {item.name}
                </Typography>
                <Typography variant="h6" textAlign={"justify"} fontWeight={200}>
                    {item.description}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{display:{xs:"none", sm:"inherit"}}}>
                <img alt={`carrousel-${item.key}`} src={item.image} style={{height: "400px" }} />
            </Grid>
        </Grid>
    </Paper>
)


export default HomeCarousel