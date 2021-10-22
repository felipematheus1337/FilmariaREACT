import  {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './erro.css';
import Image from './404.png';

export default function Notfound() {
    return(
     <div>
         <img class="imagem" src={Image} alt="404"/>
         
             
       
     </div>
    )
}   