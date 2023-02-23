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
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/corte-plancha.jpeg"
                        text="Planchas de acero inoxidable hasta 15 mm de espesor x 6000 mm"
                        label="CORTE DE PLACHA CON
                        CIZALLA HIDRAULICACIZALLA HIDRA"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/plegado-plancha.jpeg"
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
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/rolado-plancha.jpeg"
                        text="Capacidad: Hasta 10mm de espesor
                        x 2500mm"
                        label="ROLADO DE PLANCHAS"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/barolado-tubo.jpeg"
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
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/doblado-tuberia.jpeg"
                        text="Realizamos doblado de tubo
                        redondo y cuadrado. Capacidad: hasta 3 pulgadas de diámetro"
                        label="DOBLADO DE TUBERIA"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/rosca-pernos.jpeg"
                        text="Roscamos tubos con capacidad de hasta 4 pulgadas de diametro y pernos has 2 pulgas de diametro"
                        label="ROSCADO DE TUBOS Y
                        PERNOSPERNO"
                        path="/services"
                        />  
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/troquelado.jpeg"
                        text="Contamos con troqueladora de 70
                        TON de presión para producción en
                        serie."
                        label="TROQUELADO"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/soldadura.jpeg"
                        text="Smaw, Tig, Mig, Servicios de calidad NDT"
                        label="SOLDADURA"
                        path="/services"
                        />  
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/tapas-casquetes.jpeg"
                        text="Realizamos el rebordeado y
                        bombeado para tapas de tanques
                        hasta un diámetro de 5000mm
                        x12mm de espesor"
                        label="FABRICACIÓN DE TAPAS
                        Y CASQUETES"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/frojado-frio.jpeg"
                        text="Realizamos el trabajo de forjado en
                        frio para cerrajería ornamental."
                        label="SERVICIO DE FORJADO
                        EN FRIO"
                        path="/services"
                        />  
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/cnc-plasma.jpeg"
                        text="Realizamos corte por plasma hasta
                        16mm de espesor y con Oxicorte
                        hasta 50mm de espeso"
                        label="CORTE MULTIPLE Y
                        PUNZONADO"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/corte-punzado.jpeg"
                        text="Placas perforada para anclaje en
                        varias mediadas y espesores."
                        label="SERVICIO DE FORJADO
                        EN FRIO"
                        path="/services"
                        />  
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/perforados.jpeg"
                        text="Realizamos perforados con taladro radial hasta 2 pulgadas de diámetro"
                        label="PERFORADOS"
                        path="/services"
                        />

                        <CardItem 
                        src="https://d1d5i0xjsb5dtw.cloudfront.net/torno-cnc.jpeg"
                        text="Torno CNC. CENTRO DE MECANIZADO"
                        label="MAQUINARIA CNC"
                        path="/services"
                        />  
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Cards;