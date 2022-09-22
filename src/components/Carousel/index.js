import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Typography } from '@mui/material'
import image1 from "../../assets/carousel1.jpg"
import image2 from "../../assets/carousel2.jpg"
import image3 from "../../assets/carousel3.jpg"

function Example(props) {
    var items = [
        {
            name: "Las mejores zapatillas en un solo lugar",
            description: "Mucho diseños disponible para todos los gustos",
            bgcolor: "#F5EBE0",
            image: image1
        },
        {
            name: "Para todas los gustos, para todos los estilos",
            description: "Encuentra el modelo perfecto solo aca! ",
            bgcolor: "#f1faee",
            image: image2
        },
        {
            name: "Calidad precio garantizado",
            description: "Los mejores precios al alcanze de todos",
            bgcolor: "#f8edeb",
            image: image3
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

function Item(props) {
    return (
        <Paper sx={{ borderRadius: "30px", backgroundColor: props.item.bgcolor, maxHeight: "400px" }}>
            <Grid container alignItems={'center'} >
                <Grid item xs={6} p={5}>
                    <Typography variant="h4" textAlign={"justify"} fontWeight={900}>
                        {props.item.name}
                    </Typography>
                    <Typography variant="h6" textAlign={"justify"} fontWeight={200}>
                        {props.item.description}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={props.item.image} style={{ height: "400px" }} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Example