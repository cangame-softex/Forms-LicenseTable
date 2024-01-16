import React from "react";
import LayoutHome from "./LayoutHome";
import Layout from "./Layout";
import styles from '../css/Home.css';
import { Link } from "react-router-dom";
import contrato from '../img/Contrat.jpg';
import controle from '../img/Control.jpg';
import licenças from '../img/License.jpg';

const Home = ({children}) => {
    return(
        <LayoutHome>

            {children}

        </LayoutHome>
    )
}

export default Home;
