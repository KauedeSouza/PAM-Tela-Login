import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {Image} from 'react-native';
import estilo from "../estilos";

export default function Header(){
return (
<LinearGradient
    colors={["black", "#FF4500"]}
    style={estilo.gradientBackground}
  >

      <Image source = {{ uri :'https://i.pinimg.com/originals/8e/96/47/8e9647c36015a48e7ed5d02c3e1885e2.png'}}
      style = {estilo.Image}
      /> 


  </LinearGradient>
)

}
