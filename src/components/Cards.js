import React from "react";
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Sobre nuestros servicios</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/corte-plancha.jpeg"
                        text="Planchas de acero inoxidable hasta 15 mm de espesor x 6000 mm"
                        label="CORTE DE PLACHA CON
                        CIZALLA HIDRAULICACIZALLA HIDRA"
                        path="/services"
                        />

                        <CardItem 
                        src="images/plegado-plancha.jpeg"
                        text="Capacidad: Hasta 20 mm de
                        espesor x 6000 mm"
                        label="PLEGADO DE PLANCHAS
                        CON PLEGADORACON PLEGADORA
                        HIDRAULICAHIDRAULICA"
                        path="/services"
                        />  

                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/rolado-plancha.jpeg"
                        text="Capacidad: Hasta 10mm de espesor
                        x 2500mm"
                        label="ROLADO DE PLANCHAS"
                        path="/services"
                        />

                        <CardItem 
                        src="images/barolado-tubo.jpeg"
                        text="Realizamos barolado de tubos
                        redondos hasta 6 pulgadas de diámetro, en
                        IPN de 160, en HEB de 140, tubos
                        cuadrados, rectangulares, varillas y
                        platinas"
                        label="BAROLADO DE TUBOS Y
                        PERFILESPERFILES"
                        path="/services"
                        />  

                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="images/doblado-tuberia.jpeg"
                        text="Realizamos doblado de tubo
                        redondo y cuadrado. Capacidad: hasta 3 pulgadas de diámetro"
                        label="DOBLADO DE TUBERIA"
                        path="/services"
                        />

                        <CardItem 
                        src="images/rosca-pernos.jpeg"
                        text="Roscamos tubos con capacidad de hasta 4 pulgadas de diametro y pernos has 2 pulgas de diametro"
                        label="ROSCADO DE TUBOS Y
                        PERNOSPERNO"
                        path="/services"
                        />  

                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Cards;