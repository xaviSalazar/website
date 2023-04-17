import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';


const images = [
    {
        src:"https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/equipos_de_soldadura.jpg",
        // text:"Torno CNC / CENTRO DE MECANIZADO",
        label:"Equipos de Soldadura",
    },
    {
        src:"https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/filtros_de_aire.jpg",
        // text:"Planchas de acero inoxidable hasta 15 mm de espesor x 6000 mm",
        label:"Filtros de Aire",
    },
    {
        src:"https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/pernos_.jpg",
        // text:"Capacidad: Hasta 20 mm de espesor x 6000 mm", 
        label:"Pernos-Tornillería (Elementos de Fijación)",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/aire_acondicionado.jpg",
        // text: "Capacidad: Hasta 10mm de espesor x 2500mm",
        label: "Productos de Aire Acondicionado Automotriz",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/prod_ferreteria.jpg",
        // text: "Realizamos barolado de tubos redondos hasta 6 pulgadas de diámetro, en IPN de 160, en HEB de 140, tubos cuadrados, rectangulares, varillas y platinas",
        label: "Productos de Ferretería",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/productos_de_hidraulica.PNG",
        // text: "Realizamos doblado de tubo redondo y cuadrado. Capacidad: hasta 3 pulgadas de diámetro",
        label: "Productos de Ingeniería Hidráulica",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/repuestos_automotrices.jpg",
        // text: "Roscamos tubos con capacidad de hasta 4 pulgadas de diametro y pernos has 2 pulgas de diametro",
        label: "Repuestos Automotrices",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/sellos_hidraulicos_neumaticos.jpg",
        // text: "Contamos con troqueladora de 70 TON de presión para producción en serie.",
        label: "Sellos Hidráulicos y Neumáticos (O-RING)",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/tuberia_.jpg",
        // text: "Smaw, Tig, Mig, Servicios de calidad NDT",
        label: "Tubería y Accesorios de Cobre",
    },
    {
        src: "https://d1d5i0xjsb5dtw.cloudfront.net/productos-criollo/valvulas_industriales.jpg",
        // text: "Realizamos el rebordeado y bombeado para tapas de tanques hasta un diámetro de 5000mm x12mm de espesor",
        label: "Válvulas Industriales",
    },
  ];



export default function Productos() {
    return (
<Container maxWidth>
    <Grid container spacing = {3}>
        {images.map((image) => (
            <Grid key = {image.label} item xs = {12} sm={12} md={4}>
                <Card 
                    raised
                    sx={{ 
                        maxWidth: 600,
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                    <CardMedia
                        component="img"
                        alt={image.label}
                        height="300"
                        image={image.src}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "fill" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {image.label}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Container>
    )
}